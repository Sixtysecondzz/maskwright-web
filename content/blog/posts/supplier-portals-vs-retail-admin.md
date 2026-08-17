---
slug: supplier-portals-vs-retail-admin
title: Supplier portals versus retail admin
metaTitle: Supplier portals versus retail admin
metaDescription: Supplier login versus retail admin. They do not split these rooms. This how-to does, because a factory portal is not your storefront cookie jar.
excerpt: Supplier login versus retail admin. They do not split these rooms. This how-to does, because a factory portal is not your storefront cookie jar.
author: Priya Nair
published: 2026-05-21
category: ecommerce
tags: ecommerce, isolation, how-to, supplier, portal
readingTime: 6
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on supplier portals versus retail admin beside a store admin tab kept apart from a supplier portal, photographed as a working operator setup.
related: amazon-seller-central-isolation, ecommerce-accounts-on-one-pc, product-research-in-a-cold-room, antidetect-browsers-for-amazon, payment-and-tax-tabs-stay-in-entity, paypal-business-versus-personal-rooms, shipping-extensions-per-store, affiliate-extensions-we-refuse
---

A supplier portal is not your storefront. I keep them in different local profiles so cost sheets, factory chat, and purchase orders never sit next to customer tickets and theme editors.

The useful caveat: most "ecom setup" posts mash AliExpress-style portals, Shopify admin, and Amazon into one window. That is convenient until a shipping extension reads the wrong address book. [Ecommerce accounts on one PC](/blog/ecommerce-accounts-on-one-pc) is the pillar this split hangs on.

## What each profile is for

Retail admin: orders, customers, refunds, theme, helpdesk. Shopify, Seller Central, Etsy shop manager. [Amazon Seller Central isolation](/blog/amazon-seller-central-isolation) if Amazon is the storefront.

Supplier portal: cost, MOQ, stock, production chat. The factory does not need your pixel helper.

Money: payouts and tax interviews stay in the entity profile. [Payment and tax tabs stay in the entity](/blog/payment-and-tax-tabs-stay-in-entity). [PayPal business versus personal](/blog/paypal-business-versus-personal-rooms).

Research: public listings in a profile that has never held either login. [Product research in a cold room](/blog/product-research-in-a-cold-room).

MaskWright 0.1: Windows 10/11, per-profile `user-data-dir`. `profiles.json` is encrypted. Chromium user data is not. No seats. Bring your own HTTP or SOCKS5 if that entity already uses an exit.

## Extensions follow the job

[Shipping extensions per store](/blog/shipping-extensions-per-store) live in retail, not in the factory portal. Affiliate extras we refuse stay refused. [Affiliate extensions we refuse](/blog/affiliate-extensions-we-refuse).

A supplier Chrome addon that injects costs into every page does not belong in retail. A retail pixel does not belong in the factory tab.

| Retail profile | Supplier profile |
| --- | --- |
| Store admin, customers, labels | Cost, PO, factory chat |
| Shipping addons for that store | Catalog tools the factory issued |
| Store pixels | No store pixels |

## Amazon-shaped commercial queries

[Antidetect browsers for Amazon](/blog/antidetect-browsers-for-amazon) is the category answer. It still points back here: authorized entity, split jobs. A supplier login is not a second Seller Central identity.

## How I set the two profiles

Two empty profiles. Official sign-in on each. 2FA on a device I hold. Locale matches the market each job actually uses. Do not clone the retail folder to "save time" on the supplier. That copies customers onto the factory cookie store.

Downloads: supplier invoices go to an ops folder, not into retail's tray, and never into research.

## On a real Windows desk

Retail is `acme-shopify`. Supplier is `acme-factory`. I do not keep both running "so I can copy SKUs." I copy SKUs into a spreadsheet in ops, then I type them where they belong. Clipboard plus two live sessions is how a customer email lands in factory chat.

Cost PDFs from the factory go to finance storage. They do not stay in the retail download tray next to order CSVs. Order CSVs never go into the factory profile. If I need to tell the factory a quantity, I send a quantity, not a customer list.

Shipping addons live in retail. If the factory issued a portal Chrome tool, it lives in supplier. I do not install both in one folder because "they are both ecom."

Geo check per profile when proxies exist. The factory in Shenzhen and the store in Ohio should not share an exit just because the form remembered the string. Household IP is fine for the store if that is where I am allowed to operate.

## FAQ

### The supplier is also my 3PL and they gave me a combined dashboard.

If it is one official login, it may have to be one profile. If they issued two portals, two folders. I still keep customer CSVs out of research.

### Can I keep supplier bookmarks in retail?

Bookmarks follow the profile. Put factory bookmarks in the factory profile.

### Do I need a proxy on the supplier profile?

Only if that relationship already uses one (some factories geo-restrict admin). MaskWright does not bundle exits.

### Dropshipping: is the supplier the "real" store?

No. You still run a storefront you are allowed to run, and you buy from a supplier you are allowed to buy from. Two jobs. Two folders. Not two secret Amazon identities.

Keep factory cookies out of retail. Keep customers out of the factory profile. Keep both out of research.

More notes sit under [Ecommerce](/blog/ecommerce). [Download MaskWright](/download) for the Windows launcher.
