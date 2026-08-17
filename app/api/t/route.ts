import { ingestTelemetry, isTelemetryEvent } from "@/lib/telemetry";

const PIXEL = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64",
);

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function parseEvent(input: unknown) {
  if (!input || typeof input !== "object") return null;
  const body = input as Record<string, unknown>;
  if (!isTelemetryEvent(body.e)) return null;
  return {
    e: body.e,
    v: typeof body.v === "string" ? body.v.slice(0, 32) : undefined,
    id: typeof body.id === "string" ? body.id.slice(0, 80) : undefined,
    src: typeof body.src === "string" ? body.src.slice(0, 32) : undefined,
  };
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const e = url.searchParams.get("e");
  if (isTelemetryEvent(e)) {
    try {
      await ingestTelemetry(
        {
          e,
          v: url.searchParams.get("v") ?? undefined,
          id: url.searchParams.get("id") ?? undefined,
          src: url.searchParams.get("src") ?? "pixel",
        },
        request,
      );
    } catch (err) {
      console.warn("[telemetry]", err);
    }
  }
  return new Response(PIXEL, {
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export async function POST(request: Request) {
  try {
    const parsed = parseEvent(await request.json());
    if (!parsed) {
      return Response.json({ ok: false, error: "invalid event" }, { status: 400 });
    }
    await ingestTelemetry(parsed, request);
    return Response.json({ ok: true });
  } catch (err) {
    console.warn("[telemetry]", err);
    return new Response(null, { status: 204 });
  }
}
