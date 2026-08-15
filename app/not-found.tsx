import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="display mt-4 text-4xl">That page is not here.</h1>
      <p className="mt-4 text-muted">The operator console still is.</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink"
      >
        Back to MaskWright
      </Link>
    </div>
  );
}
