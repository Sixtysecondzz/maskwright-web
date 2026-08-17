---
slug: what-is-web-scraping
title: What web scraping is
metaTitle: What web scraping is, and what it is not
metaDescription: What collection is, and what it is not. Official channels first. This 2023-definition refresh is the scraping pillar, not a stealth-stack advertisement.
excerpt: What collection is, and what it is not. Official channels first. This 2023-definition refresh is the scraping pillar, not a stealth-stack advertisement.
author: Morgan Ellis
published: 2026-05-18
category: scraping
tags: scraping, research, web
readingTime: 8
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on what web scraping is beside a public documentation page and a local notes folder, photographed as a working operator setup.
related: scraping-ethics-we-follow, official-apis-versus-headed-collection, what-is-a-scraping-browser, antidetect-browsers-for-web-scraping, we-will-not-hide-a-scraper, browser-automation-vs-a-real-profile, linkedin-we-will-not-scrape-inboxes, robots-txt-and-terms-come-first
---

Web scraping is collecting data from pages or feeds a computer can request, then storing a structured leftover. That sentence is older than this blog. The 2023 pages added a second sentence that does not belong in a definition: hide the collector so the site cannot tell. This pillar keeps the first sentence and drops the second.

I write it as a local definition because the commercial results still sell a stack: a headed Chromium, a residential exit, a solver, a random Chrome user agent. Those are products. They are not what collection is. If the site published a door, the door is the job. If the site forbade the method, a prettier window is not permission.

This note sits in the [Scraping](/blog/scraping) hub. [Scraping ethics we follow](/blog/scraping-ethics-we-follow) is the sibling policy page. This page names the job.

## The job the word is supposed to name

A person can open a public page, read it, and type a note. Scraping is the same act at machine pace: a client requests a URL, parses what came back, and writes a row. The leftover might be HTML, JSON, a CSV, a screenshot. Those files live off the work profile. The act is collection. The ethics sit in whether you were invited to collect that way.

Three doors exist before anyone should talk about a browser.

An **official API or feed**. The site published a contract. Keys, scopes, rate limits, a changelog. Ads libraries, product catalogs, public data portals, partner feeds. If this door exists and covers the job, scraping the HTML is a worse client. [Official APIs versus headed collection](/blog/official-apis-versus-headed-collection) is the comparison.

A **public page the terms allow you to read**, slowly, as a named research client. Documentation, a marketing site, a public Ads Library card, a robots.txt that permits the path. [robots.txt and terms come first](/blog/robots-txt-and-terms-come-first) is the permission note.

A **property you own**. Your shop, your docs, your staging host. Then a driver is a test tool, not a disguise. Playwright on a host you control is that how-to. MaskWright 0.1 does not ship Playwright.

Everything else is a different legal and ethical job. Inbox HTML behind a password. A social graph you were not given an API for. A page that answered with a captcha. Those are not "scraping with extra steps." They are stops.

## What collection is not

Collection is not a login you were not invited to automate. If you needed a password, you are in an access job. Authorized exports and official APIs still exist for some of those jobs. A headed harvester pointed at the inbox does not.

Collection is not personal data you have no right to hold. Emails lifted from a storefront, phone numbers from a directory the terms forbid, messages from a mailbox. If the leftover is a person you could contact, you needed a lawful basis before the request, not after the CSV landed.

Collection is not a hide. [We will not hide a scraper](/blog/we-will-not-hide-a-scraper). A coherent fingerprint on a collector is still a collector. The commercial query "best antidetect for scraping" sends people here. The answer is usually no. An isolated profile is for work you already have a right to do. It is not a permit to crawl a login. [Antidetect browsers for web scraping](/blog/antidetect-browsers-for-web-scraping) is the category version of that no.

Collection is not a solver loop. A captcha ends the run. The commercial solver page is a different URL.

## Official channels first

I start every collection brief with one question. Did they already publish a door?

Reddit, X, Meta, Google, shop platforms, ads libraries: most of the commercial queries in this cluster have an official product. Sometimes it costs money. Sometimes it requires an app review. That cost is the price of the contract. It is not a reason to pretend the HTML is the API.

When the official door is narrower than a 2023 tutorial promised, the honest move is to shrink the job. You do not owe a dataset to a blog post that assumed unlimited JSON.

LinkedIn inbox scrapers are a commercial refusal. [We will not scrape LinkedIn inboxes](/blog/linkedin-we-will-not-scrape-inboxes). Official API and public pages only. Instagram public research is the other social query: look at what is already public, in a profile with no brand login, or use official channels.

## Headed collection is a different permission story

A headed browser can fetch a page a bare HTTP client struggles with. JavaScript rendered HTML. A cookie the public site sets for everyone. A document that is public but awkward.

