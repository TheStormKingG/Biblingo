import { useState, useEffect } from "react";
import { BTH_MODULES } from "./content/bachelorTheologyModules.js";
import { getBthTeachContent } from "./content/bthTeachContent.js";
import { getBthQuestions } from "./content/bthQuestions.js";

// ─── PRE-COMPUTED STAR FIELDS ──────────────────────────────────────────────────
const STARS_A = [[20,15,2.5],[50,8,1.5],[80,20,2],[110,10,1.5],[150,6,2],[180,18,1.5],[220,9,2.5],[255,20,1.5],[290,12,2],[300,25,1],[30,40,1],[70,35,1.5],[120,30,1],[200,35,2],[260,40,1.5],[15,55,1],[95,50,1.2],[170,48,0.9],[240,52,1.4],[310,48,1]];
const STARS_B = [[12,8,1.5],[28,18,2],[45,6,1],[60,22,1.8],[78,12,1.2],[95,28,1.5],[112,5,2],[130,19,1],[148,30,1.8],[165,10,1.5],[182,24,1],[200,14,2],[218,28,1.2],[235,8,1.8],[252,22,1],[270,16,2],[288,30,1.5],[305,10,1.2],[18,38,1],[50,42,1.5],[88,35,1.2],[125,40,1],[160,36,1.8],[198,42,1.2],[232,35,1],[268,44,1.5],[300,38,1],[22,55,1.5],[65,58,1],[108,52,1.2],[148,60,1],[190,55,1.8],[230,58,1],[272,52,1.5],[310,60,1],[35,70,1.2],[80,72,1],[125,68,1.5],[170,74,1],[215,70,1.2],[258,66,1.5],[302,72,1]];

// ─── LANDSCAPE SCENE ILLUSTRATIONS ────────────────────────────────────────────
// Each returns a full-width cinematic SVG scene at 560×260 viewBox

// L1-1 Step 0: Ancient scroll room with torchlight
const SceneScrollRoom = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <defs>
      <linearGradient id="sr_wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#92400e"/><stop offset="100%" stopColor="#451a03"/></linearGradient>
      <linearGradient id="sr_floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#78350f"/><stop offset="100%" stopColor="#3c1407"/></linearGradient>
      <radialGradient id="sr_torch1" cx="20%" cy="40%"><stop offset="0%" stopColor="#fbbf24" stopOpacity="0.55"/><stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/></radialGradient>
      <radialGradient id="sr_torch2" cx="80%" cy="40%"><stop offset="0%" stopColor="#fbbf24" stopOpacity="0.45"/><stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/></radialGradient>
    </defs>
    <rect width="560" height="260" fill="url(#sr_wall)"/>
    {/* Stone wall blocks */}
    {[0,52,104,156,208].map(y=>[0,70,140,210,280,350,420,490].map(x=>(
      <rect key={`${x}-${y}`} x={x+1} y={y+1} width="68" height="50" rx="2" fill="none" stroke="#6b2d0a" strokeWidth="1" opacity="0.4"/>
    )))}
    {/* Floor */}
    <rect x="0" y="200" width="560" height="60" fill="url(#sr_floor)"/>
    <line x1="0" y1="200" x2="560" y2="200" stroke="#92400e" strokeWidth="2"/>
    {/* Torch glow overlays */}
    <rect width="560" height="260" fill="url(#sr_torch1)"/>
    <rect width="560" height="260" fill="url(#sr_torch2)"/>
    {/* Left torch */}
    <rect x="68" y="80" width="8" height="28" rx="2" fill="#92400e"/>
    <ellipse cx="72" cy="72" rx="7" ry="12" fill="#f97316" opacity="0.9">
      <animate attributeName="ry" values="12;9;12" dur="0.8s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="72" cy="68" rx="4" ry="8" fill="#fbbf24" opacity="0.9">
      <animate attributeName="ry" values="8;5;8" dur="0.6s" repeatCount="indefinite"/>
    </ellipse>
    {/* Right torch */}
    <rect x="484" y="80" width="8" height="28" rx="2" fill="#92400e"/>
    <ellipse cx="488" cy="72" rx="7" ry="12" fill="#f97316" opacity="0.9">
      <animate attributeName="ry" values="10;14;10" dur="0.9s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="488" cy="68" rx="4" ry="8" fill="#fbbf24" opacity="0.9">
      <animate attributeName="ry" values="6;9;6" dur="0.7s" repeatCount="indefinite"/>
    </ellipse>
    {/* Table */}
    <rect x="160" y="158" width="240" height="14" rx="4" fill="#7c2d12"/>
    <rect x="170" y="172" width="16" height="30" rx="3" fill="#6b2209"/>
    <rect x="374" y="172" width="16" height="30" rx="3" fill="#6b2209"/>
    {/* LARGE open scroll on table */}
    <rect x="175" y="118" width="210" height="46" rx="5" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
    <rect x="172" y="112" width="16" height="60" rx="8" fill="#d97706" stroke="#92400e" strokeWidth="1.5"/>
    <rect x="372" y="112" width="16" height="60" rx="8" fill="#d97706" stroke="#92400e" strokeWidth="1.5"/>
    {/* Scroll text lines */}
    {[128,138,148,155].map((y,i)=><line key={i} x1="196" y1={y} x2="370" y2={y} stroke="#92400e" strokeWidth="1.2" opacity="0.5"/>)}
    <text x="204" y="135" fontSize="14" fill="#92400e" fontFamily="serif" fontWeight="bold">בְּרֵאשִׁית בָּרָא אֱלֹהִים</text>
    <text x="210" y="152" fontSize="11" fill="#92400e" fontFamily="serif" opacity="0.6">אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ</text>
    {/* Ink pot + quill */}
    <ellipse cx="400" cy="158" rx="10" ry="12" fill="#1c1917" stroke="#374151" strokeWidth="1.5"/>
    <path d="M410,140 Q430,115 415,105 Q402,118 408,140Z" fill="#fef9c3" stroke="#d97706" strokeWidth="1.2"/>
    <line x1="412" y1="140" x2="402" y2="160" stroke="#1c1917" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Stacked scrolls on shelves */}
    <rect x="20" y="110" width="40" height="22" rx="3" fill="#fef3c7" stroke="#d97706" strokeWidth="1.2"/>
    <rect x="18" y="107" width="8" height="28" rx="4" fill="#d97706"/>
    <rect x="52" y="107" width="8" height="28" rx="4" fill="#c2710a"/>
    <rect x="20" y="140" width="40" height="20" rx="3" fill="#fde68a" stroke="#d97706" strokeWidth="1"/>
    <rect x="18" y="137" width="7" height="26" rx="3.5" fill="#b45309"/>
    <rect x="53" y="137" width="7" height="26" rx="3.5" fill="#d97706"/>
    {/* Right shelf scrolls */}
    <rect x="500" y="108" width="40" height="22" rx="3" fill="#fef3c7" stroke="#d97706" strokeWidth="1.2"/>
    <rect x="498" y="105" width="8" height="28" rx="4" fill="#d97706"/>
    <rect x="532" y="105" width="8" height="28" rx="4" fill="#c2710a"/>
    {/* Candle */}
    <rect x="136" y="148" width="8" height="20" rx="2" fill="#fef9c3"/>
    <ellipse cx="140" cy="148" rx="4" ry="3" fill="#fef9c3"/>
    <ellipse cx="140" cy="143" rx="3" ry="7" fill="#f97316">
      <animate attributeName="ry" values="7;5;7" dur="0.7s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="140" cy="140" rx="1.5" ry="4" fill="#fbbf24">
      <animate attributeName="ry" values="4;2;4" dur="0.5s" repeatCount="indefinite"/>
    </ellipse>
    {/* Label ribbon */}
    <rect x="158" y="8" width="244" height="34" rx="10" fill="#fbbf24" opacity="0.92"/>
    <text x="280" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#7c2d12" fontFamily="Georgia,serif">THE BOOK OF BEGINNINGS</text>
  </svg>
);

// L1-1 Step 1: Moses writing on Mount Sinai
const SceneMosesWriting = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <defs>
      <linearGradient id="mw_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fde68a"/><stop offset="60%" stopColor="#fb923c"/><stop offset="100%" stopColor="#dc2626"/></linearGradient>
      <linearGradient id="mw_mtn" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#78350f"/><stop offset="100%" stopColor="#3c1407"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#mw_sky)"/>
    {/* Sun setting */}
    <circle cx="460" cy="55" r="42" fill="#fbbf24" opacity="0.85"/>
    <circle cx="460" cy="55" r="55" fill="#f97316" opacity="0.2"/>
    {/* Cloud strips */}
    <ellipse cx="120" cy="50" rx="80" ry="14" fill="#fbbf24" opacity="0.35"/>
    <ellipse cx="340" cy="38" rx="100" ry="12" fill="#fb923c" opacity="0.3"/>
    <ellipse cx="240" cy="70" rx="70" ry="10" fill="#f97316" opacity="0.25"/>
    {/* Mountain range BG */}
    <polygon points="0,200 80,90 160,200" fill="#92400e" opacity="0.6"/>
    <polygon points="100,200 200,70 310,200" fill="#78350f" opacity="0.7"/>
    <polygon points="280,200 400,60 520,200" fill="#6b2d0a" opacity="0.8"/>
    <polygon points="420,200 520,95 560,150 560,200" fill="#7c2d12" opacity="0.7"/>
    {/* Main mountain */}
    <polygon points="200,260 320,50 440,260" fill="url(#mw_mtn)"/>
    <polygon points="260,260 320,80 380,260" fill="#6b2209"/>
    {/* Ground ledge */}
    <rect x="0" y="210" width="560" height="50" fill="#451a03"/>
    <ellipse cx="280" cy="212" rx="200" ry="20" fill="#3c1407"/>
    {/* Rock Moses sits on */}
    <ellipse cx="220" cy="218" rx="55" ry="22" fill="#92400e"/>
    <ellipse cx="220" cy="212" rx="50" ry="18" fill="#a16207"/>
    {/* Moses figure */}
    <ellipse cx="220" cy="180" rx="18" ry="22" fill="#c2855a"/>{/* robe */}
    <circle cx="220" cy="158" r="14" fill="#b45309"/>{/* head */}
    {/* White beard */}
    <path d="M212,168 Q210,180 215,186 Q220,188 225,186 Q230,180 228,168Z" fill="#f5f5f4" opacity="0.9"/>
    {/* Staff */}
    <line x1="238" y1="160" x2="248" y2="220" stroke="#92400e" strokeWidth="4" strokeLinecap="round"/>
    {/* Stone tablet on knee */}
    <rect x="194" y="182" width="34" height="44" rx="4" fill="#d4d4d4" stroke="#a3a3a3" strokeWidth="1.5"/>
    <rect x="194" y="182" width="34" height="22" rx="4" fill="#e5e5e5"/>
    {/* Roman numerals on tablet */}
    <text x="211" y="198" textAnchor="middle" fontSize="8" fill="#525252" fontFamily="serif">I  II  III</text>
    <text x="211" y="210" textAnchor="middle" fontSize="8" fill="#525252" fontFamily="serif">IV  V</text>
    <text x="211" y="222" textAnchor="middle" fontSize="8" fill="#525252" fontFamily="serif">VI VII VIII</text>
    {/* Quill in hand */}
    <path d="M228,180 Q248,155 238,145 Q224,158 228,180Z" fill="#fef9c3" stroke="#d97706" strokeWidth="1"/>
    {/* Divine light ray from cloud */}
    <path d="M380,0 L320,100 L340,100Z" fill="#fbbf24" opacity="0.18"/>
    <path d="M400,0 L340,90 L360,90Z" fill="#fbbf24" opacity="0.12"/>
    {/* Label */}
    <rect x="20" y="15" width="220" height="32" rx="10" fill="rgba(0,0,0,0.45)"/>
    <text x="130" y="36" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fbbf24" fontFamily="Georgia,serif">MOSES, ~1400 BC</text>
  </svg>
);

// L1-1 Step 2: Split scroll — left Primeval, right Patriarchal
const SceneTwoSections = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <defs>
      <linearGradient id="ts_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1c1917"/><stop offset="100%" stopColor="#0c0a09"/></linearGradient>
      <linearGradient id="ts_left" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#065f46"/><stop offset="100%" stopColor="#047857"/></linearGradient>
      <linearGradient id="ts_right" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1e3a5f"/><stop offset="100%" stopColor="#1e40af"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#ts_bg)"/>
    {/* Dividing line */}
    <line x1="280" y1="10" x2="280" y2="250" stroke="#d97706" strokeWidth="3" opacity="0.6"/>
    <circle cx="280" cy="130" r="12" fill="#d97706"/>
    <text x="280" y="135" textAnchor="middle" fontSize="12" fill="#451a03" fontWeight="bold">+</text>
    {/* Left panel — Primeval History */}
    <rect x="15" y="20" width="250" height="220" rx="14" fill="url(#ts_left)" opacity="0.85"/>
    <rect x="15" y="20" width="250" height="220" rx="14" fill="none" stroke="#34d399" strokeWidth="2"/>
    {/* Chaos waves / creation */}
    <path d="M30,110 Q70,90 110,110 Q150,130 190,110 Q230,90 255,110" fill="none" stroke="#6ee7b7" strokeWidth="2.5" opacity="0.7"/>
    <path d="M30,125 Q70,105 110,125 Q150,145 190,125 Q230,105 255,125" fill="none" stroke="#34d399" strokeWidth="2" opacity="0.5"/>
    {/* Earth globe outline */}
    <circle cx="140" cy="140" r="55" fill="none" stroke="#6ee7b7" strokeWidth="1.5" opacity="0.4"/>
    <ellipse cx="140" cy="140" rx="55" ry="18" fill="none" stroke="#6ee7b7" strokeWidth="1" opacity="0.3"/>
    <line x1="140" y1="85" x2="140" y2="195" stroke="#6ee7b7" strokeWidth="1" opacity="0.3"/>
    {/* Flood waves */}
    <ellipse cx="100" cy="155" rx="40" ry="12" fill="#0d9488" opacity="0.4"/>
    <ellipse cx="180" cy="160" rx="35" ry="10" fill="#0d9488" opacity="0.35"/>
    {/* Tower Babel hint */}
    <rect x="108" y="95" width="16" height="40" rx="2" fill="#065f46" stroke="#34d399" strokeWidth="1" opacity="0.8"/>
    <rect x="112" y="85" width="12" height="16" rx="2" fill="#065f46" stroke="#34d399" strokeWidth="1" opacity="0.8"/>
    <rect x="115" y="77" width="8" height="12" rx="2" fill="#065f46" stroke="#34d399" strokeWidth="1" opacity="0.8"/>
    <rect x="117" y="70" width="5" height="10" rx="1" fill="#065f46" stroke="#34d399" strokeWidth="1" opacity="0.8"/>
    <text x="140" y="46" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#6ee7b7" fontFamily="Georgia,serif">PRIMEVAL HISTORY</text>
    <text x="140" y="62" textAnchor="middle" fontSize="11" fill="#a7f3d0" fontFamily="Georgia,serif">Genesis 1–11</text>
    <text x="140" y="210" textAnchor="middle" fontSize="10" fill="#a7f3d0" fontFamily="sans-serif">Creation · Flood · Babel</text>
    {/* Right panel — Patriarchal */}
    <rect x="295" y="20" width="250" height="220" rx="14" fill="url(#ts_right)" opacity="0.85"/>
    <rect x="295" y="20" width="250" height="220" rx="14" fill="none" stroke="#93c5fd" strokeWidth="2"/>
    {/* Night sky with stars */}
    {[[320,50],[360,35],[400,55],[440,40],[480,60],[510,45],[530,70],[340,80],[390,75],[450,72],[500,80]].map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r="1.8" fill="#e0f2fe" opacity="0.7"/>
    ))}
    {/* Desert caravan / journey */}
    <path d="M310,170 Q350,155 390,165 Q430,175 530,160" fill="none" stroke="#93c5fd" strokeWidth="2" strokeDasharray="6,4" opacity="0.6"/>
    {/* Tent */}
    <polygon points="380,155 420,155 420,120 400,105 380,120" fill="#1e3a5f" stroke="#93c5fd" strokeWidth="1.5"/>
    <path d="M388,155 Q400,138 412,155" fill="#0f2847"/>
    {/* Family figures */}
    <circle cx="340" cy="148" r="8" fill="#b45309"/>
    <line x1="340" y1="156" x2="340" y2="175" stroke="#b45309" strokeWidth="5" strokeLinecap="round"/>
    <circle cx="355" cy="150" r="7" fill="#c2855a"/>
    <line x1="355" y1="157" x2="355" y2="174" stroke="#c2855a" strokeWidth="4" strokeLinecap="round"/>
    {/* Camel */}
    <ellipse cx="465" cy="152" rx="20" ry="11" fill="#92400e"/>
    <ellipse cx="455" cy="143" rx="12" ry="10" fill="#92400e"/>
    <circle cx="450" cy="134" r="7" fill="#92400e"/>
    <line x1="444" y1="155" x2="444" y2="175" stroke="#78350f" strokeWidth="4" strokeLinecap="round"/>
    <line x1="452" y1="155" x2="452" y2="175" stroke="#78350f" strokeWidth="4" strokeLinecap="round"/>
    <line x1="464" y1="155" x2="464" y2="175" stroke="#78350f" strokeWidth="4" strokeLinecap="round"/>
    <line x1="472" y1="155" x2="472" y2="175" stroke="#78350f" strokeWidth="4" strokeLinecap="round"/>
    <text x="420" y="46" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#93c5fd" fontFamily="Georgia,serif">PATRIARCHAL HISTORY</text>
    <text x="420" y="62" textAnchor="middle" fontSize="11" fill="#bfdbfe" fontFamily="Georgia,serif">Genesis 12–50</text>
    <text x="420" y="210" textAnchor="middle" fontSize="10" fill="#bfdbfe" fontFamily="sans-serif">Abraham · Isaac · Jacob · Joseph</text>
  </svg>
);

