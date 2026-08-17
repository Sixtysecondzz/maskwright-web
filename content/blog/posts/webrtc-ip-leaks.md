---
slug: webrtc-ip-leaks
title: What a WebRTC leak actually is
metaTitle: What a WebRTC leak actually is on Windows
metaDescription: A WebRTC leak is a STUN path to local and public candidates. This page defines the leak, then points to mode tradeoffs on the sibling note, not a hide-the-IP.
excerpt: A WebRTC leak is a STUN path to local and public candidates. This page defines the leak, then points to mode tradeoffs on the sibling note, not a hide-the-IP.
author: Avery Chen
published: 2026-07-29
category: browser-fingerprinting
tags: fingerprinting, windows, webrtc, leak
readingTime: 6
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on what a WebRTC leak actually is beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, webrtc-modes-disabled-proxy-public-real, what-is-an-ip-leak, checking-exit-ip-before-launch, webgpu-and-new-fingerprint-surfaces, audio-context-fingerprint, webgl-renderer-strings, font-enumeration-on-windows
---

A WebRTC leak is not a mysterious extra IP. It is a STUN conversation that hands a site candidates the proxy never saw. The page creates an `RTCPeerConnection`, waits for ICE, and reads host or server-reflexive addresses out of the SDP. Those addresses can be your LAN, your real public NIC, or both.

This page defines the leak. [WebRTC modes](/blog/webrtc-modes-disabled-proxy-public-real) cover the policy tradeoffs. I will not write a hide-the-IP recipe.

## ICE is a second path

A proxy you set for HTTP and SOCKS5 carries the pages you fetch. WebRTC is allowed to go around that path. Chromium uses ICE. ICE uses STUN. STUN asks a server on the internet "what do I look like" and also gathers local interface addresses so peers can try a direct path.

If the site can see a host candidate on `192.168.x.x` while your proxy exit is in another country, the site has two maps. If it can see the real public address of the NIC, the proxy was decoration for ordinary fetches and irrelevant for this API.

That is the leak. It is an address disclosure. It is not a canvas hash and it is not a font list.

![WebRTC candidate paths on a Windows desk](/blog/blog-webrtc-leak.png "STUN can return local and public candidates that never entered the proxy you configured for ordinary fetches.")

## Leak versus the wider IP idea

[What an IP leak is](/blog/what-is-an-ip-leak) is the parent definition. DNS, IPv6, and WebRTC are different doors. Do not merge them. A clean DNS resolver with a loud host candidate is still a WebRTC leak. A quiet WebRTC policy with a resolver that bypasses the proxy is a DNS leak. Different notes.

[Checking the exit IP before launch](/blog/checking-exit-ip-before-launch) is hygiene for the proxy you meant to use. It does not prove ICE is quiet. You can see a correct exit on an IP page and still spill a local candidate in the next tab.

| Door | What leaks | What does not fix it |
| --- | --- | --- |
| WebRTC / ICE | Host or public candidates in SDP | A correct HTTP exit page |
| DNS | Resolver vantage that ignores the proxy | A quiet ICE list |
| Ordinary fetch | Traffic that never took `--proxy-server` | A WebRTC mode |

## What the page is not measuring

WebRTC is not [WebGL](/blog/webgl-renderer-strings). It is not [WebGPU](/blog/webgpu-and-new-fingerprint-surfaces). It is not [AudioContext](/blog/audio-context-fingerprint). It is not [font enumeration](/blog/font-enumeration-on-windows). Those surfaces hash or list engine state. This surface publishes addresses.

Operators treat every red lab row as the same problem. That habit produces random WebRTC toggles next to an untouched GPU string. Read the row. If it is an IP, stay on IP.

## Host, srflx, and relay are different facts

A host candidate is an address on a local interface. That is the LAN tell. A server-reflexive (srflx) candidate is what a STUN server said you look like from the internet. That can be the real public NIC, which may not be the HTTP proxy exit. A relay candidate is a TURN server. Ordinary leak pages care about host and srflx. They are reading SDP from `onicecandidate` or from `localDescription`.

The site does not need to complete a call. Gathering is enough. A hidden `RTCPeerConnection` with a stun URL is a common probe. If your proxy only wraps fetches, that stun URL still leaves from the path Chromium chose for ICE.

IPv6 makes a second map. A quiet IPv4 proxy next to a global IPv6 host candidate is still a leak.

## mDNS names are still a disclosure

Some Chromium builds hide raw host IPs behind `.local` mDNS names. That is not the same as no leak. The page still learns you gathered a local candidate. A mode that promised silence and still produced an mDNS host line did not keep the promise.

Read the candidate type, not only the dotted quad. Then decide whether that type matches the policy you launched.

## What we implement

MaskWright applies Chromium prefs for `webrtc.ip_handling_policy`, injects filters on `RTCPeerConnection`, and exposes four modes: disabled, proxy, public, and real. The sibling explains what those modes mean as policies. I will not pretend one of them is a trophy setting.

The public product is a local Windows app. You bring your own HTTP or SOCKS5. We do not broker the exit. A mode cannot invent a proxy you did not configure.

## How I read a candidate list

I look for three facts. Did a host candidate appear. Did a public candidate appear that is not the proxy exit. Does that story match the mode I thought I launched.

If the profile is authorized work on a household LAN, a host candidate tells the site you are on a LAN. That may be acceptable for the job. It is still a disclosure. Name it.

The bundle these addresses sit beside is [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). The [Browser fingerprinting](/blog/browser-fingerprinting) cluster keeps the leak definition here so the mode page can stay on tradeoffs.

## FAQ

**Does a correct exit IP prove WebRTC is quiet?**
No. ICE is a second path. Check candidates separately.

**Is an mDNS `.local` name safe?**
No. It still discloses that a local candidate was gathered.

**Do I need a completed call for the leak to happen?**
No. Gathering is enough. A hidden `RTCPeerConnection` is a common probe.
