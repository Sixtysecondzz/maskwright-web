---
slug: ecommerce-accounts-on-one-pc
title: Ecommerce accounts on one PC
metaTitle: Ecommerce accounts on one PC, isolated
metaDescription: Storefront isolation on one PC. This pillar is authorized shop ops, not a 2024 dropshipping explainer about multiplying seller IDs. Local Windows notes only.
excerpt: Storefront isolation on one PC. This pillar is authorized shop ops, not a 2024 dropshipping explainer about multiplying seller IDs. Local Windows notes only.
author: Priya Nair
published: 2026-05-18
category: ecommerce
tags: ecommerce, isolation, dropshipping, multiple
readingTime: 10
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on ecommerce accounts on one PC beside a store admin tab kept apart from a supplier portal, photographed as a working operator setup.
related: marketplace-one-identity-rules, amazon-seller-central-isolation, shopify-multi-store-isolation, antidetect-browsers-for-dropshipping, customer-data-never-in-research, proxies-in-an-antidetect-browser, supplier-portals-vs-retail-admin, antidetect-browsers-for-amazon
---

A shop desk on one Windows PC is a pile of logins that already exist. Shopify admin. Seller Central. A supplier portal. A payout tab. A cold look at public listings. Those are ecommerce accounts. They are not a farm of extra seller IDs.

The useful caveat: the 2024 dropshipping explainers in this query treat an antidetect browser as a machine for multiplying marketplaces. This pillar does the opposite. Isolation is for storefronts you already have the right to run. If you searched for a create-unlimited-stores guide, this is the wrong page. [Marketplace one-identity rules](/blog/marketplace-one-identity-rules) are business facts. I will not write around them.

## What "ecommerce accounts on one PC" means here

It means more than one login you are allowed to open, and a reason those logins should not meet. A founder with a Shopify store and a supplier account. An operator with two legal entities, each with a storefront. A Seller Central login plus a research profile that must never see customer exports. A shipping addon that can print labels for Store A and must not appear in Store B.

It does not mean fifty costumes for one person. It does not mean a second Amazon identity invented overnight to dodge a performance metric. Extra seller IDs that exist only to dodge a marketplace rule are a terms problem before they are a browser problem.

[Antidetect browsers for dropshipping](/blog/antidetect-browsers-for-dropshipping) is the category commercial query. Ops live here. [Antidetect browsers for Amazon](/blog/antidetect-browsers-for-amazon) is the Amazon-shaped commercial query. Seller hygiene lives on [Amazon Seller Central isolation](/blog/amazon-seller-central-isolation).

MaskWright 0.1 is a local launcher on Windows 10 and 11 x64. No MaskWright account. No cloud sync. No team seats. No cloud phones. No Playwright product. Bring your own HTTP or SOCKS5. `profiles.json` is encrypted. Per-profile Chromium directories are not. Cookie import files are plaintext. Treat the folder as the login.

## Isolation is a folder, not a window title

A site persists the login in cookies first. It persists extras in localStorage. If two storefronts drink from the same Chromium `user-data-dir`, they are one session with two tab titles. A coherent fingerprint on a shared cookie store is still one session.

Chrome's built-in profiles are a weaker version of the same idea. They can be enough if you have one store and one personal life. They fail when a supplier portal, a retail admin, and a research look must not share extensions, downloads, or a leftover pixel.

I name profiles after the entity and the job: `acme-shopify-retail`, `acme-supplier`, `acme-research`. Not `store2`.

## The profile map I actually use

| Profile | Holds | Must not hold |
| --- | --- | --- |
| Retail admin | Orders, customers, theme, helpdesk | Supplier cost sheets, cold-look extensions, personal shopping |
| Supplier portal | Cost, stock, purchase orders | Customer tickets, store pixels, payout tabs |
| Entity money | Payouts, tax interviews, bank last-four | Research history, supplier catalogs, personal PayPal |
| Cold research | Public product pages, public ads libraries | Exports, tickets, logged-in store cookies |
| Ads (if separate) | Official ads UIs for that entity | Retail customer CSVs, supplier chat |

[Supplier portals versus retail admin](/blog/supplier-portals-vs-retail-admin) is the split most 2024 explainers skip. A factory login is not your storefront cookie store. Cost sheets do not belong next to customer tickets.

Payment and tax tabs stay in the entity profile. A research profile that once opened Stripe or a marketplace disbursement page is no longer cold. Treat that profile as burned for research and keep the look elsewhere.

[Customer data never belongs in research](/blog/customer-data-never-in-research). Order exports, subscriber lists, and refund screenshots are ops data. They never land in the cold folder. Chrome saves into the profile's download directory unless you change it. If you export customers and then "just look at a niche" in the same profile, the CSV is already on disk next to the research history.

## One identity is not one folder

Marketplaces often say one person or one company is one seller. That rule is about seller IDs, tax identity, and related accounts. It is not a command to mash every tab into one Chromium folder.

You can follow one-identity rules and still keep supplier, retail, and research apart. You cannot follow one-identity rules by inventing a second Seller Central login in a new profile paint. [Amazon Seller Central isolation](/blog/amazon-seller-central-isolation) is hygiene for a store you already have the right to run. It is not a buy-account chapter.

[Shopify multi-store isolation](/blog/shopify-multi-store-isolation) is staff accounts and store profiles for stores you own or were invited to. Official staff access first. Cookie swaps never.

Etsy, eBay, and Airbnb each have their own one-identity or one-account language. The sibling pages stay on authorized shops and hosts. They do not teach stealth identities.

## Templates, not live sessions

When a second authorized store needs a similar locale, core, and empty cookie store, copy the settings. Do not clone the cookie that is already signed into admin.

