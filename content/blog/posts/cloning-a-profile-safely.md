---
slug: cloning-a-profile-safely
title: Clone a stencil, not a live session
metaTitle: Clone a stencil, not a live session
metaDescription: Clone stencil settings, not a live cookie dump. A new room can inherit locale and proxy shape without inheriting someone else's session. Authorized work only.
excerpt: Clone stencil settings, not a live cookie dump. A new room can inherit locale and proxy shape without inheriting someone else's session. Authorized work only.
author: Priya Nair
published: 2026-05-19
category: social-media
tags: accounts, isolation, how-to, clone, browser
readingTime: 6
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on clone a stencil, not a live session beside one social admin tab and a closed profile drawer, photographed as a working operator setup.
related: multiple-accounts-on-one-pc, first-profile-checklist, two-factor-stays-in-the-real-world, instagram-business-accounts-on-a-local-profile, platform-roles-versus-extra-logins, instagram-cookies-and-session-hygiene, multiple-accounts-and-platform-terms, instagram-meta-business-suite-isolation
---

I treat clone as a settings copy, not a session copy. If the new profile already has cookies, you did not clone a template. You copied a login.

That is the one thing worth flagging before you duplicate anything on disk. MaskWright 0.1 stores an encrypted `profiles.json` index and a per-profile Chromium folder. The index can hold proxy credentials. The live user-data directory is not encrypted by our code. Duplicate that folder in Explorer and you duplicated the signed-in session.

Authorized accounts only. If you do not already have a right to the login, stop. This is not a second-identity kit.

## What I copy versus what I leave empty

A template is the part that is not a login. Browser core (Chromium 131 when the custom core is installed, otherwise the fallback you actually launched). Locale. Timezone. Screen shape. Optional HTTP or SOCKS5 for that entity. A name that says which brand or client the profile is for.

A live session is everything else. Cookies. localStorage. IndexedDB. Open tabs. Recovery cookies. An Instagram composer that still thinks you are signed in. Ads Manager still warm.

| Copy into the new profile | Leave out |
| --- | --- |
| Core choice, locale, timezone, screen | Cookies, localStorage, IndexedDB |
| Proxy host the entity already pays for | Copied `user-data-dir` folders |
| Unpacked extensions that belong to that job | Cookie JSON or Netscape dumps from a live profile |
| Notes that name the authorized entity | Downloads, CSVs, leftover 2FA screenshots |

[First profile checklist](/blog/first-profile-checklist) is how I build the first template on purpose. This page is how I reuse the settings without reusing the key. Cookie files are plaintext on disk if you export them. Treat an export as a key you store, not a file you mail. [Instagram cookies and session hygiene](/blog/instagram-cookies-and-session-hygiene) covers that job for a session you already created.

## Why people copy the live folder anyway

Speed. A contractor starts Monday. A second brand looks like the first. Someone wants a "backup identity" sitting in another folder.

Those three sentences are how a desk turns into a farm without meaning to. I do not write farm chapters. I also do not write warmup chapters.

The contractor gets an official role, then signs in as themselves in an empty profile. [Platform roles versus extra logins](/blog/platform-roles-versus-extra-logins) is the access model. They do not get a zip of `profiles/<id>`. [Multiple accounts and platform terms](/blog/multiple-accounts-and-platform-terms) are terms notes, not legal advice. A dumped session is not an invite.

A second brand you actually own still gets an empty cookie store. Same locale is fine. Same cookies are not. [Instagram business accounts on a local profile](/blog/instagram-business-accounts-on-a-local-profile) and [Meta Business Suite isolation](/blog/instagram-meta-business-suite-isolation) both assume official sign-in.

A backup identity is not a template. It is a second unofficial login. I will not write that chapter.

## How I actually make the second profile

1. Create a new profile. Name it after the entity, not after a city I hope to look like.
2. Set the same core I intend to keep using. Do not switch Chromium to Firefox later and pretend the folder is the same browser.
3. Set language and timezone to match the work. If I attach a proxy I already use for that entity, launch can align timezone and geo to the exit. MaskWright does not broker traffic. HTTP and SOCKS5 only. There is no bundled proxy.
4. Do not import cookies. Do not import localStorage. Do not copy the old directory.
5. Launch. Sign in through the official page. Complete 2FA on a device I hold.
6. Close the profile when the work is done.

[Two-factor stays in the real world](/blog/two-factor-stays-in-the-real-world). A cloned session that skips the prompt is a stolen session, even if you own both ends today. Tomorrow a contractor has the file.

Do not copy authenticator seeds into the profile folder. Recovery belongs in the password manager and the phone you hold.

## When two profiles should look alike

Two authorized entities in the same country, same language, same office exit: their templates can match. [Multiple accounts on one PC](/blog/multiple-accounts-on-one-pc) still wants two folders. Matching paint is not matching cookies.

Two entities that must not share a pixel still must not share a folder, even if locale is identical. Identical locale is not a join by itself. A shared cookie is.

If you attach a proxy, attach the one that belongs to that entity. Do not reuse Client A's exit on Client B because the form remembered the last string.

There are no team seats in MaskWright. There is no cloud sync. If the second operator needs access, they use a platform role on their own Windows box, in their own empty profile.

## FAQ

### Can I duplicate the profile folder in Explorer?

You can. I do not. That copies the Chromium user-data directory, which holds the live session. Create a new profile and copy settings by hand, or from notes, not from the live tree.

### Cookie import exists. Why not use it to clone?

Cookie import is for moving a session you own between machines you control. Netscape or JSON in, Netscape out. The files are plaintext. Using that to onboard a contractor is sharing the login. Give them a role instead.

### Do matching fingerprints join two accounts?

A shared cookie store joins them for sure. A shared fingerprint on two empty profiles is a different question, and not one I will sell as a bypass. Keep folders separate because the logins are separate.

### What if the old profile is a mess?

Do not clone the mess. Build a clean template from the checklist. Move downloads out of the profile tray into an ops folder. Customer data does not belong in a template.

Clone the settings. Sign in as the real account. Never clone the key.

More how-tos sit under [Social media](/blog/social-media). [Download MaskWright](/download) if you want the local launcher this checklist assumes.
