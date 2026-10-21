# Changelog

## 1.0.7 · October 2026

- Share Apto: the share sheet now gets only the link (no extra text), so iMessage, WhatsApp and Telegram show the preview card. Added og:image:type and twitter:image.

## 1.0.6 · October 2026

- Home-screen icon on iPhone/iPad: the touch icon has a new file name (icons/apple-icon-180.png, no query string) so iOS fetches it fresh, and the web manifest no longer lists an SVG icon (iOS can't use it and may fall back to a generic icon). The manifest now lists only PNG icons, including the 180×180 one.

## 1.0.5 · October 2026

- Vocabulary: the card shows the topic, then "Card 1 of 10 · 0 of 15 words learned" on its own line; repeats are marked "One more time". A word moves up at most one step per day, so seeing it again the same day no longer counts twice towards "learned".
- The explanation label is now "The clue" (was "How not to get caught"), in all four languages.
- Tests: the mock exam shows no answers or explanations before the end; same-day reviews don't count as learned.

## 1.0.4 · October 2026

UI review fixes.

- Reading: a "Go to the questions" link above each text, in practice and in the mock. "Show the text" now also works in practice mode (it only worked in the mock).
- Speaking: the timer button says "Start timer" and the recorder says "Record my voice", so the two actions aren't confused.
- Vocabulary: the card header shows how many words of the topic are learned.
- Home: tighter spacing so "Start here" is visible sooner.

## 1.0.3 · October 2026

Real photos in speaking task 2.

- Six Unsplash photos (park walk by a lake, vintage clothes shop, café, train station, market, home buffet), each credited under the image with links to the photographer and Unsplash, plus a credits list on the About page, in the README and in `public/photos/CREDITS.txt`.
- Task 2 models and guide questions rewritten to describe only what is visible; guesses are marked as guesses. Photo descriptions are used as alt text.
- Four new task 3 role-plays linked to the photos: ordering at a café, buying a train ticket, shopping at a market, accepting an invitation to lunch.
- Review pack shows each photo with its credit. Tests check that every photo loads and is credited.

## 1.0.2 · October 2026

Content fixes from the editorial audit v2.

- DELE mock: "How it differs from the real exam" (original exercises, synthetic audio, no examiner marking, percentage not the official score).
- Speaking task 2 is labelled as a described scene until real photos are added; S2a/S2b models no longer add details that aren’t in the scene. Task 3 has sample candidate answers; speaking pages have a self-check (clarity, task, vocabulary, grammar).
- CCSE explanations: 1017 separates the test answer from how it works in practice; 1031, 1061, 1062, 5073 clarified. About states the question bank source and that a full key check against the manual is pending.
- Grammar: "rule of thumb" label instead of absolute wording; perfect-tense items marked as usual usage in Spain; comparison items with one correct answer and an everyday example.
- Tests: listening exam mode hides the script until answered and speaks no labels.

## 1.0.1 · October 2026

Content fixes from the editorial audit of 20 October.

- CCSE explanations rewritten for accuracy: 1001 (sovereignty lies with the people), 1002, 1017 (Cl@ve / certificate / DNIe vs. signature), 1023, 1061, 5064, 5073, 5081; typo «municiales» fixed in 1031.
- Grammar: ser/estar rule no longer reduced to "permanent vs temporary"; perfect vs preterite example uses «hoy» and notes the Spain/Latin America difference; comparisons rule no longer absolute; four ambiguous future/past items rewritten so only one option is correct.
- Writing and speaking models: W1a (prompt and model wording), W2c (no facts beyond the data card), S1b (A2-friendly job description).
- DELE mock overview states that the structure follows the Instituto Cervantes model and the exercises are original and unofficial.
- Review pack: speaking scenes and a note on synthetic audio.

## 1.0 · October 2026

First public version.

- **CCSE:** all 300 questions of the 2026 manual with the official answers, translations (en/ru/uk), a "why" explanation for every question, study by tarea, mistakes review, spaced repetition (1/3/7/16/35 days), 25-question / 45-minute mock exams, progress report.
- **DELE A2:** four reading and listening versions in the exam format; a full mock exam with writing (45 min) and speaking (recorded on the device) or reading + listening only; 12 grammar topics with a level test; 9 vocabulary topics with flashcards; writing practice with hints.
- **For everyone:** Spanish, English, Russian and Ukrainian interface; light and dark themes; works offline and installs as an app; progress stays on the device, with a file backup; no accounts, cookies, analytics or third-party requests.
