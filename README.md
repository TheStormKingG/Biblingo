# Biblingo — Genesis & Bachelor of Theology

A React app with two courses:

1. **Genesis: Foundations of Faith** — 5 modules, 17 lessons (reading, verse study, reflection, quizzes, and drills).
2. **Bachelor of Theology (BTh)** — 3-year structure aligned with typical BTh curricula: 11 modules, 33 lessons (Year 1: OT/NT intro, Doctrine, Hermeneutics; Year 2: OT/NT set books, Church History, Systematic Theology; Year 3: Advanced Biblical Studies, Ethics, Mission). Use **Bachelor-of-Theology-Course-Content-2021-22.pdf** as the source of truth and align module titles/credits in `content/` (see below).

Progress is saved in `localStorage`. Use the **Genesis** / **BTh** toggle on the home screen to switch courses.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Output is in `dist/`.

## Project layout

- **`biblingo-hd.jsx`** — Main UI: all screens, scenes, illustrations, and Genesis course data (TEACH_CONTENT, QUESTIONS, LESSON_SCENES, MODULES). Imports BTh structure and content from `content/`. Accepts `initialCompleted`, `initialXp`, `initialStreak`, and `onProgressChange` for persistence.
- **`content/`** — Bachelor of Theology course structure and content. **`content/COURSE_SOURCE.md`** explains how to align with your PDF. Edit **`content/bachelorTheologyModules.js`** (titles, credits, lessons), **`content/bthTeachContent.js`** (teaching steps and terms), and **`content/bthQuestions.js`** (quiz questions) to match your syllabus.
- **`src/App.jsx`** — Wrapper that loads/saves progress via `src/lib/storage.js` and renders `Biblingo` with initial state.
- **`src/data/`** — Optional data layer with safe getters (`getTeachContent`, `getQuestions`) and fallback content for every lesson; used for consistency and future refactors.
- **`src/main.jsx`** — Entry point. **`src/index.css`** — Global styles and utility classes.

## Defensive choices

- Every lesson ID in MODULES has TEACH_CONTENT (including l2-2, l2-3, l2-4, l3-2, l3-3, l4-2, l4-3, l4-4) so the app never shows wrong content.
- Quiz correct-answer index is validated in `src/data/questions.js` so `q.c` is always within `opts.length`.
- Progress load/save uses try/catch and safe defaults so private mode or quota errors don’t crash the app.
- Biblingo accepts optional props and uses defaults when not provided, so it still runs without the wrapper.
