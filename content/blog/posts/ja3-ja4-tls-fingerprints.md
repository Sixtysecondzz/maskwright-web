---
slug: ja3-ja4-tls-fingerprints
title: JA3 and JA4 are not JavaScript spoofs
metaTitle: JA3 and JA4 are not JavaScript spoofs
metaDescription: JA3 and JA4 describe TLS client hello behavior. You do not spoof them in page script. This note covers compile-time BoringSSL, not a JavaScript costume.
excerpt: JA3 and JA4 describe TLS client hello behavior. You do not spoof them in page script. This note covers compile-time BoringSSL, not a JavaScript costume.
author: Avery Chen
published: 2026-06-17
category: browser-fingerprinting
tags: fingerprinting, windows, ja3, ja4
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on JA3 and JA4 are not JavaScript spoofs beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, navigator-webdriver-and-automation-flags, what-is-an-ip-leak, gpu-renderer-must-match-the-ua, what-is-a-dns-leak, mobile-ua-on-a-desktop-profile, geolocation-api-versus-ip-geo, macos-fingerprint-on-a-windows-host
---

JA3 and JA4 describe how a TLS client says hello. They are hashes of the handshake, not hashes of a canvas. A script running in the page cannot rewrite them. An inject that patches `navigator.userAgent` cannot rewrite them. If a vendor is classifying the Client Hello, you are in the engine's network stack, not in the DOM.

This note stays on that layer. It is not a JA3 spoof guide. We will not publish a how-to for faking the hello.

## What the hello actually contains

When Chromium opens HTTPS, BoringSSL (or the stack the binary was built with) sends a Client Hello. The hello lists protocol versions, cipher suites, extensions, elliptic curves, and the order of those things. JA3 is an older digest of that list. JA4 is a later digest with more structure. Both exist so a server or a middlebox can ask "what kind of client is this" without reading JavaScript.

Stock Chrome on Windows produces a hello that looks like stock Chrome on Windows. Firefox produces a different hello. A Python script produces another. A mobile WebView produces another. The point of the hash is family, not a serial number. Many honest Chromes share a JA3. A hello that does not look like the user agent you claimed is the tell.

That is the same coherence idea as [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting), one layer down. The [Browser fingerprinting](/blog/browser-fingerprinting) cluster treats DOM surfaces as one job. TLS is another.

| Layer | Who writes it | Can page script change it |
| --- | --- | --- |
| Canvas / WebGL / UA | Engine + inject / CDP | Yes, for the JS-visible parts |
| `navigator.webdriver` | Inject + launch flag | The boolean, not the process |
| JA3 / JA4 | The TLS stack in the binary | No |
| IP / DNS | Network path | No (different doors) |

## Why page script cannot do this job

JavaScript sees `navigator`, canvas, WebGL, and workers. It does not author the Client Hello. CDP can override user agent and timezone. It does not pack cipher suites. A stealth plugin that rewrites `navigator.webdriver` is still in the DOM. [Automation flags](/blog/navigator-webdriver-and-automation-flags) are a different tell. We set webdriver false and launch with `--disable-blink-features=AutomationControlled`. That is demonstrated. It is not a TLS patch.

If you only changed the string, the hello still belongs to the binary you launched. A [mobile user agent on a desktop profile](/blog/mobile-ua-on-a-desktop-profile) is already a DOM collage. Adding a phone UA on a Windows Chrome hello makes the collage louder, not quieter.

A [macOS fingerprint on a Windows host](/blog/macos-fingerprint-on-a-windows-host) has the same problem at this layer. The host binary is still a Windows Chromium. The hello will tend to sound like one.

## What the product actually does

TLS JA3 and JA4 are partial in the audit, and they are compile-time. The notes in the desktop tree say a patched BoringSSL tree is required. They are not JavaScript-spoofed. I will not claim a runtime toggle.

When the custom Chromium 131 core is installed, launch can use that binary. Patches in the tree include process branding, TLS notes, font raster, and GPU `GL_VENDOR`. When the core is missing, the app falls back to system Chrome or Edge and still applies CDP and inject overrides. The fallback does not give you a patched hello. Honesty about the fallback is the whole point of this page.

We have no runtime TLS test results in the repo. Effectiveness is unknown. I will not invent a pass rate. I will not say JA4 is solved.

![A Chromium core on a Windows operator desk](/blog/blog-chromium-core.png "The Client Hello belongs to the binary. An inject script does not pack cipher suites.")

## What JA3 is not

It is not [an IP leak](/blog/what-is-an-ip-leak). A hello can look like Chrome and still disclose a second address through ICE or a fetch that missed the proxy.

It is not [a DNS leak](/blog/what-is-a-dns-leak). The resolver answers before the hello.

It is not the [Geolocation API versus the exit IP](/blog/geolocation-api-versus-ip-geo). Coordinates do not live in the handshake.

It is not a [GPU renderer](/blog/gpu-renderer-must-match-the-ua). WebGL strings are DOM and GL. They have to match the user agent for a different reason. Matching them does not mint a JA3.

## How I want you to use this page

If a vendor says they hash JA3 or JA4, believe that they are looking at the binary, not at your inject. If you are on the custom core, you are still in a compile-time story with undocumented field results. If you are on system Chrome or Edge, you have that browser's hello plus a JavaScript overlay.

Do not buy a "JA3 spoof" script. Do not treat a lab DOM score as a handshake score. The hello is the hello. Page script does not write it. A matching GPU and a quiet WebRTC mode do not mint a hello either. Those jobs stay on their own pages.

## FAQ

**Can I spoof JA3 in JavaScript?**
No. The Client Hello is packed by the TLS stack, not by the page.

**Does the custom Chromium core solve JA4?**
Unknown. It is compile-time and untested in the repo. I will not claim it is solved.

**Does system Chrome fallback include a patched hello?**
No. Fallback is CDP and inject only.
