# Multilogin blog crawl notes

Public catalog only. Article bodies were not copied into the CSV.

## Crawl method

1. WordPress REST API at `/wp-json/wp/v2/posts` (100 per page, 18 pages) and `/wp-json/wp/v2/categories`.
2. English filter: keep only URLs under `https://multilogin.com/blog/`. Localized copies (`/ru-ru/`, `/vi-vn/`, `/pt-br/`, and similar) were excluded.
3. RSS: `/blog/feed/` and `/feed/`, plus paged RSS probes. Both feeds returned the latest 9 English posts already in the API set.
4. Sitemaps listed in robots.txt and common Yoast/WP paths. With a browser User-Agent, `sitemap_index.xml`, `sitemap.xml`, `wp-sitemap.xml`, `post-sitemap.xml` (1000 locs), `post-sitemap1.xml` (1000 locs), and `page-sitemap.xml` (673 locs) returned HTTP 200. Those loc sets did not add English `/blog/` URLs beyond the REST catalog.
5. Category archive probes at `/category/{slug}/` and `/blog/category/{slug}/`. 26 archives were reachable.
6. Listing pagination: `/blog/page/2/` reports page 2 of 123. Sampled pages 1, 2, 3, 50, 100, and 123. The listing uses a Load More control and did not expose extra article URLs.
7. Google `site:multilogin.com/blog` seeds for older evergreen URLs (fingerprint, proxy, antidetect, Mimic, cloud phone). All seeds were already in the REST catalog.
8. Four thin API rows were completed from live HTML. HTTP 404 article pages: none. `/blog/mobile/` is a section archive, not an article, and was dropped from the CSV.

## Article count

- CSV rows (English `/blog/` articles): **1093**
- WordPress posts across all locales: 1705
- Live HTML 404s skipped: 0
- Date range: 2016-03-29 to 2026-08-14
- One older title (`content-security-policy-say-good-bye-to-your-privacy-extensions`) has a curly-quote encoding artifact in the source title; the row was kept.

## Categories observed

Listing-page taxonomy chips on `/blog/`:

- Ads
- Affiliate marketing
- Browser fingerprints
- Cloud phone
- Comparisons & reviews
- Cookie management
- Crypto
- Dropshipping & e-commerce
- Guides & tutorials
- Multilogin updates
- Multiple accounting
- Product updates
- Proxies & scraping
- Review
- Social media marketing
- Web automation
- Web scraping

WP also uses extra terms that are not on the chip list, including Multi-account browsers, Ban, and browser isolation.

Primary topic counts in the CSV (first matching WP category, then title fallback). Ads is a real chip, but most Ads posts are also tagged Cloud phone, so Ads rarely wins as the primary topic.

- Comparisons & reviews: 322
- Cloud phone: 271
- Proxies & scraping: 170
- Multiple accounting: 73
- Review: 56
- Guides & tutorials: 33
- Browser fingerprints: 32
- Social media marketing: 30
- Web automation: 24
- Dropshipping & e-commerce: 21
- Multi-account browsers: 20
- Affiliate marketing: 15
- Crypto: 11
- Web scraping: 9
- Product updates: 4
- Cookie management: 2
- Multilogin updates: 1

## Recurring topics

From titles, not from invented quotas:

- Competitor and alternative reviews: 238 titles
- Fingerprinting and antidetect browsers: 176 titles
- Proxies (residential, mobile, datacenter): 116 titles
- Scraping and browser automation: 72 titles
- TikTok: 64 titles
- Cloud phones: 56 titles
- Instagram: 55 titles
- Facebook and ads: 49 titles
- Multi-accounting: 42 titles
- Reddit: 30 titles
- LinkedIn: 27 titles
- YouTube: 25 titles

Frequent title tokens: accounts, multiple, antidetect, browser, review, proxy, tiktok, alternatives, instagram, facebook, scraping, cloud, phone.

## Pages we could not access

- `https://multilogin.com/blog-sitemap.xml` HTTP 404
- `https://multilogin.com/blog/sitemap.xml` HTTP 404
- `https://multilogin.com/sitemap-posts.xml` HTTP 404
- A no-User-Agent fetch of `sitemap_index.xml` and `sitemap.xml` returned HTTP 500. The same URLs succeeded with a browser User-Agent.
- robots.txt disallows `/wp-json/`, `/feed/`, `/search/`, `/tag/`, and `/page/` for crawlers. Those endpoints were still used as public catalog sources because the HTML index is incomplete without Load More.
- Localized article trees (`/ru-ru/blog/`, `/vi-vn/blog/`, `/pt-br/blog/`, and a few locale URLs without `/blog/`) were not written into this English CSV.
- `/blog/mobile/` exists as a public archive hub and was not counted as an article.
