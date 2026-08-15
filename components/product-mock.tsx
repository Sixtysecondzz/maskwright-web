const rows = [
  {
    name: "Storefront US",
    tag: "marketplaces",
    ua: "Chrome 131",
    geo: "Oregon · en-US",
    proxy: "res.us.4",
    status: "running" as const,
  },
  {
    name: "Ads EU",
    tag: "campaigns",
    ua: "Chrome 131",
    geo: "Frankfurt · de-DE",
    proxy: "res.de.12",
    status: "stopped" as const,
  },
  {
    name: "Research IN",
    tag: "qa",
    ua: "Chrome 131",
    geo: "Mumbai · en-IN",
    proxy: "res.in.9",
    status: "running" as const,
  },
  {
    name: "Seller AU",
    tag: "marketplaces",
    ua: "Chrome 131",
    geo: "Sydney · en-AU",
    proxy: "none",
    status: "stopped" as const,
  },
];

export function ProductMock() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-8 rounded-[2rem] bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-panel shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
        <div className="flex items-center gap-3 border-b border-line bg-elevated px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#3c3f46]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3c3f46]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3c3f46]" />
          </div>
          <div className="flex-1 rounded-md border border-line bg-bg px-3 py-1 text-[11px] text-dim">
            MaskWright · local profiles
          </div>
          <span className="hidden text-[11px] text-dim sm:inline">
            3 running · on disk
          </span>
        </div>
        <div className="grid grid-cols-[44px_minmax(0,1fr)] sm:grid-cols-[44px_168px_minmax(0,1fr)]">
          <div className="flex flex-col items-center gap-3 border-r border-line bg-bg-deep py-3">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-accent text-[13px] font-bold text-accent-ink">
              M
            </span>
            <span className="h-8 w-8 rounded-md bg-accent-soft ring-1 ring-accent/40" />
            <span className="h-8 w-8 rounded-md bg-hover" />
            <span className="h-8 w-8 rounded-md bg-hover" />
          </div>
          <div className="hidden border-r border-line bg-bg-deep p-3 sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-dim">
              Folders
            </p>
            <ul className="mt-3 space-y-1 text-[12px]">
              {["All profiles", "Marketplaces", "Campaigns", "QA"].map(
                (name, i) => (
                  <li
                    key={name}
                    className={`rounded-md px-2 py-1.5 ${
                      i === 0 ? "bg-hover text-ink" : "text-muted"
                    }`}
                  >
                    {name}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="min-w-0">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <p className="text-[13px] font-medium">Profiles</p>
              <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold text-accent-ink">
                Start selected
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-[12px]">
                <thead className="text-[10px] uppercase tracking-[0.12em] text-dim">
                  <tr className="border-b border-line">
                    <th className="px-4 py-2 font-medium">Name</th>
                    <th className="px-3 py-2 font-medium">Fingerprint</th>
                    <th className="px-3 py-2 font-medium">Exit</th>
                    <th className="px-3 py-2 font-medium">Proxy</th>
                    <th className="px-3 py-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.name} className="border-b border-line/70">
                      <td className="px-4 py-2.5">
                        <div className="font-medium text-ink">{row.name}</div>
                        <div className="text-[10px] text-dim">{row.tag}</div>
                      </td>
                      <td className="px-3 py-2.5 font-mono text-[11px] text-muted">
                        {row.ua}
                      </td>
                      <td className="px-3 py-2.5 text-muted">{row.geo}</td>
                      <td className="px-3 py-2.5 font-mono text-[11px] text-muted">
                        {row.proxy}
                      </td>
                      <td className="px-3 py-2.5">
                        {row.status === "running" ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-success-soft px-2 py-0.5 text-[10px] font-medium text-success">
                            <span className="h-1.5 w-1.5 rounded-full bg-success" />
                            running
                          </span>
                        ) : (
                          <span className="text-[10px] text-dim">stopped</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap gap-2 border-t border-line bg-bg-deep px-4 py-2.5 font-mono text-[10px] text-dim">
              <span className="rounded border border-line bg-panel px-2 py-1">
                webdriver: false
              </span>
              <span className="rounded border border-line bg-panel px-2 py-1">
                UA Chrome/131.0.6778.85
              </span>
              <span className="rounded border border-line bg-panel px-2 py-1">
                timezone ← exit IP
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
