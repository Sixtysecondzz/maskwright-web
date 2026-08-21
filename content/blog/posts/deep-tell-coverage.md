---
slug: deep-tell-coverage
title: Deep tell coverage on a local Chromium
metaTitle: Deep tell coverage on a local Chromium core
metaDescription: Which fingerprint surfaces a local Windows Chromium can actually align, and which ones belong to the binary or the exit. A coherence map, not a lab score.
excerpt: Which fingerprint surfaces a local Windows Chromium can actually align, and which ones belong to the binary or the exit. A coherence map, not a lab score.
author: Sam Okonkwo
published: 2026-08-21
category: browser-fingerprinting
tags: fingerprinting, chromium, windows, coherence, surfaces
readingTime: 7
heroImagePrompt: A Windows tower on a sit-down desk beside a dual monitor setup showing a Chromium core diagram and a fingerprint surface grid, photographed as a local operator bench with no cloud hardware in frame.
related: creepjs-consistency-checks, pixelscan-consistency, iphey-scores-are-not-verdicts, browserscan-walkthrough, why-vpn-alone-fails-fingerprint-tests, when-not-to-open-a-profile, antidetect-browser-for-windows
---

I keep a list of surfaces on the desk next to the seed. The list is not a scorecard. It is a map of what this box can actually keep honest and what it cannot. A local Windows Chromium can align a lot of signals. It cannot rewrite the TLS hello that left the binary last week. The job is to know which side of that line each surface falls on.

[What device fingerprinting actually is](/blog/what-is-device-fingerprinting) is the bundle. The bundle has to read as one person. This page names the surfaces we cover on the local core, the surfaces that stay with the exit, and the surfaces that stay with the binary. If a row does not fit the story, the fix is to name the mismatch, not to chase a green cell.

## Surfaces the local core can align

The Chromium core on this PC runs the JavaScript, paints the canvas, and answers the WebGL prompt. We can set the values those calls return. The seed decides what the values are, and the folder decides they stay put across launches.

| Surface | What we set | What we cannot change from here |
| --- | --- | --- |
| User agent and Client Hints | UA string, platform, brand versions, mobile flag | The TLS Client Hello that already left |
| Screen and window | Outer, inner, color depth, pixel ratio | The physical panel the operator is sitting in front of |
| Cores and memory | hardwareConcurrency, deviceMemory | The actual thread count the scheduler sees |
| WebGL and WebGPU | Renderer, vendor, unmasked strings | The driver that signed the draw call |
| Canvas and client rects | Pixel output, subpixel widths | ClearType tuning and the font raster on disk |
| Audio | AudioContext hash, oscillator output | The audio stack the OS exposed |
| Fonts | Enumerated family list | Host-only families Windows already installed |
| Timezone and locale | IANA zone, accept-language, locale | The clock the network time service handed the box |
| Geolocation | Pin from ip-api.com at apply | The IP the exit actually resolves to |
| WebRTC policy | Disabled, proxy-only, or mixed | STUN host candidates the socket already opened |
| Battery and media IDs | Presence, fake device list | The real bus the kernel enumerated |
| Webdriver and flags | navigator.webdriver false, chrome object | A CDP inspector the operator left attached |

The core covers the JavaScript-visible layer. That layer is large. It is not the whole machine.

![A fingerprint surface grid on a Windows operator bench](/blog/blog-fingerprint-grid.png "The grid names what the local core can align and what stays with the exit or the binary.")

## Surfaces that belong to the exit

A proxy changes the road. It does not change the car. The exit decides what the network side of the story looks like. We can pick an exit that fits the clock and the pin. We cannot make the exit rewrite signals that left this box before the socket opened.

TCP connect country, ASN, and ISP name come from the exit. [Why a VPN alone fails fingerprint tests](/blog/why-vpn-alone-fails-fingerprint-tests) is the short version of that. The tunnel moved the IP. The machine kept talking with the same GPU, the same font list, and the same audio hash it had before the tunnel came up.

[Timezone has to match the proxy exit](/blog/timezone-must-match-the-proxy). That is an exit-side coherence check. The clock on the wall and the clock the page reads from JavaScript have to agree. If the exit is Dallas and the clock is Berlin, the room failed before canvas was drawn.

JA3 and JA4 describe the TLS Client Hello. The hello is built by the binary, not by the proxy. A SOCKS5 exit does not repack BoringSSL. A page script does not either. If a vendor hashes the handshake, the tunnel did not change the handshake. The [JA3 and JA4 post](/blog/ja3-ja4-tls-fingerprints) covers that boundary in full.

