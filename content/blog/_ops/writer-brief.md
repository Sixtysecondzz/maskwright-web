# Writer brief

Read `content/blog/_ops/editorial-policy.md` first.

Write one markdown file per assigned queue row at:

`E:\windows app\maskwright-web\content\blog\posts\{slug}.md`

## Frontmatter

```
---
slug: exact-slug
title: Exact title from queue
excerpt: 140-180 characters, no em dash
date: YYYY-MM-DD
author: Exact author from queue
category: exact-category
tags: three short tags
related: comma separated slugs from queue.related
---
```

## Body rules

- No H1. Start with a first-person paragraph.
- 1,500 to 2,200 words. Never under 1,200.
- No em dash. No en dash. No Unicode dash.
- 5 to 8 `##` headings. Include `## FAQ` near the end with 4 `###` questions.
- One markdown table.
- Exactly 3 images in the body, not at the very top (the page already shows a hero from the first image). Place them after heading 2, 4, and 6.

Image syntax, using only the three filenames from the queue row:

`![specific alt](/blog/filename.png "Caption that adds a fact, not a repeat of the alt.")`

Allowed image files only from `public/blog/`.

## Links (required)

In the body, include:

- 4 to 7 links like `[visible text](/blog/other-slug)` using `related` slugs
- `[category title](/blog/category/{category})`
- `[Download MaskWright](/download)` or `[Compare local versus cloud](/compare)`

## MaskWright facts you may use

Windows 10/11. Local encrypted store. No account. No cloud sync. No team seats. No cloud phones. Bring your own HTTP or SOCKS5. Chromium core on the operator PC. Free. Ads only in dashboard chrome. Bandwidth-sharing SDKs dropped.

## Unique

Do not reuse another article's first sentence. Do not write a how-to for bans, fake accounts, hidden scrapers, or trophy lab scores.
