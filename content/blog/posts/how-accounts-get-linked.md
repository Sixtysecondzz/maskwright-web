---
slug: how-accounts-get-linked
title: How sites link accounts
metaTitle: How sites link accounts you already own
metaDescription: Payment, device, graph, and jar overlap. This is a mechanism page for how sites join accounts you already own, not a hide-the-link guide. Authorized work only.
excerpt: Payment, device, graph, and jar overlap. This is a mechanism page for how sites join accounts you already own, not a hide-the-link guide. Authorized work only.
author: Avery Chen
published: 2026-05-29
category: social-media
tags: accounts, isolation, websites, link
readingTime: 6
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on how sites link accounts beside one social admin tab and a closed profile drawer, photographed as a working operator setup.
related: household-ip-versus-profile-isolation, authorized-accounts-only, multiple-accounts-and-platform-terms, cookie-jars-are-not-optional, platform-roles-versus-extra-logins, multiple-accounts-on-one-pc, two-factor-stays-in-the-real-world, gmail-and-google-account-isolation
---

Sites join accounts you already own. They do it with payment, device, graph, and shared cookies. This page is mechanism. It is not a hide-the-link guide. If two brand pages should be joined, use [platform roles](/blog/platform-roles-versus-extra-logins). If they should not, keep the cookie stores apart and accept that some links still sit above the browser.

[Authorized accounts only](/blog/authorized-accounts-only). [Multiple accounts on one PC](/blog/multiple-accounts-on-one-pc) is the pillar. The rest of the cluster lives under [Social media](/blog/social-media). Extra logins that exist only to dodge a limit are a platform problem. They are not a product feature.

## Cookies are the first join

Cookies, localStorage, and IndexedDB are keys. If two logins share a user-data directory, the site does not need a fingerprint. It already has both sessions. [Cookie stores are not optional](/blog/cookie-jars-are-not-optional). Isolation that only switches a user-agent and leaves storage shared is a session switcher.

Exporting cookies from Brand A into Brand B is a join you performed. Mailing a user-data folder is a join. Cloning a live session is a join. A stencil of locale and proxy shape is not a join. A live dump is.

MaskWright keeps one folder per profile id. The index `profiles.json` is AES-256-GCM at rest. The Chromium tree is not. Cookie import JSON is plaintext. Treat those files like keys, because the site already does.

## Payment and legal identity

Cards, bank accounts, tax IDs, Business Manager business info, and the ad-account billing profile join entities that cookies never met. If two "separate" shops share a card, the platform can join them without looking at canvas. That is not a browser problem.

The honest move is one legal entity, one billing, and roles for the people who work there. The dishonest move is a second unofficial login with the same card and a new fingerprint seed. I will not optimize that move.

[Platform terms](/blog/multiple-accounts-and-platform-terms) are the rule set. Isolation does not override a billing graph.

| Join type | Lives in the browser? | What actually splits it |
| --- | --- | --- |
| Cookies / storage | Yes | Separate user-data directories |
| Payment / tax / billing | No | Separate legal entities |
| Recovery phone / inbox | No | Separate recovery paths |
| Household IP | Sometimes | Different exits, or accept the house |
| People / admin graph | No | Platform roles |

## Device and household

Device IDs, installed apps, SMS 2FA on one phone, and a household IP are joins that sit outside the profile folder. [Household IP versus profile isolation](/blog/household-ip-versus-profile-isolation) is that cut. Two profiles on one tower can still share a NIC, a GPU story, and a phone that receives both OTPs.

[2FA stays in the real world](/blog/two-factor-stays-in-the-real-world). A second profile does not invent a second phone. If two authorized accounts should not share a recovery SMS, they need two recovery paths, not two user-agents.

Google's own graph is a special case. [Gmail and Google account isolation](/blog/gmail-and-google-account-isolation) is the sibling. Chrome signed into account A, then a MaskWright profile that opens account B, can still leak through a transferred cookie or a reused recovery.

## Graph and people

Friend lists, pixel events, employee emails, and "people who manage this Page" are joins. If the same contractor is admin on two Business Managers, the platform already has a person-shaped edge. Isolation of cookies does not remove that edge. Roles are the tool. A second unofficial profile for the same contractor is how you duplicate the edge and add a cookie problem.

Public research profiles should not open inside a brand login. You will write someone else's pixel into a session the brand owns. That is a join you do not want, and it is sloppy research.

## What a local app can and cannot split

It can split cookies, site storage, extensions, and a fingerprint seed. It can attach a different exit per profile. It can keep a research folder away from a customer export.

It cannot split a card. It cannot split a phone. It cannot split a legal entity. It cannot split a household ISP from the OS. It cannot make two unauthorized accounts look unrelated. Detection and linking are site policy plus a stack we do not control.

I do not quote lab scores. I do not publish a "break the graph" chapter. If the business needed two entities, incorporate two entities and bill them separately. If the business needed two people, hire two people and give them roles. If the desk needed two profiles for two authorized identities that must not share a pixel, use two folders.

## FAQ

**Will a new fingerprint unlink two accounts that share a card?**
No. Billing is not canvas.

**Is a shared household IP a join?**
It can be. Isolation of folders does not rewrite the NIC. See the household-IP sibling.

**Should I export cookies to "move" a brand?**
Only if you have a right to that session, and only into a folder that should be that session. Exporting Brand A into Brand B is a join you performed.

Payment, device, graph, and cookies. Name which join you are looking at. Fix the one you can fix with roles and folders. Accept the ones that live in billing and in a phone. Do not ask the browser to lie about a card.
