---
slug: cloud-browser-risk
title: Cloud browser risk
metaTitle: Cloud browser risk: who can read the jar
metaDescription: Who can read the session on a rented browser. If the runtime is not on your disk, custody is the product. This commercial page is the risk, not a review.
excerpt: Who can read the session on a rented browser. If the runtime is not on your disk, custody is the product. This commercial page is the risk, not a review.
author: Jordan Hale
published: 2026-06-03
category: privacy
tags: privacy, local, cloud browsers, cloud, browser
readingTime: 6
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on cloud browser risk beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, what-is-a-cloud-phone, what-is-a-cloud-browser, cloud-phones-versus-local-windows, why-we-dropped-bandwidth-sharing, data-residency-is-your-disk, update-channel-habits, why-we-do-not-sync-profiles
---

If the runtime is not on your disk, custody is the product. A rented browser can isolate profiles from each other and still hand every profile to the landlord. This page is the risk, not a review of vendors. I will not score streaming quality or seat prices.

[What a cloud browser is](/blog/what-is-a-cloud-browser) named the architecture. Here the question is who can read the session. The note sits in [Privacy](/blog/privacy) because a privacy policy is not an access log.

## Who can read a rented session

Vendor admins. Backup jobs. A compromised control plane. A government request to the company that owns the rack. A contractor with hypervisor access. You, through a stream, which is not the same as `dir` on a folder you can delete while offline.

Support “needs to reproduce the bug” is how cookies get copied in every other SaaS. Browser-as-a-service is SaaS with a cookie database as the payload.

## What local changes

[Why we do not sync profiles](/blog/why-we-do-not-sync-profiles): there is no replica on our side. [Data residency is your disk](/blog/data-residency-is-your-disk). [What leaves this machine](/blog/what-leaves-this-machine) is ads, updates, geo, not `maskwright-data`. Encryption of `profiles.json` is AES-256-GCM. The Chromium tree is still files you can lose or leak yourself.

[Updates](/blog/update-channel-habits) are packages you install. They are not a vendor reaching into a live cookie store. [Bandwidth sharing](/blog/why-we-dropped-bandwidth-sharing) is off. We are not also routing strangers through you while you worry about their rack.

Cloud phones are a parallel rental. [What a cloud phone is](/blog/what-is-a-cloud-phone) and [versus local Windows](/blog/cloud-phones-versus-local-windows). Same landlord sentence, different OS.

| Risk | Cloud browser | Local profile |
| --- | --- | --- |
| Vendor can snapshot cookies | Yes | No |
| You can work if their region dies | No | Yes, if the sites are up |
| You can wipe without a ticket | Depends | Delete the folder |
| Compliance story | Their DPA | Your disk, your BitLocker |

A practical tell: can you delete the session while their site is down? If the answer is a support ticket, they hold it. If the answer is delete `profiles/<uuid>` on a quiet disk, you hold it. I use that question in vendor calls. Feature matrices bounce off it.

Streaming quality, region ping, and “residential in the cloud” are all real product axes. They do not move the tar. A fast stream of your Ads Manager is still their file. A slow local profile is still your file. Pick the axis you actually needed.

I also do not treat a vendor’s “zero-knowledge” claim as proven unless I can see that they cannot render the page without keys I never send. A live browser they operate has to decrypt or never encrypt the live tree. Live trees are the session.

Pushback I hear: “zero-knowledge encryption.” A live browser they operate has to show you the page. Showing you the page means they can snapshot the page. At-rest encryption of a disk they decrypt to run Chromium is not “unreadable to the product.” Ask who can tar the session. If the answer is them, that is the risk.

## FAQ

### What if they encrypt customer data at rest?

Then they can decrypt it to run the browser. At-rest encryption is not “unreadable to the product.”

### Is a VPS I rent myself a cloud browser?

If you own the VM account and the disk snapshots, you are the landlord. That is closer to local than to a multi-tenant antidetect cloud. It is still not the MaskWright folder on a tower under your desk.

### Do you recommend any cloud browser for research?

I recommend not putting payouts in one. Public pages without logins are the only use I find easy. [Download MaskWright](/download) for logins you care about.

### What if their DPA says subprocessors cannot access content?

A live browser still has to render. Rendering is access. A DPA is a contract, not a physics trick. If you need that contract, buy the cloud product. Do not call the stream a folder on your disk.

The risk is not that streaming looks ugly. The risk is that someone else can tar the session. If you need that convenience, buy it with eyes open. Do not call it local isolation.
