/**
 * Teaching content for B.Th: 12 slides per lesson.
 * Uses real CSB (Christian Standard Bible) text from csbPassages for every slide.
 */

import { CSB_INTRO, CSB_PASSAGES, CSB_PASSAGE_KEYS, getCsbPassage } from "./csbPassages.js";

const SLIDES_PER_LESSON = 12;

/** Parse lessonId (e.g. bth-s1-m1-l5) to get lesson index 0–11. */
function getLessonIndex(lessonId) {
  if (!lessonId || typeof lessonId !== "string") return 0;
  const m = lessonId.match(/^bth-s\d+-m\d+-l(\d+)$/);
  if (!m) return 0;
  const n = parseInt(m[1], 10);
  return Math.max(0, Math.min(11, n - 1));
}

/** Build 12 steps from CSB passages for a given lesson. Each slide uses a real passage. */
function buildCsbSteps(lessonId) {
  const lessonIdx = getLessonIndex(lessonId);
  const steps = [];
  const numPassages = CSB_PASSAGE_KEYS.length;

  for (let stepIndex = 0; stepIndex < SLIDES_PER_LESSON; stepIndex++) {
    const keyIndex = (lessonIdx * SLIDES_PER_LESSON + stepIndex) % numPassages;
    const key = CSB_PASSAGE_KEYS[keyIndex];
    const passage = getCsbPassage(key);

    if (passage) {
      steps.push({
        title: `${passage.ref} — ${passage.title}`,
        body: passage.body,
        highlight:
          stepIndex === SLIDES_PER_LESSON - 1
            ? `Review: "${passage.ref}" and the main points of this lesson.`
            : null,
      });
    } else {
      steps.push({
        title: `Slide ${stepIndex + 1}`,
        body: CSB_INTRO,
        highlight: stepIndex === SLIDES_PER_LESSON - 1 ? "Review the main points of this lesson." : null,
      });
    }
  }

  return steps;
}

const DEFAULT_TERMS = [];

/** Returns { steps: [...12 steps], terms: [] } for any B.Th lesson id. All slides use real CSB material. */
export function getBthTeachContent(lessonId) {
  if (!lessonId || typeof lessonId !== "string") {
    return { steps: buildCsbSteps("bth-s1-m1-l1"), terms: DEFAULT_TERMS };
  }
  if (/^bth-s\d+-m\d+-l\d+$/.test(lessonId)) {
    return { steps: buildCsbSteps(lessonId), terms: DEFAULT_TERMS };
  }
  const legacy = BTH_TEACH_CONTENT_LEGACY[lessonId];
  if (legacy && Array.isArray(legacy.steps) && legacy.steps.length > 0) {
    const steps =
      legacy.steps.length >= SLIDES_PER_LESSON
        ? legacy.steps.slice(0, SLIDES_PER_LESSON)
        : [...legacy.steps, ...buildCsbSteps(lessonId).slice(legacy.steps.length, SLIDES_PER_LESSON)];
    return { steps, terms: legacy.terms || DEFAULT_TERMS };
  }
  return { steps: buildCsbSteps(lessonId), terms: DEFAULT_TERMS };
}

/** Legacy content (optional overrides). */
const BTH_TEACH_CONTENT_LEGACY = {};
