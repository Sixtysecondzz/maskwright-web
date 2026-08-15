import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "MaskWright is local-first. Profiles stay on your device. Optional ads and update checks only.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="display text-4xl tracking-tight sm:text-5xl">Privacy</h1>
      <p className="mt-3 text-sm text-dim">Last updated: August 2026</p>

      <div className="mt-8 space-y-8 text-[15px] leading-7 text-muted">
        <p>
          MaskWright is a local-first desktop application. Your profiles,
          fingerprints, cookies, proxy settings, and related browser state stay
          on your device in the app’s local application data directory. We do
          not require a MaskWright account or cloud login for core use, and we
          do not sync that local data to a MaskWright cloud account.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-ink">What stays on your device</h2>
          <p className="mt-3">
            Profile configuration and session-related data are written and read
            locally by the desktop app. You control that machine; uninstalling
            or deleting the app data removes it according to your OS and install
            choices.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-ink">Optional network use</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Packaged builds may request a remote ads JSON feed (
              <code className="text-ink">maskwright.com/ads/v1/creatives.json</code>
              ) to show optional creatives in the UI.
            </li>
            <li>
              Packaged builds may check{" "}
              <code className="text-ink">updates.maskwright.com</code> for
              available version updates.
            </li>
            <li>
              If you open a sponsored or external link, it opens in your system
              browser; those sites have their own privacy practices.
            </li>
          </ul>
          <p className="mt-3">
            These network calls are for ads and updates only. They are not used
            to upload your local profiles or account credentials to MaskWright.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-ink">Third-party sites</h2>
          <p className="mt-3">
            When you browse the web with MaskWright, the sites you visit may
            collect data under their own terms and privacy policies. That
            activity is between you and those sites; MaskWright does not operate
            those services.
          </p>
        </section>

        <p>
          Questions:{" "}
          <Link href="/" className="text-accent hover:text-accent-hover">
            maskwright.com
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
