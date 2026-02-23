/**
 * Teaching content for B.Th: 12 slides per lesson.
 * Lesson ID format: bth-s{1-6}-m{1-N}-l{1-12}. Placeholder steps for all; replace with real content.
 */

const SLIDES_PER_LESSON = 12;

function placeholderSteps(id, count = SLIDES_PER_LESSON) {
  const steps = [];
  for (let i = 0; i < count; i++) {
    steps.push({
      title: `Slide ${i + 1}`,
      body: `Content for ${id}, slide ${i + 1}. Replace with course material that aids the reader.`,
      highlight: i === count - 1 ? "Review the main points of this lesson." : null,
    });
  }
  return steps;
}

const DEFAULT_TERMS = [];

/** Returns { steps: [...12 steps], terms: [] } for any B.Th lesson id. */
export function getBthTeachContent(lessonId) {
  if (!lessonId || typeof lessonId !== "string") {
    return { steps: placeholderSteps("unknown", SLIDES_PER_LESSON), terms: DEFAULT_TERMS };
  }
  // New syllabus format: bth-s1-m1-l1 ... bth-s6-m*-l12
  if (/^bth-s\d+-m\d+-l\d+$/.test(lessonId)) {
    return { steps: placeholderSteps(lessonId, SLIDES_PER_LESSON), terms: DEFAULT_TERMS };
  }
  // Legacy ids (if any) — still support 12 steps by padding
  const legacy = BTH_TEACH_CONTENT_LEGACY[lessonId];
  if (legacy && Array.isArray(legacy.steps) && legacy.steps.length > 0) {
    const steps = legacy.steps.length >= SLIDES_PER_LESSON
      ? legacy.steps.slice(0, SLIDES_PER_LESSON)
      : [...legacy.steps, ...placeholderSteps(lessonId, SLIDES_PER_LESSON - legacy.steps.length)];
    return { steps, terms: legacy.terms || DEFAULT_TERMS };
  }
  return { steps: placeholderSteps(lessonId, SLIDES_PER_LESSON), terms: DEFAULT_TERMS };
}

/** Legacy content (optional): keep for reference or specific overrides. */
const BTH_TEACH_CONTENT_LEGACY = {};
