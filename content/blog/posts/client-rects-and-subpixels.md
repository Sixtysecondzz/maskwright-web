---
slug: client-rects-and-subpixels
title: Client rects and subpixel fingerprints
metaTitle: Client rects and subpixel fingerprints
metaDescription: getBoundingClientRect and subpixel layout leak a stable geometry. This page explains the surface and why MaskWright adds stable noise instead of a new random.
excerpt: getBoundingClientRect and subpixel layout leak a stable geometry. This page explains the surface and why MaskWright adds stable noise instead of a new random.
author: Avery Chen
published: 2026-05-26
category: browser-fingerprinting
tags: fingerprinting, windows, getclientrects, fingerprint
readingTime: 4
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on Client rects and subpixel fingerprints beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, user-agent-is-not-enough, font-enumeration-on-windows, client-hints-and-user-agent-data, audio-context-fingerprint, hardware-concurrency-and-cores, webrtc-modes-disabled-proxy-public-real, screen-resolution-coherence
---

Layout engines report boxes in subpixels. Those fractions stay stable on one machine and look wrong when they jump every reload. A page calls `getBoundingClientRect`, `getClientRects`, or the Range variants, hashes the floats, and keeps the geometry. You did not draw a canvas. You still handed over a measurement.

This surface barely exists in operator blogs. It exists in engines. I am writing it so the noise policy is named: stable, not random.

## What the floats contain

A rect is x, y, width, height, and the derived edges. Subpixel antialiasing, zoom, device pixel ratio, and font metrics nudge those floats. [Font enumeration](/blog/font-enumeration-on-windows) changes which face you measured. [Screen metrics](/blog/screen-resolution-coherence) change the viewport story. The rect is where those stories meet.

Two probes that disagree are enough. A span that measures like 11.3px on one launch and 12.0px on the next, with the same zoom and the same face, is not a new PC. It is jitter.

| API | What it returns | Why wrapping one is not enough |
| --- | --- | --- |
| `Element.getBoundingClientRect` | One box | The usual demo |
| `Element.getClientRects` | A list of boxes | Wrap and line-break cases |
| `Range.getBoundingClientRect` | Box of a text range | Probes skip the element API |
| `Range.getClientRects` | List for a range | Same forgot-to-wrap problem |

We apply a stable offset to all four. If a page finds another geometry API we did not name, treat it as unknown.

## Why we add stable noise

The inject path applies a stable offset to those methods. The offset is part of the profile. It should come back after you quit.

A new random on every call is worse than the raw engine. Sites that take two samples in one page will see the box crawl. Sites that compare visits will see a new geometry next to the same [user agent](/blog/user-agent-is-not-enough) and the same [Client Hints](/blog/client-hints-and-user-agent-data).

The same seed rule lives on [AudioContext](/blog/audio-context-fingerprint). Seeded noise is a repeated identity. Fresh noise is a new person, or a broken one.

## Range, zoom, and the second sample

Zoom and device pixel ratio change the floats. If you override screen metrics to a 1.25 ratio and leave rects on the host 1.0 path, the geometry will not match the monitor story. Keep the schema together.

A serious probe takes two samples. Same node, same tick, or same node after a rAF. Jitter between those samples is a stronger tell than a rare hash. That is the reason a fresh random on every call is worse than the raw engine. Stable noise can survive two samples. Theater cannot.

## Text nodes leak more than empty boxes

An empty `div` has a simple rect. A text node in a mixed font string has a rect that includes glyph metrics, baseline, and wrap. Probes prefer the text node because it is sharper. That is another reason fonts and rects belong in one head.

I do not try to invent a unique geometry. I try to keep the geometry still, and I try to keep it possible on the pixel ratio I claimed. A 1.25 ratio with integer-only rects is a collage.

Iframes can ask the same APIs. A wrap that only holds in the top document is a worker-style fork in layout clothes. The inject is applied on new documents. If a probe finds a frame we did not name, treat it as unknown. I still expect the seed to be the same offset, not a new random per frame. Two frames that disagree with each other are a consistency check, not a new monitor.

## What rects are not

They are not a WebRTC policy. [WebRTC modes](/blog/webrtc-modes-disabled-proxy-public-real) do not move a span. They are not a core count, though [hardwareConcurrency](/blog/hardware-concurrency-and-cores) should still describe the same class of box.

They are not a uniqueness trophy. Many Windows desktops share a family of fractions. Stability and agreement with screen and fonts are the useful properties.

## How I read a panel

If a lab shows client rects, I ask whether the floats stayed put across a relaunch. I ask whether they agree with the claimed pixel ratio and the allowlisted faces. I do not chase a rare geometry.

The parent definition is [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). The [Browser fingerprinting](/blog/browser-fingerprinting) hub is where this surface belongs: next to fonts and screen, not buried inside a canvas essay.

## FAQ

**Why not randomize rects every call?**
Because two samples on one page will see the box crawl. That is louder than a common geometry.

**Are Range APIs the same as element APIs?**
Same idea, different entry. Probes use Range to skip a wrap that only covers the element.

**Do WebRTC modes change layout floats?**
No. Those are address policies.
