# How TLS Fingerprints (JA3/JA4) Affect Antidetect Browsers

Browser fingerprints are not just JavaScript. TLS handshakes leave a fingerprint too. This is JA3 and JA4. Here is what they are, how they detect automation, and what antidetect browsers can do about them.

## What Is TLS Fingerprinting

When your browser connects to a HTTPS site, it performs a TLS handshake. This handshake includes:

- **TLS version** (1.2, 1.3)
- **Cipher suites** (encryption algorithms your browser supports)
- **TLS extensions** (optional features like SNI, ALPN, session tickets)
- **Elliptic curves** (key exchange algorithms)
- **Key exchange methods**

The order and combination of these values creates a fingerprint. This fingerprint is hashed into a JA3 or JA4 string.

**JA3:** The original TLS fingerprinting method (2017). Creates a 32-character MD5 hash from the TLS handshake.

**JA4:** The successor (2023). More granular, harder to spoof, includes additional handshake fields.

Example JA3 hash:
```
771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,0-23-65281-10-11-35-16-5-13-1-27-45-43-17513,29-23-24-25-26-27-28-29-30-31-32-33-34-35-36-37-38-39-40-41-42-43-44-45-46-47-48-49-50-51-52-53-54-55-56-57-58-59-60-61-62-63-64-65-66-67-68-69-70-71-72-73-74-75-76-77-78-79-80-81-82-83-84-85-86-87-88-89-90-91-92-93-94-95-96-97-98-99-100-101-102-103-104-105-106-107-108-109-110-111-112-113-114-115-116-117-118-119-120-121-122-123-124-125-126-127-128-129-130-131-132-133-134-135-136-137-138-139-140-141-142-143-144-145-146-147-148-149-150-151-152-153-154-155-156-157-158-159-160-161-162-163-164-165-166-167-168-169-170-171-172-173-174-175-176-177-178-179-180-181-182-183-184-185-186-187-188-189-190-191-192-193-194-195-196-197-198-199-200-201-202-203-204-205-206-207-208-209-210-211-212-213-214-215-216-217-218-219-220-221-222-223-224-225-226-227-228-229-230-231-232-233-234-235-236-237-238-239-240-241-242-243-244-245-246-247-248-249-250-251-252-253-254-255,0
```

Sites compare your JA3/JA4 hash against known browser fingerprints. If your hash does not match your claimed browser (user agent), you get flagged.

## Why TLS Fingerprints Matter for Antidetect Browsers

Antidetect browsers spoof JavaScript fingerprints (canvas, WebGL, fonts, user agent). But TLS fingerprints operate at a lower level - the network layer.

If your antidetect browser claims to be Chrome 127 (via user agent) but your TLS handshake looks like Python requests or an old Firefox, the mismatch is a detection signal.

**Common TLS fingerprint mismatches:**

1. **Automation tools:** Puppeteer, Playwright, Selenium use Chromium but have distinct TLS fingerprints (due to how they launch the browser).

2. **Modified browsers:** Antidetect browsers that patch Chromium may accidentally change TLS handshake order.

3. **Proxy interference:** Some proxies (especially datacenter proxies) modify TLS handshakes, creating inconsistencies.

4. **Old TLS libraries:** Tools using outdated OpenSSL or Go TLS libraries have outdated JA3 hashes.

## How JA3/JA4 Detection Works

Sites like Cloudflare, Akamai, and PerimeterX collect JA3 hashes from incoming connections. They build a database:

- **Known good hashes:** Chrome 127 on Windows 11, Firefox 128 on macOS, Safari 17 on iOS
- **Known bad hashes:** Python requests, curl, old OpenSSL, known automation tools

When you connect:
1. Your TLS handshake is captured
2. JA3/JA4 hash is computed
3. Hash is compared against the database
4. Mismatch = additional risk signal

This is one signal among many (JavaScript fingerprints, IP reputation, behavior patterns). But it is a signal.

## What MaskWright Does (and Does Not) Cover

**MaskWright coverage:**

- **JavaScript fingerprints:** Canvas, WebGL, fonts, user agent, screen resolution, timezone, language, WebRTC, audio context, client rects, hardware concurrency. These are spoofed per profile.

- **TLS fingerprints:** MaskWright uses Chromium's native TLS stack. Your JA3/JA4 hash will match a standard Chrome build on your OS. This is generally good (you look like real Chrome) but means you cannot spoof different TLS fingerprints per profile.

**What MaskWright does NOT do:**

- **TLS fingerprint spoofing:** MaskWright does not modify Chromium's TLS handshake order or cipher suite list. All profiles have the same JA3/JA4 hash (standard Chrome for your OS version).

- **Per-profile TLS variation:** You cannot assign different TLS fingerprints to different profiles. All profiles look like Chrome on Windows.

**Is this a problem?**

For most operators: no. Your TLS fingerprint matching real Chrome on Windows is what you want. The problem arises when:

1. You are running automation (Puppeteer, Playwright) that modifies the TLS handshake
2. You are using a modified Chromium build with non-standard TLS configuration
3. You are trying to spoof a different browser (e.g., claim Firefox but send Chrome TLS)

For MaskWright operators using the browser normally (headed, manual operation, standard Chromium build): your TLS fingerprint is consistent with your user agent. This is correct.

## When TLS Fingerprinting Becomes a Problem

**Scenario 1: Automation tools**

