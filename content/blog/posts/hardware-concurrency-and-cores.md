---
slug: hardware-concurrency-and-cores
title: Hardware concurrency has to match the rest of the box
metaTitle: Hardware concurrency has to match the box
metaDescription: hardwareConcurrency has to agree with GPU and deviceMemory. Learn why a laptop core count on a desktop GPU story is a coherence tell, not a flex.
excerpt: hardwareConcurrency has to agree with GPU and deviceMemory. Learn why a laptop core count on a desktop GPU story is a coherence tell, not a flex.
author: Avery Chen
published: 2026-06-11
category: browser-fingerprinting
tags: fingerprinting, windows, hardwareconcurrency, fingerprint
readingTime: 4
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on hardware concurrency has to match the rest of the box beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, screen-resolution-coherence, client-hints-and-user-agent-data, timezone-language-and-proxy-country, user-agent-is-not-enough, battery-and-media-device-ids, client-rects-and-subpixels, seed-versus-random-fingerprints
---

`hardwareConcurrency` is a small integer. Sites still use it, because a laptop core count next to a workstation GPU is cheaper to catch than a canvas hash. The field is `navigator.hardwareConcurrency`. Next to it sits `deviceMemory`. Together they claim a class of PC. The GPU strings, the screen, and the battery have to sit in that class.

This is a coherence note. It is not a list of fashionable core counts to type into a form.

## What the integer means

Chromium reports a number of logical cores the page is allowed to see. It is not a CPU serial. Many boxes share 4, 8, 12, or 16. The value is still stable, and it is still checked against the rest of the story.

A 4 core claim next to a high-end renderer and 32 GB of `deviceMemory` sounds like two machines. A 32 core claim next to a 1366 pixel laptop screen sounds like two machines. [Screen metrics](/blog/screen-resolution-coherence) and GPU family are the usual partners.

We set both concurrency and device memory in the inject script. They live in the fingerprint schema. They should not reroll because you wanted a rarer integer. [A seed versus a new random](/blog/seed-versus-random-fingerprints) is the policy. Same profile, same class of box.

| Claim | Partner that has to agree | Cheap fork |
| --- | --- | --- |
| 4 cores | Low-end GPU, small `deviceMemory` | Workstation renderer |
| 8 or 12 cores | Mid-range desktop or laptop | Phone screen, or 32 GB plus a 1366 panel |
| 16+ cores | Workstation GPU and memory | Laptop battery discharging, tiny panel |

## deviceMemory is bucketed on purpose

`navigator.deviceMemory` is not a precise RAM reading. Chromium reports coarse buckets. That is enough to separate a 4 GB laptop story from a 32 GB tower story. If you set concurrency to 16 and memory to the lowest bucket, you wrote two PCs.

Workers can read the same fields. A window override that does not hold in a worker is a consistency check waiting to happen. I will not claim every worker realm is covered beyond what the inject applies on new documents. If a probe finds a realm we did not name, treat it as unknown.

Do not pick 1 or 2 on a desktop UA unless you have a reason that still agrees with GPU and screen. Do not pick 64 next to a 1366 panel. Boring mid-range counts exist on real Windows boxes. Use those.

## What the integer will not cover

It will not replace [the user agent](/blog/user-agent-is-not-enough). It will not replace [Client Hints](/blog/client-hints-and-user-agent-data). Architecture and platform still have to agree with a desktop Windows profile.

It will not fix [timezone versus exit](/blog/timezone-language-and-proxy-country). Cores do not move a clock.

It will not hide [battery or media device IDs](/blog/battery-and-media-device-ids). A charging laptop battery on a 32 core workstation story is still a story.

[Client rects](/blog/client-rects-and-subpixels) measure layout, not silicon. They should still stay put. They do not prove the core count.

## Desktop class only

MaskWright fingerprints are desktop families. There is no cloud phone and no Android core. A mobile-looking concurrency next to `mobile: false` hints is a contradiction. Keep the integer inside a PC you could have bought.

Max touch points live in the same schema and default to 0. A desktop tower with a phone-like touch count is the same collage as a laptop core count on a workstation GPU. Bluetooth adapter presence is another small bit we inject. A tower with no radio and a laptop core count is still one story if the rest agrees. A phone-like radio story on a desktop UA is not.

## Do not copy a lab favorite

Forums recycle 4 and 8 as if those integers were stealth. They are just common. A common count that disagrees with the GPU is worse than an uncommon count that agrees. I pick from the class of PC I already claimed, then I leave it alone.

If two authorized profiles sit on the same tower, they can share a count. That is the machine class. They should not share cookies. Cores are not isolation.

## How I pick a number

I pick a boring count that can exist with the GPU string, the memory field, and the screen. I keep it across launches. I do not chase uniqueness.

The parent definition is [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). The [Browser fingerprinting](/blog/browser-fingerprinting) cluster keeps this field on its own page because combo articles treat it as trivia. Trivia that disagrees is how profiles get caught.

## FAQ

**Is 8 cores more "stealth" than 12?**
No. Common is not stealth. Agreement with GPU and memory is the job.

**Should two profiles on one PC use different core counts?**
They can share a count. That is the machine class. They should not share cookies.

**Does this field replace the user agent?**
No. Architecture, platform, and hints still have to agree.
