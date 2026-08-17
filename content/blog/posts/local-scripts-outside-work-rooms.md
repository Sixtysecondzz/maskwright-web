---
slug: local-scripts-outside-work-rooms
title: Local scripts stay outside work rooms
metaTitle: Local scripts stay outside work rooms
metaDescription: Scripts stay outside work rooms. MaskWright is not an RPA host. This how-to keeps local automation off the cookies you use for real accounts.
excerpt: Scripts stay outside work rooms. MaskWright is not an RPA host. This how-to keeps local automation off the cookies you use for real accounts.
author: Morgan Ellis
published: 2026-07-16
category: automation
tags: automation, ethics, how-to, local, browser
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on local scripts stay outside work rooms beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: browser-automation-vs-a-real-profile, agent-browsers-versus-operator-profiles, captcha-solvers-are-not-research, mcp-is-not-a-local-profile, automation-ethics-we-follow, social-media-automation-tools-we-refuse, batch-launch-is-not-a-farm, linkedin-and-automation-tools-we-refuse
---

The how-to is shorter than the keyword suggests. If you write a script on this PC, it does not open a work profile. MaskWright is not an RPA host. 0.1 will not become one so a Node file can share cookies with Seller Central.

I keep a `scripts` folder and a set of named profiles. They do not meet.

## Why the folders have to stay apart

A work profile holds cookies, localStorage, and a fingerprint you intend to reuse tomorrow. A script wants a disposable browser, a log, and a clean exit. When you point the script at the work folder you turn the login into a fixture. One bad selector can click a payout tab. One leftover debug port can let a second process in.

The architecture is [browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile). The policy is [automation ethics we follow](/blog/automation-ethics-we-follow).

## What "outside" means on Windows

Outside means a different directory than the profile store. MaskWright keeps profiles under the app data root. Your repo, your virtualenv, your Playwright cache: somewhere else.

Outside also means a different process story. The script launches its own browser or talks HTTP. It does not attach to a profile that is already open. It does not ask the app for a connect URL. [MCP is not a local profile](/blog/mcp-is-not-a-local-profile). An agent pane is not a profile either. [Agent browsers versus operator profiles](/blog/agent-browsers-versus-operator-profiles).

## What the script is allowed to do

Hit APIs with keys you issued. Test hosts you own, using a throwaway user-data-dir. Fetch public documents slowly, with an honest client name, when terms allow. Write files into a research folder that is not a Chromium profile.

What it is not allowed to do: open a brand social profile and schedule posts, drive LinkedIn as if a licensed seat were a socket ([LinkedIn automation tools we refuse](/blog/linkedin-and-automation-tools-we-refuse)), run unofficial social helpers ([Social media automation tools we refuse](/blog/social-media-automation-tools-we-refuse)), or call a captcha API when a page stops it ([Captcha solvers are not research](/blog/captcha-solvers-are-not-research)).

| Folder | Holds | Script may touch |
| --- | --- | --- |
| `maskwright-data` | Work profiles, live cookies | No |
| `D:\work\scripts` (example) | Repo, venv, throwaway browsers | Yes |
| Research notes folder | CSV, screenshots, provenance | Yes, if the job was allowed |

## What the app will do instead

You can bulk start profiles you already use. That opens windows for people. [Batch launch is not a farm](/blog/batch-launch-is-not-a-farm). You can import cookies you own into a profile. You cannot ask 0.1 to run your script inside that profile.

If you need a reminder while you file a new `.ps1` or `.mjs`, put the scripts folder on a different drive letter if you have to. The point is mental as much as technical. Work profiles are for hands. Scripts are for hosts that invited a machine.

## Why attach is tempting, and why I still say no

The tempting path is always the same. The work profile is already logged in. The script would be shorter if it reused that session. One CDP attach and you skip the login flow.

That shortcut is how a test becomes a production incident. It is also how an unofficial helper gets a foothold. Once a port is open, you are no longer sure which process typed.

If a flow is painful to log in to, fix the official path. Use a password manager in the profile. Use a platform role. Do not solve pain by handing the cookies to Node.

## A setup that has survived on this desk

1. Create `D:\work\scripts` (or any path that is not `maskwright-data`).
2. Give each project its own virtualenv or `node_modules`.
3. Point browsers the project launches at `D:\work\scripts\.browsers\run-id`.
4. Delete that run directory when the job ends.
5. Keep production profiles closed while the run is live.

No Playwright export. No shared extension that bridges the two worlds. No "just this once" attach.

If that feels inconvenient, the inconvenience is the feature. Convenience is how cookies get mixed.

The rest of the desk is under [Automation](/blog/automation). This how-to is the folder rule. Keep it boring and you will not need a recovery post.

## FAQ

### Can I share an unpacked extension between a script and a work profile?

Keep work extensions in the work profile only. A script that needs a helper should load its own copy into a throwaway directory, on a host you own.

### Where do API tokens live?

In the repo env file, not in a Chromium profile. A token in a profile is a token in every screenshot that profile takes.
