---
slug: update-channel-habits
title: Update channel habits
metaTitle: Update channel habits for a local core
metaDescription: electron-updater talks to updates.maskwright.com. Core version versus spoofed UA is a coherence issue. This how-to is update hygiene for a local app.
excerpt: electron-updater talks to updates.maskwright.com. Core version versus spoofed UA is a coherence issue. This how-to is update hygiene for a local app.
author: Jordan Hale
published: 2026-07-22
category: privacy
tags: privacy, local, how-to, browser, update
readingTime: 4
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on update channel habits beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, why-we-dropped-bandwidth-sharing, if-a-vendor-is-breached, what-is-a-cloud-browser, local-storage-is-a-second-cookie, cloud-browser-risk, downloads-folder-discipline, what-is-a-cloud-phone
---

Packaged MaskWright builds ask `https://updates.maskwright.com` whether a newer package exists. That is `electron-updater` with a generic provider. Dev builds skip the path. This how-to is update hygiene: what leaves, what a core bump does to a profile, and why a spoofed user agent that disagrees with the binary is a coherence bug.

[What leaves this machine](/blog/what-leaves-this-machine) is the ledger. This page is the habit. The rest of the cluster lives under [Privacy](/blog/privacy).

## What the update check is

The app, not the profile browser, talks to the update host. I have not logged the exact payload in our repo. Treat it as ordinary electron-updater behavior: version, platform, a request for a package. It is not a profile upload. `profiles.json` stays on disk. Cookie JSON stays on disk.

The update host sees that a copy of the app checked in. If you run an air-gapped box, you will not get packages from us unless you carry them yourself. That is a valid choice. You will also miss fixes.

There is no analytics SDK in the desktop source. The update check is still traffic. "No server" as a slogan is overstated. "No profile cloud" is the claim that holds.

| Build type | Update check | What it is not |
| --- | --- | --- |
| Packaged Windows build | `updates.maskwright.com` via electron-updater | A profile upload |
| Dev build | Skipped (`dev-skipped`) | A reason to skip backups |
| Air-gapped box | None unless you carry the installer | Fully offline forever without a process |

[A cloud browser](/blog/what-is-a-cloud-browser) updates on the vendor's schedule, on the vendor's disk. [Cloud browser risk](/blog/cloud-browser-risk) is that custody. Our update is a package for your Windows box. [If a vendor is breached](/blog/if-a-vendor-is-breached) matters less for cookies we never held, and still matters for the update host if someone ships a bad package. Download from the channel you meant.

## Core version versus spoofed UA

The custom Chromium target is 131.0.6778.85. Fingerprint apply can set a user agent and Client Hints. If those say 131 and you actually launched system Chrome 132-plus, the page can read both stories. If those say a current Chrome and you launched the 131 core, same problem the other way.

Habit: after an app update or a core install, check which executable came up, then check that UA and Client Hints match that family. Do not leave a lab UA on a live ads profile across a bump.

Firefox and Camoufox are a second family. A bump from stock Firefox to Camoufox (or the reverse) is a new handshake. Do not do that under a login you intend to keep without noticing.

[What is a cloud phone](/blog/what-is-a-cloud-phone): we do not ship one. An update will not add Android. Desktop profiles stay desktop.

## What I do before I take a package

I note which profiles are live and I stop them from the app. I do not update underneath a running Chromium with a listening internal CDP port and a full login.

I back up `maskwright-data` if the profiles matter. An update should not wipe the store. I still want a copy I can point at. The index is AES-256-GCM. The trees are not. [localStorage](/blog/local-storage-is-a-second-cookie) exports are plaintext. So are cookie exports. Those backups are keys.

I read the notes for the package if we published any. I do not take a core bump on Friday before a Monday ads launch unless I have a reason.

[Downloads](/blog/downloads-folder-discipline): installer files in the tray are not secrets, but they are easy to grab from the wrong USB. Keep the NSIS you meant.

## What I do not do

I do not turn the update channel into a fingerprint. The host is ours. It does not need to see your profiles.

I do not disable updates forever on a box that holds live logins unless I have a patch process of my own. Stale Electron and stale Chromium are security problems even when the job is isolation, not hardening. [We dropped bandwidth sharing](/blog/why-we-dropped-bandwidth-sharing). We did not drop the updater.

I do not spoof a UA to look updated while I pin an old core. That is a costume. Coherence is the bar.

I do not install a third-party updater that claims to patch antidetect tools. That is how you hand the store to a stranger.

## Operator sequence

1. Stop work profiles.
2. Copy `maskwright-data` if the logins matter.
3. Take the packaged update, or skip it on purpose.
4. Confirm the app version and the core executable.
5. Confirm UA and Client Hints still match the binary for each profile you will reopen.
6. Launch one non-critical profile first if the bump was large.

Air-gap: carry the installer yourself, same sequence, no check-in to `updates.maskwright.com`.

## FAQ

**Does the updater upload my profiles?**
No. It is a package check. Profiles stay on disk.

**Should I spoof a newer UA on an old core?**
No. That is a coherence bug.

**Can I stay air-gapped?**
Yes, if you carry installers yourself and accept missed fixes.

The channel is `updates.maskwright.com` for packaged builds. The risk is a bad package or a mismatched UA. The habit is stop, copy, update, confirm the binary, then open authorized work. That is hygiene for a local app, not a cloud locker.
