---
slug: browser-as-a-service-risks
title: Browser as a service holds your cookies
metaTitle: Browser as a service holds your cookies
metaDescription: If the browser runs on someone else's disk, they hold the jar. This risk page is about BaaS custody, not a feature matrix for rented Chrome.
excerpt: If the browser runs on someone else's disk, they hold the jar. This risk page is about BaaS custody, not a feature matrix for rented Chrome.
author: Riley Park
published: 2026-06-18
category: antidetect-browsers
tags: antidetect, profiles, browser, service
readingTime: 6
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on browser as a service holds your cookies beside named local browser profiles in a sidebar, photographed as a working operator setup.
related: what-is-an-antidetect-browser, custom-chromium-versus-system-chrome, ghost-browser-vs-antidetect, mobile-antidetect-is-not-a-desktop-profile, antidetect-browsers-for-seo, antidetect-browser-for-agencies, antidetect-browsers-for-media-buying, proxy-browser-vs-antidetect
---

If the pixels render on a machine you do not own, the cookies are a file on that machine. That is the risk, and it is older than this year’s cloud Chrome tabs. Support can copy it. A backup job can copy it. A warrant, a billing freeze, or a contractor with disk access can copy it. Feature lists hide that sentence.

I am not scoring streaming quality or seat prices. [What an antidetect browser is](/blog/what-is-an-antidetect-browser) can be local. The moment the same idea is sold as a service, the session has a landlord.

## Custody is the product, whether they say so or not

Browser as a service (BaaS) means a remote Chromium, a screenshot or H.264 pipe to your laptop, and a cookie store that never sat in your `%LOCALAPPDATA%`. Isolation between their tabs can still be real. Isolation from the vendor is not. They operate the process. They can snapshot it.

Agencies like the demo: open a client from a cafe, hand a seat to a contractor, reclaim it on Friday. [Antidetect for agencies](/blog/antidetect-browser-for-agencies) is a real job. Platform roles (Facebook Page roles, Google users, Shopify staff) are how I would rather grant access. A rented browser copies the session instead of inviting a person.

Media buying and SEO desks hit the same pitch: “run 50 browsers in the cloud.” [Media buying](/blog/antidetect-browsers-for-media-buying) and [SEO](/blog/antidetect-browsers-for-seo) on this site are about authorized properties and local folders, not about a farm in someone else’s rack.

## What a local profile changes, and what it does not

A MaskWright profile is a folder under `maskwright-data`. You can copy it, delete it, and keep it offline for CRUD. We do not upload it. Encryption on `profiles.json` is AES-256-GCM. The Chromium user-data dir is not encrypted by our code. Local is not a magic vault. It is one fewer custodian.

A [proxy browser](/blog/proxy-browser-vs-antidetect) that only changes IP is also not BaaS, and also not isolation. Ghost-style session products sit in between: still a browser you run, still not a remote disk. [Ghost Browser versus antidetect](/blog/ghost-browser-vs-antidetect) is that comparison.

Mobile antidetect and cloud phones are a different rental. [Mobile antidetect is not a desktop profile](/blog/mobile-antidetect-is-not-a-desktop-profile). A mobile UA on desktop Chromium is not an Android. A cloud phone is an Android you do not hold.

## Custom core versus rented Chrome

People ask whether a [custom Chromium versus system Chrome](/blog/custom-chromium-versus-system-chrome) matters more than where it runs. For fingerprint work, the core matters. For custody, the disk matters more. A perfect spoof on a vendor VM is still a cookie file the vendor can tar.

MaskWright’s target is Chromium 131 when the core is present, with a fallback to system Chrome or Edge. That fallback is less pretty for deep tells. It is still local. I would rather a slightly messier local fingerprint than a polished remote cookie store I cannot wipe without a ticket.

## A short risk table

| Event | Local profile | Browser as a service |
| --- | --- | --- |
| Vendor breach | They do not hold your cookie files | They likely do |
| You forget a password | No vendor restore | They can restore the session |
| Contractor needs access | Platform role, or you sit with them | Often “share the browser” |
| You stop paying | Files stay on your disk | Session may freeze on their disk |
| Offline edit of the store | Works | Needs their API |

## FAQ

### Is every cloud tab BaaS?

If the browser process is not on your machine, yes for this page’s purposes. A remote desktop into a PC you own is a different custody story. A vendor’s Chromium in their region is BaaS.

### Can I use BaaS for throwaway research?

You can. I still would not put payouts, tax tabs, or a live ads account in it. Research that never logs in is the only use I find easy to defend.

### Does MaskWright offer a hosted browser?

No. Windows 10/11 x64 local app. [Download MaskWright](/download) or [compare local versus cloud](/compare) if you are still choosing.

The [Antidetect browsers](/blog/antidetect-browsers) hub is isolation on a PC you hold. This page is only the landlord sentence. If the runtime is rented, they hold the cookies. Plan around that, or do not rent the runtime.
