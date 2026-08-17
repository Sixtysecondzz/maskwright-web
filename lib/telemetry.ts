import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

export const TELEMETRY_EVENTS = [
  "download",
  "install",
  "first_open",
  "launch",
  "active",
  "profile_start",
  "uninstall",
] as const;

export type TelemetryEventName = (typeof TELEMETRY_EVENTS)[number];

export type TelemetryIngest = {
  e: TelemetryEventName;
  v?: string;
  id?: string;
  src?: string;
};

type DayBucket = {
  counts: Record<TelemetryEventName, number>;
  downloadVisitors: string[];
  activeIds: string[];
};

type StoreShape = {
  totals: Record<TelemetryEventName, number>;
  installIds: string[];
  days: Record<string, DayBucket>;
};

export type TelemetryDayRow = {
  date: string;
  counts: Record<TelemetryEventName, number>;
  uniqueDownloads: number;
  uniqueActive: number;
};

export type TelemetryStats = {
  backend: "redis" | "file" | "memory";
  totals: Record<TelemetryEventName, number>;
  uniqueInstalls: number;
  days: TelemetryDayRow[];
};

const EMPTY_COUNTS = (): Record<TelemetryEventName, number> => {
  const counts = {} as Record<TelemetryEventName, number>;
  for (const e of TELEMETRY_EVENTS) counts[e] = 0;
  return counts;
};

const FILE_PATH = join(process.cwd(), "data", "telemetry.json");
const DAY_KEEP = 90;

let memoryStore: StoreShape = emptyStore();
let writeChain: Promise<void> = Promise.resolve();

function emptyStore(): StoreShape {
  return { totals: EMPTY_COUNTS(), installIds: [], days: {} };
}

function emptyDay(): DayBucket {
  return { counts: EMPTY_COUNTS(), downloadVisitors: [], activeIds: [] };
}

export function isTelemetryEvent(value: unknown): value is TelemetryEventName {
  return (
    typeof value === "string" &&
    (TELEMETRY_EVENTS as readonly string[]).includes(value)
  );
}

export function utcDay(d = new Date()): string {
  return d.toISOString().slice(0, 10);
}

function sha16(value: string): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 16);
}

export function visitorId(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "";
  const ua = request.headers.get("user-agent") || "";
  return sha16(`${ip}\n${ua}`);
}

function hasRedis(): boolean {
  return Boolean(
    process.env.UPSTASH_REDIS_REST_URL?.trim() &&
      process.env.UPSTASH_REDIS_REST_TOKEN?.trim(),
  );
}

