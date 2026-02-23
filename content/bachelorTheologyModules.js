/**
 * Bachelor of Theology (B.Th) — built from syllabus.
 * Each module has 12 lessons; each lesson has 12 slides (see bthTeachContent).
 */

import { SEMESTERS, lessonId } from "./bthSyllabus.js";

const BTH_PALETTE = (accent, text, card, bg, badge, badgeText, shadow) => ({
  accent,
  text,
  card,
  bg,
  badge,
  badgeText,
  shadow: shadow || `rgba(0,0,0,0.15)`,
});

const PALETTES = [
  BTH_PALETTE("#0d9488", "#0f766e", "#ccfbf1", "#f0fdfa", "#99f6e4", "#0d9488", "rgba(13,148,136,0.2)"),
  BTH_PALETTE("#2563eb", "#1d4ed8", "#dbeafe", "#eff6ff", "#93c5fd", "#2563eb", "rgba(37,99,235,0.2)"),
  BTH_PALETTE("#7c3aed", "#6d28d9", "#ede9fe", "#f5f3ff", "#c4b5fd", "#7c3aed", "rgba(124,58,237,0.2)"),
  BTH_PALETTE("#ca8a04", "#a16207", "#fef9c3", "#fefce8", "#fde047", "#ca8a04", "rgba(202,138,4,0.2)"),
  BTH_PALETTE("#059669", "#047857", "#d1fae5", "#ecfdf5", "#6ee7b7", "#059669", "rgba(5,150,105,0.2)"),
  BTH_PALETTE("#b45309", "#92400e", "#ffedd5", "#fff7ed", "#fdba74", "#b45309", "rgba(180,83,9,0.2)"),
  BTH_PALETTE("#15803d", "#166534", "#dcfce7", "#f0fdf4", "#86efac", "#15803d", "rgba(21,128,61,0.2)"),
  BTH_PALETTE("#c2410c", "#9a3412", "#ffedd5", "#fff7ed", "#fed7aa", "#c2410c", "rgba(194,65,12,0.2)"),
];

const EMOJIS = ["📜", "✝️", "📖", "🔍", "⛪", "🌍", "📐", "⚖️"];

function buildLessons(semester, moduleIndex) {
  const lessons = [];
  for (let l = 0; l < 12; l++) {
    const id = lessonId(semester.number, moduleIndex, l);
    const isLast = l === 11;
    lessons.push({
      id,
      type: isLast ? "quiz" : "reading",
      title: isLast ? "Check Your Understanding" : `Lesson ${l + 1}`,
      duration: isLast ? "5 min" : "6 min",
      xp: isLast ? 40 : 20,
    });
  }
  return lessons;
}

let globalModuleNumber = 0;

export const BTH_MODULES = SEMESTERS.flatMap((sem) =>
  sem.modules.map((title, mIdx) => {
    globalModuleNumber += 1;
    const palette = PALETTES[(globalModuleNumber - 1) % PALETTES.length];
    const emoji = EMOJIS[(globalModuleNumber - 1) % EMOJIS.length];
    return {
      id: `bth-s${sem.number}-m${mIdx + 1}`,
      semester: sem.number,
      year: sem.year,
      number: globalModuleNumber,
      title,
      subtitle: `Year ${sem.year} · Semester ${sem.number}`,
      palette,
      tag: "B.TH",
      emoji,
      xpTotal: 11 * 20 + 40,
      summary: `${title}. Twelve lessons per module.`,
      lessons: buildLessons(sem, mIdx),
    };
  })
);

export const BTH_YEARS = [1, 2, 3];

export { SEMESTERS } from "./bthSyllabus.js";

export function getBthLessonIds() {
  return BTH_MODULES.flatMap((m) => m.lessons.map((l) => l.id));
}
