---
slug: socks5-versus-http-proxies
title: SOCKS5 versus HTTP proxies
metaTitle: SOCKS5 versus HTTP proxies in a profile
metaDescription: Product parses http, https, and socks5. This comparison is protocol behavior, not a SOCKS5 vendor list. Pick the handshake that matches the line you bought.
excerpt: Product parses http, https, and socks5. This comparison is protocol behavior, not a SOCKS5 vendor list. Pick the handshake that matches the line you bought.
author: Sam Okonkwo
published: 2026-07-30
category: proxies
tags: proxies, exits, socks5, comparison, http
readingTime: 6
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on SOCKS5 versus HTTP proxies beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: bring-your-own-proxy-ethic, how-to-use-a-proxy-server, checking-exit-ip-before-launch, what-are-proxies, geo-matching-proxy-to-fingerprint, proxies-in-an-antidetect-browser, sticky-sessions-and-why-they-matter, isp-versus-residential-proxies
---

SOCKS5 and HTTP are different handshakes. Vendor blogs flatten them into a shopping list. This page compares protocol behavior inside a local profile. MaskWright parses `http`, `https`, and `socks5`. It does not sell exits. Pick the handshake that matches the line you bought.

[What proxies are](/blog/what-are-proxies) is the beginner definition. [Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is the pillar. The rest of the cluster lives under [Proxies](/blog/proxies). Authorized work only. A cleaner handshake does not authorize a login you do not own.

## What each handshake is for

An HTTP proxy understands HTTP. The browser asks it to fetch a URL, or to `CONNECT` through to a TLS host. The proxy sees the destination host on `CONNECT`. It should not see the HTTPS payload if the tunnel is honest. Most residential and datacenter HTTP products are this forwarder.

SOCKS5 is a generic TCP tunnel. The browser asks the SOCKS server to open host:port. DNS can happen at the client or at the proxy depending on remote-resolve support.

| Topic | HTTP proxy | SOCKS5 |
| --- | --- | --- |
| What it speaks | HTTP, plus CONNECT for TLS | Generic TCP tunnel |
| Auth in MaskWright | MV3 extension (`onAuthRequired`) | Username/password in the handshake |
| Chromium flag | `--proxy-server` without embedded creds | Same flag, `socks5://host:port` |
| `https` type in our parser | Treated as HTTP forwarder | Not this |
| TLS-to-proxy | Not implemented | Not this either |
| SOCKS4 | Not supported | Not supported |

MaskWright will attach either to a profile. Firefox and Camoufox get the line through environment variables (`http_proxy`, `https_proxy`, `MASKWRIGHT_PROXY_URL`).

HTTPS as a type is treated as an HTTP forwarder. TLS-to-proxy is not implemented. I will not sell you an HTTPS proxy mode we do not have. If the provider gave you `https://user:pass@host:port`, read it as an HTTP forwarder URL unless you have confirmed TLS-to-proxy elsewhere.

SOCKS4 is not in the type enum. Do not paste a SOCKS4 line and expect a handshake.

## What does not change with the protocol

The profile is still the folder. Cookies, localStorage, and IndexedDB do not care whether the path out was SOCKS5 or HTTP. A new protocol does not clean old cookies.

Geo alignment still matters. Timezone, language, and geolocation should follow the exit. [Match the fingerprint to the exit geo](/blog/geo-matching-proxy-to-fingerprint) is that how-to. The lookup goes through the line you attached, via ip-api.com, when the check works.

Sticky time still matters for a login. [Sticky sessions](/blog/sticky-sessions-and-why-they-matter) keep a profile on one address. Protocol choice does not invent stickiness. The provider's session product does.

[Bring your own proxy](/blog/bring-your-own-proxy-ethic) still holds. Credentials stay in the local profile record inside encrypted `profiles.json` (AES-256-GCM). We do not broker traffic. Provider URL templates are convenience strings.

![A line attached to a profile, not a storefront](/blog/blog-proxy-map.png "HTTP or SOCKS5. You bring the line.")

## Practical differences on a Windows desk

**DNS.** HTTP `CONNECT` typically sends the hostname to the proxy. SOCKS5 may resolve locally or remotely. Windows can still leak DNS on paths that skip the proxy: IPv6, the system resolver, a helper process that does not inherit the browser proxy. Protocol choice is not a DNS-leak cure by itself.

**Auth failure.** The connectivity check in the product is a TCP connect. It does not prove that HTTP or SOCKS5 auth succeeded. Believe a geo lookup that came back through the line, then open work. [Check the exit IP before launch](/blog/checking-exit-ip-before-launch) is the habit.

**What the provider gave you.** If the dashboard says HTTP and you paste `socks5://`, the handshake fails. If the dashboard says SOCKS5 and you paste `http://`, the handshake fails. Read the port and the scheme. [How to use a proxy server](/blog/how-to-use-a-proxy-server) is the per-profile how-to.

**UDP and non-web.** SOCKS5 can carry more than HTTPS in the spec. The launched Chromium is still a browser, not a VPN. Do not buy SOCKS5 because a forum said it is more undetectable. The site sees an exit IP and a browser.

## HTTP versus "HTTPS proxy" in marketing

Providers label products HTTPS when they mean "use this for HTTPS sites" or when they terminate TLS to the proxy. Those are different products. Our parser accepts `https` and treats it as an HTTP forwarder. If you need TLS all the way to the proxy process, this app does not implement that. Say so in the runbook.

[ISP versus residential](/blog/isp-versus-residential-proxies) is an exit-type cut, not a protocol cut. You can buy either type as HTTP or SOCKS5. Protocol is the handshake. Exit type is how the address is assigned.

I pick the scheme the invoice already named. I do not switch protocols on a live login to see if it scores better. That is a new path, and sometimes a new DNS story, under cookies that expected yesterday's path.

I pick SOCKS5 when the provider's sticky product is SOCKS5-only, or when I want remote resolve and the provider documents it. I pick HTTP when that is what the residential or ISP line actually is. I check the exit before I open the authorized profile.

## FAQ

**Is SOCKS5 more stealthy?**
No. The site sees an exit IP and a browser. Protocol is the hop, not a hide.

**Does `https://` mean TLS to the proxy?**
Not in this app. We treat it as an HTTP forwarder.

**Can I use SOCKS4?**
No. It is not in the type enum.

Paste the line you bought. Check the exit. Keep the profile. We do not have a storefront.