async function redisPipeline(commands: (string | number)[][]): Promise<unknown[]> {
  const url = process.env.UPSTASH_REDIS_REST_URL!.replace(/\/$/, "");
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;
  const res = await fetch(`${url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`telemetry redis ${res.status}`);
  }
  const rows = (await res.json()) as Array<{ result?: unknown }>;
  return rows.map((row) => row.result);
}

function pruneStore(store: StoreShape): void {
  const cutoff = new Date();
  cutoff.setUTCDate(cutoff.getUTCDate() - DAY_KEEP);
  const minDay = utcDay(cutoff);
  for (const day of Object.keys(store.days)) {
    if (day < minDay) delete store.days[day];
  }
  if (store.installIds.length > 50_000) {
    store.installIds = store.installIds.slice(-40_000);
  }
}

async function readFileStore(): Promise<StoreShape> {
  try {
    const raw = await readFile(FILE_PATH, "utf8");
    const parsed = JSON.parse(raw) as StoreShape;
    if (!parsed.totals || !parsed.days) return emptyStore();
    return parsed;
  } catch {
    return emptyStore();
  }
}

async function writeFileStore(store: StoreShape): Promise<void> {
  pruneStore(store);
  await mkdir(dirname(FILE_PATH), { recursive: true });
  await writeFile(FILE_PATH, JSON.stringify(store), "utf8");
}

function applyLocal(store: StoreShape, event: TelemetryIngest, visitor?: string): void {
  const day = utcDay();
  store.totals[event.e] = (store.totals[event.e] ?? 0) + 1;
  const bucket = store.days[day] ?? emptyDay();
  bucket.counts[event.e] = (bucket.counts[event.e] ?? 0) + 1;
  if (event.e === "download" && visitor && !bucket.downloadVisitors.includes(visitor)) {
    bucket.downloadVisitors.push(visitor);
  }
  const anon = event.id ? sha16(event.id) : "";
  if (anon && (event.e === "active" || event.e === "first_open") && !bucket.activeIds.includes(anon)) {
    bucket.activeIds.push(anon);
  }
  if (anon && (event.e === "install" || event.e === "first_open") && !store.installIds.includes(anon)) {
    store.installIds.push(anon);
  }
  store.days[day] = bucket;
}

function localStats(store: StoreShape, backend: TelemetryStats["backend"]): TelemetryStats {
  const days = Object.keys(store.days)
    .sort()
    .slice(-DAY_KEEP)
    .reverse()
    .map((date) => {
      const bucket = store.days[date]!;
      return {
        date,
        counts: { ...EMPTY_COUNTS(), ...bucket.counts },
        uniqueDownloads: bucket.downloadVisitors.length,
        uniqueActive: bucket.activeIds.length,
      };
    });
  return {
    backend,
    totals: { ...EMPTY_COUNTS(), ...store.totals },
    uniqueInstalls: store.installIds.length,
    days,
  };
}

async function ingestRedis(event: TelemetryIngest, visitor?: string): Promise<void> {
  const day = utcDay();
  const commands: (string | number)[][] = [
    ["INCR", `mw:t:${event.e}`],
    ["INCR", `mw:d:${day}:${event.e}`],
    ["SADD", "mw:days", day],
  ];
  if (event.e === "download" && visitor) {
    commands.push(["SADD", `mw:d:${day}:dl`, visitor]);
  }
  const anon = event.id ? sha16(event.id) : "";
  if (anon && (event.e === "active" || event.e === "first_open")) {
    commands.push(["SADD", `mw:d:${day}:au`, anon]);
  }
  if (anon && (event.e === "install" || event.e === "first_open")) {
    commands.push(["SADD", "mw:installs", anon]);
  }
  await redisPipeline(commands);
}

async function readRedisStats(): Promise<TelemetryStats> {
  const dayList = ((await redisPipeline([["SMEMBERS", "mw:days"]]))[0] ?? []) as string[];
  const days = [...dayList].sort().slice(-DAY_KEEP).reverse();
  const commands: (string | number)[][] = TELEMETRY_EVENTS.map((e) => ["GET", `mw:t:${e}`]);
  commands.push(["SCARD", "mw:installs"]);
  for (const day of days) {
    for (const e of TELEMETRY_EVENTS) commands.push(["GET", `mw:d:${day}:${e}`]);
    commands.push(["SCARD", `mw:d:${day}:dl`], ["SCARD", `mw:d:${day}:au`]);
  }
  const results = await redisPipeline(commands);
  const totals = EMPTY_COUNTS();
  TELEMETRY_EVENTS.forEach((e, i) => {
    totals[e] = Number(results[i] ?? 0) || 0;
  });
  const uniqueInstalls = Number(results[TELEMETRY_EVENTS.length] ?? 0) || 0;
  let offset = TELEMETRY_EVENTS.length + 1;
  const stride = TELEMETRY_EVENTS.length + 2;
  const rows: TelemetryDayRow[] = days.map((date) => {
    const counts = EMPTY_COUNTS();
    TELEMETRY_EVENTS.forEach((e, i) => {
      counts[e] = Number(results[offset + i] ?? 0) || 0;
    });
    const uniqueDownloads = Number(results[offset + TELEMETRY_EVENTS.length] ?? 0) || 0;
    const uniqueActive = Number(results[offset + TELEMETRY_EVENTS.length + 1] ?? 0) || 0;
    offset += stride;
    return { date, counts, uniqueDownloads, uniqueActive };
  });
  return { backend: "redis", totals, uniqueInstalls, days: rows };
}

function withLock(fn: () => Promise<void>): Promise<void> {
  const run = writeChain.then(fn, fn);
  writeChain = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

export async function ingestTelemetry(
  event: TelemetryIngest,
  request?: Request,
): Promise<void> {
  const visitor = request ? visitorId(request) : undefined;
  if (hasRedis()) {
    await ingestRedis(event, visitor);
    return;
  }
  if (process.env.VERCEL) {
    applyLocal(memoryStore, event, visitor);
    return;
  }
  await withLock(async () => {
    const store = await readFileStore();
    applyLocal(store, event, visitor);
    await writeFileStore(store);
  });
}

export async function readTelemetryStats(): Promise<TelemetryStats> {
  if (hasRedis()) return readRedisStats();
  if (process.env.VERCEL) return localStats(memoryStore, "memory");
  return localStats(await readFileStore(), "file");
}

export function statsKeyOk(key: string | undefined): boolean {
  const expected = process.env.TELEMETRY_STATS_KEY?.trim();
  if (!expected) return process.env.NODE_ENV !== "production";
  return Boolean(key) && key === expected;
}
