import type { Metadata } from "next";
import { readTelemetryStats, statsKeyOk, TELEMETRY_EVENTS } from "@/lib/telemetry";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const metadata: Metadata = {
  title: "Usage",
  robots: { index: false, follow: false },
};

function labels(): Record<string, string> {
  return {
    download: "Downloads",
    install: "Installer finishes",
    first_open: "First opens",
    launch: "App launches",
    active: "Daily active pings",
    profile_start: "Profile starts",
    uninstall: "Uninstalls",
  };
}

export default async function OpsStatsPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const { key } = await searchParams;
  if (!statsKeyOk(key)) {
    return (
      <div className="mx-auto max-w-lg px-5 py-24 text-center">
        <h1 className="display text-3xl">Usage</h1>
        <p className="mt-4 text-muted">Not found.</p>
      </div>
    );
  }

  const stats = await readTelemetryStats();
  const names = labels();

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        Internal
      </p>
      <h1 className="display mt-3 text-4xl tracking-tight">Downloads and usage</h1>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
        Anonymous product counts for applications and ops. No profiles, proxies,
        or browsing. Storage: {stats.backend}
        {stats.backend === "memory"
          ? " (set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN on Vercel so this survives deploys)."
          : null}
        {stats.backend === "file" ? " (data/telemetry.json on this machine)." : null}
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {(
          [
            ["download", stats.totals.download],
            ["install", stats.totals.install],
            ["first_open", stats.totals.first_open],
            ["uninstall", stats.totals.uninstall],
            ["launch", stats.totals.launch],
            ["active", stats.totals.active],
            ["profile_start", stats.totals.profile_start],
            ["uniqueInstalls", stats.uniqueInstalls],
          ] as const
        ).map(([id, value]) => (
          <div key={id} className="rounded-2xl border border-line bg-panel p-4">
            <div className="text-xs uppercase tracking-[0.16em] text-dim">
              {id === "uniqueInstalls" ? "Unique installs" : names[id]}
            </div>
            <div className="mt-2 font-mono text-3xl text-ink">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-panel text-xs uppercase tracking-[0.14em] text-dim">
            <tr>
              <th className="px-4 py-3 font-medium">Day (UTC)</th>
              {TELEMETRY_EVENTS.map((e) => (
                <th key={e} className="px-3 py-3 font-medium">
                  {e.replaceAll("_", " ")}
                </th>
              ))}
              <th className="px-3 py-3 font-medium">Uniq DL</th>
              <th className="px-3 py-3 font-medium">DAU</th>
            </tr>
          </thead>
          <tbody>
            {stats.days.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-muted" colSpan={TELEMETRY_EVENTS.length + 3}>
                  No events yet.
                </td>
              </tr>
            ) : (
              stats.days.map((row) => (
                <tr key={row.date} className="border-t border-line">
                  <td className="px-4 py-2.5 font-mono text-ink">{row.date}</td>
                  {TELEMETRY_EVENTS.map((e) => (
                    <td key={e} className="px-3 py-2.5 font-mono text-muted">
                      {row.counts[e]}
                    </td>
                  ))}
                  <td className="px-3 py-2.5 font-mono text-muted">{row.uniqueDownloads}</td>
                  <td className="px-3 py-2.5 font-mono text-muted">{row.uniqueActive}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
