---
slug: user-agent-honesty-in-research
title: User-agent honesty in research
metaTitle: User-agent honesty in research for honest research
metaDescription: Honest UA for research clients. Not a random Chrome string. If you collect, say what you are. A costume UA is not research hygiene. Local Windows notes only.
excerpt: Honest UA for research clients. Not a random Chrome string. If you collect, say what you are. A costume UA is not research hygiene. Local Windows notes only.
author: Morgan Ellis
published: 2026-08-01
category: scraping
tags: scraping, research, how-to, scraper, user
readingTime: 4
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on user-agent honesty in research beside a public documentation page and a local notes folder, photographed as a working operator setup.
related: what-is-web-scraping, storing-research-files, captchas-are-a-stop-sign, facebook-ads-library-research-locally, rate-limits-are-not-a-puzzle, scraping-behind-login-is-not-research, public-pages-slowly, playwright-for-pages-you-own
---

If you collect, say what you are. A research client gets a name you would print in a robots group and a contact you would answer. A random Chrome string is a disguise. Disguise UAs are not research hygiene.

I need to split two jobs that share the words "user agent," or this page will be read as a stealth tip. It is not one.

## Two different UA jobs

**Research clients** are programs that request pages or APIs. They should identify the program and the operator. `ResearchBot/1.0 (+https://example.com/research; ops@example.com)` is the shape. The host can allow, delay, or refuse that name in robots.txt. [robots.txt and terms come first](/blog/robots-txt-and-terms-come-first).

**Operator profiles** are folders a person uses for authorized logins. Those profiles need a coherent browser story: UA, Client Hints, platform, the rest of the fingerprint seed. That coherence is isolation, not a collector hide. MaskWright applies a profile UA for that job. It is not a recipe for a harvester.

Do not copy the profile UA onto a script. Do not copy a script UA onto a work profile. [What web scraping is](/blog/what-is-web-scraping) keeps collectors and logins apart. [Browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile) is the architecture.

## What honesty looks like in a client

A stable product token. A version. A URL or email. The same string tomorrow. If you change it every request, you are not identifying yourself. You are rotating a disguise.

Match the robots group you obey. If you send `Googlebot`, you are lying. If you send `Mozilla/5.0 ... Chrome/131` from a Python process, you are lying. [We will not hide a scraper](/blog/we-will-not-hide-a-scraper).

API clients already have app names. Use them. Do not wrap the same pull in a headed Chrome UA because the HTML looked easier.

[Public pages, slowly](/blog/public-pages-slowly). An honest client plus a human interval is the whole stack we will bless on public HTML. A new UA is not a new rate budget. [Rate limits are not a puzzle](/blog/rate-limits-are-not-a-puzzle).

| Client | UA I send | UA I skip |
| --- | --- | --- |
| Official API SDK | The app name the vendor issued | A random Chrome string |
| Slow public HTTP client | Named research bot + contact | Rotating Chrome versions |
| Person looking at Ads Library | The person (no script) | A script pretending to be Chrome |
| Playwright on a host I own | Whatever I want on my furniture | N/A for third-party hosts |

## What I will not write

A list of "safe" Chrome strings. A Client Hints pack for scrapers. A note on matching `navigator.userAgentData` so a collector looks headed. Those are hide playbooks.

If a captcha appears after you told the truth, the sign is still a stop. [Captchas are a stop sign](/blog/captchas-are-a-stop-sign). Honesty is not a pass. It is the minimum.

If you needed a login, honesty does not make the harvest research. [Scraping behind a login is not research](/blog/scraping-behind-login-is-not-research).

## Client Hints are not a second disguise

A modern Chrome sends more than the UA string. Client Hints carry brand, version, platform, and mobile bits. A research client that sends `ResearchBot/1.0` should not also send a full Chrome Client Hints set. That mismatch is a disguise with extra headers.

Operator profiles may set Client Hints so the profile is coherent. That is the profile job. Do not copy those headers onto `httpx`. Do not ask a Python client to impersonate `navigator.userAgentData`. This how-to stops at an honest product token.

If a host ignores your honest UA and still serves the public page, you did not need the disguise. If a host refuses the honest UA, you read the terms again, or you stop.

## Local notes

Scripts live outside work profiles. Set the UA in the client, in the repo, in a config you can show someone. Do not launch a MaskWright profile so the collector can inherit a pretty string.

[Playwright for pages you own](/blog/playwright-for-pages-you-own) can send whatever UA you want on your own host. That is your furniture. On someone else's host, tell the truth or do not collect.

A public Ads Library look is often a person in a cold profile. The person is the user agent. You do not need a script string for a look you could have done by hand. [Facebook Ads Library research locally](/blog/facebook-ads-library-research-locally).

Write the UA you sent in the provenance line next to the leftover. Future you should see that you were `ResearchBot/1.0`, not "whatever Chrome the library defaulted to." [Storing research files](/blog/storing-research-files).

The [Scraping](/blog/scraping) hub will keep this how-to short. Name the client. Keep the profile UA in the profile. A disguise string is not a third option. If a library defaults to a Chrome UA, override it before the first request.

## FAQ

### My HTTP library defaults to a Chrome UA. Is that fine?

No. Override it before the first request. A default disguise is still a disguise.

### Should my MaskWright profile use a research-bot UA?

No. Profiles are for people. Research-bot UAs are for programs. Do not mix them.
