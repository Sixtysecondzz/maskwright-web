---
slug: what-is-a-dns-leak
title: What a DNS leak is
metaTitle: What a DNS leak is on Windows
metaDescription: A DNS leak is a resolver that ignores the path you think you chose. This definition stays on the leak. Windows resolver detail lives on the proxies sibling.
excerpt: A DNS leak is a resolver that ignores the path you think you chose. This definition stays on the leak. Windows resolver detail lives on the proxies sibling.
author: Avery Chen
published: 2026-08-04
category: browser-fingerprinting
tags: fingerprinting, windows, dns, leak
readingTime: 6
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on what a DNS leak is beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, what-is-an-ip-leak, geolocation-api-versus-ip-geo, ja3-ja4-tls-fingerprints, why-vpn-alone-fails-fingerprint-tests, navigator-webdriver-and-automation-flags, browserscan-walkthrough, gpu-renderer-must-match-the-ua
---

A DNS leak is a resolver that ignores the path you think you chose. You pointed the browser at a proxy or a VPN. Name lookups still left through the host resolver, a plain UDP path, or a provider the exit never saw. The site, or a leak test, then sees a DNS vantage that does not match the exit.

This page stays on that definition. Windows resolver knobs, DoH policy, and adapter order live on the proxies sibling. I will not merge this note with WebRTC or with the parent [IP leak](/blog/what-is-an-ip-leak) page.

## What the lookup is supposed to do

Every navigation starts with a name. `ads.example` has to become an address before Chromium can open a socket. Someone has to answer that question. On a quiet setup the someone is the resolver that sits on the same path as the fetches: the proxy, the VPN's DNS, or a resolver you picked because it lives in the same country as the exit.

A leak is the case where a different someone answers. The page fetches through Frankfurt. The resolver still sits on the kitchen ISP. A geo database then sees Frankfurt for the TCP path and the kitchen for the DNS path. Two maps. One profile that was supposed to be one place.

That is not [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). Fingerprinting is engine answers. A DNS leak is a network vantage. Labs print both on one screen. They are still different jobs.

The [Browser fingerprinting](/blog/browser-fingerprinting) cluster keeps the doors named so a red DNS row does not get "fixed" by rerolling canvas.

| Symptom | Likely door | Wrong fix |
| --- | --- | --- |
| IP country != DNS country | Resolver ignored the proxy or tunnel | Rerolling canvas |
| Clean DNS, LAN candidate in SDP | WebRTC / ICE | Changing fonts |
| Correct pin, kitchen resolver | DNS, not Geolocation | Denying geo permission |
| Hello looks like Chrome, leak still there | DNS or ICE, not JA3 | A UA swap |

## What a leak is not

It is not a WebRTC host candidate. ICE is a STUN conversation. DNS is a name conversation. A quiet resolver with a loud `192.168` candidate is still a WebRTC problem.

It is not the Geolocation API. [Geolocation versus the exit IP](/blog/geolocation-api-versus-ip-geo) is a pin. A correct pin with a kitchen resolver is still a DNS leak.

It is not a canvas hash, a GPU string, or a [renderer that fails to match the user agent](/blog/gpu-renderer-must-match-the-ua). Those are engine tells. Changing them will not move the resolver.

It is not `navigator.webdriver`. [Automation flags](/blog/navigator-webdriver-and-automation-flags) are process tells. We set webdriver false and launch with `--disable-blink-features=AutomationControlled`. That has nothing to do with who answered `ads.example`.

It is not [JA3 or JA4](/blog/ja3-ja4-tls-fingerprints). Those hash a TLS Client Hello. The hello happens after the name is already resolved.

## How the leak shows up in practice

You set a per-profile HTTP or SOCKS5 proxy and assume every packet follows it. Some lookups still hit the Windows resolver on the NIC. The proxy carried the page. The kitchen ISP carried the name.

You set a system VPN and assume the tunnel owns DNS. Split DNS, a leftover adapter, or a browser DoH path can still bypass the tunnel. [A VPN alone fails fingerprint tests](/blog/why-vpn-alone-fails-fingerprint-tests) for engine reasons. It can also fail this leak test for resolver reasons. Those are two failures.

You open [BrowserScan](/blog/browserscan-walkthrough) and see an IP country next to a DNS country. I read that as two witnesses. I do not read it as a single trophy row.

MaskWright does not hide resolvers. We parse HTTP and SOCKS5, we check exit geo through ip-api.com, and we align timezone, language, and the Geolocation pin to that exit. We do not rewrite the Windows DNS stack. I will not claim we do.

## Why the vantage matters

A resolver in the kitchen tells a site, an ad network, or a leak page where the name lookup sat. That can be enough to argue with the exit you advertised. It can also be enough to join visits that used different exits but the same home resolver.

Authorized isolation still starts with the folder and the cookies. DNS is the extra map. If two brand profiles share a host resolver, they share a vantage even when the proxies differ. That is a network fact, not a reason to invent a product feature we do not ship.

## How I want you to use this definition

When a lab says DNS leak, ask which resolver answered and whether that resolver sits on the path you meant. Do not open a canvas setting. Do not reroll a seed. Do not merge the row with WebRTC.

If you need the Windows knobs, go to the proxies sibling. If you need the parent address definition, stay with [what an IP leak is](/blog/what-is-an-ip-leak). This page only has to hold the sentence: a DNS leak is a resolver that ignored the path.

## FAQ

**Does MaskWright rewrite Windows DNS?**
No. We align timezone, language, and the geo pin to the exit. We do not own the resolver stack.

**Is a DNS leak the same as a WebRTC leak?**
No. DNS is names. WebRTC is ICE candidates.

**Should I reroll canvas if a lab says DNS leak?**
No. That is the wrong door.
