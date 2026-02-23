/**
 * Quiz/drill questions per lesson. Correct answer index (c) is validated
 * to be within opts length so rendering never fails.
 */

const QUESTIONS_RAW = {
  'l1-3': [
    { q: "What does 'Genesis' mean in Greek?", opts: ["God's word", 'Origin or beginning', 'The covenant', 'Creation of light'], c: 1 },
    { q: 'Which two sections divide the book of Genesis?', opts: ['The Law and the Prophets', 'Creation and Redemption', 'Primeval History and Patriarchal Narratives', "Moses's story and Joseph's story"], c: 2 },
    { q: "What is 'Imago Dei'?", opts: ['The image of creation', 'The image of God in humanity', 'A Babylonian god', 'The first covenant'], c: 1 },
    { q: 'How does Genesis differ from Babylonian creation myths?', opts: ['Humans are slaves to gods', 'Humans are made in God\'s image, not slaves', 'Humans have no purpose', 'Humans created the gods'], c: 1 },
  ],
  'l2-4': [
    { q: "What Hebrew word meaning 'good' does God repeat over each day?", opts: ['Shalom', 'Tov', 'Ruach', 'Hesed'], c: 1 },
    { q: "What does 'ex nihilo' mean?", opts: ['From the earth', 'Out of nothing', 'By the word', 'In the beginning'], c: 1 },
    { q: 'Days 1–3 formed the realms. What did Days 4–6 do?', opts: ['Destroyed the chaos', 'Formed new realms', 'Filled the realms', 'Rested from creation'], c: 2 },
    { q: 'In Genesis 2, how does God form Adam?', opts: ['From light', 'From water', 'From dust, breathing life into him', 'From a word alone'], c: 2 },
  ],
  'l3-3': [
    { q: "What is the serpent's first tactic in Genesis 3?", opts: ['Direct denial of God', 'A physical threat', "Twisting God's words with a question", 'Offering a gift'], c: 2 },
    { q: "What is the 'Protoevangelium'?", opts: ['The first sin', 'The first act of worship', 'The first gospel promise hidden in Genesis 3:15', "God's covenant with Abraham"], c: 2 },
    { q: 'What did God make for Adam and Eve after the Fall?', opts: ['A new garden', 'Garments of skin', 'A list of laws', 'A city'], c: 1 },
    { q: 'What three categories of temptation did Eve face?', opts: ['Pride, power, and possessions', 'Physical desire, aesthetic appeal, intellectual pride', 'Fear, doubt, and anger', 'Wealth, fame, and pleasure'], c: 1 },
  ],
  'l4-4': [
    { q: 'What are the three pillars of the Abrahamic Covenant?', opts: ['Faith, hope, and love', 'Land, seed, and blessing', 'Law, sacrifice, and temple', 'Creation, fall, and redemption'], c: 1 },
    { q: "In Genesis 15's covenant ceremony, who alone passes between the pieces?", opts: ['Abraham', 'Both Abraham and God', 'God alone', 'An angel'], c: 2 },
    { q: 'Genesis 15:6 says Abraham believed God and it was credited to him as what?', opts: ['Wisdom', 'Righteousness', 'Salvation', 'Eternal life'], c: 1 },
    { q: 'Where was Abraham originally called from?', opts: ['Egypt', 'Canaan', 'Ur of the Chaldees', 'Babylon'], c: 2 },
  ],
  'l5-1': [
    { q: "Which verse? 'In the beginning God created the heavens and the earth.'", opts: ['Genesis 1:1', 'John 1:1', 'Psalm 33:6', 'Hebrews 11:3'], c: 0 },
    { q: "Complete: 'Abram believed the LORD, and he credited it to him as ___'", opts: ['faith', 'wisdom', 'righteousness', 'salvation'], c: 2 },
    { q: 'Which reference is the Protoevangelium?', opts: ['Genesis 1:1', 'Genesis 3:15', 'Genesis 12:3', 'Genesis 15:6'], c: 1 },
    { q: "What does 'tohu wabohu' mean?", opts: ['Very good', 'In the beginning', 'Formless and empty', 'Dust and ashes'], c: 2 },
    { q: 'God made garments of ___ for Adam and Eve.', opts: ['leaves', 'light', 'wool', 'skin'], c: 3 },
  ],
  'l5-2': [
    { q: "Match: 'And God saw that it was good'", opts: ['Genesis 1:31', 'Genesis 3:6', 'Genesis 12:1', 'Genesis 15:17'], c: 0 },
    { q: "Match: 'I will make you into a great nation'", opts: ['Genesis 1:1', 'Genesis 3:15', 'Genesis 12:2', 'Genesis 22:18'], c: 2 },
    { q: "Match: 'He will crush your head, you will strike his heel'", opts: ['Genesis 3:15', 'Genesis 12:3', 'Genesis 15:6', 'Genesis 1:27'], c: 0 },
    { q: "Match: 'So God created mankind in his own image'", opts: ['Genesis 1:3', 'Genesis 1:27', 'Genesis 2:7', 'Genesis 3:1'], c: 1 },
  ],
  'l5-3': [
    { q: "What does 'Imago Dei' mean?", opts: ['God is love', 'Image of God', 'In the beginning', 'Creator God'], c: 1 },
    { q: "What is 'ex nihilo' creation?", opts: ['Created from water', 'Created from chaos', 'Created from nothing', 'Created from light'], c: 2 },
    { q: "The Abrahamic covenant's ultimate fulfillment points to:", opts: ['Moses', 'David', 'Jesus Christ', 'The Church'], c: 2 },
    { q: "What is the 'Primeval History' of Genesis?", opts: ['Chapters 1–5', 'Chapters 1–11', 'Chapters 12–25', 'Chapters 1–3'], c: 1 },
    { q: 'In Genesis 15, the covenant ceremony symbolized:', opts: ['Prayer', 'Death if the covenant was broken', 'A wedding', 'Baptism'], c: 1 },
  ],
};

/**
 * Normalize a single question: ensure c is a valid index for opts.
 */
function normalizeQuestion(q) {
  if (!q || !Array.isArray(q.opts) || q.opts.length === 0) return null;
  const opts = q.opts;
  let c = typeof q.c === 'number' && Number.isInteger(q.c) ? q.c : 0;
  if (c < 0 || c >= opts.length) c = 0;
  return { q: q.q || 'Question', opts, c };
}

/**
 * Safe getter: returns an array of questions with validated correct index.
 * Returns empty array if lessonId has no questions.
 */
export function getQuestions(lessonId) {
  if (!lessonId || typeof lessonId !== 'string') return [];
  const list = QUESTIONS_RAW[lessonId];
  if (!Array.isArray(list) || list.length === 0) return [];
  return list.map(normalizeQuestion).filter(Boolean);
}

export { QUESTIONS_RAW };
