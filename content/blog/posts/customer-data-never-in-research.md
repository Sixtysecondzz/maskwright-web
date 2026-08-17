---
slug: customer-data-never-in-research
title: Customer data never belongs in research
metaTitle: Customer data never belongs in research
metaDescription: Customer exports never land in a research profile. This privacy how-to is a hard wall between ops data and the cold room you use to look. Authorized work only.
excerpt: Customer exports never land in a research profile. This privacy how-to is a hard wall between ops data and the cold room you use to look. Authorized work only.
author: Jordan Hale
published: 2026-07-17
category: ecommerce
tags: ecommerce, isolation, how-to, data
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on customer data never belongs in research beside a store admin tab kept apart from a supplier portal, photographed as a working operator setup.
related: ecommerce-accounts-on-one-pc, clone-a-store-stencil-not-a-session, shipping-extensions-per-store, marketplace-one-identity-rules, payment-and-tax-tabs-stay-in-entity, etsy-shop-isolation, product-research-in-a-cold-room, ebay-seller-isolation
---

A CSV of customers is not a mood board. Exports of emails, addresses, order notes, and support tickets are ops data. They never land in a research profile. The cold window you use to look at products and ads should not autocomplete a buyer’s name from last week’s download.

This is a hard wall. Work you are allowed to do. We will not scrape inboxes. We will not write a “find emails on Shopify stores” note.

## What counts as customer data

Order exports, Klaviyo lists, Zendesk tickets, live chat transcripts, refund screenshots with names, shipping labels, VAT IDs on invoices. If it identifies a person who bought from you, it is ops. It stays in the store admin profile and in the systems that already hold it (Shopify, Amazon, your ESP).

[Ecommerce accounts on one PC](/blog/ecommerce-accounts-on-one-pc) is the folder map. [Etsy](/blog/etsy-shop-isolation) and [eBay](/blog/ebay-seller-isolation) get the same wall. [Marketplace identity rules](/blog/marketplace-one-identity-rules) are still the platform’s. Isolation is not a second seller, and it is not a license to copy buyers into a research disk.

## Where files actually leak

Chromium’s download tray. A shared `Downloads` folder. Slack. A research profile that was cloned from ops. [Clone a stencil, not a session](/blog/clone-a-store-stencil-not-a-session). [Shipping extensions](/blog/shipping-extensions-per-store) can also cache labels. Keep them on the store profile.

[Product research in a cold profile](/blog/product-research-in-a-cold-room) should be products, ads libraries, public pages. [Payment and tax tabs](/blog/payment-and-tax-tabs-stay-in-entity) stay in the entity profile too. Money and customers are both ops.

MaskWright does not encrypt the user-data dir. A CSV in that profile’s Downloads is a CSV on disk. `profiles.json` AES-256-GCM does not wrap it.

| Data | Store / entity profile | Research profile |
| --- | --- | --- |
| Customer CSV | Yes, if you must export | Never |
| Product photos from a supplier | Maybe | Yes, if public |
| Stripe payout | Entity only | Never |
| Public competitor PDP | Optional | Yes |

Windows will happily autocomplete a shipping name from a CSV you opened in Excel and then browsed next to. The research profile does not need Excel. Keep customer files in the ops drive, opened from the store admin machine or the entity profile, then closed. Empty that profile’s Downloads. Do not “just park” last month’s Klaviyo export on the desktop “for the ads brief.” Ads briefs get aggregates: counts, AOV bands, not rows of people.

Shopify, Amazon, Etsy, and eBay all make exports easy. That ease is why the wall has to be a habit, not a feeling. If a tool needs customer rows, it is an ops tool. It does not belong in a headed profile that also visits random supplier sites.

I will not document scraping other stores’ customer emails. If your growth idea starts there, this product is the wrong product.

Pushback I hear: “I need the emails for lookalikes.” Use the official ads tools and the lists you already uploaded in the ads product, under that advertiser’s controls. Do not copy the Shopify export into a cold profile that also visits random sites. A headed research window is a bad place for a person roster.

## FAQ

### What if I need a customer count for a pitch?

Export an aggregate from the admin you already use. Paste a number. Do not copy the CSV into the research folder.

### Can I anonymize the CSV and then research?

If you stripped identifiers and you have a real reason, keep it in ops tooling, not in a browsing profile that also hits random sites. Profiles get XSS and bad extensions.

### Will MaskWright block downloads of CSVs?

No. You choose the profile. [Download MaskWright](/download) and keep the cold profile empty of people.

### What about support tickets with names in them?

Those are customer data. Keep them in the helpdesk. Do not screenshot a ticket into the research profile to “remember a size chart.” Copy the size, not the person.

The [Ecommerce](/blog/ecommerce) hub is store hygiene. Customer data stays in ops. Research looks at products, not at buyers.
