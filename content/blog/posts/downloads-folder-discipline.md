---
slug: downloads-folder-discipline
title: Downloads folder discipline
metaTitle: Downloads folder discipline across rooms
metaDescription: Download trays leak across rooms. No crawl page on their side. This adjacent how-to keeps a CSV from one shop out of the next profile's tray.
excerpt: Download trays leak across rooms. No crawl page on their side. This adjacent how-to keeps a CSV from one shop out of the next profile's tray.
author: Jordan Hale
published: 2026-06-15
category: privacy
tags: privacy, local, how-to, browser, downloads
readingTime: 4
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on downloads folder discipline beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: local-storage-is-a-second-cookie, extensions-inside-a-profile, if-a-vendor-is-breached, profile-encryption-at-rest, update-channel-habits, browser-security-versus-antidetect, why-we-dropped-bandwidth-sharing, what-leaves-this-machine
---

A cookie store can be isolated and the download tray can still mix the shops. Chromium saves files into the profile’s download directory unless you change it. Operators export a customer CSV, switch profiles, and the next picker still offers last week’s people. That is a leak. This how-to is how a local desk keeps the trays apart.

It belongs in [Privacy](/blog/privacy) because a file on disk is data, and data crosses profiles more easily than a fingerprint seed.

## The tray is another store

Cookies, [localStorage](/blog/local-storage-is-a-second-cookie), and Downloads are three places a session leaves residue. People remember the first. They forget the third when the file picker opens “Recent.”

Default Chromium behavior is a Downloads folder inside or linked from the user-data dir. If you pointed every profile at the same `C:\Users\You\Downloads`, you built a shared tray on purpose. I point each work profile at `D:\ops\brand-a\downloads` and research at `D:\research\inbox`, and I empty research often.

[Extensions](/blog/extensions-inside-a-profile) that auto-save can widen the mess. Keep download helpers off money profiles.

## What encryption does not cover

[Profile encryption at rest](/blog/profile-encryption-at-rest): AES-256-GCM on `profiles.json`. Not on CSVs. Not on PDFs. BitLocker covers the volume if you turned it on. A USB copy of Downloads is a USB copy of customers.

[If a vendor is breached](/blog/if-a-vendor-is-breached) is the cloud version of the same files. Local means you are the vendor. [What leaves this machine](/blog/what-leaves-this-machine) is network. This page is disk next to the network.

[Browser security versus antidetect](/blog/browser-security-versus-antidetect) will not save a shared tray. [Update channel habits](/blog/update-channel-habits) neither. [Why we dropped bandwidth sharing](/blog/why-we-dropped-bandwidth-sharing) is a different leftover.

| Profile | Download path I use |
| --- | --- |
| Store / entity | Dedicated ops folder, backed up with the store |
| Ads | Separate, no customer CSVs |
| Research | Separate, deleted on a schedule |
| Personal | Windows default is fine |

A worked example. Store admin profile downloads `orders-export.csv` into `D:\ops\store-a\downloads`. Ads profile never uses that path. Research profile uses `D:\research\inbox`. Windows Search still finds the CSV if it sits on the same volume and you index everything. If that is a problem, keep ops on a separate encrypted volume and do not index it for other users.

I also rename exports with a date and a brand, then move them out of Downloads into the ops drive the same day. “Recent” in the file picker is a leak UI. Clear it when you have been sloppy.

MaskWright will not stop Chromium from saving a PDF you clicked. The profile boundary is the cookie store by default, not a mandatory download sandbox. Finish the job in prefs.

If two brands share one Windows user, they can still share one mistaken path. Two MaskWright profiles plus one `C:\Users\You\Downloads` is how shops mix. Set the path twice.

Pushback I hear: “Windows Search will find it anyway.” Then put ops on a volume you do not index for other users, or live with the search leak. The profile still should not default every shop into `C:\Users\You\Downloads`. Two MaskWright uuids plus one shared tray is how CSVs mix. Set the path twice, on the first launch of each profile.

## FAQ

### Does MaskWright set per-profile download paths for me?

Not as a magic policy I will claim. Chromium prefs live in the user-data dir. Set the path inside that profile and leave it.

### What about Save As from a canvas or a blob?

Same tray. Same discipline.

### Can I symlink all profiles to one encrypted volume?

You can. Then they share the tray again. Encrypt the volume, still split the folders.

### Does MaskWright reset Downloads when I clone a stencil?

No. Check prefs after a clone. A stencil with no cookies can still inherit a shared path if you copied prefs. Set `D:\ops\...` and `D:\research\...` on purpose.

The leftover is boring, which is why it leaks. [Download MaskWright](/download) for isolated cookie stores, then finish the job with isolated Downloads.
