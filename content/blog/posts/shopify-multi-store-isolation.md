---
slug: shopify-multi-store-isolation
title: Shopify multi-store isolation
metaTitle: Shopify multi-store isolation
metaDescription: Staff accounts and store isolation. No email scrape. Keep each Shopify store in its own room, and use official staff access instead of cookie swaps.
excerpt: Staff accounts and store isolation. No email scrape. Keep each Shopify store in its own room, and use official staff access instead of cookie swaps.
author: Priya Nair
published: 2026-06-11
category: ecommerce
tags: ecommerce, isolation, shopify, multiple
readingTime: 6
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on Shopify multi-store isolation beside a store admin tab kept apart from a supplier portal, photographed as a working operator setup.
related: ecommerce-accounts-on-one-pc, airbnb-listing-isolation, ebay-seller-isolation, affiliate-dashboard-isolation, etsy-shop-isolation, affiliate-self-clicks-are-fraud, marketplace-one-identity-rules, affiliate-research-rooms
---

I keep each Shopify store I own or was invited to in its own local profile. Staff accounts first. Cookie swaps never. I will not write an email scrape of your customers.

The useful caveat: Shopify is often fine with multiple stores you own. That is different from marketplace one-identity rules. Still split the folders so Store A's theme app and Store B's address book do not meet. [Ecommerce accounts on one PC](/blog/ecommerce-accounts-on-one-pc).

## Staff, not dumps

Invite staff in Shopify admin. They sign in as themselves on their own Windows PC, empty profile. Do not export cookies. Do not zip `maskwright-data`.

[Marketplace one-identity rules](/blog/marketplace-one-identity-rules) still matter if you also sell on Amazon or eBay from the same desk. Those platforms are not Shopify. [eBay seller isolation](/blog/ebay-seller-isolation). [Etsy shop isolation](/blog/etsy-shop-isolation). [Airbnb listing isolation](/blog/airbnb-listing-isolation) if you host too.

Affiliate work is another job. [Affiliate dashboard isolation](/blog/affiliate-dashboard-isolation). [Affiliate research rooms](/blog/affiliate-research-rooms). [Affiliate self-clicks are fraud](/blog/affiliate-self-clicks-are-fraud). Do not click your own Shopify store's affiliate links from the admin profile.

MaskWright 0.1: Windows 10/11, per-profile `user-data-dir`. `profiles.json` is encrypted. Chromium user data is not. Unpacked apps and shipping extensions stay per store. Bring your own HTTP or SOCKS5 if that store already uses an exit.

| Store A profile | Store B profile |
| --- | --- |
| Admin, apps, labels for A | Admin, apps, labels for B |
| A's staff login | B's staff login (or owner) |
| A's optional proxy | B's optional proxy |

## How I set a second store

New empty profile. Official admin URL. Sign in. Install only that store's apps. Do not clone A's live folder. Theme files and CSVs live in ops storage, not in a research profile.

## How I run two Shopify stores on Windows

Store A is `acme-a-admin`. Store B is `acme-b-admin`. Each has its own apps, its own shipping extension tree, its own download tray. I do not use Shopify's account switcher as a substitute for two `user-data-dir` folders when apps hold API keys.

Staff invites happen in Shopify. The freelancer installs MaskWright on their Windows 10/11 box, creates empty, signs in as the staff user I created. They never receive my store root. Their fingerprint seed is theirs. That is correct.

Theme files and customer CSVs live in ops or in Shopify. If I export customers for a ESP, that file does not go into a cold research profile and does not go into Store B. Klaviyo and similar get official integrations when I can.

Affiliate dashboards and self-click temptation stay out. I do not preview my own tagged URLs from admin.

Geo check per store if each entity has its own exit. Do not paste A's proxy into B because the form remembered it. Household IP is allowed when the company allows work from that house.

Close admin when the run is done. Do not leave refunds open in a cafe. Partner accounts with many stores still get many folders if logins must not share. MaskWright has no seats to "share the agency locker."

## FAQ

### Shopify account switcher in one Chrome profile?

Convenient, messy. Two stores I care about get two MaskWright folders so apps and downloads do not cross.

### Partner or agency with ten stores?

Ten folders if ten logins must not share. Use Shopify organizations and staff as Shopify designed. MaskWright has no team seats. Each person uses their own PC.

### Customer export for Klaviyo?

Export into ops, not into a cold research profile. Use official integrations.

### Cloud admin?

The vendor holds the store. I keep Shopify admin local. [Compare local versus cloud](/compare).

### Can I use Shopify's collaborator request instead of staff?

Yes, that is still an official door. The collaborator signs in as themselves in an empty profile. It is still not a cookie dump.

One store, one folder, official staff. No cookie swaps. No customer scrapes.

I skip cloning A's live admin into B, tagged affiliate clicks from admin, and putting customer CSVs in research. I geo-check per store when exits differ. I close refunds when I stand up. Partner agencies still get many folders if logins must not share.

More notes sit under [Ecommerce](/blog/ecommerce). [Download MaskWright](/download) for the Windows launcher.
