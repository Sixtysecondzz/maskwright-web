---
slug: what-is-an-antidetect-browser
title: What an antidetect browser is
metaTitle: What an antidetect browser is, locally
metaDescription: An antidetect browser isolates profiles on the operator PC. This definition is local isolation, not a cloud locker with seats, sync, and a rented phone farm.
excerpt: An antidetect browser isolates profiles on the operator PC. This definition is local isolation, not a cloud locker with seats, sync, and a rented phone farm.
author: Riley Park
published: 2026-05-16
category: antidetect-browsers
tags: antidetect, profiles, browser
readingTime: 10
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on what an antidetect browser is beside named local browser profiles in a sidebar, photographed as a working operator setup.
related: how-antidetect-browsers-work, what-is-browser-fingerprinting, multiple-accounts-on-one-pc, proxies-in-an-antidetect-browser, why-we-built-a-local-antidetect-browser, when-you-do-not-need-an-antidetect-browser, virtual-machine-vs-antidetect-browser, how-to-choose-an-antidetect-browser
---

One thing worth flagging before the definition: people use "antidetect browser" for three different products. A local app that keeps profiles in folders on your PC. A cloud browser you log into, with seats and sync. A rented Android image billed as a phone. I only mean the first one on this page.

An antidetect browser is software that gives each authorized login its own browser data directory, its own cookies and site storage, and its own fingerprint record, and it does that on the machine you sit at. If the session lives on a vendor disk, you are renting a hosted browser. That can still isolate logins from each other. It is a different product.

This sits in the [Antidetect browsers](/blog/antidetect-browsers) hub. [How antidetect browsers work](/blog/how-antidetect-browsers-work) is the mechanics sibling. This page names the job.

## What the word is supposed to mean

A normal browser is one install. Tabs look separate. They are not. Cookies, localStorage, IndexedDB, extensions, and the hardware story a page can read all sit in one engine. Chrome, Edge, and Firefox are good at being that install. They are not trying to be a profile manager for several businesses.

An antidetect profile is a named launch: its own user-data directory, its own cookie store, and a fingerprint that belongs to that directory and stays put across launches. You open the profile that belongs to the work. You close it when you are done. You do not keep a personal Facebook, a brand Ads Manager, and a supplier portal in the same Chrome user because Monday was busy.

The logins have to be yours to open. Brand pages you already run. Ads accounts the business already owns. Storefronts the legal entity already registered. Research profiles that look at public pages. [Multiple accounts on one PC](/blog/multiple-accounts-on-one-pc) is the authorized-accounts version of this. Extra identities that exist only to dodge a platform limit are a terms problem, not a browser feature.

## What actually lives in a profile

On a local tool the profile is not a row in someone else's database. It is a directory on disk plus an index the app can read.

In MaskWright the store root is under the Electron user-data path, in a folder named `maskwright-data`. The index is `profiles.json`. Each profile gets `profiles/<uuid>/` as its Chromium or Firefox user-data directory.

That split matters more than the marketing word "encrypted." The index is encrypted at rest with AES-256-GCM. Proxy credentials live in that index. The per-profile browser data is ordinary Chromium or Firefox files. Cookie import files and localStorage import files are plaintext JSON on disk. If a page tells you "profiles are encrypted" and does not name the index versus the user-data tree, it is overselling.

You can back the store up because you can see it. You can lose it the same way. There is no MaskWright account and no cloud profile sync in the desktop code. That is the point of a local app, and it is also the maintenance. A hosted browser that syncs for you is convenient until the vendor holds every session.

## What has to stay inside the profile

Isolation is not a user-agent string. A site that cares will read more than the chrome around the page.

**Cookies and site storage.** Logins live in cookies. Pixels, carts, and "remember this device" flags live there too. localStorage is a second store. IndexedDB is a third. If two authorized accounts share those stores, the site does not need a clever fingerprint to link them. It already has the keys.

**The fingerprint record.** [What browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting) is a separate cluster. Here the rule is simpler. Canvas, WebGL, audio, fonts, screen metrics, timezone, language, and hardware numbers have to belong to the profile and stay put across launches. A new random paint every morning is a lab habit. Work profiles need a stable seed in a stable folder.

**The exit, if you attach one.** A proxy is not the profile. It is the path out. HTTP and SOCKS5 are the types a local tool should parse. You bring the line. Language, timezone, and geolocation should follow the exit country, not the office clock, when a proxy is attached. [Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) covers that pairing. A VPN on the whole PC is a coarser tool.

**Extensions.** An unpacked extension loaded into one profile should not appear in another. A password manager or a shipping add-on that belongs to Store A should not sit in Store B's session.

If a product only switches cookies and leaves the rest of the engine shared, it is a session switcher. That can still be useful. It is not this definition.

## What people use instead

Operators reach for four stand-ins before they look up this category.

A **VPN** changes the exit IP. It does not give you a second cookie store or a second fingerprint. The same Chrome profile through a new tunnel is still the same install on a different street.

**Incognito** is a temporary store on the same engine. Close the window and it is gone. The hardware story the page can read is still the same browser. You cannot keep an authorized ads login in Incognito and call that a profile manager.

**Chrome profiles** are a convenience switcher. They separate some state. They share an engine family, an update channel, and a lot of ambient Windows context. They are the right tool for "work Google versus personal Google" on a laptop that does one of each. They are a weak tool for a desk that keeps several authorized logins open in a week.

A **virtual machine** is real isolation at the OS line. It is also heavy. [A virtual machine versus an antidetect browser](/blog/virtual-machine-vs-antidetect-browser) is the comparison when you actually need a second Windows install. Most authorized brand work does not.