// L1-1 Step 3: Foundation of a building
const SceneFoundation = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <defs>
      <linearGradient id="fn_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0ea5e9"/><stop offset="100%" stopColor="#38bdf8"/></linearGradient>
      <linearGradient id="fn_stone" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#78716c"/><stop offset="100%" stopColor="#57534e"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#fn_sky)"/>
    {/* Clouds */}
    <ellipse cx="100" cy="40" rx="70" ry="22" fill="#fff" opacity="0.85"/>
    <ellipse cx="80" cy="44" rx="50" ry="18" fill="#fff" opacity="0.9"/>
    <ellipse cx="420" cy="30" rx="90" ry="20" fill="#fff" opacity="0.8"/>
    <ellipse cx="450" cy="35" rx="60" ry="16" fill="#fff" opacity="0.85"/>
    {/* Full Bible building */}
    {/* Foundation = Genesis (glowing) */}
    <rect x="60" y="210" width="440" height="42" rx="4" fill="#d97706" stroke="#fbbf24" strokeWidth="3"/>
    <rect x="60" y="210" width="440" height="42" rx="4" fill="#fbbf24" opacity="0.2"/>
    <text x="280" y="236" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#fff" fontFamily="Georgia,serif">GENESIS — THE FOUNDATION</text>
    {/* Glow under foundation */}
    <ellipse cx="280" cy="254" rx="220" ry="14" fill="#fbbf24" opacity="0.35"/>
    {/* Bible books as building floors */}
    {[
      {y:183,w:390,label:"Exodus · Leviticus · Numbers",c:"#78716c"},
      {y:158,w:340,label:"Psalms · Proverbs · Prophets",c:"#6b7280"},
      {y:135,w:290,label:"Matthew · Mark · Luke · John",c:"#4b5563"},
      {y:112,w:240,label:"Acts · Romans · Corinthians",c:"#374151"},
      {y:90,w:190,label:"Revelation",c:"#1f2937"},
    ].map(({y,w,label,c},i)=>(
      <g key={i}>
        <rect x={(560-w)/2} y={y} width={w} height={22} rx="3" fill={c} stroke="#9ca3af" strokeWidth="1"/>
        <text x="280" y={y+15} textAnchor="middle" fontSize="9.5" fill="#d1d5db" fontFamily="sans-serif">{label}</text>
      </g>
    ))}
    {/* Pillars */}
    <rect x="90" y="88" width="16" height="126" rx="3" fill="url(#fn_stone)"/>
    <rect x="454" y="88" width="16" height="126" rx="3" fill="url(#fn_stone)"/>
    {/* Crack where foundation missing = crumble on side */}
    <path d="M520,210 L540,230 L545,218 L555,240 L560,260 L510,260 L520,240Z" fill="#dc2626" opacity="0.15"/>
    {/* Label */}
    <rect x="170" y="10" width="220" height="30" rx="8" fill="rgba(0,0,0,0.25)"/>
    <text x="280" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fef9c3" fontFamily="Georgia,serif">WHY GENESIS MATTERS</text>
  </svg>
);

// L1-2 Step 0: Ancient Near East map
const SceneAncientWorld = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <defs>
      <linearGradient id="aw_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d97706"/><stop offset="100%" stopColor="#92400e"/></linearGradient>
    </defs>
    {/* Parchment background */}
    <rect width="560" height="260" fill="#fef3c7"/>
    <rect width="560" height="260" fill="url(#aw_bg)" opacity="0.08"/>
    {/* Map border */}
    <rect x="10" y="10" width="540" height="240" rx="8" fill="none" stroke="#d97706" strokeWidth="3"/>
    <rect x="15" y="15" width="530" height="230" rx="6" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.4"/>
    {/* Mediterranean Sea */}
    <ellipse cx="160" cy="90" rx="130" ry="55" fill="#bfdbfe" opacity="0.6"/>
    <text x="145" y="94" textAnchor="middle" fontSize="9" fill="#1e40af" fontStyle="italic" fontFamily="serif">Mediterranean Sea</text>
    {/* Nile / Egypt */}
    <path d="M140,115 Q130,150 125,200 Q128,210 132,220" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
    <ellipse cx="130" cy="200" rx="24" ry="14" fill="#60a5fa" opacity="0.3"/>
    {/* Pyramids */}
    <polygon points="110,220 120,195 130,220" fill="#d97706"/>
    <polygon points="125,220 136,196 148,220" fill="#c2710a"/>
    <polygon points="140,220 150,198 160,220" fill="#b45309"/>
    <text x="132" y="240" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e" fontFamily="serif">EGYPT</text>
    {/* Babylon / Mesopotamia */}
    <path d="M340,80 Q360,95 370,120 Q360,145 340,155 Q310,150 300,130 Q295,105 310,90Z" fill="#86efac" opacity="0.4"/>
    {/* Tigris & Euphrates rivers */}
    <path d="M330,65 Q345,100 340,155" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M355,62 Q365,95 370,155" fill="none" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round"/>
    {/* Babylon ziggurat */}
    <rect x="328" y="105" width="30" height="8" rx="1" fill="#d97706"/>
    <rect x="332" y="97" width="22" height="8" rx="1" fill="#c2710a"/>
    <rect x="336" y="89" width="14" height="8" rx="1" fill="#b45309"/>
    <rect x="340" y="81" width="6" height="8" rx="1" fill="#92400e"/>
    <text x="345" y="135" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#065f46" fontFamily="serif">BABYLON</text>
    {/* Canaan / Israel land */}
    <ellipse cx="240" cy="125" rx="30" ry="45" fill="#86efac" opacity="0.5"/>
    <text x="240" y="130" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#065f46" fontFamily="serif">CANAAN</text>
    {/* Ur city marker */}
    <circle cx="390" cy="165" r="8" fill="#f97316"/>
    <circle cx="390" cy="165" r="12" fill="none" stroke="#f97316" strokeWidth="2">
      <animate attributeName="r" values="8;16;8" dur="1.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0;0.8" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    <text x="390" y="185" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#92400e" fontFamily="serif">UR of the Chaldees</text>
    {/* Dotted journey line Ur → Canaan */}
    <path d="M390,163 Q340,145 290,130 Q265,127 252,125" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="5,4"/>
    {/* Arrow */}
    <polygon points="252,121 244,125 252,129" fill="#d97706"/>
    {/* Title */}
    <text x="280" y="36" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#7c2d12" fontFamily="Georgia,serif">THE ANCIENT NEAR EAST</text>
    <text x="280" y="52" textAnchor="middle" fontSize="10" fill="#92400e" fontFamily="serif" fontStyle="italic">~2000 BC — The World of Genesis</text>
  </svg>
);

// L1-2 Step 1: Contrast — Babylon vs Genesis
const SceneBabylonVsGenesis = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <rect width="560" height="260" fill="#1c1917"/>
    {/* Left: Babylon — dark, oppressive */}
    <rect x="0" y="0" width="270" height="260" fill="#1a0a00"/>
    {/* Ziggurat with slaves */}
    <rect x="20" y="190" width="240" height="10" fill="#78350f"/>
    <rect x="40" y="168" width="200" height="24" rx="2" fill="#6b2d0a"/>
    <rect x="60" y="150" width="160" height="20" rx="2" fill="#5c2308"/>
    <rect x="80" y="135" width="120" height="18" rx="2" fill="#4d1c06"/>
    <rect x="100" y="122" width="80" height="16" rx="2" fill="#3c1407"/>
    <rect x="115" y="110" width="50" height="14" rx="2" fill="#2e0e03"/>
    {/* Chains / oppression */}
    <path d="M50,205 Q55,215 50,225" fill="none" stroke="#6b7280" strokeWidth="2"/>
    <path d="M80,205 Q85,215 80,225" fill="none" stroke="#6b7280" strokeWidth="2"/>
    <path d="M50,225 L80,225" stroke="#6b7280" strokeWidth="2"/>
    <circle cx="50" cy="205" r="3" fill="#6b7280"/>
    <circle cx="80" cy="205" r="3" fill="#6b7280"/>
    {/* Slave figure */}
    <circle cx="60" cy="230" r="7" fill="#a16207" opacity="0.7"/>
    <line x1="60" y1="237" x2="60" y2="252" stroke="#a16207" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
    {/* Fire god idol */}
    <polygon points="178,140 185,170 171,170" fill="#f97316" opacity="0.7"/>
    <rect x="174" y="168" width="14" height="22" rx="2" fill="#78350f"/>
    <circle cx="181" cy="135" r="8" fill="#d97706"/>
    <text x="135" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f97316" fontFamily="Georgia,serif">BABYLON</text>
    <text x="135" y="46" textAnchor="middle" fontSize="9" fill="#fbbf24" fontFamily="serif" fontStyle="italic">Humans = slaves to gods</text>
    <rect x="20" y="62" width="230" height="55" rx="8" fill="rgba(255,100,0,0.12)" stroke="#f97316" strokeWidth="1"/>
    <text x="135" y="80" textAnchor="middle" fontSize="10" fill="#fb923c" fontFamily="serif">"The gods created humans</text>
    <text x="135" y="94" textAnchor="middle" fontSize="10" fill="#fb923c" fontFamily="serif">to do their labor and</text>
    <text x="135" y="108" textAnchor="middle" fontSize="10" fill="#fb923c" fontFamily="serif">relieve the gods of toil."</text>
    {/* Divider */}
    <line x1="278" y1="10" x2="278" y2="250" stroke="#d97706" strokeWidth="3"/>
    <text x="279" y="137" textAnchor="middle" fontSize="22" fill="#d97706">VS</text>
    {/* Right: Genesis — light, dignified */}
    <rect x="288" y="0" width="272" height="260" fill="#0f172a"/>
    {/* Sunrise / light */}
    <ellipse cx="424" cy="260" rx="160" ry="100" fill="#fbbf24" opacity="0.15"/>
    <ellipse cx="424" cy="240" rx="100" ry="60" fill="#fbbf24" opacity="0.2"/>
    {/* Human figures standing tall */}
    <circle cx="390" cy="148" r="14" fill="#c2855a"/>
    <line x1="390" y1="162" x2="390" y2="200" stroke="#c2855a" strokeWidth="9" strokeLinecap="round"/>
    <line x1="390" y1="172" x2="368" y2="190" stroke="#c2855a" strokeWidth="7" strokeLinecap="round"/>
    <line x1="390" y1="172" x2="412" y2="190" stroke="#c2855a" strokeWidth="7" strokeLinecap="round"/>
    <circle cx="448" cy="152" r="13" fill="#d4a070"/>
    <line x1="448" y1="165" x2="448" y2="200" stroke="#d4a070" strokeWidth="9" strokeLinecap="round"/>
    <line x1="448" y1="175" x2="428" y2="192" stroke="#d4a070" strokeWidth="7" strokeLinecap="round"/>
    <line x1="448" y1="175" x2="468" y2="192" stroke="#d4a070" strokeWidth="7" strokeLinecap="round"/>
    {/* Crown / image of God halo */}
    <circle cx="390" cy="144" r="20" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.6">
      <animate attributeName="r" values="18;22;18" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="448" cy="148" r="20" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.5">
      <animate attributeName="r" values="18;22;18" dur="2.4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.4s" repeatCount="indefinite"/>
    </circle>
    <text x="424" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#86efac" fontFamily="Georgia,serif">GENESIS</text>
    <text x="424" y="46" textAnchor="middle" fontSize="9" fill="#a7f3d0" fontFamily="serif" fontStyle="italic">Humans = Image of God</text>
    <rect x="300" y="62" width="230" height="55" rx="8" fill="rgba(134,239,172,0.1)" stroke="#34d399" strokeWidth="1"/>
    <text x="415" y="80" textAnchor="middle" fontSize="10" fill="#86efac" fontFamily="serif">"So God created mankind</text>
    <text x="415" y="94" textAnchor="middle" fontSize="10" fill="#86efac" fontFamily="serif">in his own image... male</text>
    <text x="415" y="108" textAnchor="middle" fontSize="10" fill="#86efac" fontFamily="serif">and female." Gen 1:27</text>
  </svg>
);

// L2-1 Step 0: Six days grid — realms and fillers
const SceneSixDays = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <rect width="560" height="260" fill="#0f172a"/>
    {/* Title */}
    <text x="280" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fbbf24" fontFamily="Georgia,serif">THE SIX DAYS — FORM &amp; FILL</text>
    {/* Day cells */}
    {[
      {x:20,y:45,day:"DAY 1",title:"Light",fill:"#fbbf24",bg:"#451a03",icon:"☀️",w:160,h:95},
      {x:200,y:45,day:"DAY 2",title:"Sky & Sea",fill:"#60a5fa",bg:"#0c2244",icon:"🌊",w:160,h:95},
      {x:380,y:45,day:"DAY 3",title:"Land & Plants",fill:"#34d399",bg:"#052e16",icon:"🌿",w:160,h:95},
      {x:20,y:155,day:"DAY 4",title:"Sun, Moon, Stars",fill:"#fbbf24",bg:"#451a03",icon:"⭐",w:160,h:95},
      {x:200,y:155,day:"DAY 5",title:"Birds & Fish",fill:"#60a5fa",bg:"#0c2244",icon:"🐦",w:160,h:95},
      {x:380,y:155,day:"DAY 6",title:"Animals & Humans",fill:"#f87171",bg:"#3b0a0a",icon:"👤",w:160,h:95},
    ].map(({x,y,day,title,fill,bg,icon,w,h})=>(
      <g key={day}>
        <rect x={x} y={y} width={w} height={h} rx="10" fill={bg} stroke={fill} strokeWidth="2.5"/>
        <text x={x+w/2} y={y+22} textAnchor="middle" fontSize="11" fontWeight="bold" fill={fill} fontFamily="Georgia,serif">{day}</text>
        <text x={x+w/2} y={y+52} textAnchor="middle" fontSize="22">{icon}</text>
        <text x={x+w/2} y={y+78} textAnchor="middle" fontSize="11" fill="#e5e7eb" fontFamily="sans-serif">{title}</text>
      </g>
    ))}
    {/* Arrows: Day 1→4, 2→5, 3→6 */}
    <line x1="100" y1="142" x2="100" y2="153" stroke="#fbbf24" strokeWidth="2.5" markerEnd="url(#arr)"/>
    <line x1="280" y1="142" x2="280" y2="153" stroke="#60a5fa" strokeWidth="2.5"/>
    <line x1="460" y1="142" x2="460" y2="153" stroke="#34d399" strokeWidth="2.5"/>
    <polygon points="96,153 104,153 100,161" fill="#fbbf24"/>
    <polygon points="276,153 284,153 280,161" fill="#60a5fa"/>
    <polygon points="456,153 464,153 460,161" fill="#34d399"/>
    <text x="100" y="149" textAnchor="middle" fontSize="9" fill="#fbbf24" fontFamily="sans-serif">FILLS</text>
    <text x="280" y="149" textAnchor="middle" fontSize="9" fill="#60a5fa" fontFamily="sans-serif">FILLS</text>
    <text x="460" y="149" textAnchor="middle" fontSize="9" fill="#34d399" fontFamily="sans-serif">FILLS</text>
  </svg>
);

