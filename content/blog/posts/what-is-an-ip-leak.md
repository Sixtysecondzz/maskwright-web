---
slug: what-is-an-ip-leak
title: What an IP leak is
metaTitle: What an IP leak is, in practice
metaDescription: An IP leak is any path that shows a different address than the exit you picked. Keep WebRTC and DNS on their own pages. This one defines the leak itself.
excerpt: An IP leak is any path that shows a different address than the exit you picked. Keep WebRTC and DNS on their own pages. This one defines the leak itself.
author: Avery Chen
published: 2026-08-06
category: browser-fingerprinting
tags: fingerprinting, windows, leak
readingTime: 6
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on what an IP leak is beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, ja3-ja4-tls-fingerprints, what-is-a-dns-leak, navigator-webdriver-and-automation-flags, geolocation-api-versus-ip-geo, gpu-renderer-must-match-the-ua, why-vpn-alone-fails-fingerprint-tests, mobile-ua-on-a-desktop-profile
---

An IP leak is any path that shows a different address than the exit you picked. You chose a proxy or a VPN. Some other conversation still disclosed the host NIC, a LAN address, an IPv6 path, or a second public hop. The page now has two maps.

This page defines that leak. [What a DNS leak is](/blog/what-is-a-dns-leak) stays on the resolver. WebRTC stays on STUN and ICE. I will not merge the three.

## The exit is a choice, the leak is a second choice

A profile with HTTP or SOCKS5 is supposed to fetch through that hop. MaskWright parses those types, puts `type://host:port` on Chromium, and handles HTTP auth with a small extension. SOCKS5 auth happens in the handshake. We do not broker the line. You brought it.

The exit you picked is the address you meant to show. A leak is a second address that appeared anyway.

That second address can be the real public NIC. It can be `192.168.x.x`. It can be an IPv6 address the proxy never carried. It can be a DNS vantage that sits in another country. The parent word is still leak. The door is not always the same door.

This is not [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). Fingerprinting is engine answers that are supposed to agree. An IP leak is a network disclosure. Labs print both. The [Browser fingerprinting](/blog/browser-fingerprinting) cluster still keeps the layers named.

![WebRTC candidate paths on a Windows desk](/blog/blog-webrtc-leak.png "A leak is a second address. STUN is one door. DNS is another. Ordinary fetches are a third.")

| Door | What you see | Sibling |
| --- | --- | --- |
| WebRTC / ICE | Host or srflx candidates in SDP | WebRTC leak note |
| DNS | Resolver country != exit country | [DNS leak](/blog/what-is-a-dns-leak) |
| IPv6 | A family the proxy never carried | Same parent word, different path |
| Fetch bypass | A process that never took `--proxy-server` | Most boring, easiest to miss |
| Geolocation pin | Kitchen coords next to a Frankfurt IP | Not an IP leak; [geo vs IP](/blog/geolocation-api-versus-ip-geo) |

## Doors I will name and then leave alone

WebRTC. A page creates an `RTCPeerConnection`, waits for ICE, and reads host or server-reflexive candidates out of the SDP. Those candidates can be LAN or the real public NIC. The sibling defines that leak and the four modes we actually ship: disabled, proxy, public, and real. This page only needs the sentence: ICE is a second path.

DNS. A resolver that ignores the proxy or the tunnel answers names from another vantage. That is a DNS leak. It is not an ICE candidate.

IPv6. A tunnel or a proxy that only carried IPv4 can still leave an IPv6 path on the host. The page then sees a second family.

Ordinary fetches that never took the proxy. A scheme you did not cover, a bypass list, or a process that launched without the profile's `--proxy-server` will talk as the host. That is the most boring leak and the easiest to miss if you only tested one tab.

## What an IP leak is not

It is not a canvas hash. It is not a [GPU renderer that fails to match the user agent](/blog/gpu-renderer-must-match-the-ua). It is not a [mobile user agent on a desktop profile](/blog/mobile-ua-on-a-desktop-profile). Those are coherence problems in the engine. Changing them will not close a STUN path.

It is not [JA3 or JA4](/blog/ja3-ja4-tls-fingerprints). Those describe TLS Client Hello behavior. A leak can happen on a handshake that still looks like stock Chromium.

It is not `navigator.webdriver`. [Automation flags](/blog/navigator-webdriver-and-automation-flags) tell a site the session was driven. We set the flag false. That does not hide an address.

It is not a VPN by itself. [A VPN alone fails fingerprint tests](/blog/why-vpn-alone-fails-fingerprint-tests) because the engine stayed. A VPN can also fail this definition if a door bypasses the tunnel. Two failures. Two notes.

## What we can say from the product

We apply WebRTC policy through Chromium prefs and an inject that filters `RTCPeerConnection`. Modes are disabled, proxy, public, and real. We align timezone, language, and geolocation to an ip-api.com lookup through the proxy when a proxy is set. The proxy check UI uses the same lookup.

We do not claim a leak test is green. We have no published pass rates. Connectivity check is TCP connect only. It does not prove HTTP or SOCKS5 auth succeeded, and it does not prove ICE is quiet.

The public channel is Windows 10 and 11 x64. Per-profile data lives in a local folder. Nothing about that folder hides a NIC.

## How I want you to use this definition

When a page says IP leak, ask which path spoke. If it was ICE, go to the WebRTC notes. If it was a resolver, go to DNS. If it was a fetch that never took the hop, fix the hop.

Do not reroll a seed to hide an address. Do not treat a new lab score as a closed door. The leak is the second address. Name the door, then stop.

## FAQ

**Does a green connectivity check prove there is no leak?**
No. The check is TCP connect only. It does not prove auth, and it does not prove ICE is quiet.

**Is a kitchen geolocation pin an IP leak?**
No. That is a pin that failed to follow the exit. Different job.

**Will changing the GPU string close a leak?**
No. Addresses are paths. GPU strings are engine answers.
