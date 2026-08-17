---
slug: official-apis-versus-headed-collection
title: Official APIs versus headed collection
metaTitle: Official APIs versus headed collection
metaDescription: If there is an official API, that is the door. Headed collection is a different job with a different permission story. Compare them before you open a tab.
excerpt: If there is an official API, that is the door. Headed collection is a different job with a different permission story. Compare them before you open a tab.
author: Morgan Ellis
published: 2026-07-02
category: scraping
tags: scraping, research, comparison, api
readingTime: 6
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on official APIs versus headed collection beside a public documentation page and a local notes folder, photographed as a working operator setup.
related: public-pages-slowly, robots-txt-and-terms-come-first, rate-limits-are-not-a-puzzle, scraping-ethics-we-follow, captchas-are-a-stop-sign, what-is-web-scraping, user-agent-honesty-in-research, linkedin-we-will-not-scrape-inboxes
---

If there is an official API, that is the door. Headed collection is a different job with a different permission story. Compare them before you open a tab. The automation desk has [official APIs versus UI bots](/blog/official-apis-versus-ui-bots) for clickers against a login. This page is the collection fork: bytes you want to keep, not buttons you want to press.

[What web scraping is](/blog/what-is-web-scraping) starts here. I will not repeat the whole pillar. I will only run the comparison.

## What the API already is

An official API has a contract. Documentation, keys, scopes, rate limits, a support path when the contract moves. Ads platforms want report pulls this way. Shops want catalog sync this way. Public data portals want bulk this way.

You identify the client. You wait when the limit says wait. Rate limits are a contract. You store a JSON leftover you can provenance as "official export."

The permission story is written down. If the scope does not include inboxes, you do not have inboxes. If the tier is paid, the honest options are pay, shrink, or stop.

## What headed collection is

A headed browser requests a page the way a person would see it, then a program reads the tree. JavaScript ran. Layout happened. Cookies the public site sets for every visitor may be present.

That is useful when the job is "see this public card" or "check our own rendered page." It is a different permission story than a documented endpoint. [robots.txt and terms come first](/blog/robots-txt-and-terms-come-first). A Disallow still applies if you are a client. [User-agent honesty in research](/blog/user-agent-honesty-in-research) still applies. Saying you are Chrome when you are a harvester is a disguise.

[Public pages, slowly](/blog/public-pages-slowly) is the only headed collection we will bless on sites you do not own: public, permitted, human pace, signed out. [Playwright for pages you own](/blog/playwright-for-pages-you-own) is the headed driver on hosts you control. MaskWright does not ship that driver.

## The comparison before you open a tab

| Question | Official API | Headed collection |
| --- | --- | --- |
| Is there a written contract? | Yes, if you read it | Rarely. Terms and robots only |
| Can you provenance the file? | Endpoint, app, time | URL, time, signed-out |
| What does a limit mean? | Wait or pay | Slow down or stop |
| What does a captcha mean? | Usually never appears | Stop. The sign ends the run |
| Where does the session live? | Tokens in a script folder | Disposable client, never a work profile |

If both can do the job, pick the API. Every time. A YouTube video of a headed scrape is optimizing for a demo. You are optimizing for a method you can still defend next quarter.

## When headed is still the right tool

The site has no API and the page is public and permitted. You need to see a layout a person sees: a public Ads Library card, a marketing page, your own checkout. You are a person in a cold profile, not a volume engine.

That is research, not a harvest. Public Ads Library research is the example we will keep writing. Manual first. Official tools second. No login scrape.

If the page is behind a password you do not have an export for, headed collection is not research. [We will not scrape LinkedIn inboxes](/blog/linkedin-we-will-not-scrape-inboxes).

## What I skip as "headed API replacement"

A driver pointed at the production UI because the API application was denied. A random Chrome UA on a collector. A residential exit to finish a harvest the terms forbade. A solver so the headed client can continue. A work-profile attach so the collector inherits a live login.

[Scraping ethics we follow](/blog/scraping-ethics-we-follow) is the list. A disguise is not a fourth door. A captcha on that path is a stop. [Captchas are a stop sign](/blog/captchas-are-a-stop-sign).

MaskWright 0.1 launches profiles for people. Internal CDP is not a collection API. If you need a driver, you already know Playwright's name. Use it on properties you own, outside the profile store.

A weekly habit helps. Before a new collection job, open the vendor's developer docs for ten minutes. If a report endpoint exists, write the client against it and close the browser idea. If it does not, write one sentence on why a slow public look is still allowed. If you cannot write that sentence, the tab stays closed.

The [Scraping](/blog/scraping) hub holds the rest. This page is only the fork. Open the API docs before you open the tab. If the docs cover the job, leave the tab closed.

## FAQ

### The API is missing a field I need. Can I scrape the UI for it?

Not as a default. Ask the vendor, pay a higher tier, or shrink the job. HTML is not a documented field list.

### Does MaskWright collect pages?

No. It opens profiles. Collection lives in a scripts folder or in a person looking at a public page.
