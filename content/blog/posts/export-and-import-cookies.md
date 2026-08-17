---
slug: export-and-import-cookies
title: Export and import cookies
metaTitle: Export and import cookies on a local disk
metaDescription: Netscape and JSON. CDP setCookies. Files are plaintext on disk. This 2022-topic refresh is how import works, and why the export is still a secret.
excerpt: Netscape and JSON. CDP setCookies. Files are plaintext on disk. This 2022-topic refresh is how import works, and why the export is still a secret.
author: Jordan Hale
published: 2026-06-16
category: privacy
tags: privacy, local, cookies, how-to, import
readingTime: 5
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on export and import cookies beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, importing-local-storage, audit-trails-you-cannot-have-without-a-server, backing-up-the-store, do-not-email-a-user-data-folder, disk-use-and-user-data, contractor-access-done-right, ads-in-the-dashboard-not-in-your-tabs
---

Cookie export is a live key. The 2022 pages in this query treat it as a feature list. This refresh is how MaskWright import works, and why the file is still a secret. Import accepts Netscape or a JSON array (or `{ cookies: [...] }`). Export writes Netscape. Apply on Chromium is CDP `Network.setCookies` at launch, not a silent write into Chrome's cookie DB while the process is down. The on-disk import file is plaintext.

The rest of the cluster lives under [Privacy](/blog/privacy). Authorized work only. Do not import a pack you bought.

## What the buttons actually do

IPC: `profiles:importCookies`, `profiles:exportCookies`. Parse is `parseCookiesAuto`. Export format is Netscape. The working file `maskwright-cookies.json` is plaintext JSON, mode `0o600` best effort. Windows may ignore the mode.

At Chromium launch, CDP sets the cookies into the session. Comments in the cookie code say this is not the native Chrome cookie database on import. If you expected to drop a file into the user-data tree and have Chrome read it cold, that is a different workflow. Ours is apply-at-launch.

| Action | Format | When it applies |
| --- | --- | --- |
| Import | Netscape, JSON array, or `{ cookies: [...] }` | CDP `setCookies` at Chromium launch |
| Export | Netscape | When you click export |
| On-disk working file | `maskwright-cookies.json`, plaintext | Best-effort `0o600` |

Firefox parity for this path is not the Chromium story. Do not assume the same IPC apply on a Firefox profile until you have tested it.

[Importing localStorage](/blog/importing-local-storage) is the second store. Cookies without storage can be a half session. Storage without cookies can be a half session. Restore both if you restored a profile you still have a right to open.

## Why the export is a secret

The file is a login. Anyone who has it can become the session until the site invalidates it. [Do not email a user-data folder](/blog/do-not-email-a-user-data-folder). Do not email the Netscape dump either. [Contractor access](/blog/contractor-access-done-right) is a platform role, not a dump in Slack.

We do not upload the file. [What leaves this machine](/blog/what-leaves-this-machine) is ads, updater, geo, and browsing. [Ads in the dashboard](/blog/ads-in-the-dashboard-not-in-your-tabs) are not your cookie export. There is no MaskWright server API in the audited code that takes the dump.

`profiles.json` is AES-256-GCM. Cookie JSON is not. The live `profiles/<uuid>/` tree is not encrypted by our code. [Disk use](/blog/disk-use-and-user-data) grows in that tree whether or not you exported. Export is a copy, not a move. Deleting the Netscape file does not log you out of the profile.

[Backing up the store](/blog/backing-up-the-store) copies the trees. That backup is a bigger cookie store. Treat it the same way.

## What I import for

A restore on a machine I own. A move I can explain. A recovery after I rebuilt a profile folder and I still own the login.

I do not import to warm a new profile with someone else's history. I do not import to skip 2FA on an account I do not hold. I do not import into Brand B from Brand A to save time. That is how accounts get linked.

I check the file before I apply it. Hosts I do not recognize are a reason to stop. A dump that includes sites I never opened in that profile is a reason to stop.

## What I cannot audit from the file

[Audit trails you cannot have without a server](/blog/audit-trails-you-cannot-have-without-a-server): a local tool will not tell you who exported last Tuesday. The filesystem mtime is a hint, not a compliance log. If you need a trail, you need process (who had the USB) or a platform that logs roles. We will not invent a server to watch you.

Netscape is also lossy compared with a full Chromium cookie store (partition keys, some modern attributes). Import what we parse. Do not assume bit-identical restore of every cookie the engine ever wrote. For a full house copy, you are back to copying the user-data directory, which is still a secret.

## Operator sequence

1. Export only from a profile you have a right to hold.
2. Store the file offline, named like a key.
3. Import only into a profile that should be that session.
4. Launch and confirm the host you expected.
5. Delete spare copies.
6. If a contractor needs access, grant a role, not a file.

Do not keep exports in Downloads. Do not commit them. Do not paste them into a ticket.

## FAQ

**Is the export encrypted?**
No. Netscape and the working JSON are plaintext. `profiles.json` is the encrypted index.

**Does import write Chrome's cookie DB while the browser is closed?**
No. Apply is CDP at launch.

**Can I buy a cookie pack and import it?**
No. That is someone else's session.

Netscape and JSON, CDP `setCookies`, plaintext on disk. The export is how you leave a local app with your own keys. It is also how you leak them. Treat the file as the login, because that is what it is.
