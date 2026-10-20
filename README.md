# Apto

Free, unofficial practice app for the Spanish nationality exams: **CCSE** and **DELE A2**.
Interface in Spanish, English, Russian and Ukrainian. Progress is stored only on the user’s device.
Not affiliated with the Instituto Cervantes.

## What’s inside

- **CCSE** — all 300 questions of the 2026 manual with the official answer key, translations (en/ru/uk),
  a short “why” explanation for every question, study by tarea, mistakes review, spaced repetition (1/3/7/16/35 days),
  25-question / 45-minute mock exam, progress report.
- **DELE A2** — four full reading + listening variants in the exam format (4 + 4 tasks, 25 + 25 items),
  vocabulary flashcards (8 topics, 120 words, spaced repetition), 12 grammar topics,
  listening read by the device’s Spanish voices (with install help and a read-the-text fallback when there are none), grammar diagnostic with rule cards, writing practice with hints (accents, ¿¡, connectors, repetition), speaking practice with an in-browser voice recorder,
  full mock exam with 60 + 40 minute timers, mistakes queue, progress by task.
- Study plan to the exam date, exam guide with official links, offline support (PWA), progress backup as a file or a text code,
  about & privacy page. No cookies, no analytics, no third-party requests (fonts are self-hosted).

## Develop

```bash
npm install
npx playwright install chromium   # once, for tests and icons
npm start                          # validate + build + serve at http://localhost:4173
npm test                           # validate + build + end-to-end checks
```

No framework and no runtime dependencies: `scripts/build.mjs` concatenates `src/js/*` (in the order from
`scripts/order.mjs`) with the JSON data into one hashed bundle and writes `dist/` plus a service worker.

## Project layout

```
src/index.html          page template
src/styles.css          all styles (light and dark themes)
src/js/                 app code and DELE content (classic scripts sharing globals)
src/data/               CCSE questions, translations, explanations (JSON)
public/                 manifest, icons, favicon.ico, link-preview image and fonts, copied as-is
scripts/                build, validate, serve, icons
tests/e2e.mjs           Playwright smoke test on a phone viewport
.github/workflows/      test + deploy to GitHub Pages on every push to main
```

## Icons and link preview

Edit `public/icons/icon.svg`, then `npm run icons` regenerates the PNG icons, `favicon.ico` and `og-image.png`.

## Updating for a new year

1. Replace `src/data/ccse2026.json` with the new manual’s questions (same shape) and update translations/explanations.
2. Update dates and fees in `src/js/extras.js` (`GUIDE`).
3. `npm test`, then push to `main`.

## Content and licensing

Code: MIT. Fonts (Bricolage Grotesque, Source Sans 3, IBM Plex Mono): SIL OFL 1.1, see `public/fonts/LICENSES.txt`. CCSE questions © Instituto Cervantes (Manual CCSE 2026), used for non-commercial practice with attribution.
All DELE texts, recordings scripts, explanations and translations are original to this project.
