---
slug: proxy-auth-formats
title: Proxy username and password formats
metaTitle: Proxy username and password formats
metaDescription: host:port:user:pass and URL forms, plus HTTP auth versus a SOCKS5 handshake. A formats page so the line you bought actually attaches to the room.
excerpt: host:port:user:pass and URL forms, plus HTTP auth versus a SOCKS5 handshake. A formats page so the line you bought actually attaches to the room.
author: Sam Okonkwo
published: 2026-07-07
category: proxies
tags: proxies, exits, how-to, proxy, user
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on proxy username and password formats beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: proxies-in-an-antidetect-browser, dns-leaks-on-windows, rotating-proxies-break-logins, ipv6-leaks-we-still-see, sticky-sessions-and-why-they-matter, proxy-plus-cookies, geo-matching-proxy-to-fingerprint, what-we-refuse-to-log-about-proxies
---

The line you bought is a string. If the string is in the wrong shape, the profile uses the house path and you will not notice until a geo check returns your ISP. This page is formats. MaskWright parses `host:port`, `host:port:user:pass`, `user:pass@host:port`, and `type://...` for `http`, `https`, and `socks5`. HTTP auth and SOCKS5 auth are different plumbing. Get the paste right, then check the exit.

[Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is the pillar. The rest of the cluster lives under [Proxies](/blog/proxies). Authorized work only.

## Strings the parser accepts

| Form | Example shape | Watch out |
| --- | --- | --- |
| `host:port` | `1.2.3.4:8080` | No auth. Rare on a paid residential line |
| `host:port:user:pass` | Common dashboard paste | Fragile if user or pass contains colons |
| `user:pass@host:port` | Same fields, different order | Fragile if user or pass contains `@` |
| `type://user:pass@host:port` | `http://` / `https://` / `socks5://` | The form I prefer when the provider gives a URL |

`https` as a type is treated as an HTTP forwarder. TLS-to-proxy is not implemented. SOCKS4 is not in the type enum.

Chromium `--proxy-server` is built as `type://host:port` without embedded credentials. The password does not go on the command line. That is deliberate. HTTP auth is handled by a small MV3 extension that answers `onAuthRequired`. SOCKS5 username and password go in the SOCKS5 handshake. Firefox and Camoufox get `http_proxy`, `https_proxy`, and `MASKWRIGHT_PROXY_URL` in the launch environment.

If you paste credentials into a Windows system proxy field, you have attached the line to the whole box. Do not do that for a work profile. The line belongs to one profile.

## HTTP auth versus the SOCKS5 handshake

HTTP proxy auth is an HTTP 407 challenge. The browser (or the extension) resends with `Proxy-Authorization`. The MV3 extension exists because Chromium will not take user:pass inside `--proxy-server` the way operators wish it would.

SOCKS5 auth is a subnegotiation in the SOCKS handshake. Username and password are not an HTTP header. A provider that says "SOCKS5 with user/pass" needs the `socks5` type, not `http` with the same user.

Mixing those is the usual failure. TCP connect still succeeds. Geo returns the house. [Match the fingerprint to the exit](/blog/geo-matching-proxy-to-fingerprint) never gets a real country. I do not open the login.

The product connectivity check is TCP only. It does not validate that HTTP or SOCKS5 auth succeeded. Green port, wrong auth, house IP. Believe the geo lookup.

## Sticky and rotate live in the username

Many residential products encode session time in the username: a session id, a country, a lifetime in minutes. That is still "user" to the parser. It is not a second field in our UI. If you change the session id, you asked for a new exit. [Sticky sessions](/blog/sticky-sessions-and-why-they-matter) stay sticky only if the username stays put. [Rotating proxies break logins](/blog/rotating-proxies-break-logins) when the username rotates under a login.

Do not copy a sticky username from Brand A into Brand B. That is how two authorized profiles share a street and a reputation they did not mean to share. [A new exit does not clean old cookies](/blog/proxy-plus-cookies). A copied username does not either.

## Where the password lives

Proxy credentials are stored on the profile record inside `profiles.json`. That index is encrypted at rest with AES-256-GCM. Key material is `MASKWRIGHT_STORE_KEY` if you set it, otherwise a SHA-256 of a local string plus hostname and username. There is no separate secrets vault.

The per-profile Chromium directory is not encrypted by our code. Cookie import JSON is plaintext. We do not upload the password to a MaskWright server API in the code we audited. [What we refuse to log](/blog/what-we-refuse-to-log-about-proxies) is the diary policy. Provider templates keep credentials local.

Treat the string like a key. Do not paste it into Slack. Do not put it in a screenshot of the Cores panel. Do not mail `profiles.json` so a contractor can help.

## When the paste still fails

Whitespace and line breaks from a dashboard copy. A scheme of `socks5h://` or `https://` when you meant `socks5` or `http`. A country code in the wrong slot. IPv6 literals without brackets. A password with `#` or `@` inside a URL that you did not encode.

I fix the string, run geo, and only then start work. I do not debug auth by logging into the ads account to see if it loads.

[DNS leaks on Windows](/blog/dns-leaks-on-windows) and [IPv6 leaks](/blog/ipv6-leaks-we-still-see) are different failures. Auth can be perfect and the resolver still skips the proxy. Formats will not cure that. They will cure the boring case: the line never attached.

## FAQ

**Why did TCP succeed but geo show my house?**
Auth or scheme is wrong. TCP does not prove the handshake.

**Should I put the proxy on Windows?**
No. Attach it to one profile.

**Is `https://` TLS to the proxy?**
Not here. We treat it as an HTTP forwarder.

Paste a form the parser accepts, use the type you bought, keep credentials in the encrypted index, check the exit. That is the whole formats page.
