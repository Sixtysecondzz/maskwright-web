---
slug: new-fingerprint-same-folder
title: A new fingerprint in the same folder
metaTitle: A new fingerprint in the same folder
metaDescription: A new paint in the same Chromium folder still sits on old jars. Learn what a new fingerprint does not wipe, so leftover cookies do not inherit the new face.
excerpt: A new paint in the same Chromium folder still sits on old jars. Learn what a new fingerprint does not wipe, so leftover cookies do not inherit the new face.
author: Avery Chen
published: 2026-07-02
category: browser-fingerprinting
tags: fingerprinting, windows, how-to, new, fingerprint
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on a new fingerprint in the same folder beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, fingerprint-surfaces-we-actually-cover, testing-a-fingerprint-before-work, after-third-party-cookies, macos-fingerprint-on-a-windows-host, digital-footprint-versus-browser-fingerprint, mobile-ua-on-a-desktop-profile, cross-browser-fingerprinting
---

A new paint in the same Chromium folder still sits on old cookies. You changed the seed, the UA, or the GPU story. Cookies, localStorage, and IndexedDB stayed. The site now has a new face on an old login. That is a coherence problem, and it is a linking problem.

This page is the leftover-cookie warning. It is not a wipe tutorial. If you do not have a right to the account, a new hash will not create a new person.

## Two systems, one directory

A fingerprint is a measurement the page takes of the engine. [What browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting) is that bundle. Cookies are a login the site already issued. Chromium keeps them in the user-data directory.

In MaskWright each profile has its own folder under `{userData}/maskwright-data/profiles/<id>/`. Launch points `--user-data-dir` at that folder. The [surfaces we apply](/blog/fingerprint-surfaces-we-actually-cover) are overlaid at start through CDP and an inject. They do not empty the directory.

If you generate a new seed and keep the same profile id, you kept the profile. You only changed the paint. The cookies still name the previous person.

The [Browser fingerprinting](/blog/browser-fingerprinting) cluster keeps that split named so operators stop treating a reroll as a new folder.

![Cookie stores on a Windows operator desk](/blog/blog-cookie-jar.png "A new face on old cookies is still the old login. The folder is the profile.")

| You changed | Still in the folder | What the site has |
| --- | --- | --- |
| Canvas / audio seed | Cookies, localStorage, IndexedDB | New face, old login |
| User agent | Native Chrome cookie files | New caption, same session |
| GPU strings | Proxy creds in the encrypted index | New card, same hop |
| Nothing, copied the tree | Every origin | A clone, not a new person |

## What a new fingerprint does not wipe

Cookies. Import writes `maskwright-cookies.json` as plaintext JSON and applies them at launch through CDP `Network.setCookies`. Export is Netscape. Native Chrome cookie files also live in the user-data dir from ordinary browsing. A new seed touches none of that on purpose.

Local storage. Import and export are JSON arrays of `{ origin, items }`. Injection happens on new documents. A new seed does not clear origins you already filled.

IndexedDB, service workers, and the rest of Chromium state. We do not encrypt the per-profile directory. We do not vacuum it when the fingerprint schema changes. The index file `profiles.json` is encrypted. The browser data is not.

Proxy credentials sit in the encrypted index as part of the profile record. Changing the paint does not rotate the hop. A new face on the same exit and the same cookies is still one profile.

## The leftover stories I keep seeing

A [macOS caption on a Windows host](/blog/macos-fingerprint-on-a-windows-host) painted over a Windows Chrome session. The cookies still look like the PC session. The UA now says Macintosh.

A [mobile user agent on a desktop profile](/blog/mobile-ua-on-a-desktop-profile) painted over desktop cookies. The ads manager still has the desktop login. The caption says iPhone.

A reseed after a sad lab screenshot. Canvas and audio moved. The login cookie did not. The next visit is a new hash with the same account. That is the opposite of isolation.

A copied folder. You duplicated the profile directory, changed the seed in the UI, and kept every origin. That is a clone, not a new person.

## Digital footprint is the other leftover

[Accounts and cookie history are not canvas](/blog/digital-footprint-versus-browser-fingerprint). Payment instruments, recovery mail, and device graphs live outside the inject. A new paint does not move them. [Cross-browser fingerprinting](/blog/cross-browser-fingerprinting) can still join the box even if you open a second engine on the same NIC.

[After third-party cookies](/blog/after-third-party-cookies) does not empty first-party cookies either. Topics and CHIPS are tracking replacements. They are not a wipe.

## What to do when the profile is supposed to be someone else

Create a new profile. That is a new id and a new folder. Import only the cookies you mean to import, for an account you have a right to open. Align the hop, the clock, and the GPU family to that person. [Test the profile before work](/blog/testing-a-fingerprint-before-work).

Do not reroll a seed on a folder that already held a login and call it hygiene. Do not share a folder across two authorized brands and hope the paint will split them.

We have no published pass rates. A unique hash on old cookies is not a pass. It is a collage.

## The rule I want to hold still

The folder is the profile. The seed is the face. The cookies are the login. Change the face only when the profile is still the same person. When the person is supposed to be someone else, change the folder.

Cookie import is a session you chose to bring in. A new seed on top of that import is still that session. If the import was for the person the profile is supposed to be, keep the folder. If it was leftover from someone else, stop and make a new id.

## FAQ

**Does a new seed wipe cookies?**
No. Cookies, localStorage, and IndexedDB stay in the folder.

**Are Chromium profile folders encrypted?**
No. `profiles.json` is encrypted. Browser data is not.

**I copied the folder and changed the seed. Is that a new person?**
No. That is a clone. Every origin came along.
