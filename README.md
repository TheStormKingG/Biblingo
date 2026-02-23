# Biblingo — Genesis: Foundations of Faith

A React app for the Genesis course: 5 modules, 17 lessons (reading, verse study, reflection, quizzes, and drills). Progress is saved in `localStorage`.

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

- **`biblingo-hd.jsx`** — Main UI: all screens, scenes, illustrations, and course data (TEACH_CONTENT, QUESTIONS, LESSON_SCENES, MODULES). Accepts `initialCompleted`, `initialXp`, `initialStreak`, and `onProgressChange` for persistence.
- **`src/App.jsx`** — Wrapper that loads/saves progress via `src/lib/storage.js` and renders `Biblingo` with initial state.
- **`src/data/`** — Optional data layer with safe getters (`getTeachContent`, `getQuestions`) and fallback content for every lesson; used for consistency and future refactors.
- **`src/main.jsx`** — Entry point. **`src/index.css`** — Global styles and utility classes.

## Defensive choices

- Every lesson ID in MODULES has TEACH_CONTENT (including l2-2, l2-3, l2-4, l3-2, l3-3, l4-2, l4-3, l4-4) so the app never shows wrong content.
- Quiz correct-answer index is validated in `src/data/questions.js` so `q.c` is always within `opts.length`.
- Progress load/save uses try/catch and safe defaults so private mode or quota errors don’t crash the app.
- Biblingo accepts optional props and uses defaults when not provided, so it still runs without the wrapper.
