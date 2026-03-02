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

/**
 * Legacy content (optional overrides). Module 1 Lesson 1: In the Beginning – Foundations of the Story.
 * imagePrompt: production-ready prompts for image generation — flat vector, soft pastels (teal/cream/gold/blue/lavender),
 * minimal detail, rounded shapes, 4:3, centered, no text, no photorealism, educational reverent tone.
 */
const BTH_TEACH_CONTENT_LEGACY = {
  "bth-s1-m1-l1": {
    steps: [
      {
        title: "What Is the Old Testament?",
        body: "The Old Testament is a collection of 39 books.\n\nThese books are grouped into sections and preserved carefully over time.\n\nThey tell the story of:\n- Creation\n- Humanity\n- God's covenant with His people\n- The unfolding plan of redemption\n\nThis is where the Bible's story begins.",
        highlight: "Learners can explain what the Old Testament is and why it forms the foundation of Scripture.",
        imagePrompt: "Flat vector educational illustration of 39 small book icons grouped into three subtle clusters, arranged neatly on a soft teal-cream gradient background. Books are simple rounded rectangles in muted greens and blues, symbolizing unity and structure. Gentle drop shadows, clean modern design, centered composition, minimal detail, soft lighting, no text, 4:3 aspect ratio.",
        image: "/Biblingo/Y1/M1/L1/1.png",
      },
      {
        title: "In the Beginning (Genesis 1:1–5)",
        body: "\"In the beginning God created the heavens and the earth.\"\n\nThe Bible begins with light entering darkness.\n\nGod brings:\n- Order from chaos\n- Light from darkness\n- Life from emptiness\n\nCreation shows God's power and purpose.",
        highlight: "Learners recognize that the Bible begins with God as Creator and source of order.",
        imagePrompt: "Minimal flat vector illustration of light breaking through darkness over calm abstract waters. Dark teal fading into soft golden light at the center. Subtle glow radiating outward to symbolize creation. No stars or realism — just abstract shapes and gradient. Clean, peaceful, reverent tone, centered composition, soft shadow, 4:3.",
        image: "/Biblingo/Y1/M1/L1/2.png",
      },
      {
        title: "Humanity in God's Image (Genesis 1:26–28)",
        body: "God created humanity in His image.\n\nThis means:\n- Every person has dignity.\n- Every person has value.\n- Humans reflect God in a unique way.\n\nWe were created for relationship and responsibility.",
        highlight: "Learners can describe what it means to be made in God's image.",
        imagePrompt: "Two simple human silhouettes (gender-neutral, minimal shapes) standing side by side with a faint soft golden halo glow behind them. Soft green-blue gradient background. Clean flat vector style, rounded edges, no facial features, calm reverent tone, balanced composition, subtle shadow depth, 4:3.",
        image: "/Biblingo/Y1/M1/L1/3.png",
      },
      {
        title: "The Fall (Genesis 3:1–6)",
        body: "Humans chose their own way instead of trusting God.\n\nThis moment introduced:\n- Sin\n- Separation\n- Broken trust\n\nThe world changed because of that choice.\n\nBut God's plan did not stop.",
        highlight: "Learners can explain how disobedience affects humanity and the world.",
        imagePrompt: "Simple flat vector illustration of a stylized tree with rounded canopy and a single highlighted fruit. A subtle curved path leading toward the tree. Soft muted earth tones with gentle teal background. No serpent depiction. Symbolic choice moment. Minimal design, calm educational tone, 4:3.",
        image: "/Biblingo/Y1/M1/L1/4.png",
      },
      {
        title: "Consequences and Hope (Genesis 3:14–19)",
        body: "Sin brought consequences:\n- Pain\n- Struggle\n- Hard work\n\nYet even in judgment, hope appears.\n\nLike a sprout from dry ground, God promises restoration.\n\nGod's story continues toward healing.",
        highlight: "Learners identify that God responds to failure with both justice and hope.",
        imagePrompt: "Flat vector illustration of cracked earth in foreground with a small green sprout emerging from one crack. Background soft muted beige fading into light teal. Symbol of hardship and hope. Clean, minimal, centered, soft shadow, educational aesthetic, 4:3.",
        image: "/Biblingo/Y1/M1/L1/5.png",
      },
      {
        title: "The Flood and Covenant (Genesis 9:8–17)",
        body: "As corruption increased, God judged the earth.\n\nBut He also made a covenant with Noah.\n\nA covenant is a promise.\n\nThe rainbow reminds us:\nGod is just.\nGod is merciful.\nGod commits to His creation.",
        highlight: "Learners understand what a covenant is and why it matters.",
        imagePrompt: "Minimal flat vector illustration of a small ark silhouette resting on calm water under a soft pastel rainbow. Background gentle blue gradient sky with subtle light glow. Rounded shapes, no realism, peaceful tone, balanced centered layout, 4:3.",
        image: "/Biblingo/Y1/M1/L1/6.png",
      },
      {
        title: "The Tower of Babel (Genesis 11:1–9)",
        body: "People tried to build a name for themselves.\n\nInstead of trusting God, they pursued pride and control.\n\nGod confused their language.\n\nThis explains:\n- The diversity of languages\n- The limits of human pride\n- God remains sovereign.",
        highlight: "Learners can explain how pride leads to division.",
        imagePrompt: "Flat vector illustration of a simple stepped tower rising upward with small abstract speech bubble shapes floating around it in different soft colors. No realism. Soft beige and teal gradient background. Symbolic representation of language confusion. Clean, rounded, educational style, 4:3.",
        image: "/Biblingo/Y1/M1/L1/7.png",
      },
      {
        title: "The Call of Abram (Genesis 12:1–5)",
        body: "God calls Abram to leave his home.\n\nHe promises:\n- A nation\n- Blessing\n- A future\n\nThrough one man, God begins a new chapter of His plan.\n\nFaith begins with trust.",
        highlight: "Learners recognize how God begins His promise through Abraham.",
        imagePrompt: "Minimal flat vector illustration of a single figure walking along a curved path toward a softly glowing star on the horizon. Desert-toned foreground fading into teal sky. No facial detail. Symbolic journey theme. Calm inspirational tone, centered composition, soft gradients, 4:3.",
        image: "/Biblingo/Y1/M1/L1/8.png",
      },
      {
        title: "The Covenant with Abraham (Genesis 17:1–8)",
        body: "God promises Abraham descendants as numerous as the stars.\n\nThis covenant includes:\n- A people\n- A land\n- A lasting relationship\n\nThis promise shapes the rest of the Bible.",
        highlight: "Learners can connect Abraham's covenant to the larger biblical story.",
        imagePrompt: "Flat vector illustration of a night sky filled with softly glowing stars forming a gentle arc above a subtle family tree branch silhouette. Deep blue fading into teal gradient. Symbol of promise and descendants. Clean, modern, reverent, minimal detail, 4:3.",
        image: "/Biblingo/Y1/M1/L1/9.png",
      },
      {
        title: "Understanding Scripture",
        body: "The Bible contains different types of writing:\n\n- Narrative (stories)\n- Law\n- Poetry\n- Prophecy\n\nEach type helps us understand God in different ways.\n\nHow we read depends on what we are reading.",
        highlight: "Learners can identify major genres of the Bible.",
        imagePrompt: "Minimal flat vector illustration of four rounded cards arranged horizontally, each with a simple icon: scroll (narrative), tablet shape (law), harp outline (poetry), speech bubble outline (prophecy). Soft pastel background gradient. Clean educational infographic style, no text, 4:3.",
        image: "/Biblingo/Y1/M1/L1/10.png",
      },
      {
        title: "The Bible as One Story",
        body: "The Bible is not random events.\n\nIt tells one connected story:\n\nCreation\n→ Fall\n→ Promise\n→ Covenant\n→ Redemption\n\nLike a journey under the stars, God guides history toward fulfillment.",
        highlight: "Learners can summarize the Bible as one unified story.",
        imagePrompt: "Flat vector timeline graphic with five connected circular nodes arranged in a gentle curve. Each node subtly color-coded. Background soft neutral teal gradient. Clean infographic style symbolizing unified progression. Rounded shapes, subtle depth, minimal design, 4:3.",
        image: "/Biblingo/Y1/M1/L1/11.png",
      },
      {
        title: "Check Your Understanding",
        body: "Reflect:\n\nWhat does creation teach us about God?\n\nWhat does the Fall explain about humanity?\n\nWhy are covenants important?\n\nHow do these events connect together?\n\nKey Truth:\nGod begins with purpose — and continues His plan through history.",
        highlight: "Learners demonstrate foundational understanding of early biblical themes.",
        imagePrompt: "Minimal flat vector illustration of a large soft green circular badge with a centered checkmark icon. Around it, faint subtle question mark icons in background. Calm pastel gradient background. Friendly educational tone, soft shadow, centered composition, 4:3.",
        image: "/Biblingo/Y1/M1/L1/12.png",
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
