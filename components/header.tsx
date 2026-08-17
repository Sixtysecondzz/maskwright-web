"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";

const links = [
  { href: "/#privacy", label: "Privacy" },
  { href: "/#features", label: "Features" },
  { href: "/blog", label: "Blog" },
  { href: "/compare", label: "Compare" },
  { href: "/download", label: "Download" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            href="/download"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink hover:bg-accent-hover transition-colors"
          >
            Get the app
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden rounded-md border border-line px-3 py-1.5 text-sm text-muted"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {open ? (
        <div className="border-t border-line px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-muted hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/download"
              className="mt-1 inline-flex w-fit rounded-full bg-accent px-4 py-2 font-semibold text-accent-ink"
              onClick={() => setOpen(false)}
            >
              Get the app
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
