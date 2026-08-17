---
slug: how-to-use-a-proxy-server
title: How to use a proxy server in a profile
metaTitle: How to use a proxy server in a profile
metaDescription: Per-profile proxy setup, not a system-wide Windows change. Learn the fields, the check, and why the exit belongs to one room instead of the whole PC.
excerpt: Per-profile proxy setup, not a system-wide Windows change. Learn the fields, the check, and why the exit belongs to one room instead of the whole PC.
author: Sam Okonkwo
published: 2026-06-12
category: proxies
tags: proxies, exits, how-to, use, proxy
readingTime: 6
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on how to use a proxy server in a profile beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: socks5-versus-http-proxies, what-are-proxies, bring-your-own-proxy-ethic, proxies-in-an-antidetect-browser, checking-exit-ip-before-launch, isp-versus-residential-proxies, geo-matching-proxy-to-fingerprint, free-proxy-lists-are-a-trap
---

Attach the line to the profile, not to Windows. A system-wide proxy or a VPN wraps the whole PC. Two authorized logins then share a street even if they do not share cookies. The how-to in this cluster is per profile.

[What proxies are](/blog/what-are-proxies) is the noun. This page is the field. Authorized work only. A pasted string does not authorize a login you do not own.

The habit lives under [Proxies](/blog/proxies).

## What I paste

MaskWright accepts:

- `host:port`
- `host:port:user:pass`
- `user:pass@host:port`
- `http://...` or `socks5://...`

I pick the type on purpose. [SOCKS5 versus HTTP](/blog/socks5-versus-http-proxies) is the protocol note. The `https` type is an HTTP forwarder here. TLS-to-proxy is not implemented. Do not assume a padlock to the proxy.

Credentials land in the encrypted `profiles.json` index, not in a separate vault. Chromium user-data dirs still do not get that encryption.

Provider templates (IPRoyal, Smartproxy, Bright Data) are convenience strings. [Bring-your-own ethic](/blog/bring-your-own-proxy-ethic): we do not broker. [Free lists](/blog/free-proxy-lists-are-a-trap) stay out of the field.

## The check, and what it does not prove

The in-app check is TCP connect. It does not prove username and password worked. It does not prove the outbound IP is the city on the sales page.

[Check the exit IP before launch](/blog/checking-exit-ip-before-launch) is the real habit: open a lookup page through the launched profile. Compare country, ASN, and whether IPv6 still leaks around the proxy.

On launch, MaskWright may query ip-api.com through the proxy and align timezone, language, and geolocation. [Geo matching](/blog/geo-matching-proxy-to-fingerprint) is that sibling. The lookup leaves the machine.

| Step | Do this | Do not assume |
| --- | --- | --- |
| Paste | Type plus host plus auth | The template is an endorsement |
| TCP check | Useful smoke test | Auth succeeded |
| Launch | Let geo align run | ip-api.com is infallible |
| Page lookup | Confirm exit IP | WebRTC cannot leak |

## Per profile, not per PC

[Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is the hub. Personal Chrome should not inherit the client exit. A Windows proxy setting or a system VPN is how that happens.

[ISP versus residential](/blog/isp-versus-residential-proxies) is assignment type. Sticky time belongs with a login you keep. Rotating belongs with jobs that are not a login.

If two profiles need two countries, paste two lines. If they can share the house IP, leave the field empty. Empty is a valid setup.

## Failure modes I still see

Wrong type: SOCKS5 string pasted as HTTP. Auth 407 loops. DNS still resolving on the house resolver. IPv6 AAAA going around the proxy. Timezone still on the office clock because geo align was blocked.

Fix the line, then relaunch. Do not keep clicking through a mismatch and calling it fine.

Firefox and Camoufox get the proxy via env (`http_proxy`, `https_proxy`, `MASKWRIGHT_PROXY_URL`). If a Firefox profile ignores the field, check that path before you blame the provider.

## A setup I repeat without thinking

Empty proxy field on personal Chrome. SOCKS5 with sticky username on the ads profile. HTTP on a supplier portal that only documented HTTP. Same sitting, two strings, two profiles. I never set Windows Settings > Proxy. I never leave a system VPN on "to be safe."

After launch I check IPv6 and WebRTC on a lookup page. If the house IPv6 is still visible, I disable IPv6 on that adapter or fix the leak before I sign in. Geo align already ran. If the clock in the page is still the office, I relaunch. I do not work through a mismatch.

Firefox profiles: if the line is ignored, I remember env-based proxy and check Camoufox versus stock. Then I still do the lookup page. The green TCP badge is not the end of the how-to.

## FAQ

### Should I set a proxy in Windows settings too?

No. That wraps everything. Attach per profile.

### Why did the green check pass but the site still saw my house IP?

TCP connect is not a full proxy test. WebRTC, IPv6, or a failed auth fallback can leak. Check in a launched page.

### Can I use one proxy for every profile?

You can. Then every profile shares a street. That may be fine for one person at home. It is not isolation of exits.
