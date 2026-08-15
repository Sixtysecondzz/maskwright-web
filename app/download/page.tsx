import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download",
  description: "Download MaskWright for Windows. Local multi-profile anti-detect browser.",
};

const WIN_SETUP = "https://updates.maskwright.com/MaskWright-Setup-0.1.0.exe";

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        Windows x64
      </p>
      <h1 className="display mt-4 text-4xl tracking-tight sm:text-5xl">
        Download MaskWright
      </h1>
      <p className="mt-5 text-lg leading-8 text-muted">
        Operator beta 0.1.0. NSIS installer. Profiles stay in local app data.
        The first public file lands on{" "}
        <a className="text-accent hover:text-accent-hover" href="https://updates.maskwright.com">
          updates.maskwright.com
        </a>{" "}
        until that upload exists, the button may 404.
      </p>

      <a
        href={WIN_SETUP}
        className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink hover:bg-accent-hover"
      >
        Download MaskWright-Setup-0.1.0.exe
      </a>

      <div className="mt-12 rounded-2xl border border-line bg-panel p-6">
        <h2 className="text-base font-semibold">Before you install</h2>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
          <li>Windows 10/11 x64. macOS and Linux packs are not the public channel yet.</li>
          <li>
            The installer may be unsigned. SmartScreen “unknown publisher” is expected
            until Authenticode signing is live.
          </li>
          <li>You bring proxies. MaskWright does not sell IP transit.</li>
          <li>
            Packaged builds may check this site for ads creatives and the updates host
            for new versions. They do not upload your profiles.
          </li>
        </ul>
      </div>

      <div className="mt-8 text-sm leading-6 text-dim">
        <p className="font-medium text-muted">Build from source</p>
        <p className="mt-2 font-mono text-[13px] text-muted">
          npm run pack:win → apps/desktop/release/
        </p>
      </div>
    </div>
  );
}