// L2-1 Step 1: Light from darkness — God speaks
const SceneLightSpeaks = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <defs>
      <radialGradient id="ls_light" cx="50%" cy="50%"><stop offset="0%" stopColor="#fef9c3"/><stop offset="40%" stopColor="#fbbf24"/><stop offset="100%" stopColor="#0a0a0a"/></radialGradient>
    </defs>
    <rect width="560" height="260" fill="#050505"/>
    {/* DARKNESS on sides */}
    <rect x="0" y="0" width="560" height="260" fill="#0a0a0a"/>
    {/* Central light explosion */}
    <circle cx="280" cy="130" r="180" fill="url(#ls_light)"/>
    {/* Light rays */}
    {[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map((angle,i)=>{
      const rad = angle * Math.PI / 180;
      const x2 = 280 + 260 * Math.cos(rad);
      const y2 = 130 + 260 * Math.sin(rad);
      return <line key={i} x1="280" y1="130" x2={x2} y2={y2} stroke="#fbbf24" strokeWidth={i%4===0?2.5:1} opacity={i%4===0?0.4:0.15}/>;
    })}
    {/* Bright core */}
    <circle cx="280" cy="130" r="60" fill="#fef9c3" opacity="0.6"/>
    <circle cx="280" cy="130" r="30" fill="#fff" opacity="0.9">
      <animate attributeName="r" values="25;35;25" dur="2s" repeatCount="indefinite"/>
    </circle>
    {/* Darkness edges */}
    <path d="M0,0 Q140,130 0,260Z" fill="#050505" opacity="0.7"/>
    <path d="M560,0 Q420,130 560,260Z" fill="#050505" opacity="0.7"/>
    {/* Speech words */}
    <rect x="160" y="42" width="240" height="36" rx="18" fill="rgba(255,255,255,0.1)" stroke="#fbbf24" strokeWidth="1.5"/>
    <text x="280" y="65" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#fff" fontFamily="Georgia,serif" fontStyle="italic">"Let there be light"</text>
    {/* Hebrew */}
    <text x="280" y="100" textAnchor="middle" fontSize="14" fill="#fbbf24" fontFamily="serif" opacity="0.8">יְהִי אוֹר</text>
    {/* Tohu wabohu label on dark side */}
    <text x="65" y="130" textAnchor="middle" fontSize="11" fill="#6b7280" fontFamily="serif" fontStyle="italic">tohu wabohu</text>
    <text x="65" y="145" textAnchor="middle" fontSize="10" fill="#4b5563" fontFamily="serif">formless &amp; void</text>
    <text x="495" y="130" textAnchor="middle" fontSize="11" fill="#6b7280" fontFamily="serif" fontStyle="italic">tohu wabohu</text>
    {/* Reference */}
    <text x="280" y="200" textAnchor="middle" fontSize="12" fill="#fbbf24" fontFamily="Georgia,serif">Genesis 1:3</text>
  </svg>
);

// L2-1 Step 2: Imago Dei — humans crowned
const SceneImagoDei = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <defs>
      <linearGradient id="id_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0369a1"/><stop offset="100%" stopColor="#0ea5e9"/></linearGradient>
      <radialGradient id="id_glow" cx="50%" cy="30%"><stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5"/><stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/></radialGradient>
    </defs>
    <rect width="560" height="260" fill="url(#id_sky)"/>
    <rect width="560" height="260" fill="url(#id_glow)"/>
    {/* Clouds */}
    <ellipse cx="90" cy="40" rx="75" ry="22" fill="#fff" opacity="0.7"/>
    <ellipse cx="440" cy="30" rx="90" ry="20" fill="#fff" opacity="0.65"/>
    <ellipse cx="290" cy="20" rx="60" ry="14" fill="#fff" opacity="0.6"/>
    {/* Ground / garden */}
    <path d="M0,210 Q140,195 280,205 Q420,215 560,200 L560,260 L0,260Z" fill="#15803d"/>
    <path d="M0,225 Q140,215 280,222 Q420,230 560,218 L560,260 L0,260Z" fill="#166534"/>
    {/* Trees framing */}
    {[[60,175],[120,165],[440,165],[500,175]].map(([x,y],i)=>(
      <g key={i}><rect x={x-4} y={y} width="8" height="50" rx="3" fill="#92400e"/><ellipse cx={x} cy={y-10} rx={22+i%2*5} ry={28+i%2*5} fill="#15803d"/><ellipse cx={x} cy={y-15} rx={16} ry={22} fill="#16a34a"/></g>
    ))}
    {/* Central glow from heaven */}
    <path d="M240,0 L270,90 L290,90 L310,0Z" fill="#fbbf24" opacity="0.15"/>
    <ellipse cx="280" cy="95" rx="40" ry="20" fill="#fbbf24" opacity="0.4"/>
    {/* Male figure */}
    <circle cx="220" cy="160" r="18" fill="#c2855a"/>
    <rect x="206" y="178" width="28" height="36" rx="10" fill="#b45309"/>
    <line x1="220" y1="190" x2="200" y2="212" stroke="#b45309" strokeWidth="8" strokeLinecap="round"/>
    <line x1="220" y1="190" x2="240" y2="212" stroke="#b45309" strokeWidth="8" strokeLinecap="round"/>
    {/* Crown / imago dei halo */}
    <circle cx="220" cy="153" r="28" fill="none" stroke="#fbbf24" strokeWidth="2.5" opacity="0.7">
      <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="220" cy="153" r="38" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.3">
      <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    {/* Female figure */}
    <circle cx="340" cy="158" r="18" fill="#d4a070"/>
    <path d="M326,176 Q340,172 354,176 Q358,198 354,216 Q340,220 326,216 Q322,198 326,176Z" fill="#c2710a"/>
    <line x1="340" y1="188" x2="318" y2="210" stroke="#c2710a" strokeWidth="8" strokeLinecap="round"/>
    <line x1="340" y1="188" x2="362" y2="210" stroke="#c2710a" strokeWidth="8" strokeLinecap="round"/>
    <circle cx="340" cy="151" r="28" fill="none" stroke="#fbbf24" strokeWidth="2.5" opacity="0.7">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite"/>
    </circle>
    {/* Imago Dei label */}
    <rect x="200" y="52" width="160" height="52" rx="12" fill="rgba(0,0,0,0.4)"/>
    <text x="280" y="74" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#fbbf24" fontFamily="Georgia,serif">IMAGO DEI</text>
    <text x="280" y="92" textAnchor="middle" fontSize="11" fill="#fef9c3" fontFamily="serif" fontStyle="italic">Image of God in every person</text>
    {/* Verse */}
    <text x="280" y="240" textAnchor="middle" fontSize="11" fill="#dcfce7" fontFamily="serif" fontStyle="italic">Genesis 1:27</text>
  </svg>
);

// L3-1: Garden temptation scene
const SceneTemptation = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <defs>
      <linearGradient id="temp_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#14532d"/><stop offset="100%" stopColor="#365314"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#temp_sky)"/>
    <rect x="0" y="200" width="560" height="60" fill="#15803d"/>
    {/* Background trees */}
    {[[30,160],[520,155],[80,170],[470,165]].map(([x,y],i)=>(
      <g key={i} opacity="0.5"><rect x={x-5} y={y} width="10" height="60" rx="3" fill="#7c2d12"/><ellipse cx={x} cy={y-15} rx="30" ry="38" fill="#14532d"/></g>
    ))}
    {/* THE tree — massive center */}
    <rect x="254" y="80" width="32" height="120" rx="6" fill="#7c2d12"/>
    <line x1="270" y1="100" x2="195" y2="58" stroke="#7c2d12" strokeWidth="12" strokeLinecap="round"/>
    <line x1="270" y1="95" x2="345" y2="55" stroke="#7c2d12" strokeWidth="12" strokeLinecap="round"/>
    <line x1="270" y1="115" x2="165" y2="88" stroke="#7c2d12" strokeWidth="8" strokeLinecap="round"/>
    <line x1="270" y1="115" x2="375" y2="92" stroke="#7c2d12" strokeWidth="8" strokeLinecap="round"/>
    <ellipse cx="270" cy="50" rx="95" ry="80" fill="#14532d"/>
    <ellipse cx="200" cy="68" rx="60" ry="50" fill="#15803d"/>
    <ellipse cx="340" cy="66" rx="58" ry="48" fill="#166534"/>
    <ellipse cx="270" cy="44" rx="76" ry="62" fill="#16a34a"/>
    {/* Glowing forbidden fruit */}
    {[[255,38],[278,30],[242,55],[295,52],[260,68],[285,65]].map(([x,y],i)=>(
      <g key={i}><circle cx={x} cy={y} r={10-i*0.5} fill="#dc2626" opacity="0.95"/><circle cx={x-2} cy={y-3} r="3.5" fill="#f87171" opacity="0.6"/></g>
    ))}
    <circle cx="270" cy="50" r="35" fill="#dc2626" opacity="0.12"/>
    {/* Serpent */}
    <path d="M390,240 Q420,205 400,178 Q382,152 405,128 Q428,105 412,85" fill="none" stroke="#365314" strokeWidth="14" strokeLinecap="round"/>
    <path d="M390,240 Q420,205 400,178 Q382,152 405,128 Q428,105 412,85" fill="none" stroke="#4ade80" strokeWidth="9" strokeLinecap="round"/>
    <ellipse cx="414" cy="81" rx="14" ry="11" fill="#4ade80"/>
    <circle cx="408" cy="78" r="3" fill="#dc2626"/>
    <circle cx="420" cy="78" r="3" fill="#dc2626"/>
    <path d="M409,90 L403,98" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
    <path d="M419,90 L425,98" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
    {/* Question mark speech bubble */}
    <path d="M360,75 Q395,60 410,78" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="3,3"/>
    <rect x="290" y="48" width="190" height="44" rx="14" fill="rgba(0,0,0,0.65)" stroke="#4ade80" strokeWidth="1.5"/>
    <text x="385" y="67" textAnchor="middle" fontSize="11" fill="#4ade80" fontFamily="serif" fontStyle="italic">"Did God really say...</text>
    <text x="385" y="83" textAnchor="middle" fontSize="11" fill="#4ade80" fontFamily="serif" fontStyle="italic">you must not eat?"</text>
    {/* Eve figure */}
    <circle cx="172" cy="160" r="14" fill="#d4a070"/>
    <path d="M160,174 Q172,170 184,174 L184,205 Q172,208 160,205Z" fill="#c2710a"/>
    <line x1="160" y1="185" x2="145" y2="205" stroke="#c2710a" strokeWidth="6" strokeLinecap="round"/>
    <line x1="184" y1="185" x2="199" y2="205" stroke="#c2710a" strokeWidth="6" strokeLinecap="round"/>
    {/* Fruit held toward her */}
    <circle cx="205" cy="175" r="10" fill="#dc2626"/>
    <circle cx="203" cy="172" r="3.5" fill="#f87171" opacity="0.6"/>
    <line x1="196" y1="188" x2="207" y2="178" stroke="#c2710a" strokeWidth="3" strokeLinecap="round"/>
    {/* Adam watching passively */}
    <circle cx="110" cy="162" r="13" fill="#b45309"/>
    <path d="M100,175 Q110,172 120,175 L120,204 Q110,207 100,204Z" fill="#a16207"/>
    <line x1="100" y1="186" x2="86" y2="205" stroke="#a16207" strokeWidth="6" strokeLinecap="round"/>
    <line x1="120" y1="186" x2="134" y2="205" stroke="#a16207" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

// L3-1 Step 1: Three temptation categories
const SceneThreeTemptations = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <rect width="560" height="260" fill="#1c0a00"/>
    <text x="280" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fbbf24" fontFamily="Georgia,serif">THREE ROOTS OF ALL TEMPTATION</text>
    {/* Card 1 - Physical */}
    <rect x="18" y="44" width="162" height="200" rx="14" fill="#431407" stroke="#f97316" strokeWidth="2.5"/>
    <circle cx="99" cy="110" r="38" fill="#dc2626" opacity="0.9"/>
    <circle cx="95" cy="105" r="12" fill="#f87171" opacity="0.6"/>
    <text x="99" y="116" textAnchor="middle" fontSize="28">🍎</text>
    <text x="99" y="168" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f97316" fontFamily="Georgia,serif">PHYSICAL</text>
    <text x="99" y="186" textAnchor="middle" fontSize="11" fill="#fed7aa" fontFamily="serif">DESIRE</text>
    <text x="99" y="210" textAnchor="middle" fontSize="9.5" fill="#fdba74" fontFamily="serif">"Good for food"</text>
    <text x="99" y="225" textAnchor="middle" fontSize="9.5" fill="#fdba74" fontFamily="serif">Genesis 3:6a</text>
    {/* Card 2 - Aesthetic */}
    <rect x="199" y="44" width="162" height="200" rx="14" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2.5"/>
    <circle cx="280" cy="110" r="38" fill="#1d4ed8" opacity="0.9"/>
    <text x="280" y="116" textAnchor="middle" fontSize="28">👁</text>
    <text x="280" y="168" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#60a5fa" fontFamily="Georgia,serif">AESTHETIC</text>
    <text x="280" y="186" textAnchor="middle" fontSize="11" fill="#bfdbfe" fontFamily="serif">APPEAL</text>
    <text x="280" y="210" textAnchor="middle" fontSize="9.5" fill="#93c5fd" fontFamily="serif">"Pleasing to the eye"</text>
    <text x="280" y="225" textAnchor="middle" fontSize="9.5" fill="#93c5fd" fontFamily="serif">Genesis 3:6b</text>
    {/* Card 3 - Pride */}
    <rect x="380" y="44" width="162" height="200" rx="14" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="2.5"/>
    <circle cx="461" cy="110" r="38" fill="#5b21b6" opacity="0.9"/>
    <text x="461" y="116" textAnchor="middle" fontSize="28">🧠</text>
    <text x="461" y="168" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#a78bfa" fontFamily="Georgia,serif">INTELLECTUAL</text>
    <text x="461" y="186" textAnchor="middle" fontSize="11" fill="#ddd6fe" fontFamily="serif">PRIDE</text>
    <text x="461" y="210" textAnchor="middle" fontSize="9.5" fill="#c4b5fd" fontFamily="serif">"Desirable for wisdom"</text>
    <text x="461" y="225" textAnchor="middle" fontSize="9.5" fill="#c4b5fd" fontFamily="serif">Genesis 3:6c</text>
    {/* 1 John connector */}
    <path d="M180,144 L199,144" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="3,3"/>
    <path d="M361,144 L380,144" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="3,3"/>
    <text x="280" y="248" textAnchor="middle" fontSize="9" fill="#9ca3af" fontFamily="serif" fontStyle="italic">Same 3 categories in 1 John 2:16 — "lust of the flesh, lust of the eyes, pride of life"</text>
  </svg>
);

// L3-1 Step 2: Adam's passive silence
const SceneAdamSilence = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <defs>
      <linearGradient id="as_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#14532d"/><stop offset="100%" stopColor="#166534"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#as_bg)"/>
    <rect x="0" y="210" width="560" height="50" fill="#15803d"/>
    {/* Scene: Eve eating, Adam watching */}
    {/* Tree */}
    <rect x="254" y="70" width="22" height="140" rx="5" fill="#7c2d12" opacity="0.8"/>
    <ellipse cx="265" cy="65" rx="65" ry="65" fill="#14532d"/>
    <ellipse cx="265" cy="58" rx="50" ry="52" fill="#16a34a"/>
    {/* Red fruit */}
    {[[255,38],[275,35],[258,58],[278,55]].map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r="9" fill="#dc2626"/>
    ))}
    {/* Eve eating — hand to mouth */}
    <circle cx="370" cy="148" r="16" fill="#d4a070"/>
    <path d="M356,164 Q370,160 384,164 L384,200 Q370,204 356,200Z" fill="#c2710a"/>
    <line x1="356" y1="178" x2="338" y2="198" stroke="#c2710a" strokeWidth="7" strokeLinecap="round"/>
    {/* Hand holding fruit to mouth */}
    <circle cx="390" cy="152" r="9" fill="#dc2626"/>
    <line x1="383" y1="164" x2="390" y2="154" stroke="#d4a070" strokeWidth="5" strokeLinecap="round"/>
    {/* Eve's expression */}
    <path d="M363,148 Q370,152 377,148" fill="none" stroke="#7c2d12" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Adam — STANDING, SILENT, doing nothing */}
    <circle cx="170" cy="148" r="16" fill="#b45309"/>
    <rect x="157" y="164" width="26" height="42" rx="8" fill="#a16207"/>
    <line x1="170" y1="180" x2="148" y2="205" stroke="#a16207" strokeWidth="7" strokeLinecap="round"/>
    <line x1="170" y1="180" x2="192" y2="205" stroke="#a16207" strokeWidth="7" strokeLinecap="round"/>
    {/* Adam's mouth = X (silent) */}
    <circle cx="170" cy="148" r="22" fill="none" stroke="#ef4444" strokeWidth="2.5" opacity="0.7"/>
    <line x1="162" y1="152" x2="178" y2="152" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Thought bubble — "..." */}
    <circle cx="192" cy="130" r="5" fill="rgba(255,255,255,0.2)"/>
    <circle cx="202" cy="120" r="7" fill="rgba(255,255,255,0.2)"/>
    <ellipse cx="218" cy="110" rx="18" ry="12" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    <text x="218" y="114" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.5)">...</text>
    {/* Label / verse */}
    <rect x="90" y="15" width="380" height="44" rx="12" fill="rgba(0,0,0,0.55)"/>
    <text x="280" y="35" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fbbf24" fontFamily="Georgia,serif">ADAM WAS WITH HER</text>
    <text x="280" y="52" textAnchor="middle" fontSize="10" fill="#fde68a" fontFamily="serif" fontStyle="italic">"She also gave some to her husband, who was with her." — Genesis 3:6</text>
    {/* Silent = wrong label */}
    <rect x="128" y="218" width="88" height="26" rx="8" fill="#dc2626" opacity="0.85"/>
    <text x="172" y="235" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff" fontFamily="sans-serif">SILENT ✗</text>
    {/* Eating = wrong label */}
    <rect x="344" y="218" width="88" height="26" rx="8" fill="#dc2626" opacity="0.85"/>
    <text x="388" y="235" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff" fontFamily="sans-serif">EATING ✗</text>
  </svg>
);

