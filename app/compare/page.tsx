import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "MaskWright vs Multilogin, GoLogin, and AdsPower. Local operator browser versus cloud antidetect SaaS.",
};

const rows: { label: string; them: string; us: string }[] = [
  {
    label: "Where profiles live",
    them: "Vendor cloud + optional local cache",
    us: "Your Windows app data directory",
  },
  {
    label: "Account to launch",
    them: "Required",
    us: "None",
  },
  {
    label: "Team seats",
    them: "Core product",
    us: "Not offered, by design",
  },
  {
    label: "Pricing model",
    them: "Subscription, profile caps",
    us: "Local app; owned ad slots fund the product",
  },
  {
    label: "Proxies",
    them: "Often bundled / upsold",
    us: "Bring your own HTTP / SOCKS5",
  },
  {
    label: "Browser engine",
    them: "Forked Chromium (and sometimes Firefox)",
    us: "Custom Chromium 131 core + operator UI",
  },
  {
    label: "Cloud phones / Android",
    them: "Multilogin and others sell this",
    us: "No. Desktop profiles only.",
  },
  {
    label: "RPA / window sync",
    them: "AdsPower and peers compete here",
    us: "Not in 0.1. Launch and isolate first.",
  },
  {
    label: "Who it is for",
    them: "Agencies and distributed teams",
    us: "Operators who want the vault on their PC",
  },
];

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        Positioning
      </p>
      <h1 className="display mt-4 max-w-3xl text-4xl tracking-tight sm:text-5xl">
        We are not trying to be a cheaper Multilogin.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
        AdsPower, GoLogin, Octo, and Multilogin win on cloud sync, team
        permissions, and (in some cases) bundled residential traffic. MaskWright
        wins if you do not want that architecture at all.
      </p>

      <div className="mt-12 overflow-hidden rounded-2xl border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-bg-deep text-[11px] uppercase tracking-[0.14em] text-dim">
            <tr>
              <th className="px-4 py-3 font-medium sm:px-6"> </th>
              <th className="px-4 py-3 font-medium sm:px-6">
                Cloud antidetect
                <span className="mt-1 block normal-case tracking-normal text-dim">
                  Multilogin, GoLogin, AdsPower, Octo
                </span>
              </th>
              <th className="px-4 py-3 font-medium text-accent sm:px-6">
                MaskWright
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-line">
                <th className="px-4 py-4 align-top font-medium text-ink sm:px-6">
                  {row.label}
                </th>
                <td className="px-4 py-4 align-top text-muted sm:px-6">
                  {row.them}
                </td>
                <td className="px-4 py-4 align-top text-ink sm:px-6">{row.us}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 max-w-2xl text-sm leading-6 text-dim">
        Competitor features change. This table is a category contrast, not a
        live spec sheet of every paid plan. If you need shared cloud profiles
        and 24/7 team chat, use them. If you need a local workstation, use
        MaskWright.
      </p>

      <Link
        href="/download"
        className="mt-10 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink hover:bg-accent-hover"
      >
        Download the Windows build
      </Link>
    </div>
  );
}
