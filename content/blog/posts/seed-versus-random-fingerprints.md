---
slug: seed-versus-random-fingerprints
title: Seeded fingerprints versus a new random draw
metaTitle: Seeded fingerprints versus a new random draw
metaDescription: A stable seed is a repeated identity. A new random draw is a new person. This page explains the difference so you do not treat lab randomization as hygiene.
excerpt: A stable seed is a repeated identity. A new random draw is a new person. This page explains the difference so you do not treat lab randomization as hygiene.
author: Avery Chen
published: 2026-07-10
category: browser-fingerprinting
tags: fingerprinting, windows, fingerprint, seed
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on seeded fingerprints versus a new random draw beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, fingerprint-stability-across-launches, battery-and-media-device-ids, how-we-read-browserleaks, timezone-language-and-proxy-country, creepjs-consistency-checks, screen-resolution-coherence, pixelscan-consistency
---

A seed is a decision to be the same person tomorrow. A random draw is a decision to be someone else, including on the next lab refresh. Operator tools that reroll canvas for a screenshot are teaching the second decision and calling it hygiene. It is not hygiene. It is a new identity, or a broken one if the cookies stayed put.

I want the words still. Seeded means the noise comes back. Random means it does not.

## What we seed on purpose

Canvas noise is OS-biased and stable. Audio noise comes from `fp.audioNoise`. Client rects get a stable offset. Media device IDs are hashed from `mediaDevices.seed`. Those surfaces exist to be repeated. If they change while [screen metrics](/blog/screen-resolution-coherence), UA, and GPU stay put, [consistency checks](/blog/creepjs-consistency-checks) have something to point at.

The rest of the schema is also a seed in practice. Timezone after [exit alignment](/blog/timezone-language-and-proxy-country), hardware fields, and battery should not wander because you were bored.

| Decision | What you do | What the site sees |
| --- | --- | --- |
| Keep the seed | Same folder, same noise, same IDs | Same browser after quit |
| New person | New folder, new seed, new cookies | A different browser |
| Lab shuffle | Reroll canvas, keep cookies | New face on an old login |

## When a new draw is the honest move

A new authorized account is a new person. New folder. New seed. New cookies. Do not paint a new hash into last month's cookies and call it a refresh. The leftover session is a different failure. This page stays on the paint.

If the job changed and the old identity should retire, retire the profile. Do not randomize one surface and keep the rest.

## What randomization is for in other products

Some clouds reroll so a public checker looks different every click. That is a demo. [How we read BrowserLeaks](/blog/how-we-read-browserleaks) is a map, not a reason to shuffle. [Pixelscan consistency](/blog/pixelscan-consistency) is also not a verdict you earn by rolling the dice.

We do not publish lab scores. Randomizing until a row turns green is the trophy hunt I refuse.

## Stability is the other half

[A fingerprint that stays put across launches](/blog/fingerprint-stability-across-launches) is the operational test of a seed. Quit. Open the same folder. The measurements should match. If they do not, you do not have a seed. You have a bug or a reroll.

[Battery and media device IDs](/blog/battery-and-media-device-ids) are the surfaces people reroll by accident because they never stored a seed for them. Put them in the same decision.

## Cookies do not reroll with the paint

Cookies and localStorage live in the user-data directory. They are the login. A new canvas seed on that directory is a new face on an old session. Sites that bind a hash to a session will see the bind break. That is not cleanliness. That is a collage.

If you need a new person, create a new profile folder. Import nothing from the old cookies unless you meant to move that session. Stencil settings are not a live cookie dump.

Randomizing one surface is the worst version of a new draw. Canvas moves, audio stays, media IDs stay, UA stays. Consistency checks exist for that collage. Seed all of it or seed none of it.

## Labs reward shuffle. Work rewards memory.

A public checker looks exciting when the hash changes. A login looks broken when the hash changes. I write for the login. Authorized profiles need memory: the same paint, the same IDs, the same clock story after you quit.

If you want to see a new draw, open a new profile. Do not vandalize the one that already holds a session.

Plugins, voices, and Client Hints are seeds in practice even when we do not call them noise. If those lists reshuffle and canvas stays, you still drew a collage. Seed means the whole schema repeats, not only the hash people screenshot. If you clone a stencil, clone the settings, not a live session, and decide whether the new profile gets a new seed. Two folders with one seed are two cookie stores wearing one face. That can be a stencil. It is not two people.

## How I choose

Same authorized person: keep the seed. New authorized person: new seed and a new folder. Lab curiosity: read the panel, do not shuffle the profile you work in.

The parent definition is [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). The [Browser fingerprinting](/blog/browser-fingerprinting) cluster keeps seed versus random on its own page because competitor outlines treat shuffle as cleanliness.

## FAQ

**Is rerolling canvas hygiene?**
No. It is a new face, or a broken one if cookies stayed.

**When should I create a new seed?**
When the profile is supposed to be a different person. New folder, new seed, new cookies.

**Can two folders share one seed?**
Yes, as a stencil. That is one face on two cookie stores. It is not two people.
