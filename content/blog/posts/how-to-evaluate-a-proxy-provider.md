---
slug: how-to-evaluate-a-proxy-provider
title: How to evaluate a proxy provider
metaTitle: How to evaluate a proxy provider in a local profile
metaDescription: Replaces ten vendor reviews. Evaluation criteria only: sticky time, protocol, logs, and ethics. We will not rank a top-10 you can checkout through us.
excerpt: Replaces ten vendor reviews. Evaluation criteria only: sticky time, protocol, logs, and ethics. We will not rank a top-10 you can checkout through us.
author: Sam Okonkwo
published: 2026-06-09
category: proxies
tags: proxies, exits, choose, proxy
readingTime: 5
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on how to evaluate a proxy provider beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: free-proxy-lists-are-a-trap, https-proxy-versus-http-forwarder, isp-versus-residential-proxies, how-websites-detect-proxies, proxies-in-an-antidetect-browser, carrier-grade-nat-and-shared-exits, what-are-proxies, mobile-versus-residential
---

This page replaces ten vendor reviews. Criteria only: sticky time, protocol, logs, and ethics. We will not rank a top-10 you can checkout through us. MaskWright does not broker traffic. Provider URL templates in the app are convenience strings, not endorsements.

Authorized work only. A nicer dashboard does not authorize a login you do not own.

The checklist lives under [Proxies](/blog/proxies).

## Sticky, protocol, logs, ethics

**Sticky.** Can I keep one IP for a sitting? How is the session ID encoded? What happens when it expires? If they only sell per-request rotate, they are the wrong shop for logins.

**Protocol.** HTTP and SOCKS5 are what we parse. [HTTPS versus HTTP forwarder](/blog/https-proxy-versus-http-forwarder): a product named HTTPS may still be an HTTP CONNECT forwarder. Ask. SOCKS4 is not in our type list.

**Logs.** Do they store destinations? For how long? Under whose law? If the answer is a joke or a void, walk away.

**Ethics.** How did the residential or mobile pool get there? Opt-in SDK versus fuzzy. If they will not say, that is an answer.

[What proxies are](/blog/what-are-proxies) is the noun. [Free lists](/blog/free-proxy-lists-are-a-trap) fail every line above.

| Criterion | Pass | Fail |
| --- | --- | --- |
| Sticky for logins | Documented session length | Rotate only |
| Protocol | HTTP and/or SOCKS5 that actually works | Mystery "stealth" port |
| Logs | Retention policy you can read | "We never log" with no entity |
| Ethics | Sourcing explained | Viral SDK, no docs |
| Support | You can test a refund IP | Chat that only sells GB |

## Assignment type is a separate choice

[ISP versus residential](/blog/isp-versus-residential-proxies) and [mobile versus residential](/blog/mobile-versus-residential) are type cuts. Pick type for the job, then pick a provider who sells that type without lying about it.

[How websites detect proxies](/blog/how-websites-detect-proxies) and [CGNAT](/blog/carrier-grade-nat-and-shared-exits) are how the internet sees the line. A pretty landing page does not change a listed subnet.

[Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser): attach per profile, align geo, check the exit yourself. A provider "quality score" is not a substitute for a lookup page on your launch.

## Tests I actually run

Paste into a throwaway profile first. TCP check, then a launched lookup. Confirm country, ASN, IPv6, WebRTC. Sit for the sticky length and check the IP again. If it hopped, the SKU is not sticky.

Read the ToS for prohibited use. If your authorized dashboard is listed as banned, believe them. Buy a different line or use the house IP.

Price per GB is a last filter, not a first one. Cheap rotate is expensive when it breaks a login.

## A trial week, not a review crown

I buy the smallest GB or IP. I paste into a throwaway MaskWright profile. Lookup page, sticky hold, IPv6, WebRTC. I read ToS for whether my authorized dashboard is banned. I ask support where they are incorporated and how long they keep destination logs. If chat only wants to upsell, I am done.

I do not care that a blog put them at number three. I do not care that our UI has a URL template. Templates are strings. If sticky fails, I refund or I leave. If ethics are a shrug, I leave faster.

Refund IP tests: some shops rotate you onto a clean subnet for the trial. I re-check a week later if I stay. Listed subnets show up after the honeymoon.

I also ask whether SOCKS5 auth is real username/password in the handshake, or a hack that only works in their browser. MaskWright needs a normal HTTP or SOCKS5 line. Magic ports that only work in their client are lock-in. Same leave test as antidetect tools: can I paste this into another client tomorrow?

Geo claims: I verify city against ip-api.com myself. Sales maps lie. A trial that only works in their browser extension is not a line I can paste into MaskWright.

## FAQ

### Why no top-10?

Because we would become an affiliate page. Criteria age better than crowns.

### Are the templates in MaskWright a recommendation?

No. Convenience strings. Credentials stay local. You still evaluate the shop.

### What if support will not tell me about logs?

Treat that as "we log whatever we want." Use someone else, or use no proxy.
