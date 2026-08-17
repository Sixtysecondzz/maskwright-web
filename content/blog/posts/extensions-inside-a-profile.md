---
slug: extensions-inside-a-profile
title: Extensions inside a profile
metaTitle: Extensions inside a profile, not shared
metaDescription: Unpacked extensions per profile. They review cookie editors. This how-to is isolation for addons, including the ones that should never touch a work jar.
excerpt: Unpacked extensions per profile. They review cookie editors. This how-to is isolation for addons, including the ones that should never touch a work jar.
author: Jordan Hale
published: 2026-06-17
category: privacy
tags: privacy, local, how-to, browser, extension
readingTime: 6
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on extensions inside a profile beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: downloads-folder-discipline, profile-encryption-at-rest, local-storage-is-a-second-cookie, browser-security-versus-antidetect, if-a-vendor-is-breached, what-leaves-this-machine, update-channel-habits, pre-made-cookies-and-cookie-robots
---

An extension loaded into one profile should not appear in another. Password managers, shipping add-ons, and cookie editors are powerful in the profile they belong to and toxic in the profile they do not. This how-to is isolation for unpacked add-ons. Rival pages review cookie editors as a product. I will tell you where the files go, and which add-ons should never touch a work login.

The rest of the cluster lives under [Privacy](/blog/privacy). Authorized work only.

## What the product actually loads

On Chromium, user unpacked extensions live at `<profileDir>/extensions/<name>/manifest.json`. At launch they are copied to `.maskwright-user-ext/` and loaded with `--load-extension`. `--disable-features=DisableLoadExtensionCommandLineSwitch` is on so Chromium still accepts that flag.

Two built-in extensions are staged per launch: a spoof helper (`.maskwright-ext`) and, when HTTP proxy auth is needed, a proxy-auth helper (`.maskwright-proxy-auth`). Those are ours. They are not a store you browse.

| Kind | Where it lives | Loaded how |
| --- | --- | --- |
| Your unpacked add-on | `<profileDir>/extensions/<name>/` | Copied to `.maskwright-user-ext/`, `--load-extension` |
| Spoof helper | `.maskwright-ext` per launch | Built-in |
| Proxy auth helper | `.maskwright-proxy-auth` when HTTP auth is needed | Built-in |
| Firefox / Camoufox add-ons | Unknown parity | Do not assume this path |

Firefox and Camoufox extension parity is not verified in the audit. Do not plan an unpacked-add-on workflow on a Firefox profile until you have tested that profile.

The Chrome Web Store is not a MaskWright catalog. If you unpack something, you chose the trust. [Browser security versus antidetect](/blog/browser-security-versus-antidetect) still applies: an add-on with `<all_urls>` can read the cookies.

## Isolation is the folder, not the toolbar

Two profiles do not share `extensions/` if they do not share a user-data directory. That is the point. A shipping add-on for Store A stays in Store A's profile. A personal password manager stays out of the ads profile unless you put it there on purpose.

[localStorage](/blog/local-storage-is-a-second-cookie) and cookies are still the site's stores. An extension can export both. A cookie editor is a key-copying tool. [Pre-made cookies](/blog/pre-made-cookies-and-cookie-robots) plus an editor is how people buy a graph. I will not review editors as a feature. I will say: if you install one, you accepted that this profile's cookies can leave in one click.

[Downloads](/blog/downloads-folder-discipline) matter because many editors write a JSON to the tray. The tray may be the Windows default, shared across profiles. Encryption of `profiles.json` (AES-256-GCM) does not cover that JSON. The user-data tree is not encrypted by our code. [What encryption at rest covers](/blog/profile-encryption-at-rest) is the split.

## What should never touch a work login

**Cookie robots and session-moving add-ons.** They exist to move someone else's session. Unauthorized.

**Growth, autofollow, and unofficial schedulers.** They see the live login. They are a device you installed. They also tend to phone home.

**Random store pages with broad permissions.** A coupon add-on in an ads profile is how a third party reads the Business Manager.

**Personal password managers in a client profile, or client managers in a personal profile.** Pick one custody story per folder.

A research profile can be empty of add-ons. That is a valid choice. Empty is easier to explain than a toolbar you forgot.

## Built-in helpers are still code in the process

The spoof extension and the proxy-auth extension run in the launched Chromium. They are not cloud agents. They do not upload the cookies. [What leaves this machine](/blog/what-leaves-this-machine) is still ads feed, updater, geo, and your browsing. An add-on you added can add rows to that ledger. I cannot audit the store for you.

[Update channel habits](/blog/update-channel-habits) are for the app and the core. Extensions you unpacked do not update through `updates.maskwright.com`. They update when you copy new files into `extensions/`. Stale add-ons are your maintenance.

## Cloud lockers and extension sync

[If a vendor is breached](/blog/if-a-vendor-is-breached) and they synced extensions with the profile, the attacker gets the toolbar plus the cookies. Local unpacked files stay on the disk you can point at. That is better custody and worse convenience. Copying `extensions/` between machines is a deliberate act. Treat it like copying keys.

Do not email an unpacked folder so the contractor has the same tools. Give the contractor a platform role, or a machine you control. Do not give them the ads login plus a cookie editor.

## Operator sequence

1. Decide whether the profile needs any add-on at all.
2. Unpack only what you can name a job for.
3. Put the files under that profile's `extensions/<name>/`.
4. Launch and confirm the toolbar is only that profile.
5. Keep editors off live ads and bank-adjacent profiles.
6. Keep the Windows downloads tray from becoming a second cookie store.

Firefox profiles: test or skip. Do not assume this path.

## FAQ

**Do extensions sync across MaskWright profiles?**
No, if the folders are separate.

**Can I use the Chrome Web Store inside a profile?**
The store is not our catalog. If you unpack something, you chose the trust.

**Do built-in helpers upload my cookies?**
No. They are local launch helpers. Add-ons you install can still phone home.

Extensions stay inside the profile you copied them into. The ones that can export cookies should be rare, local, and never mailed. The rest of the internet's add-on store can stay out of the work profile.
