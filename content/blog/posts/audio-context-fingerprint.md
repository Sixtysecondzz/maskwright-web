---
slug: audio-context-fingerprint
title: AudioContext fingerprints and why noise is seeded
metaTitle: AudioContext fingerprints and seeded noise
metaDescription: AudioContext fingerprints come from how the box renders audio. This note covers why noise is seeded for stability, not randomized for a lab screenshot.
excerpt: AudioContext fingerprints come from how the box renders audio. This note covers why noise is seeded for stability, not randomized for a lab screenshot.
author: Avery Chen
published: 2026-05-21
category: browser-fingerprinting
tags: fingerprinting, windows, audio
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on AudioContext fingerprints and why noise is seeded beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, font-enumeration-on-windows, webrtc-modes-disabled-proxy-public-real, client-rects-and-subpixels, webrtc-ip-leaks, user-agent-is-not-enough, webgpu-and-new-fingerprint-surfaces, client-hints-and-user-agent-data
---

AudioContext fingerprints come from math, not from a microphone. The box renders a silent graph, and the graph is stable enough to reuse. A script builds an `OfflineAudioContext` or reads an Analyser node, hashes the samples, and stores the number. No one listened to you. The oscillator still identified the stack.

I am writing this because operator blogs skip OfflineAudioContext and then randomize the hash for a screenshot. Random is a new person. A seed is the same person after you quit.

## What the probe actually does

The usual pattern is a short oscillator, a compressor or dynamics node, and a render. The output buffer is a list of floats. Hardware, drivers, and the browser's audio path nudge those floats. The nudge repeats on the same machine.

That repeat is the feature sites want. If your hash moves every launch while [Client Hints](/blog/client-hints-and-user-agent-data) and the user agent stay put, you invented a contradiction.

This is not [a WebRTC leak](/blog/webrtc-ip-leaks). AudioContext does not publish ICE candidates. [WebRTC modes](/blog/webrtc-modes-disabled-proxy-public-real) will not change the graph.

| Probe | What it hashes | Needs a mic |
| --- | --- | --- |
| `OfflineAudioContext` | A rendered buffer, no speakers | No |
| Live `AudioContext` + `AnalyserNode` | Frequency bins | No |
| `getUserMedia` | Actual input devices | Yes, and that is a different API |

## Why the noise is seeded

If you apply noise, the noise has to come back tomorrow. Our inject path adds seeded noise from `fp.audioNoise`. The seed lives with the profile. Close the window, open the profile, get the same graph.

A fresh random on every document is lab theater. It also fails the job of a profile that is supposed to be one authorized identity. The same rule applies to [client rects](/blog/client-rects-and-subpixels). Stable offset. Not a new jitter.

We do not publish how that hash looks on any named checker. The repo has no scores. I will not invent them.

## Offline render versus a live analyser

`OfflineAudioContext` renders a buffer without speakers. That is the quiet probe. A live `AudioContext` plus an `AnalyserNode` can hash frequency bins instead. Both are math on the audio path. Our inject seeds noise for OfflineAudioContext and Analyser. The seed is `fp.audioNoise`. I will not claim every node type in the Web Audio graph is covered. If a probe uses a path we did not name, treat it as unknown.

Sample rate and channel count belong to the same story. A 44100 Hz desktop path next to a mobile UA is another collage. We do not ship mobile profiles. Keep the graph inside a PC.

Copying someone else's audio hash is as useless as copying their canvas. The number is a function of this stack plus this seed. It is not a password you reuse across towers.

## Dynamics nodes are why the hash is sharp

The common probe runs an oscillator into a compressor or waveshaper, then renders. Those nodes amplify tiny differences in the audio path. That is why two Windows boxes can disagree, and why the same box repeats.

If you strip the dynamics node and only hash a sine, you get a weaker number. Sites that still use the compressor trick will not match your weaker number. I do not try to outguess their graph. I keep a seeded offset on the output we already wrap, and I leave the profile stable.

Speech synthesis voices are a neighbor, not a substitute. We inject locale-matched synthetic voices. That list should follow the language story. It does not replace the OfflineAudioContext hash. If you only curate voices and leave the oscillator on the host, you left the surface this page is about.

## What audio is not

It is not [font enumeration](/blog/font-enumeration-on-windows). It is not [WebGPU](/blog/webgpu-and-new-fingerprint-surfaces). It is not a user agent field. [Spoofing the UA](/blog/user-agent-is-not-enough) leaves the oscillator alone.

It is also not a microphone permission story. Offline render does not ask for `getUserMedia`. Operators who disable the mic and think the audio fingerprint died are reading the wrong API.

## How I treat the surface

I expect the audio hash to stay put across launches for the same seed. I expect it to sit next to a desktop Windows story, not a phone UA. I do not reroll it because a panel looked noisy.

The parent definition is [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). The [Browser fingerprinting](/blog/browser-fingerprinting) notes keep audio on its own page because canvas stole the outline for a decade. The silent graph is still there.

## FAQ

**Does muting the microphone stop this fingerprint?**
No. OfflineAudioContext never asks for a mic.

**Should I randomize the audio hash for a cleaner lab page?**
No. A moving hash next to a stable UA is a contradiction.

**Is speech synthesis the same surface?**
No. Voices should follow locale. They do not replace the oscillator hash.
