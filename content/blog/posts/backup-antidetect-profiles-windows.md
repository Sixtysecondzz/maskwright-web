---
title: "Backing Up Antidetect Profiles on Windows"
slug: "backup-antidetect-profiles-windows"
date: "2026-08-20"
author: "Sam Okonkwo"
category: "tutorials"
tags: ["backup", "antidetect browser", "Windows", "profile backup", "encryption", "BitLocker", "VeraCrypt", "data recovery"]
description: "Backing up antidetect profiles on Windows. Local storage means you own backups. Profile folder location, what to backup, encryption options, restore workflow."
images:
  - blog-isolated-profiles.png
  - blog-windows-tower.png
  - blog-graphite-mask.png
---

# Backing Up Antidetect Profiles on Windows

You use an antidetect browser on Windows. Your profiles live on your disk, not in the cloud. This is good: you control your data. No vendor server holds a second copy.

But it also means you are responsible for backups. If your drive fails, your profiles are gone. Cookies, local storage, fingerprints, proxy configs, all of it.

This guide covers how to backup antidetect profiles on Windows. What to backup. Where profiles live. Encryption options (BitLocker, VeraCrypt). Restore workflow. And the tradeoffs of cloud sync (spoiler: do not do it).

## Why Backups Matter for Antidetect Profiles

Antidetect profiles are not just bookmarks. They contain:

- **Cookies:** Session cookies for logged-in accounts (Facebook, Google, Amazon, etc.)
- **Local storage:** Site data, preferences, cached credentials
- **IndexedDB:** Structured data stored by websites
- **Fingerprint config:** Canvas seed, WebGL spoof, font list, screen resolution
- **Proxy config:** Assigned proxy per profile
- **Extensions:** Installed extensions and their data
- **History and cache:** Browsing history, cached images, DNS cache

If you lose a profile, you lose all of this. Some accounts may be recoverable (password reset). Others may be permanently locked (2FA tied to old device, no recovery email).

Backups protect against:

- **Drive failure:** Hard drives die. SSDs fail. RAID is not backup.
- **Accidental deletion:** You delete the wrong folder.
- **Ransomware:** Your files are encrypted by malware.
- **Windows reinstall:** You wipe Windows and lose everything.
- **Profile corruption:** Browser update corrupts profile data.

## Where Antidetect Profiles Live on Windows

Antidetect browsers store profiles in different locations. Common paths:

**MaskWright:**
```
%LOCALAPPDATA%\MaskWright\profiles\
```
Or:
```
C:\Users\<YourUsername>\AppData\Local\MaskWright\profiles\
```

Each profile is a folder with a unique ID (UUID or timestamp). Inside each folder:

```
<profile-id>/
  Cookies          # SQLite database of cookies
  Local Storage/   # leveldb folder with local storage data
  IndexedDB/       # leveldb folder with IndexedDB data
  Preferences      # JSON file with profile settings
  Fingerprint.json # Fingerprint configuration
  Proxy.json       # Proxy configuration
  Extensions/      # Installed extensions
```

**Other antidetect browsers:**

