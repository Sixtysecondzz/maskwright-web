---
slug: https-proxy-versus-http-forwarder
title: HTTPS proxies versus an HTTP forwarder
metaTitle: HTTPS proxies versus an HTTP forwarder
metaDescription: Product parses https as an HTTP forwarder. TLS-to-proxy is not implemented. This honesty page stops an https:// proxy URL from being sold as end-to-end TLS.
excerpt: Product parses https as an HTTP forwarder. TLS-to-proxy is not implemented. This honesty page stops an https:// proxy URL from being sold as end-to-end TLS.
author: Sam Okonkwo
published: 2026-06-16
category: proxies
tags: proxies, exits, https, proxy
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on HTTPS proxies versus an HTTP forwarder beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: how-to-evaluate-a-proxy-provider, how-websites-detect-proxies, free-proxy-lists-are-a-trap, carrier-grade-nat-and-shared-exits, isp-versus-residential-proxies, mobile-versus-residential, proxies-in-an-antidetect-browser, mobile-asn-on-a-desktop-browser
---

Providers write `https://user:pass@host:port` and operators hear TLS all the way to the proxy. Those are different products. MaskWright parses `https` as a type and treats it as an HTTP forwarder. TLS-to-proxy is not implemented. This page exists so nobody writes "end-to-end TLS to the proxy" on a client report we cannot back.

[Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is the pillar. The rest of the cluster lives under [Proxies](/blog/proxies). Authorized work only.

## Three things the word HTTPS can mean

| Meaning | What actually happens | In MaskWright 0.1? |
| --- | --- | --- |
| HTTPS to the origin | CONNECT to host:443, then TLS to the site | Yes. Normal HTTP forwarder path |
| TLS to the proxy | TLS session to the proxy process first | No. Not implemented |
| A scheme in a URL | Dashboard printed `https://` | Parsed, then used as HTTP forwarder |

**HTTPS to the origin.** The browser opens `CONNECT host:443` through an HTTP proxy, then speaks TLS to the site. The proxy sees the destination host. It should not see the payload if the tunnel is honest. This is the normal web path through an HTTP forwarder. Most "use this proxy for HTTPS sites" marketing means this.

**TLS to the proxy.** The browser opens a TLS session to the proxy process first, then asks that encrypted channel to open the origin. Credentials and CONNECT sit inside that first TLS. This is what some enterprise and "HTTPS proxy" products actually are. We do not implement it.

**A scheme in a URL.** `https://` on a proxy string is often just how the dashboard printed the line. Our parser accepts it and then uses an HTTP forwarder path. The scheme did not turn on TLS-to-proxy.

If you need the second product, this app is the wrong tool until the code says otherwise. I will not pretend a URL scheme is that product.

## What the code does

Types: `http`, `https`, `socks5`. `https` is documented in geo code as an HTTP forwarder. Chromium `--proxy-server` is `type://host:port` without embedded credentials. HTTP auth is an MV3 extension. SOCKS5 auth is the handshake.

Geo comments state TLS-to-proxy is not implemented. I treat that as a hard limit, not a coming soon I can sell. [Evaluate a provider](/blog/how-to-evaluate-a-proxy-provider) on the protocol they actually terminate, not the scheme in the docs screenshot.

SOCKS5 is a different honesty problem. It is not TLS-to-proxy either. It is a TCP tunnel. People reach for it when they want remote resolve or a non-HTTP handshake. It does not encrypt the hop to the proxy by itself. If the path to the SOCKS host is the open internet, the SOCKS handshake is on that path.

## What the site still sees

On the normal `CONNECT` path, the origin sees TLS from the browser. JA3 and JA4 follow the browser binary, not the proxy scheme. [How websites detect proxies](/blog/how-websites-detect-proxies) is lists, latency, leaks, neighbors. An `https://` paste does not remove you from a feed.

[ISP versus residential](/blog/isp-versus-residential-proxies) and [mobile versus residential](/blog/mobile-versus-residential) are exit types. They are not encryption modes. [CGNAT](/blog/carrier-grade-nat-and-shared-exits) still shares the address. A [mobile ASN on a desktop UA](/blog/mobile-asn-on-a-desktop-browser) is still a mismatch if you painted a phone.

[Free lists](/blog/free-proxy-lists-are-a-trap) that advertise HTTPS ports are still lists. A scheme will not wash them.

## What I write in the runbook

I write "HTTP forwarder" when the type is `http` or `https` in this app. I write "SOCKS5 handshake" when the type is `socks5`. I do not write "HTTPS proxy" without defining which of the three meanings I used.

I put credentials in the profile record. `profiles.json` is AES-256-GCM at rest. That encryption is the index on disk, not the hop to the proxy. The per-profile tree and cookie JSON are not encrypted by our code. TLS-to-origin is the browser's job. TLS-to-proxy is not ours.

Auth still has to match the handshake you actually have. HTTP 407 goes through the MV3 extension. A username sitting inside an `https://` URL does not become TLS-to-proxy auth. If geo returns the house IP, the line never attached. Check the exit before you open authorized work.

If a provider requires a real TLS-to-proxy client, I use whatever client they support for a test, and I do not attach that line to MaskWright and claim parity. A dashboard that only prints `https://` is not a protocol specification. Ask whether they terminate TLS on the proxy port, or whether they mean this forwarder is for HTTPS sites. Those answers diverge more often than the marketing does.

## FAQ

**I pasted `https://`. Am I using TLS to the proxy?**
No. We treat it as an HTTP forwarder.

**Does SOCKS5 encrypt the hop?**
Not by itself. It is a TCP tunnel.

**Will you add TLS-to-proxy later?**
Unknown. This page follows the code we audited. Until the code changes, do not write it in a client report.

Paste the line, treat `https` as a forwarder, check the exit, keep the profile honest. If you need TLS to the proxy process, wait for code, or use another client. Do not let the scheme do the lying.
