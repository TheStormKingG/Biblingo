/**
 * BTh lesson step illustrations — one scene per slide to match the text.
 * viewBox 560×260 to match app layout.
 */

const VB = "0 0 560 260";

// —— Old Testament: scroll room (What is the OT)
export const SceneOTScroll = () => (
  <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
    <defs>
      <linearGradient id="bth_ot_wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0f766e"/><stop offset="100%" stopColor="#134e4a"/></linearGradient>
      <linearGradient id="bth_ot_floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#115e59"/><stop offset="100%" stopColor="#134e4a"/></linearGradient>
      <radialGradient id="bth_ot_glow" cx="50%" cy="45%"><stop offset="0%" stopColor="#5eead4" stopOpacity="0.3"/><stop offset="100%" stopColor="#5eead4" stopOpacity="0"/></radialGradient>
    </defs>
    <rect width="560" height="260" fill="url(#bth_ot_wall)"/>
    <rect width="560" height="260" fill="url(#bth_ot_glow)"/>
    <rect x="0" y="200" width="560" height="60" fill="url(#bth_ot_floor)"/>
    <rect x="165" y="125" width="230" height="50" rx="6" fill="#fef3c7" stroke="#0d9488" strokeWidth="2"/>
    <rect x="162" y="118" width="18" height="64" rx="8" fill="#0d9488"/>
    <rect x="380" y="118" width="18" height="64" rx="8" fill="#0d9488"/>
    <text x="280" y="152" textAnchor="middle" fontSize="15" fill="#134e4a" fontFamily="serif" fontWeight="bold">בְּרֵאשִׁית בָּרָא אֱלֹהִים</text>
    <text x="280" y="165" textAnchor="middle" fontSize="11" fill="#134e4a" fontFamily="serif" opacity="0.8">אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ</text>
    <rect x="158" y="8" width="244" height="36" rx="10" fill="#0d9488"/>
    <text x="280" y="32" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fff" fontFamily="Georgia,serif">THE OLD TESTAMENT</text>
  </svg>
);

// —— Three divisions: Torah | Prophets | Writings
export const SceneThreeDivisions = () => (
  <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
    <defs>
      <linearGradient id="bth_3d_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ccfbf1"/><stop offset="100%" stopColor="#99f6e4"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#bth_3d_bg)"/>
    <rect x="40" y="60" width="150" height="140" rx="12" fill="#fef3c7" stroke="#0d9488" strokeWidth="2"/>
    <text x="115" y="115" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0f766e">TORAH</text>
    <text x="115" y="140" textAnchor="middle" fontSize="12" fill="#134e4a">Genesis –</text>
    <text x="115" y="158" textAnchor="middle" fontSize="12" fill="#134e4a">Deuteronomy</text>
    <rect x="205" y="60" width="150" height="140" rx="12" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2"/>
    <text x="280" y="115" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0c4a6e">PROPHETS</text>
    <text x="280" y="140" textAnchor="middle" fontSize="12" fill="#0369a1">Former &amp; Latter</text>
    <rect x="370" y="60" width="150" height="140" rx="12" fill="#f3e8ff" stroke="#7c3aed" strokeWidth="2"/>
    <text x="445" y="115" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#6d28d9">WRITINGS</text>
    <text x="445" y="140" textAnchor="middle" fontSize="12" fill="#7c3aed">Psalms, Wisdom</text>
    <text x="280" y="240" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f766e">Three Major Divisions of the Hebrew Bible</text>
  </svg>
);