That does not change permission. [What a scraping browser is](/blog/what-is-a-scraping-browser) keeps the collector from being sold as an operator profile. [Browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile) is the architecture pillar. A driver is a process. A profile is a folder a person reuses tomorrow. Painting the second object onto the first is how work logins get ruined.

If you collect with a headed client, say what you are. A random Chrome string is a disguise. Research clients name themselves. Operator profiles have a coherent browser story for authorized logins. Those are not the same user-agent job.

Pace stays human when the page is public HTML you were allowed to read. Volume belongs on the API. Rate limits are a contract. An anti-bot wall is a stop, then a search for the official channel.

![A local automation bench next to a closed script folder](/blog/blog-automation-bench.png "Collection lives in a scripts directory. Work profiles stay closed while a run is live.")

## What a local Windows desk actually does

On this PC a work profile is a MaskWright folder: a user-data directory, a cookie store, a fingerprint seed. You open Ads Manager, Seller Central, a brand inbox. You close it. You do not point a collector at that folder.

Research files live outside `maskwright-data`. The index `profiles.json` is encrypted. Per-profile Chromium dirs and cookie import JSON are not. A scrape dump in `profiles/<id>/Downloads` is a mixed folder.

Scripts live in a repo you control. They talk HTTP to official endpoints, or they drive a disposable browser against a host you own. They do not attach to a live work profile. MaskWright 0.1 has no Playwright, Puppeteer, or Selenium product. Internal CDP applies fingerprints and cookies. It is not a user automation API.

A proxy is an exit you brought, not a hide. HTTP and SOCKS5 are the types we parse. Language and timezone can follow the exit on a work profile. That pairing is for authorized profiles. It is not a residential disguise for a forbidden crawl.

## How to judge the leftover

After a run you should be able to write one line of provenance. URL or endpoint, time, whether you were signed out, whether the file came from an official export. Future you should not have to guess.

If you cannot write that line without embarrassment, the run was not research. The tools-criteria page and the Python overview sit next to the ethics list. None of those pages will teach you to hide.

## The 2023 definition, corrected

The old pages were not wrong that a computer can request a URL and parse the tree. They were wrong that the interesting part is bypass. The interesting part is permission, pace, and where the session lives.

Permission: API, robots, terms, public page, or a host you own.

Pace: the limit as a contract, a human interval on public HTML, a stop at a captcha or a wall.

Session: collectors in a disposable folder, people in a named profile, leftovers off both.

If a vendor page skips those three and starts with stealth, it is selling a disguise. This cluster will keep writing the job instead.

| Question | Official API | Public page (slow) | Headed collector | Operator profile |
| --- | --- | --- | --- | --- |
| Who invited you | The docs | Terms and robots | Rarely the terms | The account you run |
| Typical leftover | JSON you can provenance | Notes, a few screenshots | A dataset at machine pace | A login you reopen |
| Captcha means | Almost never appears | Stop | Stop | A person solves it once |
| MaskWright 0.1 | Not a client | Cold profile to look | Not a product | Launch and isolate |

Use the table when a roundup treats all four columns as one tool.

## A Tuesday checklist

You need last month's ads report. The platform has an API. Use the API.

You need to see a public Library card. Open a profile with no ads login, look, close it.

You need screenshots of your own checkout. Use Playwright in a scripts folder pointed at staging.

You need a competitor's customer emails. Stop. That job fails before a library name matters.

You need volume the free API tier will not give. Pay the tier, shrink the job, or drop the dataset.

You need a login you already operate, and there is an export button. Use the button. Do not parse the UI.

If a step only works after you hide the client, the step was not this job.

## FAQ

### Is saving a page I can already see scraping?

Saving one public page you were allowed to open is closer to a note than to a harvest. The word starts to matter when a program pages through many URLs, parses them, and stores a dataset. The permission questions stay the same at both scales. robots.txt and terms still come first.

### Does a headed browser make collection allowed?

No. A headed window changes how the bytes arrive. It does not change whether the site invited that client. If the official door is an API, use the API. If the page is public and permitted, go slowly and say what you are. If a login or a wall is in the way, stop.

### Where does an antidetect profile fit?

In a folder you already have a right to sit in. Brand dashboards, ads accounts, storefronts, a cold tab for public research that must not touch those logins. It does not fit as a hide for a collector. The commercial query has its own page. This definition does not bend to sell it.

### What if the API is expensive or closed?

Shrink the job, pay the tier, or do without the dataset. Those are the honest options. A headed disguise is not a fourth option here.

### Can MaskWright run my scraper?

No. 0.1 launches and isolates profiles. It has no collection API, no queue, and no Playwright export. Keep scripts in a different directory than `maskwright-data`. [Download MaskWright](/download) if you need isolated profiles. Keep Python in its own repo if you need a client.
