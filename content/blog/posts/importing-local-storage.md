---
slug: importing-local-storage
title: Importing localStorage
metaTitle: Importing localStorage as a second jar
metaDescription: No localStorage import page in the crawl. Product supports JSON import and export. Treat this as jar hygiene, not as a way to buy a warmed session.
excerpt: No localStorage import page in the crawl. Product supports JSON import and export. Treat this as jar hygiene, not as a way to buy a warmed session.
author: Jordan Hale
published: 2026-06-30
category: privacy
tags: privacy, local, how-to, import, localstorage
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on importing localStorage beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, backing-up-the-store, export-and-import-cookies, disk-use-and-user-data, audit-trails-you-cannot-have-without-a-server, ads-in-the-dashboard-not-in-your-tabs, do-not-email-a-user-data-folder, free-app-owned-ad-slots
---

There was no localStorage import page in the crawl. The product has the feature anyway. MaskWright imports and exports a JSON array of `{ origin, items }`. This how-to is hygiene for a profile you already have a right to open. It is not a way to buy a warmed session.

The rest of the cluster lives under [Privacy](/blog/privacy). Authorized work only.

## The file and the apply path

IPC: `profiles:importLocalStorage`, `profiles:exportLocalStorage`. The working file is `maskwright-localstorage.json`, plaintext JSON. On Chromium, values are injected on new documents via CDP `Page.addScriptToEvaluateOnNewDocument`. That means: launch the profile, then navigate. It is not a guarantee that every origin's LevelDB was rewritten while the browser was closed.

[Export and import cookies](/blog/export-and-import-cookies) is the first store. Do both when you restore a session. Cookies on the wire and storage in the origin are different doors. A site can keep the durable id in storage and the short token in a cookie.

| Step | What happens |
| --- | --- |
| Export | JSON array of `{ origin, items }` written to disk |
| Import | File parsed, staged for the profile |
| Launch | CDP injects on new documents |
| After launch | Engine also writes its own LevelDB as you browse |

`profiles.json` is AES-256-GCM. This JSON is not. The live user-data tree is not encrypted by our code. [Disk use](/blog/disk-use-and-user-data) still grows as the engine writes its own storage after launch. Our export is a snapshot of what we chose to serialize, not a forensic image of every origin.

## What I import

A backup I made. A move between machines I own. A rebuild of a folder I still have a right to use.

I do not import a pack from a marketplace. Origins in the file are a map of the profile's past. Someone else's map is someone else's graph.

I do not import Brand A's storage into Brand B. I do not import a research profile into an ads profile. Tokens are ids.

I read the JSON before I apply it. If I see origins I do not recognize, I stop.

## What I do not expect

Bit-identical restore of every key the engine ever wrote. Partitioned storage, extra APIs, and IndexedDB are outside this file. If you need the whole house, [back up the store](/blog/backing-up-the-store) and copy `profiles/<uuid>/`. That copy is a bigger secret. [Do not email a user-data folder](/blog/do-not-email-a-user-data-folder).

An audit log of who imported. [Audit trails you cannot have without a server](/blog/audit-trails-you-cannot-have-without-a-server). mtime on the JSON is a hint. Process is who held the USB.

A cloud sync. There is none. [What leaves this machine](/blog/what-leaves-this-machine) does not include this file. [Ads in the dashboard](/blog/ads-in-the-dashboard-not-in-your-tabs) and [owned ad slots](/blog/free-app-owned-ad-slots) fund the app. They do not get your storage export.

Firefox apply parity is not the Chromium CDP story. Test that profile or use Chromium for restores you care about.

## When I refuse the import

I refuse a file I did not export. Marketplace warmed storage is a bought graph. I refuse a dump that mixes two brands. I refuse to import into a profile that already has a live login I intend to keep, unless I am deliberately replacing that store.

I also refuse to treat the JSON as encrypted because the index is. `profiles.json` is AES-256-GCM. `maskwright-localstorage.json` is not. Anyone with the file has the second store. Store it like a cookie export: offline, named, deleted when you are done.

A throwaway research profile should start empty. Importing storage into a cold profile is how a research folder stops being cold.

## Operator sequence

1. Export from the profile that owns the session.
2. Store the file offline, next to the cookie export if you took one.
3. Import into an empty or matching profile, not into a live foreign login.
4. Launch and open the origin you care about.
5. Confirm the app state you expected (theme is a poor check; a token-backed view is better).
6. Delete spare copies from Downloads.

If the import does nothing, you may have looked at a document that was already open before the script ran, or an origin that was not in the file. Close, relaunch, navigate again. If it still fails, you may be on a core path that does not apply storage the same way. Do not debug by pasting the JSON into a ticket.

## FAQ

**Why did import do nothing?**
The document may have been open before the script ran. Relaunch and navigate. Or the origin was not in the file. Or you are on Firefox without a verified apply path.

**Is this file encrypted?**
No. Plaintext JSON.

**Should I import into a live ads profile?**
Only if you are deliberately replacing that store. Do not mix brands.

Import localStorage as a second cookie store when you are restoring your own profile. Keep the file plaintext-secret. Keep it out of the other brand. That is the page the crawl never wrote, on purpose: hygiene, not a market.