// —— Why it matters: lamp / Scripture as light
export const SceneLampScripture = () => (
  <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
    <defs>
      <linearGradient id="bth_lam_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#134e4a"/><stop offset="100%" stopColor="#042f2e"/></linearGradient>
      <radialGradient id="bth_lam_rad" cx="50%" cy="35%"><stop offset="0%" stopColor="#fef9c3" stopOpacity="0.6"/><stop offset="70%" stopColor="#fde68a" stopOpacity="0.2"/><stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/></radialGradient>
    </defs>
    <rect width="560" height="260" fill="url(#bth_lam_bg)"/>
    <rect width="560" height="260" fill="url(#bth_lam_rad)"/>
    <path d="M280 80 L260 200 L300 200 Z" fill="#78350f" stroke="#92400e"/>
    <ellipse cx="280" cy="78" rx="28" ry="14" fill="#fef3c7"/>
    <ellipse cx="280" cy="72" rx="8" ry="18" fill="#fbbf24"><animate attributeName="opacity" values="1;0.7;1" dur="1.5s" repeatCount="indefinite"/></ellipse>
    <text x="280" y="250" textAnchor="middle" fontSize="13" fill="#99f6e4" fontStyle="italic">“Your word is a lamp to my feet” — Psalm 119:105</text>
  </svg>
);

// —— Canon and the books: list / closed codices
export const SceneCanonBooks = () => (
  <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
    <defs>
      <linearGradient id="bth_can_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f0fdfa"/><stop offset="100%" stopColor="#ccfbf1"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#bth_can_bg)"/>
    {[80, 160, 240, 320, 400, 480].map((x, i) => (
      <g key={i}>
        <rect x={x} y={100} width="70" height="90" rx="4" fill="#0d9488" stroke="#0f766e" strokeWidth="2"/>
        <line x1={x+12} y1={115} x2={x+58} y2={115} stroke="#99f6e4" strokeWidth="2"/>
        <line x1={x+12} y1={128} x2={x+48} y2={128} stroke="#99f6e4" strokeWidth="2"/>
        <line x1={x+12} y1={141} x2={x+55} y2={141} stroke="#99f6e4" strokeWidth="2"/>
      </g>
    ))}
    <text x="280" y="230" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#0f766e">39 books · The Canon</text>
  </svg>
);

// —— Languages and transmission: scribe / Hebrew
export const SceneScribes = () => (
  <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
    <defs>
      <linearGradient id="bth_scr_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fef3c7"/><stop offset="100%" stopColor="#fde68a"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#bth_scr_bg)"/>
    <rect x="180" y="90" width="200" height="100" rx="6" fill="#fff" stroke="#b45309" strokeWidth="2"/>
    <text x="280" y="125" textAnchor="middle" fontSize="14" fill="#92400e" fontFamily="serif">Hebrew · אֱלֹהִים</text>
    <text x="280" y="148" textAnchor="middle" fontSize="12" fill="#a16207">Copied and preserved by scribes</text>
    <text x="280" y="168" textAnchor="middle" fontSize="11" fill="#78716c">Manuscripts</text>
    <path d="M320 200 L340 175 L355 195 L340 210 Z" fill="#78350f" stroke="#92400e"/>
    <text x="280" y="245" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#b45309">Languages &amp; Transmission</text>
  </svg>
);

// —— NT in context: first-century world
export const SceneNTContext = () => (
  <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
    <defs>
      <linearGradient id="bth_nt_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#dbeafe"/><stop offset="100%" stopColor="#bfdbfe"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#bth_nt_bg)"/>
    <circle cx="280" cy="130" r="80" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="8 4"/>
    <text x="280" y="115" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1d4ed8">1st Century AD</text>
    <text x="280" y="140" textAnchor="middle" fontSize="12" fill="#1e40af">Judaism · Greek · Roman</text>
    <rect x="200" y="165" width="160" height="50" rx="6" fill="#fff" stroke="#2563eb" strokeWidth="2"/>
    <text x="280" y="195" textAnchor="middle" fontSize="14" fill="#1e40af">27 books · Gospels to Revelation</text>
    <text x="280" y="245" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1d4ed8">The New Testament in Context</text>
  </svg>
);

// —— Gospels and letters
export const SceneGospelsLetters = () => (
  <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
    <defs>
      <linearGradient id="bth_gl_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#eff6ff"/><stop offset="100%" stopColor="#dbeafe"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#bth_gl_bg)"/>
    {["Matt", "Mark", "Luke", "John"].map((label, i) => (
      <g key={label}>
        <rect x={120 + i * 100} y={80} width="80" height="100" rx="6" fill="#fff" stroke="#2563eb" strokeWidth="2"/>
        <text x={160 + i * 100} y={135} textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1d4ed8">{label}</text>
      </g>
    ))}
    <text x="280" y="220" textAnchor="middle" fontSize="14" fill="#1e40af">Gospels + Acts + Epistles + Revelation</text>
  </svg>
);