- **GoLogin:** `%LOCALAPPDATA%\GoLogin\profiles\`
- **Multilogin:** `%LOCALAPPDATA%\Multilogin\profiles\`
- **AdsPower:** `%LOCALAPPDATA%\AdsPower\profiles\`
- **Incogniton:** `%LOCALAPPDATA%\Incogniton\profiles\`
- **Dolphin Anty:** `%LOCALAPPDATA%\Dolphin Anty\profiles\`

To find your profile folder:

1. Open your antidetect browser.
2. Create a test profile (name it "TEST_BACKUP").
3. Launch the profile.
4. Open DevTools (F12) and check the console for file paths.
5. Or search `%LOCALAPPDATA%` for the browser name.

## What to Backup

Backup these items for each profile:

### Essential (Must Backup)

- **Cookies file:** SQLite database (`Cookies` file, no extension)
- **Local Storage folder:** `Local Storage\leveldb\` folder
- **IndexedDB folder:** `IndexedDB\leveldb\` folder
- **Preferences file:** `Preferences` or `preferences.json`
- **Fingerprint config:** `Fingerprint.json` or similar

### Important (Should Backup)

- **Proxy config:** `Proxy.json` or proxy settings file
- **Extensions folder:** `Extensions\` or `Extensions/` folder
- **Bookmarks:** `Bookmarks` file (if you use browser bookmarks)
- **History:** `History` SQLite database (optional, but useful for research profiles)

### Optional (Nice to Have)

- **Cache folder:** `Cache\` folder (large, can be regenerated)
- **Code Cache:** `Code Cache\` folder (large, can be regenerated)
- **GPUCache:** `GPUCache\` folder (large, can be regenerated)

For most users, backup the Essential and Important items. Skip the Optional items (they are large and can be regenerated).

## Backup Methods

### Method 1: Manual Copy (Simple, Free)

1. **Close the antidetect browser:** Ensure no profiles are running.
2. **Navigate to the profiles folder:** `%LOCALAPPDATA%\MaskWright\profiles\`
3. **Copy the profile folder:** Right-click the profile folder, select Copy.
4. **Paste to backup location:** External drive, cloud storage folder, or backup partition.

**Pros:**
- Free
- Simple
- No software required

**Cons:**
- Manual (easy to forget)
- No versioning (overwrites old backups)
- No encryption (unless backup location is encrypted)

### Method 2: Scheduled Task + Script (Automated, Free)

Create a PowerShell script to backup profiles automatically:

```powershell
# backup-profiles.ps1
$source = "$env:LOCALAPPDATA\MaskWright\profiles"
$backup = "D:\Backups\MaskWright\profiles-$(Get-Date -Format 'yyyy-MM-dd-HHmmss')"
New-Item -ItemType Directory -Force -Path $backup
Copy-Item -Path $source\* -Destination $backup -Recurse
# Keep only last 7 backups
Get-ChildItem "D:\Backups\MaskWright\" -Directory | Sort-Object CreationTime -Descending | Select-Object -Skip 7 | Remove-Item -Recurse -Force
```

Schedule with Windows Task Scheduler:

1. Open Task Scheduler.
2. Create Basic Task.
3. Trigger: Daily at 3 AM.
4. Action: Start a program.
5. Program: `powershell.exe`
6. Arguments: `-ExecutionPolicy Bypass -File "C:\Scripts\backup-profiles.ps1"`

**Pros:**
- Automated
- Versioned (timestamped backups)
- Free

**Cons:**
- Requires setup
- No encryption (unless backup drive is encrypted)
- Local only (unless backup destination is cloud/network)

### Method 3: BitLocker Whole-Disk Encryption (Built-in, Windows Pro/Enterprise)

If you have Windows Pro or Enterprise, use BitLocker:

1. Open Control Panel > BitLocker Drive Encryption.
2. Enable BitLocker on your system drive (C:).
3. Enable BitLocker on your backup drive (external or secondary internal).
4. Save recovery key (print or save to Microsoft account).

**Pros:**
- Built into Windows Pro/Enterprise
- Whole-disk encryption (all files protected)
- Transparent (no manual encryption/decryption)

**Cons:**
- Windows Home does not include full BitLocker
- Encrypts entire drive (not selective)
- Recovery key required if drive fails

### Method 4: VeraCrypt Container Encryption (Free, Cross-Platform)

VeraCrypt creates encrypted containers (virtual disks):

1. **Download VeraCrypt:** https://www.veracrypt.fr/
2. **Create a container:**
   - Open VeraCrypt, click Create Volume.
   - Select "Create an encrypted file container".
   - Choose location (e.g., `D:\Backups\maskwright-backup.hc`).
   - Set size (e.g., 10 GB for profiles).
   - Set password (strong, unique).
   - Format the container.
3. **Mount the container:**
   - Select a drive letter (e.g., X:).
   - Click Mount, enter password.
   - Container appears as X: drive.
4. **Copy profiles to mounted container:**
   - Copy profile folders to X:\MaskWright\profiles\
5. **Dismount when done:**
   - Select X: in VeraCrypt, click Dismount.

**Pros:**
- Free and open-source
- Cross-platform (Windows, macOS, Linux)
- Selective encryption (only backup container)
- Plausible deniability (hidden volumes)

**Cons:**
- Requires manual mounting/dismounting
- Container size fixed (must resize if full)
- Slight performance overhead

### Method 5: Cloud Sync (Not Recommended)

Services like Google Drive, Dropbox, OneDrive sync folders to the cloud.

**Do not use cloud sync for antidetect profiles.**

Reasons:

- **Privacy risk:** Cloud provider can see your profile data (cookies, local storage, fingerprints).
- **Sync conflicts:** If you launch profiles on multiple machines, sync conflicts corrupt data.
- **Vendor breach risk:** Cloud provider breached = your profiles exposed (same risk as cloud antidetect browsers).
- **Terms of service:** Some cloud providers prohibit syncing browser profiles.

If you must use cloud backup:

- **Encrypt first:** Use VeraCrypt container, then sync the container file.
- **Use zero-knowledge cloud:** pCloud Crypto, Sync.com, Tresorit (provider cannot decrypt).
- **One-way backup only:** Do not sync active profiles. Backup closed profiles only.

## Restore Workflow

When you need to restore a profile:

### Step 1: Close the Antidetect Browser

Ensure no profiles are running. This prevents file locks and corruption.

### Step 2: Locate the Backup

Find your backup folder or VeraCrypt container:

- **Manual backup:** `D:\Backups\MaskWright\profiles-2026-08-20-030000\`
- **VeraCrypt:** Mount the container, navigate to `X:\MaskWright\profiles\`

### Step 3: Copy Profile to Profiles Folder

1. Navigate to the backup folder.
2. Copy the profile folder (e.g., `abc123-def456-ghi789\`).
3. Navigate to `%LOCALAPPDATA%\MaskWright\profiles\`.
4. Paste the profile folder.

### Step 4: Launch the Profile

1. Open the antidetect browser.
2. Find the restored profile.
3. Launch it.
4. Verify cookies are present (check DevTools > Application > Cookies).
5. Verify local storage (DevTools > Application > Local Storage).

### Step 5: Test Account Access

1. Visit a site you were logged into (Facebook, Google, Amazon).
2. Confirm you are still logged in.
3. If not, re-import cookies from backup (if you have a cookie export).

## Backup Best Practices

### 3-2-1 Rule

- **3 copies:** Original + 2 backups.
- **2 different media:** Internal drive + external drive or cloud.
- **1 offsite:** One backup stored elsewhere (cloud, safe deposit box, friend's house).

For antidetect profiles:

- **Original:** `%LOCALAPPDATA%\MaskWright\profiles\`
- **Backup 1:** External drive with BitLocker or VeraCrypt.
- **Backup 2:** VeraCrypt container synced to zero-knowledge cloud (pCloud Crypto, Sync.com).

### Backup Frequency

- **Daily:** If you use profiles for work (accounts change frequently).
- **Weekly:** If you use profiles occasionally (research, light automation).
- **Before major changes:** Windows update, browser update, profile migration.

### Encryption is Mandatory

Always encrypt backups:

- **BitLocker:** If you have Windows Pro/Enterprise.
- **VeraCrypt:** Free, cross-platform, works on Windows Home.
- **Zero-knowledge cloud:** If syncing to cloud (pCloud Crypto, Sync.com, Tresorit).

Unencrypted backups are a privacy risk. If your backup drive is stolen or cloud provider is breached, your profiles are exposed (cookies, local storage, fingerprints).

### Test Restores Periodically

A backup you cannot restore is not a backup. Test restores:

- **Monthly:** Restore one profile to verify backup integrity.
- **After backup software changes:** New script, new VeraCrypt version, new cloud provider.
- **Before critical work:** If you rely on profiles for income, test restore before starting.

## Troubleshooting

### Profile Does Not Launch After Restore

- **Check file permissions:** Right-click profile folder > Properties > Security. Ensure your user has Full Control.
- **Check for file locks:** Close the antidetect browser, restart Windows, try again.
- **Check profile config:** Open `Preferences` or `Fingerprint.json`, verify paths are correct.

### Cookies Missing After Restore

- **Verify backup included Cookies file:** Check backup folder for `Cookies` file (no extension, SQLite database).
- **Re-import cookies:** If you have a cookie export (JSON), import it via the antidetect browser's cookie import feature.
- **Re-login:** If cookies are expired, log in again and export new cookies.

### Backup Drive Full

- **Increase VeraCrypt container size:** VeraCrypt allows resizing containers (Tools > Expand Volume).
- **Delete old backups:** Keep only last 7-30 backups (depending on frequency).
- **Compress old backups:** Use 7-Zip to compress old backup folders (right-click > 7-Zip > Add to archive).

## Bottom Line

Antidetect profiles live on your disk. You are responsible for backups. If your drive fails, your profiles are gone.

Backup these items:
- Cookies file
- Local Storage folder
- IndexedDB folder
- Preferences and fingerprint config
- Proxy config
- Extensions folder

Use these methods:
- **Manual copy:** Simple, free, but easy to forget.
- **Scheduled script:** Automated, versioned, free.
- **BitLocker:** Whole-disk encryption (Windows Pro/Enterprise).
- **VeraCrypt:** Container encryption (free, cross-platform).

Do not use cloud sync for active profiles. If you must use cloud backup, encrypt first (VeraCrypt container) and use zero-knowledge providers (pCloud Crypto, Sync.com).

Test restores periodically. A backup you cannot restore is not a backup.

---

**Related:**

- [Encrypting Antidetect Profile Folders on Windows](/blog/encrypt-antidetect-profiles-windows)
- [Local vs Cloud Antidetect Browsers](/blog/local-vs-cloud-antidetect-browsers)
- [Why We Do Not Sync Profiles](/blog/why-we-do-not-sync-profiles)
- [If a Vendor Is Breached](/blog/if-a-vendor-is-breached)