// L3-1 Step 3: Garments of skin — first sacrifice
const SceneFirstGrace = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <defs>
      <linearGradient id="fg_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1c1917"/><stop offset="100%" stopColor="#292524"/></linearGradient>
      <radialGradient id="fg_glow" cx="50%" cy="50%"><stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4"/><stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/></radialGradient>
    </defs>
    <rect width="560" height="260" fill="url(#fg_sky)"/>
    {/* Altar */}
    <rect x="210" y="175" width="140" height="30" rx="6" fill="#78350f"/>
    <rect x="220" y="158" width="120" height="20" rx="4" fill="#92400e"/>
    {/* Fire on altar */}
    <ellipse cx="280" cy="160" rx="35" ry="8" fill="#f97316" opacity="0.5"/>
    <ellipse cx="280" cy="148" rx="20" ry="18" fill="#ea580c" opacity="0.85">
      <animate attributeName="ry" values="18;13;18" dur="0.8s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="280" cy="135" rx="12" ry="16" fill="#f97316" opacity="0.9">
      <animate attributeName="ry" values="16;10;16" dur="0.6s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="280" cy="125" rx="7" ry="12" fill="#fbbf24" opacity="0.9">
      <animate attributeName="ry" values="12;7;12" dur="0.5s" repeatCount="indefinite"/>
    </ellipse>
    {/* Glow */}
    <circle cx="280" cy="148" r="70" fill="url(#fg_glow)"/>
    {/* Smoke */}
    <path d="M275,108 Q268,88 272,70 Q278,88 280,108" fill="#6b7280" opacity="0.25"/>
    <path d="M285,105 Q292,82 288,62 Q282,80 280,105" fill="#6b7280" opacity="0.2"/>
    {/* God figure (robed, giving garments) */}
    <ellipse cx="140" cy="135" rx="28" ry="55" fill="#e5e7eb" opacity="0.85"/>
    <circle cx="140" cy="98" r="18" fill="#f5f5f4"/>
    {/* Halo */}
    <circle cx="140" cy="92" r="28" fill="none" stroke="#fbbf24" strokeWidth="2.5" opacity="0.7">
      <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite"/>
    </circle>
    {/* Garment held out */}
    <path d="M165,130 Q195,125 215,130 Q220,140 215,150 Q195,155 165,150Z" fill="#d4a373" stroke="#b45309" strokeWidth="1.5"/>
    {/* Adam receiving — covered in shame */}
    <circle cx="390" cy="148" r="16" fill="#b45309"/>
    <rect x="376" y="164" width="28" height="42" rx="9" fill="#7c2d12"/>
    {/* Downcast posture */}
    <path d="M376,175 Q368,190 365,210" stroke="#7c2d12" strokeWidth="8" strokeLinecap="round" fill="none"/>
    <path d="M404,175 Q412,190 415,210" stroke="#7c2d12" strokeWidth="8" strokeLinecap="round" fill="none"/>
    {/* Eve beside Adam */}
    <circle cx="430" cy="152" r="14" fill="#c2855a"/>
    <path d="M418,166 Q430,162 442,166 L440,205 Q430,208 420,205Z" fill="#92400e"/>
    {/* Verse banner */}
    <rect x="60" y="12" width="440" height="48" rx="12" fill="rgba(0,0,0,0.6)"/>
    <text x="280" y="30" textAnchor="middle" fontSize="11" fill="#fbbf24" fontFamily="Georgia,serif" fontStyle="italic">"The LORD God made garments of skin</text>
    <text x="280" y="46" textAnchor="middle" fontSize="11" fill="#fbbf24" fontFamily="Georgia,serif" fontStyle="italic">for Adam and his wife and clothed them."</text>
    <text x="280" y="61" textAnchor="middle" fontSize="10" fill="#fde68a" fontFamily="serif">— Genesis 3:21 · The First Sacrifice · The First Grace</text>
    {/* Forward arrow to cross */}
    <path d="M450,180 Q500,165 520,155" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"/>
    <text x="500" y="145" textAnchor="middle" fontSize="9" fill="#fbbf24" fontFamily="serif" fontStyle="italic">Points to</text>
    <text x="500" y="157" textAnchor="middle" fontSize="9" fill="#fbbf24" fontFamily="serif" fontStyle="italic">the Cross</text>
    <text x="505" y="172" textAnchor="middle" fontSize="18" fill="#fbbf24">✝</text>
  </svg>
);

// L4-1 Step 0: Ur of the Chaldees city scene
const SceneUr = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <defs>
      <linearGradient id="ur_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fde68a"/><stop offset="70%" stopColor="#fb923c"/><stop offset="100%" stopColor="#c2410c"/></linearGradient>
      <linearGradient id="ur_sand" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d97706"/><stop offset="100%" stopColor="#92400e"/></linearGradient>
    </defs>
    <rect width="560" height="260" fill="url(#ur_sky)"/>
    {/* Setting sun */}
    <circle cx="70" cy="65" r="36" fill="#fbbf24" opacity="0.9"/>
    {/* City of Ur */}
    <rect x="0" y="190" width="560" height="70" fill="url(#ur_sand)"/>
    {/* City walls */}
    <rect x="30" y="155" width="500" height="40" rx="2" fill="#c2855a" stroke="#a16207" strokeWidth="2"/>
    {/* Battlements */}
    {[45,75,105,135,165,195,225,255,285,315,345,375,405,435,465,495].map((x,i)=>(
      <rect key={i} x={x} y={145} width="18" height="14" rx="2" fill="#d4a373"/>
    ))}
    {/* Ziggurat */}
    <rect x="180" y="110" width="200" height="48" rx="3" fill="#d4a373" stroke="#b45309" strokeWidth="2"/>
    <rect x="205" y="85" width="150" height="28" rx="2" fill="#c2855a" stroke="#a16207" strokeWidth="1.5"/>
    <rect x="230" y="65" width="100" height="24" rx="2" fill="#b45309" stroke="#92400e" strokeWidth="1.5"/>
    <rect x="252" y="48" width="56" height="20" rx="2" fill="#a16207" stroke="#7c2d12" strokeWidth="1"/>
    <rect x="266" y="34" width="28" height="17" rx="1" fill="#92400e"/>
    {/* Fire on top of ziggurat */}
    <ellipse cx="280" cy="34" rx="8" ry="10" fill="#f97316" opacity="0.85">
      <animate attributeName="ry" values="10;7;10" dur="0.7s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="280" cy="29" rx="4" ry="7" fill="#fbbf24" opacity="0.9">
      <animate attributeName="ry" values="7;4;7" dur="0.5s" repeatCount="indefinite"/>
    </ellipse>
    {/* City buildings */}
    <rect x="40" y="138" width="40" height="22" rx="2" fill="#c2855a"/>
    <rect x="50" y="128" width="20" height="12" rx="1" fill="#d4a373"/>
    <rect x="460" y="133" width="50" height="27" rx="2" fill="#c2855a"/>
    <rect x="472" y="122" width="26" height="14" rx="1" fill="#d4a373"/>
    {/* Abram figure at gate, looking away */}
    <circle cx="420" cy="192" r="12" fill="#b45309"/>
    <ellipse cx="420" cy="208" rx="16" ry="24" fill="#a16207"/>
    <line x1="420" y1="218" x2="404" y2="235" stroke="#a16207" strokeWidth="6" strokeLinecap="round"/>
    <line x1="420" y1="218" x2="436" y2="235" stroke="#a16207" strokeWidth="6" strokeLinecap="round"/>
    {/* Camel loaded with bags */}
    <ellipse cx="460" cy="205" rx="22" ry="12" fill="#92400e"/>
    <ellipse cx="450" cy="195" rx="13" ry="11" fill="#92400e"/>
    <circle cx="445" cy="186" r="8" fill="#92400e"/>
    {[448,458,466,476].map((x,i)=>(
      <line key={i} x1={x} y1="215" x2={x} y2="232" stroke="#7c2d12" strokeWidth="5" strokeLinecap="round"/>
    ))}
    {/* Bags on camel */}
    <ellipse cx="462" cy="196" rx="14" ry="9" fill="#78350f" stroke="#92400e" strokeWidth="1.5"/>
    {/* Arrow pointing away from city */}
    <path d="M395,198 Q340,190 300,192" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="5,4"/>
    <polygon points="300,188 290,192 300,196" fill="#fbbf24"/>
    <text x="345" y="186" textAnchor="middle" fontSize="10" fill="#fbbf24" fontFamily="serif" fontStyle="italic" fontWeight="bold">LEAVE!</text>
    {/* Title */}
    <rect x="150" y="10" width="260" height="34" rx="10" fill="rgba(0,0,0,0.4)"/>
    <text x="280" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fbbf24" fontFamily="Georgia,serif">UR OF THE CHALDEES</text>
    <text x="280" y="42" textAnchor="middle" fontSize="10" fill="#fde68a" fontFamily="serif" fontStyle="italic">~2000 BC — The city Abraham left</text>
  </svg>
);

// L4-1 Step 1: Abraham walking into the unknown
const SceneAbrahamFaith = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <defs>
      <linearGradient id="af_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0f172a"/><stop offset="100%" stopColor="#1e3a5f"/></linearGradient>
      <radialGradient id="af_star" cx="50%" cy="25%"><stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3"/><stop offset="100%" stopColor="transparent"/></radialGradient>
    </defs>
    <rect width="560" height="260" fill="url(#af_sky)"/>
    <rect width="560" height="260" fill="url(#af_star)"/>
    {/* Star field */}
    {STARS_B.slice(0,30).map(([x,y,r],i)=>(
      <circle key={i} cx={x*1.75} cy={y*1.8} r={r} fill="#fff" opacity="0.6"/>
    ))}
    {/* Bright guiding star */}
    <circle cx="420" cy="45" r="10" fill="#fbbf24">
      <animate attributeName="r" values="8;13;8" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="420" cy="45" r="22" fill="#fbbf24" opacity="0.2">
      <animate attributeName="r" values="18;30;18" dur="2s" repeatCount="indefinite"/>
    </circle>
    {/* Moonlit path ahead */}
    <path d="M0,230 Q280,220 560,225 L560,260 L0,260Z" fill="#78350f"/>
    <path d="M0,242 Q280,234 560,238 L560,260 L0,260Z" fill="#5c2308"/>
    {/* Road / path forward */}
    <path d="M60,260 Q200,245 380,235 Q460,228 540,220" fill="none" stroke="#d97706" strokeWidth="3" strokeDasharray="8,5" opacity="0.6"/>
    {/* Hills in mist */}
    <ellipse cx="500" cy="220" rx="180" ry="60" fill="#1e3a5f" opacity="0.5"/>
    <ellipse cx="460" cy="210" rx="140" ry="50" fill="#172554" opacity="0.6"/>
    {/* Question marks / unknown ahead */}
    <text x="450" y="185" textAnchor="middle" fontSize="28" fill="#60a5fa" opacity="0.35">?</text>
    <text x="490" y="160" textAnchor="middle" fontSize="18" fill="#60a5fa" opacity="0.25">?</text>
    {/* Abraham walking forward — back to viewer */}
    <circle cx="160" cy="192" r="16" fill="#b45309"/>
    <ellipse cx="160" cy="216" rx="18" ry="30" fill="#92400e"/>
    <line x1="148" y1="228" x2="136" y2="250" stroke="#92400e" strokeWidth="7" strokeLinecap="round"/>
    <line x1="172" y1="228" x2="175" y2="252" stroke="#92400e" strokeWidth="7" strokeLinecap="round"/>
    {/* Walking staff */}
    <line x1="174" y1="198" x2="192" y2="252" stroke="#7c2d12" strokeWidth="5" strokeLinecap="round"/>
    {/* Family/camel behind */}
    <circle cx="90" cy="200" r="11" fill="#c2855a" opacity="0.8"/>
    <line x1="90" y1="211" x2="90" y2="235" stroke="#c2855a" strokeWidth="6" strokeLinecap="round" opacity="0.8"/>
    <ellipse cx="55" cy="212" rx="18" ry="10" fill="#92400e" opacity="0.7"/>
    <circle cx="46" cy="203" r="8" fill="#92400e" opacity="0.7"/>
    {/* Verse */}
    <rect x="80" y="14" width="400" height="50" rx="12" fill="rgba(255,255,255,0.08)" stroke="#60a5fa" strokeWidth="1.5"/>
    <text x="280" y="32" textAnchor="middle" fontSize="11" fill="#e0f2fe" fontFamily="Georgia,serif" fontStyle="italic">"By faith Abraham obeyed when he was called</text>
    <text x="280" y="48" textAnchor="middle" fontSize="11" fill="#e0f2fe" fontFamily="Georgia,serif" fontStyle="italic">to go out... not knowing where he was going."</text>
    <text x="280" y="62" textAnchor="middle" fontSize="10" fill="#93c5fd" fontFamily="serif">— Hebrews 11:8</text>
    {/* Arrow toward star */}
    <path d="M175,185 Q280,130 405,58" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5"/>
  </svg>
);

// L4-1 Step 2: Three covenant pillars
const SceneThreePillars = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <rect width="560" height="260" fill="#0f172a"/>
    {/* Stars */}
    {STARS_A.map(([x,y,r],i)=>(
      <circle key={i} cx={x*1.75} cy={y*1.8} r={r} fill="#fff" opacity="0.5"/>
    ))}
    {/* Title */}
    <text x="280" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fbbf24" fontFamily="Georgia,serif">THREE COVENANT PROMISES</text>
    {/* Pillar 1 — Land */}
    <rect x="35" y="55" width="145" height="170" rx="12" fill="#14532d" stroke="#34d399" strokeWidth="2.5"/>
    <rect x="35" y="55" width="145" height="45" rx="12" fill="#15803d"/>
    <text x="107" y="84" textAnchor="middle" fontSize="32">🗺</text>
    <text x="107" y="130" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#34d399" fontFamily="Georgia,serif">LAND</text>
    <line x1="55" y1="142" x2="160" y2="142" stroke="#34d399" strokeWidth="1" opacity="0.4"/>
    <text x="107" y="162" textAnchor="middle" fontSize="11" fill="#a7f3d0" fontFamily="serif">A specific place</text>
    <text x="107" y="178" textAnchor="middle" fontSize="11" fill="#a7f3d0" fontFamily="serif">for his people</text>
    <text x="107" y="205" textAnchor="middle" fontSize="10" fill="#6ee7b7" fontFamily="serif" fontStyle="italic">Canaan / Israel</text>
    {/* Pillar 2 — Seed */}
    <rect x="207" y="55" width="146" height="170" rx="12" fill="#451a03" stroke="#fbbf24" strokeWidth="2.5"/>
    <rect x="207" y="55" width="146" height="45" rx="12" fill="#92400e"/>
    <text x="280" y="84" textAnchor="middle" fontSize="32">⭐</text>
    <text x="280" y="130" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fbbf24" fontFamily="Georgia,serif">SEED</text>
    <line x1="226" y1="142" x2="334" y2="142" stroke="#fbbf24" strokeWidth="1" opacity="0.4"/>
    <text x="280" y="162" textAnchor="middle" fontSize="11" fill="#fde68a" fontFamily="serif">Descendants as</text>
    <text x="280" y="178" textAnchor="middle" fontSize="11" fill="#fde68a" fontFamily="serif">numerous as stars</text>
    <text x="280" y="205" textAnchor="middle" fontSize="10" fill="#fbbf24" fontFamily="serif" fontStyle="italic">→ Jesus Christ</text>
    {/* Pillar 3 — Blessing */}
    <rect x="380" y="55" width="145" height="170" rx="12" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="2.5"/>
    <rect x="380" y="55" width="145" height="45" rx="12" fill="#3730a3"/>
    <text x="452" y="84" textAnchor="middle" fontSize="32">🌍</text>
    <text x="452" y="130" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#a78bfa" fontFamily="Georgia,serif">BLESSING</text>
    <line x1="400" y1="142" x2="505" y2="142" stroke="#a78bfa" strokeWidth="1" opacity="0.4"/>
    <text x="452" y="162" textAnchor="middle" fontSize="11" fill="#ddd6fe" fontFamily="serif">All peoples of</text>
    <text x="452" y="178" textAnchor="middle" fontSize="11" fill="#ddd6fe" fontFamily="serif">the earth blessed</text>
    <text x="452" y="205" textAnchor="middle" fontSize="10" fill="#c4b5fd" fontFamily="serif" fontStyle="italic">Great Commission</text>
    {/* Source tag */}
    <text x="280" y="248" textAnchor="middle" fontSize="10" fill="#6b7280" fontFamily="serif" fontStyle="italic">Genesis 12:1–3 · The Abrahamic Covenant</text>
  </svg>
);

