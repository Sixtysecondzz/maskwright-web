# maskwright.com

Public marketing site for **MaskWright**, a local Windows-first anti-detect browser.

This repo is split from the desktop/Chromium monorepo so Vercel never builds Electron or custom Chrome.

## Stack

- Next.js (App Router) + Tailwind CSS v4
- Static ads feed at `/ads/v1/creatives.json` (desktop `AdRotator`)

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repo to GitHub (separate from the desktop repo).
2. [vercel.com/new](https://vercel.com/new) → import the repo.
3. Framework: Next.js. Build command `next build`. Output: default.
4. Project → Domains → add `maskwright.com` and `www.maskwright.com`.

### GoDaddy DNS (keep nameservers at GoDaddy)

| Type | Name | Value |
| --- | --- | --- |
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

Do **not** point `updates` here. Installers stay on object storage at `updates.maskwright.com`.

### Cloudflare DNS instead

Add the domain in Vercel, then copy the A/CNAME values Vercel shows. Apex can use Vercel’s `10.0.1.2`-style anycast IPs if they differ from `76.76.21.21`.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Landing |
| `/download` | Windows installer |
| `/compare` | vs cloud antidetect (Multilogin / GoLogin / AdsPower) |
| `/privacy` | Local-first privacy notice |
| `/ads.txt` | IAB ads.txt (Google AdSense) |
| `/sw.js` | Monetag service worker |
| `/electron-ad-test/` | Footer ad bridge 728×90 |
| `/electron-ad-sidebar/` | Sidebar ad bridge 300×250 |
| `/ads/v1/creatives.json` | Desktop ads feed |

## Related

Desktop app + Chromium cores live in the MaskWright product repo, not this site.
