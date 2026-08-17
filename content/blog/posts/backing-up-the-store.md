---
slug: backing-up-the-store
title: Backing up the local store
metaTitle: Backing up the local MaskWright store
metaDescription: No cloud sync means you back up maskwright-data. This how-to is the operator's job: copy the store, test the restore, and keep the copy off the work rooms.
excerpt: No cloud sync means you back up maskwright-data. This how-to is the operator's job: copy the store, test the restore, and keep the copy off the work rooms.
author: Jordan Hale
published: 2026-05-31
category: privacy
tags: privacy, local, how-to, backup, antidetect
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on backing up the local store beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, disk-use-and-user-data, importing-local-storage, ads-in-the-dashboard-not-in-your-tabs, export-and-import-cookies, free-app-owned-ad-slots, audit-trails-you-cannot-have-without-a-server, what-is-cookie-based-session-management
---

No cloud sync means you back up `maskwright-data`. If the disk dies and you did not copy the store, the profiles are gone. We cannot restore them. This how-to is the operator’s job: copy the store, test the restore, and keep the copy off the work profiles.

The page lives in [Privacy](/blog/privacy) because a backup is a second cookie store.

## What to copy

The whole `maskwright-data` directory: encrypted `profiles.json` plus every `profiles/<uuid>/`. [Disk use](/blog/disk-use-and-user-data) explains why it is large. Close launched browsers first. Copying a live Chromium tree is how you get a corrupt backup.

Prefer an encrypted volume or a disk you control. Not a random Drive folder named “chrome backup.” That is emailing the session with extra steps.

## How I restore

Install MaskWright. Stop it. Replace the store directory with the copy. Start it. Launch one profile. Confirm the login. If the hostname/username changed and you did not set `MASKWRIGHT_STORE_KEY`, the derived key may not open `profiles.json`. Set the same env var you used before, or restore onto the same Windows user. AES-256-GCM is unforgiving. That is the point.

Cookie-only restore: [export/import cookies](/blog/export-and-import-cookies) and [localStorage](/blog/importing-local-storage). That is a partial session. [Cookie-based session management](/blog/what-is-cookie-based-session-management) is the definition. A full folder copy is the real backup.

## What a backup is not

Not an audit log. [No SIEM](/blog/audit-trails-you-cannot-have-without-a-server). Not ads. [Ads in the dashboard](/blog/ads-in-the-dashboard-not-in-your-tabs) and [owned ad slots](/blog/free-app-owned-ad-slots) do not replicate your store. [What leaves this machine](/blog/what-leaves-this-machine): we do not hold a replica. You do, if you made one.

| Step | Detail |
| --- | --- |
| 1 | Quit profiles |
| 2 | Copy `maskwright-data` to encrypted media |
| 3 | Store the media away from the work PC |
| 4 | Test restore on a spare user or VM |
| 5 | Repeat on a schedule you will actually keep |

On Windows I copy to a BitLocker USB labeled with a date, then a second copy on a NAS that is not world-readable. I do not keep the only backup in the same laptop bag as the laptop. I test restore on a spare Windows user so I learn about `MASKWRIGHT_STORE_KEY` before the disk dies.

File History and OneDrive are easy and also how cookie trees land in a cloud you did not mean to use. If OneDrive is backing up Desktop and you parked a zip there, you synced the session. Exclude `maskwright-data` from consumer cloud folders unless you intended that landlord.

Size: Chromium caches bloat. [Disk use](/blog/disk-use-and-user-data) is the sibling. I still copy the tree. A partial copy that misses the cookie DB is a fake backup.

Pushback I hear: “OneDrive is my backup.” Then you hired a cookie landlord named Microsoft unless you excluded `maskwright-data`. Consumer cloud folders are sync. We refused sync in the product so you would notice when you turn it on yourself. Encrypted USB plus a NAS you control is the boring version that still works.

## FAQ

### How often?

Whenever losing yesterday’s logins would hurt. Weekly is a minimum for money profiles.

### Can I exclude cache to save space?

You can try. You can also miss a file Chromium expected. I copy the tree. Disk is cheaper than a mystery.

### Will you offer cloud backup later?

That would be sync. [Download MaskWright](/download) and own the copy.

### Should I back up while a profile is running?

No. Quit Chromium first. A live tree copy is how you restore a mystery. The restore you never tested is still not a backup. Copy, then open it once on a spare user.

Exclude `maskwright-data` from OneDrive unless you intended that landlord. File History is easy and also a second copy you forgot.

The restore you never tested is not a backup. Copy the store. Open it once on purpose. Then you get to call the architecture local-first without pretending disks live forever.
