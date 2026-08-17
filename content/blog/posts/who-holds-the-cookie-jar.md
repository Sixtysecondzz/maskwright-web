---
slug: who-holds-the-cookie-jar
title: Who holds the cookie jar
metaTitle: Who holds the cookie jar on a rented browser
metaDescription: Who holds the cookie jar when the browser is rented. Custody again, from the jar's point of view, so a cloud Chrome is not mistaken for a local room.
excerpt: Who holds the cookie jar when the browser is rented. Custody again, from the jar's point of view, so a cloud Chrome is not mistaken for a local room.
author: Jordan Hale
published: 2026-08-04
category: privacy
tags: privacy, local, cookies, cloud, browser
readingTime: 4
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on who holds the cookie jar beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, offline-operator-days, why-we-do-not-sync-profiles, why-we-refuse-team-seats, data-residency-is-your-disk, contractor-access-done-right, cloud-phones-versus-local-windows, do-not-email-a-user-data-folder
---

The cookie store is the login. Whoever can read the files can open the account. When the browser is rented, the landlord holds the store. When the browser is local, the Windows user holds the store. Do not mistake a streamed Chrome tab for a folder on your disk.

This is custody from the cookie’s point of view. It sits in [Privacy](/blog/privacy) so a cloud session is not sold as isolation you own.

## What the store actually is

Chromium cookies, plus [localStorage](/blog/local-storage-is-a-second-cookie) in spirit, plus IndexedDB, plus service workers. Export Netscape and you copied the key. Zip the user-data dir and you copied more than the key. [Do not email a user-data folder](/blog/do-not-email-a-user-data-folder).

MaskWright: files under `profiles/<uuid>/`. Index encrypted AES-256-GCM. Cookie files and the live DB are not encrypted by our code. [Data residency](/blog/data-residency-is-your-disk) is that path. [No sync](/blog/why-we-do-not-sync-profiles) means we do not hold a second copy. [No team seats](/blog/why-we-refuse-team-seats) means we do not hand the copy through a roster.

## Who holds it in other setups

Cloud browser: vendor. Cloud phone: vendor. [Cloud phones versus local Windows](/blog/cloud-phones-versus-local-windows). Contractor with a zip: the contractor. [Contractor access](/blog/contractor-access-done-right) should be platform roles instead. [Offline days](/blog/offline-operator-days): if you can launch without their API, you are holding it.

[What leaves this machine](/blog/what-leaves-this-machine): we do not upload the store. Sites you visit still set cookies in the store you hold.

| Setup | Who can copy the session |
| --- | --- |
| Local MaskWright | Windows users with disk access; you if you zip it |
| Cloud browser / phone | Vendor, plus you via UI |
| Emailed folder | Anyone on the thread |
| Platform role | Not a cookie copy |

On Windows the holders are: you, anyone with the user password, a backup tool, malware, and anyone you zip the folder to. Chromium may DPAPI some cookies. I still treat the tree as a key. Our AES-256-GCM envelope is the index with proxy passwords, not a promise about the cookie DB.

A streamed tab adds the vendor’s staff and their backups to that list. Isolation between their customers is their claim. Isolation from them is not a claim I accept without the disk being yours.

If you RDP into your own office PC, you still hold it, plus whoever can RDP. That is a smaller list than a multi-tenant antidetect cloud, and a larger list than a laptop that never left the building. Count the people.

Pushback I hear: “the vendor cannot see inside the stream.” They operate the process. Support can reproduce. Backups can copy. A warrant goes to them. Local adds a different list: your Windows users, your backups, malware, anyone you zip. Count the people. Do not add a landlord unless the cafe demo is worth that person.

## FAQ

### Does Chromium encrypt cookies on Windows?

Sometimes, with DPAPI, depending on version and profile. Treat it as a maybe, not as our feature. We still do not wrap the tree.

### If I use a proxy, does the proxy hold cookies?

No. The proxy sees traffic. The cookie files stay in the user-data dir unless you also rented the browser.

### Can MaskWright hold them “for recovery”?

No. That would be sync. [Download MaskWright](/download) and hold the folder yourself.

A streamed tab adds the vendor’s staff and their backups to that list. Isolation between their customers is their claim. Isolation from them is not a claim I accept without the disk being yours.

If you RDP into your own office PC, you still hold it, plus whoever can RDP. That is a smaller list than a multi-tenant antidetect cloud, and a larger list than a laptop that never left the building. Count the people.

Ask “who can tar this?” before you ask “does the fingerprint look OK?” Isolation between profiles is useless if one landlord holds all of them. A streamed tab adds their staff to the list. A zip you mailed adds the thread. Count both.
