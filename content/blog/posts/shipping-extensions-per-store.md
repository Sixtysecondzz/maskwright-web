---
slug: shipping-extensions-per-store
title: Shipping extensions per store
metaTitle: Shipping extensions per store for authorized stores
metaDescription: Unpacked extensions are per profile. Product supports that. This how-to keeps a shipping addon inside the store that owns the labels. Local Windows notes only.
excerpt: Unpacked extensions are per profile. Product supports that. This how-to keeps a shipping addon inside the store that owns the labels. Local Windows notes only.
author: Priya Nair
published: 2026-08-07
category: ecommerce
tags: ecommerce, isolation, how-to, shipping, addon
readingTime: 4
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on shipping extensions per store beside a store admin tab kept apart from a supplier portal, photographed as a working operator setup.
related: ecommerce-accounts-on-one-pc, customer-data-never-in-research, payment-and-tax-tabs-stay-in-entity, clone-a-store-stencil-not-a-session, product-research-in-a-cold-room, marketplace-one-identity-rules, amazon-seller-central-isolation, etsy-shop-isolation
---

A shipping addon can see addresses. That is enough reason to keep it inside the store that owns the labels. MaskWright loads unpacked extensions per profile. I use that for isolation, not for a shared toolbar that follows me into research.

Local Windows notes only. Authorized stores only.

## What the product actually loads

Unpacked extensions live under that profile's directory, copy into `.maskwright-user-ext/`, and launch with `--load-extension`. Built-in spoof and proxy-auth extensions are separate. Your shipping addon is yours, in that folder only.

[Ecommerce accounts on one PC](/blog/ecommerce-accounts-on-one-pc) is the pillar. Store A retail gets Store A's label tool. Store B does not. Research never gets it. [Product research in a cold room](/blog/product-research-in-a-cold-room). [Customer data never belongs in research](/blog/customer-data-never-in-research).

`profiles.json` is encrypted. The extension files and Chromium tree are not. Treat the folder as sensitive.

## Why a shared toolbar is a bad idea

Address books, default warehouses, API keys saved in the extension, print history. One addon in two stores is how Store B prints Store A's customer. One addon in research is how a "quick look" still has last week's labels on disk.

[Clone a store stencil, not a session](/blog/clone-a-store-stencil-not-a-session): you can copy the idea of "this job uses ShipStation," not the live extension state from a signed-in store.

[Amazon Seller Central isolation](/blog/amazon-seller-central-isolation) and [Etsy shop isolation](/blog/etsy-shop-isolation) both assume per-store addons. [Marketplace one-identity rules](/blog/marketplace-one-identity-rules) still apply. An extra extension is not an extra seller ID.

Payment UIs stay out of the shipping profile if they are a different login. [Payment and tax tabs stay in the entity](/blog/payment-and-tax-tabs-stay-in-entity).

| Profile | Shipping addon |
| --- | --- |
| Store A retail | Store A's unpacked extension |
| Store B retail | Store B's copy, configured for B |
| Research | None |
| Supplier portal | None, unless the factory issued a portal tool that cannot see your customers |

## How I install one

Open the store's profile folder. Place the unpacked extension where MaskWright expects it (`extensions/<name>/manifest.json`). Launch that profile only. Sign into the shipping vendor as the store's user. Do not sync that vendor login into Chrome's everyday profile.

If the vendor offers official staff seats, use those for contractors. Do not mail the extension plus cookies.

## On a real Windows desk

Store A's addon sits in A's `extensions/` tree. I launch A, sign into the shipping vendor as A's user, print A's labels. Store B never sees that tree. If the vendor offers two seats, B gets B's seat in B's profile.

API keys in the extension's options page are secrets. They live in an unencrypted Chromium tree. I do not zip the profile to send to a printer contractor. They get a vendor seat.

Print history and cached PDFs sit on disk. That is customer data. It does not belong in research and does not belong in a backup I mail. Back up the store you understand. Treat this folder as sensitive.

If the addon breaks after a Chromium bump, I fix A, not by copying B's live session. Fresh install in the empty-enough admin profile I already use for A.

## FAQ

### Can I use the Chrome Web Store version instead of unpacked?

If you sideload unpacked, that is what MaskWright's loader is built for. A store-installed extension in system Chrome is a different path. Do not mix "it is on the machine" with "it is in this profile."

### The addon wants `<all_urls>`.

Then it can read research pages too if you install it there. I still keep it out of research. If I do not understand the permission, it does not go into retail either.

### Clone the retail profile to copy the addon?

You will copy the session. Install the addon fresh in an empty Store B profile. Sign in as Store B.

### Cloud browser with the addon?

The vendor then sees addresses. I keep label printing on local disk. [Compare local versus cloud](/compare).

### Can one ShipStation login serve two MaskWright profiles?

The vendor login is still one identity. Two profiles with one vendor user can still mix address books if the vendor's cloud is shared. Prefer two vendor seats plus two folders when stores must not share labels.

Install the shipping tool in the store that owns the addresses. Leave research empty of it. Invite staff through the vendor, not through a zip.

I skip copying live extension state from A to B, `<all_urls>` helpers I do not understand, and mailing the profile to a printer contractor. API keys in options pages sit on disk unencrypted by our code. Treat the folder as sensitive.

More notes sit under [Ecommerce](/blog/ecommerce). [Download MaskWright](/download) for the Windows launcher.
