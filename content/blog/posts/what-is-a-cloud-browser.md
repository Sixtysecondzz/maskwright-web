---
slug: what-is-a-cloud-browser
title: What a cloud browser is
metaTitle: What a cloud browser is, and who holds it
metaDescription: A definition of a rented browser. The risk sibling is next. This page names the architecture before the sales page calls it just another Chrome.
excerpt: A definition of a rented browser. The risk sibling is next. This page names the architecture before the sales page calls it just another Chrome.
author: Jordan Hale
published: 2026-07-25
category: privacy
tags: privacy, local, cloud browsers, cloud, browser
readingTime: 6
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on what a cloud browser is beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, cloud-browser-risk, why-we-dropped-bandwidth-sharing, what-is-a-cloud-phone, update-channel-habits, cloud-phones-versus-local-windows, if-a-vendor-is-breached, data-residency-is-your-disk
---

A cloud browser is a browser process that runs on a machine you do not own. You stream the pixels. The cookies land on their disk. Sales pages call it “just Chrome in the cloud.” The architecture is a rented runtime with a landlord.

This page is the definition. [Cloud browser risk](/blog/cloud-browser-risk) is the sibling. I will not merge them. Name the thing first. Then argue about who can read it.

The note lives in [Privacy](/blog/privacy) because the product class is a custody class.

## What you are actually using

A VM or a container in a region they picked. A Chromium (sometimes Firefox) they patch. A protocol that sends frames to your laptop. A cookie database you never ls. Sometimes a debugger port you also do not own. Isolation between their tabs can be real. Isolation from them is not.

It is not a local antidetect profile. MaskWright’s store is `{userData}/maskwright-data` on Windows 10/11. No account. No sync. `profiles.json` AES-256-GCM. User-data dirs not encrypted by us. That is still your disk. [Data residency is your disk](/blog/data-residency-is-your-disk) is that sentence.

It is not a cloud phone. [What a cloud phone is](/blog/what-is-a-cloud-phone) is a rented Android. [Cloud phones versus local Windows](/blog/cloud-phones-versus-local-windows) is the comparison. A mobile UA in a cloud Chrome is still a desktop browser in a rack.

## Why the category exists

Cafe laptops. Teams that want a seat. Scraping farms that want a thousand headed browsers without a thousand towers. Automation vendors that want a URL to a live view. Those are real jobs. They are not “the same as local with extra steps.”

[What leaves this machine](/blog/what-leaves-this-machine) on MaskWright is a short list. A cloud browser’s leave list is “everything the session is.” [If a vendor is breached](/blog/if-a-vendor-is-breached) follows. [Updates](/blog/update-channel-habits) on a local app are packages. On a cloud browser, the vendor updates the machine you never held.

We do not sell bandwidth out of your PC. [Why we dropped bandwidth sharing](/blog/why-we-dropped-bandwidth-sharing). Cloud browsers sell the opposite rental: their bandwidth, their CPU, your cookies on their disk.

| Property | Cloud browser | Local MaskWright |
| --- | --- | --- |
| Where Chromium runs | Vendor machine | Your PC |
| Where cookies live | Vendor disk | Your user-data dir |
| Account to start | Usually yes | No |
| Offline CRUD | No | Yes |
| Who is landlord | Them | You |

People also mash “cloud browser” with remote desktop into a PC they own. If you RDP into your office tower, you still hold the disk. The landlord is you (or your IT). If you click a vendor URL and a Chrome appears in a canvas, the landlord is them. The screenshot looks similar. The tar of cookies does not.

Browserless-style APIs are the automation cousin: you send a URL, they run Chromium, they return a screenshot or HTML. Fine for a staging site you own. Not a place I would leave Ads Manager signed in. MaskWright is the opposite shape: headed, local, you sit in the chair.

Version 0.1 does not stream a desktop to a teammate. If you needed that, you already wanted seats and a server. We refused both.

Pushback I hear: “it looks like Chrome.” It is Chrome’s cousin on someone else’s disk. The screenshot is not the custody. If you cannot `dir` the user-data folder while their site is down, you are renting the session. Local MaskWright is the opposite shape: headed, on Windows, you sit in the chair.

## FAQ

### Is Browserless or Browserbase a cloud browser?

They are hosted runtimes, often for automation, not a profile drawer you live in. Still not your disk. Still a landlord for that process.

### Can a cloud browser be antidetect?

It can spoof fingerprints. It cannot make the vendor not hold the files. Antidetect-as-a-service is a common pitch. Custody stays the pitch we care about.

### Do you offer one?

No. [Download MaskWright](/download) is Windows local. [Compare](/compare) if you wanted seats and a stream.

If the pixels are rented, the cookie store is rented. That is the definition. The risk page is next. Keep them in that order.
