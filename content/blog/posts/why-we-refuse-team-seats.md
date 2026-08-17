---
slug: why-we-refuse-team-seats
title: Why we refuse team seats
metaTitle: Why we refuse team seats in MaskWright
metaDescription: No team seats. Platform roles and contractors without a shared vault. This commercial page is why a roster inside the antidetect is the wrong control plane.
excerpt: No team seats. Platform roles and contractors without a shared vault. This commercial page is why a roster inside the antidetect is the wrong control plane.
author: Jordan Hale
published: 2026-08-12
category: privacy
tags: privacy, local, antidetect, team
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on why we refuse team seats beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, contractor-access-done-right, offline-operator-days, do-not-email-a-user-data-folder, who-holds-the-cookie-jar, audit-trails-you-cannot-have-without-a-server, why-we-do-not-sync-profiles, export-and-import-cookies
---

No team seats. That is by design, not a missing checkbox. A roster inside the antidetect is the wrong control plane. Platforms already have roles. A shared vault is a cookie store with extra people.

This commercial page sits in [Privacy](/blog/privacy) because seats are how a local store becomes a locker.

## What a seat actually is

A MaskWright login. Permission bits. The ability to launch a uuid that holds Seller Central. That requires a server, an audit log we would have to pretend is complete, and a replica of the session. [No sync](/blog/why-we-do-not-sync-profiles). [No SIEM](/blog/audit-trails-you-cannot-have-without-a-server). [Who holds the cookie jar](/blog/who-holds-the-cookie-jar) would be us.

Agencies want seats. I want Facebook Page roles, Google users, Shopify staff, Amazon authorized users. [Contractor access](/blog/contractor-access-done-right) is that path. [Do not email the user-data folder](/blog/do-not-email-a-user-data-folder). [Export cookies](/blog/export-and-import-cookies) is for your own machines, not for a VA.

## What you lose, on purpose

No “revoke the seat” button that remote-wipes a contractor’s copy. If you copied the folder to them, you already lost. No shared live view. No window sync. Offline still works because there is no roster API. [Offline days](/blog/offline-operator-days). [What leaves this machine](/blog/what-leaves-this-machine) stays a short list.

`profiles.json` is AES-256-GCM on your disk. Seats would have been that file plus a cloud ACL. I would rather you use one PC per trusted operator, or platform roles across PCs.

| Need | Use |
| --- | --- |
| Designer posts on Instagram | Meta roles |
| Bookkeeper sees payouts | Stripe / PayPal users |
| Same person, second PC | Copy the store yourself |
| Untrusted VA | Do not share the session |

A five-person brand on one tower is a scheduling problem, not a seat SKU. One operator at a time, or five PCs, or platform users on five laptops with five logins the brand created. Cloning one uuid five ways is how cookies race and 2FA storms start. We will not add a “share this profile” toggle to make that look official.

Agencies that insist on seats should buy a cloud product and accept the landlord. Agencies that can use Meta roles, Google users, and Shopify staff can keep folders local. [Compare local versus cloud](/compare) is that fork. I will not pretend 0.1 is both.

If a contractor needs a one-hour task, sit with them or grant a role with an expiry the platform supports. Do not zip `profiles/<uuid>` to Slack “just this once.”

Pushback I hear: “agencies cannot work like that.” Some cannot. They should buy seats and accept a locker. Some can use Meta roles and Shopify staff and keep folders on one PC per trusted operator. 0.1 is the second shop. Cloning one uuid five ways is not a team feature. It is five copies of one session.

## FAQ

### How do five people run one brand?

Five platform users, or five people at five PCs with five logins the brand actually created. Not one cookie cloned five ways.

### Isn’t that worse UX than Multilogin seats?

Yes. It is also fewer copies of the cookie. [Download MaskWright](/download) if you wanted the local store. Buy seats elsewhere if the roster is the product.

### Can I share the Windows user instead?

That is still sharing the store. It is a seat made of an OS account. Same custody problem, worse logging.

### What about a shared Windows PIN on a shop PC?

That is a seat made of furniture. Anyone with the PIN holds every uuid. Separate OS users, or one operator. We will not add a roster to make the PIN look official.

Five people on one tower is a calendar, not a SKU. One operator at a time, or five PCs, or five platform users. Cloning one uuid five ways is five copies of one session.

The control plane for “who may use this account” belongs on Facebook, Google, Amazon, Shopify. The antidetect is a folder on one PC. We will not merge those jobs.
