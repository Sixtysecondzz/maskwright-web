---
slug: mobile-antidetect-is-not-a-desktop-profile
title: A mobile antidetect is not a desktop profile
metaTitle: A mobile antidetect is not a desktop profile
metaDescription: We do not ship Android or iPhone. Desktop profiles only. This is the one mobile piece, and it exists to stop a phone costume from being sold as the product.
excerpt: We do not ship Android or iPhone. Desktop profiles only. This is the one mobile piece, and it exists to stop a phone costume from being sold as the product.
author: Riley Park
published: 2026-07-19
category: antidetect-browsers
tags: antidetect, profiles, browser
readingTime: 6
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on a mobile antidetect is not a desktop profile beside named local browser profiles in a sidebar, photographed as a working operator setup.
related: antidetect-browser-for-agencies, custom-chromium-versus-system-chrome, proxy-browser-vs-antidetect, browser-as-a-service-risks, virtual-machine-vs-antidetect-browser, ghost-browser-vs-antidetect, what-is-an-antidetect-browser, antidetect-browsers-for-seo
---

We do not ship Android. We do not ship iPhone. MaskWright profiles model desktop OS families. Client Hints report `mobile: false`. That is the product. This page exists so a phone user agent is not sold as a local profile.

The category is full of cloud phones and mobile user-agent packs. Those are other products. I will name the line and stop. Authorized work only. A fake phone does not authorize a login you do not own.

This is the one mobile note in [Antidetect browsers](/blog/antidetect-browsers). It is a refusal, not a how-to for dressing a Windows box as a handset.

## What a desktop profile actually is

A Windows (or macOS, or Linux) fingerprint preset. Screen metrics that look like a monitor. Max touch points defaulting to 0. Battery API as a plugged-in desktop. GPU strings that should rhyme with a PC. [What an antidetect browser is](/blog/what-is-an-antidetect-browser) assumes that object.

[Custom Chromium versus system Chrome](/blog/custom-chromium-versus-system-chrome) still applies. The binary is a desktop Chromium. Putting "iPhone" in the user agent does not change GL_VENDOR, fonts, or touch.

I have watched people paste a mobile UA into a desktop launch and then act surprised when Client Hints and `navigator.userAgentData` still said desktop. MaskWright's uaMetadata sets `mobile: false` on purpose.

| Object | What it is | In MaskWright? |
| --- | --- | --- |
| Desktop profile | Isolated PC browser | Yes |
| Mobile UA on desktop | Mismatch | Not a phone |
| Mobile proxy | Carrier exit | You can attach one |
| Cloud phone | Rented Android | No |
| Real phone you hold | A device | Use the device |

## Cloud phones are a different purchase

A rented Android in someone else's rack holds the session off-box. [Browser-as-a-service risks](/blog/browser-as-a-service-risks) apply. We will not review phone fleets. [Agencies](/blog/antidetect-browser-for-agencies) that need a real device should use a real device they control, plus platform roles.

[A virtual machine versus antidetect](/blog/virtual-machine-vs-antidetect-browser) is still a desktop split. A VM is not a phone either.

[Ghost Browser](/blog/ghost-browser-vs-antidetect) is multi-session Chrome. Also not a phone. [A proxy browser](/blog/proxy-browser-vs-antidetect) changes the exit. A carrier proxy on a desktop profile is a carrier exit on a desktop browser. Useful for some lookups. Not an iPhone.

## SEO and "mobile results"

[SEO research](/blog/antidetect-browsers-for-seo) people ask this constantly. If you need the phone SERP, pick up a phone. Emulated width plus a mobile UA is a lab view. It is not what Google's phone crawler or a user's handset sees in full.

If you only needed to see how a responsive layout wraps, Chrome DevTools on a desktop profile is cheaper and more honest.

## What you can attach without lying

A mobile (carrier) HTTP or SOCKS5 line on a desktop profile. The site sees a carrier ASN. The browser still looks like a PC. Say that out loud before you treat the launch as a handset.

Do not pair a mobile ASN with a Windows UA and call it consistent. Do not pair an iPhone UA with a d3d11 GPU. Coherence is the job. Costume packing is how checkers fail.

## What I tell people who paste an iPhone UA anyway

Client Hints, `navigator.userAgentData`, touch points, and the GPU string will not follow the costume unless every layer was built for a phone. Ours were not. You will get a desktop Chromium that claims to be a handset in one field and a PC in four others. Checkers love that.

A carrier proxy is the honest mobile-adjacent option: the street looks like a carrier, the body looks like a PC. Say it that way. If the authorized job is the Instagram app, buy a phone or accept a hosted device and its custody. Do not ask Windows 11 to be iOS.

I will not publish a "mobile preset" table. That table would be a how-to for a mismatch.

## FAQ

### Can I set a mobile user agent in MaskWright?

The product models desktop OS families. I will not document a phone costume. If a field lets you type a UA, coherence is still your problem.

### Do you plan cloud phones?

Not in the code we audited. Desktop profiles only.

### Is a mobile proxy enough to look like a phone?

No. It is an exit type. The browser is still a desktop Chromium. Use a real device when the job is a real device.