// L4-1 Step 3: Covenant ceremony — God alone passes
const SceneCovenant = () => (
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block"}}>
    <defs>
      <linearGradient id="cov_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#020617"/><stop offset="100%" stopColor="#0f172a"/></linearGradient>
      <radialGradient id="cov_glow" cx="50%" cy="60%"><stop offset="0%" stopColor="#f97316" stopOpacity="0.5"/><stop offset="100%" stopColor="#f97316" stopOpacity="0"/></radialGradient>
    </defs>
    <rect width="560" height="260" fill="url(#cov_sky)"/>
    {/* Stars */}
    {STARS_B.slice(0,25).map(([x,y,r],i)=>(
      <circle key={i} cx={x*1.75} cy={y*1.1} r={r} fill="#fff" opacity="0.5"/>
    ))}
    {/* Ground / path */}
    <rect x="0" y="200" width="560" height="60" fill="#1c0a00"/>
    {/* Animal halves — left and right */}
    {/* Left half */}
    <ellipse cx="130" cy="205" rx="55" ry="14" fill="#7c2d12" opacity="0.8"/>
    <path d="M80,195 Q105,185 140,188 Q165,190 175,200 Q160,215 130,218 Q100,218 80,205Z" fill="#9a3412" stroke="#7c2d12" strokeWidth="1.5"/>
    {/* Right half */}
    <ellipse cx="430" cy="205" rx="55" ry="14" fill="#7c2d12" opacity="0.8"/>
    <path d="M380,200 Q395,188 430,186 Q460,185 478,195 Q478,210 455,218 Q425,220 395,215 Q380,210 380,200Z" fill="#9a3412" stroke="#7c2d12" strokeWidth="1.5"/>
    {/* Gap between — the path */}
    <rect x="185" y="188" width="190" height="30" rx="4" fill="#0a0505" stroke="#3c1407" strokeWidth="1"/>
    <text x="280" y="207" textAnchor="middle" fontSize="10" fill="#6b7280" fontFamily="serif">THE PATH BETWEEN</text>
    {/* God passing through — smoking firepot + torch */}
    {/* Firepot */}
    <ellipse cx="248" cy="192" rx="18" ry="10" fill="#1c0a00" stroke="#7c2d12" strokeWidth="2"/>
    <ellipse cx="248" cy="185" rx="14" ry="7" fill="#0a0505" stroke="#6b2d0a" strokeWidth="1.5"/>
    <path d="M242,180 Q244,162 248,148 Q252,162 254,180Z" fill="#9ca3af" opacity="0.35"/>
    <path d="M244,176 Q247,158 248,144 Q249,158 252,176Z" fill="#d1d5db" opacity="0.25"/>
    {/* Torch / flame */}
    <line x1="315" y1="215" x2="315" y2="160" stroke="#c2855a" strokeWidth="4" strokeLinecap="round"/>
    <ellipse cx="315" cy="155" rx="10" ry="16" fill="#f97316" opacity="0.9">
      <animate attributeName="ry" values="16;11;16" dur="0.7s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="315" cy="148" rx="6" ry="10" fill="#fbbf24" opacity="0.95">
      <animate attributeName="ry" values="10;6;10" dur="0.5s" repeatCount="indefinite"/>
    </ellipse>
    {/* Glow from fire */}
    <circle cx="280" cy="190" r="80" fill="url(#cov_glow)"/>
    {/* Abraham SLEEPING on side — not walking through */}
    <circle cx="90" cy="216" r="12" fill="#b45309"/>
    <path d="M78,226 Q90,224 102,226 Q115,235 100,242 Q80,242 70,238 Q68,232 78,226Z" fill="#a16207"/>
    {/* ZZZ */}
    <text x="80" y="205" fontSize="14" fill="#93c5fd" opacity="0.7">z</text>
    <text x="92" y="195" fontSize="11" fill="#93c5fd" opacity="0.5">z</text>
    <text x="101" y="187" fontSize="9" fill="#93c5fd" opacity="0.35">z</text>
    {/* KEY LABEL */}
    <rect x="60" y="15" width="440" height="62" rx="12" fill="rgba(255,255,255,0.06)" stroke="#f97316" strokeWidth="1.5"/>
    <text x="280" y="34" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fbbf24" fontFamily="Georgia,serif">GOD ALONE PASSES THROUGH</text>
    <text x="280" y="52" textAnchor="middle" fontSize="10" fill="#fed7aa" fontFamily="serif" fontStyle="italic">"A smoking firepot with a blazing torch appeared and passed</text>
    <text x="280" y="66" textAnchor="middle" fontSize="10" fill="#fed7aa" fontFamily="serif" fontStyle="italic">between the pieces." — Genesis 15:17</text>
    {/* Implication label */}
    <rect x="350" y="225" width="195" height="28" rx="8" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" strokeWidth="1"/>
    <text x="447" y="243" textAnchor="middle" fontSize="10" fill="#fbbf24" fontFamily="serif">Covenant = GOD'S responsibility</text>
  </svg>
);

// ─── SCENE MAP — lessonId → array of scene components ─────────────────────────
const LESSON_SCENES = {
  "l1-1": [SceneScrollRoom, SceneMosesWriting, SceneTwoSections, SceneFoundation],
  "l1-2": [SceneAncientWorld, SceneBabylonVsGenesis],
  "l2-1": [SceneSixDays, SceneLightSpeaks, SceneImagoDei],
  "l2-2": [SceneLightSpeaks, SceneImagoDei],
  "l2-3": [SceneImagoDei],
  "l3-1": [SceneTemptation, SceneThreeTemptations, SceneAdamSilence, SceneFirstGrace],
  "l3-2": [SceneFirstGrace],
  "l4-1": [SceneUr, SceneAbrahamFaith, SceneThreePillars, SceneCovenant],
  "l4-2": [SceneCovenant],
  "l4-3": [SceneAbrahamFaith],
  "l5-1": [SceneScrollRoom],
  "l5-2": [SceneTwoSections],
  "l5-3": [SceneFoundation],
};

// ─── PRE-COMPUTED STAR FIELDS (for module cards) ──────────────────────────────
const STARS_CREATION = [[20,15,2.5],[50,8,1.5],[80,20,2],[110,10,1.5],[150,6,2],[180,18,1.5],[220,9,2.5],[255,20,1.5],[290,12,2],[300,25,1],[30,40,1],[70,35,1.5],[120,30,1],[200,35,2],[260,40,1.5],[15,55,1],[95,50,1.2],[170,48,0.9],[240,52,1.4],[310,48,1]];
const STARS_COVENANT = [[12,8,1.5],[28,18,2],[45,6,1],[60,22,1.8],[78,12,1.2],[95,28,1.5],[112,5,2],[130,19,1],[148,30,1.8],[165,10,1.5],[182,24,1],[200,14,2],[218,28,1.2],[235,8,1.8],[252,22,1],[270,16,2],[288,30,1.5],[305,10,1.2],[18,38,1],[50,42,1.5],[88,35,1.2],[125,40,1],[160,36,1.8],[198,42,1.2],[232,35,1],[268,44,1.5],[300,38,1],[22,55,1.5],[65,58,1],[108,52,1.2],[148,60,1],[190,55,1.8],[230,58,1],[272,52,1.5],[310,60,1],[35,70,1.2],[80,72,1],[125,68,1.5],[170,74,1],[215,70,1.2],[258,66,1.5],[302,72,1]];

