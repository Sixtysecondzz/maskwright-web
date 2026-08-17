# Blog QA report (five gates)

Audit date: 16 August 2026  
Auditor: QA (all five gates)  
Scope: read-only. Content map not changed. No strategy recommendations.

Sources: `content-map.csv` (246 slugs, 8 clusters, 8 pillars), `metadata.json` (246 entries, 1:1 with the map), `product-capabilities.md` (16 August 2026), `cannibalization-map.json`, and the post files under `content/blog/posts/`.

Corpus check (not a sample): every map slug has a post and a metadata record. Every metadata record has `metaTitle`, `metaDescription`, and a non-empty `related` list. Every sampled post slug matches the map and its own frontmatter.

---

## Sample

40 posts. Every pillar, plus extras in all 8 clusters. Isolation-family pages were oversampled on purpose because they are the most likely template clones.

### Pillars (all 8)

| Slug | Cluster |
| --- | --- |
| what-is-browser-fingerprinting | browser-fingerprinting |
| what-is-an-antidetect-browser | antidetect-browsers |
| browser-automation-vs-a-real-profile | automation |
| proxies-in-an-antidetect-browser | proxies |
| multiple-accounts-on-one-pc | social-media |
| ecommerce-accounts-on-one-pc | ecommerce |
| what-is-web-scraping | scraping |
| what-leaves-this-machine | privacy |

### Cluster extras

**browser-fingerprinting:** canvas-fingerprinting-on-windows, ja3-ja4-tls-fingerprints, webrtc-modes-disabled-proxy-public-real, timezone-language-and-proxy-country

**antidetect-browsers:** how-antidetect-browsers-work, camoufox-and-firefox-antidetect-notes, free-antidetect-browser-what-free-means, antidetect-browsers-for-smm

**automation:** playwright-and-real-browser-profiles, window-sync-and-rpa-we-will-not-ship, batch-launch-is-not-a-farm

**proxies:** https-proxy-versus-http-forwarder, socks5-versus-http-proxies, residential-proxies-we-do-not-sell

**social-media:** reddit-ads-manager-isolation, linkedin-ads-manager-isolation, instagram-meta-business-suite-isolation, tiktok-ads-manager-isolation, tiktok-pixel-and-cookie-bleed, x-ads-manager-isolation

**ecommerce:** amazon-seller-central-isolation, etsy-shop-isolation, ebay-seller-isolation, shopify-multi-store-isolation, affiliate-self-clicks-are-fraud

**scraping:** scraping-ethics-we-follow, we-will-not-hide-a-scraper, facebook-ads-library-research-locally

**privacy:** profile-encryption-at-rest, ads-in-the-dashboard-not-in-your-tabs, offline-operator-days, why-we-refuse-team-seats

---

## Gate results (sample)

P = pass. F = fail.

| Slug | SEO | Editorial | Technical | Visual | AI-pattern |
| --- | --- | --- | --- | --- | --- |
| what-is-browser-fingerprinting | P | P | P | P | P |
| canvas-fingerprinting-on-windows | P | P | P | P | P |
| ja3-ja4-tls-fingerprints | P | P | P | P | P |
| webrtc-modes-disabled-proxy-public-real | P | P | P | P | P |
| timezone-language-and-proxy-country | P | P | P | P | P |
| what-is-an-antidetect-browser | P | P | P | P | P |
| how-antidetect-browsers-work | P | P | P | P | P |
| camoufox-and-firefox-antidetect-notes | P | P | P | P | P |
| free-antidetect-browser-what-free-means | P | P | P | P | P |
| antidetect-browsers-for-smm | P | P | P | P | P |
| browser-automation-vs-a-real-profile | P | P | P | P | P |
| playwright-and-real-browser-profiles | P | P | P | P | P |
| window-sync-and-rpa-we-will-not-ship | P | P | P | P | P |
| batch-launch-is-not-a-farm | P | P | P | P | P |
| proxies-in-an-antidetect-browser | P | P | P | P | P |
| https-proxy-versus-http-forwarder | P | P | P | P | P |
| socks5-versus-http-proxies | P | P | P | P | P |
| residential-proxies-we-do-not-sell | P | P | P | P | P |
| multiple-accounts-on-one-pc | P | P | P | P | P |
| reddit-ads-manager-isolation | P | P | P | P | P |
| linkedin-ads-manager-isolation | P | P | P | P | P |
| instagram-meta-business-suite-isolation | P | P | P | P | P |
| tiktok-ads-manager-isolation | P | P | P | P | P |
| tiktok-pixel-and-cookie-bleed | P | P | P | P | P |
| x-ads-manager-isolation | P | P | P | P | P |
| ecommerce-accounts-on-one-pc | P | P | P | P | P |
| amazon-seller-central-isolation | P | P | P | P | P |
| etsy-shop-isolation | P | P | P | P | P |
| ebay-seller-isolation | P | P | P | P | P |
| shopify-multi-store-isolation | P | P | P | P | P |
| affiliate-self-clicks-are-fraud | P | P | P | P | P |
| what-is-web-scraping | P | P | P | P | P |
| scraping-ethics-we-follow | P | P | P | P | P |
| we-will-not-hide-a-scraper | P | P | P | P | P |
| facebook-ads-library-research-locally | P | P | P | P | P |
| what-leaves-this-machine | P | P | P | P | P |
| profile-encryption-at-rest | P | P | P | P | P |
| ads-in-the-dashboard-not-in-your-tabs | P | P | P | P | P |
| offline-operator-days | P | P | P | P | P |
| why-we-refuse-team-seats | P | P | P | P | P |

