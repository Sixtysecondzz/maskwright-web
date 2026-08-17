---
slug: clone-a-store-stencil-not-a-session
title: Clone a store stencil, not a session
metaTitle: Clone a store stencil, not a session
metaDescription: Store stencil, not a live seller session. Inherit locale and extensions. Do not clone the cookie jar that is already signed into Seller Central.
excerpt: Store stencil, not a live seller session. Inherit locale and extensions. Do not clone the cookie jar that is already signed into Seller Central.
author: Priya Nair
published: 2026-05-30
category: ecommerce
tags: ecommerce, isolation, how-to, clone
readingTime: 6
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on clone a store stencil, not a session beside a store admin tab kept apart from a supplier portal, photographed as a working operator setup.
related: ecommerce-accounts-on-one-pc, marketplace-one-identity-rules, customer-data-never-in-research, etsy-shop-isolation, shipping-extensions-per-store, ebay-seller-isolation, payment-and-tax-tabs-stay-in-entity, shopify-multi-store-isolation
---

When I open a second authorized store, I copy settings, not the live admin session. Locale, core, the kind of shipping addon that job uses. Not the cookies that are already signed into Seller Central or Shopify.

The useful caveat: duplicating the profile folder in Explorer copies the Chromium `user-data-dir`. That is the login. [Ecommerce accounts on one PC](/blog/ecommerce-accounts-on-one-pc) is the pillar. This page is the copy rule for shops.

## What a store template includes

Browser core you will keep using. Language and timezone for that market. Optional HTTP or SOCKS5 that entity already pays for. A note that names the legal entity. A reminder to install [shipping extensions per store](/blog/shipping-extensions-per-store) fresh, not copied from a live tree.

What it excludes: cookies, localStorage, IndexedDB, download trays, customer CSVs. [Customer data never belongs in research](/blog/customer-data-never-in-research), and it does not belong in a template either. [Payment and tax tabs](/blog/payment-and-tax-tabs-stay-in-entity) stay off the template.

MaskWright cookie import is Netscape or JSON, plaintext on disk. That is for moving a session you own between machines you control. It is not how Store B starts.

## Second store is not second identity theater

[Marketplace one-identity rules](/blog/marketplace-one-identity-rules) still apply. A new empty profile is for a store you already have a right to run: a second Shopify you own, a second Etsy shop Etsy already allows, a second eBay store eBay already issued. [Shopify multi-store isolation](/blog/shopify-multi-store-isolation). [Etsy shop isolation](/blog/etsy-shop-isolation). [eBay seller isolation](/blog/ebay-seller-isolation).

I will not write "clone Seller Central so Amazon thinks you are new."

| Copy | Do not copy |
| --- | --- |
| Core, locale, proxy field for that entity | Live `user-data-dir` |
| List of addons that job needs | Configured addon state from Store A |
| Empty downloads | Order CSVs, label history |

## How I actually do it

1. Create a new profile. Name it after Store B.
2. Set core and locale. Attach Store B's exit if it has one, not Store A's.
3. Install addons unpacked into B's folder. Sign into the shipping vendor as B.
4. Launch. Sign into admin through the official page. 2FA on a device I hold.
5. Do not import A's cookies.

Contractors get staff roles, not a cloned folder.

## On a real Windows desk

I keep a text note of the template: Chromium, en-US, no proxy (or this host:port), shipping vendor name. I do not keep a cloned folder as the template. Notes are the template.

Store B gets a new uuid. I type the settings. I install the addon fresh. I sign into Shopify or Seller Central as B. If 2FA asks, I use B's device, not A's.

Explorer copy of `profiles/<id>` is the failure mode I still see. People do it because it is fast. It copies cookies, IndexedDB, and last week's CSVs. Then they "delete cookies" and miss a store.

Downloads for B start empty. I point them at `ops/b/` if I remember. Cloud Desktop folders undo the split if A and B both save to Desktop.

## FAQ

### Can I export cookies from A, edit the domain, and import into B?

No. That is still A's session logic, and it is a great way to mix stores. Official sign-in on B.

### Same shipping vendor for both stores?

Two vendor logins or two vendor seats, two extension configs, two profiles. One addon user in two stores is how labels cross.

### Firefox for B and Chromium for A?

Pick a core per profile and keep it. Do not bounce.

### Is this faster than Chrome profiles?

The win is not speed. The win is not accidentally bringing A's cookies and A's address book into B.

### Can I keep a "golden" folder on a USB stick as the stencil?

A folder on a stick is a live session if it was ever signed in. Keep a text note of settings. Create a new uuid each time. Sign in through the official door.

Clone the settings. Sign in as the real second store. Never clone the key.

I skip Explorer copies of `profiles/<id>`, cookie edits across stores, and sharing one shipping-vendor login as a shortcut. I install addons fresh. I point downloads at per-store ops folders when I remember. Cloud Desktop undoes the split if both stores save there.

More notes sit under [Ecommerce](/blog/ecommerce). [Download MaskWright](/download) for the Windows launcher.
