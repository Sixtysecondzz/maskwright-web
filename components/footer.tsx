import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-4">
        <div className="sm:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            Local multi-profile anti-detect browser. Profiles, fingerprints, and
            proxies stay on your Windows machine.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dim">
            Product
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link href="/#features" className="hover:text-ink">
                Features
              </Link>
            </li>
            <li>
              <Link href="/compare" className="hover:text-ink">
                vs cloud antidetect
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-ink">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/download" className="hover:text-ink">
                Download
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dim">
            Legal
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link href="/privacy" className="hover:text-ink">
                Privacy
              </Link>
            </li>
            <li>
              <a
                href="https://updates.maskwright.com"
                className="hover:text-ink"
              >
                Updates feed
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-dim">
          <span>© {new Date().getFullYear()} MaskWright</span>
          <span>Windows operator beta · no cloud sync</span>
        </div>
      </div>
    </footer>
  );
}
