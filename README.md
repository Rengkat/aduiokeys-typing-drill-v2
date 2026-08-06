# AudioKeys — Learn to Type by Ear

AudioKeys is an audio-first, installable typing tutor built for blind and low-vision students. There's no visual layout to memorize and nothing to see to make progress — every key, correction, and milestone is announced by voice, spatially panned to the ear that matches the hand you should be using, and layered with sound effects that reinforce the rhythm of touch-typing. It's a Progressive Web App (PWA) built with Next.js, works fully offline once installed, and is designed to be used entirely with a keyboard and a screen reader (JAWS, NVDA, or VoiceOver).

## Why this exists

Most typing tutors are built for sighted users first and retrofit accessibility later, which usually means a screen reader narrating a UI that was never designed to be heard. AudioKeys inverts that: audio *is* the interface. Correctness, hand/finger guidance, progress, and encouragement are all delivered through synthesized speech and stereo-panned sound cues, with a UI that remains fully operable by keyboard for anyone pairing the app with their own screen reader.

## Features

- **9-stage curriculum** that walks a student from single home-row keys to full sentences:
  1. Home Row Foundation (`A S D F J K L ;`)
  2. Home Row Complete (adds `G` `H`)
  3. Top Row Expansion (`Q W E R T Y U I O P`)
  4. Bottom Row Expansion (`Z X C V B N M , . /`)
  5. Numbers & Symbols
  6. Short Words (2–4 letters)
  7. Longer/common words, reinforced with n-gram drilling
  8. Short sentences
  9. Longer passages

  Each stage tracks its own target speed (KPM for key drills, WPM once real words appear) and target accuracy, and won't unlock the next stage until both are met.

- **Spatial audio guidance** — every key on the keyboard is mapped to the correct finger and panned left/right based on which hand should press it (`engines/audio/spatialPanner.ts`), so students learn correct hand placement by *hearing* it, not by looking at a diagram.

- **Adaptive lesson engine** (`engines/adaptive/`):
  - **Weak-key detection** — mines keystroke logs for substitution patterns (e.g. consistently hitting `d` instead of `f`) and flags key pairs that need targeted practice.
  - **Spaced repetition** — an SM-2-style scheduler (adapted for binary correct/incorrect signals) that resurfaces trouble keys at increasing intervals as a student's mastery improves.
  - **Finger Health Index** — combines per-finger accuracy with inter-key timing to flag fingers that are rushing and making more errors, with recommendations.
  - **Lesson generator** — builds each drill from the stage's dictionary, weak-key pairs due for review, spaced-repetition items, and (for word-based stages) n-gram fragments pulled from real error patterns.

- **Screen reader mode** — a dedicated flag (`screenReaderMode` in `store/useAudioStore.ts`) that prevents the app's own speech synthesis from talking over a student's existing screen reader (JAWS/NVDA/VoiceOver), with all announcements serialized through a single queue so they never overlap or get cut off mid-sentence.

- **Leaderboard** — opt-in ranking by a computed fluency score (accuracy-weighted, with a speed bonus), both overall and per-stage, entirely announced by voice.

- **Educator/classroom view** — a class-code-based dashboard for viewing a group of students' progress, plus profile export/import for backing up or transferring progress data.

- **Offline-first PWA** — installable to a home screen, with a service worker that caches the app shell so the core experience keeps working without a network connection. Typing data lives entirely in the browser (IndexedDB) — nothing is sent to a server.

