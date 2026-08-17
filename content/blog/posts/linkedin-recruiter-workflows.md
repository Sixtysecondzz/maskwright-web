---
slug: linkedin-recruiter-workflows
title: LinkedIn Recruiter workflows
metaTitle: LinkedIn Recruiter workflows
metaDescription: Recruiter workflows you already pay for. Isolation for licensed Recruiter work on one PC, not a second unofficial inbox machine in a browser.
excerpt: Recruiter workflows you already pay for. Isolation for licensed Recruiter work on one PC, not a second unofficial inbox machine in a browser.
author: Priya Nair
published: 2026-07-16
category: social-media
tags: accounts, isolation, linkedin, recruiter
readingTime: 6
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on LinkedIn Recruiter workflows beside one social admin tab and a closed profile drawer, photographed as a working operator setup.
related: multiple-accounts-on-one-pc, linkedin-ads-manager-isolation, linkedin-sales-navigator-stays-licensed, linkedin-research-on-public-pages, linkedin-company-pages-on-one-pc, youtube-studio-on-a-local-profile, reddit-api-versus-headed-browsing, youtube-brand-accounts
---

LinkedIn Recruiter is a licensed inbox and search product. I isolate that login on a local Windows profile so it does not share cookies with personal LinkedIn, a client Page, or Campaign Manager. I will not write a second unofficial inbox machine.

The useful caveat: a MaskWright profile does not replace a Recruiter seat you did not buy. Same rule as [Sales Navigator stays licensed](/blog/linkedin-sales-navigator-stays-licensed).

## What the Recruiter profile holds

Official Recruiter UI. Notes that belong to that seat. Extensions LinkedIn or your ATS already supports.

It does not hold personal scrolling, YouTube Studio, or a headed scraper. [YouTube Studio on a local profile](/blog/youtube-studio-on-a-local-profile). [YouTube Brand Accounts](/blog/youtube-brand-accounts). [LinkedIn research on public pages](/blog/linkedin-research-on-public-pages).

[Multiple accounts on one PC](/blog/multiple-accounts-on-one-pc) is the parent split. [LinkedIn company pages on one PC](/blog/linkedin-company-pages-on-one-pc) is Page admin. [Campaign Manager isolation](/blog/linkedin-ads-manager-isolation) is ads. Three products, three reasons to split folders when the logins are actually separate.

MaskWright 0.1: Windows 10/11, per-profile `user-data-dir`, no Playwright product, no team seats. `profiles.json` is encrypted. Chromium user data is not. Bring your own HTTP or SOCKS5 if the company already requires an exit for this seat.

## Inboxes stay official

I do not document attaching a bot to Recruiter. I do not document scraping InMail. If you need ATS sync, use the integration LinkedIn and the ATS already sell. Headed collection of public pages is a different job. [Reddit API versus headed browsing](/blog/reddit-api-versus-headed-browsing) is the honesty split I reuse: API when you have one, person in a chair when you do not.

## Sharing the seat

Named user on their own PC, empty profile, official sign-in, 2FA they hold. Cookie dumps are not onboarding. When the contractor leaves, remove them in LinkedIn, not by hoping a file expires.

| Recruiter profile | Keep out |
| --- | --- |
| Licensed Recruiter login | Personal LinkedIn browsing |
| ATS extensions you already pay for | Unofficial inbox exporters |
| Company-required proxy | Client YouTube or ads logins |

## How I set it

Empty cookies. Official Recruiter URL. Core I will keep (Chromium 131 when the custom core is installed). Locale matches the hiring market, or follows a real exit geo. Close the profile when the desk is done. Do not leave InMail open on a shared tower.

Bulk start can open Recruiter plus Page admin plus ads if those are three profiles you already run. It is not a way to multiply seats.

## On a real Windows desk

Recruiter is a named profile I start when I am hiring, and stop when I am not. InMail drafts do not sit overnight on a hot desk. If two recruiters share a tower, they do not share a Windows login. Each gets an OS user and their own `maskwright-data`.

ATS extensions install only here, and only the vendor the company already pays for. I do not sideload a "LinkedIn to sheet" helper. Cookie export is not how I onboard a sourcer. They get a Recruiter seat or they do not do Recruiter work.

If I need public company Pages, I use the research profile, usually logged out. I do not page through Recruiter search in a way LinkedIn forbids, then blame the browser.

Geo check when a company proxy is attached. Sticky. Do not rotate under InMail. 2FA on a device the named recruiter holds.

## FAQ

### Can recruiters share one MaskWright profile on a hot desk?

They can physically. You lose who did what. Use OS users or separate PCs, plus LinkedIn's own user management.

### Will a new profile reset InMail limits?

No. Limits are LinkedIn's product. I will not write a bypass.

### Is Firefox better for Recruiter?

I pick one core and keep it. Firefox/Camoufox exists if you installed it. Recruiter is a Chromium-shaped web app on most desks I see. Do not bounce cores inside one folder.

### Cloud Recruiter session?

The vendor holds the inbox cookies. I keep licensed recruiting on local disk unless the company standardized otherwise. [Compare local versus cloud](/compare).

Pay for Recruiter. Put that login in a local folder. Keep Pages, ads, and personal LinkedIn from mixing when the logins are separate. Do not build an unofficial inbox machine.

More notes sit under [Social media](/blog/social-media). [Download MaskWright](/download) for the Windows launcher.
