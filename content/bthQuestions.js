/**
 * Quiz questions for Bachelor of Theology modules.
 * Correct index (c) is 0-based and validated against opts length.
 */

const BTH_QUESTIONS_RAW = {
  'bth-y1-ot-3': [
    { q: 'How many books are in the Protestant Old Testament canon?', opts: ['27', '39', '66', '46'], c: 1 },
    { q: 'What are the three main divisions of the Hebrew Bible?', opts: ['Law, History, Poetry', 'Torah, Prophets, Writings', 'Gospels, Letters, Revelation', 'Old, Middle, New'], c: 1 },
    { q: 'Which language was the OT primarily written in?', opts: ['Greek', 'Hebrew', 'Aramaic', 'Latin'], c: 1 },
    { q: 'What does "Torah" mean?', opts: ['Prophets', 'Law', 'Writings', 'Covenant'], c: 1 },
  ],
  'bth-y1-nt-3': [
    { q: 'How many books are in the New Testament?', opts: ['39', '27', '66', '22'], c: 1 },
    { q: 'Which book links the Gospels to the epistles?', opts: ['Romans', 'Acts', 'Revelation', 'James'], c: 1 },
    { q: 'The Gospels were written in which century?', opts: ['Second century BC', 'First century AD', 'Fourth century AD', 'First century BC'], c: 1 },
    { q: 'What genre is Revelation?', opts: ['Letter', 'Gospel', 'Apocalyptic', 'Wisdom'], c: 2 },
  ],
  'bth-y1-doctrine-3': [
    { q: 'What does the doctrine of the Trinity affirm?', opts: ['Three gods', 'One God in three persons', 'One person in three modes', 'God is only in the OT'], c: 1 },
    { q: 'Scripture is often described as:', opts: ['Human opinion', 'God-breathed', 'Useful only for history', 'Inspired only in places'], c: 1 },
    { q: 'Which term means "God making himself known"?', opts: ['Inspiration', 'Revelation', 'Canon', 'Authority'], c: 1 },
  ],
  'bth-y1-herm-3': [
    { q: 'What is hermeneutics?', opts: ['A book of the Bible', 'The theory and practice of interpretation', 'A type of genre', 'A church council'], c: 1 },
    { q: 'Reading meaning into the text is called:', opts: ['Exegesis', 'Hermeneutics', 'Eisegesis', 'Canon'], c: 2 },
    { q: 'Why does genre matter for reading the Bible?', opts: ['It doesn\'t', 'It shapes how we interpret (e.g. poetry vs law)', 'Only for the NT', 'Only for the OT'], c: 1 },
  ],
  // Year 2 & 3 quizzes: placeholders
  'bth-y2-ot-3': [
    { q: 'The Pentateuch includes which books?', opts: ['Genesis–Deuteronomy', 'Joshua–Ruth', 'Psalms–Song of Songs', 'Isaiah–Malachi'], c: 0 },
    { q: 'The "Former Prophets" in the Hebrew canon include:', opts: ['Isaiah, Jeremiah', 'Joshua, Judges, Samuel, Kings', 'Matthew, Mark', 'Psalms, Proverbs'], c: 1 },
  ],
  'bth-y2-nt-3': [
    { q: 'Which Gospels are called "Synoptic"?', opts: ['Matthew, Mark, Luke', 'John only', 'All four', 'Mark and John'], c: 0 },
    { q: 'Acts describes the spread of the church from:', opts: ['Rome to Spain', 'Jerusalem to Rome', 'Alexandria to Athens', 'Antioch to Jerusalem'], c: 1 },
  ],
  'bth-y2-ch-3': [
    { q: 'The Council of Nicaea (325) addressed:', opts: ['The canon', 'The divinity of Christ', 'The Reformation', 'Baptism'], c: 1 },
    { q: 'The Reformation is traditionally dated from:', opts: ['325', '1054', '1517', '1545'], c: 2 },
  ],
  'bth-y2-th-3': [
    { q: 'Systematic theology organises doctrine by:', opts: ['Biblical book order', 'Thematic topics (e.g. God, humanity)', 'Chronology', 'Author'], c: 1 },
    { q: 'The doctrine of the fall describes:', opts: ['Jesus\' descent from heaven', 'Humanity\'s rebellion and its effects', 'The end of the world', 'Angels'], c: 1 },
  ],
  'bth-y3-adv-3': [
    { q: 'Advanced biblical study often focuses on:', opts: ['Only one testament', 'Specific books, themes, or methods', 'Only languages', 'Only theology'], c: 1 },
  ],
  'bth-y3-eth-3': [
    { q: 'Christian ethics is grounded in:', opts: ['Culture only', 'Scripture and theology', 'Philosophy only', 'Personal preference only'], c: 1 },
  ],
  'bth-y3-mis-3': [
    { q: 'Biblical mission includes:', opts: ['Only overseas work', 'Making disciples, in word and deed, locally and globally', 'Only preaching', 'Only social action'], c: 1 },
  ],
};

function normalize(q) {
  if (!q || !Array.isArray(q.opts) || q.opts.length === 0) return null;
  let c = typeof q.c === 'number' && Number.isInteger(q.c) ? q.c : 0;
  if (c < 0 || c >= q.opts.length) c = 0;
  return { q: q.q || 'Question', opts: q.opts, c };
}

export function getBthQuestions(lessonId) {
  if (!lessonId || typeof lessonId !== 'string') return [];
  const list = BTH_QUESTIONS_RAW[lessonId];
  if (!Array.isArray(list) || list.length === 0) return [];
  return list.map(normalize).filter(Boolean);
}

export { BTH_QUESTIONS_RAW };