- **Session results & analytics** — WPM/KPM, accuracy, fluency score, per-hand and per-finger accuracy breakdowns, and weak-key callouts after every session.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router) |
| UI | React 19, Tailwind CSS 4 |
| State | Zustand |
| Local storage | IndexedDB via [`idb`](https://github.com/jakearchibald/idb) |
| Audio | Web Speech API (`speechSynthesis`) for narration, [Howler.js](https://howlerjs.com/) for sound effects and long-form audio tracks, Web Audio API for stereo panning |
| Icons | [lucide-react](https://lucide.dev/) |
| Testing | Vitest + Testing Library (jsdom environment) |
| Language | TypeScript |

## Getting started

### Prerequisites

- Node.js (an LTS version compatible with Next.js 16)
- npm (or another package manager of your choice — the commands below assume npm)

### Install

```bash
git clone https://github.com/Rengkat/aduiokeys-typing-drill-v2.git
cd aduiokeys-typing-drill-v2
npm install
```

### Run the dev server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). The app is keyboard-navigable from the first screen — no mouse is required at any point.

### Other scripts

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint (eslint-config-next)
npm run test    # run the Vitest suite once
```

## Project structure

```
app/                      Next.js App Router pages
  page.tsx                 Landing / profile selection / stage picker
  stage/[stageId]/         The typing drill itself (per-stage dynamic route)
  results/                 Post-session analytics (WPM, accuracy, weak keys, finger health)
  leaderboard/              Global and per-class rankings
  educator/                Class-code dashboard, export/import

engines/
  audio/                    Speech synthesis, sound effects, stereo panning, long-form tracks
  adaptive/                 Weak-key detection, spaced repetition, finger health, lesson generation
  leaderboard/              Fluency score calculation, ranking logic
  stage/                    Stage configuration helpers

db/                        IndexedDB schema and access layer (profiles, metrics, keystrokes, etc.)
store/                     Zustand stores (audio/speech state, profile state)
hooks/                     React hooks wrapping the audio engine, profile store, keystroke logging
data/                      Stage configuration and per-stage word/key dictionaries, n-grams
types/                     Shared TypeScript types (profile, metrics, leaderboard)
public/                    PWA manifest, service worker, icons, bundled audio assets
```

## How a session works

1. A student picks or creates a profile (locally stored, no account/server required) and selects a stage.
2. `engines/adaptive/lessonGenerator.ts` builds a drill from that stage's dictionary, blended with any due spaced-repetition items and weak-key pairs surfaced from past sessions.
3. As the student types, `engines/adaptive/keyLogger.ts` classifies each keystroke by finger/hand/row and logs it; `engines/audio/spatialPanner.ts` and the narrator announce feedback panned to the correct ear.
4. All announcements — correctness, encouragement, corrections — are serialized through a single speech queue (`engines/audio/speechSequencer.ts` / `store/useAudioStore.ts`) so nothing overlaps or gets clipped, and so the app's own voice never talks over an active screen reader when `screenReaderMode` is on.
5. At the end of a session, metrics are persisted to IndexedDB, weak-key pairs and spaced-repetition schedules are updated, and the results page reports WPM/KPM, accuracy, fluency score, and a Finger Health Index breakdown.

## Accessibility notes

- Every interactive element is reachable and operable via keyboard alone.
- The `screenReaderMode` setting is the key switch for anyone using JAWS, NVDA, or VoiceOver alongside the app — it stops AudioKeys' own TTS from competing with the screen reader's narration.
- Spatial audio (left/right panning by hand) requires stereo output (headphones or stereo speakers) to be meaningful.
- Punctuation and symbol keys are announced by name (e.g. "Semicolon") rather than silently skipped, via `data/specialCharacters.json`.

## Testing

The test suite (`app/stage/[stageId]/__tests__/`, `store/__tests__/`) focuses heavily on the audio/announcement pipeline — correct-letter announcements, live-region behavior, queuing under fast typing, and regressions from real bug reports — since that pipeline is the primary interface for this app's users.

```bash
npm run test
```

## Contributing

Issues and pull requests are welcome. If you're proposing a change to the audio/narration pipeline, please include or update tests under `app/stage/[stageId]/__tests__/` — that pipeline is safety-critical for the app's actual users.

## License

No license file is currently included in this repository. Until one is added, treat the code as all-rights-reserved by the repository owner.
