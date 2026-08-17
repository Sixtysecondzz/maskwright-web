---
slug: sharing-profiles-is-sharing-cookies
title: Sharing a profile is sharing cookies
metaTitle: Sharing a profile is sharing cookies
metaDescription: Sharing a live session is sharing the jar. If you hand someone the room, you handed them the login. This how-to is the custody line for a local profile.
excerpt: Sharing a live session is sharing the jar. If you hand someone the room, you handed them the login. This how-to is the custody line for a local profile.
author: Jordan Hale
published: 2026-07-17
category: privacy
tags: privacy, local, cookies, how-to, browser, session
readingTime: 6
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on sharing a profile is sharing cookies beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, unsigned-windows-builds-and-smartscreen, what-is-cookie-based-session-management, geo-lookups-leave-the-machine, free-app-owned-ad-slots, indexeddb-is-a-third-jar, ads-in-the-dashboard-not-in-your-tabs, pre-made-cookies-and-cookie-robots
---

If you hand someone the profile, you handed them the login. Sharing a live session is sharing the cookie store, plus localStorage, plus [IndexedDB](/blog/indexeddb-is-a-third-jar), plus whatever the download tray held. This how-to is the custody line for a local profile.

The page sits in [Privacy](/blog/privacy) because “can you send me the profile?” is the most expensive sentence on a desk.

## What sharing looks like

A zip of `profiles/<uuid>/`. A remote-control session on the same Windows user. A Syncthing live copy. A “just use this MaskWright while I lunch.” All of those are cookie copies or cookie live-share. [Cookie-based session management](/blog/what-is-cookie-based-session-management) is the definition. [Pre-made cookies](/blog/pre-made-cookies-and-cookie-robots) is when the copy was never yours.

Two people in one live Chromium is one person as far as the site is concerned. Token reuse, odd geolocation jumps, 2FA prompts, password change emails. Isolation between profiles does not survive a shared profile.

## What we will not turn into a feature

Team seats. Cloud sync. A share button. Ads do not change this. [Dashboard ads](/blog/ads-in-the-dashboard-not-in-your-tabs) and [owned slots](/blog/free-app-owned-ad-slots) fund the UI. They do not make a zip safe. [What leaves this machine](/blog/what-leaves-this-machine): we do not upload the store. You still can. [Geo lookups](/blog/geo-lookups-leave-the-machine) are unrelated. [SmartScreen](/blog/unsigned-windows-builds-and-smartscreen) is the installer.

Give a Facebook role. Give a Google user. Sit together. Do not clone a live uuid “for the intern.”

| Action | What they got |
| --- | --- |
| Platform invite | Access the site intended |
| Zip of user-data | The login, until it dies |
| Shared Windows user | The login, live |
| Screenshot of a dashboard | Not the login (usually) |

Remote support tools make this worse. AnyDesk into a live Ads Manager profile is a live share of the cookie store. If you must do it, watch the session, then change the password when they leave, and expect cookies to die. Better: grant a platform user and revoke it.

Two family members on one Windows user is the household version. They are sharing every profile in `maskwright-data`. Separate Windows users, or accept that isolation is theater.

I name profiles after jobs so I notice when someone asks for “the Amazon one.” That request is a key request. The answer is a role or a no.

Pushback I hear: “we trust the intern.” Then grant a platform role with an expiry. AnyDesk into a live Ads Manager profile is still a live share of the cookie store. Two family members on one Windows user share every uuid in `maskwright-data`. Separate OS users, or admit isolation is theater. A zip is a key.

## FAQ

### What if I trust them?

Then you still handed them a key you cannot remotely rotate except by changing the site password and waiting for cookies to die. Trust plus a role is cleaner than trust plus a zip.

### Can two operators use two clones of the same profile?

That is two copies of one session. Sites hate that. You will spend the week in checkpoints. We will not document how to “make it work.”

### Does encryption help if I share the folder?

`profiles.json` is AES-256-GCM. The Chromium tree is not. Sharing the tree shares the cookies. [Download MaskWright](/download) does not add a safe-share mode.

### Is AnyDesk into my PC different from emailing the folder?

It is a live share instead of a file share. Still the cookie store. Watch it, then rotate the site password when they leave. Better: a platform role.

Remote support into a live Ads Manager profile is a live share. Two family members on one Windows user share every uuid. Separate OS users, or admit isolation is theater. Name profiles after jobs so “send me the Amazon one” sounds like a key request.

“Can you send me the profile?” is a key request. The answer is a role or a no.

The profile is the cookie store with extra files. Share access on the platform. Keep the folder on one PC, for one operator, on purpose.