// ─── MODULE CARD ILLUSTRATIONS ────────────────────────────────────────────────
const IllustrationContext = () => (
  <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
    <defs>
      <linearGradient id="ctxSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fde68a"/><stop offset="100%" stopColor="#fb923c"/></linearGradient>
    </defs>
    <rect width="320" height="180" fill="url(#ctxSky)"/>
    <circle cx="265" cy="42" r="24" fill="#fbbf24"/>
    {[0,45,90,135,180,225,270,315].map((a,i)=>{const r=Math.PI*a/180;return<line key={i} x1={265+30*Math.cos(r)} y1={42+30*Math.sin(r)} x2={265+38*Math.cos(r)} y2={42+38*Math.sin(r)} stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>})}
    <ellipse cx="60" cy="158" rx="90" ry="38" fill="#b45309"/>
    <ellipse cx="275" cy="162" rx="80" ry="34" fill="#92400e"/>
    <rect x="0" y="148" width="320" height="32" fill="#d97706"/>
    <rect x="85" y="58" width="148" height="82" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5"/>
    <rect x="83" y="52" width="14" height="94" rx="7" fill="#d97706"/>
    <rect x="223" y="52" width="14" height="94" rx="7" fill="#d97706"/>
    {[74,84,94,104,114,124].map((y,i)=><line key={i} x1="102" y1={y} x2="215" y2={y} stroke="#a16207" strokeWidth="1.2" opacity="0.5"/>)}
    <text x="108" y="88" fontSize="12" fill="#92400e" fontFamily="serif" fontWeight="bold">בְּרֵאשִׁית</text>
    <rect x="26" y="82" width="52" height="68" rx="6" fill="#c2855a" stroke="#92400e" strokeWidth="2"/>
    <rect x="30" y="87" width="44" height="58" rx="4" fill="#d4a373"/>
    {[96,108,120,132,144].map((y,i)=><line key={i} x1="34" y1={y} x2="70" y2={y} stroke="#92400e" strokeWidth="1" opacity="0.5"/>)}
    <line x1="232" y1="58" x2="268" y2="95" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M232,58 Q222,43 242,38 Q252,53 232,58Z" fill="#fef9c3" stroke="#d97706" strokeWidth="1.2"/>
    <ellipse cx="178" cy="150" rx="22" ry="11" fill="#b45309"/>
    <circle cx="165" cy="131" r="7" fill="#b45309"/>
  </svg>
);
const IllustrationCreation = () => (
  <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
    <defs><linearGradient id="creSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0f0c29"/><stop offset="45%" stopColor="#1e3a6e"/><stop offset="100%" stopColor="#2d6a9f"/></linearGradient></defs>
    <rect width="320" height="180" fill="url(#creSky)"/>
    {STARS_CREATION.map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r} fill="#ffffff" opacity="0.75"><animate attributeName="opacity" values="0.3;0.9;0.3" dur={`${1.4+(i%5)*0.4}s`} repeatCount="indefinite"/></circle>)}
    <circle cx="258" cy="34" r="22" fill="#fef9c3"/>
    <circle cx="268" cy="27" r="19" fill="#1e3a6e"/>
    <ellipse cx="160" cy="120" rx="140" ry="45" fill="#f97316" opacity="0.25"/>
    <rect x="0" y="118" width="320" height="62" fill="#1e6b9e"/>
    <path d="M0,126 Q40,120 80,126 Q120,132 160,126 Q200,120 240,126 Q280,132 320,126" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.35"/>
    <ellipse cx="160" cy="120" rx="80" ry="20" fill="#166534"/>
    <ellipse cx="160" cy="117" rx="64" ry="15" fill="#15803d"/>
    {[[130,108],[150,100],[170,102],[188,106]].map(([x,y],i)=><g key={i}><rect x={x-2} y={y+10} width="4" height="14" rx="2" fill="#713f12"/><ellipse cx={x} cy={y} rx={10+i} ry={12+i} fill={i%2?"#15803d":"#166534"}/></g>)}
    <ellipse cx="160" cy="118" rx="22" ry="14" fill="#fef08a" opacity="0.45"/>
    <path d="M195,82 Q200,77 205,82 Q210,77 215,82" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IllustrationFall = () => (
  <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
    <defs><linearGradient id="fallSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#14532d"/><stop offset="100%" stopColor="#365314"/></linearGradient></defs>
    <rect width="320" height="180" fill="url(#fallSky)"/>
    <rect x="0" y="158" width="320" height="25" fill="#15803d"/>
    <rect x="147" y="82" width="26" height="78" rx="5" fill="#7c2d12"/>
    <line x1="160" y1="98" x2="118" y2="68" stroke="#7c2d12" strokeWidth="9" strokeLinecap="round"/>
    <line x1="160" y1="92" x2="202" y2="65" stroke="#7c2d12" strokeWidth="9" strokeLinecap="round"/>
    <ellipse cx="160" cy="50" rx="70" ry="58" fill="#14532d"/>
    <ellipse cx="116" cy="62" rx="42" ry="37" fill="#15803d"/>
    <ellipse cx="204" cy="62" rx="42" ry="37" fill="#166534"/>
    <ellipse cx="160" cy="44" rx="54" ry="44" fill="#16a34a"/>
    {[[148,52],[172,46],[138,66],[182,62],[160,36]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="9" fill="#dc2626"/><circle cx={x-2} cy={y-3} r="3.5" fill="#f87171" opacity="0.6"/></g>)}
    <path d="M218,158 Q240,132 224,112 Q208,92 228,76 Q246,62 234,48" fill="none" stroke="#4ade80" strokeWidth="7" strokeLinecap="round"/>
    <ellipse cx="236" cy="44" rx="11" ry="9" fill="#4ade80"/>
    <circle cx="231" cy="41" r="2.5" fill="#dc2626"/>
    <circle cx="241" cy="41" r="2.5" fill="#dc2626"/>
    <circle cx="90" cy="118" r="11" fill="#b45309"/>
    <path d="M90,129 Q80,142 83,162" stroke="#b45309" strokeWidth="7" strokeLinecap="round" fill="none"/>
    <circle cx="228" cy="120" r="11" fill="#c2855a"/>
    <path d="M228,131 Q218,144 221,164" stroke="#c2855a" strokeWidth="7" strokeLinecap="round" fill="none"/>
  </svg>
);
const IllustrationCovenant = () => (
  <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
    <defs>
      <linearGradient id="covSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#020617"/><stop offset="55%" stopColor="#0f172a"/><stop offset="100%" stopColor="#1e3a5f"/></linearGradient>
      <radialGradient id="fireGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#f97316" stopOpacity="0.7"/><stop offset="100%" stopColor="#f97316" stopOpacity="0"/></radialGradient>
    </defs>
    <rect width="320" height="180" fill="url(#covSky)"/>
    {STARS_COVENANT.map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r} fill="#ffffff" opacity="0.6"><animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${1.2+(i%6)*0.35}s`} repeatCount="indefinite"/></circle>)}
    <circle cx="272" cy="28" r="19" fill="#fef9c3"/>
    <circle cx="281" cy="22" r="16" fill="#0f172a"/>
    <path d="M0,132 Q80,122 160,128 Q240,134 320,126 L320,180 L0,180Z" fill="#b45309"/>
    <polygon points="118,136 204,136 204,88 161,62 118,88" fill="#c2855a"/>
    <polygon points="118,136 161,62 118,88" fill="#92400e"/>
    <path d="M146,136 Q161,113 176,136" fill="#5c3317"/>
    <ellipse cx="256" cy="150" rx="14" ry="5" fill="#44200e" opacity="0.7"/>
    <ellipse cx="256" cy="140" rx="5" ry="9" fill="#ea580c" opacity="0.9"><animate attributeName="cy" values="140;136;140" dur="0.7s" repeatCount="indefinite"/></ellipse>
    <ellipse cx="256" cy="130" rx="3" ry="7" fill="#fbbf24" opacity="0.85"><animate attributeName="cy" values="130;125;130" dur="0.6s" repeatCount="indefinite"/></ellipse>
    <circle cx="256" cy="138" r="22" fill="url(#fireGlow)"/>
    <circle cx="58" cy="128" r="10" fill="#78350f"/>
    <path d="M58,138 Q48,150 51,166" stroke="#78350f" strokeWidth="6" strokeLinecap="round" fill="none"/>
    <path d="M64,144 Q76,132 82,118" stroke="#78350f" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <circle cx="86" cy="114" r="4" fill="#fbbf24" opacity="0.9"><animate attributeName="r" values="3;5;3" dur="1.2s" repeatCount="indefinite"/></circle>
  </svg>
);
const IllustrationPractice = () => (
  <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
    <defs><linearGradient id="pracSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e0533"/><stop offset="100%" stopColor="#4c1d95"/></linearGradient></defs>
    <rect width="320" height="180" fill="url(#pracSky)"/>
    {[20,96,140,180,224,268].filter((_,i)=>i<6).map((x,i)=><g key={i}><rect x={x/2.8-9} y={78} width="16" height="88" rx="2" fill={i%2===0?"#6d28d9":"#7c3aed"}/><rect x={x/2.8-11} y={74} width="20" height="10" rx="3" fill="#8b5cf6"/></g>)}
    <rect x="36" y="62" width="248" height="16" rx="4" fill="#7c3aed"/>
    <rect x="26" y="56" width="268" height="12" rx="5" fill="#8b5cf6"/>
    <polygon points="26,56 160,16 294,56" fill="#6d28d9" opacity="0.9"/>
    <path d="M153,28 L136,74 L153,74 L142,122 L184,62 L165,62 L178,28Z" fill="#fbbf24"/>
    <rect x="138" y="128" width="44" height="8" rx="2.5" fill="#d97706"/>
    <path d="M146,128 Q134,116 136,105 Q145,97 160,99 Q175,97 184,105 Q186,116 174,128Z" fill="#fbbf24"/>
    {[[122,106],[198,106],[110,128],[210,128],[160,94]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="5" fill="#fbbf24"><animate attributeName="r" values="3;7;3" dur={`${0.8+i*0.2}s`} repeatCount="indefinite"/></circle>)}
  </svg>
);

const ILLUSTRATIONS = {m1:IllustrationContext,m2:IllustrationCreation,m3:IllustrationFall,m4:IllustrationCovenant,m5:IllustrationPractice};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const MODULES = [
  {id:"m1",number:1,title:"Context & Background",subtitle:"The world that shaped Genesis",palette:{accent:"#ea580c",text:"#7c2d12",card:"#fff7ed",bg:"#fef3e2",badge:"#fed7aa",badgeText:"#c2410c",shadow:"rgba(234,88,12,0.2)"},tag:"HISTORY & CULTURE",emoji:"🏛️",xpTotal:70,summary:"Discover who wrote Genesis, when, and why — and how the ancient world shaped its radical message.",lessons:[{id:"l1-1",type:"reading",title:"What Is Genesis?",duration:"5 min",xp:20},{id:"l1-2",type:"reading",title:"Historical & Cultural Context",duration:"6 min",xp:20},{id:"l1-3",type:"quiz",title:"Check Your Understanding",duration:"3 min",xp:30}]},
  {id:"m2",number:2,title:"Creation: Genesis 1–2",subtitle:"In the beginning — a close reading",palette:{accent:"#0369a1",text:"#0c4a6e",card:"#f0f9ff",bg:"#e0f2fe",badge:"#bae6fd",badgeText:"#0369a1",shadow:"rgba(3,105,161,0.2)"},tag:"SCRIPTURE STUDY",emoji:"🌿",xpTotal:105,summary:"Explore the six days of creation, the image of God in humanity, and the Garden of Eden.",lessons:[{id:"l2-1",type:"reading",title:"The Six Days: A Literary Masterpiece",duration:"7 min",xp:25},{id:"l2-2",type:"verse_study",title:"Deep Dive: Genesis 1:1–3",duration:"5 min",xp:25},{id:"l2-3",type:"reflection",title:"Reflect & Journal",duration:"5 min",xp:20},{id:"l2-4",type:"quiz",title:"Creation Quiz",duration:"4 min",xp:35}]},
  {id:"m3",number:3,title:"The Fall: Genesis 3",subtitle:"Sin, shame, and the first grace",palette:{accent:"#dc2626",text:"#7f1d1d",card:"#fff5f5",bg:"#fee2e2",badge:"#fecaca",badgeText:"#b91c1c",shadow:"rgba(220,38,38,0.2)"},tag:"THEOLOGY",emoji:"🍎",xpTotal:80,summary:"Unpack the anatomy of temptation, the weight of the Fall, and the hidden promise of redemption.",lessons:[{id:"l3-1",type:"reading",title:"The Anatomy of Temptation",duration:"6 min",xp:25},{id:"l3-2",type:"verse_study",title:"Deep Dive: The Protoevangelium",duration:"4 min",xp:20},{id:"l3-3",type:"quiz",title:"The Fall — Quiz",duration:"4 min",xp:35}]},
  {id:"m4",number:4,title:"Covenant & Promise",subtitle:"Abraham and the birth of faith",palette:{accent:"#4f46e5",text:"#1e1b4b",card:"#f5f3ff",bg:"#ede9fe",badge:"#c4b5fd",badgeText:"#4f46e5",shadow:"rgba(79,70,229,0.2)"},tag:"COVENANT",emoji:"⭐",xpTotal:100,summary:"Follow Abraham's call from Ur, learn the three covenant pillars, and discover why Genesis 15:6 changed history.",lessons:[{id:"l4-1",type:"reading",title:"The Call of Abraham",duration:"7 min",xp:25},{id:"l4-2",type:"verse_study",title:"Deep Dive: Genesis 15:6",duration:"4 min",xp:20},{id:"l4-3",type:"reflection",title:"Reflect: What Is Your 'Ur'?",duration:"5 min",xp:20},{id:"l4-4",type:"quiz",title:"Covenant & Promise — Quiz",duration:"4 min",xp:35}]},
  {id:"m5",number:5,title:"Practice & Mastery",subtitle:"Drill everything you've learned",palette:{accent:"#7c3aed",text:"#2e1065",card:"#faf5ff",bg:"#f3e8ff",badge:"#ddd6fe",badgeText:"#7c3aed",shadow:"rgba(124,58,237,0.2)"},tag:"PRACTICE",emoji:"⚡",xpTotal:130,isPractice:true,summary:"Speed rounds, verse matching, and theology drills — only unlocked after completing all four teaching modules.",lessons:[{id:"l5-1",type:"drill",title:"Verse Identification Drill",duration:"5 min",xp:40},{id:"l5-2",type:"drill",title:"Match Verses to References",duration:"5 min",xp:40},{id:"l5-3",type:"drill",title:"Theology Speed Round",duration:"4 min",xp:50}]},
];

const LESSON_META = {reading:{icon:"📖",label:"Reading",color:"#ea580c"},verse_study:{icon:"🔍",label:"Verse Study",color:"#0369a1"},reflection:{icon:"💭",label:"Reflect",color:"#059669"},quiz:{icon:"✏️",label:"Quiz",color:"#dc2626"},drill:{icon:"⚡",label:"Drill",color:"#7c3aed"}};

const TEACH_CONTENT = {
  "l1-1":{steps:[{title:"The Book of Beginnings",body:"Genesis — from the Greek γένεσις meaning 'origin' — is the foundation of all Scripture. It covers everything from the creation of the universe to the death of Joseph in Egypt.",highlight:null},{title:"Authorship & Date",body:"Traditionally attributed to Moses, written around 1400–1200 BC. The text weaves together oral traditions passed down for generations before Moses committed them to writing.",highlight:"\"Moses wrote this law and gave it to the priests.\" — Deuteronomy 31:9"},{title:"Two Major Sections",body:"Genesis divides into the Primeval History (chapters 1–11: creation through Babel) and the Patriarchal Narratives (chapters 12–50: Abraham through Joseph).",highlight:null},{title:"Why Genesis Matters",body:"Every major Christian doctrine — creation, imago Dei, the fall, sin, covenant, and redemption — has its roots here. Without Genesis, the rest of Scripture has no foundation.",highlight:"Without Genesis, the rest of Scripture is like a building without a foundation."}],terms:[["Primeval History","Gen 1–11: creation through Babel"],["Patriarchal Narratives","Gen 12–50: Abraham to Joseph"],["Imago Dei","Latin: 'Image of God' in humanity"],["Covenant","A sacred binding agreement between God and humanity"]]},
  "l1-2":{steps:[{title:"The Ancient Near East",body:"Genesis was written in conversation with other ancient creation myths — the Babylonian Enuma Elish and the Epic of Gilgamesh. Genesis often directly challenges these stories.",highlight:null},{title:"A Revolutionary Vision",body:"In Babylonian myth, humans were slaves created to serve the gods. Genesis declares something radical: humans are made in God's image, given dignity and dominion. This was extraordinary in the ancient world.",highlight:"\"So God created mankind in his own image.\" — Genesis 1:27"}],terms:[["Enuma Elish","Babylonian creation myth; contrasts with Genesis"],["Ancient Near East","Cultural context of the Bible"],["Oral Tradition","Stories passed verbally before writing"]]},
  "l2-1":{steps:[{title:"Days 1–3: Forming the Realms",body:"Genesis 1 is perfectly structured literary architecture. Days 1–3 create the realms: Day 1 = Light, Day 2 = Sky & Sea, Day 3 = Land & Plants. Days 4–6 then fill each realm respectively.",highlight:null},{title:"God Speaks — Let There Be Light",body:"'And God said, Let there be light.' Creation happens through the power of speech alone — God's word is sufficient to bring existence from nothing. Theologians call this ex nihilo creation.",highlight:"\"And God said, 'Let there be light,' and there was light.\" — Genesis 1:3"},{title:"Humanity as the Pinnacle",body:"On Day 6, the pattern shifts to 'Let us make mankind.' Humanity alone is made in God's image (imago Dei) and given a vocation: to steward creation. This is both dignity and responsibility.",highlight:"\"In the image of God he created them; male and female.\" — Genesis 1:27"}],terms:[["Ex Nihilo","Creation from nothing"],["Tov (טוֹב)","Hebrew 'good' — God's refrain over each day"],["Imago Dei","Image of God in humanity"],["Vocation","Divine calling; humans called to steward creation"]]},
  "l2-2":{steps:[{title:"Deep Dive: Genesis 1:1–3",body:"In the beginning God created the heavens and the earth. The earth was formless and empty (tohu wabohu), and darkness was over the surface of the deep. And God said, \"Let there be light,\" and there was light. These verses establish creation from nothing and the power of God's word.",highlight:"\"In the beginning God created the heavens and the earth.\" — Genesis 1:1"}],terms:[["Tohu wabohu","Formless and empty"],["Ex nihilo","Creation from nothing"]]},
  "l2-3":{steps:[{title:"Reflect & Journal",body:"Take a moment to reflect on the creation account. What does it mean for you that humanity is made in God's image? How might that shape how you see yourself and others?",highlight:"\"So God created mankind in his own image.\" — Genesis 1:27"}],terms:[]},
  "l2-4":{steps:[{title:"Creation Quiz",body:"Test your understanding of the creation account, the six days, and key terms like ex nihilo and imago Dei.",highlight:null}],terms:[]},
  "l3-2":{steps:[{title:"Deep Dive: The Protoevangelium",body:"Genesis 3:15 is often called the protoevangelium — the first gospel. God tells the serpent that the woman's offspring will crush his head while he will strike his heel. This points forward to Christ's victory over sin and death.",highlight:"\"He will crush your head, and you will strike his heel.\" — Genesis 3:15"}],terms:[["Protoevangelium","First gospel promise in Genesis 3:15"]]},
  "l3-3":{steps:[{title:"The Fall — Quiz",body:"Check your understanding of the temptation, the Fall, and the first grace.",highlight:null}],terms:[]},
  "l3-1":{steps:[{title:"The Serpent's Strategy",body:"The serpent's first move: 'Did God really say...?' It doesn't deny God's word — it distorts it. All temptation follows this pattern: distort → deny → offer a counterfeit promise.",highlight:"\"Did God really say, 'You must not eat from any tree'?\" — Genesis 3:1"},{title:"Three Categories of Temptation",body:"Eve saw the fruit was (1) good for food — physical desire; (2) pleasing to the eye — aesthetic appeal; (3) desirable for wisdom — intellectual pride. The same three appear in 1 John 2:16.",highlight:null},{title:"Adam's Silent Failure",body:"Adam was present the entire time (Gen 3:6 says 'who was with her'). His sin wasn't naivety — it was passive silence. He failed to protect, speak, or act. The fall includes abdication.",highlight:null},{title:"The First Grace",body:"After judgment comes quiet grace: God made garments of skin for them. An animal died to cover their shame. This is the first sacrifice in the Bible — the first hint of Christ.",highlight:"He covered their shame — the first quiet act of grace in all of Scripture."}],terms:[["The Fall","Humanity's choice of self-will over God's will"],["Protoevangelium","Gen 3:15 — the first promise of a Savior"],["Shame","Immediate result of sin: hiding from God"],["Grace","God's unmerited favor — first seen in covering their shame"]]},
  "l4-2":{steps:[{title:"Deep Dive: Genesis 15:6",body:"Abram believed the LORD, and he credited it to him as righteousness. This verse is quoted in Romans and Galatians to show that faith — not works — is what God counts as righteousness. Abraham is the father of all who believe.",highlight:"\"Abram believed the LORD, and he credited it to him as righteousness.\" — Genesis 15:6"}],terms:[["Credited","Counted or imputed"],["Righteousness","Right standing before God"]]},
  "l4-3":{steps:[{title:"Reflect: What Is Your 'Ur'?",body:"Abraham left Ur — his home, security, and identity — to follow God's call. What might God be asking you to leave or trust him with? Reflection and journaling help us respond to the Word.",highlight:null}],terms:[]},
  "l4-4":{steps:[{title:"Covenant & Promise — Quiz",body:"Test your understanding of the Abrahamic covenant and key verses.",highlight:null}],terms:[]},
  "l4-1":{steps:[{title:"A New Beginning: Abram's Call",body:"After the chaos of the Fall, Cain & Abel, the Flood, and Babel — God makes a decisive move. He calls one man, Abram, from Ur of the Chaldees, and begins the plan of universal redemption.",highlight:null},{title:"The Shape of the Call",body:"God's call has two sides: a cost (leave country, people, family) and a promise (land, descendants, blessing). Abraham left without knowing where he was going. That IS biblical faith.",highlight:"\"By faith Abraham obeyed when he was called... not knowing where he was going.\" — Heb 11:8"},{title:"Three Covenant Pillars",body:"God promises: (1) Land — a specific place; (2) Seed — descendants as numerous as stars; (3) Blessing — through Abraham for 'all peoples on earth.' Election is always for mission.",highlight:"\"All peoples on earth will be blessed through you.\" — Genesis 12:3"},{title:"God Takes the Oath",body:"In Genesis 15, animals are cut in half. Normally both parties walk between the pieces. But God alone passes through as a smoking firepot and torch. The covenant depends on God's character alone.",highlight:null}],terms:[["Abrahamic Covenant","Promise of land, descendants, and blessing"],["Election","Chosen for purpose and mission, not privilege"],["Faith","Obedience without full sight (Hebrews 11:1)"],["Covenant Ceremony","A binding oath sealed by blood ritual"]]},
  "l5-1":{steps:[{title:"Verse Identification Drill",body:"You've studied all four modules. Now it's time to test it! Identify the correct verse, reference, or term from everything you've learned.",highlight:"\"Your word is a lamp to my feet.\" — Psalm 119:105"}],terms:[]},
  "l5-2":{steps:[{title:"Match Verses to References",body:"Connect the right verse to the right Bible reference. This drill sharpens your Scripture memory — essential for walking in the Word!",highlight:null}],terms:[]},
  "l5-3":{steps:[{title:"Theology Speed Round",body:"Key terms, doctrines, and concepts from Genesis — tested at speed. How well do you really know your Genesis theology?",highlight:null}],terms:[]},
};

const QUESTIONS = {
  "l1-3":[{q:"What does 'Genesis' mean in Greek?",opts:["God's word","Origin or beginning","The covenant","Creation of light"],c:1},{q:"Which two sections divide the book of Genesis?",opts:["The Law and the Prophets","Creation and Redemption","Primeval History and Patriarchal Narratives","Moses's story and Joseph's story"],c:2},{q:"What is 'Imago Dei'?",opts:["The image of creation","The image of God in humanity","A Babylonian god","The first covenant"],c:1},{q:"How does Genesis differ from Babylonian creation myths?",opts:["Humans are slaves to gods","Humans are made in God's image, not slaves","Humans have no purpose","Humans created the gods"],c:1}],
  "l2-4":[{q:"What Hebrew word meaning 'good' does God repeat over each day?",opts:["Shalom","Tov","Ruach","Hesed"],c:1},{q:"What does 'ex nihilo' mean?",opts:["From the earth","Out of nothing","By the word","In the beginning"],c:1},{q:"Days 1–3 formed the realms. What did Days 4–6 do?",opts:["Destroyed the chaos","Formed new realms","Filled the realms","Rested from creation"],c:2},{q:"In Genesis 2, how does God form Adam?",opts:["From light","From water","From dust, breathing life into him","From a word alone"],c:2}],
  "l3-3":[{q:"What is the serpent's first tactic in Genesis 3?",opts:["Direct denial of God","A physical threat","Twisting God's words with a question","Offering a gift"],c:2},{q:"What is the 'Protoevangelium'?",opts:["The first sin","The first act of worship","The first gospel promise hidden in Genesis 3:15","God's covenant with Abraham"],c:2},{q:"What did God make for Adam and Eve after the Fall?",opts:["A new garden","Garments of skin","A list of laws","A city"],c:1},{q:"What three categories of temptation did Eve face?",opts:["Pride, power, and possessions","Physical desire, aesthetic appeal, intellectual pride","Fear, doubt, and anger","Wealth, fame, and pleasure"],c:1}],
  "l4-4":[{q:"What are the three pillars of the Abrahamic Covenant?",opts:["Faith, hope, and love","Land, seed, and blessing","Law, sacrifice, and temple","Creation, fall, and redemption"],c:1},{q:"In Genesis 15's covenant ceremony, who alone passes between the pieces?",opts:["Abraham","Both Abraham and God","God alone","An angel"],c:2},{q:"Genesis 15:6 says Abraham believed God and it was credited to him as what?",opts:["Wisdom","Righteousness","Salvation","Eternal life"],c:1},{q:"Where was Abraham originally called from?",opts:["Egypt","Canaan","Ur of the Chaldees","Babylon"],c:2}],
  "l5-1":[{q:"Which verse? 'In the beginning God created the heavens and the earth.'",opts:["Genesis 1:1","John 1:1","Psalm 33:6","Hebrews 11:3"],c:0},{q:"Complete: 'Abram believed the LORD, and he credited it to him as ___'",opts:["faith","wisdom","righteousness","salvation"],c:2},{q:"Which reference is the Protoevangelium?",opts:["Genesis 1:1","Genesis 3:15","Genesis 12:3","Genesis 15:6"],c:1},{q:"What does 'tohu wabohu' mean?",opts:["Very good","In the beginning","Formless and empty","Dust and ashes"],c:2},{q:"God made garments of ___ for Adam and Eve.",opts:["leaves","light","wool","skin"],c:3}],
  "l5-2":[{q:"Match: 'And God saw that it was good'",opts:["Genesis 1:31","Genesis 3:6","Genesis 12:1","Genesis 15:17"],c:0},{q:"Match: 'I will make you into a great nation'",opts:["Genesis 1:1","Genesis 3:15","Genesis 12:2","Genesis 22:18"],c:2},{q:"Match: 'He will crush your head, you will strike his heel'",opts:["Genesis 3:15","Genesis 12:3","Genesis 15:6","Genesis 1:27"],c:0},{q:"Match: 'So God created mankind in his own image'",opts:["Genesis 1:3","Genesis 1:27","Genesis 2:7","Genesis 3:1"],c:1}],
  "l5-3":[{q:"What does 'Imago Dei' mean?",opts:["God is love","Image of God","In the beginning","Creator God"],c:1},{q:"What is 'ex nihilo' creation?",opts:["Created from water","Created from chaos","Created from nothing","Created from light"],c:2},{q:"The Abrahamic covenant's ultimate fulfillment points to:",opts:["Moses","David","Jesus Christ","The Church"],c:2},{q:"What is the 'Primeval History' of Genesis?",opts:["Chapters 1–5","Chapters 1–11","Chapters 12–25","Chapters 1–3"],c:1},{q:"In Genesis 15, the covenant ceremony symbolized:",opts:["Prayer","Death if the covenant was broken","A wedding","Baptism"],c:1}],
};

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
const DEFAULT_COMPLETED = ["l1-1","l1-2","l1-3","l2-1"];
const DEFAULT_XP = 240;
const DEFAULT_STREAK = 4;

export default function Biblingo({
  initialCompleted,
  initialXp,
  initialStreak,
  onProgressChange,
} = {}) {
  const [course, setCourse] = useState("genesis");
  const [screen, setScreen] = useState("home");
  const [activeMod, setActiveMod] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [completed, setCompleted] = useState(() => {
    const arr = Array.isArray(initialCompleted) ? initialCompleted : DEFAULT_COMPLETED;
    return new Set(arr);
  });
  const [xp, setXp] = useState(() => (typeof initialXp === "number" && initialXp >= 0 ? initialXp : DEFAULT_XP));
  const [streak, setStreak] = useState(() => (typeof initialStreak === "number" && initialStreak >= 0 ? initialStreak : DEFAULT_STREAK));

  useEffect(() => {
    if (typeof onProgressChange === "function") {
      onProgressChange(Array.from(completed), xp, streak);
    }
  }, [completed, xp, streak, onProgressChange]);

  const modules = course === "bth" ? BTH_MODULES : MODULES;
  const completedInCourse = modules.flatMap(m=>m.lessons).filter(l=>completed.has(l.id)).length;
  const totalLessons = modules.flatMap(m=>m.lessons).length;
  const courseProgress = totalLessons > 0 ? Math.round((completedInCourse/totalLessons)*100) : 0;
  const isModUnlocked = (idx)=>idx===0||modules[idx-1].lessons.every(l=>completed.has(l.id));
  const isLessonUnlocked = (modIdx,lessonIdx)=>{if(!isModUnlocked(modIdx))return false;if(lessonIdx===0)return true;return completed.has(modules[modIdx].lessons[lessonIdx-1].id);};
  const handleComplete=(lessonId,earnedXP)=>{setCompleted(prev=>new Set([...prev,lessonId]));setXp(prev=>prev+earnedXP);setScreen("module");};
  const switchCourse=(next)=>{setCourse(next);setScreen("home");setActiveMod(null);setActiveLesson(null);};

  return (
    <div style={{fontFamily:"'Nunito','Segoe UI',sans-serif",minHeight:"100vh",background:"#faf7f2",color:"#1c0f00"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-thumb{background:#d4a06a;border-radius:3px;}
        .card-hover{transition:transform 0.22s cubic-bezier(.34,1.56,.64,1),box-shadow 0.22s ease;cursor:pointer;}
        .card-hover:hover{transform:translateY(-5px) scale(1.01);}
        .row-hover{transition:transform 0.15s ease,background 0.15s ease;cursor:pointer;}
        .row-hover:hover{transform:translateX(5px);}
        .pop{animation:pop 0.5s cubic-bezier(.34,1.56,.64,1) both;}
        @keyframes pop{from{opacity:0;transform:scale(0.88) translateY(16px);}to{opacity:1;transform:scale(1) translateY(0);}}
        .fade{animation:fadeAnim 0.35s ease both;}
        @keyframes fadeAnim{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
        .float{animation:floatAnim 3.5s ease-in-out infinite;}
        @keyframes floatAnim{0%,100%{transform:translateY(0);}50%{transform:translateY(-9px);}}
        .shake{animation:shakeAnim 0.4s ease;}
        @keyframes shakeAnim{0%,100%{transform:translateX(0);}25%{transform:translateX(-9px);}75%{transform:translateX(9px);}}
        .gold-btn{background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#431407;border:none;border-radius:16px;padding:15px 28px;font-family:'Fredoka One',cursive;font-size:18px;cursor:pointer;box-shadow:0 4px 0 #d97706,0 6px 20px rgba(245,158,11,0.35);transition:all 0.12s;letter-spacing:0.02em;width:100%;}
        .gold-btn:hover{transform:translateY(-2px);box-shadow:0 6px 0 #d97706,0 10px 28px rgba(245,158,11,0.4);}
        .gold-btn:active{transform:translateY(2px);box-shadow:0 2px 0 #d97706;}
        .gold-btn:disabled{opacity:0.45;cursor:not-allowed;transform:none;box-shadow:0 4px 0 #d97706;}
        .ghost-btn{background:#fff;border:2.5px solid #e5e0d8;border-radius:14px;padding:13px 24px;font-family:'Fredoka One',cursive;font-size:16px;color:#78716c;cursor:pointer;transition:all 0.15s;width:100%;}
        .ghost-btn:hover{border-color:#f59e0b;color:#d97706;}
        .opt{width:100%;text-align:left;background:#fff;border:3px solid #e5e0d8;border-radius:16px;padding:14px 18px;color:#1c0f00;font-family:'Nunito',sans-serif;font-size:16px;font-weight:700;cursor:pointer;transition:all 0.15s;margin-bottom:10px;display:flex;align-items:center;gap:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06);}
        .opt:hover:not(:disabled){border-color:#f59e0b;background:#fffdf5;transform:translateX(3px);}
        .opt-c{border-color:#22c55e!important;background:#f0fdf4!important;}
        .opt-w{border-color:#ef4444!important;background:#fef2f2!important;}
        .opt-s{border-color:#f59e0b;background:#fffbeb;}
      `}</style>
      {screen==="home"&&<HomeScreen course={course} switchCourse={switchCourse} modules={modules} xp={xp} streak={streak} progress={courseProgress} completed={completed} isModUnlocked={isModUnlocked} onSelect={mod=>{setActiveMod(mod);setScreen("module");}}/>}
      {screen==="module"&&activeMod&&<ModuleScreen mod={activeMod} completed={completed} isLessonUnlocked={isLessonUnlocked} MODULES={modules} onBack={()=>setScreen("home")} onLesson={lesson=>{setActiveLesson(lesson);setScreen("lesson");}}/>}
      {screen==="lesson"&&activeLesson&&activeMod&&<LessonScreen course={course} lesson={activeLesson} mod={activeMod} onBack={()=>setScreen("module")} onComplete={(xp)=>handleComplete(activeLesson.id,xp)}/>}
    </div>
  );
}

