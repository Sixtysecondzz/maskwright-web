---
slug: antidetect-browser-for-agencies
title: Antidetect browsers for agencies without team seats
metaTitle: Antidetect browsers for agencies without seats
metaDescription: They sell team seats. We do not. Agencies still have platform roles and local vaults. This page is how a desk works without a shared cloud roster.
excerpt: They sell team seats. We do not. Agencies still have platform roles and local vaults. This page is how a desk works without a shared cloud roster.
author: Riley Park
published: 2026-05-25
category: antidetect-browsers
tags: antidetect, profiles, browser
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on antidetect browsers for agencies without team seats beside named local browser profiles in a sidebar, photographed as a working operator setup.
related: proxy-browser-vs-antidetect, mobile-antidetect-is-not-a-desktop-profile, virtual-machine-vs-antidetect-browser, custom-chromium-versus-system-chrome, what-is-an-antidetect-browser, browser-as-a-service-risks, how-antidetect-browsers-work, ghost-browser-vs-antidetect
---

They sell team seats. We do not. That is by design, not a missing checkbox I will pretend is coming next week. An agency still has work to do: several authorized client profiles, several people, and a rule about who may hold a cookie. This page is how that desk works without a shared cloud roster.

The work has to be authorized. Client pages you were hired to run. Ads accounts the client already owns and invited you into. Storefronts the legal entity already registered. Research on public pages. Extra logins that exist only to dodge a platform limit are not an agency feature. I will not write that playbook.

This commercial note sits in [Antidetect browsers](/blog/antidetect-browsers).

## The model: roles first, folders second

Business Manager partner access. Page roles. Shopify staff. Ads Manager invitations. Those are how a second human gets into a login without becoming a second fake person.

Each operator who needs a local browser keeps profiles on a machine the agency controls. `maskwright-data` is that store. There is no MaskWright account to add them to. [What an antidetect browser is](/blog/what-is-an-antidetect-browser) is the isolation definition. Isolation is per profile on a PC, not per seat in a vault.

When someone leaves, you revoke the platform role. You do not hope a vendor seat toggle also deleted every copy. You also do not mail a user-data folder as onboarding. That folder is the cookie store.

| Sharing method | What you share | Revoke how |
| --- | --- | --- |
| Platform role | Access inside the account | Remove the person in the platform |
| Vendor seat | Vault login plus sessions | Vendor UI, if they still exist |
| Mailed profile folder | Cookies on a USB stick | You cannot | 
| Local profiles on agency PCs | Folders you can wipe | Take the laptop |

## What we will not add to look like a cloud tool

Team permissions. Cloud sync. Audit trails of who opened which profile. MaskWright has no server for profiles, so it cannot honestly log that. [Browser-as-a-service risks](/blog/browser-as-a-service-risks) are why some agencies still buy hosted browsers anyway. Make that custody decision on purpose.

[How antidetect browsers work](/blog/how-antidetect-browsers-work) is the mechanics. [Custom Chromium versus system Chrome](/blog/custom-chromium-versus-system-chrome) is the fallback caveat. [A proxy browser versus antidetect](/blog/proxy-browser-vs-antidetect) if the purchase page only shipped a tunnel. [Ghost Browser](/blog/ghost-browser-vs-antidetect) if the desk needed stacked staff tabs for QA.

No cloud phones. [Mobile is not a desktop profile](/blog/mobile-antidetect-is-not-a-desktop-profile). [A VM versus antidetect](/blog/virtual-machine-vs-antidetect-browser) if two clients must not share a Windows user at all.

## Practical agency rules I actually use

One profile per client identity that must not share a pixel. Research stays cold. Contractors get platform invites, not folders.

2FA stays on a device the operator holds. Client billing stays in the client's profile. Personal Facebook stays out.

Backups of `maskwright-data` on agency-owned disk, not in a contractor's iCloud. The index is encrypted. Chromium dirs are not. Treat the copy like a key.

If the client requires an audit trail of who spent, that trail lives in Ads Manager, not in our app. We will not fake one.

## Onboarding a contractor without a seat

The client adds the person in Business Manager with an end date if the platform allows. The contractor's agency PC gets a MaskWright profile named for that client only. Personal social stays in Chrome. When the contract ends, the client removes the role. We delete the profile directory. If they need Search Console, they get a Google user invite, not a copied folder.

Laptops stay agency-owned when we can. Backups of `maskwright-data` stay on agency disk. Chromium dirs are plaintext. A contractor iCloud backup of that folder is a leak.

If a client demands a shared cloud roster with an audit log of every launch, we say no and point them at hosted browsers. We will not fake the log.

## FAQ

### Can an agency run MaskWright without seats?

Yes. That is the design. Platform roles plus local profiles on machines you control.

### What if two people need the same client login on Tuesday?

Invite both in the platform. Do not sync cookies through a vendor unless you accepted that vendor as a holder.

### Is this unprofessional compared to cloud antidetect?

Professional is a revoke story you can explain. Seats are one story. Roles plus folders are another. Pick on purpose.
