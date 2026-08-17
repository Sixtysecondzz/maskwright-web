import Link from "next/link";
import { Faq } from "@/components/faq";
import { MaskMark } from "@/components/mask-mark";
import { ProductMock } from "@/components/product-mock";

const trust = ["Windows 10 / 11", "No account", "Nothing synced", "100% free"];

const stays = [
  "Your profiles and their names",
  "Fingerprints and device settings",
  "Cookies, logins, and sessions",
  "Proxy addresses and credentials",
  "Everywhere you browse",
];

const leaves = [
  {
    label: "A version check",
    note: "The app can ask if a newer build exists. It sends no profile data.",
  },
  {
    label: "An optional ad feed",
    note: "Sponsor slots load a small public JSON file. It keeps the app free.",
  },
  {
    label: "The sites you open",
    note: "Whatever you visit talks to those sites, the same as any browser.",
  },
];

const features = [
  {
    title: "Sealed profiles",
    body: "Every profile is its own room. Separate cookies, storage, logins, and fingerprint, so one account can never see the others.",
  },
  {
    title: "Believable identities",
    body: "User agent, screen, GPU, fonts, languages, and timezone are shaped into one consistent device, not random noise that gets you flagged.",
  },
  {
    title: "Your proxy, matched",
    body: "Attach any HTTP or SOCKS5 proxy. Language and timezone follow its exit, so the profile looks like it truly lives there.",
  },
  {
    title: "Stored on your disk",
    body: "Profiles are written to your machine and encrypted at rest. There is no MaskWright server holding your sessions, because there is no server.",
  },
  {
    title: "A real browser core",
    body: "A purpose-built Chromium handles the GPU, font, and process details that a script bolted onto ordinary Chrome cannot reach.",
  },
  {
    title: "Run a batch at once",
    body: "Bring a set of profiles up or down in a click and watch them run, right on your own desktop.",
  },
];

const steps = [
  {
    n: "01",
    title: "Forge a profile",
    body: "Name it, pick the device it should look like, and MaskWright builds a coherent fingerprint. It writes straight to local storage.",
  },
  {
    n: "02",
    title: "Attach your proxy",
    body: "Paste an endpoint. MaskWright lines up language and timezone with that exit so nothing about the session contradicts itself.",
  },
  {
    n: "03",
    title: "Launch and work",
    body: "Open one profile or a whole batch. Each keeps its own cookies and history in its own folder, never in a shared browser.",
  },
];