A template is: browser core, locale shape, optional HTTP or SOCKS5 field, unpacked extensions that belong to that kind of work, empty downloads. A live session is: cookies, localStorage, logged-in admin, leftover CSVs.

Cloning a live session is sharing the login. That is how a contractor gets the founder's session. Give them a staff role instead. Let them sign in on their own Windows box in their own empty profile.

Cookie import and export exist in the product. Netscape or JSON in, Netscape out. Those files are plaintext on disk. They are for moving a session you own, between machines you control. They are not a VA onboarding kit.

If you duplicate a profile folder in Explorer, you duplicated the Chromium user-data directory. That is the live session. I do not recommend it.

## Extensions stay in the store that owns them

Unpacked extensions copy into that profile's tree and launch with `--load-extension`. A shipping addon that can pull address books belongs in Store A's retail profile. It does not belong in Store B. It does not belong in research.

That is a product fact. It is not permission to cloak a landing page or to inject coupons on someone else's checkout. Affiliate cloaking kits are refused here.

If an extension wants `<all_urls>` and you do not understand it, it does not get into the retail profile.

## Proxies are exits, not new sellers

Bring your own HTTP or SOCKS5 if the store needs an exit that matches where the business already operates. Language and timezone can follow the exit on launch (the app probes ip-api.com through that proxy). MaskWright does not broker traffic and does not bundle a residential pack. HTTPS-as-TLS-to-proxy is not implemented. Treat that as a provider question.

A proxy is not a new seller ID. A rotating exit under a live admin login is how you get kicked out of a session you still need. Sticky exits belong with logins. Research can use a different exit if the look must not share the store's line. [Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is the mechanics sibling. This pillar only needs the ethic: an exit you brought for a job you were already allowed to do.

A household IP is not a reason to mash folders. Same last mile is not the same cookie store.

A system VPN around the whole PC is not a per-profile exit. Split folders first.

## What the 2024 explainers get wrong

They start from a blocked storefront and work backward to a costume. They sell extra Amazon accounts as a growth tactic. They mix supplier chat, retail admin, and Facebook ads in one "ecom profile." They treat customer CSVs as research material. They mail a user-data folder to a VA in another country.

I start from a job and ask whether a door exists. Staff accounts, official roles, official APIs for catalog sync, official exports. Separate profiles for the leftovers that must not meet. A stop when the marketplace forbids a second identity.

Dropshipping as a fulfillment method is still a real desk. You can buy from a supplier you are allowed to buy from and sell from a store you are allowed to run. That desk still needs the profile map. It does not need a multiply-seller-ID guide.

## Contractors without a shared vault

There are no team seats in this app. That is by design. Platforms already have roles. A shared vault is a cookie store with extra people.

A freelancer who needs to fulfill orders gets a Shopify staff account, a marketplace user, or a helpdesk seat. They install the app on their Windows box if they need profiles. They do not receive your `maskwright-data`. Their fingerprint seed will be theirs. That is correct. You wanted a person with access, not a clone of your device.

A shared Windows login on the spare-room tower is a team seat you invented. Everyone with that login holds every session. Create Windows users, or accept that the tower is one operator.

2FA stays on a device you control. I will not write how to share a cloud OTP.

## Local Windows habits that actually matter

Point downloads at per-profile folders, or move exports out immediately into an ops share that research never mounts. Cloud-synced Desktop folders make the split fake if both profiles write there.

Close retail when the fulfillment run is done. Do not leave Refund open on a shared tower. Do not leave a payout tab open in a cafe.

If SmartScreen yelled at an unsigned installer, that is a Windows trust note. It is not a reason to run Seller Central in a rented cloud browser. A rented process holds the store on someone else's disk. [Compare local versus cloud](/compare).

Bulk start can open several profiles you already run. It is sequential. It is not a farm button.

Pick a core on purpose. Chromium 131 when the custom core is installed, otherwise the system Chrome or Edge fallback, or Firefox/Camoufox if you installed that core. Do not bounce cores inside one folder and pretend it is the same browser.

## A short desk checklist

1. List the logins you are allowed to open. If you cannot name the entity, stop.
2. Create one empty profile per job that must not share cookies.
3. Set locale to the market that job actually serves. Attach a proxy only if that entity already uses one.
4. Install only the extensions that job needs.
5. Sign in through the official page. Complete 2FA on a device you hold.
6. Export customer data into ops storage, not into the research profile.
7. Close the profile when the run is done.

I use retail to sell. I use supplier to buy. I use the entity profile to get paid and to file. I use the cold profile to look. I do not invent a third seller to skip a metric.

## FAQ

### Can two legal entities share one MaskWright profile if I am careful?

I do not. Tabs share cookies. Staff who see Entity A's refunds should not inherit Entity B's supplier chat because someone opened both in one window.

### Do I need a residential proxy for every store?

No. Attach an exit only if that business already operates through one. A household IP with a clean folder is a normal starting point for work you are allowed to do from that house.

### Is this the same as Chrome profiles?

Same idea, more control: per-profile proxy field, chosen core, fingerprint that stays with that folder. Chrome profiles still beat one mixed everyday window.

### Will isolation hide two Amazon seller accounts as unrelated?

I will not sell that. Amazon's related-account rules are about identity, tax, and activity. Follow [marketplace one-identity rules](/blog/marketplace-one-identity-rules). Isolation keeps supplier, retail, and research from mixing. It is not a second seller kit.

### Can I clone Store A's folder to open Store B faster?

Clone settings, not the live session. A copied `user-data-dir` is Store A's login. Create a new empty profile. Sign in as Store B through the official door.

The [Ecommerce](/blog/ecommerce) hub holds the platform notes. This pillar is the filing system those notes hang on: authorized shops, separate folders, no farm of IDs.

[Download MaskWright](/download) if you want that launcher on Windows 10 or 11.
