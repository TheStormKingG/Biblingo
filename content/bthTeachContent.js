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

/** Returns { steps: [...12 steps], terms: [] } for any B.Th lesson id. Legacy overrides for specific lessons. */
export function getBthTeachContent(lessonId) {
  if (!lessonId || typeof lessonId !== "string") {
    return { steps: buildCsbSteps("bth-s1-m1-l1"), terms: DEFAULT_TERMS };
  }
  const legacy = BTH_TEACH_CONTENT_LEGACY[lessonId];
  if (legacy && Array.isArray(legacy.steps) && legacy.steps.length > 0) {
    const steps =
      legacy.steps.length >= SLIDES_PER_LESSON
        ? legacy.steps.slice(0, SLIDES_PER_LESSON)
        : [...legacy.steps, ...buildCsbSteps(lessonId).slice(legacy.steps.length, SLIDES_PER_LESSON)];
    return { steps, terms: legacy.terms || DEFAULT_TERMS };
  }
  if (/^bth-s\d+-m\d+-l\d+$/.test(lessonId)) {
    return { steps: buildCsbSteps(lessonId), terms: DEFAULT_TERMS };
  }
  return { steps: buildCsbSteps(lessonId), terms: DEFAULT_TERMS };
}

/** Legacy content (optional overrides). Module 1 Lesson 1: In the Beginning – Foundations of the Story. */
const BTH_TEACH_CONTENT_LEGACY = {
  "bth-s1-m1-l1": {
    steps: [
      {
        title: "What Is the Old Testament?",
        body: "The Old Testament is the first part of the Bible. It contains 39 books. It tells the story of: Creation, Humanity, God's relationship with His people, and the promises that shape the rest of Scripture. These books were written over many centuries and carefully preserved. The Old Testament lays the foundation for everything that follows.",
        highlight: "Purpose of this lesson: To help you see that the Bible begins with foundational stories that introduce God, humanity, covenant, and purpose — themes that guide everything that follows.",
      },
      {
        title: "In the Beginning (Genesis 1:1–5)",
        body: '"In the beginning God created the heavens and the earth." The Bible begins with God. Before anything existed: God was there. God created. God brought light into darkness. This teaches us: God is powerful. God brings order from chaos. Creation is intentional, not accidental.',
        highlight: null,
      },
      {
        title: "Humanity in God's Image (Genesis 1:26–28)",
        body: "God created humanity in His image. This means: Humans have dignity. Humans have responsibility. Humans are meant to reflect God's character. From the very beginning, God gives purpose — to care for creation and live in relationship with Him.",
        highlight: null,
      },
      {
        title: "The Fall (Genesis 3:1–6)",
        body: "Humans chose to disobey God. This event introduces: Sin, Broken trust, Separation. The Fall explains why the world is not as it should be and why people struggle with good and evil. But even here, the story does not end.",
        highlight: null,
      },
      {
        title: "Consequences and Hope (Genesis 3:14–19)",
        body: "Disobedience brought consequences: Pain, Struggle, Hard work, Mortality. Yet even in judgment, God speaks of future victory over evil. The Bible is not only about failure. It is about restoration.",
        highlight: null,
      },
      {
        title: "The Flood and Covenant (Genesis 9:8–17)",
        body: "Human corruption grew. God judged the earth with a flood. But God also made a covenant with Noah. A covenant is a promise. The rainbow became a sign: God commits to His creation. God is both just and merciful.",
        highlight: null,
      },
      {
        title: "The Tower of Babel (Genesis 11:1–9)",
        body: "People tried to build a name for themselves. Instead of trusting God, they sought control and fame. God confused their language. Lesson: Human pride divides. God remains sovereign. This explains the diversity of nations and languages.",
        highlight: null,
      },
      {
        title: "The Call of Abram (Genesis 12:1–5)",
        body: "God chooses Abram. God promises: A great nation, Blessing, A future for all nations. This moment begins a central theme: God works through one family to bless the whole world. The Bible becomes the story of that promise unfolding.",
        highlight: null,
      },
      {
        title: "The Covenant with Abraham (Genesis 17:1–8)",
        body: "God changes Abram's name to Abraham. God establishes a lasting covenant: Many nations, Kings, A permanent relationship. This covenant shapes Israel's identity. It also prepares the way for the New Testament.",
        highlight: null,
      },
      {
        title: "Understanding Scripture",
        body: "The Bible contains different types of writing: Narrative (stories), Law, Poetry, Prophecy. Genre shapes how we read. We must consider: Context, Audience, Purpose. Careful reading leads to deeper understanding.",
        highlight: null,
      },
      {
        title: "The Bible as One Story",
        body: "The Bible is not random stories. It tells one unified story: Creation → Fall → Promise → Covenant → Redemption. The Old Testament prepares for what comes next. Understanding the beginning helps us understand everything else.",
        highlight: null,
      },
      {
        title: "Check Your Understanding",
        body: "Reflect: What do the early stories teach about God? What do they teach about humanity? Why are covenants important? How do these stories connect together?",
        highlight: "Key truth: God begins with purpose — and He continues His plan through history.",
      },
    ],
    terms: [
      ["Old Testament", "The first part of the Bible; 39 books that tell of creation, God's people, and His promises."],
      ["Covenant", "A promise or agreement. God made covenants with Noah and Abraham."],
      ["Creation", "God bringing the world and everything in it into being."],
      ["The Fall", "When humans first disobeyed God; it brought sin and brokenness into the world."],
      ["Image of God", "Humans are made to reflect God's character and have dignity and purpose."],
      ["Babel", "When people tried to make a name for themselves; God confused their language."],
      ["Abraham", "The man God chose; through his family God would bless all nations."],
    ],
  },
};
