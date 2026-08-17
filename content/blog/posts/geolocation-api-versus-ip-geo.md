---
slug: geolocation-api-versus-ip-geo
title: Geolocation API versus the exit IP
metaTitle: Geolocation API versus the exit IP on Windows
metaDescription: The Geolocation API and the exit IP are different stories. This page explains how they drift, and why a local profile should align both to the same exit.
excerpt: The Geolocation API and the exit IP are different stories. This page explains how they drift, and why a local profile should align both to the same exit.
author: Avery Chen
published: 2026-06-08
category: browser-fingerprinting
tags: fingerprinting, windows, geolocation, spoofing
readingTime: 6
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on geolocation API versus the exit IP beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, what-is-a-dns-leak, why-vpn-alone-fails-fingerprint-tests, what-is-an-ip-leak, browserscan-walkthrough, ja3-ja4-tls-fingerprints, iphey-scores-are-not-verdicts, navigator-webdriver-and-automation-flags
---

The Geolocation API and the exit IP are two location stories. A page can read both. If they disagree, the page does not need a rare canvas hash. A Dallas line with a kitchen pin, or a kitchen line with a Dallas pin, is a coherence tell.

This page splits the doors. It is an alignment note for accounts you have a right to open, not a spoof-the-map walkthrough. If you do not have a right to the account, stop.

## Two different witnesses

The exit IP is a network fact. Ordinary fetches leave through a proxy or a VPN, or through the host NIC if you set neither. Geo databases then guess a country, a city, a timezone, and an ISP for that address. The guess can be wrong. It is still the story most sites start with.

The Geolocation API is a browser fact. A page calls `navigator.geolocation.getCurrentPosition`. Chromium answers with coordinates, accuracy, and sometimes a prompt. On a normal Windows box those coordinates come from the OS location stack, a Wi-Fi guess, or a leftover permission. They do not automatically follow the proxy you configured for HTTP.

That is the drift. [What browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting) includes both witnesses when the page bothers to ask. They are not one field.

Timezone and language sit next to them. `Intl` and `navigator.languages` are still more witnesses. A correct pin with a host clock is still a collage. This page stays on the pin versus the IP. Clock and language belong on their own note.

![A clock next to a proxy map on a Windows desk](/blog/blog-timezone-clock.png "The pin and the exit are different APIs. They have to name the same place if the profile is one person.")

| Witness | Source | Follows a proxy by default |
| --- | --- | --- |
| Exit IP geo | Database guess on the address | Yes, if fetches took the hop |
| Geolocation API | OS location stack / override | No, unless you align it |
| Timezone / languages | `Intl` and `navigator` | No, unless you align them |
| DNS vantage | Resolver path | Separate leak |

## How the stories fork on a real desk

You set a SOCKS5 or HTTP proxy on the profile. The IP page shows Frankfurt. The Geolocation prompt still offers the suburb you sit in, because Windows already knew that suburb and Chromium still trusts it.

You set a system VPN and leave the profile on the host Chrome folder. The IP page shows the VPN city. The Geolocation API still answers the host. [A VPN alone fails fingerprint tests](/blog/why-vpn-alone-fails-fingerprint-tests) for this reason among others. The route moved. The pin did not.

You deny the Geolocation permission and think the door is closed. Some pages never ask. Some infer from IP only. Some ask later. Permission state is itself a signal. Our inject can present a prompt state. That is not the same as coordinates that match the exit.

[What an IP leak is](/blog/what-is-an-ip-leak) is a different door. [What a DNS leak is](/blog/what-is-a-dns-leak) is another. A clean pin with a resolver that bypasses the proxy is still a leak. Do not merge them.

## How we align both to the exit

On profile start, MaskWright queries ip-api.com through the proxy when a proxy is set, or direct when it is not. The response updates timezone, locale, languages, and geolocation before the browser comes up. CDP applies `Emulation.setGeolocationOverride` from the fingerprint. The inject and locale overrides follow the same bundle.

At CDP apply, the launched page may probe ip-api.com or geojs.io again and realign. That traffic leaves the machine. There is no offline magic that invents an exit country.

You bring the HTTP or SOCKS5. We do not broker the line. A sticky exit keeps the story still. A rotating exit will move the country under a pin that was computed for the last hop. That is a login problem, not a reason to hunt a lab badge.

The public download is Windows 10 and 11 x64. Profiles are desktop families. This alignment is for a headed profile on that host. It is not a phone mock.

## What alignment will not fix

A matching pin does not rewrite canvas, fonts, WebGL, or [JA3 or JA4](/blog/ja3-ja4-tls-fingerprints). It does not close WebRTC. STUN can still hand out host candidates the proxy never saw. We set webdriver false as a separate flag. Alignment is hygiene for a profile you already have a right to open. It is not a trust token.

## How I read lab pages that print both

[BrowserScan](/blog/browserscan-walkthrough) and [IPhey](/blog/iphey-scores-are-not-verdicts) often show IP geo and a coordinates row on one screen. I ask whether those two rows can be true at once. I do not ask whether the vendor smiled.

If they fork, I fix the story. If they agree and some other surface still argues, the pin was never the whole job. The [Browser fingerprinting](/blog/browser-fingerprinting) cluster keeps each surface on its own page for that reason.

## The rule I want to hold still

The exit IP is the source of truth for where the profile claims to sit. The Geolocation API has to follow that claim. Timezone and language have to follow it too. A VPN or a proxy that only moves the IP has done half a job. The other half is the pin.

## FAQ

**Does denying geolocation permission close the door?**
No. Some pages infer from IP only. Permission state is itself a signal.

**Does MaskWright invent an exit country offline?**
No. It queries ip-api.com (and may probe geojs.io). That traffic leaves the machine.

**Will a matching pin fix WebRTC?**
No. ICE is a separate path.