The word antidetect exists because those stand-ins each do one slice. The app is supposed to do the slices together, on one PC, without asking you to rent a phone in another country.

| Stand-in | What it splits | What it shares |
| --- | --- | --- |
| VPN | Exit IP | Cookies, fingerprint, extensions |
| Incognito | Temporary cookies | Engine, fingerprint, usually the same IP |
| Chrome profiles | Some cookies and settings | Binary, GPU story, often sync |
| Virtual machine | Almost everything | Cost in RAM and disk |
| Antidetect profile | Cookies, storage, fingerprint seed, optional per-profile proxy | The same physical PC |

## Local app versus hosted browser

Cloud antidetect tools sell seats, sync, and sometimes a cloud phone. The session can live on their disk. That has a real benefit if you need the same profile on two laptops tomorrow and you accept the vendor as a custodian. It has a real cost when the custodian is breached, acquired, or simply rate-limits the export.

[Why a local antidetect browser](/blog/why-we-built-a-local-antidetect-browser) is the architecture note. The short version for this definition: if I cannot point at the folder, I do not treat the product as local isolation. Browser-as-a-service can still isolate profiles from each other. It isolates them on someone else's machine.

MaskWright does not offer team seats. That is by design, not a missing checkbox we pretend is coming next week. Platform roles (Business Manager, staff accounts, page roles) are how people share work. Mailing a user-data folder is how people share cookies. Those are not the same act.

There is also no cloud phone or Android emulation in the product. Profiles model desktop OS families. A mobile user agent on a Windows host is a mismatch, not a phone.

## How the engine fits

Most tools in this category launch Chromium. Some also launch Firefox. The honest version of "purpose-built Chromium" is a patched core when the binary is present, and a fallback to system Chrome or Edge when it is not. MaskWright targets Chromium 131.0.6778.85 for that core. Firefox profiles prefer Camoufox when installed, else stock Firefox.

JavaScript and CDP can override a long list of surfaces: user agent and Client Hints, timezone, screen, WebGL, canvas noise, fonts, audio, WebRTC handling, geolocation, and more. TLS JA3 and JA4 are not a JavaScript spoof. Font raster and process name are partial, compile-time or patch-time jobs. I will not quote lab scores. We do not have published pass rates, and trophy scores are not this page's job.

Bulk start and stop of selected profiles is operator convenience. It is not a volume playbook.

## Proxies sit beside the profile

People search "antidetect" when they mean "browser plus proxy." Those are stacked tools. The browser isolates the profile. The proxy, if you attach one, chooses the exit. MaskWright parses HTTP, HTTPS as an HTTP forwarder, and SOCKS5. It does not broker traffic. Provider URL templates exist for convenience. Credentials stay in the local index.

Geo checks go out to ip-api.com through the proxy or direct. That traffic leaves the machine. So do update checks and the ads feed. "No server" as a slogan is overstated if the app still fetches updates and creatives. "No profile upload" is the claim that holds in the code we audited.

A rotating exit under a login you intend to keep is hygiene failure, not a tactic. Sticky time belongs with the profile that holds the cookies.

## When you do not need one

I keep saying authorized because the search results do not. A multi-account browser, in the sense this hub uses, is for logins you already have a right to open.

[When you do not need an antidetect browser](/blog/when-you-do-not-need-an-antidetect-browser) is the honest no. One Chrome profile and the platform's own roles are enough for many desks. A security-hardened browser (Brave, Mullvad, a locked-down Firefox) is a different job: reduce what the open web can learn about a single person. That is not profile isolation.

You need the app when the desk already has several authorized identities that must not share cookies: two storefronts under two entities, a personal Facebook and a Business Manager, a research profile that must never see customer exports, an ads account that must not inherit a pixel from a different brand.

## What this definition refuses

It refuses a rented phone as the meaning of the word. It refuses a seat meter as the meaning of isolation. It refuses "undetectable" as a promise. Detection is a site policy plus a stack we do not control. A coherent profile is the most an operator tool can offer.

It also refuses to treat export as optional. If you cannot take cookies out (Netscape or JSON) and you cannot copy a local folder, you are a tenant. MaskWright can import Netscape or JSON cookies and export Netscape. It can import and export localStorage as JSON. Those files are plaintext. Treat them like keys.

[How to choose an antidetect browser](/blog/how-to-choose-an-antidetect-browser) turns this definition into a checklist: local store, bring-your-own proxy, no seats, honest limits. Use that when you already know the word and need the next page.

If you only needed the name: an antidetect browser isolates authorized profiles on the operator PC. The rest of the category is hosted browsers, tunnels, and private windows wearing the same label.

## FAQ

### Is an antidetect browser the same as a fingerprint spoof?

No. Spoofing a few navigator fields is a slice. The job is a separate user-data directory, a stable fingerprint record, and optional per-profile proxy, kept on the PC you control. If the product only changes the user agent, it is not this category.

### Do I need one if I already use Chrome profiles?

Maybe not. Chrome profiles are enough for personal Google versus work Google. They share an engine family and a hardware story. If you keep several authorized businesses on one tower, that sharing starts to matter. Check [when you do not need an antidetect browser](/blog/when-you-do-not-need-an-antidetect-browser) before you install anything.

### Does MaskWright sync profiles to the cloud?

No. There is no account and no profile sync. `profiles.json` is local and encrypted. Chromium user-data directories are local and not encrypted by our code. Updates and ads still leave the machine. Profiles do not get uploaded.

### Can I use it for accounts I do not own?

No. Authorized accounts only. A cleaner fingerprint does not make a login yours. Platform roles exist so a second person can work inside an account the business already owns.
