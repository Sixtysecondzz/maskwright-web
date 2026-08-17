---
slug: what-is-a-cloud-phone
title: What a cloud phone is
metaTitle: What a cloud phone is, in one definition
metaDescription: One definition page. Not a review of LDCloud, UgPhone, VSPhone, or the rest. A rented Android is a different product than a local Windows profile.
excerpt: One definition page. Not a review of LDCloud, UgPhone, VSPhone, or the rest. A rented Android is a different product than a local Windows profile.
author: Jordan Hale
published: 2026-07-29
category: privacy
tags: privacy, local, cloud phones, cloud, phone
readingTime: 6
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on what a cloud phone is beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, cloud-phones-versus-local-windows, cloud-browser-risk, data-residency-is-your-disk, what-is-a-cloud-browser, why-we-do-not-sync-profiles, why-we-dropped-bandwidth-sharing, who-holds-the-cookie-jar
---

A cloud phone is a rented mobile runtime. You stream an Android (sometimes iOS-shaped) device that lives in someone else’s rack. Apps, push tokens, and cookie-like storage land on their disk. It is not a local Windows profile with a mobile user agent.

This is one definition page. It is not a review of LDCloud, UgPhone, VSPhone, or the rest of that catalog. We will not grow a ranking around phones we do not ship. The comparison sibling is [cloud phones versus a local Windows profile](/blog/cloud-phones-versus-local-windows). That is the last phone piece.

The note sits in [Privacy](/blog/privacy) because the class is a custody class.

## What sits on their Android

Play Store apps. Advertising IDs. Push tokens. WhatsApp-style device bindings. Photo rolls if you were careless. A mobile browser’s cookie store. Root or vendor hooks you cannot inspect. Snapshots the host can take.

A MaskWright profile is Chromium or Firefox on Windows 10/11. Fingerprint presets are desktop OS families. `mobile: false` in Client Hints. We do not emulate Android. A mobile UA on desktop is a mismatch, not a phone.

## How it differs from a cloud browser

[What a cloud browser is](/blog/what-is-a-cloud-browser): rented Chromium, desktop-shaped. [Cloud browser risk](/blog/cloud-browser-risk): landlord holds cookies. A cloud phone is rented Android, app-shaped. [Who holds the cookie jar](/blog/who-holds-the-cookie-jar) still applies, plus app data that never was a cookie.

[Data residency](/blog/data-residency-is-your-disk) for MaskWright is a folder you can point at. For a cloud phone it is a region on a pricing page. [Why we do not sync profiles](/blog/why-we-do-not-sync-profiles): we do not hold a replica. They do. [What leaves this machine](/blog/what-leaves-this-machine) is our short list. A cloud phone’s list is the whole device.

We also do not sell your last mile. [Why we dropped bandwidth sharing](/blog/why-we-dropped-bandwidth-sharing). Cloud phones sell theirs.

| Product | Runtime | Typical payload |
| --- | --- | --- |
| Cloud phone | Rented Android | Apps + tokens + mobile browser |
| Cloud browser | Rented Chromium | Desktop cookies |
| MaskWright | Local Windows | Desktop user-data dirs |

A mobile user agent on MaskWright Chromium is a string and some Client Hints. It does not create a Play Store, a push token, or a TEE. Apps that gate on those will not be fooled in a way I will document. If your job is an Android app, hold an Android or rent one. If your job is Ads Manager in a desktop browser, hold a desktop profile.

I will not list vendors. Search already ranks them. This page exists so “cloud phone” and “local Windows profile” stop sharing a sentence. [Cloud phones versus local Windows](/blog/cloud-phones-versus-local-windows) is the table. Stop after that. We are not going to publish a 2026 roundup.

Pushback I hear: “I only need it for one app.” That app still stores tokens on their Android. One app is enough. If the job is desktop Ads Manager, use a desktop profile. If the job is an APK, hold a phone or rent one we will not sell. A mobile UA string on Windows is not a cloud phone and not a fix.

## FAQ

### Can I point MaskWright at a cloud phone’s proxy?

You can attach HTTP/SOCKS5. That is an exit, not a phone. The Android still lives there if you also rent the phone.

### Why won’t you review vendors?

Because the search query wants a farm catalog, and we do not ship the product. Definition plus one comparison is enough.

### Is a USB Android you own a cloud phone?

No. You hold the device. Different custody. Still not our 0.1 feature set.

### Can I use a cloud phone just for SMS 2FA?

Then the vendor sees the SMS. Keep 2FA on a phone you hold. A rented Android as an inbox is a rented second factor. We will not document that pattern.

[Download MaskWright](/download) if you wanted desktop profiles on a PC you hold. If you needed a rented Android, you already know those shops exist. This page only names the class.
