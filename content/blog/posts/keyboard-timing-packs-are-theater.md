---
slug: keyboard-timing-packs-are-theater
title: Keyboard timing packs are theater
metaTitle: Keyboard timing packs are theater on this automation desk
metaDescription: Keyboard timing packs are theater. They sell warmup curves. We refuse. If the job needs a human, sit at the desk. If it needs a bot, use a bot door.
excerpt: Keyboard timing packs are theater. They sell warmup curves. We refuse. If the job needs a human, sit at the desk. If it needs a bot, use a bot door.
author: Morgan Ellis
published: 2026-07-09
category: automation
tags: automation, ethics, human, typing
readingTime: 4
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on keyboard timing packs are theater beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: browser-automation-vs-a-real-profile, batch-launch-is-not-a-farm, debugging-ports-and-operator-risk, automation-ethics-we-follow, official-apis-versus-ui-bots, captcha-solvers-are-not-research, window-sync-and-rpa-we-will-not-ship, local-scripts-outside-work-rooms
---

The warmup industry sells curves. Delay between keys. A pause on the third character. A mouse path that sags as if a wrist got tired. The pitch is that a site will mistake the curve for a person. That is theater.

I will not publish a better curve. I will not compare vendors. If the job needs a human, sit at the desk. If the job needs a bot, use a door that allows bots.

## What a timing pack is pretending to fix

A driver issues events in a tight loop. Sites that dislike drivers look at cadence as one signal among many. A pack inserts sleeps and jitter so the cadence looks less like a loop.

The rest of the process is still a driver. The cookie store is still being used by a script. The intent is still to pass as something you are not.

That is the same family as stealth plugins and headed disguises. The parent split is [browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile). Official doors are [official APIs versus UI bots](/blog/official-apis-versus-ui-bots).

## Why I call it theater

A person is not a random sleep. A person looks at the screen. A person stops to read. A person gets a phone call. You cannot package that as a JSON profile of milliseconds and ship it as identity.

The pack also trains the wrong habit. Operators start to believe the login is safe because the key-up delay was 87 milliseconds instead of 12. Safety, here, is authorization and isolation. Not jitter.

A person who is allowed to be in the profile does not need a curve. They need a chair, a named profile, and time. A machine that is allowed to talk to a host does not need a curve either. It needs a key and a changelog.

Captcha farms sit in the same catalog. [Captcha solvers are not research](/blog/captcha-solvers-are-not-research). If the page asked a person a question, a purchased answer is not research.

| Work | What it needs | Timing pack |
| --- | --- | --- |
| Official API pull | Key, changelog, wait on limits | Unnecessary |
| Person in an ads profile | Eyes, time | Unnecessary |
| Test on a host you own | Stock driver, test user | Unnecessary |
| Login the site forbade you to automate | A different job | Theater |

## What 0.1 does not ship

MaskWright 0.1 has no humanize layer. We will not add one. We will not ship RPA that replays a recorded path with "natural" delays. [Window sync and RPA we will not ship](/blog/window-sync-and-rpa-we-will-not-ship).

We will not expose a debug port so an external warmup host can type into a work profile. [Remote debugging ports and operator risk](/blog/debugging-ports-and-operator-risk). Scripts stay outside those profiles. [Local scripts stay outside work rooms](/blog/local-scripts-outside-work-rooms).

Batch start opens windows. It does not type. [Batch launch is not a farm](/blog/batch-launch-is-not-a-farm).

## Cadence is one signal among many

Even if a curve fooled a naive timer, the rest of the session would still be a driver. Flags, headless leftovers, debug ports, and bursty navigation sit next to the key events. Buying a better delay does not retire those. It only spends money on the least interesting column.

Warmup-as-a-service adds a second problem. A vendor that types into your login on their schedule can see the login. That is custody, not craft.

## What to do instead

Allowed machine work: call the API, or run a stock driver against a host you own, with a test identity, without a disguise. The driver can be as fast as the host allows. You do not owe the host a fake wrist.

Allowed human work: open the isolated profile, do the task, close the profile. If the task is long, take a break. That break is not a product feature.

If a step only works after you buy jitter, the step was not meant for a script. If a vendor will not sell the tool without a humanize toggle, the tool is the problem.

The policy voice is [automation ethics we follow](/blog/automation-ethics-we-follow). The short version is the title. Timing packs are theater. More of the same line lives under [Automation](/blog/automation).

## FAQ

### Do real people type at a measurable cadence you could copy?

People vary too much, and cadence is not the only signal. Copying a delay table does not make a driver into a person.

### Is MaskWright going to add "human typing"?

No. 0.1 launches profiles. It does not type into them.
