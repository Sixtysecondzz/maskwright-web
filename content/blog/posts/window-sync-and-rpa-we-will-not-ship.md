---
slug: window-sync-and-rpa-we-will-not-ship
title: Window sync and RPA we will not ship
metaTitle: Window sync and RPA we will not ship
metaDescription: Cloud-phone vendors sell window sync and RPA. We will not ship either. This refusal page is product honesty, not a missing-feature apology. One PC, many rooms.
excerpt: Cloud-phone vendors sell window sync and RPA. We will not ship either. This refusal page is product honesty, not a missing-feature apology. One PC, many rooms.
author: Morgan Ellis
published: 2026-08-12
category: automation
tags: automation, ethics, antidetect, rpa
readingTime: 6
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on window sync and RPA we will not ship beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: browser-automation-vs-a-real-profile, official-apis-versus-ui-bots, ai-agents-in-a-browser-they-do-not-own, debugging-ports-and-operator-risk, headed-vs-headless-detection, keyboard-timing-packs-are-theater, playwright-vs-puppeteer-vs-selenium, batch-launch-is-not-a-farm
---

Cloud-phone catalogs lead with two features we are asked to copy. Window sync: many screens follow one click. RPA: a recorded flow repeats across those screens. We will not ship either. This is not a 0.2 teaser. It is a boundary.

MaskWright 0.1 launches and isolates profiles on Windows. An operator can start a batch of profiles they already use. That is convenience. It is not a fleet and it is not a robot.

## What those features are for in the catalogs

Window sync exists so one person can operate many logins as if they were one body. The marketing is efficiency. The usual target is a set of accounts that should not share a body.

RPA exists so the set keeps moving when the person stands up. Record a path. Replay it. Add a timing pack so the replay looks tired. That last part is [keyboard timing packs are theater](/blog/keyboard-timing-packs-are-theater).

Together they turn a profile tool into a puppet. We build isolated windows. We do not build puppets. A cloud-phone landing page can call that missing pair a gap. On this desk it is the product. One PC, many profiles, one pair of hands per window.

## Why the empty cell is product, not lag

A local antidetect browser has one honest job: keep cookie stores from mixing on one PC. The moment we add a control plane that clicks every profile at once, we are in the driver business. Drivers already exist. [Playwright versus Puppeteer versus Selenium](/blog/playwright-vs-puppeteer-vs-selenium) is how you pick one for work you are allowed to automate.

If the work is allowed, use that official client on hosts you own. [Official APIs versus UI bots](/blog/official-apis-versus-ui-bots). If the work is a set of brand logins, a person opens the profile that belongs to that brand. No replay.

Shipping RPA into work profiles would also invite the exact abuse this blog skips: unofficial social bots, inbox machines, and collectors wearing a fingerprint. We will not put that switch in the UI and then write a terms footnote.

## Batch start is the feature people confuse with this

The app can start and stop several selected profiles in a loop. That opens windows. It does not type. It does not keep them in lockstep. [Batch launch is not a farm](/blog/batch-launch-is-not-a-farm) is the how-to for that toolbar.

If you need five authorized ads profiles open for the morning, batch start is the tool. If you need five windows to follow one mouse, you are asking for window sync, and the answer is no.

| Feature | What it does | In MaskWright 0.1 |
| --- | --- | --- |
| Bulk start / stop | Opens or closes selected profiles | Yes, sequential loop |
| Window sync | One click drives many windows | No |
| RPA recorder | Replay a path across profiles | No |
| Playwright export | Script handle into a live profile | No |

## Cloud phones are a different machine

The vendors who sell sync and RPA often sell a rented Android in the same breath. We do not ship cloud phones. Desktop profiles only. A rented phone plus a replay engine is a hosted identity. You do not hold the disk.

An agent that drives a browser you do not own is the same custody problem with a newer label. [AI agents in a browser they do not own](/blog/ai-agents-in-a-browser-they-do-not-own).

## Headed replay is still replay

A visible window that a script controls is not an operator. [Headed versus headless detection](/blog/headed-vs-headless-detection). Exposing a debugging port so an external RPA host can attach is an operator risk, not a roadmap item. [Remote debugging ports and operator risk](/blog/debugging-ports-and-operator-risk).

The architectural essay remains [browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile). We stay on the profile side.

## What 0.1 will keep doing

Isolated Chromium or Firefox profiles on the operator PC. Local index, no team-seat control plane. Bring your own proxy. Bulk start and stop. No Playwright export, no RPA host, no sync grid.

If that list feels small next to a cloud-phone landing page, it is supposed to. I would rather be a launcher you can explain than a robot you have to hide. [Compare local versus cloud](/compare) if you are shopping the matrix. The empty RPA cell is on purpose.

More of this cluster lives under [Automation](/blog/automation). This note is the one we point at when a competitor matrix says "RPA" and a cell on our side is empty.

## FAQ

### Is bulk start the same as window sync?

No. Bulk start opens windows. You still type in each one. Sync would pipe one mouse into many sessions. That is the feature we skipped.

### Will you add RPA if enough people ask?

Not in 0.1, and not as a way to replay work logins. If you need a robot, use an official driver on a host you own, outside this app.
