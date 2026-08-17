---
slug: unsigned-windows-builds-and-smartscreen
title: Unsigned Windows builds and SmartScreen
metaTitle: Unsigned Windows builds and SmartScreen
metaDescription: Installer may be unsigned. SmartScreen is expected. Adjacent Windows trust, not a bypass. This page says why the warning can appear and what it means.
excerpt: Installer may be unsigned. SmartScreen is expected. Adjacent Windows trust, not a bypass. This page says why the warning can appear and what it means.
author: Jordan Hale
published: 2026-07-20
category: privacy
tags: privacy, local, windows, smartscreen
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on unsigned Windows builds and SmartScreen beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: geo-lookups-leave-the-machine, sharing-profiles-is-sharing-cookies, indexeddb-is-a-third-jar, what-is-cookie-based-session-management, pre-made-cookies-and-cookie-robots, free-app-owned-ad-slots, what-leaves-this-machine, ads-in-the-dashboard-not-in-your-tabs
---

The Windows installer may be unsigned. SmartScreen is expected. The download page says so. This note is adjacent Windows trust, not a bypass. I will not tell you how to turn SmartScreen off. I will say why the warning can appear, what it does not mean, and what you should verify before you click through on a box that holds work profiles.

The rest of the cluster lives under [Privacy](/blog/privacy).

## What "unsigned" means here

A signed installer carries a publisher certificate Windows can show you. An unsigned NSIS build does not. SmartScreen then treats the file as unfamiliar. That is the system working. It is not a verdict that the bytes are malware, and it is not a verdict that they are clean.

MaskWright 0.1.0 ships as a Windows x64 NSIS target. The public channel is Windows 10 and 11. The download copy warns that SmartScreen may appear. Custom `chrome.exe` for the 131 core can also be unsigned. Launch on Windows uses `--no-sandbox` for that unsigned binary. Those are facts in the launch code, not features I will celebrate.

Unknown in the audit: whether a given production build you downloaded is signed. Read the file properties. Do not take this paragraph as a signature.

| Check | What you want | Red flag |
| --- | --- | --- |
| Source | maskwright.com (or the URL we published) | A Drive link a forum user named "update" |
| Publisher field | Empty on unsigned, or the publisher you expect | A different publisher than you expected |
| Hash | Matches a hash we published, if we published one | Invented number in a runbook |
| After install | No account, no cookie upload | Sign-in form or "paste cookies to the cloud" |

## What the warning is not

It is not a fingerprint. Sites do not see SmartScreen. Your profiles' cookies, [IndexedDB](/blog/indexeddb-is-a-third-jar), and [cookie-based sessions](/blog/what-is-cookie-based-session-management) are a different trust story.

It is not encryption. `profiles.json` is AES-256-GCM. The installer signature is about who published the app, not about the store on disk.

It is not a reason to download from a mirror a stranger posted. SmartScreen plus an unofficial URL is how people get a lookalike that steals logins. Get the build from the channel you meant. [What leaves this machine](/blog/what-leaves-this-machine) after install is still ads, updater, and geo. A trojaned installer can add rows we will never list.

It is not a bypass puzzle. I will not publish "More info, Run anyway" as a trophy path. If you do not trust the file, do not run it.

## What I verify

**Source.** maskwright.com (or the URL we published), not a Google Drive a forum user named update.

**Hash if we published one.** Compare. If we did not publish one, say so in the runbook instead of inventing a number.

**Publisher field.** Empty on an unsigned build. A different publisher than you expected on a "signed" file is worse than empty.

**What the app does after install.** No account. No profile upload. [Geo lookups](/blog/geo-lookups-leave-the-machine) to ip-api.com and geojs.io when you ask for alignment. [Ads in the dashboard](/blog/ads-in-the-dashboard-not-in-your-tabs) and [owned ad slots](/blog/free-app-owned-ad-slots). If a build asks you to sign in or to paste cookies into a cloud form, it is not this product. [Pre-made cookies](/blog/pre-made-cookies-and-cookie-robots) are still a bad idea even in a genuine build.

**Sharing.** [Sharing a profile is sharing cookies](/blog/sharing-profiles-is-sharing-cookies). An unsigned installer does not change that. Do not send the NSIS plus a user-data zip to a contractor as a setup pack.

## Sandbox and SmartScreen are different knobs

SmartScreen is a reputation check on the file you downloaded. `--no-sandbox` is a Chromium process flag for an unsigned custom core on Windows. Turning off the OS reputation check does not add a sandbox. Adding a signed core later would be a different launch story. I will not tell you to disable SmartScreen so the core feels easier.

Managed PCs may block unsigned installs entirely. That is an IT policy. A local app is a poor fit for a locked-down image that cannot run NSIS. Use a box you are allowed to install on, or wait for a signed channel if we ship one.

macOS and Linux pack scripts exist in the desktop repo. They are not the public download channel. Do not treat a sideloaded unsigned `.dmg` or AppImage from a stranger as the Mac build we meant. The SmartScreen story is Windows. Other OS trust prompts are their own.

## FAQ

**Does SmartScreen mean the file is malware?**
No. It means Windows does not know the publisher. Verify the source.

**Should I disable SmartScreen to install?**
I will not tell you to. If you do not trust the file, do not run it.

**Does an unsigned installer encrypt my profiles?**
No. Signature and disk encryption are different jobs.

The installer may be unsigned. The warning can appear. Verify the source, verify the bytes if you can, and only then install on a Windows user you control. Trust is the publisher and the disk you can point at, not a blue banner you learned to click past.
