const items = [
  {
    q: "What is an anti-detect browser?",
    a: "It is a browser that runs many separate profiles, each with its own cookies, storage, and device fingerprint, so websites see them as different people on different machines. MaskWright does this entirely on your own PC.",
  },
  {
    q: "Where are my profiles stored?",
    a: "On your computer, in the app's local data folder, encrypted at rest. They are never uploaded to MaskWright, because there is no MaskWright cloud to upload them to.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. There is no sign up and no login. You install the app and start forging profiles right away, fully offline if you like.",
  },
  {
    q: "Is it really free?",
    a: "Yes, 100% free with no upcharges, seats, or profile caps. A small optional sponsor slot inside the app covers the costs, and you can ignore it.",
  },
  {
    q: "Does MaskWright include proxies?",
    a: "No, and that is on purpose. You bring your own HTTP, HTTPS, or SOCKS5 proxy. MaskWright then aligns language and timezone to that proxy's exit so the profile stays consistent.",
  },
  {
    q: "How is this different from Multilogin, GoLogin, or AdsPower?",
    a: "Those are cloud services built around accounts, team seats, profile sync, and subscriptions. MaskWright is a local app you own. Nothing syncs to a vendor, there are no seats, and it is free.",
  },
  {
    q: "Which platforms are supported?",
    a: "Windows 10 and 11 today. This is an early operator build, and the installer may be unsigned until code signing is in place, so Windows may show a publisher warning.",
  },
];

export function Faq() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="mono text-xs uppercase tracking-[0.28em] text-accent">
        Answers
      </p>
      <h2 className="display mt-5 text-3xl tracking-tight sm:text-4xl">
        Questions people ask first.
      </h2>
      <div className="mt-10 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line text-dim transition group-open:rotate-45 group-open:border-accent group-open:text-accent">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-prose text-sm leading-6 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