// —— Doctrine of God: Trinity / divine attributes
export const SceneDoctrineGod = () => (
  <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
    <defs>
      <linearGradient id="bth_dog_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f5f3ff"/><stop offset="100%" stopColor="#ede9fe"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#bth_dog_bg)"/>
    <circle cx="280" cy="100" r="50" fill="none" stroke="#7c3aed" strokeWidth="3"/>
    <text x="280" y="108" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#6d28d9">Father</text>
    <circle cx="180" cy="180" r="45" fill="none" stroke="#7c3aed" strokeWidth="3"/>
    <text x="180" y="188" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#6d28d9">Son</text>
    <circle cx="380" cy="180" r="45" fill="none" stroke="#7c3aed" strokeWidth="3"/>
    <text x="380" y="188" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#6d28d9">Spirit</text>
    <path d="M260 140 L220 165 M300 140 L340 165" stroke="#7c3aed" strokeWidth="2" fill="none"/>
    <text x="280" y="250" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#7c3aed">One God in Three Persons</text>
  </svg>
);

// —— Scripture and Revelation
export const SceneScriptureRevelation = () => (
  <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
    <defs>
      <linearGradient id="bth_rev_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#faf5ff"/><stop offset="100%" stopColor="#f3e8ff"/></linearGradient>
      <radialGradient id="bth_rev_light" cx="50%" cy="40%"><stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4"/><stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/></radialGradient>
    </defs>
    <rect width="560" height="260" fill="url(#bth_rev_bg)"/>
    <rect width="560" height="260" fill="url(#bth_rev_light)"/>
    <rect x="200" y="85" width="160" height="100" rx="6" fill="#fff" stroke="#7c3aed" strokeWidth="2"/>
    <line x1="220" y1="115" x2="340" y2="115" stroke="#c4b5fd" strokeWidth="1"/>
    <line x1="220" y1="135" x2="320" y2="135" stroke="#c4b5fd" strokeWidth="1"/>
    <line x1="220" y1="155" x2="335" y2="155" stroke="#c4b5fd" strokeWidth="1"/>
    <text x="280" y="230" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#6d28d9">Scripture · God’s Written Word</text>
  </svg>
);

// —— Hermeneutics: interpreting the text
export const SceneHermeneutics = () => (
  <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
    <defs>
      <linearGradient id="bth_her_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fefce8"/><stop offset="100%" stopColor="#fef9c3"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#bth_her_bg)"/>
    <rect x="160" y="70" width="240" height="120" rx="8" fill="#fff" stroke="#ca8a04" strokeWidth="2"/>
    <line x1="180" y1="100" x2="380" y2="100" stroke="#fde047" strokeWidth="2"/>
    <line x1="180" y1="125" x2="360" y2="125" stroke="#fde047" strokeWidth="2"/>
    <line x1="180" y1="150" x2="370" y2="150" stroke="#fde047" strokeWidth="2"/>
    <circle cx="320" cy="95" r="35" fill="none" stroke="#ca8a04" strokeWidth="3" opacity="0.8"/>
    <text x="280" y="230" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#a16207">Interpretation · Context · Genre</text>
  </svg>
);

// —— Context and genre: different book types
export const SceneContextGenre = () => (
  <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
    <defs>
      <linearGradient id="bth_gen_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fffbeb"/><stop offset="100%" stopColor="#fef3c7"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#bth_gen_bg)"/>
    <rect x="80" y="80" width="110" height="100" rx="6" fill="#fef3c7" stroke="#b45309" strokeWidth="2"/>
    <text x="135" y="135" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">Narrative</text>
    <rect x="225" y="80" width="110" height="100" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
    <text x="280" y="135" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Law</text>
    <rect x="370" y="80" width="110" height="100" rx="6" fill="#f3e8ff" stroke="#7c3aed" strokeWidth="2"/>
    <text x="425" y="135" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#6d28d9">Poetry</text>
    <text x="280" y="230" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#a16207">Genre shapes how we read</text>
  </svg>
);

