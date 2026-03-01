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
        body: "The Old Testament is the first part of the Bible.\nIt contains 39 books.\n\nIt tells the story of:\n- Creation\n- Humanity\n- God's relationship with His people\n- The promises that shape the rest of Scripture\n\nThese books were written over many centuries and carefully preserved.\n\nThe Old Testament lays the foundation for everything that follows.",
        highlight: "Purpose of this lesson: To help you see that the Bible begins with foundational stories that introduce God, humanity, covenant, and purpose — themes that guide everything that follows.",
        imagePrompt: "Old Testament overview: 39 book icons grouped, simple flat vector, teal/cream palette, classroom card style.",
        image: "/assets/lesson1/slide-01.png",
      },
      {
        title: "In the Beginning (Genesis 1:1–5)",
        body: "\"In the beginning God created the heavens and the earth.\"\n\nThe Bible begins with God.\n\nBefore anything existed:\n- God was there.\n- God created.\n- God brought light into darkness.\n\nThis teaches us:\n- God is powerful.\n- God brings order from chaos.\n- Creation is intentional, not accidental.",
        highlight: null,
        imagePrompt: "Genesis creation: light emerging over dark waters, minimal vector, gentle gradient.",
        image: "/assets/lesson1/slide-02.png",
      },
      {
        title: "Humanity in God's Image (Genesis 1:26–28)",
        body: "God created humanity in His image.\n\nThis means:\n- Humans have dignity.\n- Humans have responsibility.\n- Humans are meant to reflect God's character.\n\nFrom the very beginning:\nGod gives purpose — to care for creation and live in relationship with Him.",
        highlight: null,
        imagePrompt: "Humanity in God's image: two simple human silhouettes with subtle glow/halo motif, respectful.",
        image: "/assets/lesson1/slide-03.png",
      },
      {
        title: "The Fall (Genesis 3:1–6)",
        body: "Humans chose to disobey God.\n\nThis event introduces:\n- Sin\n- Broken trust\n- Separation\n\nThe Fall explains why:\n- The world is not as it should be.\n- People struggle with good and evil.\n\nBut even here, the story does not end.",
        highlight: null,
        imagePrompt: "The fall: simple tree with fruit and a subtle broken line/choice symbol, minimal.",
        image: "/assets/lesson1/slide-04.png",
      },
      {
        title: "Consequences and Hope (Genesis 3:14–19)",
        body: "Disobedience brought consequences:\n- Pain\n- Struggle\n- Hard work\n- Mortality\n\nYet even in judgment, God speaks of future victory over evil.\n\nThe Bible is not only about failure.\nIt is about restoration.",
        highlight: null,
        imagePrompt: "Consequences and hope: cracked ground with a small sprout emerging, hopeful tone.",
        image: "/assets/lesson1/slide-05.png",
      },
      {
        title: "The Flood and Covenant (Genesis 9:8–17)",
        body: "Human corruption grew.\n\nGod judged the earth with a flood.\n\nBut God also made a covenant with Noah.\n\nA covenant is a promise.\n\nThe rainbow became a sign:\nGod commits to His creation.\n\nGod is both just and merciful.",
        highlight: null,
        imagePrompt: "Noahic covenant: rainbow over calm water with ark silhouette, soft vector.",
        image: "/assets/lesson1/slide-06.png",
      },
      {
        title: "The Tower of Babel (Genesis 11:1–9)",
        body: "People tried to build a name for themselves.\n\nInstead of trusting God, they sought control and fame.\n\nGod confused their language.\n\nLesson:\nHuman pride divides.\nGod remains sovereign.\n\nThis explains the diversity of nations and languages.",
        highlight: null,
        imagePrompt: "Babel: tall tower with scattered speech bubbles in different symbols, playful.",
        image: "/assets/lesson1/slide-07.png",
      },
      {
        title: "The Call of Abram (Genesis 12:1–5)",
        body: "God chooses Abram.\n\nGod promises:\n- A great nation\n- Blessing\n- A future for all nations\n\nThis moment begins a central theme:\nGod works through one family to bless the whole world.\n\nThe Bible becomes the story of that promise unfolding.",
        highlight: null,
        imagePrompt: "Call of Abram: figure walking toward a starry horizon, path/road motif.",
        image: "/assets/lesson1/slide-08.png",
      },
      {
        title: "The Covenant with Abraham (Genesis 17:1–8)",
        body: "God changes Abram's name to Abraham.\n\nGod establishes a lasting covenant:\n- Many nations\n- Kings\n- A permanent relationship\n\nThis covenant shapes Israel's identity.\n\nIt also prepares the way for the New Testament.",
        highlight: null,
        imagePrompt: "Abrahamic covenant: stars and a family tree/branch motif, covenant seal symbol.",
        image: "/assets/lesson1/slide-09.png",
      },
      {
        title: "Understanding Scripture",
        body: "The Bible contains different types of writing:\n\n- Narrative (stories)\n- Law\n- Poetry\n- Prophecy\n\nGenre shapes how we read.\n\nWe must consider:\n- Context\n- Audience\n- Purpose\n\nCareful reading leads to deeper understanding.",
        highlight: null,
        imagePrompt: "How to read: icons for narrative/law/poetry/prophecy like labeled cards, simple.",
        image: "/assets/lesson1/slide-10.png",
      },
      {
        title: "The Bible as One Story",
        body: "The Bible is not random stories.\n\nIt tells one unified story:\n\nCreation\n→ Fall\n→ Promise\n→ Covenant\n→ Redemption\n\nThe Old Testament prepares for what comes next.\n\nUnderstanding the beginning helps us understand everything else.",
        highlight: null,
        imagePrompt: "One story timeline: connected nodes from creation to redemption, clean infographic.",
        image: "/assets/lesson1/slide-11.png",
      },
      {
        title: "Check Your Understanding",
        body: "Reflect:\n\n1. What do the early stories teach about God?\n2. What do they teach about humanity?\n3. Why are covenants important?\n4. How do these stories connect together?\n\nKey truth:\nGod begins with purpose — and He continues His plan through history.",
        highlight: "Key truth: God begins with purpose — and He continues His plan through history.",
        imagePrompt: "Check understanding: green checkmark with simple question icons, friendly.",
        image: "/assets/lesson1/slide-12.png",
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
