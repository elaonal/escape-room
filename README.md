# WiCyS Freshers’ Fair — Operation: Fresh Start

Keep **index.html**, **styles.css** and **script.js** together, then open **index.html** in a browser. No install, build, server, account, or internet connection is needed to play. The Instagram link and scanning the QR on a phone need internet access.

## Fair setup

- Open the page on the stall laptop; use browser full screen if useful.
- Choose **Accept mission**, read the briefing, then **Enter the system**. The timer starts only then.
- Four modules: find two phishing red flags, choose a strong password, decode a Caesar cipher, and enter the recovery code on a vault keypad.
- Two progressive hints per module, both counted (maximum eight). No time penalties. Wrong answers allow retries without resetting progress. The cipher alphabet strip appears only with its second hint.
- At four minutes, players can restart or finish in clearly labelled practice mode.
- Finish displays elapsed time, hints used, one randomly selected sweets phrase, and the **@ussu.wicys** Instagram link and Linktree QR. Phrases: **ZERO TRUST**, **PATCH FIRST**, **CYBER READY**, **PHISH PROOF**, **TRUST BUT VERIFY**. Consecutive missions in the same page avoid repeating the previous phrase.
- **Play again / Next investigator** clears everything. Refresh also resets; no player data is stored.
- All clues are on screen. There are no external puzzle sites or physical clues.

## Committee answer key

1. Find both the fake sender `help@surrey-support.example` and the urgent login button pointing to `surrey-login.example` → digit **7**. Either order is accepted.
2. `Otter-Cactus-Planet-Velvet-83!` → digit **4**.
3. `FBEHU`, shifted back three letters → **CYBER** → digit **2**.
4. Recovery code: **742**. Use the keypad or keyboard; Clear and Backspace edit the entry. A two-second recovery sequence follows, with reduced-motion support. The completion time freezes when the code is accepted, before the animation.

The reward is for participation; answers and the reward phrase are visible in source, so this is not a secure competition system.

## Editing

The `CONFIG` object in `script.js` controls duration, reward phrase pool, Instagram URL, optional membership URL and QR image. The current QR embeds `https://linktr.ee/ussu.wicys`; regenerate it if that destination changes. The join button opens the official chapter Linktree: https://linktr.ee/ussu.wicys, which provides membership and social links. The QR opens that same Linktree and is labelled “Scan to join WiCyS / All our links”.

The page reuses the February project's system fonts, navy palette, terminal-style feedback and green success colour. HTML, CSS and JavaScript are now separate files with no runtime dependencies. Reduced-motion preferences are respected; controls support keyboard use and text inputs have labels.

## Publishing

Public game: https://elaonal.github.io/escape-room/

Source repository: https://github.com/elaonal/escape-room

## Verification performed

- Completed timed missions with all eight hints and with no hints; checked totals, saved digits, reward selection, and 100% system integrity.
- Found phishing flags in both orders, including choosing the login link first; each is credited once.
- Verified password explanations appear after a choice; cipher strip appears only after hint 2.
- Tested incorrect password, cipher and vault answers; whitespace/case handling for CYBER.
- Tested keypad Clear, delete-last-digit, three-digit limit, non-digit filtering, and keyboard Enter to unlock.
- Verified recovery animation and that elapsed time excludes the celebration.
- Replayed a mission: hints, partial red flags, clues and integrity reset; the next reward differed.
- Used a temporary three-second fixture to check timeout preserves one red flag and one hint, then completed in practice mode. Fixture removed afterward.
- Inspected a 375px mobile vault and finish screen; no horizontal overflow; embedded QR loaded. No browser console errors were reported.
- JavaScript syntax and Git whitespace checks passed.

Phone-camera QR scanning and an in-person beginner timing trial remain recommended before the fair.