You run Puppeteer to automate Facebook. Puppeteer launches Chromium with the `--enable-automation` flag. This changes the TLS handshake slightly. Cloudflare sees:
- User agent: Chrome 127
- JA3 hash: Puppeteer/automation (known bad)
- Result: Challenge or block

**Fix:** Use MaskWright profiles for automation (import cookies into a real browser session) or use stealth plugins (puppeteer-extra-plugin-stealth). Note: stealth plugins are arms races, not permanent solutions.

**Scenario 2: Cross-browser spoofing**

You want profiles to look like Firefox on macOS. You spoof the user agent, JavaScript fingerprints, and canvas. But your TLS handshake is still Chrome on Windows (because you are running Chrome on Windows).

**Fix:** Do not cross-browser spoof. If you need Firefox fingerprints, run Firefox (or use a tool that supports Firefox TLS fingerprints). MaskWright is Windows + Chrome only - this is honest positioning.

**Scenario 3: Proxy interference**

You use a datacenter proxy that modifies TLS handshakes (some do, for "optimization"). Your JA3 hash changes mid-session or does not match your browser.

**Fix:** Use residential or ISP proxies that do not modify TLS. Test your proxy with a TLS fingerprint checker (browserleaks.com, pixelscan.net).

## Testing Your TLS Fingerprint

**Step 1: Check your JA3 hash**

Visit:
- browserleaks.com/webrtc (shows TLS info)
- pixelscan.net (includes TLS fingerprint)
- amiunique.org (TLS section)

Note your JA3 hash.

**Step 2: Compare against known hashes**

JA3 databases:
- GitHub: JA3 fingerprint lists (search "JA3 database")
- WAF documentation (Cloudflare, Akamai publish some)

Your hash should match Chrome on your OS version.

**Step 3: Test with proxy**

Enable your proxy. Refresh the TLS fingerprint page. Hash should not change (if it does, your proxy is modifying TLS).

**Step 4: Test with automation**

If you use Puppeteer/Playwright, run a script that visits the TLS fingerprint page. Compare the hash to your manual browser. If they differ, your automation is detectable via TLS.

## Mitigation Strategies

**For MaskWright operators:**

1. **Use MaskWright as intended:** Headed, manual operation, Windows-only. Your TLS fingerprint will match real Chrome on Windows. This is correct.

2. **Avoid automation flags:** Do not launch MaskWright with `--enable-automation` or similar flags. Use the standard launch workflow.

3. **Test with proxies:** Verify your proxy does not modify TLS fingerprints. If it does, switch providers.

4. **Do not cross-browser spoof:** MaskWright profiles are Chrome on Windows. Do not try to make them look like Firefox or Safari.

**For automation operators:**

1. **Use stealth plugins:** puppeteer-extra-plugin-stealth can reduce automation signals (but is not perfect).

2. **Import cookies into real browsers:** Run automation in a real Chrome profile (not headless), export cookies, import into MaskWright for manual work.

3. **Consider TLS spoofing tools:** Some advanced tools (like curl-impersonator) can spoof TLS fingerprints. This is advanced and requires deep technical knowledge.

4. **Accept the tradeoff:** Full automation with perfect TLS spoofing is an arms race. Manual operation (MaskWright's focus) is more stable.

## FAQs

**Q: Does MaskWright spoof JA3/JA4 fingerprints?**

A: No. MaskWright uses Chromium's native TLS stack. Your JA3/JA4 hash will match standard Chrome on Windows. This is intentional - you want to look like real Chrome.

**Q: Can I assign different TLS fingerprints to different MaskWright profiles?**

A: No. All MaskWright profiles have the same TLS fingerprint (Chrome on Windows). JavaScript fingerprints vary per profile, but TLS does not.

**Q: Will TLS fingerprinting get my accounts banned?**

A: TLS fingerprints are one signal among many. A mismatch alone is unlikely to trigger a ban. But combined with other signals (JavaScript fingerprint mismatch, IP reputation, behavioral patterns), it can contribute to detection.

**Q: Should I worry about TLS fingerprints?**

A: If you use MaskWright as intended (manual operation, Windows-only, no automation flags): no. Your TLS fingerprint will be consistent. If you run automation or try to spoof different browsers: yes, TLS fingerprints are a detection vector.

**Q: Can I test my TLS fingerprint before doing sensitive work?**

A: Yes. Visit browserleaks.com or pixelscan.net with your MaskWright profile. Note your JA3 hash. Verify it matches Chrome on Windows. If it does, you are consistent.

## Bottom Line

TLS fingerprints (JA3/JA4) are a real detection vector. They operate at the network layer, below JavaScript fingerprints.

MaskWright does not spoof TLS fingerprints. All profiles look like Chrome on Windows. For most operators, this is correct - you want to look like real Chrome.

TLS fingerprinting becomes a problem when:
- You run automation tools that modify the TLS handshake
- You try to spoof a different browser (Firefox, Safari) but send Chrome TLS
- Your proxy modifies TLS handshakes

For MaskWright operators using the browser as intended (manual, Windows, Chrome): your TLS fingerprint is consistent. This is not a vulnerability. It is honest positioning.

---

**Related:**
- [How Fingerprints Work](/what-is-device-fingerprinting)
- [Testing a Fingerprint Before Work](/testing-a-fingerprint-before-work)
- [Why Am I Getting Detected with Antidetect Browser](/why-detected-with-antidetect-browser)
- [Fingerprint Surfaces We Actually Cover](/fingerprint-surfaces-we-actually-cover)
