/**
 * Teaching content per lesson. Every lesson ID in MODULES has an entry
 * so getTeachContent(lessonId) never returns wrong or missing content.
 */

const TEACH_CONTENT = {
  'l1-1': {
    steps: [
      { title: 'The Book of Beginnings', body: "Genesis — from the Greek γένεσις meaning 'origin' — is the foundation of all Scripture. It covers everything from the creation of the universe to the death of Joseph in Egypt.", highlight: null },
      { title: 'Authorship & Date', body: 'Traditionally attributed to Moses, written around 1400–1200 BC. The text weaves together oral traditions passed down for generations before Moses committed them to writing.', highlight: '"Moses wrote this law and gave it to the priests." — Deuteronomy 31:9' },
      { title: 'Two Major Sections', body: 'Genesis divides into the Primeval History (chapters 1–11: creation through Babel) and the Patriarchal Narratives (chapters 12–50: Abraham through Joseph).', highlight: null },
      { title: 'Why Genesis Matters', body: 'Every major Christian doctrine — creation, imago Dei, the fall, sin, covenant, and redemption — has its roots here. Without Genesis, the rest of Scripture has no foundation.', highlight: 'Without Genesis, the rest of Scripture is like a building without a foundation.' },
    ],
    terms: [['Primeval History', 'Gen 1–11: creation through Babel'], ['Patriarchal Narratives', 'Gen 12–50: Abraham to Joseph'], ['Imago Dei', "Latin: 'Image of God' in humanity"], ['Covenant', 'A sacred binding agreement between God and humanity']],
  },
  'l1-2': {
    steps: [
      { title: 'The Ancient Near East', body: 'Genesis was written in conversation with other ancient creation myths — the Babylonian Enuma Elish and the Epic of Gilgamesh. Genesis often directly challenges these stories.', highlight: null },
      { title: 'A Revolutionary Vision', body: 'In Babylonian myth, humans were slaves created to serve the gods. Genesis declares something radical: humans are made in God\'s image, given dignity and dominion. This was extraordinary in the ancient world.', highlight: '"So God created mankind in his own image." — Genesis 1:27' },
    ],
    terms: [['Enuma Elish', 'Babylonian creation myth; contrasts with Genesis'], ['Ancient Near East', 'Cultural context of the Bible'], ['Oral Tradition', 'Stories passed verbally before writing']],
  },
  'l2-1': {
    steps: [
      { title: 'Days 1–3: Forming the Realms', body: 'Genesis 1 is perfectly structured literary architecture. Days 1–3 create the realms: Day 1 = Light, Day 2 = Sky & Sea, Day 3 = Land & Plants. Days 4–6 then fill each realm respectively.', highlight: null },
      { title: 'God Speaks — Let There Be Light', body: "'And God said, Let there be light.' Creation happens through the power of speech alone — God's word is sufficient to bring existence from nothing. Theologians call this ex nihilo creation.", highlight: '"And God said, \'Let there be light,\' and there was light." — Genesis 1:3' },
      { title: 'Humanity as the Pinnacle', body: "On Day 6, the pattern shifts to 'Let us make mankind.' Humanity alone is made in God's image (imago Dei) and given a vocation: to steward creation. This is both dignity and responsibility.", highlight: '"In the image of God he created them; male and female." — Genesis 1:27' },
    ],
    terms: [['Ex Nihilo', 'Creation from nothing'], ['Tov (טוֹב)', "Hebrew 'good' — God's refrain over each day"], ['Imago Dei', 'Image of God in humanity'], ['Vocation', 'Divine calling; humans called to steward creation']],
  },
  'l2-2': {
    steps: [
      { title: 'Deep Dive: Genesis 1:1–3', body: 'In the beginning God created the heavens and the earth. The earth was formless and empty (tohu wabohu), and darkness was over the surface of the deep. And God said, "Let there be light," and there was light. These verses establish creation from nothing and the power of God\'s word.', highlight: '"In the beginning God created the heavens and the earth." — Genesis 1:1' },
    ],
    terms: [['Tohu wabohu', 'Formless and empty'], ['Ex nihilo', 'Creation from nothing']],
  },
  'l2-3': {
    steps: [
      { title: 'Reflect & Journal', body: 'Take a moment to reflect on the creation account. What does it mean for you that humanity is made in God\'s image? How might that shape how you see yourself and others?', highlight: '"So God created mankind in his own image." — Genesis 1:27' },
    ],
    terms: [],
  },
  'l2-4': {
    steps: [
      { title: 'Creation Quiz', body: 'Test your understanding of the creation account, the six days, and key terms like ex nihilo and imago Dei.', highlight: null },
    ],
    terms: [],
  },
  'l3-1': {
    steps: [
      { title: "The Serpent's Strategy", body: "The serpent's first move: 'Did God really say...?' It doesn't deny God's word — it distorts it. All temptation follows this pattern: distort → deny → offer a counterfeit promise.", highlight: '"Did God really say, \'You must not eat from any tree\'?" — Genesis 3:1' },
      { title: 'Three Categories of Temptation', body: 'Eve saw the fruit was (1) good for food — physical desire; (2) pleasing to the eye — aesthetic appeal; (3) desirable for wisdom — intellectual pride. The same three appear in 1 John 2:16.', highlight: null },
      { title: "Adam's Silent Failure", body: "Adam was present the entire time (Gen 3:6 says 'who was with her'). His sin wasn't naivety — it was passive silence. He failed to protect, speak, or act. The fall includes abdication.", highlight: null },
      { title: 'The First Grace', body: 'After judgment comes quiet grace: God made garments of skin for them. An animal died to cover their shame. This is the first sacrifice in the Bible — the first hint of Christ.', highlight: 'He covered their shame — the first quiet act of grace in all of Scripture.' },
    ],
    terms: [['The Fall', "Humanity's choice of self-will over God's will"], ['Protoevangelium', 'Gen 3:15 — the first promise of a Savior'], ['Shame', 'Immediate result of sin: hiding from God'], ['Grace', "God's unmerited favor — first seen in covering their shame"]],
  },
  'l3-2': {
    steps: [
      { title: 'Deep Dive: The Protoevangelium', body: 'Genesis 3:15 is often called the protoevangelium — the first gospel. God tells the serpent that the woman\'s offspring will crush his head while he will strike his heel. This points forward to Christ\'s victory over sin and death.', highlight: '"He will crush your head, and you will strike his heel." — Genesis 3:15' },
    ],
    terms: [['Protoevangelium', 'First gospel promise in Genesis 3:15']],
  },
  'l3-3': {
    steps: [
      { title: 'The Fall — Quiz', body: 'Check your understanding of the temptation, the Fall, and the first grace.', highlight: null },
    ],
    terms: [],
  },
  'l4-1': {
    steps: [
      { title: "A New Beginning: Abram's Call", body: "After the chaos of the Fall, Cain & Abel, the Flood, and Babel — God makes a decisive move. He calls one man, Abram, from Ur of the Chaldees, and begins the plan of universal redemption.", highlight: null },
      { title: 'The Shape of the Call', body: "God's call has two sides: a cost (leave country, people, family) and a promise (land, descendants, blessing). Abraham left without knowing where he was going. That IS biblical faith.", highlight: '"By faith Abraham obeyed when he was called... not knowing where he was going." — Heb 11:8' },
      { title: 'Three Covenant Pillars', body: "God promises: (1) Land — a specific place; (2) Seed — descendants as numerous as stars; (3) Blessing — through Abraham for 'all peoples on earth.' Election is always for mission.", highlight: '"All peoples on earth will be blessed through you." — Genesis 12:3' },
      { title: 'God Takes the Oath', body: 'In Genesis 15, animals are cut in half. Normally both parties walk between the pieces. But God alone passes through as a smoking firepot and torch. The covenant depends on God\'s character alone.', highlight: null },
    ],
    terms: [['Abrahamic Covenant', 'Promise of land, descendants, and blessing'], ['Election', 'Chosen for purpose and mission, not privilege'], ['Faith', 'Obedience without full sight (Hebrews 11:1)'], ['Covenant Ceremony', 'A binding oath sealed by blood ritual']],
  },
  'l4-2': {
    steps: [
      { title: 'Deep Dive: Genesis 15:6', body: 'Abram believed the LORD, and he credited it to him as righteousness. This verse is quoted in Romans and Galatians to show that faith — not works — is what God counts as righteousness. Abraham is the father of all who believe.', highlight: '"Abram believed the LORD, and he credited it to him as righteousness." — Genesis 15:6' },
    ],
    terms: [['Credited', 'Counted or imputed'], ['Righteousness', 'Right standing before God']],
  },
  'l4-3': {
    steps: [
      { title: "Reflect: What Is Your 'Ur'?", body: "Abraham left Ur — his home, security, and identity — to follow God's call. What might God be asking you to leave or trust him with? Reflection and journaling help us respond to the Word.", highlight: null },
    ],
    terms: [],
  },
  'l4-4': {
    steps: [
      { title: 'Covenant & Promise — Quiz', body: 'Test your understanding of the Abrahamic covenant and key verses.', highlight: null },
    ],
    terms: [],
  },
  'l5-1': {
    steps: [
      { title: 'Verse Identification Drill', body: "You've studied all four modules. Now it's time to test it! Identify the correct verse, reference, or term from everything you've learned.", highlight: '"Your word is a lamp to my feet." — Psalm 119:105' },
    ],
    terms: [],
  },
  'l5-2': {
    steps: [
      { title: 'Match Verses to References', body: 'Connect the right verse to the right Bible reference. This drill sharpens your Scripture memory — essential for walking in the Word!', highlight: null },
    ],
    terms: [],
  },
  'l5-3': {
    steps: [
      { title: 'Theology Speed Round', body: "Key terms, doctrines, and concepts from Genesis — tested at speed. How well do you really know your Genesis theology?", highlight: null },
    ],
    terms: [],
  },
};

const DEFAULT_CONTENT = {
  steps: [{ title: 'Lesson', body: 'Content for this lesson.', highlight: null }],
  terms: [],
};

/**
 * Safe getter: always returns an object with steps (array) and terms (array).
 * Uses DEFAULT_CONTENT if lessonId is missing (e.g. future lessons).
 */
export function getTeachContent(lessonId) {
  if (!lessonId || typeof lessonId !== 'string') return DEFAULT_CONTENT;
  const content = TEACH_CONTENT[lessonId];
  if (!content || !Array.isArray(content.steps) || content.steps.length === 0) {
    return DEFAULT_CONTENT;
  }
  return {
    steps: content.steps,
    terms: Array.isArray(content.terms) ? content.terms : [],
  };
}

export { TEACH_CONTENT };
