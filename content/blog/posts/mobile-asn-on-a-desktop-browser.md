---
slug: mobile-asn-on-a-desktop-browser
title: A mobile ASN on a desktop browser
metaTitle: A mobile ASN on a desktop browser in a local profile
metaDescription: A mobile ASN on a desktop UA is a coherence problem. Product is desktop only. This page explains the mismatch so a carrier exit is not treated as a phone.
excerpt: A mobile ASN on a desktop UA is a coherence problem. Product is desktop only. This page explains the mismatch so a carrier exit is not treated as a phone.
author: Sam Okonkwo
published: 2026-06-27
category: proxies
tags: proxies, exits, mobile, desktop
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on a mobile ASN on a desktop browser beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: proxies-in-an-antidetect-browser, mobile-versus-residential, mobile-proxy-versus-cloud-phone, carrier-grade-nat-and-shared-exits, what-are-mobile-proxies, how-websites-detect-proxies, residential-proxies-we-do-not-sell, https-proxy-versus-http-forwarder
---

A mobile ASN on a desktop user agent is a coherence problem. The exit says carrier. The browser says Windows, a mouse, a large screen, and Client Hints with `mobile: false`. Those two sentences can both be true. They do not add up to a phone. MaskWright is desktop profiles only. This page exists so a carrier line is not treated as a handset.

[Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is the pillar. [What mobile proxies are](/blog/what-are-mobile-proxies) is the definition. The rest of the cluster lives under [Proxies](/blog/proxies). Authorized work only.

## What the site can see at once

The IP maps to a mobile carrier ASN. Geo may say a city the tower last reported. [Carrier-grade NAT](/blog/carrier-grade-nat-and-shared-exits) means many subscribers share that address. None of that is a device.

The browser, if you left it honest, reports a desktop UA, desktop Client Hints, a screen like a monitor, max touch points at 0, a plugged-in battery, and a GPU that looks like a PC. Fingerprint presets in this product model Windows, macOS, or Linux. `mobile: false` is in the Client Hints metadata.

| Signal | Desktop profile (honest) | Phone |
| --- | --- | --- |
| Client Hints `mobile` | `false` | `true` |
| Screen | Monitor-sized | Phone-sized |
| Max touch points | 0 | > 0 |
| GPU / UA family | Desktop OS | Mobile OS |
| Exit ASN | Can still be a carrier | Often a carrier |

A page that cares will join those rows. Carrier IP plus desktop Chrome is a laptop on a phone hotspot, or a desktop behind a mobile proxy product. Both happen in real life. A page that wants a phone will not be talked out of that want by a UA you painted.

We do not ship Android or iPhone emulation. There is no cloud phone. [Mobile proxy versus a cloud phone](/blog/mobile-proxy-versus-cloud-phone) is the product cut. A rented Android is a different machine. A carrier exit on your tower is a path.

## Why operators attach a mobile line anyway

[Mobile versus residential](/blog/mobile-versus-residential) is an exit-type choice. Some authorized profiles need a carrier street: a brand that already uses a hotspot, a market where residential pools are exhausted, a provider that only sold you mobile. Those are path reasons.

"Look like the app" is not a path reason. The TikTok or Instagram app is not this browser. A mobile ASN will not make the web surface into the app. It will make the web surface a desktop browser on a carrier IP.

We [do not sell](/blog/residential-proxies-we-do-not-sell) the line. We will parse HTTP or SOCKS5, including a mobile product, and we will align timezone and language to the exit when the lookup works. We will not flip `mobile: true` and a 390-pixel screen because the ASN is T-Mobile. That mismatch is a tell.

## What I keep honest

UA, Client Hints, screen, and touch stay desktop if the profile is desktop. Timezone and language follow the carrier exit. Geolocation follows the exit country in a boring way. I do not drop a rooftop pin on a CGNAT address and call that a phone GPS.

WebRTC and IPv6 still matter. A house IPv6 next to a mobile IPv4 is two streets. [How websites detect proxies](/blog/how-websites-detect-proxies) is mechanism, not a hide guide. Carrier ranges get listed too. A mobile SKU is not invisible.

`https` as a type is still an HTTP forwarder. [HTTPS versus an HTTP forwarder](/blog/https-proxy-versus-http-forwarder) does not change because the ASN is mobile.

Credentials live in `profiles.json`, AES-256-GCM at rest. The per-profile tree is not encrypted. A mobile password is still a password.

## When the mismatch is acceptable

It is acceptable when the authorized work is a desktop site and the path happens to be a carrier: a hotspot you own, a mobile proxy you bought for the street, a travel SIM on a USB modem. Laptops on LTE exist. The story is PC on cellular, not iPhone.

It is not acceptable when you promised a client a cloud phone and delivered this app plus a mobile username. It is not acceptable when last week's session was a residential desktop story and this week's is a carrier IP with a painted mobile UA. That is a new device circus.

If the site requires the official app, use the official app on a device you own. Do not ask a Windows profile to be that device.

## FAQ

**Does a mobile ASN make MaskWright a phone?**
No. Desktop profiles only. No cloud phone.

**Should I spoof a mobile UA on a carrier exit?**
I do not. Keep the browser a desktop browser if the host is a PC.

**Is a laptop on LTE a mismatch?**
No. That story is coherent: PC on cellular.

Attach a carrier line if the path needs it. Keep the browser a desktop browser. Name the mismatch so nobody on the desk calls it a phone.
