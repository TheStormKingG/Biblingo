/**
 * Teaching content for Bachelor of Theology modules.
 * Add entries here as you add lessons; use getBthTeachContent(lessonId) for safe access.
 */

export const BTH_TEACH_CONTENT = {
  'bth-y1-ot-1': {
    steps: [
      { title: 'What Is the Old Testament?', body: 'The Old Testament (or Hebrew Bible) is the first major part of the Christian Scripture. It contains 39 books (in the Protestant canon) written over many centuries, from the Torah (Law) through the Prophets and the Writings. It tells the story of God\'s covenant with Israel and points forward to Christ.', highlight: '"All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness." — 2 Timothy 3:16' },
      { title: 'Three Major Divisions', body: 'The Hebrew Bible is often organised as: (1) Torah (Genesis–Deuteronomy), (2) Prophets (Former and Latter), and (3) Writings (Psalms, Wisdom, and others). This threefold structure reflects both chronology and genre.', highlight: null },
      { title: 'Why It Matters for Theology', body: 'The OT grounds Christian doctrine: creation, fall, covenant, sacrifice, and promise. Without it, the New Testament cannot be fully understood. Jesus and the apostles constantly appealed to the Scriptures.', highlight: null },
    ],
    terms: [['Torah', 'The Law; first five books of the Bible'], ['Prophets', 'Former (historical) and Latter (prophetic) books'], ['Writings', 'Psalms, wisdom literature, and other books'], ['Canon', 'The authoritative list of books accepted as Scripture']],
  },
  'bth-y1-ot-2': {
    steps: [
      { title: 'The Canon and the Books', body: 'The term "canon" refers to the list of books recognised as inspired Scripture. The Protestant OT canon has 39 books; the Roman Catholic and Orthodox traditions include additional books (Deuterocanonicals/Apocrypha). The canon was formed over time through use in worship and community discernment.', highlight: null },
      { title: 'Languages and Transmission', body: 'The OT was written mainly in Hebrew, with some Aramaic (e.g. in Daniel). It was copied and preserved by scribes. Understanding how we received the text helps us interpret it responsibly.', highlight: null },
    ],
    terms: [['Canon', 'Authoritative list of Scripture'], ['Hebrew', 'Primary language of the OT'], ['Manuscript', 'Hand-copied text; we have many ancient copies']],
  },
  'bth-y1-ot-3': {
    steps: [{ title: 'Check Your Understanding', body: 'Review what you\'ve learned about the Old Testament: its structure, canon, and importance for Christian faith.', highlight: null }],
    terms: [],
  },
  'bth-y1-nt-1': {
    steps: [
      { title: 'The New Testament in Context', body: 'The NT was written in the first century AD, in a world shaped by Judaism, Greek culture, and Roman rule. The 27 books include Gospels, Acts, letters, and Revelation. They bear witness to Jesus Christ and the early church.', highlight: null },
      { title: 'From Oral to Written', body: 'The Gospels and epistles often reflect earlier oral tradition and preaching. They were written for specific communities and purposes, yet were soon recognised as authoritative Scripture alongside the OT.', highlight: null },
    ],
    terms: [['Gospels', 'Matthew, Mark, Luke, John — accounts of Jesus\' life and teaching'], ['Epistles', 'Letters to churches and individuals'], ['Revelation', 'Apocalyptic book closing the NT canon']],
  },
  'bth-y1-nt-2': {
    steps: [
      { title: 'Gospels and Letters', body: 'The four Gospels each present Jesus from a distinct angle; the letters (e.g. Paul\'s) address doctrine, ethics, and church life. Acts links the Gospels to the epistles by narrating the spread of the church.', highlight: null },
    ],
    terms: [],
  },
  'bth-y1-nt-3': {
    steps: [{ title: 'Check Your Understanding', body: 'Review the New Testament: its context, genres, and main divisions.', highlight: null }],
    terms: [],
  },
  'bth-y1-doctrine-1': {
    steps: [
      { title: 'The Doctrine of God', body: 'Christian theology affirms one God in three persons — Father, Son, and Holy Spirit. God is Creator, holy, loving, and sovereign. This doctrine is drawn from Scripture and refined through church tradition and reflection.', highlight: '"Hear, O Israel: the LORD our God, the LORD is one." — Deuteronomy 6:4' },
      { title: 'Attributes of God', body: 'God is described as eternal, omnipotent, omniscient, and omnipresent. He is also personal: he speaks, covenants, and invites relationship. Balancing these attributes keeps theology grounded in Scripture.', highlight: null },
    ],
    terms: [['Trinity', 'One God in three persons'], ['Attributes', 'Characteristics Scripture ascribes to God'], ['Sovereignty', 'God\'s supreme authority over all']],
  },
  'bth-y1-doctrine-2': {
    steps: [
      { title: 'Scripture and Revelation', body: 'God has made himself known through creation, history, and supremely in Christ. Scripture is the written Word of God, inspired by the Spirit and authoritative for faith and practice.', highlight: null },
    ],
    terms: [['Revelation', 'God making himself known'], ['Inspiration', 'Scripture as God-breathed'], ['Authority', 'Scripture as the norm for belief and life']],
  },
  'bth-y1-doctrine-3': {
    steps: [{ title: 'Check Your Understanding', body: 'Review the doctrines of God and Scripture.', highlight: null }],
    terms: [],
  },
  'bth-y1-herm-1': {
    steps: [
      { title: 'Why Hermeneutics Matters', body: 'Hermeneutics is the art and theory of interpretation. How we read the Bible shapes what we believe and how we live. Good hermeneutics pays attention to the original context, genre, and the Bible\'s overall story.', highlight: '"Do your best to present yourself to God as one approved, a worker who correctly handles the word of truth." — 2 Timothy 2:15' },
    ],
    terms: [['Hermeneutics', 'Principles of interpretation'], ['Exegesis', 'Drawing meaning out of the text'], ['Eisegesis', 'Reading meaning into the text (to be avoided)']],
  },
  'bth-y1-herm-2': {
    steps: [
      { title: 'Context and Genre', body: 'Every text has a historical, literary, and canonical context. Genre (narrative, law, prophecy, poetry, letter) shapes how we read. Literal interpretation means reading according to the author\'s intent and the genre\'s conventions.', highlight: null },
    ],
    terms: [['Genre', 'Type of literature (e.g. narrative, poetry)'], ['Context', 'Historical, literary, and canonical setting'], ['Authorial intent', 'What the human author aimed to communicate']],
  },
  'bth-y1-herm-3': {
    steps: [{ title: 'Check Your Understanding', body: 'Review hermeneutics: why it matters and how context and genre shape reading.', highlight: null }],
    terms: [],
  },
  // Year 2 and 3: placeholder steps so every lesson has content
  ...['bth-y2-ot-1', 'bth-y2-ot-2', 'bth-y2-ot-3', 'bth-y2-nt-1', 'bth-y2-nt-2', 'bth-y2-nt-3', 'bth-y2-ch-1', 'bth-y2-ch-2', 'bth-y2-ch-3', 'bth-y2-th-1', 'bth-y2-th-2', 'bth-y2-th-3', 'bth-y3-adv-1', 'bth-y3-adv-2', 'bth-y3-adv-3', 'bth-y3-eth-1', 'bth-y3-eth-2', 'bth-y3-eth-3', 'bth-y3-mis-1', 'bth-y3-mis-2', 'bth-y3-mis-3'].reduce((acc, id) => ({
    ...acc,
    [id]: { steps: [{ title: 'Lesson', body: 'Content for this lesson. Align with your course PDF and expand here.', highlight: null }], terms: [] },
  }), {}),
};

const DEFAULT = { steps: [{ title: 'Lesson', body: 'Content for this lesson.', highlight: null }], terms: [] };

export function getBthTeachContent(lessonId) {
  if (!lessonId || typeof lessonId !== 'string') return DEFAULT;
  const content = BTH_TEACH_CONTENT[lessonId];
  if (!content || !Array.isArray(content.steps) || content.steps.length === 0) return DEFAULT;
  return { steps: content.steps, terms: content.terms || [] };
}
