---
slug: canvas-fingerprinting-on-windows
title: Canvas fingerprinting on a real Windows box
metaTitle: Canvas fingerprinting on a Windows box
metaDescription: Canvas output is a stable tell on real Windows ClearType. This page explains the surface and seeded noise, not a walkthrough to a green lab badge.
excerpt: Canvas output is a stable tell on real Windows ClearType. This page explains the surface and seeded noise, not a walkthrough to a green lab badge.
author: Avery Chen
published: 2026-05-23
category: browser-fingerprinting
tags: fingerprinting, windows, canvas
readingTime: 6
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on canvas fingerprinting on a real Windows box beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: webgl-renderer-strings, font-enumeration-on-windows, how-we-read-browserleaks, what-is-device-fingerprinting, webgpu-and-new-fingerprint-surfaces, what-is-browser-fingerprinting, webrtc-ip-leaks, fingerprint-spoofing-versus-tracking-prevention
---

Canvas fingerprinting is not a screenshot of your desktop. It is a hash of how this Windows box paints text and shapes into a 2D context. ClearType, the GPU, installed faces, and the exact raster path all land in the pixels. Two towers that look identical on a spec sheet can still disagree.

I am writing the surface, not a pass-the-lab script. [How we read BrowserLeaks](/blog/how-we-read-browserleaks) is the place to look at a panel. This page stays on why the hash exists and why noise has to be stable.

## What the page actually calls

A script creates a canvas, draws a pangram, maybe a gradient or an emoji, then calls `toDataURL` or `toBlob`. The result is a compressed image. The site hashes that image. The hash is the fingerprint.

The draw is sensitive because Windows does not paint like a textbook. DirectWrite, ClearType tuning, hinting, and the GPU path change coverage on the edges of glyphs. Subpixel antialiasing is enough. You do not need a unique wallpaper.

This is still a browser surface. It is not [device fingerprinting](/blog/what-is-device-fingerprinting). No disk serial is in the PNG.

| Method | What the site hashes | Why wrapping one is not enough |
| --- | --- | --- |
| `toDataURL` | A compressed data URL | Common demo path |
| `toBlob` | The blob bytes | Same paint, different exit |
| `getImageData` | Raw pixels, no compression | A third witness if left on the host |

Our inject covers `toDataURL` and `toBlob`. That is the product fact. I will not claim every read path in Chromium is wrapped. If a probe uses a path we did not name, treat it as unknown.

## Why Windows makes a stable hash

The same profile on the same box should hash the same way tomorrow. Sites rely on that. If your hash jumps every reload while the user agent and GPU stay put, you look like a liar, not like a new PC.

That is why we do not reroll canvas for a prettier screenshot. The inject path wraps `toDataURL` and `toBlob` with OS-biased stable noise. The bias matters. A Windows raster that suddenly looks like a macOS raster is a coherence tell. Noise that stays put across launches is a seed. Noise that changes is a new person.

![Canvas noise on a Windows workstation](/blog/blog-canvas-noise.png "Stable, OS-biased noise keeps the hash in one Windows story instead of a new random every reload.")

## Canvas is not WebGL

Operators mash the two words because both touch the GPU. They are different APIs.

Canvas 2D is paint. WebGL is a GL context with vendor and renderer strings and a parameter table. [WebGL vendor and renderer strings](/blog/webgl-renderer-strings) have to agree with the OS and the user agent. [WebGPU](/blog/webgpu-and-new-fingerprint-surfaces) is a third door. A canvas hash that matches a machine family can still sit next to a renderer string from the wrong family. That disagreement is the tell.

Keep the notes separate. A combo page hides the mismatch.

## Fonts leak into the paint

You cannot talk about canvas on Windows without fonts. The faces you enumerate and the faces you draw are related. [Font enumeration](/blog/font-enumeration-on-windows) is the list. Canvas is the raster of a string you chose to draw.

An allowlist that hides a face in `document.fonts.check` but still draws it in canvas is another contradiction. DirectWrite raster is only partly in our hands, and only when the custom Chromium core is present with a font list. The inject path can constrain probes. It does not rewrite every glyph the GPU already knows.

Emoji and mixed scripts make the hash louder because they pull extra faces. A Latin pangram is the common demo. A string that forces Segoe UI Emoji is closer to what a real page can do.

## ClearType is why two Windows boxes disagree

ClearType tuning, gamma, and the GPU path change coverage on glyph edges. A laptop on a 125 percent scale is not the same raster as a tower at 100 percent. The CSS pixel size can match and the PNG will not. That is why a copied hash from another operator's screenshot is a bad gift. You did not copy their GPU.

OS-biased noise exists so the result still looks like a Windows raster after the offset. A hash that suddenly looks like a macOS capture next to a Windows UA is the coherence failure I care about more than rarity. Uniqueness is overrated. Many Windows boxes share a family.

This is not [tracking prevention](/blog/fingerprint-spoofing-versus-tracking-prevention). Blocking canvas is a reduce-signal move. We present a coherent Windows paint. It is also not a WebRTC problem. [A WebRTC leak](/blog/webrtc-ip-leaks) is an IP candidate. We have no published lab scores.

## How I use the surface

When I open a profile I ask three canvas questions. Does this hash stay put after I quit. Does the paint still look like Windows. Does it agree with fonts and GPU strings in the same profile.

If you need the wider definition, start at [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). The [Browser fingerprinting](/blog/browser-fingerprinting) notes take the neighboring APIs one at a time. Canvas is the one operators screenshot. It is not the only one that has to stay still.

## FAQ

**Is canvas the same as WebGL?**
No. Canvas is 2D paint. WebGL is vendor and renderer strings plus a parameter table. They can disagree even when both touch the GPU.

**Should I randomize the hash every launch?**
No. A hash that moves while UA and GPU stay put looks broken. Seeded, OS-biased noise is the policy.

**Does wrapping toDataURL cover everything?**
No. We also wrap `toBlob`. Treat unnamed paths such as `getImageData` as unknown.

**Can I copy someone else's canvas hash?**
No. The number is this GPU, these fonts, and this seed.
