---
slug: local-storage-is-a-second-cookie
title: localStorage is a second cookie jar
metaTitle: localStorage is a second cookie jar on the operator disk
metaDescription: Zero localStorage articles in the crawl. Product imports and exports JSON. Treat localStorage as a second jar, because sites already do. Authorized work only.
excerpt: Zero localStorage articles in the crawl. Product imports and exports JSON. Treat localStorage as a second jar, because sites already do. Authorized work only.
author: Jordan Hale
published: 2026-07-05
category: privacy
tags: privacy, local, cookies, localstorage, isolation
readingTime: 4
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on localStorage is a second cookie jar beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, if-a-vendor-is-breached, downloads-folder-discipline, update-channel-habits, extensions-inside-a-profile, why-we-dropped-bandwidth-sharing, profile-encryption-at-rest, what-is-a-cloud-browser
---

The crawl had zero localStorage articles. Sites did not wait. Tokens, theme flags, "remember this device," and half a checkout live in `localStorage` while operators only export cookies. MaskWright can import and export a JSON array of `{ origin, items }`. Treat that file as a second cookie store, because the site already does.

The rest of the cluster lives under [Privacy](/blog/privacy). Authorized work only. A second store you bought in a chat is still someone else's session.

## Why cookies are not the whole login

Cookies go on requests. `localStorage` stays in the origin and is read by JavaScript. A site can keep the session cookie short and keep the durable id in storage. Clearing cookies and leaving storage is a half logout. Copying cookies and leaving storage behind is a half restore.

IndexedDB is a third store. This page stays on `localStorage`. The habit is the same: if it is in the user-data directory, it belongs to the profile.

Two profiles that share a directory share both stores. Two profiles that do not share a directory do not share `localStorage` unless you imported the JSON. Isolation is the folder plus what you refuse to paste.

## What the product does

IPC: `profiles:importLocalStorage`, `profiles:exportLocalStorage`. The file is `maskwright-localstorage.json`, plaintext JSON. On Chromium, import is injected on new documents via CDP `Page.addScriptToEvaluateOnNewDocument`. It is not a magic write into every origin's LevelDB while the browser is closed. Treat it as apply-at-launch for the next documents.

| Store | Format we ship | Apply path | Encrypted? |
| --- | --- | --- | --- |
| Cookies | Netscape export; Netscape or JSON import | CDP `Network.setCookies` | File is plaintext |
| localStorage | JSON `{ origin, items }` | CDP script on new documents | File is plaintext |
| IndexedDB | None | Lives in the user-data tree | Tree is not encrypted by us |

[What encryption at rest covers](/blog/profile-encryption-at-rest): only `profiles.json` is AES-256-GCM. This JSON is not. Mode `0o600` is best effort. Windows may ignore it.

[Extensions](/blog/extensions-inside-a-profile) can read `localStorage` for origins they can touch. A cookie editor that also dumps storage is a key-copying tool. [Downloads](/blog/downloads-folder-discipline): do not leave the export in a shared tray.

We do not upload the file. [What leaves this machine](/blog/what-leaves-this-machine) is still ads, updater, geo, and browsing. [If a vendor is breached](/blog/if-a-vendor-is-breached) and they held synced storage, they held the second store. Local disk is the contrast, not a vault slogan.

## What I export for

A backup I store offline. A move between two machines I own. A restore after I rebuilt a profile and I still have a right to that login.

I do not export to mail a contractor. I do not export to buy or sell a warmed session. I do not import a pack from a Telegram channel. Origins in that file are a map of where the profile has been.

I do not mix Brand A's storage into Brand B. Tokens are not portable decorations. They are ids.

## How it sits next to the other files

The live Chromium tree also has its own LevelDB for storage the site wrote after launch. Exporting our JSON is not a complete forensic image of every origin. It is the tool we shipped. If you need a full tree copy, you are copying `profiles/<uuid>/`, which is still plaintext and still a house.

[A cloud browser](/blog/what-is-a-cloud-browser) holds both stores on someone else's disk. [We dropped bandwidth sharing](/blog/why-we-dropped-bandwidth-sharing) so your last mile is not a product. Neither fact encrypts `maskwright-localstorage.json`.

[Update channel habits](/blog/update-channel-habits) do not rewrite storage. A core bump can change how the engine reads it. Keep a backup before you switch binaries under a live profile.

## Operator habits

Name the file like a key. Store it next to the cookie export, offline. Delete copies you do not need. Do not commit it to git. Do not paste it into a ticket.

After import, launch the profile and confirm the origins you expected, not a surprise shop you forgot was in the dump.

If you only need cookies, do not import storage from a different generation of the profile. Mismatched stores are a franken-session.

## FAQ

**Is localStorage encrypted because profiles.json is?**
No. The import file is plaintext JSON.

**Does import rewrite LevelDB while the browser is closed?**
No. It applies on new documents at launch via CDP.

**Should I import a pack I bought?**
No. Origins in that file are someone else's graph.

`localStorage` is a second cookie store on the operator disk. Export and import JSON if you have a right to the session. Keep the file plaintext-secret. Keep it out of the other brand's profile. That is the whole missing article the crawl never wrote.
