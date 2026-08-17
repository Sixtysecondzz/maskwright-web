---
slug: battery-and-media-device-ids
title: Battery status and media device IDs
metaTitle: Battery status and media device IDs
metaDescription: Battery status and media device IDs are easy to forget and easy to leak. See what the product implements, and why a laptop battery on a desktop story fails.
excerpt: Battery status and media device IDs are easy to forget and easy to leak. See what the product implements, and why a laptop battery on a desktop story fails.
author: Avery Chen
published: 2026-05-21
category: browser-fingerprinting
tags: fingerprinting, windows, battery, api
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on battery status and media device IDs beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, seed-versus-random-fingerprints, timezone-language-and-proxy-country, fingerprint-stability-across-launches, screen-resolution-coherence, how-we-read-browserleaks, hardware-concurrency-and-cores, creepjs-consistency-checks
---

Battery status and media device IDs sit in APIs operators forget. A charging laptop on a tower GPU story is still a story. `navigator.getBattery` reports charging, level, and times. `navigator.mediaDevices.enumerateDevices` reports `deviceId` and `groupId` for mics, cameras, and speakers. Both are easy to leave on the host. Both are easy to contradict.

I am writing the two surfaces together because they fail the same way: leftover host truth next to a curated desktop claim.

## Battery as a class tell

A desktop tower that is always plugged in should look like a desktop. Our inject presents a plugged-in `BatteryManager`. That is the product fact. It matches a desktop family. It does not match a phone that drains, and it does not match a laptop that sits at 64 percent and discharging.

If [screen metrics](/blog/screen-resolution-coherence) say a 27 inch panel and [hardwareConcurrency](/blog/hardware-concurrency-and-cores) says a workstation, a discharging battery is the leftover laptop. Consistency checkers notice. [CreepJS consistency checks](/blog/creepjs-consistency-checks) are useful for that kind of disagreement. They are not a scoreboard.

| Field | Desktop story we present | Cheap leftover |
| --- | --- | --- |
| `charging` | True, plugged in | False on a tower GPU claim |
| `level` | Full / not draining | 64 percent and falling |
| `dischargingTime` | Not a laptop-on-a-train number | A finite drain next to a 27 inch panel |

## Media IDs as a stable label

Device IDs are hashes, not friendly names you chose. Sites use them to recognize the same mic across visits. If the IDs change every launch while the rest of the profile stays put, you look like new hardware on an old person. If they never change when you meant a new person, you reused a label.

We inject stable hashed IDs from `mediaDevices.seed`. The seed belongs to the profile. [A seed versus a new random](/blog/seed-versus-random-fingerprints) is the policy. [Stability across launches](/blog/fingerprint-stability-across-launches) is the test: quit, reopen, same IDs.

We do not claim a virtual camera stack. We do not claim the host has no real devices. The page sees the IDs we applied. Permission prompts are a separate inject.

## Labels versus IDs

`enumerateDevices` can return a label after permission. The label is a friendly name. The `deviceId` and `groupId` are the stable handles. Sites that only want a fingerprint do not need the label. They need the IDs to repeat.

A groupId ties a mic and a speaker that belong together. If those groups reshuffle every launch, the hardware story moved. If you clone a profile stencil and reuse the same media seed, two profiles share a hardware label. That may be what you meant for a stencil. It is not what you meant for two different people.

## Permission state is a third witness

`navigator.permissions` for notifications is in our inject. Camera and mic permission still change what `enumerateDevices` returns. A profile that never asked, then suddenly shows labels, changed state. I do not treat that as a new PC. I treat it as a permission bit that moved.

Keep media seeds with the profile so IDs do not move when permission does. Labels can appear. Handles should not reshuffle.

The Network Information API is another forgotten object we patch. A 4G connection type on a desktop Ethernet story is the same class of leftover as a discharging battery. I do not give it a slug. I still expect it to sit in the desktop claim. Do Not Track is in the schema too. It is not a battery field. It still should not flip between launches if the profile is the same person.

## What these APIs are not

They are not [timezone alignment](/blog/timezone-language-and-proxy-country). A plugged-in battery will not fix a clock that ignored the exit.

They are not a lab trophy. [How we read BrowserLeaks](/blog/how-we-read-browserleaks) is how to look at a panel, not how to paint it green.

## How I check the pair

I ask whether battery looks like the desktop I claimed. I ask whether media IDs stayed put for this seed. I ask whether a new profile got a new seed instead of a copy of last week's hashes.

The parent bundle is [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). The [Browser fingerprinting](/blog/browser-fingerprinting) cluster keeps these APIs on one page because neither one got a note in the crawls, and both leak when you only curate canvas.

## FAQ

**Does MaskWright virtualize my webcam?**
No. We inject stable hashed IDs. We do not claim a virtual camera stack.

**Should media IDs change every launch?**
No. Same seed, same IDs. A new person gets a new profile and a new seed.

**Can a plugged-in battery fix a bad timezone?**
No. Those are different fields.
