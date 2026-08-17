---
slug: web-scraping-tools-criteria
title: How to judge a web scraping tool
metaTitle: How to judge a web scraping tool for honest research
metaDescription: 2023-2025 lists get refreshed as criteria, not a 15-tool clone. Judge permission, pace, and where the session lives, then pick a tool you can defend.
excerpt: 2023-2025 lists get refreshed as criteria, not a 15-tool clone. Judge permission, pace, and where the session lives, then pick a tool you can defend.
author: Morgan Ellis
published: 2026-08-07
category: scraping
tags: scraping, research, web
readingTime: 5
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on how to judge a web scraping tool beside a public documentation page and a local notes folder, photographed as a working operator setup.
related: proxies-for-web-scraping, web-scraping-with-python-overview, instagram-public-research-versus-scrape, what-is-a-scraping-browser, linkedin-we-will-not-scrape-inboxes, we-will-not-hide-a-scraper, what-is-web-scraping, personal-data-and-collection
---

The 2023 to 2025 listicles want fifteen logos and a winner. This page is criteria. Judge permission, pace, and where the session lives, then pick a tool you can defend. I will not clone a roundup.

[What web scraping is](/blog/what-is-web-scraping) is the definition. [Scraping ethics we follow](/blog/scraping-ethics-we-follow) is the rule list. Use both before you open a pricing page.

## Permission

Does the tool start from an official API, a licensed firehose, or a publisher program? Or does it start from "any URL"? The first kind has a contract. The second kind is a harvest engine. [Official APIs versus headed collection](/blog/official-apis-versus-headed-collection).

Does it refuse inbox and personal-data jobs, or advertise them? LinkedIn inbox packs, storefront email harvests, and Instagram scrapers fail this criterion no matter how pretty the dashboard is. [We will not scrape LinkedIn inboxes](/blog/linkedin-we-will-not-scrape-inboxes). [Instagram public research versus a scrape](/blog/instagram-public-research-versus-scrape). [Personal data and collection](/blog/personal-data-and-collection).

Does it honor robots and terms as a default, or treat them as a toggle?

## Pace

Can you set a human interval and a hard stop? Or is the product a parallelism slider?

What happens at a 429, a captcha, or a managed wall? Sleep and exit is a pass. A solver marketplace is a fail.

## Where the session lives

Do tokens sit in your repo? Does a headed session sit on a vendor disk? Is a "profile" a collector fixture or a folder you would use for Ads Manager tomorrow?

A scraping browser in the cloud holds a copy of whatever cookie it needed. [What a scraping browser is](/blog/what-is-a-scraping-browser). That is a custodian risk even when the job was allowed. If the vendor's pitch is undetectable, the tool already failed. [We will not hide a scraper](/blog/we-will-not-hide-a-scraper).

Bring-your-own exit for an allowed client is a plus. A bundled residential pool sold as the product is a hide waiting to happen.

| Criterion | Pass | Fail |
| --- | --- | --- |
| Permission | Official API or permitted public page | Any URL, inbox packs |
| Pace | Sleep, stop, human interval | Solver marketplace, parallelism as the product |
| Session | Tokens on your disk | Vendor holds the cookie, "undetectable" pitch |

## Operator versus collector

If you also need isolated profiles for authorized logins, that is a different tool. MaskWright 0.1 is that profile on Windows. It is not a scraping tool. A product that claims to be both is selling the mix-up. [Browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile).

A local Python client against an official SDK is often enough: honest UA, leftover on disk. [Web scraping with Python, without a stealth stack](/blog/web-scraping-with-python-overview). A hosted tool has to beat that on permission and provenance, not on stealth demos.

## A worked choice

You need last month's public ads creatives for a category you already advertise in. The official Library UI covers a look. An official API covers a pull if you have access. A hosted "any URL" scraper covers a harvest. The first two pass permission. The third fails even if the CSV is prettier.

You need a competitor's customer emails from their storefront. Every tool fails. The job fails. Criteria do not rescue a refused leftover.

You need screenshots of your own checkout after a deploy. Playwright in your repo passes. A cloud scraping browser pointed at your production admin is a custodian you did not need.

## Provenance and leftovers

Can you export a file with source, time, and client name? If the only artifact is a dashboard you lose when the seat lapses, you do not own the research.

Will the vendor train on your leftover? If you cannot get a straight answer, do not put a customer-adjacent file in that box.

## A short fail list

I will not rank tools that sell LinkedIn inbox or Instagram harvest packs, bundle captcha solving as a feature, advertise bypass for named anti-bot vendors, want a live work-profile cookie as setup, or score themselves on lab trophies.

If a 2023 list ranked those products first, the list was optimizing for volume buyers. This page is optimizing for a method you can still explain.

Print the three scores before you pay. Permission: pass or fail, no maybe. Pace: can you stop, or only speed up. Session: your disk or theirs. Two fails means you keep the official SDK and a cold profile. One fail is still a no if the fail is permission. A pretty renderer does not move a fail to a pass.

Ask the vendor where a leftover lives after you cancel. If the answer is vague, the session was never yours. Ask whether inbox and personal-data recipes ship in the same product. If yes, leave.

The [Scraping](/blog/scraping) hub will not grow a fifteen-tool table later. Criteria do not expire when a logo does. Pick the official door, then the smallest client that honors it.

## FAQ

### Why no ranking table?

Logos expire. Permission, pace, and custody do not. A fifteen-tool clone would be stale in a year and would invite stealth buyers.

### Is MaskWright a scraping tool?

No. Judge it as an isolation app for authorized logins, not as a collector.
