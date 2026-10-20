# Apto · Forest Slate

Quiet interface. Warm personality. Progress should inform, not judge.

All tokens live at the top of `src/styles.css`. The theme follows the system by default; Settings → Appearance can force light or dark.

## Tokens

| Token | Forest Slate (dark) | Sage Paper (light) | Use |
|---|---|---|---|
| `--bg` | `#26332F` | `#F2F5F0` | page |
| `--surface` | `#34433D` | `#FFFFFF` | sections, options |
| `--elev` / `--tint` | `#405149` | `#E7EEE7` | quiet fills: player, hover, plan line |
| `--ink` | `#F1F5EF` | `#293B33` | primary text |
| `--ink2` | `#C8D1C9` | `#576D60` | secondary text |
| `--muted` | `#A2B2A9` | `#5B7064` | metadata (brief: `#9EAEA5` / `#667B6E`, nudged to reach 4.5:1) |
| `--accent` | `#B8D3B8` | `#376E54` | brand, links, primary action, selected, focus-adjacent |
| `--line` | `#4B5C53` | `#D5E0D7` | borders on controls only |
| `--ok` / `--ok-soft` | `#93D5A0` / `#2F4D3B` | `#1E7A3C` / `#E3F3E6` | correct |
| `--bad` / `--bad-soft` | `#F0A39A` / `#4A3533` | `#B3392F` / `#FBE8E5` | incorrect |
| `--ochre` | `#E2C07A` | `#8A6414` | WHY line, attention, focus ring |

Every text pairing above is at least 4.5:1 on its background.

## Answer states

| State | Treatment (never colour alone) |
|---|---|
| Default | neutral surface, border, letter a/b/c |
| Selected (exam) | sage outline + filled sage letter dot |
| Correct | green fill + ✓ in the letter slot + "Correct answer" label |
| Incorrect | red fill + ✕ in the letter slot + "Your answer" label |
| Explanation | `WHY` mono label, amber vertical line, no box |

## Rules

- Separation order: spacing → typography → surface → border. Borders on inputs, options and buttons only.
- Monospace only for short labels (CCSE, TAREA 4, WHY, 12 / 25).
- Brand sage is not a success colour; progress bars use sage for "in progress", amber for "needs attention", green for "mastered".
- No streaks, XP or countdown pressure. The exam date is optional and lives behind "Have an exam date in mind?".
- Motion: 150–180 ms colour/opacity transitions only; none with `prefers-reduced-motion`.

## Mark

An A whose crossbar dips like a check. Files in `public/brand/`: symbol (`currentColor`), mono black/white, icon tiles (primary dark, inverse), lockups for dark and light. `npm run icons` regenerates the PNG icons, `favicon.ico` and the link preview from `public/icons/icon.svg`.
