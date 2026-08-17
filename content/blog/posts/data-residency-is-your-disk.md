---
slug: data-residency-is-your-disk
title: Data residency is your disk
metaTitle: Data residency is your disk, not ours
metaDescription: Residency is the operator disk. They hold cloud copies. If the question is where the session lives, the answer for MaskWright is a folder you can point at.
excerpt: Residency is the operator disk. They hold cloud copies. If the question is where the session lives, the answer for MaskWright is a folder you can point at.
author: Jordan Hale
published: 2026-06-09
category: privacy
tags: privacy, local, browser, data
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on data residency is your disk beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, why-we-do-not-sync-profiles, cloud-phones-versus-local-windows, who-holds-the-cookie-jar, what-is-a-cloud-phone, offline-operator-days, cloud-browser-risk, why-we-refuse-team-seats
---

If the question is where the session lives, the answer for MaskWright is a folder you can point at. Residency is the operator disk. Cloud products hold copies in a region they name on a pricing page. Those are different answers. Do not let a compliance brochure flatten them.

This note sits in [Privacy](/blog/privacy) because “data residency” gets used as a sticker. I want a path.

## The path

`%APPDATA%` (or the Electron userData path) `/maskwright-data`. `profiles.json` next to `profiles/<uuid>/`. On a default Windows 10/11 install that is a folder under your user. You can copy it. You can put the whole user directory on a BitLocker volume. You can take the PC out of the building.

[Why we do not sync profiles](/blog/why-we-do-not-sync-profiles): no second region. [Offline days](/blog/offline-operator-days): CRUD still works. [Who holds the cookie jar](/blog/who-holds-the-cookie-jar): you, plus anyone who can read that user. [Team seats](/blog/why-we-refuse-team-seats): we will not become a multi-region roster.

Encryption: AES-256-GCM on the index only. User-data dirs, cookie import JSON, localStorage import JSON are not wrapped by our code. Residency is not the same as sealed.

## What cloud residency actually means

EU-west, US-east, “in-region backups.” Useful for SaaS. For a browser session it still means they hold a copy. [Cloud browser risk](/blog/cloud-browser-risk). [Cloud phones](/blog/what-is-a-cloud-phone) and [versus local Windows](/blog/cloud-phones-versus-local-windows): the copy is an Android image. [What leaves this machine](/blog/what-leaves-this-machine): our leftover is not that copy.

A DPA that says “data at rest in Frankfurt” is still their Frankfurt. Our answer is “your SSD, unless you copied it to a USB you forgot in a drawer.”

| Question | MaskWright | Typical cloud antidetect |
| --- | --- | --- |
| Path you can ls | `maskwright-data` | Vendor console |
| Region picker | Your office | Their cloud |
| Second copy by default | No | Often yes |
| Encryption of cookies at rest | OS / Chromium, not us | Vendor claim |

If a procurement form asks “where is personal data stored?” I write the path, the Windows user, and whether BitLocker is on. I do not write “EU” unless the PC is in the EU. A cloud vendor’s Frankfurt checkbox is a different sentence with a different processor.

Backups change residency. A USB in a hotel drawer is a second country if you flew. An unencrypted Time Machine-style copy to a NAS is a second disk in the house. Plan the copies. We will not hold one for you.

Geo lookups to ip-api.com are not residency of the profile. They are a packet about an IP. The cookie store still sat on NTFS while that packet left.

Pushback I hear: “Frankfurt would be safer.” Frankfurt is safer for a processor you already hired. We are not hosting the profiles. Writing “EU” on a form when the PC is in Ohio is a lie. Write the path, the Windows user, BitLocker on or off, and where the USB backups sleep. That is residency you can point at.

## FAQ

### Does that satisfy GDPR “residency”?

I am not your DPO. Pointing at a folder is the factual answer. Lawful basis and processors are a different conversation. We are not a profile processor because we do not host the profiles.

### What if I run the PC in a datacenter I rent?

Then residency is that datacenter. You are still the landlord of the VM. That is closer to local than to our cloud.

### Can I move the store to D:\?

If you relocate Electron userData, that is an OS/app data question. The product still expects a local store, not our S3.

### Do geo lookups change where the cookies live?

No. ip-api.com sees an IP. The cookie store still sat on NTFS. Residency is the folder and the backups, not the map pin.

A USB in a hotel drawer is a second country if you flew. Plan that copy like you plan the PC.

[Download MaskWright](/download) and point at the folder. If a vendor’s map of regions felt safer than a path on your PC, you wanted a processor. We are not that processor.
