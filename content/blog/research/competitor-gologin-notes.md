# GoLogin blog crawl notes

Source: https://gologin.com/blog/
Crawl date: 2026-08-16
Article rows in CSV: 362

## Crawl method

1. Fetched the English blog index and all listing pages through `/blog/page/41/` (9 cards per page; page 41 has 1 card). Pages 42-50 return HTTP 200 with zero article cards.
2. Walked every public category index and its pagination: Web Scraping, Reviews of browsers, Proxies, Product and Company Updates, Managing Multiple Accounts, General Marketing, Dropshipping, Crypto, Buying Accounts, Browser fingerprinting, Betting, Antidetect browsers, Affiliate Marketing, Account Suspended.
3. Cross-checked WordPress REST ` /wp-json/wp/v2/posts` (4 pages, 100 posts each, 374 total posts). All 362 `/blog/` posts are in the CSV. The other 12 WP posts are `/use-cases/` marketing pages, not blog articles.
4. Tried sitemaps listed or implied by `robots.txt`. All returned HTTP 404 with a soft HTML body: `sitemap_index.xml`, `wp-sitemap.xml`, `wp-sitemap-posts-post-1.xml`, `post-sitemap.xml`, `blog-sitemap.xml`.
5. `site:gologin.com/blog` web search was used to confirm slugs. No extra English article URLs appeared beyond the listing + WP-JSON set.
6. Each article HTML was fetched. Extracted title, canonical URL, H2/H3 headings, approximate body word count, related `/blog/` paths, and published date (`article:published_time` or listing card date). Topic, inferred keyword, and intent are classified from title and slug, not copied from the body.

Category hub pages (`/blog/proxies/`, `/blog/antidetect-browsers/`, and the rest) are indexes, not article rows.

## Recurring topics

Ranked by how often they show up in the 362 rows:

1. Competitor comparisons and single-tool reviews (AdsPower, Multilogin, Dolphin Anty, Octo, MoreLogin, Incogniton, plus a long tail of smaller antidetects).
2. Multi-accounting how-tos by platform (TikTok, Facebook, Instagram, Amazon, Gmail, Discord, Telegram, Reddit, and similar).
3. Proxies (residential vs datacenter vs ISP, provider reviews such as Oxylabs and IPRoyal, "what are proxies").
4. Web scraping browsers, bots, and anti-bot framing.
5. Browser fingerprinting explainers and checker walkthroughs (BrowserLeaks, Pixelscan, CreepJS, BrowserScan, Iphey, canvas, WebRTC, timezone).
6. "Best antidetect" roundups by use case or country (SMM, dropshipping, scraping, Android, iPhone, France, UK, Vietnam).
7. Cloud phone reviews (2026 surge: LDCloud, UgPhone, VSPhone, VMOS, Redfinger, BitCloudPhone, MoreLogin, Multilogin, GeeLark, Duoplus).
8. Account restriction / ban troubleshooting.
9. Monthly product updates (Orbita/Chromium, Android, ISP proxies, Cloud Browser, SDK).

Cadence is heavy in 2025-2026 (122 posts dated 2026, 132 dated 2025). Older years are thinner (2023-2024 evergreen plus a small 2019-2022 archive).

## Pages we could not access

- XML sitemaps: 404 (robots.txt still points at `https://gologin.com/sitemap_index.xml`).
- RSS `/blog/feed/`: disallowed in robots.txt; an early fetch aborted on timeout.
- Localized blogs linked via hreflang (example: `/fr/blog/`). English `/blog/` only.
- `/use-cases/*` posts from 2018-2019 that appear in WP-JSON but are not blog articles.
- Five older or short posts had no extractable H2/H3: `browser-automation-with-selenium`, `launching-a-mobile-browser-in-gologin`, `frequently-asked-questions`, `how-to-avoid-ip-blocking`, `meet-the-new-antidetect-browser-orbita`. Rows are still in the CSV with title, URL, date, and word count.
- No article URL in the discovered set returned HTTP 404.

Word counts include on-page chrome around the article (related-post blocks, FAQs). They are useful for length comparison, not exact editorial counts. Article bodies were not copied into the CSV.
