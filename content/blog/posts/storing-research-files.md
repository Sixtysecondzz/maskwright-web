---
slug: storing-research-files
title: Storing research files
metaTitle: Storing research files off the work room
metaDescription: Where research files live. Adjacent hygiene. Keep dumps off the work rooms that hold logins, and treat the folder as data you are responsible for.
excerpt: Where research files live. Adjacent hygiene. Keep dumps off the work rooms that hold logins, and treat the folder as data you are responsible for.
author: Jordan Hale
published: 2026-07-29
category: scraping
tags: scraping, research, how-to, scrape, data
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on storing research files beside a public documentation page and a local notes folder, photographed as a working operator setup.
related: what-is-web-scraping, facebook-ads-library-research-locally, user-agent-honesty-in-research, scraping-behind-login-is-not-research, captchas-are-a-stop-sign, playwright-for-pages-you-own, rate-limits-are-not-a-puzzle, anti-bot-pages-and-official-channels
---

Research files are data you chose to keep. Store them away from the profiles that hold logins. A scrape dump in the same folder as a live cookie store is a mixed profile with extra steps. This is adjacent hygiene, not a stealth pipeline.

[What web scraping is](/blog/what-is-web-scraping) on this site starts with official channels and public pages. Storage is the leftover: HTML, CSV, screenshots, notes. You are responsible for that leftover.

## Off the work profile

Change Chromium’s download directory for research profiles to something like `D:\research\2026-08\` that is not inside `maskwright-data`. Keep Seller Central, Ads Manager, and mail profiles on their default user-data trees, and do not save research dumps there.

[Facebook Ads Library research](/blog/facebook-ads-library-research-locally) produces screenshots and notes. Those notes should not sit next to a BM cookie. [User-agent honesty](/blog/user-agent-honesty-in-research) is about the request. Storage is about the file after.

[Scraping behind login is not research](/blog/scraping-behind-login-is-not-research). If you needed data from an account you own, use the official export or API, and store that export in ops storage, not in a “research” pile that also holds competitor HTML.

## Tools versus folders

[Playwright for pages you own](/blog/playwright-for-pages-you-own) can write files to a project directory. That directory still should not be a live MaskWright profile. [Captchas are a stop sign](/blog/captchas-are-a-stop-sign). [Rate limits are not a puzzle](/blog/rate-limits-are-not-a-puzzle). [Anti-bot pages and official channels](/blog/anti-bot-pages-and-official-channels) beat a headed profile that saves everything into Downloads.

MaskWright does not encrypt user-data dirs. Only `profiles.json` is AES-256-GCM. A dump inside the profile is a dump on disk. Treat it like data you might have to delete under a retention policy.

| File type | Where I put it |
| --- | --- |
| Public HTML / screenshots | Dedicated research folder, not a login profile |
| Official CSV export of my store | Ops drive, entity profile only if I must |
| Cookie export | Backup of that profile, never research |
| Playwright output for my staging site | The git repo or a project dir |

On Windows I create `D:\research\inbox` and `D:\research\keep`. Inbox is deleted weekly. Keep is dated folders for briefs I still need. Neither path sits inside `%APPDATA%` next to `maskwright-data`. If Chromium in a research profile tries to default to Downloads under the user-data dir, I change it on first launch.

HTML dumps can contain tokens from a page you were logged into by accident. That is why research profiles stay logged out. If you find a session cookie in a saved HAR, treat the HAR as a secret and delete it. Do not commit it to a public git repo because the filename was `page.html`.

Official exports of your own store still go to ops storage, not to `D:\research`. Different leftover, different retention.

Pushback I hear: “the dump is just HTML.” HTML from a logged-in page can hold tokens. HAR files even more. Keep research profiles logged out, save into `D:\research`, and delete inbox weekly. If a file would be a problem in a contractor’s Slack, it was never a research file.

## FAQ

### Can I zip the research folder to a contractor?

If it is only public pages you were allowed to collect, maybe. If it has customer rows or login HTML, no. When unsure, no.

### Does the ads library count as public?

Meta’s library is a public tool with its own terms. Save what you need. Do not mix it into a logged-in Ads Manager profile.

### Will MaskWright sandbox Downloads?

No. You pick the path. [Download MaskWright](/download) and then point research profiles at a boring folder with no cookies.

### Should screenshots of Ads Library live next to BM cookies?

No. Put them in `D:\research\keep` with a date. The logged-in Ads Manager profile is for spending, not for a mood board of competitor stills.

The [Scraping](/blog/scraping) hub is the ethics and tooling notes. Storage is the leftover. Keep dumps off the profiles that hold logins.
