---
slug: webgl-renderer-strings
title: WebGL vendor and renderer strings
metaTitle: WebGL vendor and renderer strings
metaDescription: WebGL vendor and renderer strings have to agree with the rest of the box. Keep this surface separate from canvas, and treat mismatch as a coherence problem.
excerpt: WebGL vendor and renderer strings have to agree with the rest of the box. Keep this surface separate from canvas, and treat mismatch as a coherence problem.
author: Avery Chen
published: 2026-07-22
category: browser-fingerprinting
tags: fingerprinting, windows, webgl, fingerprint
readingTime: 6
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on WebGL vendor and renderer strings beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: webgpu-and-new-fingerprint-surfaces, gpu-renderer-must-match-the-ua, custom-chromium-versus-system-chrome, canvas-fingerprinting-on-windows, webrtc-ip-leaks, what-is-device-fingerprinting, webrtc-modes-disabled-proxy-public-real, what-is-browser-fingerprinting
---

WebGL does not fingerprint the pixels you see. It fingerprints the strings and parameters the GPU stack is willing to admit. `UNMASKED_VENDOR_WEBGL` and `UNMASKED_RENDERER_WEBGL` are the famous pair. The rest of the parameter table still has to sound like the same card.

I am keeping this note off canvas on purpose. [Canvas fingerprinting on a real Windows box](/blog/canvas-fingerprinting-on-windows) is paint. This page is identity strings. Combo articles hide the mismatch.

## What the page reads

A script gets a WebGL context, asks for `WEBGL_debug_renderer_info`, and dumps `getParameter` values. Vendor, renderer, version, shading language, max texture size, and a pile of limits come back. The site stores the bundle.

On a normal Windows Chrome those strings describe ANGLE and the real GPU. They should sound like a PC that also reports this user agent, this core count, and this OS family. A Mac renderer next to a Windows UA is a cheap catch. A mobile GPU next to a desktop screen is the same catch.

That agreement is the work. [The GPU renderer has to match the user agent](/blog/gpu-renderer-must-match-the-ua) is the sibling that stays on that pairing. Here I want the surface itself named.

| Field | Typical Windows Chrome story | Cheap mismatch |
| --- | --- | --- |
| Vendor | ANGLE / Google Inc. style label | Apple or mobile vendor on a Windows UA |
| Renderer | D3D11 plus a real adapter name | Metal, or a phone GPU on a desktop screen |
| Limits | Texture size and attribs that fit the card | Workstation renderer with mobile-class limits |

## Strings are not a board serial

A renderer string is not [device fingerprinting](/blog/what-is-device-fingerprinting). It does not quote a PCI serial. Many boxes share a family string. Sites still use it because it is stable and because it is hard to lie about in isolation.

If you change only the user agent, WebGL will still tell the truth. If you change only the renderer and leave Client Hints on the old story, the page has two witnesses.

## How we apply the surface

The fingerprint schema holds WebGL vendor, renderer, and a parameter table. At launch the inject script overrides `WEBGL_debug_renderer_info` and the named parameters. When the custom Chromium core is present, launch can also pass `MASKWRIGHT_GL_VENDOR` and related env into the patched binary. That is a deeper tell than JavaScript alone.

When the core is missing, the app falls back to system Chrome or Edge and the inject still runs. [Custom Chromium versus system Chrome](/blog/custom-chromium-versus-system-chrome) is the honest split. Do not describe a fallback launch as a patched GL stack.

We do not have published lab scores for how far the inject survives every Chromium minor. I will not invent them.

## ANGLE is the Windows middle layer

Stock Chromium on Windows speaks to the GPU through ANGLE. The vendor string you see is often Google Inc. or a similar ANGLE label, and the renderer names D3D11 plus the real adapter. That pair is a Windows story. A renderer that names Metal or a Mac GPU family next to a Windows UA is the cheap catch.

MaskWright launch on win32 can pass `--use-angle=d3d11` for Chromium. That is a host fact. The inject still has to present vendor, renderer, and the parameter table as one card. Max texture size, max vertex attribs, and the rest of `getParameter` should sound like that card.

`WEBGL_debug_renderer_info` is an extension. Some pages also read the ordinary `VENDOR` and `RENDERER` parameters. The inject overrides the debug extension and the named params. If a page finds a path we did not list, treat it as unknown.

## WebGPU is the next door

[WebGPU adapter info](/blog/webgpu-and-new-fingerprint-surfaces) is a newer surface on `navigator.gpu`. Older checklists skip it. A WebGL string that you curated and a WebGPU adapter that you forgot is another disagreement. Treat them as a pair even though the APIs are not the same.

## What WebGL is not

It is not a [WebRTC leak](/blog/webrtc-ip-leaks). GL strings do not carry ICE candidates. [WebRTC modes](/blog/webrtc-modes-disabled-proxy-public-real) do not fix a renderer mismatch.

It is not a uniqueness contest. A common Intel renderer on Windows is still a coherent story. A rare string that cannot exist on the UA you claimed is a worse story.

## How I read a mismatch

When a panel shows a vendor I did not expect, I do not reroll the whole profile. I ask whether the UA, platform, Client Hints, and core count still describe the same class of PC. If they do not, the renderer is not the only lie.

The definition of the whole bundle sits in [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). The [Browser fingerprinting](/blog/browser-fingerprinting) cluster keeps WebGL on its own page so canvas and GL stop stealing each other's outline.

## FAQ

**Is a WebGL string unique to my GPU?**
Usually no. Many PCs share a family string. Sites use it because it is stable and because it should agree with the UA.

**Does the inject rewrite the real driver?**
No. The inject overrides what JavaScript reads. A patched core can go deeper via env vars. System Chrome or Edge fallback is inject only.

**Will a quiet WebRTC mode fix a bad renderer?**
No. Those are different doors. Addresses are not GL strings.