## Surfaces that belong to the binary

Some signals are baked into the thing we downloaded. The local core can override the JavaScript view of them. It cannot rewrite bytes the binary already committed to on the wire.

The TLS fingerprint is the clearest example. The Client Hello includes the cipher suite list, extensions, and ALPN. Those bytes are produced by the Chromium binary before any page script runs. A JavaScript override cannot reach them. A patched core can, and that is a different product decision.

Process name aliasing is another binary-side surface. Windows sees the executable name. The local core can rename the window and the tab title. It does not rename the process in Task Manager unless the operator opted into that Windows-specific layer.

[The Chromium core inside an antidetect browser](/blog/chromium-core-in-an-antidetect-browser) covers what the purpose-built core changes and what it leaves on the host binary. The line is the same line this page draws. JavaScript-visible surfaces are settable. Wire-format surfaces belong to the build.

## What the public lab pages are actually pointing at

[CreepJS consistency checks](/blog/creepjs-consistency-checks) compare the JavaScript view against the worker view. If the two windows disagree, the room has a seam. The fix is to make them agree, not to hide the page.

[Pixelscan consistency](/blog/pixelscan-consistency) is the same idea with a different vendor. A red row names a fork. A green row does not name authorization. I use both pages as maps. I do not use them as trophies.

[IPhey scores](/blog/iphey-scores-are-not-verdicts) are a third map. The score is a weighted average of fields I can read myself. If a field is red, I read the field. I do not stay on the page until the number climbs.

[A BrowserScan walkthrough](/blog/browserscan-walkthrough) dumps the same facts a second way. Two maps are better than one when they disagree. They are still maps.

![A Chromium core diagram on the operator desk](/blog/blog-chromium-core.png "The local core covers the JavaScript layer. Wire-format surfaces belong to the binary.")

## When I do not open a profile

Not every room needs to be open. [When I do not open a profile](/blog/when-not-to-open-a-profile) is the short list. If the exit is wrong, I do not open work to see what happens. If the seed and the cookies disagree, I fix the story before I launch. If the account does not belong to me, no surface alignment will create that right.

[An antidetect browser for Windows](/blog/antidetect-browser-for-windows) is the product. The product gives me a folder, a seed, and an exit. The rest of the coherence is operator work. The deep tell coverage is the map of what the folder can actually keep honest.

## How I use this map at the desk

I read the table before I pick a seed. If the seed says MacBook and the box is a Windows tower, the screen, the GPU, and the font list will all disagree. I pick a seed that fits the chassis.

I read the exit before I pick the clock. If the exit is a residential pool in Frankfurt, the timezone is Europe/Berlin and the language order starts with de. I do not set the clock to match the operator and hope the exit catches up.

I read the binary boundary before I trust a lab page. If a red row names TLS, the fix is not on this desk. It is a core decision. If a red row names canvas, the fix is a reseed or a host font check. The map tells me which side of the line the problem lives on.

![Canvas noise output on a Windows fingerprint bench](/blog/blog-canvas-noise.png "Canvas is a product of GPU, driver, and ClearType. The local core sets the pixel output. The host font list sets the raster.")

## What we refuse to ship as coverage

We do not ship a mode that rerolls the seed until a public lab smiles. A seed is a decision to remain. Rerolling for a screenshot is the opposite of remaining.

We do not ship a mode that hides a driver from a site that forbade the work. [Automation ethics we follow](/blog/automation-ethics-we-follow) is the full statement. The short version is that the product opens rooms the operator already has a right to open.

We do not ship a mode that fakes a person. The seed changes the device story. It does not create a name, a history, or a payment instrument. Those are operator decisions made outside the folder.

## FAQ

**Does deep tell coverage mean the room will pass every public lab?**
No. It means the surfaces we control agree with each other and with the exit. Public labs also measure surfaces that belong to the binary or the exit, and those are not settable from JavaScript.

**Which surface is the most common source of a seam?**
Timezone and exit country. The clock on the wall and the clock the page reads have to agree. A comfortable clock in the wrong country is the room most operators lose first.

**Can the local core rewrite JA3 or JA4?**
No. The TLS Client Hello is built by the binary before page script runs. A JavaScript override cannot reach it. A patched core can, and that is a separate product decision.

**Should I reroll the seed if a lab page looks red?**
No. Read the field. If the field names a surface the local core covers, fix the story. If it names a surface that belongs to the binary or the exit, the fix is not on this desk.
