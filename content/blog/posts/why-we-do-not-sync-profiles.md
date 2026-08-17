---
slug: why-we-do-not-sync-profiles
title: Why we do not sync profiles
metaTitle: Why we do not sync profiles to a cloud
metaDescription: No cloud profile sync in the product. That is the point. This commercial page treats missing sync as architecture, not as a feature gap. Authorized work only.
excerpt: No cloud profile sync in the product. That is the point. This commercial page treats missing sync as architecture, not as a feature gap. Authorized work only.
author: Jordan Hale
published: 2026-08-07
category: privacy
tags: privacy, local, antidetect, sync
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on why we do not sync profiles beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, who-holds-the-cookie-jar, data-residency-is-your-disk, offline-operator-days, cloud-phones-versus-local-windows, why-we-refuse-team-seats, what-is-a-cloud-phone, contractor-access-done-right
---

No cloud profile sync in the product. That is the point. Missing sync is architecture, not a checkbox we forgot. If you need the same live session on a cafe PC without copying a folder, you are asking for a locker. We will not be that locker.

This commercial page sits in [Privacy](/blog/privacy) because sync is how a local store becomes a second custodian.

## What sync would mean

A MaskWright account. A replica of `profiles.json` and of every user-data dir (or a clever delta of cookies and storage). A password reset that restores Ads Manager. A seat that launches the same uuid on someone else’s laptop. [Team seats](/blog/why-we-refuse-team-seats) are the roster version of the same no.

[Who holds the cookie jar](/blog/who-holds-the-cookie-jar) would become “we do, in the region we picked.” [Data residency](/blog/data-residency-is-your-disk) would become a brochure. [Offline days](/blog/offline-operator-days) would depend on our API.

## What you do instead

Copy `maskwright-data` yourself, encrypted volume, USB you control. Treat it like a password database. [Contractor access](/blog/contractor-access-done-right) is platform roles, not a synced profile. Two PCs for one person is a copy plus the risk that both are live at once (cookie races, 2FA storms). I would rather you feel that risk than hide it behind a sync toggle.

[What leaves this machine](/blog/what-leaves-this-machine) stays ads, updates, geo. Sync would add the whole store to that list. [Cloud phones](/blog/what-is-a-cloud-phone) and [versus local Windows](/blog/cloud-phones-versus-local-windows) already sync by existing on their disk.

`profiles.json` is AES-256-GCM. The trees you would have synced are not encrypted by us. A sync pipe would have been a pipe of plaintext Chromium dirs unless we invented a second product.

| Need | What we offer |
| --- | --- |
| Same profile on PC 2 | You copy the store |
| Recover after disk death | Your backup |
| Contractor launches the session | No; use platform roles |
| Cafe laptop, no USB | Not this product |

A cafe laptop without a USB is the demo cloud products win. I still will not stream Seller Central through a vendor for that hour. Use platform mobile apps on a phone you hold, or wait until you are back at the tower. Inconvenient. Also one fewer replica.

If two of your own PCs both need the same profile, copy while both browsers are quit. Do not live-sync the tree. Chromium will thank you by not corrupting cookies. After copy, treat one as primary. Two live copies of one session is how you fight yourself.

`MASKWRIGHT_STORE_KEY` should be the same on a restore if you set it. If you relied on hostname+username derivation, restore onto the same Windows user or you will not open the index.

Pushback I hear: “I travel.” Then carry an encrypted copy, or use the platform’s own mobile app on a phone you hold. Do not stream Seller Central through a vendor for a cafe hour. Live-syncing Chromium trees while they are open is how cookies corrupt. Quit, copy, treat one PC as primary.

## FAQ

### Will you add optional iCloud-style sync?

Not in 0.1, and not as a direction I want. Optional sync is still a replica we would have to protect.

### Can I sync with Syncthing myself?

You can sync the folder with any tool you trust. You become the sync vendor. Live Chromium dirs hate being synced while open. Close the profile first. Expect corruption if you do not.

### Is the ads JSON “sync”?

No. It is a public creatives file. It does not contain your cookies. [Download MaskWright](/download) if you wanted the store to stay put.

### Can I use git to sync maskwright-data?

Please do not. Binary Chromium trees and git are a bad mix, and a remote git host is another landlord. Encrypted USB while browsers are quit is the boring copy.

Two live copies of one session is how you fight yourself. Pick a primary PC.

Missing sync is the feature. Convenience lives on cloud products. Custody lives on your disk. Pick one per login, on purpose.
