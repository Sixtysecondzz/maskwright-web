---
slug: webgpu-and-new-fingerprint-surfaces
title: WebGPU as a new fingerprint surface
metaTitle: WebGPU as a new fingerprint surface
metaDescription: WebGPU adds adapter info that older fingerprint lists skip. See what navigator.gpu can expose on Windows and why it belongs in a modern surface inventory.
excerpt: WebGPU adds adapter info that older fingerprint lists skip. See what navigator.gpu can expose on Windows and why it belongs in a modern surface inventory.
author: Avery Chen
published: 2026-07-25
category: browser-fingerprinting
tags: fingerprinting, windows, webgpu, fingerprint
readingTime: 4
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on WebGPU as a new fingerprint surface beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: webrtc-ip-leaks, webgl-renderer-strings, webrtc-modes-disabled-proxy-public-real, canvas-fingerprinting-on-windows, audio-context-fingerprint, what-is-device-fingerprinting, font-enumeration-on-windows, what-is-browser-fingerprinting
---

WebGPU showed up after most fingerprint checklists were written. The adapter info on `navigator.gpu` is already a surface a page can read. If your inventory still ends at canvas and WebGL, you are reading a 2023 list on a 2026 engine.

This note is the missing row. It is not a shader tutorial and it is not a claim that every site queries WebGPU today.

## What the page can ask

`navigator.gpu` hands back an adapter. From there a script can request adapter info: vendor, architecture, device, description. Those fields are meant for developers who need to know which GPU they got. They are also a stable label.

On Windows the label should sound like the same PC that already answered [WebGL vendor and renderer strings](/blog/webgl-renderer-strings). If WebGL says one stack and WebGPU says another, the page has a consistency check that older labs never drew.

This is still a browser API. It is not [device fingerprinting](/blog/what-is-device-fingerprinting) in the serial-number sense. It is also not [canvas paint](/blog/canvas-fingerprinting-on-windows). Different door, same building.

| API | What you get | Common miss |
| --- | --- | --- |
| WebGL | Vendor, renderer, parameter table | Curated, then forgotten when WebGPU shipped |
| WebGPU | Adapter vendor, architecture, device, description | Left on the real adapter |
| Canvas 2D | Paint hash | Treated as the whole GPU story |

## Why older lists skip it

Crawl-era articles stopped at the APIs that were loud in 2021. AudioContext, canvas, and WebGL filled those pages. WebGPU shipped later in Chromium. Operator blogs did not rewrite the inventory. Sites that write their own probes are not required to wait for those blogs.

A modern surface list has to include the new door even if your favorite lab page has not added a panel yet. The [Browser fingerprinting](/blog/browser-fingerprinting) cluster exists to keep that inventory current.

## What we implement

The fingerprint schema includes a `webgpu` block. The inject script applies adapter info from that block onto `navigator.gpu`. That is the whole claim. We override the info the page can read. We do not claim a custom WGSL compiler, and we do not publish pass rates against any commercial stack.

If the custom Chromium 131 core is missing, launch still applies the inject on system Chrome or Edge. The adapter override is JavaScript-level in that path. Do not describe it as a rewritten GPU driver.

## Adapter info is a label, not a shader dump

`navigator.gpu.requestAdapter()` is the usual entry. From the adapter, `requestAdapterInfo()` (or the current equivalent on that Chromium) returns vendor, architecture, device, and description. Those strings are meant so a web app can pick a path. They are also stable enough to store.

A site does not need to compile a compute shader to use this surface. The info call is enough. That is why I refuse to treat WebGPU as a future problem. If the engine exposes the adapter, the inventory includes the adapter.

On Windows the honest host path is often D3D12 under Chromium. The label you present still has to sit next to WebGL's ANGLE and D3D11 story, the desktop UA, and `mobile: false`. We apply adapter info from `fingerprint.webgpu`. We do not claim we rewrote the WebGPU implementation in the core.

If `navigator.gpu` is missing on a build, a page that expects it on Chrome 131 will notice. Our target Chromium version is 131.0.6778.85 when the custom core is installed. A fallback to an older system Edge can drop the API. That mismatch is a version tell, not a GPU serial.

## Feature detection is part of the fingerprint

A page can ask whether `navigator.gpu` exists before it asks for info. Presence is a bit. Chrome 131 on Windows should have the bit. A profile that claims 131 and lacks the object is a version lie. A profile that has the object and returns empty info is a half-applied override.

I treat presence, adapter info, and WebGL strings as one GPU chapter. I do not treat a successful `requestAdapter()` as proof the profile is fine. The adapter still has to name a stack that can sit on this UA.

## Neighboring surfaces people confuse with WebGPU

[AudioContext](/blog/audio-context-fingerprint) is a silent graph. [Font enumeration](/blog/font-enumeration-on-windows) is a catalog. [WebRTC](/blog/webrtc-ip-leaks) is ICE candidates. [WebRTC modes](/blog/webrtc-modes-disabled-proxy-public-real) are policies for those candidates. None of them replace adapter info.

If you only patched GL strings and left `navigator.gpu` on the real adapter, you left a witness. That is the reason this page exists as its own slug.

## How I treat the surface

I expect WebGPU to agree with WebGL, with the user agent family, and with the idea that this is a desktop Windows profile. MaskWright profiles are desktop only. Client Hints mark mobile false. A phone GPU story on this host is a contradiction.

For the bundle these fields sit inside, read [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). WebGPU is the row the old lists forgot. Put it on the list. Then leave it stable.

## FAQ

**Do I need to compile a shader for this to matter?**
No. Adapter info is enough. Presence of `navigator.gpu` is already a bit.

**Is this a device serial?**
No. It is a family label, same class as WebGL strings.

**Does the inject rewrite the WebGPU implementation?**
No. It applies adapter info from the fingerprint schema. JavaScript-level info is the demonstrated fact.
