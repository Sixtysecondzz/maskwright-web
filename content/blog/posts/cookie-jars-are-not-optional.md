---
slug: cookie-jars-are-not-optional
title: Cookie jars are not optional
metaTitle: Cookie jars are not optional isolation
metaDescription: Shared jars link work that should stay apart. This page explains why cookie isolation is the job. Import how-to lives under the privacy cluster.
excerpt: Shared jars link work that should stay apart. This page explains why cookie isolation is the job. Import how-to lives under the privacy cluster.
author: Jordan Hale
published: 2026-05-20
category: social-media
tags: accounts, isolation, cookies, cookie
readingTime: 6
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on cookie jars are not optional beside one social admin tab and a closed profile drawer, photographed as a working operator setup.
related: authorized-accounts-only, multiple-accounts-on-one-pc, how-accounts-get-linked, gmail-and-google-account-isolation, household-ip-versus-profile-isolation, telegram-brand-channels-on-a-local-profile, multiple-accounts-and-platform-terms, discord-brand-and-community-rooms
---

A fingerprint overlay on a shared cookie store is still one session. Sites persist logins in cookies first. They persist extras in localStorage and IndexedDB. If two brand profiles drink from the same Chromium folder, they are one profile with two tab titles.

I write this as social-media hygiene, not as an import tutorial. Netscape and JSON import live under privacy notes. Here the job is simpler: do not share the cookie store.

## The cookie store is the login

When you stay signed in to Instagram, Facebook, Discord, or Telegram Web, the browser is holding tokens. Copy the user-data directory and you copied the login. Export cookies and you copied the login. Mail that zip and you mailed the login.

[How accounts get linked](/blog/how-accounts-get-linked) is cookies, plus IP, plus device signals, plus the boring stuff like the same recovery phone. Isolation without a separate cookie store only addresses the first item, and not even that.

[Multiple accounts on one PC](/blog/multiple-accounts-on-one-pc) only works if each login has its own folder. Chrome’s built-in profiles are a start. They still share a lot of engine fingerprint. Antidetect is the stronger split. Either way, the folder is the unit.

## What people try instead

One Chrome user, many tabs. Containers. Incognito for “the other brand.” A VPN on the house line. None of those split a cookie database that already mixed Brand A and Brand B.

[Household IP versus profile isolation](/blog/household-ip-versus-profile-isolation) is the other half. Two profiles can share an ISP address and still keep cookies apart. That is often enough for authorized brand work on one desk. It is not a way to invent extra people. [Authorized accounts only](/blog/authorized-accounts-only) and [platform terms](/blog/multiple-accounts-and-platform-terms) stay in force.

Google is a cluster. [Gmail isolation](/blog/gmail-and-google-account-isolation) is the mail version. YouTube inherits the same Google login if it sits in the same profile. Do not treat a YouTube tab as a new planet.

## Brand channels and community tools

[Telegram brand channels](/blog/telegram-brand-channels-on-a-local-profile) and [Discord brand rooms](/blog/discord-brand-and-community-rooms) should not share a profile with a personal login or with a second client. Community tools persist sessions the same way. A “quick check” in the wrong folder is how two communities become one identity.

In MaskWright each profile is `profiles/<uuid>/`. Cookies for that Chromium live there. Import files (`maskwright-cookies.json`) are plaintext on disk. The index `profiles.json` is AES-256-GCM. Encryption of the index is not encryption of the cookie store. Treat the folder like a password.

| Setup | Cookie isolation | Fingerprint split |
| --- | --- | --- |
| Tabs in one Chrome | No | No |
| Chrome profiles | Partial | Weak |
| Firefox containers | Cookies only | No |
| Incognito | Temporary | No |
| Antidetect profile | Yes, per folder | Intended yes |

On Windows 11 I name the MaskWright profile after the job, not after the site. `client-a-meta`, `personal-google`, `cold-research`. The uuid folder under `maskwright-data` is the real name. If I cannot say which folder holds which login without opening the app, the desk is already mixed.

I also do not keep a “spare” logged-in tab in the daily driver “just in case.” That spare tab is how Brand B’s pixel rides Brand A’s cookies. Close it. Use the named profile.

## FAQ

### Can I clone a profile to save time?

A clone copies the cookie store unless you clone a stencil with no logins. If you needed a second authorized login, log in again in a new folder. Do not duplicate a live session and call it two people.

### Does clearing cookies once fix a mixed profile?

It logs you out. History, localStorage, IndexedDB, and extensions may still mix the work. Start a new profile if the folder was shared.

### Where do I import cookies the legitimate way?

From an export you made of an account you own, onto a machine you own. Bought cookies are someone else’s session. That is a different page, and a refusal.

The [Social media](/blog/social-media) hub is the rest of the isolation notes. [Download MaskWright](/download) if you wanted named folders. The fingerprint is optional theater until the cookie stores are actually apart.
