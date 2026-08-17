---
slug: dns-leaks-on-windows
title: DNS leaks on Windows with a proxy
metaTitle: DNS leaks on Windows with a proxy
metaDescription: Windows resolvers and IPv6 adjacent paths can skip the proxy. The definition lives on the fingerprinting sibling. This page is the Windows how-to.
excerpt: Windows resolvers and IPv6 adjacent paths can skip the proxy. The definition lives on the fingerprinting sibling. This page is the Windows how-to.
author: Sam Okonkwo
published: 2026-06-03
category: proxies
tags: proxies, exits, dns, how-to, windows, leak
readingTime: 6
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on DNS leaks on Windows with a proxy beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: proxies-in-an-antidetect-browser, ipv6-leaks-we-still-see, proxy-auth-formats, proxy-plus-cookies, rotating-proxies-break-logins, what-we-refuse-to-log-about-proxies, sticky-sessions-and-why-they-matter, what-are-residential-proxies
---

A proxy on the browser is not a proxy on Windows. The system resolver, IPv6, and helper processes can ask your ISP for a name while the launched Chromium thinks it is on a residential exit. This page is the Windows how-to. The fingerprinting sibling owns the definition of a DNS leak as a surface. Here the job is: notice the skip, then decide whether the profile is still honest enough for authorized work.

[Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is the pillar. The rest of the cluster lives under [Proxies](/blog/proxies). Authorized work only. I will not write a hide-the-resolver cookbook.

## What a leak is on this desk

A DNS leak means the name lookup left through a path that is not the proxy you attached to the profile. The page may still load through the exit. The ISP, the office resolver, or a public DNS you set on the NIC still saw the hostname. Those two facts can be true at once.

HTTP `CONNECT` usually sends the hostname to the proxy. SOCKS5 may resolve locally or remotely. Local resolve on Windows uses the NIC's DNS. That is the boring leak: the browser proxied TCP and still asked the house resolver for the name.

IPv6 is the adjacent leak. A proxy product that only wraps IPv4 leaves AAAA lookups and IPv6 sockets on the host path. [IPv6 leaks we still see](/blog/ipv6-leaks-we-still-see) is that page. Read both if the geo check shows the house on one family and the exit on the other.

WebRTC is a different surface. Host candidates can publish a local or public IP even when DNS is clean. Do not flatten every leak into DNS.

## What the product does and does not do

MaskWright attaches HTTP or SOCKS5 to the launched browser. Chromium gets `--proxy-server`. Firefox and Camoufox get environment variables. The app does not replace the Windows DNS service. It does not write NIC settings. It does not disable IPv6 for you.

| Path | Proxied by the profile? | Typical skip |
| --- | --- | --- |
| HTTPS via Chromium `--proxy-server` | Yes, when auth works | None, if CONNECT is used |
| Local SOCKS5 resolve | No | NIC DNS sees the hostname |
| Windows Smart Multi-Homed Name Resolution | No | Fastest resolver wins |
| IPv6 / AAAA | Only if the line carries v6 | House IPv6 |
| Electron shell, updater, ads feed | No | App traffic, not the profile |

The geo check and the start-time alignment query ip-api.com through the proxy when the line works. That lookup can succeed while other names still hit the house resolver. A green country is not a DNS audit.

Connectivity is TCP to host:port. [Auth formats](/blog/proxy-auth-formats) can be wrong and TCP still succeeds. Fix auth first. A leak hunt on a line that never attached is wasted time.

We do not log your DNS queries. [What we refuse to log](/blog/what-we-refuse-to-log-about-proxies) is the diary policy. Credentials live in encrypted `profiles.json` (AES-256-GCM). The resolver on Windows is still Windows.

## Windows paths that skip the profile

**The NIC DNS.** Settings, DHCP from the router, or a "smart" filter app. Any process that does not inherit the browser proxy uses this.

**Smart Multi-Homed Name Resolution and parallel lookups.** Windows may query several resolvers and use the fastest answer. A proxy on Chromium does not turn that off.

**IPv6 and leftover tunnels.** If IPv6 is on and the proxy is IPv4-only, some names and some sockets bypass the line.

**DoH inside the browser versus the system.** System Chrome may have Secure DNS opinions that differ from the custom 131 core. Check which binary launched. DoH to a provider you did not choose is another resolver, not automatically the proxy.

**Helper processes.** Updaters, crash reporters, and the Electron shell are not the profile browser. Geo hosts, ads feed, and `updates.maskwright.com` are app traffic.

## How I test without writing a bypass

I attach the line, confirm auth, and [check the exit](/blog/checking-exit-ip-before-launch) through ip-api.com. Then, in that same launched profile, I open a public DNS-leak page and a public IP page. I want one story: the exit IP and the resolver country agree. If they disagree, I do not open the login.

I do not test in personal Chrome or the Electron dashboard. The profile is the process that has `--proxy-server`.

If IPv6 shows a second address, I treat that as a second exit. A VM with IPv6 off is the heavier tool when the host resolver cannot be trusted. Most authorized brand work should not need that. A tired [residential](/blog/what-are-residential-proxies) exit plus a house DNS leak is two problems. Fix the leak first.

I keep the proxy on the profile, not on Windows. [Sticky](/blog/sticky-sessions-and-why-they-matter) usernames stay put. [Rotating](/blog/rotating-proxies-break-logins) under a login is still hygiene failure. [A new exit does not clean the cookies](/blog/proxy-plus-cookies).

## FAQ

**Does a green geo check mean DNS is clean?**
No. Geo can succeed while other names hit the house resolver.

**Will MaskWright disable IPv6 for me?**
No. We do not write NIC settings.

**Should I put the proxy on Windows to fix DNS?**
No. That attaches the line to the whole box. Keep it on the profile and fix the NIC if you must.

If the profile cannot keep DNS and the exit in one country, do not open authorized work there. Use the house path without a costume, or fix the NIC, or pick a line that remote-resolves and then retest. Coherence is the bar. Invisibility is not a promise.
