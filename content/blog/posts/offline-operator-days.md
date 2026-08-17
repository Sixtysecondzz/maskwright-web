---
slug: offline-operator-days
title: Offline operator days
metaTitle: Offline operator days in a local browser
metaDescription: CRUD works offline. Ads, updates, and geo checks need a network unless blocked. This commercial page is what still works when the WAN does not.
excerpt: CRUD works offline. Ads, updates, and geo checks need a network unless blocked. This commercial page is what still works when the WAN does not.
author: Jordan Hale
published: 2026-07-08
category: privacy
tags: privacy, local, offline, antidetect
readingTime: 4
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on offline operator days beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, why-we-refuse-team-seats, who-holds-the-cookie-jar, contractor-access-done-right, why-we-do-not-sync-profiles, do-not-email-a-user-data-folder, data-residency-is-your-disk, audit-trails-you-cannot-have-without-a-server
---

Create, list, edit, and delete profiles work without a WAN. Ads, updates, and geo checks do not, unless you block those hosts and accept the gaps. This page is what still works when the line is down. I will not sell “fully offline” as a feature we shipped.

The note sits in [Privacy](/blog/privacy) because offline is the honest twin of [what leaves this machine](/blog/what-leaves-this-machine).

## What works with the cable pulled

Local IPC. The encrypted `profiles.json` index (AES-256-GCM). The user-data dirs on disk. Starting a profile that does not need a proxy check or geo align. Browsing sites that are actually reachable (which, with the cable pulled, is none, unless you meant “app offline, network still up for sites”).

Two different offlines: (1) MaskWright’s cloud chores skipped, sites still open. (2) The whole laptop air-gapped. (1) is a cabin with hotel Wi-Fi you only use inside Chromium. (2) is a vault PC. We support (1) for CRUD and launch of an already-configured profile. We do not pretend (2) still updates the app.

## What waits for a network

`updates.maskwright.com` on packaged builds. `maskwright.com` ads JSON and dashboard iframes. ip-api.com / geojs.io when you ask for exit geo. The sites you came to use. [No sync](/blog/why-we-do-not-sync-profiles) means you are not blocked on our profile API. There is not one.

[Who holds the cookie jar](/blog/who-holds-the-cookie-jar) stays you. [Data residency](/blog/data-residency-is-your-disk) stays the folder. [No team seats](/blog/why-we-refuse-team-seats) and [no audit SIEM](/blog/audit-trails-you-cannot-have-without-a-server) are the same missing server. [Contractors](/blog/contractor-access-done-right) still should not get a zip. [Do not email the folder](/blog/do-not-email-a-user-data-folder) even more when you are traveling.

| Task | Offline? |
| --- | --- |
| Create / rename / delete profile | Yes |
| Launch already-configured profile | Yes |
| Geo-align to a new proxy | Needs lookup |
| App update | Needs updater |
| Dashboard ads | Needs fetch |
| Gmail in the profile | Needs Google |

A cabin weekend I actually run: profiles already created, proxies already pasted, geo already aligned from last week. Hotel Wi-Fi for the shops. MaskWright updater can wait. Ads chrome can sit empty if I blocked the feed. I do not create a brand-new proxy and expect timezone match without a lookup.

Air-gap is different. The app still wants to fetch ads when the shell is online. The store does not. If you need a vault PC that never talks to maskwright.com, firewall it and accept blank slots plus no packaged updates. Carry installers on USB if you must update.

Do not confuse “CRUD offline” with “Gmail offline.” The profile can launch. Google still needs Google.

Pushback I hear: “then it is not really local.” CRUD is local. Google is not. Updater and ads are chores when the line is up. I will not sell air-gap as a feature. I will sell a store that still opens in a cabin if the profile was already configured. Align a brand-new proxy later, when ip-api.com can answer.

## FAQ

### Will ads break the app if the feed 404s?

The rotator fails. The store should still open. I have not promised a pretty empty chrome. I have promised CRUD without our hosts.

### Can I disable geo forever?

Do not ask for exit alignment. Block the hosts. Accept timezone that follows the OS.

### Is this a selling point against cloud browsers?

Yes, for CRUD. No, for “the internet is down and I still need Ads Manager.” [Download MaskWright](/download) if the local store was the point.

### Can I cache a site for true air-gap browsing?

Not as a MaskWright feature. Offline CRUD is the store. Offline Gmail is Google’s problem, and usually a no. Name which offline you meant.

Hotel Wi-Fi for the shops is enough. The updater can wait. Blank ads chrome is fine.

Offline is partial. The store can sit quiet. The shell still has chores when the line is up. Name which offline you meant before you call the product air-gapped.