const uses = [
  {
    title: "Multiple storefronts",
    body: "Run separate marketplace accounts with their own identity and proxy, without them ever linking to each other.",
  },
  {
    title: "Ad and social accounts",
    body: "Keep campaign logins apart so pixels and sessions from one brand never bleed into another.",
  },
  {
    title: "Testing and research",
    body: "See a page the way another device, region, and network would see it, without renting a farm of machines.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MaskWright",
    applicationCategory: "BrowserApplication",
    operatingSystem: "Windows",
    url: "https://maskwright.com",
    description:
      "MaskWright is a private, local anti-detect browser. It forges isolated browser identities on your own machine, with nothing synced to a cloud vendor. 100% free.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="ember-glow relative overflow-hidden border-b border-line">
        <div className="blueprint pointer-events-none absolute inset-0" aria-hidden="true" />
        <MaskMark
          size={520}
          className="float-slow pointer-events-none absolute -right-24 -top-24 opacity-[0.06] blur-[1px]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-24 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pt-24">
          <div className="rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-panel/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              The private anti-detect browser
            </div>
            <h1 className="display mt-6 text-[2.9rem] leading-[1.02] tracking-[-0.02em] sm:text-[4.1rem]">
              A new identity for every account.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              MaskWright forges a separate, believable browser identity for each
              account you run and keeps every one of them on your own computer.
              No cloud login, nothing synced to a vendor, and it is completely
              free.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/download"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink shadow-[0_10px_30px_-8px_rgba(255,106,61,0.6)] transition hover:bg-accent-hover"
              >
                Download for Windows
              </Link>
              <Link
                href="#privacy"
                className="rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition hover:bg-hover"
              >
                What stays private
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-dim">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-accent">/</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rise [animation-delay:120ms]">
            <ProductMock />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden border-b border-line bg-bg-deep">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="mono text-xs uppercase tracking-[0.28em] text-accent">
            Our stance
          </p>
          <h2 className="display mt-6 max-w-4xl text-3xl leading-[1.15] tracking-tight sm:text-5xl">
            Your online identity should belong to you. Not to a company&apos;s
            database, and not to a subscription.
          </h2>
          <div className="mt-10 grid gap-8 text-lg leading-8 text-muted md:grid-cols-2">
            <p>
              The big anti-detect apps keep your profiles on their servers, meter
              you by the seat, and hand you back your own identities through a
              login. If their systems are breached or their billing lapses, your
              accounts are exposed.
            </p>
            <p>
              MaskWright takes the opposite side. Every identity is forged and
              stored on the machine in front of you. We run no cloud that could
              hold your data, so there is nothing to leak, nothing to lock behind
              a paywall, and no reason to charge you. It is free, and it stays
              free.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy ledger */}
      <section id="privacy" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
        <div className="max-w-2xl">
          <p className="mono text-xs uppercase tracking-[0.28em] text-accent">
            Full transparency
          </p>
          <h2 className="display mt-5 text-3xl tracking-tight sm:text-5xl">
            Here is exactly what leaves your computer.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            No dark patterns and no fine print. This is the whole list.
          </p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-line bg-panel p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-elevated ring-1 ring-line-strong">
                <MaskMark size={18} />
              </span>
              <h3 className="text-base font-semibold">Stays on your machine, always</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {stays.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[15px] text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-sm leading-6 text-dim">
              None of this is ever uploaded, synced, or sent to MaskWright. We
              have no account system and no server that could receive it.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-bg p-8">
            <h3 className="text-base font-semibold text-muted">
              Leaves only if you let it
            </h3>
            <ul className="mt-6 space-y-5">
              {leaves.map((l) => (
                <li key={l.label}>
                  <p className="text-[15px] font-medium text-ink">{l.label}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{l.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Feature ledger */}
      <section id="features" className="border-y border-line bg-bg-deep py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display max-w-xl text-3xl tracking-tight sm:text-5xl">
              A workshop for identities, not a dashboard for your data.
            </h2>
            <p className="mono text-xs uppercase tracking-[0.22em] text-dim">
              06 tools
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <article
                key={f.title}
                className="group relative bg-panel p-7 transition hover:bg-elevated"
              >
                <span className="mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="display text-3xl tracking-tight sm:text-5xl">
          Three steps from install to a running identity.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.n}
              className="relative rounded-2xl border border-line bg-panel p-7"
            >
              <p className="display text-5xl text-accent/80">{s.n}</p>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="border-y border-line bg-panel/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="display text-3xl tracking-tight sm:text-4xl">
            Made for people who juggle real accounts.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {uses.map((u) => (
              <article
                key={u.title}
                className="rounded-2xl border border-line bg-bg p-7"
              >
                <h3 className="font-semibold">{u.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{u.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-6 text-dim">
            MaskWright is a privacy tool. Use it to protect legitimate accounts
            and follow the terms of the sites you visit.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Faq />
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-line bg-bg-deep">
        <MaskMark
          size={360}
          className="pointer-events-none absolute -bottom-20 right-6 opacity-[0.05]"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-20 sm:flex-row sm:items-center">
          <div>
            <h2 className="display text-3xl tracking-tight sm:text-4xl">
              Keep your identities on the machine you already trust.
            </h2>
            <p className="mt-3 max-w-lg text-muted">
              Free to download. No account to create. Windows build available
              now.
            </p>
          </div>
          <Link
            href="/download"
            className="shrink-0 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink shadow-[0_10px_30px_-8px_rgba(255,106,61,0.6)] transition hover:bg-accent-hover"
          >
            Download MaskWright
          </Link>
        </div>
      </section>
    </>
  );
}