// —— Review / check understanding
export const SceneReview = () => (
  <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
    <defs>
      <linearGradient id="bth_rev2_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f0fdf4"/><stop offset="100%" stopColor="#dcfce7"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#bth_rev2_bg)"/>
    <circle cx="280" cy="120" r="55" fill="#22c55e" opacity="0.2"/>
    <text x="280" y="132" textAnchor="middle" fontSize="64" fill="#16a34a">✓</text>
    <text x="280" y="210" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#15803d">Check Your Understanding</text>
  </svg>
);

// Default scene when no mapping
export const SceneDefault = SceneOTScroll;

const BTH_SCENE_MAP = {
  "bth-y1-ot-1": [SceneOTScroll, SceneThreeDivisions, SceneLampScripture],
  "bth-y1-ot-2": [SceneCanonBooks, SceneScribes],
  "bth-y1-ot-3": [SceneReview],
  "bth-y1-nt-1": [SceneNTContext, SceneGospelsLetters],
  "bth-y1-nt-2": [SceneGospelsLetters],
  "bth-y1-nt-3": [SceneReview],
  "bth-y1-doctrine-1": [SceneDoctrineGod, SceneDoctrineGod],
  "bth-y1-doctrine-2": [SceneScriptureRevelation],
  "bth-y1-doctrine-3": [SceneReview],
  "bth-y1-herm-1": [SceneHermeneutics],
  "bth-y1-herm-2": [SceneContextGenre],
  "bth-y1-herm-3": [SceneReview],
  "bth-y2-ot-1": [SceneOTScroll],
  "bth-y2-ot-2": [SceneScribes],
  "bth-y2-ot-3": [SceneReview],
  "bth-y2-nt-1": [SceneGospelsLetters],
  "bth-y2-nt-2": [SceneNTContext],
  "bth-y2-nt-3": [SceneReview],
  "bth-y2-ch-1": [SceneNTContext],
  "bth-y2-ch-2": [SceneScriptureRevelation],
  "bth-y2-ch-3": [SceneReview],
  "bth-y2-th-1": [SceneDoctrineGod],
  "bth-y2-th-2": [SceneDoctrineGod],
  "bth-y2-th-3": [SceneReview],
  "bth-y3-adv-1": [SceneHermeneutics],
  "bth-y3-adv-2": [SceneLampScripture],
  "bth-y3-adv-3": [SceneReview],
  "bth-y3-eth-1": [SceneScriptureRevelation],
  "bth-y3-eth-2": [SceneContextGenre],
  "bth-y3-eth-3": [SceneReview],
  "bth-y3-mis-1": [SceneNTContext],
  "bth-y3-mis-2": [SceneLampScripture],
  "bth-y3-mis-3": [SceneReview],
};

const SCENE_POOL = [
  SceneOTScroll,
  SceneThreeDivisions,
  SceneLampScripture,
  SceneCanonBooks,
  SceneScribes,
  SceneNTContext,
  SceneGospelsLetters,
  SceneDoctrineGod,
  SceneScriptureRevelation,
  SceneHermeneutics,
  SceneContextGenre,
  SceneReview,
];

const SLIDES_PER_LESSON = 12;

export function getBthScenes(lessonId) {
  const list = BTH_SCENE_MAP[lessonId];
  if (Array.isArray(list) && list.length > 0) return list;
  // New syllabus: 12 slides per lesson — cycle through pool
  if (lessonId && /^bth-s\d+-m\d+-l\d+$/.test(lessonId)) {
    const out = [];
    for (let i = 0; i < SLIDES_PER_LESSON; i++) out.push(SCENE_POOL[i % SCENE_POOL.length]);
    return out;
  }
  return [SceneDefault];
}
