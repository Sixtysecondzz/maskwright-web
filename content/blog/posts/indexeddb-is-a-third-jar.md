---
slug: indexeddb-is-a-third-jar
title: IndexedDB is a third jar
metaTitle: IndexedDB is a third jar on disk
metaDescription: IndexedDB is a third jar. No crawl page. Product does not encrypt it. Treat it like cookies and localStorage: it stays in the room, and it is still data.
excerpt: IndexedDB is a third jar. No crawl page. Product does not encrypt it. Treat it like cookies and localStorage: it stays in the room, and it is still data.
author: Jordan Hale
published: 2026-07-02
category: privacy
tags: privacy, local, indexeddb, isolation
readingTime: 4
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on IndexedDB is a third jar beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: pre-made-cookies-and-cookie-robots, geo-lookups-leave-the-machine, what-leaves-this-machine, unsigned-windows-builds-and-smartscreen, browser-security-versus-antidetect, sharing-profiles-is-sharing-cookies, profile-encryption-at-rest, what-is-cookie-based-session-management
---

IndexedDB is a third cookie store. There was no crawl page. Sites use it for larger structured data than `localStorage` will hold: offline caches, draft posts, token-adjacent records, entire app states. MaskWright does not encrypt it. There is no IndexedDB import/export IPC in the audit like the cookie and localStorage JSON paths. Treat it like the other stores anyway: it stays in the profile, and it is still data.

The rest of the cluster lives under [Privacy](/blog/privacy). Authorized work only.

## Three stores, one folder

| Store | Goes on requests? | First-class import/export? | Encrypted by us? |
| --- | --- | --- | --- |
| Cookies | Yes | Netscape / JSON | File is plaintext; tree is not wrapped |
| localStorage | No. JS in the origin | JSON `{ origin, items }` | File is plaintext |
| IndexedDB | No. Origin databases | No IPC in the audit | Lives in the user-data tree, unencrypted by us |

Cookies go on requests. [Cookie-based session management](/blog/what-is-cookie-based-session-management) is the login most people mean. We can import Netscape or JSON and export Netscape.

localStorage is origin JS storage. We can import and export JSON.

IndexedDB is origin databases on disk inside the user-data tree. We do not ship a first-class dump button. The engine still writes the files. Copying `profiles/<uuid>/` copies them. [Sharing a profile is sharing cookies](/blog/sharing-profiles-is-sharing-cookies) is incomplete if you only say cookies. Sharing the folder shares all three.

Two profiles that do not share a directory do not share IndexedDB unless you copied the tree. Isolation is still the folder.

## What encryption does not cover

[What encryption at rest covers](/blog/profile-encryption-at-rest): only `profiles.json` is AES-256-GCM. IndexedDB lives under the per-profile Chromium (or Firefox) directory. Plain files. Cookie JSON and localStorage JSON are also plaintext. I will not let a third store hide in the slogan.

Unknown: whether Chromium's own OS-dependent protections apply to those files. Do not take our AES line as a wrap.

[Unsigned Windows builds and SmartScreen](/blog/unsigned-windows-builds-and-smartscreen) are about the installer, not about these databases. [Browser security versus antidetect](/blog/browser-security-versus-antidetect) is a different job. Isolation is not full-disk encryption.

## Why operators miss it

They export cookies, maybe storage, and they call the profile portable. The site still has a database in the old folder. Restore looks logged in and broken, or logged out and haunted, depending on what the app read first.

They delete cookies in DevTools and leave IndexedDB. Half logout.

They clone a live tree to save time and move a third store they never opened. [Pre-made cookies](/blog/pre-made-cookies-and-cookie-robots) are already a bad idea. A pre-made user-data zip is worse. It is all three stores plus cache.

They think a geo lookup or an ads iframe touched IndexedDB. [Geo lookups leave the machine](/blog/geo-lookups-leave-the-machine). [What leaves this machine](/blog/what-leaves-this-machine) is traffic. IndexedDB is occupancy. Different ledgers.

Sites that feel like apps (editors, suites, some storefronts) lean on this store more than a 2018 cookie page ever did. If the product remembers a draft after you cleared cookies, look here before you blame the first store.

## What I do with it

I treat a full folder copy as a full session copy. If I only have a right to move cookies, I do not copy the tree.

I do not hand-edit LevelDB to clean a profile. I retire the profile from the app, or I start a new folder, when the third store is the contamination.

I do not expect an IndexedDB JSON button that we did not ship. If we add one later, this page will say so. Until then, the tool is the directory.

I keep backups of profiles I care about as whole trees, offline, because the third store will not be in the cookie export.

I do not mail the tree. I do not put it on a shared Drive. A contractor gets a role, not a database.

## Firefox and Chromium

Both engines have IndexedDB. The on-disk layout differs. You cannot copy a Chromium IndexedDB folder into a Firefox profile and call that a restore. Family stays with family.

Disk use grows here when a site treats the origin like an app. That is normal. It is still the profile's data. A research vacuum that never logged in can still accumulate origin databases from every site you opened. That is why a throwaway profile should stay throwaway, and why a login profile should not be the place you wander.

## FAQ

**Can I export IndexedDB like cookies?**
Not as a first-class button. Copy the user-data directory if you mean to copy the whole life.

**Is IndexedDB encrypted because profiles.json is?**
No.

**Can I copy Chromium IndexedDB into Firefox?**
No. The on-disk layout differs.

IndexedDB is a third store on disk. The product does not encrypt it. Cookies and localStorage have JSON tools. This one lives in the user-data tree. Keep it in the profile it belongs to. Copy the tree only when you mean to copy the whole life. That is the missing crawl page, written as custody, not as a trick.
