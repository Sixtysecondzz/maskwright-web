---
slug: webrtc-modes-disabled-proxy-public-real
title: "WebRTC modes: disabled, proxy, public, real"
metaTitle: "WebRTC modes: disabled, proxy, public, real"
metaDescription: Disabled, proxy, public, and real are different WebRTC policies. Learn what each mode does to candidates so you can pick a policy, not a trophy setting.
excerpt: Disabled, proxy, public, and real are different WebRTC policies. Learn what each mode does to candidates so you can pick a policy, not a trophy setting.
author: Avery Chen
published: 2026-07-31
category: browser-fingerprinting
tags: fingerprinting, windows, webrtc, how-to, handling
readingTime: 4
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on WebRTC modes: disabled, proxy, public, real beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, audio-context-fingerprint, webrtc-ip-leaks, font-enumeration-on-windows, webgpu-and-new-fingerprint-surfaces, client-rects-and-subpixels, webgl-renderer-strings, user-agent-is-not-enough
---

Disabled, proxy, public, and real are four different answers to the same question: which ICE candidates may this profile expose. They are policies, not grades. A mode that hides every candidate can still break a call you needed. A mode that tells the truth can still be the right policy for a profile that must use WebRTC.

[What a WebRTC leak actually is](/blog/webrtc-ip-leaks) defines STUN and host candidates. This page stays on the tradeoff. I will not rank the four for a lab screenshot.

## The four policies

| Mode | What it aims to do | Cost |
| --- | --- | --- |
| Disabled | Turn the API down so the page should not gather useful candidates | Real peer connections fail |
| Proxy | Keep ICE on the HTTP or SOCKS5 you already configured | Needs a proxy. Not a perfect STUN guarantee |
| Public | Prefer public candidates, avoid local host addresses | The site may still see an address, just not the LAN |
| Real | Let the engine gather what the NIC actually has | Loudest option on a household LAN |

**Disabled** is the blunt tool. Use it when the profile has no authorized reason to open WebRTC.

**Proxy** asks ICE to prefer the path you already configured. Ordinary fetches in MaskWright go through the HTTP or SOCKS5 you brought. This mode is the attempt to keep WebRTC on that story. It is not a claim that every STUN packet is perfect. HTTPS-as-TLS-to-proxy is not implemented. A missing proxy is not a proxy mode.

**Public** aims at public candidates and away from local host addresses. That is a narrower disclosure, not invisibility.

**Real** lets the engine gather what the NIC actually has. Host candidates can appear. This is honesty about the machine path.

We apply those modes through Chromium `webrtc.ip_handling_policy` prefs and inject filters on `RTCPeerConnection`. That is the implementation. It is not a trophy badge.

## Pick a policy for the work

Authorized accounts differ. A brand ads manager that never calls WebRTC can sit on disabled. A support profile that must join a real browser call cannot. The policy follows the job, not a blog that sold "prevent WebRTC" as a universal win.

A proxy you do not own cannot be assumed. MaskWright does not bundle exits. If the profile has no line, proxy mode has nothing to follow.

## Prefs and filters are two layers

Chromium prefs for `webrtc.ip_handling_policy` change what the engine is willing to gather. The inject filters what `RTCPeerConnection` will admit to the page. We use both. A pref-only story can still leak through a constructor the page already holds. A filter-only story can still gather under the hood. I will not claim either layer is complete against every Chromium minor. Real-world resistance is unknown.

Proxy needs a line. HTTP and SOCKS5 are the types we parse. The `https` type is treated as an HTTP forwarder. TLS-to-proxy is not implemented. If ICE still has a path around that forwarder, read the candidate list instead of trusting the mode name.

## What a mode will not fix

A quiet ICE list does not fix [WebGL strings](/blog/webgl-renderer-strings), [WebGPU adapter info](/blog/webgpu-and-new-fingerprint-surfaces), [AudioContext](/blog/audio-context-fingerprint), [fonts](/blog/font-enumeration-on-windows), or [client rects](/blog/client-rects-and-subpixels). Those are engine measurements. This is an address policy.

[A user agent string](/blog/user-agent-is-not-enough) is also the wrong lever. Changing UA does not change ICE.

## Test the mode you launched

After start, gather once on a page you control or on a map you already use for reading. Confirm host candidates match the policy. If disabled still produces a constructor that answers, the profile is not disabled. If proxy still shows the NIC, the line did not carry ICE.

Do that check when you change proxies. A new exit does not rewrite a mode you already saved.

## How I choose

I ask whether the profile needs WebRTC at all. If no, disabled. If yes, I ask whether a local candidate is acceptable for that authorized job. If no, public or proxy, and I still read the leak definition after launch. If the work is a real call on a known LAN, real is a coherent choice.

The rest of the bundle lives under [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting) and the [Browser fingerprinting](/blog/browser-fingerprinting) hub. Modes are one control. They are not the profile.

## FAQ

**Which mode is the "safe" one?**
None of them is a grade. Disabled is quiet and breaks calls. Real is honest and loud. Pick for the job.

**Does proxy mode work without a proxy?**
No. If the profile has no HTTP or SOCKS5 line, proxy mode has nothing to follow.

**Will changing my user agent change ICE?**
No. UA is a caption. ICE is a network path.
