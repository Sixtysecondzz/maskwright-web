export type AuthorId =
  | "Avery Chen"
  | "Sam Okonkwo"
  | "Riley Park"
  | "Jordan Hale"
  | "Priya Nair"
  | "Morgan Ellis";

export type CategoryId =
  | "browser-fingerprinting"
  | "antidetect-browsers"
  | "automation"
  | "proxies"
  | "social-media"
  | "ecommerce"
  | "scraping"
  | "privacy";

export const AUTHORS: Record<AuthorId, { role: string; bio: string }> = {
  "Avery Chen": {
    role: "Technical desk",
    bio: "Writes the fingerprint and Chromium notes for the MaskWright technical desk.",
  },
  "Sam Okonkwo": {
    role: "Proxies desk",
    bio: "Writes the proxy, exit, and leak notes for operators who bring their own line.",
  },
  "Riley Park": {
    role: "Profiles desk",
    bio: "Writes the antidetect and profile-isolation notes for local Windows rooms.",
  },
  "Jordan Hale": {
    role: "Local desk",
    bio: "Writes the local-architecture notes on what stays on disk and what leaves the machine.",
  },
  "Priya Nair": {
    role: "Growth desk",
    bio: "Writes the authorized store, ads, and brand-room notes for one-PC operator desks.",
  },
  "Morgan Ellis": {
    role: "Automation desk",
    bio: "Writes the automation, API, and research-collection notes, including the work this bench refuses.",
  },
};

export const CATEGORIES: Record<
  CategoryId,
  { title: string; excerpt: string; images: string[] }
> = {
  "browser-fingerprinting": {
    title: "Browser fingerprinting",
    excerpt:
      "The surfaces a site can read on a real Windows box, and how those surfaces have to agree.",
    images: [
      "blog-fingerprint-grid.png",
      "blog-canvas-noise.png",
      "blog-browserleaks-lab.png",
    ],
  },
  "antidetect-browsers": {
    title: "Antidetect browsers",
    excerpt:
      "What a multi-profile browser is, how it differs from Chrome plus a VPN, and why we keep the workshop local.",
    images: [
      "blog-isolated-profiles.png",
      "blog-graphite-mask.png",
      "blog-chromium-core.png",
    ],
  },
  automation: {
    title: "Automation",
    excerpt:
      "Playwright, Puppeteer, Selenium, and why a headed profile is not a costume for a script.",
    images: [
      "blog-automation-bench.png",
      "blog-chromium-core.png",
      "blog-launch-checklist.png",
    ],
  },
  proxies: {
    title: "Proxies",
    excerpt:
      "HTTP and SOCKS5 you bring yourself. Exits, leaks, sticky time, and the clock that has to follow.",
    images: [
      "blog-proxy-map.png",
      "blog-webrtc-leak.png",
      "blog-residential-street.png",
    ],
  },
  "social-media": {
    title: "Social media",
    excerpt:
      "Authorized brand and ads rooms on one PC. Isolation hygiene, not a factory for people.",
    images: [
      "blog-social-desk.png",
      "blog-cookie-jar.png",
      "blog-operator-desk.png",
    ],
  },
  ecommerce: {
    title: "Ecommerce",
    excerpt:
      "Storefronts and supplier portals you are allowed to run, split across sealed rooms.",
    images: [
      "blog-isolated-profiles.png",
      "blog-cookie-jar.png",
      "blog-windows-tower.png",
    ],
  },
  scraping: {
    title: "Scraping",
    excerpt:
      "Public pages, official feeds, and a slow hand. A coherent fingerprint is not permission.",
    images: [
      "blog-browserleaks-lab.png",
      "blog-launch-checklist.png",
      "blog-operator-desk.png",
    ],
  },
  privacy: {
    title: "Privacy",
    excerpt:
      "Encryption honesty, what leaves this machine, team seats we refuse, and isolation that stays on disk.",
    images: [
      "blog-encrypted-disk.png",
      "blog-local-vault.png",
      "blog-no-cloud.png",
    ],
  },
};

export const PRODUCT_PAGES = [
  { href: "/", label: "MaskWright" },
  { href: "/download", label: "Download" },
  { href: "/compare", label: "Compare" },
  { href: "/privacy", label: "Privacy" },
] as const;
