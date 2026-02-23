/**
 * App constants: modules and lesson type metadata.
 * MODULES is the single source of truth for course structure.
 */

export const MODULES = [
  {
    id: 'm1',
    number: 1,
    title: 'Context & Background',
    subtitle: 'The world that shaped Genesis',
    palette: {
      accent: '#ea580c',
      text: '#7c2d12',
      card: '#fff7ed',
      bg: '#fef3e2',
      badge: '#fed7aa',
      badgeText: '#c2410c',
      shadow: 'rgba(234,88,12,0.2)',
    },
    tag: 'HISTORY & CULTURE',
    emoji: '🏛️',
    xpTotal: 70,
    summary: 'Discover who wrote Genesis, when, and why — and how the ancient world shaped its radical message.',
    lessons: [
      { id: 'l1-1', type: 'reading', title: 'What Is Genesis?', duration: '5 min', xp: 20 },
      { id: 'l1-2', type: 'reading', title: 'Historical & Cultural Context', duration: '6 min', xp: 20 },
      { id: 'l1-3', type: 'quiz', title: 'Check Your Understanding', duration: '3 min', xp: 30 },
    ],
  },
  {
    id: 'm2',
    number: 2,
    title: 'Creation: Genesis 1–2',
    subtitle: 'In the beginning — a close reading',
    palette: {
      accent: '#0369a1',
      text: '#0c4a6e',
      card: '#f0f9ff',
      bg: '#e0f2fe',
      badge: '#bae6fd',
      badgeText: '#0369a1',
      shadow: 'rgba(3,105,161,0.2)',
    },
    tag: 'SCRIPTURE STUDY',
    emoji: '🌿',
    xpTotal: 105,
    summary: 'Explore the six days of creation, the image of God in humanity, and the Garden of Eden.',
    lessons: [
      { id: 'l2-1', type: 'reading', title: 'The Six Days: A Literary Masterpiece', duration: '7 min', xp: 25 },
      { id: 'l2-2', type: 'verse_study', title: 'Deep Dive: Genesis 1:1–3', duration: '5 min', xp: 25 },
      { id: 'l2-3', type: 'reflection', title: 'Reflect & Journal', duration: '5 min', xp: 20 },
      { id: 'l2-4', type: 'quiz', title: 'Creation Quiz', duration: '4 min', xp: 35 },
    ],
  },
  {
    id: 'm3',
    number: 3,
    title: 'The Fall: Genesis 3',
    subtitle: 'Sin, shame, and the first grace',
    palette: {
      accent: '#dc2626',
      text: '#7f1d1d',
      card: '#fff5f5',
      bg: '#fee2e2',
      badge: '#fecaca',
      badgeText: '#b91c1c',
      shadow: 'rgba(220,38,38,0.2)',
    },
    tag: 'THEOLOGY',
    emoji: '🍎',
    xpTotal: 80,
    summary: 'Unpack the anatomy of temptation, the weight of the Fall, and the hidden promise of redemption.',
    lessons: [
      { id: 'l3-1', type: 'reading', title: 'The Anatomy of Temptation', duration: '6 min', xp: 25 },
      { id: 'l3-2', type: 'verse_study', title: 'Deep Dive: The Protoevangelium', duration: '4 min', xp: 20 },
      { id: 'l3-3', type: 'quiz', title: 'The Fall — Quiz', duration: '4 min', xp: 35 },
    ],
  },
  {
    id: 'm4',
    number: 4,
    title: 'Covenant & Promise',
    subtitle: 'Abraham and the birth of faith',
    palette: {
      accent: '#4f46e5',
      text: '#1e1b4b',
      card: '#f5f3ff',
      bg: '#ede9fe',
      badge: '#c4b5fd',
      badgeText: '#4f46e5',
      shadow: 'rgba(79,70,229,0.2)',
    },
    tag: 'COVENANT',
    emoji: '⭐',
    xpTotal: 100,
    summary: "Follow Abraham's call from Ur, learn the three covenant pillars, and discover why Genesis 15:6 changed history.",
    lessons: [
      { id: 'l4-1', type: 'reading', title: "The Call of Abraham", duration: '7 min', xp: 25 },
      { id: 'l4-2', type: 'verse_study', title: 'Deep Dive: Genesis 15:6', duration: '4 min', xp: 20 },
      { id: 'l4-3', type: 'reflection', title: "Reflect: What Is Your 'Ur'?", duration: '5 min', xp: 20 },
      { id: 'l4-4', type: 'quiz', title: 'Covenant & Promise — Quiz', duration: '4 min', xp: 35 },
    ],
  },
  {
    id: 'm5',
    number: 5,
    title: 'Practice & Mastery',
    subtitle: "Drill everything you've learned",
    palette: {
      accent: '#7c3aed',
      text: '#2e1065',
      card: '#faf5ff',
      bg: '#f3e8ff',
      badge: '#ddd6fe',
      badgeText: '#7c3aed',
      shadow: 'rgba(124,58,237,0.2)',
    },
    tag: 'PRACTICE',
    emoji: '⚡',
    xpTotal: 130,
    isPractice: true,
    summary: "Speed rounds, verse matching, and theology drills — only unlocked after completing all four teaching modules.",
    lessons: [
      { id: 'l5-1', type: 'drill', title: 'Verse Identification Drill', duration: '5 min', xp: 40 },
      { id: 'l5-2', type: 'drill', title: 'Match Verses to References', duration: '5 min', xp: 40 },
      { id: 'l5-3', type: 'drill', title: 'Theology Speed Round', duration: '4 min', xp: 50 },
    ],
  },
];

export const LESSON_META = {
  reading: { icon: '📖', label: 'Reading', color: '#ea580c' },
  verse_study: { icon: '🔍', label: 'Verse Study', color: '#0369a1' },
  reflection: { icon: '💭', label: 'Reflect', color: '#059669' },
  quiz: { icon: '✏️', label: 'Quiz', color: '#dc2626' },
  drill: { icon: '⚡', label: 'Drill', color: '#7c3aed' },
};

/** All lesson IDs that exist in MODULES (for validation). */
export function getAllLessonIds() {
  return MODULES.flatMap((m) => m.lessons.map((l) => l.id));
}
