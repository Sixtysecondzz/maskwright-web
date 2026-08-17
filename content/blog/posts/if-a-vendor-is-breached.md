---
slug: if-a-vendor-is-breached
title: If a vendor is breached
metaTitle: If a vendor is breached, they hold the jars
metaDescription: If a cloud vendor is breached, they hold the jars. Local disk is the contrast. This page is the custody story their cloud blogs do not want to lead with.
excerpt: If a cloud vendor is breached, they hold the jars. Local disk is the contrast. This page is the custody story their cloud blogs do not want to lead with.
author: Jordan Hale
published: 2026-06-26
category: privacy
tags: privacy, local, antidetect, breach
readingTime: 4
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on if a vendor is breached beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, update-channel-habits, local-storage-is-a-second-cookie, why-we-dropped-bandwidth-sharing, downloads-folder-discipline, what-is-a-cloud-browser, extensions-inside-a-profile, cloud-browser-risk
---

If a cloud vendor is breached, they hold the cookie stores. That is the sentence their blogs bury under “enterprise-grade encryption” and a status page. A product that syncs your profiles is a second custodian. When that custodian’s disk is copied, your sessions are in the copy.

Local disk is the contrast, not a magic shield. This page is the custody story. It sits in [Privacy](/blog/privacy) because a breach is a who-has-the-files question before it is a brand question.

## What a cloud breach actually copies

Live Chromium trees, cookie databases, [localStorage](/blog/local-storage-is-a-second-cookie), extension data, maybe proxy credentials, maybe a roster of teammates who could launch the same session. Encryption at rest on their side helps against a stolen idle disk. It helps less against a compromised app server that can decrypt for customers.

[What a cloud browser is](/blog/what-is-a-cloud-browser) and [cloud browser risk](/blog/cloud-browser-risk) are the architecture. This page is the incident. [Extensions](/blog/extensions-inside-a-profile) in a rented profile are in the same tar.

## What a local breach actually copies

Your laptop, your backup drive, your Windows user. MaskWright encrypts `profiles.json` (AES-256-GCM). The user-data dirs are not encrypted by our code. BitLocker, a strong Windows PIN, and not emailing folders are the controls. We cannot remote-wipe you. We also cannot dump you from a locker we do not have.

[What leaves this machine](/blog/what-leaves-this-machine) is the short network list: updater, ads, geo. That list is not a profile warehouse. [Update channel habits](/blog/update-channel-habits) is how you take packages. [Downloads discipline](/blog/downloads-folder-discipline) is the CSV next to the cookies. [Why we dropped bandwidth sharing](/blog/why-we-dropped-bandwidth-sharing) is so a breach of us is not also a breach of your last mile as inventory.

| Incident | Cloud antidetect / BaaS | Local MaskWright |
| --- | --- | --- |
| Vendor disk copied | Sessions likely included | Not on our disk |
| Your laptop stolen | Also your local cache, plus their copy | The copy that exists |
| Password reset on vendor account | May restore sessions | No vendor account |
| You revoke a contractor | Seat UI, if they built it | Platform roles, or take the PC back |

A local incident I actually plan for: laptop stolen from a car. BitLocker on. Windows PIN not 1234. MaskWright store on that volume. Proxy passwords in encrypted `profiles.json`. Cookie trees still sitting there once the volume is unlocked. Remote-wipe via Microsoft account if you set that up. We cannot wipe it for you. Change site passwords from a second device. Assume cookies are burned if the PIN was weak.

A cloud incident looks like a status page and a “we encrypted at rest” paragraph. You still rotate every login that lived in their browser. You still wonder how many snapshots exist. Local at least makes the copy-count a number you can guess: this PC, this backup disk, this USB you forgot.

Do not add extra copies by emailing the folder “so I have it in Gmail.” That is a third custodian named Google.

Pushback I hear: “they are SOC2.” A report is not an access log of your cookies. If they can render the session, they can copy the session. Local means the copy-count is your PC and your backups. Plan those. Do not add Gmail as a third custodian by mailing the folder.

## FAQ

### Are you saying cloud vendors will be breached?

I am saying custody is the product. Plan as if a copy exists wherever the runtime lives.

### What if MaskWright.com ads wrappers are compromised?

Dashboard iframes are a web problem. They are not your Seller Central cookie store sitting in our S3. Still patch. Still treat the operator UI as a browser.

### Should I stop using any vendor?

No. Use platforms’ own roles. Use a proxy you paid for. Just do not add an extra cookie landlord without a reason. [Download MaskWright](/download) if the reason was “I did not want that landlord.”

Local is one fewer custodian. It is not immortality. Know who can tar the session. In 0.1, that is you.
