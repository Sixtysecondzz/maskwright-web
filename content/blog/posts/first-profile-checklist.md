---
slug: first-profile-checklist
title: First profile checklist
metaTitle: First profile checklist for a local room
metaDescription: Proxy, locale, core, empty jar. A first-profile checklist for a local room, so the first launch is a clean room instead of a leftover Chrome costume.
excerpt: Proxy, locale, core, empty jar. A first-profile checklist for a local room, so the first launch is a clean room instead of a leftover Chrome costume.
author: Priya Nair
published: 2026-05-26
category: social-media
tags: accounts, isolation, how-to, create, antidetect
readingTime: 4
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on first profile checklist beside one social admin tab and a closed profile drawer, photographed as a working operator setup.
related: multiple-accounts-on-one-pc, instagram-business-accounts-on-a-local-profile, cloning-a-profile-safely, instagram-cookies-and-session-hygiene, two-factor-stays-in-the-real-world, instagram-meta-business-suite-isolation, platform-roles-versus-extra-logins, instagram-and-shared-device-signals
---

The first profile should be boring. Named. Empty. Signed in through the real page. If the first launch already has leftover Chrome cookies, you did not start a profile. You continued one.

I run this list on Windows 10 and 11 x64, which is the public download channel. MaskWright 0.1 has no account, no cloud sync, and no seats. You are about to put a real login on disk. Authorized work only.

## 1. Name the job before you name the profile

Write the authorized entity on paper. Personal Facebook. Brand A Instagram. Client B Business Manager. If you cannot name the entity, you do not need a profile yet. You need a role. [Platform roles versus extra logins](/blog/platform-roles-versus-extra-logins).

Do not name the profile after a fingerprint preset or a city you hope to look like. Name it after the work. [Multiple accounts on one PC](/blog/multiple-accounts-on-one-pc) assumes you already have a right to the login. If you do not, stop here.

## 2. Pick a core you will keep using

Profiles are Chromium by default. Target version in the product is Chromium 131 when the custom core is installed. If that binary is missing, launch can fall back to system Chrome or Edge. That fallback is a different engine than a patched core.

Firefox with Camoufox is in the product if you install that core. Pick the core you mean to keep using for this profile. Do not switch cores later and pretend the folder is the same browser.

This checklist does not pick a lab score. It picks a stable engine.

## 3. Locale and timezone, then an optional proxy

Set language and timezone to match the work, not a fantasy. If the brand operates in the same city as the PC, the household clock is allowed. A shared street is not isolation, and it is not a crime.

Attach an HTTP or SOCKS5 proxy only if the desk already uses one for that entity. MaskWright does not broker traffic. We do not bundle exits. If you attach a proxy, language and timezone can follow the exit geo on launch (the app probes ip-api.com through that proxy). If you do not attach one, do not invent a locale that contradicts the house.

A system VPN around the whole PC is not a per-profile exit. Split folders first.

HTTPS-as-TLS-to-proxy is not implemented. If your provider sold you that, treat it as a provider question, not as a MaskWright feature.

## 4. Leave cookies empty

Do not import cookies. Do not import localStorage. Do not copy a Chrome user-data folder from the everyday browser. Do not buy a warmed pack.

[Instagram cookies and session hygiene](/blog/instagram-cookies-and-session-hygiene) is hygiene for a session you already created, not a starter kit. [Clone a stencil, not a live session](/blog/cloning-a-profile-safely) is for the second profile. The first profile has nothing to clone.

Cookie import files on this product are plaintext JSON. The live profile directory is not encrypted by our code. `profiles.json` is encrypted. Those facts are why empty matters. You are about to put a real login on disk.

## 5. Extensions only if they belong on day one

Unpacked extensions load per profile from that profile's extensions folder. A shipping addon for the brand store can live in the brand profile. A random engagement booster does not.

If you do not need an extension on day one, install none. You can add later. You cannot un-mix a toolbar that already sat in a research profile.

## 6. Sign in through the official page

Launch. Open the real site. Use the password manager and the account you are allowed to open. Complete 2FA on a device you hold. [Two-factor stays in the real world](/blog/two-factor-stays-in-the-real-world). No SMS farm. No prompt inside a rented cloud browser. MaskWright has no cloud phones.

For Instagram brand work, prefer [Meta Business Suite](/blog/instagram-meta-business-suite-isolation) and official roles. [Instagram business accounts on a local profile](/blog/instagram-business-accounts-on-a-local-profile) is the commercial sibling.

## 7. Prove the profile holds one identity

Open the account switcher. There should be one identity. Close extra Google accounts you did not mean to open.

[Instagram and shared device signals](/blog/instagram-and-shared-device-signals) still exist on one Windows box. A folder does not erase hardware. It keeps two sessions from sharing one cookie store.

## 8. Close it when the work is done

Do not leave the first profile open overnight on a shared tower. Downloads that belong in ops should leave the profile tray.

## FAQ

### Do I need a proxy on the first profile?

No. Attach one only if that entity already uses one. A household IP with a clean folder is a normal starting point for work you are allowed to do from that house.

### Can I import cookies from Chrome to save time?

You can. I do not on a first profile. Import is for moving a session you own, not for skipping the official door. The files are plaintext. Know what you are putting on disk.

### What if launch used system Chrome instead of the custom core?

That is a different engine family. Install the core you meant, or accept the fallback and keep using it. Do not bounce between them inside one folder.

### Should I test CreepJS before I sign in?

I skip trophy labs on day one. Consistency inside the profile matters more than a screenshot. Sign in, do the work, close it.

The first launch should feel uneventful. Named profile. Chosen core. Honest locale. Optional real proxy. Empty cookies. Official login. Real 2FA. Closed when you are done.

More notes sit under [Social media](/blog/social-media). [Download MaskWright](/download) for the Windows launcher this list assumes.
