---
slug: what-are-proxies
title: What proxies are
metaTitle: What proxies are in a local profile
metaDescription: A beginner definition of a proxy as an exit, not a fingerprint tool. Keep provider upsells out. The how-to for attaching one lives on the sibling page.
excerpt: A beginner definition of a proxy as an exit, not a fingerprint tool. Keep provider upsells out. The how-to for attaching one lives on the sibling page.
author: Sam Okonkwo
published: 2026-08-08
category: proxies
tags: proxies, exits, are
readingTime: 6
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on what proxies are beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: how-to-use-a-proxy-server, proxies-in-an-antidetect-browser, socks5-versus-http-proxies, isp-versus-residential-proxies, bring-your-own-proxy-ethic, free-proxy-lists-are-a-trap, checking-exit-ip-before-launch, how-to-evaluate-a-proxy-provider
---

A proxy is an exit. Your browser (or app) sends traffic to a server you chose. That server talks to the site. The site sees the server's address instead of your house address. That is the whole noun.

It is not a fingerprint tool. It is not a second cookie store. It is not a VPN app, though people use the words as synonyms. It is not a reason to open a login you do not own. Authorized work only.

This definition lives under [Proxies](/blog/proxies). Provider upsells stay out. The how-to for attaching a line to a profile is the sibling.

## The packet path, without a diagram novel

You type a URL. The browser, configured to use a proxy, opens a connection to `host:port` instead of to the site. For HTTP, the proxy fetches the site and returns the bytes. For SOCKS5, the proxy is a more general tunnel. The site logs the proxy's outbound IP.

Your cookies still sit in the browser profile. Your canvas hash still sits in the browser. The proxy changed the street. It did not change the house.

[How to use a proxy server](/blog/how-to-use-a-proxy-server) is the MaskWright field. [Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is how the launcher attaches the line. [SOCKS5 versus HTTP](/blog/socks5-versus-http-proxies) is the protocol split.

## Types you will see on a price page

**Datacenter.** Address announced by a hosting ASN. Fast, cheap, obvious to a lot of risk engines.

**Residential.** Address announced by a consumer ISP. Often a shared pool. Sticky time is how you keep one for a while.

**ISP (sometimes called static residential).** Address assigned to a provider ASN on purpose, usually still. Different from a random household pull.

**Mobile.** Carrier ASN, 4G and 5G radio on the far side. A desktop browser can use that exit. That does not make a phone.

[ISP versus residential](/blog/isp-versus-residential-proxies) is that cut. [How to evaluate a provider](/blog/how-to-evaluate-a-proxy-provider) is criteria, not a top-10.

| Label | What the site often sees | Typical trade |
| --- | --- | --- |
| Datacenter | Machine block | Speed, easy to flag |
| Residential | Household ISP | Cost, shared pool |
| ISP / static | Provider ASN, still | Price between the two |
| Mobile | Carrier | CGNAT, shared, expensive |

## What a proxy is not

Not a VPN app. A VPN usually wraps the whole PC (or a split-tunnel set of apps). A proxy is usually per browser or per profile.

Not encryption for its own sake. HTTP forwarders see plaintext HTTP. HTTPS to the site is still TLS to the site, with the proxy in the middle of the TCP path. Know what you pasted.

Not a free list from a random GitHub dump. [Free proxy lists are a trap](/blog/free-proxy-lists-are-a-trap). Abandoned exits, already flagged, often logged.

[Bring-your-own ethic](/blog/bring-your-own-proxy-ethic) is why MaskWright does not sell the line. [Check the exit IP before launch](/blog/checking-exit-ip-before-launch) is the habit.

## A picture that usually helps

House address versus PO box. The site writes to the PO box. The letter still contains whatever you put in it (cookies). Changing PO boxes does not empty the envelope.

VPN apps are more like moving the whole apartment to another street, including the TV and the fridge. Proxies, in the sense this cluster uses, are one browser using one PO box.

I still see people buy a proxy because a fingerprint checker scared them. The checker was reading canvas. The proxy did not touch canvas. Buy the line for the street. Buy isolation for the cookies. [Download MaskWright](/download) if the second job is the one you had.

Datacenter, residential, ISP, mobile: those are flavors of PO box. The noun stays the same.

## FAQ

### Is a proxy illegal?

Using a proxy is ordinary. Using it to open a login you do not own, or to commit fraud, is not a proxy question. Authorized work only. I am not your lawyer.

### Do I need a proxy to use an antidetect browser?

No. Isolated profiles work on a household IP. Add a line when the job needs a different exit.

### Why do people say proxy when they mean VPN?

Marketing mashed the words. If it wraps the whole PC, it is acting as a VPN. If it is a host:port on one profile, it is a proxy.
