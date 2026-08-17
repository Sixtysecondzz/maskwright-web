---
slug: disk-use-and-user-data
title: Disk use and user-data directories
metaTitle: Disk use and user-data directories on the operator disk
metaDescription: Chromium user-data dirs grow. No crawl page on disk use. This note covers what fills the folder and why a local workshop still has a real disk cap.
excerpt: Chromium user-data dirs grow. No crawl page on disk use. This note covers what fills the folder and why a local workshop still has a real disk cap.
author: Jordan Hale
published: 2026-06-10
category: privacy
tags: privacy, local, antidetect, disk
readingTime: 4
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on disk use and user-data directories beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, ads-in-the-dashboard-not-in-your-tabs, backing-up-the-store, free-app-owned-ad-slots, importing-local-storage, what-is-cookie-based-session-management, export-and-import-cookies, sharing-profiles-is-sharing-cookies
---

Chromium user-data directories grow. There was no crawl page on disk use, because cloud lockers hide the bill in a seat. A local app does not. Each profile is a folder. Cache, service workers, IndexedDB, and GPU blobs pile up. The cap is the disk, not a profile meter. This note says what fills the folder.

The rest of the cluster lives under [Privacy](/blog/privacy). Authorized work only.

## Where the bytes live

Store root: `{Electron userData}/maskwright-data`. Index: `profiles.json`, small, AES-256-GCM. Profiles: `profiles/<uuid>/`, large, not encrypted by our code. Import files for [cookies](/blog/export-and-import-cookies) and [localStorage](/blog/importing-local-storage) are plaintext JSON and usually tiny next to a live tree.

Cores (custom Chromium, Camoufox) live under user-data as well when you install them. Those are binaries, not logins, and they are shared. One core serves many profiles. Do not delete a core to clean a profile.

The Electron app itself has a user-data tree. That is the shell, ads cache, and updater state. [Ads in the dashboard](/blog/ads-in-the-dashboard-not-in-your-tabs) and [owned ad slots](/blog/free-app-owned-ad-slots) are how the free app is funded. They add some disk in the shell. They are not your brand cookies.

[What leaves this machine](/blog/what-leaves-this-machine) is traffic. This page is occupancy.

| Location | Typical size | Encrypted by us? |
| --- | --- | --- |
| `profiles.json` | Small | Yes. AES-256-GCM |
| `profiles/<uuid>/` | Grows without a meter | No |
| Cookie / localStorage JSON | Tiny next to a live tree | No |
| Installed cores | Large, shared | N/A (binaries) |
| Electron shell user-data | Ads cache, updater | N/A |

## What grows inside a profile

**Cache and code cache.** Pages you visit, images, compiled JS. A research profile that browses all day will dwarf a profile that only opens Ads Manager.

**Cookies and site storage.** [Cookie-based session management](/blog/what-is-cookie-based-session-management) is the login. localStorage and IndexedDB are the other stores. They are smaller than cache until a site treats storage like a database.

**Service workers and extensions.** Unpacked add-ons and their own caches. A shipping extension that hoards rates will show up here.

**GPU and shader disk cache.** Windows plus Chromium likes to keep these. They are not secrets in the cookie sense. They still count.

**Crash dumps and logs.** After a bad day, look here before you blame the store.

I will not publish a "safe delete these subfolders" guide. Deleting the wrong LevelDB logs you out or corrupts the profile. If you need space, delete a profile you no longer need from the app, or copy the store off and remove a retired profile on purpose.

## The cap is real

There is no profile cap in code. Twenty profiles that each ate 2 GB is 40 GB plus cores plus backups. [Backing up the store](/blog/backing-up-the-store) doubles that if you keep a full copy. SSD wear and disk-full launches are operator problems. Cloud tools hide this until the invoice.

A full disk can fail a persist of `profiles.json` or a launch into `--user-data-dir`. I do not wait for that. I look at folder sizes when I add a profile, not after Windows complains.

Sharing a profile to save disk is sharing cookies. [Sharing a profile is sharing cookies](/blog/sharing-profiles-is-sharing-cookies). Two brands in one folder is not a storage optimization. It is a join.

## What I do when a profile is huge

I ask whether the profile is a research vacuum that should have been a throwaway. Public browsing does not belong in a login tree.

I export cookies and storage if I still need the session, then I retire the folder from the app if the cache is the problem and I can rebuild. I do not hand-delete Cache while the process is running.

I keep backups off the work disk when I can. An external copy is a restore path, not a second live tree I launch by mistake.

I do not clean with a random CCleaner-style tool pointed at `maskwright-data`. Those tools do not know which LevelDB is a login.

## Encryption does not shrink the tree

AES-256-GCM on the index does not compress Chromium. BitLocker does not either. If a page told you encrypted profiles are small, they meant a locker thumbnail, not a user-data directory.

Unknown: whether we will encrypt trees in a later build. Until then, plan disk as if the profiles are ordinary browser profiles, because they are.

## FAQ

**Is there a profile cap?**
Not in code. Disk, RAM, and honesty are the limits.

**Can I delete Cache to save space?**
I do not hand-delete LevelDB or Cache while the process is running. Retire the profile from the app if you can rebuild.

**Does merging two brands into one folder save disk safely?**
No. That shares cookies.

User-data directories grow. The app is folders on the operator disk. Watch the sizes, retire profiles you do not need, back up the ones you do, and do not merge logins to save a gigabyte.
