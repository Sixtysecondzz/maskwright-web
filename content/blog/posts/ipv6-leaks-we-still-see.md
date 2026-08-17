---
slug: ipv6-leaks-we-still-see
title: IPv6 leaks we still see
metaTitle: IPv6 leaks we still see on Windows
metaDescription: IPv6 still leaks on Windows setups that only wrapped IPv4. This page covers the paths we still see, without pretending every leak is a WebRTC story.
excerpt: IPv6 still leaks on Windows setups that only wrapped IPv4. This page covers the paths we still see, without pretending every leak is a WebRTC story.
author: Sam Okonkwo
published: 2026-06-19
category: proxies
tags: proxies, exits, ipv6, how-to, leak
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on IPv6 leaks we still see beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: proxies-in-an-antidetect-browser, proxy-plus-cookies, dns-leaks-on-windows, what-we-refuse-to-log-about-proxies, proxy-auth-formats, what-are-residential-proxies, rotating-proxies-break-logins, residential-versus-datacenter-proxies
---

IPv6 still leaks on Windows setups that only wrapped IPv4. Operators attach an HTTP or SOCKS5 line, see a residential IPv4 on the geo check, and miss a global IPv6 that went out the NIC. This page is the paths we still see. It is not a WebRTC essay. WebRTC can publish addresses too. IPv6 can leak without a peer connection.

[Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is the pillar. [DNS leaks on Windows](/blog/dns-leaks-on-windows) is the resolver sibling. The rest of the cluster lives under [Proxies](/blog/proxies). Authorized work only. I will not write a hide-the-stack cookbook.

## Why IPv4-only lines fail this test

Most cheap proxy products are IPv4 sockets. The browser is told to use `host:port` on IPv4. Windows still has IPv6 on the NIC if the ISP or the router offered it. Happy Eyeballs prefers IPv6 when a name has AAAA. A request that never entered the proxy stack uses the house IPv6.

The geo check in this app talks to ip-api.com through the proxy. If that path is IPv4, the result is an IPv4 exit. It will not mention the IPv6 the next tab used. A green country is not a dual-stack audit.

Auth can be perfect. [Formats](/blog/proxy-auth-formats) can be perfect. The leak is the family you did not wrap.

## Paths we still see

| Path | What happens | Why it matters |
| --- | --- | --- |
| AAAA then house IPv6 | Socket connects to a global v6 | Proxy never sees it |
| DNS over IPv6 | Hostname goes to a v6 resolver | DNS leak with a v6 face |
| WebRTC v6 candidates | House prefix next to proxied IPv4 page | Separate surface, still a second street |
| Teredo / 6to4 leftovers | Tunnelled v6 on old lab boxes | Still a second exit |
| Electron shell / system browser | App traffic is not `--proxy-server` | Do not diagnose in the dashboard |

The common one on Windows 10 and 11 with a consumer ISP is AAAA then house IPv6.

WebRTC host or srflx candidates are a sibling. Prefs and inject can filter some of this. Disabled and proxy modes exist for a reason. A leftover `real` mode is an operator choice, not a default I will praise on a work profile.

We do not log these paths to a MaskWright diary. [What we refuse to log](/blog/what-we-refuse-to-log-about-proxies) still holds. Credentials sit in encrypted `profiles.json` (AES-256-GCM). The NIC is still the NIC.

## How I notice

In the launched profile I open an IP page that shows both families, and a WebRTC page if I need candidates. I want one public address family, and I want it to be the proxy. If I see a house IPv6 beside a residential IPv4, I do not open the login.

I retest after sleep, after a VPN app has been installed for personal use, and after Windows updates. Those are the days the stack grows a second path.

I do not test in personal Chrome. System Chrome and the custom 131 core can differ. The profile is the process you will actually use.

[Residential versus datacenter](/blog/residential-versus-datacenter-proxies) does not save you. A datacenter IPv4 plus a house IPv6 is a louder mismatch than a tired [residential](/blog/what-are-residential-proxies) IPv4 plus a house IPv6. Both are two streets.

## What I do about it

I prefer a line that is honest about dual-stack. If the provider has no IPv6, I treat the Windows box as IPv4-only for that work: IPv6 off on the NIC is an OS decision I make with my eyes open, not a silent registry trick I will publish.

I keep WebRTC on a mode that does not publish the house. I do not set `real` on a profile that is supposed to be on a proxy.

I do not rotate the IPv4 username to "fix" IPv6. [Rotating proxies break logins](/blog/rotating-proxies-break-logins). [A new exit does not clean the cookies](/blog/proxy-plus-cookies). A second family is not a session product.

A VM with IPv6 disabled in the guest is the heavier wall when the host must keep IPv6 for other work. Most authorized brand desks should not need that. They need to look at both families once.

## FAQ

**Is this just WebRTC?**
No. IPv6 can leak without a peer connection. Happy Eyeballs is enough.

**Does a green ip-api.com result mean IPv6 is clean?**
No. That lookup is often IPv4-only through the proxy.

**Should I disable IPv6 forever?**
Not as a universal tip. Some offices need it. Decide per box, with your eyes open.

If both families are visible and they disagree, the profile is not coherent. Fix the stack or stay on the house path without a costume. Coherence is the bar. Invisibility is not a promise.