function HomeScreen({course,switchCourse,modules,xp,streak,progress,completed,isModUnlocked,onSelect}){
  const courseName = course === "bth" ? "Bachelor of Theology" : "Genesis: Foundations of Faith";
  const courseSub = course === "bth" ? "3 years · 11 modules · 33 lessons" : "5 modules · 17 lessons";
  return(
    <div style={{maxWidth:680,margin:"0 auto",padding:"0 16px 60px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"22px 0 10px"}}>
        <div><div style={{fontFamily:"'Fredoka One',cursive",fontSize:34,color:"#d97706",lineHeight:1}}>Biblingo</div><div style={{fontSize:13,color:"#a8845a",fontWeight:700,marginTop:2}}>Walk in the Word, daily 📖</div></div>
        <div style={{display:"flex",gap:10}}>
          <div style={{display:"flex",alignItems:"center",gap:5,background:"#fff7ed",border:"2px solid #fed7aa",padding:"6px 14px",borderRadius:20}}><span style={{fontSize:20}}>🔥</span><span style={{fontFamily:"'Fredoka One',cursive",fontSize:18,color:"#ea580c"}}>{streak}</span></div>
          <div style={{display:"flex",alignItems:"center",gap:5,background:"#fffbeb",border:"2px solid #fde68a",padding:"6px 14px",borderRadius:20}}><span style={{fontSize:20}}>⭐</span><span style={{fontFamily:"'Fredoka One',cursive",fontSize:18,color:"#d97706"}}>{xp}</span></div>
        </div>
      </div>
      <div style={{display:"flex",gap:10,marginBottom:14}}>
        <button onClick={()=>switchCourse("genesis")} style={{flex:1,padding:"12px 16px",borderRadius:16,border:course==="genesis"?"3px solid #d97706":"2px solid #e5e0d8",background:course==="genesis"?"#fff7ed":"#fff",fontFamily:"'Fredoka One',cursive",fontSize:14,color:course==="genesis"?"#b45309":"#78716c",cursor:"pointer",boxShadow:course==="genesis"?"0 4px 12px rgba(217,119,6,0.25)":"none"}}>Genesis</button>
        <button onClick={()=>switchCourse("bth")} style={{flex:1,padding:"12px 16px",borderRadius:16,border:course==="bth"?"3px solid #0d9488":"2px solid #e5e0d8",background:course==="bth"?"#f0fdfa":"#fff",fontFamily:"'Fredoka One',cursive",fontSize:14,color:course==="bth"?"#0f766e":"#78716c",cursor:"pointer",boxShadow:course==="bth"?"0 4px 12px rgba(13,148,136,0.25)":"none"}}>BTh</button>
      </div>
      <div className="pop" style={{marginTop:0,marginBottom:26,background:course==="bth"?"linear-gradient(135deg,#0d9488,#059669)":"linear-gradient(135deg,#f97316,#dc2626)",borderRadius:24,padding:"22px 24px 20px",boxShadow:course==="bth"?"0 8px 28px rgba(5,150,105,0.3),0 3px 0 rgba(4,120,87,0.5)":"0 8px 28px rgba(220,38,38,0.3),0 3px 0 rgba(153,27,27,0.5)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",right:-24,top:-24,fontSize:110,opacity:0.1,transform:"rotate(12deg)"}}>✝</div>
        <div style={{fontSize:11,fontWeight:900,color:"rgba(255,255,255,0.7)",letterSpacing:"0.18em",marginBottom:4}}>ACTIVE COURSE</div>
        <div style={{fontFamily:"'Fredoka One',cursive",fontSize:24,color:"#fff",marginBottom:2}}>{courseName}</div>
        <div style={{fontSize:14,color:"rgba(255,255,255,0.8)",marginBottom:14}}>{courseSub} · {progress}% complete</div>
        <div style={{background:"rgba(255,255,255,0.25)",borderRadius:10,height:12,overflow:"hidden"}}><div style={{height:"100%",width:`${progress}%`,background:"#fff",borderRadius:10,transition:"width 0.6s ease"}}/></div>
      </div>
      <div style={{fontSize:12,fontWeight:900,color:"#a8845a",letterSpacing:"0.18em",marginBottom:16}}>{course==="bth"?"MODULES (BY YEAR)" : "SCRIPTURE MODULES"}</div>
      {modules.map((mod,idx)=>{
        const unlocked=isModUnlocked(idx);const done=mod.lessons.filter(l=>completed.has(l.id)).length;const pct=Math.round((done/mod.lessons.length)*100);const isComplete=done===mod.lessons.length;const Illus=ILLUSTRATIONS[mod.id]||ILLUSTRATIONS.m1;
        return(
          <div key={mod.id} className={unlocked?"card-hover":""} onClick={()=>unlocked&&onSelect(mod)} style={{marginBottom:22,borderRadius:24,overflow:"hidden",opacity:unlocked?1:0.5,boxShadow:unlocked?`0 6px 0 ${mod.palette.shadow.replace("0.2","0.5")},0 8px 28px ${mod.palette.shadow}`:"0 2px 8px rgba(0,0,0,0.08)",border:`2.5px solid ${unlocked?mod.palette.accent+"44":"#e5e0d8"}`,cursor:unlocked?"pointer":"not-allowed",animation:`pop ${0.3+idx*0.07}s cubic-bezier(.34,1.56,.64,1) both`,animationDelay:`${idx*0.06}s`}}>
            <div style={{height:160,position:"relative",background:mod.palette.bg}}>
              <Illus/>
              <div style={{position:"absolute",top:12,left:14,background:mod.palette.accent,color:"#fff",fontFamily:"'Fredoka One',cursive",fontSize:13,padding:"4px 12px",borderRadius:20,boxShadow:"0 2px 8px rgba(0,0,0,0.25)"}}>{mod.emoji} {mod.year ? `Year ${mod.year} · ` : ""}Module {mod.number}</div>
              <div style={{position:"absolute",top:12,right:14,background:"rgba(255,255,255,0.93)",color:mod.palette.accent,fontSize:11,fontWeight:900,letterSpacing:"0.12em",padding:"4px 11px",borderRadius:20,border:`2px solid ${mod.palette.accent}55`}}>{mod.tag}</div>
              {!unlocked&&<div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8}}><div style={{fontSize:44}}>🔒</div><div style={{color:"#fff",fontFamily:"'Fredoka One',cursive",fontSize:16,textAlign:"center",padding:"0 20px"}}>Complete Module {mod.number-1} first</div></div>}
              {isComplete&&unlocked&&<div style={{position:"absolute",bottom:0,left:0,right:0,background:"rgba(34,197,94,0.92)",padding:"7px 16px",display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:18}}>✅</span><span style={{color:"#fff",fontFamily:"'Fredoka One',cursive",fontSize:15}}>Module Complete!</span></div>}
            </div>
            <div style={{background:mod.palette.card,padding:"16px 20px 20px"}}>
              <div style={{fontFamily:"'Fredoka One',cursive",fontSize:22,color:mod.palette.text,marginBottom:2}}>{mod.title}</div>
              <div style={{fontSize:14,color:mod.palette.accent,fontWeight:700,marginBottom:8,fontStyle:"italic"}}>{mod.subtitle}</div>
              <div style={{fontSize:14,color:"#78716c",lineHeight:1.55,marginBottom:14}}>{mod.summary}</div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:unlocked?14:0}}>
                <span style={{background:mod.palette.badge,color:mod.palette.badgeText,fontSize:12,fontWeight:800,padding:"4px 11px",borderRadius:12}}>📚 {mod.lessons.length} lessons</span>
                <span style={{background:mod.palette.badge,color:mod.palette.badgeText,fontSize:12,fontWeight:800,padding:"4px 11px",borderRadius:12}}>⭐ {mod.xpTotal} XP</span>
                {mod.isPractice&&<span style={{background:"#f3e8ff",color:"#7c3aed",fontSize:12,fontWeight:800,padding:"4px 11px",borderRadius:12}}>⚡ Unlocks after all modules</span>}
              </div>
              {unlocked&&<div><div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontSize:13,fontWeight:800,color:mod.palette.accent}}>{done}/{mod.lessons.length} done</span><span style={{fontSize:13,fontWeight:800,color:mod.palette.accent}}>{pct}%</span></div><div style={{height:11,background:`${mod.palette.accent}22`,borderRadius:8,overflow:"hidden"}}><div style={{height:"100%",width:`${pct}%`,background:mod.palette.accent,borderRadius:8,transition:"width 0.6s ease"}}/></div><div style={{marginTop:12,fontFamily:"'Fredoka One',cursive",fontSize:15,color:mod.palette.accent}}>{isComplete?"Review Module →":done>0?"Continue →":"Start Learning →"}</div></div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ModuleScreen({mod,completed,isLessonUnlocked,MODULES,onBack,onLesson}){
  const modIdx=MODULES.findIndex(m=>m.id===mod.id);const done=mod.lessons.filter(l=>completed.has(l.id)).length;const pct=Math.round((done/mod.lessons.length)*100);const Illus=ILLUSTRATIONS[mod.id];
  return(
    <div style={{maxWidth:680,margin:"0 auto",padding:"0 16px 60px"}}>
      <button onClick={onBack} style={{background:"none",border:"none",color:mod.palette.accent,cursor:"pointer",fontFamily:"'Fredoka One',cursive",fontSize:17,padding:"20px 0 0",display:"flex",alignItems:"center",gap:6}}>‹ All Modules</button>
      <div className="pop" style={{marginTop:16,marginBottom:24,borderRadius:24,overflow:"hidden",boxShadow:`0 6px 0 ${mod.palette.shadow.replace("0.2","0.4")},0 8px 28px ${mod.palette.shadow}`,border:`2.5px solid ${mod.palette.accent}44`}}>
        <div style={{height:175,background:mod.palette.bg,position:"relative"}}><Illus/><div style={{position:"absolute",top:12,left:14,background:mod.palette.accent,color:"#fff",fontFamily:"'Fredoka One',cursive",fontSize:13,padding:"4px 12px",borderRadius:20}}>{mod.emoji} {mod.year ? `Year ${mod.year} · ` : ""}Module {mod.number} · {mod.tag}</div></div>
        <div style={{background:mod.palette.card,padding:"18px 22px 20px"}}>
          <div style={{fontFamily:"'Fredoka One',cursive",fontSize:26,color:mod.palette.text,marginBottom:2}}>{mod.title}</div>
          <div style={{fontSize:14,color:mod.palette.accent,fontWeight:700,marginBottom:10,fontStyle:"italic"}}>{mod.subtitle}</div>
          <div style={{fontSize:14,color:"#78716c",lineHeight:1.55,marginBottom:16}}>{mod.summary}</div>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontSize:13,fontWeight:800,color:mod.palette.accent}}>{done}/{mod.lessons.length} lessons complete</span><span style={{fontSize:13,fontWeight:800,color:mod.palette.accent}}>{pct}%</span></div>
          <div style={{height:12,background:`${mod.palette.accent}22`,borderRadius:8,overflow:"hidden"}}><div style={{height:"100%",width:`${pct}%`,background:mod.palette.accent,borderRadius:8,transition:"width 0.5s"}}/></div>
        </div>
      </div>
      <div style={{fontSize:12,fontWeight:900,color:"#a8845a",letterSpacing:"0.18em",marginBottom:14}}>LESSONS</div>
      {mod.lessons.map((lesson,idx)=>{
        const unlocked=isLessonUnlocked(modIdx,idx);const isDone=completed.has(lesson.id);const isCurrent=unlocked&&!isDone;const meta=LESSON_META[lesson.type];
        return(
          <div key={lesson.id} className={unlocked?"row-hover":""} onClick={()=>unlocked&&onLesson(lesson)} style={{marginBottom:10,padding:"14px 18px",borderRadius:18,display:"flex",alignItems:"center",gap:14,background:isDone?"#f0fdf4":isCurrent?"#fff":mod.palette.bg,border:`2.5px solid ${isDone?"#86efac":isCurrent?mod.palette.accent+"88":"#e5e0d8"}`,opacity:unlocked?1:0.45,cursor:unlocked?"pointer":"not-allowed",boxShadow:isCurrent?`0 4px 16px ${mod.palette.shadow}`:"0 2px 6px rgba(0,0,0,0.05)",animation:`pop ${0.2+idx*0.08}s cubic-bezier(.34,1.56,.64,1) both`,animationDelay:`${0.1+idx*0.07}s`}}>
            <div style={{width:50,height:50,borderRadius:15,background:isDone?"#dcfce7":isCurrent?`${meta.color}18`:"#f5f0e8",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,minWidth:50,border:`2.5px solid ${isDone?"#86efac":isCurrent?meta.color+"55":"#e5e0d8"}`}}>{isDone?"✅":unlocked?meta.icon:"🔒"}</div>
            <div style={{flex:1}}><div style={{fontWeight:800,fontSize:16,color:isDone?"#15803d":isCurrent?mod.palette.text:"#a8845a",marginBottom:4}}>{lesson.title}</div><div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}><span style={{fontSize:12,fontWeight:800,color:meta.color,background:`${meta.color}15`,padding:"2px 9px",borderRadius:8}}>{meta.icon} {meta.label}</span><span style={{fontSize:12,color:"#a8845a",fontWeight:600}}>⏱ {lesson.duration}</span><span style={{fontSize:12,fontWeight:800,color:"#d97706"}}>+{lesson.xp} XP</span></div></div>
            {isCurrent&&<div style={{background:mod.palette.accent,color:"#fff",fontFamily:"'Fredoka One',cursive",fontSize:14,padding:"7px 16px",borderRadius:12,whiteSpace:"nowrap",boxShadow:`0 3px 0 ${mod.palette.shadow.replace("0.2","0.5")}`}}>Start →</div>}
            {isDone&&<div style={{color:"#22c55e",fontSize:24}}>✓</div>}
          </div>
        );
      })}
    </div>
  );
}

