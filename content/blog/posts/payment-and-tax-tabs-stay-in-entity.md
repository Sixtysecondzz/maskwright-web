---
slug: payment-and-tax-tabs-stay-in-entity
title: Payment and tax tabs stay in the entity
metaTitle: Payment and tax tabs stay in the entity
metaDescription: Payout and tax tabs stay in the legal entity room. This privacy how-to keeps money surfaces out of research and supplier profiles. Local Windows notes only.
excerpt: Payout and tax tabs stay in the legal entity room. This privacy how-to keeps money surfaces out of research and supplier profiles. Local Windows notes only.
author: Jordan Hale
published: 2026-07-29
category: ecommerce
tags: ecommerce, isolation, how-to, store, payout
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on payment and tax tabs stay in the entity beside a store admin tab kept apart from a supplier portal, photographed as a working operator setup.
related: shipping-extensions-per-store, product-research-in-a-cold-room, customer-data-never-in-research, amazon-seller-central-isolation, clone-a-store-stencil-not-a-session, supplier-portals-vs-retail-admin, marketplace-one-identity-rules, ecommerce-accounts-on-one-pc
---

Tax forms and payout ledgers belong in the legal entity’s browser profile, not in the tab you use to browse products. Money surfaces are not research. They are not a supplier catalog. They are the bank, the 1099, the VAT return, the Stripe balance, the marketplace disbursement page. Those tabs stay with the entity that owns the money.

Local Windows. Stores you are allowed to run. We will not write a second invented seller ID.

## What counts as a money tab

Stripe, PayPal business, Shopify Payments, Amazon payout, tax interview pages, EIN letters, accountant portals, invoice hosts. If a screenshot of the tab would be a problem in a contractor’s Slack, it is a money tab.

[Amazon Seller Central isolation](/blog/amazon-seller-central-isolation) is the marketplace version. [Ecommerce accounts on one PC](/blog/ecommerce-accounts-on-one-pc) is the folder rule. [Marketplace one-identity rules](/blog/marketplace-one-identity-rules) are the platform’s rules, not ours. Isolation does not create a second legal seller.

## Keep them out of research and supplier profiles

[Product research in a cold profile](/blog/product-research-in-a-cold-room) should have no payout cookies. [Supplier portals versus retail admin](/blog/supplier-portals-vs-retail-admin) is a second split: AliExpress seller or a brand portal is not the store’s Stripe. [Shipping extensions per store](/blog/shipping-extensions-per-store) belong with the store admin, not with the cold profile that was comparing freight.

[Customer data never in research](/blog/customer-data-never-in-research) is the sibling wall. Money tabs and customer CSVs are both ops. [Clone a stencil, not a session](/blog/clone-a-store-stencil-not-a-session) if you needed a new storefront profile. A stencil should not include Stripe.

## Disk facts

MaskWright: one user-data dir per profile. `profiles.json` AES-256-GCM holds proxy secrets. The Chromium tree that holds Stripe cookies is not encrypted by our code. Back up the entity profile like you back up a password vault. Do not copy it onto a research laptop “just for the day.”

| Profile | Stripe / tax | Supplier portal | Cold SERP |
| --- | --- | --- | --- |
| Legal entity / store admin | Yes | No | No |
| Supplier | No | Yes | No |
| Research | No | No | Yes |

A week that goes wrong looks like this. You export a 1099-K from PayPal in the research profile because that window was already open. The PDF lands in that profile’s Downloads. Next day you screen-share research with a contractor. The picker shows the tax PDF. That is the leak. Put PayPal business, Stripe, and the tax agency tabs in the entity profile only. Point that profile’s Downloads at an ops folder the contractor never sees.

I also do not save banking passwords in the research Chromium. MaskWright does not encrypt that tree. BitLocker on the volume plus a dedicated entity profile is the control. [Amazon Seller Central isolation](/blog/amazon-seller-central-isolation) follows the same money rule: payout pages stay with the seller login you are allowed to hold.

If an accountant needs the PDF, export on purpose from the entity profile to a shared drive the company already uses. Do not zip `maskwright-data`.

Pushback I hear: “the accountant is family.” Family still does not need a live Stripe cookie in a research window. Export the PDF on purpose. Keep the entity profile closed when you are shopping products. Money tabs are boring until they are in a screenshot they should never have seen.

## FAQ

### What if the accountant needs access?

Invite them in the money product (Stripe user, QuickBooks, a shared drive of PDFs you export on purpose). Do not email the user-data folder.

### Can I open payouts in incognito inside the research profile?

Incognito is still that profile’s process family, and people forget and save the login. Use the entity profile.

### Does MaskWright hide tax pages from extensions?

No. Load few extensions in the entity profile. [Download MaskWright](/download) and keep money in one named folder.

### Can I keep Stripe in a password manager only?

Yes, and you still should not open the Stripe tab from the research profile. The password manager is not the cookie store. Once you log in, the session lives in that Chromium folder.

The [Ecommerce](/blog/ecommerce) hub is store isolation. Payout and tax tabs stay with the entity. Research can look at products without looking at the bank.
