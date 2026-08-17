---
slug: pre-made-cookies-and-cookie-robots
title: Pre-made cookies and cookie robots
metaTitle: Pre-made cookies and cookie robots
metaDescription: Bought cookies are someone else's session. Risks of purchased history, not a how-to-buy. I will not teach cookie robots.
excerpt: Bought cookies are someone else's session. Risks of purchased history, not a how-to-buy. I will not teach cookie robots.
author: Jordan Hale
published: 2026-07-10
category: privacy
tags: privacy, local, cookies, pre, made
readingTime: 5
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on pre-made cookies and cookie robots beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, indexeddb-is-a-third-jar, browser-security-versus-antidetect, geo-lookups-leave-the-machine, profile-encryption-at-rest, unsigned-windows-builds-and-smartscreen, extensions-inside-a-profile, sharing-profiles-is-sharing-cookies
---

A purchased cookie file is someone else’s session. Cookie-robot posts from 2019 taught people to buy warmed history and pour it into a new profile. We will not teach that. This page is the risk, not a how-to-buy.

If the login is not yours, an import path does not make it yours. The note sits in [Privacy](/blog/privacy) because a bought cookie is stolen custody with a receipt.

## What those posts were selling

A zip of Netscape cookies, sometimes with localStorage, advertised as aged, geo-matched, “trusted.” The pitch is that a fingerprint tool plus a bought session beats logging in yourself. The reality is you imported a token the seller still has, or that fifty other buyers also have, or that was pulled from a compromised PC.

MaskWright can import Netscape or JSON. That feature exists so you can move a session you own. It is not a storefront. Import files are plaintext. [Encryption at rest](/blog/profile-encryption-at-rest) is AES-256-GCM on `profiles.json`, not on `maskwright-cookies.json`.

## What goes wrong

The seller keeps a copy. The site invalidates the token. You fail 2FA you cannot pass. You inherit malware in an “extension pack” next to the cookies. [Extensions inside a profile](/blog/extensions-inside-a-profile). You mash [IndexedDB](/blog/indexeddb-is-a-third-jar) from a stranger into your folder. You think a local app made it private. [What leaves this machine](/blog/what-leaves-this-machine) is our leftover traffic, not a blessing on stolen sessions.

[Sharing a profile](/blog/sharing-profiles-is-sharing-cookies) is the cousin mistake with a coworker. Buying cookies is the same mistake with a stranger. [Geo lookups](/blog/geo-lookups-leave-the-machine) will not wash it. [Browser security](/blog/browser-security-versus-antidetect) will not wash it. [SmartScreen](/blog/unsigned-windows-builds-and-smartscreen) will not save a bad zip.

| Source of cookies | Use |
| --- | --- |
| Export from an account you own | Move or backup |
| Platform login in a new profile | Preferred |
| Bought / “robot” pack | Refused |
| Contractor zip | Refused |

Cookie robots were a cottage industry: generate or recycle sessions, sell them as aged. The buyer imported them into an antidetect profile and called it a strategy. The seller kept the same file. Platforms got better at noticing shared tokens. Malware got better at riding the zip. The blog posts aged worse than the cookies.

Our import parser will still read a Netscape file you drop in. That is not a marketplace. If you point it at a bought pack, the app cannot know. You can. Do not.

Authorized move: you exported last night from a PC you own, you import this morning on a PC you own. Unauthorized move: a stranger’s history. We document the first. We refuse the second, including “how to refresh a bought jar.”

Pushback I hear: “the pack is aged and cheaper than ads.” It is someone else’s token, often sold many times, often next to a junk extension. Our parser will read Netscape. That is not a store. Log in as yourself, 2FA on a phone you hold. The 2019 robot posts can stay in 2019. We will not write a refresh guide.

## FAQ

### Will you add a cookie marketplace?

No.

### What if I bought them years ago and they still work?

Then you are still using someone else’s login. Stop. Change nothing we will document. Talk to the account owner if there is one.

### Does import make MaskWright “a cookie robot”?

No. Import is a file parser. Intent is yours. We document export/import for custody you already have. [Download MaskWright](/download) for isolation of logins you hold.

### What if the seller says the cookies are from my own old PC?

Then you should have exported them yourself. A stranger with a zip of “your” session is still a stranger with a key. Log in again in a folder you own.

Malware riding a “free pack” is common. So is a seller who keeps the same Netscape file. Platforms notice shared tokens. Log in yourself.

Aged history is not a product we will grow. Log in as yourself, in a folder that is yours, with 2FA on a phone you hold. The 2019 posts can stay in 2019.
