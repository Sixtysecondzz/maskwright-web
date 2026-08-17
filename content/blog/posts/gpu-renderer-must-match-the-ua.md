---
slug: gpu-renderer-must-match-the-ua
title: GPU renderer has to match the user agent
metaTitle: GPU renderer has to match the user agent
metaDescription: A mobile GPU string on a desktop UA is a tell. This page is about renderer and user-agent coherence, not a catalog of every fingerprint surface.
excerpt: A mobile GPU string on a desktop UA is a tell. This page is about renderer and user-agent coherence, not a catalog of every fingerprint surface.
author: Avery Chen
published: 2026-06-11
category: browser-fingerprinting
tags: fingerprinting, windows, webgl, vendor
readingTime: 4
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on gPU renderer has to match the user agent beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, mobile-ua-on-a-desktop-profile, navigator-webdriver-and-automation-flags, macos-fingerprint-on-a-windows-host, ja3-ja4-tls-fingerprints, testing-a-fingerprint-before-work, what-is-an-ip-leak, new-fingerprint-same-folder
---

A GPU renderer string has to sound like the user agent you claimed. A mobile GPU on a desktop UA is a tell. A Mac renderer on a Windows UA is a tell. This page stays on that pairing. The full surface inventory lives elsewhere. WebGL parameter tables live on the renderer-strings sibling.

I am not going to publish a list of safe GPU names. Coherence is the job.

## Two witnesses, one box

The user agent (and `userAgentData`) is the caption. It names a browser family, a version, and an OS. The WebGL vendor and renderer are the hardware caption. A page asks `WEBGL_debug_renderer_info` and reads `UNMASKED_VENDOR_WEBGL` and `UNMASKED_RENDERER_WEBGL`. The rest of `getParameter` still has to sound like the same card.

On a normal Windows Chrome those strings describe ANGLE and a PC GPU. They should sound like a machine that also reports this UA, this core count, and this screen. If the caption says Windows desktop and the GPU says iPhone, the page has two witnesses that cannot both be true.

That is the cheap catch inside [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). Most operators get caught on disagreement, not on a rare hash.

The [Browser fingerprinting](/blog/browser-fingerprinting) cluster treats this pairing as a tell the buyer guides skipped. They list surfaces. They do not write the match.

![A grid of browser diagnostic panels on a Windows desk](/blog/blog-fingerprint-grid.png "Vendor and renderer are a hardware caption. They have to agree with the user agent, not with a lab wishlist.")

| Caption | Renderer that can sit with it | Cheap fork |
| --- | --- | --- |
| Windows Chrome desktop | ANGLE + D3D11 + a PC GPU | Metal, iPhone GPU, or a Mac family |
| Macintosh Chrome | An Apple GPU story | DirectX ANGLE on a Windows host |
| Android / iPhone | A mobile GPU and a phone screen | Desktop ANGLE next to a phone UA |

## The mismatches I actually see

A [mobile user agent on a desktop profile](/blog/mobile-ua-on-a-desktop-profile). The string says Android or iPhone. The renderer still says ANGLE and a desktop GPU, or the opposite: a mobile GPU string next to a desktop screen and `mobile: false` Client Hints. MaskWright presets are desktop families. There is no cloud phone.

A [macOS fingerprint on a Windows host](/blog/macos-fingerprint-on-a-windows-host). The UA says Macintosh. The renderer still says a DirectX ANGLE path, or the fonts still measure like DirectWrite. The host is Windows 10 or 11 x64. The public channel is that host.

A new UA on an old seed. [A new fingerprint in the same folder](/blog/new-fingerprint-same-folder) can change the caption and leave the GL table, the cookies, or both. The page then sees a new name on an old card.

A UA swap with no GL swap. Changing `navigator.userAgent` through an extension and leaving `WEBGL_debug_renderer_info` on the real GPU is the oldest cheap trick. The caption moved. The card did not.

## How we apply the pairing

The fingerprint schema holds WebGL vendor, renderer, and a getParameter table. The inject overrides `WEBGL_debug_renderer_info` and named parameters. When the custom Chromium 131 core is present, launch can also pass `MASKWRIGHT_GL_VENDOR` (and related env) into the patched process. When the core is missing, we fall back to system Chrome or Edge and the inject still runs. The fallback is not a patched GL stack. I will not market it as one.

User agent goes through CDP `Emulation.setUserAgentOverride`, a `--user-agent` flag, and an inject on `navigator.userAgent`. Client Hints go through `userAgentMetadata` and high-entropy inject values. The two sides are applied as one profile. They are still two APIs a page can compare.

WebGPU adapter info is a third witness. The inject can present `navigator.gpu` from the fingerprint. A WebGL story that ignores WebGPU is another fork on browsers that expose both.

## What matching the renderer will not do

It will not close [an IP leak](/blog/what-is-an-ip-leak). Addresses are paths.

It will not rewrite [JA3 or JA4](/blog/ja3-ja4-tls-fingerprints). The Client Hello belongs to the binary.

It will not retire [automation flags](/blog/navigator-webdriver-and-automation-flags). We set webdriver false. That is a different line.

It will not replace [testing the profile before work](/blog/testing-a-fingerprint-before-work). A matching pair is one row on a checklist. It is not a lab-pass recipe.

We have no published pass rates on commercial anti-bot stacks. I will not invent a renderer that "clears" a named vendor.

## The rule I want to hold still

Pick an OS family and a GPU family that can be true together. Apply both. Keep them still across launches. If you change the UA, change the renderer, the parameter table, and the Client Hints in the same decision. If you cannot tell a true story for a phone on this Windows host, do not put a phone caption on the profile.

A workstation GPU next to a laptop core count is the same class of fork. The page does not need a rare hash if the card and the CPU refuse to share a story. Coherence is cheaper than a unique string, and it is the only part of this pairing I will defend.

## FAQ

**Will you publish a list of safe GPU names?**
No. Coherence with the UA is the job, not a catalog.

**Does matching the renderer fix JA3?**
No. The Client Hello belongs to the binary.

**Can I put a phone GPU on a desktop UA?**
Not as a coherent story. This product is desktop profiles only.
