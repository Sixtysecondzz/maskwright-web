---
slug: mac-address-is-not-a-browser-fingerprint
title: A MAC address is not a browser fingerprint
metaTitle: A MAC address is not a browser fingerprint
metaDescription: A MAC address is a network identifier, not a canvas hash. Product does not hide MACs. This page stops a 2021 myth from driving the wrong expectation.
excerpt: A MAC address is a network identifier, not a canvas hash. Product does not hide MACs. This page stops a 2021 myth from driving the wrong expectation.
author: Avery Chen
published: 2026-06-20
category: browser-fingerprinting
tags: fingerprinting, windows, mac, address
readingTime: 5
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on a MAC address is not a browser fingerprint beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: fingerprint-spoofing-versus-tracking-prevention, cross-browser-fingerprinting, what-is-browser-fingerprinting, digital-footprint-versus-browser-fingerprint, what-is-device-fingerprinting, after-third-party-cookies, canvas-fingerprinting-on-windows, fingerprint-surfaces-we-actually-cover
---

One thing worth flagging: MaskWright does not hide MAC addresses. A MAC is a link-layer label on a network interface. It is not a canvas hash, not a user agent, and not something a normal page reads out of `navigator`. A 2021 hiding page treated "hide MAC" as a browser feature. It is not.

If a vendor is measuring the NIC, you are in device or network territory, not in the inject. This note lives under [Browser fingerprinting](/blog/browser-fingerprinting) so that myth stops driving the wrong shopping list.

## What a MAC address is

A MAC address is a hardware identifier switches use on a LAN. Your router sees it. A Wi-Fi access point sees it. A site in a Chromium tab does not get it from JavaScript the way it gets `hardwareConcurrency`.

There are ugly exceptions in old plugins and in local software that already has OS permission. Those exceptions are not the browser fingerprint. They are the machine talking to something that is allowed to see the machine.

| Identifier | Who usually sees it | In a MaskWright profile? |
| --- | --- | --- |
| Canvas / WebGL | The page | Yes, with inject noise and overrides |
| User agent, Client Hints | The page | Yes, CDP plus inject |
| Exit IP | The site, geo DBs | Only if you attached a proxy |
| MAC address | LAN, router, OS tools | No. We do not rewrite the adapter |

[What browser fingerprinting measures](/blog/what-is-browser-fingerprinting) is the engine bundle: UA, screen, canvas, WebGL, fonts, clocks, audio, WebRTC candidates. [Canvas on a real Windows box](/blog/canvas-fingerprinting-on-windows) is paint. A MAC is a NIC.

[Device fingerprinting](/blog/what-is-device-fingerprinting) is the parent for NIC, disk, and install facts. This page only has to retire the myth that an antidetect profile rewrites the adapter.

## What the product does not do

[The surfaces we actually cover](/blog/fingerprint-surfaces-we-actually-cover) are DOM, CDP, prefs, and a few compile-time core patches. None of those rows is a MAC.

We do not change the Windows adapter address. We do not ship a driver. We do not sit in the NDIS path. We parse HTTP and SOCKS5 for a profile. We align timezone and geolocation to an exit lookup. We filter WebRTC candidates according to a mode. That is the network work. It is not a NIC rewrite.

I will not claim a future toggle. The audit does not show one.

Randomizing a MAC at the OS or the router is a different tool, with a different blast radius. It can break DHCP reservations. It does not empty cookies. It does not paint canvas. It is outside this product.

## Why the myth keeps getting a page

Old "hide my identity" posts stacked every noun they knew: IP, DNS, WebRTC, MAC, IMEI, canvas. The stack ranked. It also taught people to expect a browser to do switch work.

[After third-party cookies](/blog/after-third-party-cookies) the same posts got a sequel: cookies died, so now hide the MAC. Cookies did not die. First-party logins still hold sessions. Topics is not a NIC.

[Digital footprint versus browser fingerprint](/blog/digital-footprint-versus-browser-fingerprint) is the other sequel. An email is not a MAC. A card is not a MAC. Changing the adapter will not unset either.

[Cross-browser fingerprinting](/blog/cross-browser-fingerprinting) can join two engines on one box through IP and hardware family. The MAC may sit in that family for a local observer. A remote page still usually has the exit, not the adapter.

## Spoof versus prevent, one more time

[Fingerprint spoofing versus tracking prevention](/blog/fingerprint-spoofing-versus-tracking-prevention) is the product fork. Spoofing paints a coherent desktop identity. Tracking prevention reduces signal. Neither job is "rewrite the NIC."

A privacy browser that blocks canvas is still on the same adapter. A local profile that overrides WebGL is still on the same adapter. If your threat model is a LAN admin, buy a LAN tool. If your threat model is a page, stay on the engine bundle.

A local profile can still change the address the page sees on ordinary fetches, because you brought a proxy. That is an exit, not a MAC. Confusing the two is how the 2021 pages got written. The hop is per profile. The adapter is per machine.

## FAQ

**Why does my fingerprint lab not print a MAC?**
Because a normal page cannot read it. That is expected, not a missing feature.

**If a vendor lists MAC spoofing, should I want it?**
Treat it as a different product, or as leftover marketing. It is not a MaskWright setting.

**Does a proxy hide my MAC from the site?**
The site sees an exit IP. It still does not see the adapter. The router on your LAN still does.

When a feature list says MAC spoofing, treat it as a different product or as marketing leftover from 2021. When a lab page does not print a MAC, that is normal. When a network appliance does print a MAC, that is the appliance's job.

Keep the words still. A MAC is a NIC label. A fingerprint is an engine measurement. This product does the second job on Windows. It does not do the first.