### Gate 1: SEO

Primary keywords land as natural titles or close variants, not stuffed phrases. Intent matches the map (definition, how-to, comparison, commercial refusal). Meta title and description exist on every sampled post and in `metadata.json`. Slugs match the map. Related links exist in frontmatter and as in-body `/blog/` links (no sampled post had fewer than two unique internal links).

Close-variant examples that still match intent: "What an antidetect browser is" for `what is an antidetect browser`; "What web scraping is" for `what is web scraping`; "Multiple accounts on one PC" for `multiple accounts one computer`. That is natural use, not a miss.

### Gate 2: Editorial

Openings are specific. No "in today's digital world" or "in this article we will" openers in the full 246-file sweep. Each sampled post has one central idea and a first-person desk voice. Opinion shows up where the map asked for it (refusals, funding, seats, encryption honesty, self-clicks). Pillars do map work. Cluster notes stay on one object.

### Gate 3: Technical

Checked against `product-capabilities.md`. Sampled posts do not invent MaskWright features. Recurring facts that match the audit:

- Public channel is Windows 10/11 x64. No public Mac or Linux pack claimed.
- No account, no cloud profile sync, no team seats.
- `profiles.json` is AES-256-GCM. Per-profile Chromium dirs, cookie JSON, and localStorage JSON are not.
- Chromium 131 custom core when present, else system Chrome or Edge. Firefox prefers Camoufox, else stock Firefox.
- HTTP, HTTPS-as-HTTP-forwarder, SOCKS5. TLS-to-proxy not implemented. SOCKS4 not in the type enum.
- No Playwright, Puppeteer, Selenium, RPA, window sync, or cloud phone.
- Bulk start/stop is a sequential loop, not a farm.
- Internal CDP is not a user automation API.
- Ads: dashboard iframes plus JSON feed; launch-tab hooks named as a caveat, not hidden.
- Leave list: updater, ads feed, ad iframes, ip-api.com / geojs.io. No analytics SDK. No profile upload.
- JA3/JA4 treated as compile-time / partial, not a JS spoof. No invented pass rates.

`tiktok-pixel-and-cookie-bleed` mentions SQLite under `profiles/<id>/`. That is Chromium's on-disk cookie store, not a claim that MaskWright's index is SQLite. Allowed.

### Gate 4: Visual

37 of 246 posts include an image. Sampled images are concept shots (isolated folders, canvas noise, proxy map, encrypted index, automation bench) with captions that teach. Files exist under `public/blog/`. No stock-art language in body copy (no "stunning," "sleek modern," "unlock the power," "game-changer").

### Gate 5: AI-pattern

These are not interchangeable competitor clones. Commercial queries are answered as refusals or local-isolation notes, not vendor roundups. No keyword stuffing that would fail a page (`camoufox` is high-count because it is the subject). Headings are house style, not a 246-wide clone.

---

## FAIL slugs

None.

No sampled post failed a gate for a real problem.

---

## Corpus notes (not individual fails)

The brief said 246 identical structures would be an AI-pattern fail for the corpus. That is not what this set is. Most posts have 5 or 6 H2s, but first headings are almost all unique. Last headings repeat more than first headings.

Repeated H2s across the full 246:

- Local Windows habits: 24
- Local Windows notes: 23
- What we will not write: 17
- What this page refuses: 14
- What I will not write: 11
- How I want you to use this page: 9
- What this how-to refuses: 9
- A short commercial close: 7

That is a house close, not a find-replace farm. Isolation families share a skeleton (room holds / stays out / official people / local Windows / refuse) and then add a platform-specific last section (Seller Central cases, Etsy Shop Manager, eBay Seller Hub, TikTok Business Center, LinkedIn Insight Tag). Those pages are not interchangeable if you swap the brand name. Do not fail them as template clones.

Hero image prompts in metadata all end with "photographed as a working operator setup." That is a generation brief, not published body. It is formulaic. It is not a Visual fail on the posts, because in-post images are few and useful.

Two SEO watches (still pass):

- `x-ads-manager-isolation` (map keyword `twitter ads manager browser`): body uses X, not Twitter. Twitter appears only in tags. Intent is clear. Exact query phrase is thin.
- `offline-operator-days` (map keyword `offline antidetect browser`): body answers the offline-local question. The phrase "antidetect browser" is only in tags.

Some social ads-manager `related` lists lean on sibling platforms (Reddit ads pointing at several LinkedIn URLs). Links exist. Quality is mixed, not missing.

---

## Publish recommendation

**Publish the reviewed set.**

All 8 pillars and the 32 cluster extras pass all five gates. The corpus is not 246 identical posts. Isolation-family outlines are a house style, not a clone farm. Product claims stay inside the capabilities audit, including the uncomfortable ones (encryption split, ads launch-tab hooks, HTTPS as a forwarder, no seats, no Playwright).

No content-map edits. No cluster or keyword strategy changes from this audit.
