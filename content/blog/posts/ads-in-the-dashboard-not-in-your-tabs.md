---
slug: ads-in-the-dashboard-not-in-your-tabs
title: Ads in the dashboard, not in your tabs
metaTitle: Ads in the dashboard, not in your tabs
metaDescription: Ads in dashboard chrome, not in launched tabs. Feed plus iframe wrappers. This privacy note is where the free app puts the bill, and where it does not.
excerpt: Ads in dashboard chrome, not in launched tabs. Feed plus iframe wrappers. This privacy note is where the free app puts the bill, and where it does not.
author: Jordan Hale
published: 2026-05-27
category: privacy
tags: privacy, local, antidetect, app
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on ads in the dashboard, not in your tabs beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, free-app-owned-ad-slots, disk-use-and-user-data, what-is-cookie-based-session-management, backing-up-the-store, sharing-profiles-is-sharing-cookies, importing-local-storage, unsigned-windows-builds-and-smartscreen
---

The free app puts the bill in chrome we draw: a sidebar slot and a footer slot in the operator UI. It does not inject banners into Seller Central. That is the placement I will defend. I will also name the caveat, because the ads feed can still open a URL when a profile starts.

This privacy note sits in [Privacy](/blog/privacy). [A free app funded by owned ad slots](/blog/free-app-owned-ad-slots) is the monetization twin. [What leaves this machine](/blog/what-leaves-this-machine) is the ledger.

## What you see in the dashboard

Iframes from `https://www.maskwright.com/electron-ad-sidebar` (300 by 250) and `electron-ad-test` (728 by 90). Those wrappers load third-party scripts (effectivecpmnetwork.com, highperformanceformat.com among names in the routes). They see a normal web ad request from the machine that loaded the operator UI. They do not get your `profiles.json`.

A JSON feed at `https://maskwright.com/ads/v1/creatives.json` (override `MASKWRIGHT_ADS_URL`) rotates every 15 to 20 seconds. The dashboard iframes currently use hardcoded wrapper URLs. They do not bind `src` to the feed’s click URL. Two channels, one app.

## The launch-tab caveat

The ads package can include `launchUrl`, `launchTabUrl`, and `launchTabIntervalSec`. Those can open a page in a launched Chromium via internal CDP. Hosted examples have pointed at lab pages. Defaults in code have pointed at an ad network host. So the title is placement in chrome we draw, plus a hook I will not hide.

That is still not “we inject a banner into every site.” It is a tab the profile may open. If that bothers you, firewall the feed and the wrappers. There is no shipped toggle in 0.1.

## What ads are not

Not your cookie store. [Cookie-based sessions](/blog/what-is-cookie-based-session-management). [Sharing a profile](/blog/sharing-profiles-is-sharing-cookies) is still sharing cookies, ads or not. Not a backup. [Backing up the store](/blog/backing-up-the-store). Not [localStorage import](/blog/importing-local-storage). Not [disk use](/blog/disk-use-and-user-data) except whatever cache the iframes leave in Electron. [Unsigned builds and SmartScreen](/blog/unsigned-windows-builds-and-smartscreen) is a different Windows warning.

| Surface | Ads? |
| --- | --- |
| Operator sidebar / footer | Yes, iframes |
| Seller Central page content | Not injected by us |
| Optional launch tab | Possible via ads hooks |
| Profile cookie upload | No |

I want the operator UI to look like a tool with ads, not like a page you shop on. Seller Central should look like Seller Central. If a launched profile opens an extra tab to an ad host because of a feed hook, that is a tab you can close, and a reason to read the JSON. It is still not a skin over the shop.

Electron loads those iframes even while a profile is quit. That is app traffic. It is in the leave-the-machine pillar. Blocking `maskwright.com` blanks the slots. The store still opens. [Unsigned Windows builds](/blog/unsigned-windows-builds-and-smartscreen) are a separate warning on first install, not an ad network.

If a future build adds a disable switch, this page should say so. August 2026: no switch I can point at.

Pushback I hear: “just add a paywall.” There is no payment flow in 0.1. Blocking hosts blanks slots. The store still opens. Read the JSON if a launch tab surprises you. The title is placement in chrome we draw, plus a hook I will not hide. August 2026: no disable switch I can point at.

## FAQ

### Can I pay to remove ads?

No payment flow in 0.1. Block hosts if you must live with blank slots.

### Do ad networks see which profiles I have?

They see the operator UI’s web requests, not a list of uuids. I will not invent “zero identifiers.” Ordinary ad requests are ordinary.

### Is this why the app is free?

Yes. [Download MaskWright](/download). Read the pillar if you want the full leftover list.

We fund the launcher with slots in the launcher. We do not fund it by selling your last mile or by painting over the shop you logged into. The launch-tab hook stays on the record so the title does not get cleaner than the code.