function LessonScreen({course,lesson,mod,onBack,onComplete}){
  const [phase,setPhase]=useState("teach");
  const [step,setStep]=useState(0);
  const [qIdx,setQIdx]=useState(0);
  const [sel,setSel]=useState(null);
  const [answered,setAnswered]=useState(false);
  const [isCorrect,setIsCorrect]=useState(false);
  const [score,setScore]=useState(0);
  const [hearts,setHearts]=useState(3);
  const [shake,setShake]=useState(false);

  const isBth = course === "bth";
  const tc = isBth ? getBthTeachContent(lesson.id) : (TEACH_CONTENT[lesson.id]||TEACH_CONTENT["l5-1"]);
  const qs = isBth ? getBthQuestions(lesson.id) : (QUESTIONS[lesson.id]||[]);
  const isQuizType=lesson.type==="quiz"||lesson.type==="drill";
  const q=qs[qIdx];
  const scenes=isBth ? [SceneScrollRoom] : (LESSON_SCENES[lesson.id]||[SceneScrollRoom]);

  const handleAnswer=(i)=>{if(answered)return;setSel(i);setAnswered(true);const correct=i===q.c;setIsCorrect(correct);if(correct)setScore(s=>s+1);else{setHearts(h=>Math.max(0,h-1));setShake(true);setTimeout(()=>setShake(false),500);}};
  const nextQ=()=>{if(qIdx+1>=qs.length){setPhase("done");}else{setQIdx(i=>i+1);setSel(null);setAnswered(false);setIsCorrect(false);}};
  const earnedXP=phase==="done"&&qs.length>0?Math.round((score/qs.length)*lesson.xp):lesson.xp;

  if(phase==="done") return(
    <div style={{maxWidth:480,margin:"0 auto",padding:"40px 20px",textAlign:"center"}}>
      <div className="float" style={{fontSize:80,marginBottom:10}}>{qs.length>0?(score/qs.length>=0.9?"🏆":score/qs.length>=0.7?"🌟":"📖"):"✅"}</div>
      <div style={{fontFamily:"'Fredoka One',cursive",fontSize:34,color:mod.palette.accent,marginBottom:6}}>{qs.length>0?(score/qs.length>=0.9?"Outstanding!":score/qs.length>=0.7?"Well done!":"Keep going!"):"Lesson Complete!"}</div>
      <div style={{fontStyle:"italic",fontSize:15,color:"#78716c",marginBottom:32,lineHeight:1.7}}>"Your word is a lamp to my feet and a light to my path." — Psalm 119:105</div>
      {qs.length>0&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:28}}>{[["✏️","Score",`${score}/${qs.length}`],["📊","%",`${Math.round((score/qs.length)*100)}%`],["⭐","XP Earned",`+${earnedXP}`],["❤️","Hearts",hearts+"♥"]].map(([ic,l,v])=>(<div key={l} style={{background:mod.palette.card,border:`2.5px solid ${mod.palette.accent}44`,borderRadius:18,padding:"16px 10px",textAlign:"center"}}><div style={{fontSize:26,marginBottom:2}}>{ic}</div><div style={{fontFamily:"'Fredoka One',cursive",fontSize:22,color:mod.palette.accent}}>{v}</div><div style={{fontSize:12,color:"#a8845a",fontWeight:700}}>{l}</div></div>))}</div>}
      {qs.length===0&&<div style={{background:mod.palette.card,border:`2.5px solid ${mod.palette.accent}44`,borderRadius:20,padding:"20px",marginBottom:28,display:"inline-block"}}><div style={{fontFamily:"'Fredoka One',cursive",fontSize:44,color:mod.palette.accent}}>+{earnedXP} XP</div></div>}
      <button className="gold-btn" onClick={()=>onComplete(earnedXP)}>Continue →</button>
    </div>
  );

  return(
    <div style={{maxWidth:680,margin:"0 auto",padding:"0 16px 60px"}}>
      <div style={{display:"flex",alignItems:"center",gap:14,padding:"18px 0 20px",borderBottom:`2px solid ${mod.palette.accent}22`,marginBottom:20}}>
        <button onClick={onBack} style={{background:"none",border:"none",color:mod.palette.accent,cursor:"pointer",fontFamily:"'Fredoka One',cursive",fontSize:22,lineHeight:1}}>‹</button>
        <div style={{flex:1}}><div style={{fontSize:11,fontWeight:900,color:mod.palette.accent,letterSpacing:"0.15em"}}>MODULE {mod.number} · {mod.title.toUpperCase()}</div><div style={{fontFamily:"'Fredoka One',cursive",fontSize:17,color:"#1c0f00"}}>{lesson.title}</div></div>
        <div style={{background:mod.palette.badge,border:`2px solid ${mod.palette.accent}55`,borderRadius:20,padding:"5px 14px",display:"flex",alignItems:"center",gap:5}}><span>⭐</span><span style={{fontFamily:"'Fredoka One',cursive",fontSize:15,color:mod.palette.badgeText}}>+{lesson.xp}</span></div>
      </div>

      {phase==="teach"&&(
        <div className="fade">
          {/* Step progress */}
          <div style={{display:"flex",gap:6,marginBottom:16,justifyContent:"center"}}>
            {tc.steps.map((_,i)=><div key={i} onClick={()=>setStep(i)} style={{height:10,width:i===step?32:10,borderRadius:8,background:i<=step?mod.palette.accent:`${mod.palette.accent}25`,transition:"all 0.3s ease",cursor:"pointer"}}/>)}
          </div>

          {/* LARGE LANDSCAPE ILLUSTRATION */}
          <div className="fade" key={step} style={{borderRadius:20,overflow:"hidden",marginBottom:18,boxShadow:`0 6px 28px ${mod.palette.shadow}`,border:`2.5px solid ${mod.palette.accent}33`}}>
            {scenes[Math.min(step,scenes.length-1)]&&(() => { const Scene=scenes[Math.min(step,scenes.length-1)]; return <Scene/>; })()}
          </div>

          {/* Text below illustration */}
          <div style={{background:mod.palette.card,border:`2.5px solid ${mod.palette.accent}33`,borderRadius:20,padding:"20px 22px",marginBottom:16,boxShadow:`0 4px 16px ${mod.palette.shadow}`}}>
            <div style={{fontFamily:"'Fredoka One',cursive",fontSize:20,color:mod.palette.text,marginBottom:10}}>{tc.steps[step].title}</div>
            <div style={{fontSize:15,lineHeight:1.75,color:"#44403c",marginBottom:tc.steps[step].highlight?14:0}}>{tc.steps[step].body}</div>
            {tc.steps[step].highlight&&<div style={{background:`${mod.palette.accent}12`,borderLeft:`5px solid ${mod.palette.accent}`,borderRadius:"0 12px 12px 0",padding:"12px 16px",fontStyle:"italic",fontSize:14,color:mod.palette.text,lineHeight:1.7}}>{tc.steps[step].highlight}</div>}
          </div>

          {/* Key terms on last step */}
          {tc.terms.length>0&&step===tc.steps.length-1&&(
            <div className="fade" style={{background:"#fffbeb",border:"2.5px solid #fde68a",borderRadius:20,padding:"16px 18px",marginBottom:16}}>
              <div style={{fontFamily:"'Fredoka One',cursive",fontSize:17,color:"#d97706",marginBottom:10}}>📚 Key Terms</div>
              {tc.terms.map(([t,d],i)=><div key={i} style={{display:"flex",gap:12,marginBottom:8,padding:"9px 12px",background:"#fff",borderRadius:12,border:"1.5px solid #fde68a"}}><div style={{fontWeight:900,fontSize:14,color:"#d97706",minWidth:150}}>{t}</div><div style={{fontSize:14,color:"#78350f"}}>{d}</div></div>)}
            </div>
          )}

          <div style={{display:"flex",gap:10}}>
            {step>0&&<button className="ghost-btn" onClick={()=>setStep(s=>s-1)}>← Back</button>}
            {step<tc.steps.length-1?<button className="gold-btn" onClick={()=>setStep(s=>s+1)}>Next →</button>:isQuizType?<button className="gold-btn" onClick={()=>setPhase("quiz")}>Take the Quiz ✏️</button>:<button className="gold-btn" onClick={()=>setPhase("done")}>Complete Lesson ✓</button>}
          </div>
        </div>
      )}

      {phase==="quiz"&&q&&(
        <div className={shake?"shake":"fade"}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:22}}>
            <div style={{flex:1,height:13,background:`${mod.palette.accent}20`,borderRadius:8,overflow:"hidden"}}><div style={{height:"100%",width:`${(qIdx/qs.length)*100}%`,background:mod.palette.accent,borderRadius:8,transition:"width 0.4s"}}/></div>
            <div style={{display:"flex",gap:3}}>{[0,1,2].map(i=><span key={i} style={{fontSize:20,opacity:i<hearts?1:0.2}}>❤️</span>)}</div>
          </div>
          <div style={{fontFamily:"'Fredoka One',cursive",fontSize:13,color:mod.palette.accent,letterSpacing:"0.12em",marginBottom:10}}>QUESTION {qIdx+1} OF {qs.length}</div>
          <div style={{fontWeight:900,fontSize:20,color:"#1c0f00",marginBottom:22,lineHeight:1.4}}>{q.q}</div>
          {q.opts.map((opt,i)=>(
            <button key={i} disabled={answered} className={`opt ${answered&&i===q.c?"opt-c":""} ${answered&&sel===i&&i!==q.c?"opt-w":""} ${!answered&&sel===i?"opt-s":""}`} onClick={()=>handleAnswer(i)}>
              <div style={{width:34,height:34,borderRadius:11,background:answered&&i===q.c?"#dcfce7":answered&&sel===i?"#fee2e2":"#f5f0e8",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Fredoka One',cursive",fontSize:14,color:answered&&i===q.c?"#15803d":answered&&sel===i?"#dc2626":"#a8845a",flexShrink:0,border:`2px solid ${answered&&i===q.c?"#86efac":answered&&sel===i?"#fca5a5":"#e5e0d8"}`}}>
                {answered&&i===q.c?"✓":answered&&sel===i?"✕":String.fromCharCode(65+i)}
              </div>
              {opt}
            </button>
          ))}
          {answered&&<div className="fade" style={{marginTop:2,marginBottom:18,padding:"14px 18px",background:isCorrect?"#f0fdf4":"#fef2f2",border:`2.5px solid ${isCorrect?"#86efac":"#fca5a5"}`,borderRadius:16}}><div style={{fontFamily:"'Fredoka One',cursive",fontSize:20,color:isCorrect?"#15803d":"#dc2626",marginBottom:isCorrect?0:5}}>{isCorrect?"🎉 Correct!":"❌ Not quite..."}</div>{!isCorrect&&<div style={{fontSize:14,color:"#5a1a1a",fontWeight:700}}>Answer: <span style={{color:"#15803d"}}>{q.opts[q.c]}</span></div>}</div>}
          {answered&&<button className="gold-btn" onClick={nextQ}>{qIdx+1>=qs.length?"See Results 🏆":"Next Question →"}</button>}
        </div>
      )}
    </div>
  );
}
