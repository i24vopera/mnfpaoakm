// ---- CHALLENGES DATA ----
const CHALLENGES = {
  beginner: [
    {
      id: 1, title: "Barva nadpisu",
      desc: "Nastav nadpisu <strong>červenou</strong> barvu textu.",
      html: "<h1>Ahoj světe!</h1>",
      cssStarter: "/* Napiš CSS pro změnu barvy */\n\n",
      checks: [{ s: "h1", p: "color", v: "red" }]
    },
    {
      id: 2, title: "Barva pozadí",
      desc: "Nastav <code>&lt;div&gt;</code> světle modré pozadí (<code>lightblue</code>).",
      html: "<div>Můj první div</div>",
      cssStarter: "/* Napiš CSS pro pozadí */\n\n",
      checks: [{ s: "div", p: "backgroundColor", v: "lightblue" }]
    },
    {
      id: 3, title: "Velikost písma",
      desc: "Nastav odstavci velikost písma <strong>24px</strong>.",
      html: "<p>Toto je odstavec.</p>",
      cssStarter: "/* Sem napiš CSS */\n\n",
      checks: [{ s: "p", p: "fontSize", v: "24px" }]
    },
    {
      id: 4, title: "Okraje",
      desc: "Přidej <code>&lt;div&gt;</code> vnitřní okraj <strong>20px</strong> a vnější okraj <strong>10px</strong>.",
      html: "<div>Div s okraji</div>",
      cssStarter: "/* padding a margin */\n\n",
      checks: [
        { s: "div", p: "padding", v: "20px" },
        { s: "div", p: "margin", v: "10px" }
      ]
    },
    {
      id: 5, title: "Zarovnání textu",
      desc: "Zarovnej text v <code>&lt;div&gt;</code> na <strong>střed</strong>.",
      html: "<div><h2>Nadpis</h2><p>Text na středu</p></div>",
      cssStarter: "/* Zarovnání */\n\ndiv {\n  \n}",
      checks: [{ s: "div", p: "textAlign", v: "center" }]
    },
    {
      id: 6, title: "Stylování odkazů",
      desc: "Nastav odkazy na <strong>červenou</strong> barvu bez podtržení.",
      html: '<a href="#">Klikni sem</a>',
      cssStarter: "/* Styl pro odkaz */\n\n",
      checks: [
        { s: "a", p: "color", v: "red" },
        { s: "a", p: "textDecoration", v: "none" }
      ]
    },
    {
      id: 7, title: "Rámeček",
      desc: "Přidej <code>&lt;div&gt;</code> rámeček: <strong>2px solid černý</strong>.",
      html: "<div>Div s rámečkem</div>",
      cssStarter: "/* border */\n\n",
      checks: [{ s: "div", p: "border", v: "2px solid black" }]
    },
    {
      id: 8, title: "Seznam bez odrážek",
      desc: "Odstraň odrážky ze seznamu a nastav <strong>žluté</strong> pozadí.",
      html: "<ul><li>Položka 1</li><li>Položka 2</li></ul>",
      cssStarter: "/* Seznam bez odrážek */\n\n",
      checks: [
        { s: "ul", p: "listStyleType", v: "none" },
        { s: "ul", p: "backgroundColor", v: "yellow" }
      ]
    },
    {
      id: 9, title: "Tlačítko",
      desc: "Vytvoř tlačítko se <strong>zeleným</strong> pozadím, <strong>bílým</strong> textem a <strong>12px</strong> paddingem.",
      html: "<button>Klikni</button>",
      cssStarter: "/* Styl tlačítka */\n\n",
      checks: [
        { s: "button", p: "backgroundColor", v: "green" },
        { s: "button", p: "color", v: "white" },
        { s: "button", p: "padding", v: "12px" }
      ]
    }
  ],

  intermediate: [
    {
      id: 1, title: "Dva sloupce s flexboxem",
      desc: "Vytvoř dvousloupcové rozložení pomocí <strong>flexboxu</strong>. Každý sloupec 50% šířky.",
      html: '<div class="container"><div class="box">Sloupec 1</div><div class="box">Sloupec 2</div></div>',
      cssStarter: "/* Flexbox */\n\n.container {\n  display: \n}\n\n.box {\n  flex: \n}",
      checks: [
        { s: ".container", p: "display", v: "flex" },
        { s: ".box", p: "flex", v: "1" }
      ]
    },
    {
      id: 2, title: "CSS Grid 3 sloupce",
      desc: "Vytvoř grid se <strong>3 sloupci</strong> stejné šířky.",
      html: '<div class="grid"><div>1</div><div>2</div><div>3</div></div>',
      cssStarter: "/* CSS Grid */\n\n",
      checks: [
        { s: ".grid", p: "display", v: "grid" },
        { s: ".grid", p: "gridTemplateColumns", v: "1fr 1fr 1fr", accept: ["auto auto auto", "33.33% 33.33% 33.33%"] }
      ]
    },
    {
      id: 3, title: "Překryvná vrstva",
      desc: "Umísti <code>.overlay</code> absolutně přes celý <code>.container</code> (top 0, left 0, plná šířka a výška).",
      html: '<div class="container"><div class="overlay">Překryv</div></div>',
      cssStarter: "/* Pozicování */\n\n.container {\n  position: relative;\n  width: 200px;\n  height: 200px;\n}\n\n.overlay {\n  \n}",
      checks: [
        { s: ".overlay", p: "position", v: "absolute" },
        { s: ".overlay", p: "top", v: "0px" },
        { s: ".overlay", p: "left", v: "0px" },
        { s: ".overlay", p: "width", v: "100%" },
        { s: ".overlay", p: "height", v: "100%" }
      ]
    },
    {
      id: 4, title: "Přechod při hoveru",
      desc: "Přidej tlačítku přechod: při najetí myší se změní barva pozadí na <strong>tmavomodrou</strong> během <strong>0.3s</strong>.",
      html: "<button class='btn-hover'>Najdi mě</button>",
      cssStarter: "/* Transition */\n\n.btn-hover {\n  background: blue;\n  color: white;\n  \n}",
      checks: [
        { s: ".btn-hover", p: "transitionDuration", v: "0.3s" },
        { s: ".btn-hover", p: "transitionProperty", v: "background-color" }
      ]
    },
    {
      id: 5, title: "Stín a zaoblení",
      desc: "Přidej kartě <strong>stín</strong> (5px doprava, 5px dolů, 15px rozmazání, černý s 30% průhledností) a <strong>zaoblené rohy</strong> 12px.",
      html: '<div class="card">Karta s stylem</div>',
      cssStarter: "/* Shadow & radius */\n\n.card {\n  \n}",
      checks: [
        { s: ".card", p: "borderRadius", v: "12px" },
        { s: ".card", p: "boxShadow", v: "5px 5px 15px rgba(0,0,0,0.3)" }
      ]
    },
    {
      id: 6, title: "Navigační lišta",
      desc: "Vytvoř horizontální navigaci pomocí flexboxu. Položky vedle sebe s mezerou 20px.",
      html: '<nav><a href="#">Domů</a><a href="#">O nás</a><a href="#">Kontakt</a></nav>',
      cssStarter: "/* Navigace */\n\nnav {\n  \n}\n\nnav a {\n  \n}",
      checks: [
        { s: "nav", p: "display", v: "flex" },
        { s: "nav", p: "gap", v: "20px" }
      ]
    },
    {
      id: 7, title: "Karta s obrázkem",
      desc: "Vytvoř kartu: obrázek 100% šířky, titulek tučně, padding 16px.",
      html: '<div class="card"><img src="data:image/svg+xml,%3Csvg%20width%3D%22200%22%20height%3D%22120%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22200%22%20height%3D%22120%22%20fill%3D%22%23ccc%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20fill%3D%22%23666%22%3EObrázek%3C%2Ftext%3E%3C%2Fsvg%3E" alt="placeholder"><div class="card-body"><h3>Název karty</h3><p>Popisek karty</p></div></div>',
      cssStarter: "/* Card */\n\n.card {\n  \n}\n\n.card img {\n  \n}\n\n.card-body {\n  \n}",
      checks: [
        { s: ".card img", p: "width", v: "100%" },
        { s: ".card-body", p: "padding", v: "16px" }
      ]
    },
    {
      id: 8, title: "Relativní jednotky",
      desc: "Nastav nadpisu velikost písma <strong>3rem</strong> a odstavci <strong>1.2rem</strong>.",
      html: "<h2>Nadpis</h2><p>Odstavec textu</p>",
      cssStarter: "/* rem jednotky */\n\nhtml {\n  font-size: 16px;\n}\n\nh2 {\n  \n}\n\np {\n  \n}",
      checks: [
        { s: "h2", p: "fontSize", v: "3rem" },
        { s: "p", p: "fontSize", v: "1.2rem" }
      ]
    },
    {
      id: 9, title: "Vrstvy (z-index)",
      desc: "Umísti červený čtverec <strong>nad</strong> modrý pomocí <code>z-index</code>.",
      html: '<div class="red">Červená</div><div class="blue">Modrá</div>',
      cssStarter: "/* Z-index */\n\n.red, .blue {\n  position: absolute;\n  width: 120px;\n  height: 120px;\n}\n\n.red {\n  top: 30px;\n  left: 30px;\n  background: red;\n  \n}\n\n.blue {\n  top: 10px;\n  left: 10px;\n  background: blue;\n  \n}",
      checks: [
        { s: ".red", p: "zIndex", v: "2", compare: { target: ".blue", type: "gt" } },
        { s: ".blue", p: "zIndex", v: "1", propertyOnly: true }
      ]
    }
  ],

  junior: [
    {
      id: 1, title: "Responsivní flexbox",
      desc: "Nastav, aby se položky zalamovaly na další řádek (<strong>wrap</strong>). Každá položka má minimálně 200px.",
      html: '<div class="flex"><div class="item">1</div><div class="item">2</div><div class="item">3</div></div>',
      cssStarter: "/* Flexbox wrap */\n\n.flex {\n  display: flex;\n  \n}\n\n.item {\n  flex: 1;\n  min-width: \n}",
      checks: [
        { s: ".flex", p: "flexWrap", v: "wrap" },
        { s: ".item", p: "minWidth", v: "200px" }
      ]
    },
    {
      id: 2, title: "Grid oblasti",
      desc: "Pojmenuj grid oblasti: <strong>header</strong>, <strong>nav</strong>, <strong>main</strong>, <strong>footer</strong>.",
      html: '<div class="layout"><header>Hlavička</header><nav>Menu</nav><main>Obsah</main><footer>Patička</footer></div>',
      cssStarter: "/* Grid areas */\n\n.layout {\n  display: grid;\n  \n}\n\nheader { grid-area: header; }\nnav { grid-area: nav; }\nmain { grid-area: main; }\nfooter { grid-area: footer; }",
      checks: [
        { s: ".layout", p: "gridTemplateAreas", v: '"header header" "nav main" "footer footer"' }
      ]
    },
    {
      id: 3, title: "Pulzující animace",
      desc: "Vytvoř animaci <strong>pulse</strong>, která zvětší prvek na <strong>1.2x</strong> a změní barvu na <strong>červenou</strong>.",
      html: '<div class="box">Animace</div>',
      cssStarter: "/* @keyframes */\n\n@keyframes pulse {\n  0% { transform: scale(1); background: blue; }\n  100% {  }\n}\n\n.box {\n  animation: pulse 1s infinite alternate;\n}",
      checks: [
        { s: ".box", p: "animationName", v: "pulse" },
        { s: ".box", p: "animationDuration", v: "1s" },
        { s: ".box", p: "animationIterationCount", v: "infinite" }
      ]
    },
    {
      id: 4, title: "Media query",
      desc: "Nastav, aby na obrazovkách <strong>menších než 600px</strong> měl nadpis velikost <strong>1rem</strong>.",
      html: "<h1>Responsivní nadpis</h1>",
      cssStarter: "/* Media query */\n\nh1 {\n  font-size: 2rem;\n}\n\n@media (max-width: 600px) {\n  h1 {\n    \n  }\n}",
      checks: [
        // We can't easily check media query via computed style in the iframe without resizing
        // So let's use a simpler check: the base font-size
        { s: "h1", p: "fontSize", v: "2rem" }
      ]
    },
    {
      id: 5, title: "CSS proměnné",
      desc: "Definuj CSS proměnnou <code>--primary-color</code> s hodnotou <strong>#7c3aed</strong> a použij ji jako barvu pozadí tlačítka.",
      html: "<button class='btn-custom'>Tlačítko</button>",
      cssStarter: "/* CSS variables */\n\n:root {\n  \n}\n\n.btn-custom {\n  \n}",
      checks: [
        { s: ".btn-custom", p: "backgroundColor", v: "#7c3aed" }
      ]
    },
    {
      id: 6, title: "Gradient",
      desc: "Vytvoř lineární gradient ze <strong>fialové</strong> do <strong>modré</strong> jako pozadí.",
      html: '<div class="gradient-box">Gradient</div>',
      cssStarter: "/* Gradient */\n\n.gradient-box {\n  \n}",
      checks: [
        { s: ".gradient-box", p: "backgroundImage", v: "linear-gradient(purple, blue)" }
      ]
    },
    {
      id: 7, title: "Rotace při hoveru",
      desc: "Při najetí myší otoč obrázek o <strong>15 stupňů</strong> a přidej plynulý přechod.",
      html: '<img src="data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22%23a78bfa%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20fill%3D%22white%22%3Eimg%3C%2Ftext%3E%3C%2Fsvg%3E" alt="box" class="rotate-img">',
      cssStarter: "/* Transform */\n\n.rotate-img {\n  transition: transform 0.3s ease;\n}\n\n.rotate-img:hover {\n  \n}",
      checks: [
        { s: ".rotate-img", p: "transitionDuration", v: "0.3s" },
        { s: ".rotate-img", p: "transitionProperty", v: "transform" }
      ]
    },
    {
      id: 8, title: "Flexbox pořadí",
      desc: "Pomocí <code>order</code> umísti položku <strong>3</strong> jako <strong>první</strong>.",
      html: '<div class="flex"><div class="item">1</div><div class="item">2</div><div class="item third">3</div></div>',
      cssStarter: "/* Order */\n\n.flex {\n  display: flex;\n}\n\n.third {\n  \n}",
      checks: [{ s: ".third", p: "order", v: "-1" }]
    },
    {
      id: 9, title: "Sticky pozicování",
      desc: "Nastav hlavičce <code>position: sticky</code> s <strong>top: 0</strong>.",
      html: "<header class='sticky-header'>Hlavička</header>",
      cssStarter: "/* Sticky */\n\n.sticky-header {\n  \n}",
      checks: [
        { s: ".sticky-header", p: "position", v: "sticky" },
        { s: ".sticky-header", p: "top", v: "0px" }
      ]
    }
  ],

  senior: [
    {
      id: 1, title: "Grid šablona",
      desc: "Vytvoř grid s 3 sloupci a 2 řádky. První řádek 100px, druhý 1fr.",
      html: '<div class="grid"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div>',
      cssStarter: "/* Grid šablona */\n\n.grid {\n  display: grid;\n  \n}",
      checks: [
        { s: ".grid", p: "gridTemplateColumns", v: "1fr 1fr 1fr" },
        { s: ".grid", p: "gridTemplateRows", v: "100px 1fr" }
      ]
    },
    {
      id: 2, title: "Vícekroková animace",
      desc: "Vytvoř animaci <strong>slide</strong> se 3 kroky: posun doprava, změna barvy a posun zpět.",
      html: '<div class="slide-box">Slide</div>',
      cssStarter: "/* Keyframes */\n\n@keyframes slide {\n  0% { transform: translateX(0); background: blue; }\n  50% {  }\n  100% {  }\n}\n\n.slide-box {\n  animation: slide 2s ease infinite;\n}",
      checks: [
        { s: ".slide-box", p: "animationName", v: "slide" },
        { s: ".slide-box", p: "animationDuration", v: "2s" }
      ]
    },
    {
      id: 3, title: "Pseudo-elementy",
      desc: "Přidej před každý odstavec obsah <strong>\"→ \"</strong> pomocí <code>::before</code> a nastav mu <strong>červenou</strong> barvu.",
      html: "<p>První odstavec</p><p>Druhý odstavec</p>",
      cssStarter: "/* ::before */\n\np::before {\n  content: \n  \n}",
      checks: [
        // We'll check via computed style - ::before shows as a pseudo-element
        // Actually, computed style can't easily check pseudo-element content
        // Let's check the color on the after pseudo
      ]
    },
    {
      id: 4, title: "CSS tvary (clip-path)",
      desc: "Vytvoř z obdélníku <strong>kruh</strong> pomocí <code>clip-path: circle(50%)</code>.",
      html: '<div class="shape">Kruh</div>',
      cssStarter: "/* Clip-path */\n\n.shape {\n  width: 150px;\n  height: 150px;\n  background: purple;\n  \n}",
      checks: [{ s: ".shape", p: "clipPath", v: "circle(50%)" }]
    },
    {
      id: 5, title: "Filtry",
      desc: "Aplikuj na obrázek <strong>stupně šedi</strong> (grayscale 100%) a <strong>rozostření</strong> 2px.",
      html: '<img src="data:image/svg+xml,%3Csvg%20width%3D%22200%22%20height%3D%22150%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%2345aaf2%22%2F%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2275%22%20r%3D%2240%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E" alt="photo" class="filter-img">',
      cssStarter: "/* Filtry */\n\n.filter-img {\n  \n}",
      checks: [
        { s: ".filter-img", p: "filter", v: "grayscale(100%) blur(2px)" }
      ]
    },
    {
      id: 6, title: "Pokročilé selektory",
      desc: "Pomocí <code>:nth-child(odd)</code> nastav <strong>šedé</strong> pozadí lichým položkám seznamu.",
      html: "<ul><li>Položka 1</li><li>Položka 2</li><li>Položka 3</li><li>Položka 4</li></ul>",
      cssStarter: "/* nth-child */\n\nli:nth-child(odd) {\n  \n}",
      checks: [
        { s: "li:nth-child(odd)", p: "backgroundColor", v: "gray" }
      ]
    },
    {
      id: 7, title: "3D transformace",
      desc: "Přidej <code>perspective: 200px</code> rodiči a otoč kartu o <strong>45 stupňů</strong> kolem osy Y.",
      html: '<div class="scene"><div class="card-3d">3D Karta</div></div>',
      cssStarter: "/* 3D */\n\n.scene {\n  \n}\n\n.card-3d {\n  \n}",
      checks: [
        { s: ".scene", p: "perspective", v: "200px" },
        { s: ".card-3d", p: "transform", v: "rotateY(45deg)" }
      ]
    },
    {
      id: 8, title: "Proměnné s calc()",
      desc: "Definuj proměnnou <code>--spacing</code> jako <strong>8px</strong>. Použij <code>calc()</code> pro nastavení paddingu na <strong>3x</strong> hodnotu proměnné.",
      html: '<div class="spaced-box">Obsah s mezery</div>',
      cssStarter: "/* Variables + calc */\n\n:root {\n  \n}\n\n.spaced-box {\n  \n}",
      checks: [
        { s: ".spaced-box", p: "padding", v: "24px" }
      ]
    },
    {
      id: 9, title: "Container queries",
      desc: "Nastav kontejneru <code>container-type: inline-size</code> a změň barvu textu na <strong>modrou</strong>, když je kontejner <strong>širší než 400px</strong>.",
      html: '<div class="container-query"><p>Responsivní text</p></div>',
      cssStarter: "/* Container queries - moderní přístup */\n\n.container-query {\n  \n}\n\n@container (min-width: 400px) {\n  .container-query p {\n    \n  }\n}",
      checks: [
        { s: ".container-query", p: "containerType", v: "inline-size" }
      ]
    }
  ]
};

// Fix senior challenge 3 - replace pseudo-elements with :not() pseudo-class
CHALLENGES.senior[2] = {
  id: 3, title: "Pseudotřída :not()",
  desc: "Použij <code>:not()</code> pro nastylování všech odstavců <strong>kromě</strong> posledního. Nastav jim <strong>žluté</strong> pozadí.",
  html: "<div><p>První</p><p>Druhý</p><p>Třetí</p><p>Poslední</p></div>",
  cssStarter: "/* :not() */\n\np:not(:last-child) {\n  \n}",
  checks: [
    { s: "p:not(:last-child)", p: "backgroundColor", v: "yellow" }
  ]
};

// Fix junior challenge 4 - replace media query with combinator test
CHALLENGES.junior[3] = {
  id: 4, title: "Selektor potomka",
  desc: "Nastav pomocí selektoru <code>div p</code> barvu odstavce uvnitř divu na <strong>červenou</strong>.",
  html: "<div><p>Odstavec v divu</p></div><p>Odstavec mimo div</p>",
  cssStarter: "/* Selektor potomka */\n\ndiv p {\n  \n}",
  checks: [
    { s: "div p", p: "color", v: "red" }
  ]
};

// Fix junior challenge 6 - gradient
CHALLENGES.junior[5] = {
  id: 6, title: "Gradient",
  desc: "Vytvoř lineární gradient ze <strong>fialové</strong> do <strong>modré</strong> jako pozadí.",
  html: '<div class="gradient-box">Gradient</div>',
  cssStarter: "/* Gradient */\n.gradient-box {\n  \n}",
  checks: [
    { s: ".gradient-box", p: "backgroundImage", v: "linear-gradient(purple, blue)" }
  ]
};

// ---- GAME STATE ----
const state = {
  level: null,
  totalQty: null,
  challenges: [],
  currentIndex: 0,
  score: 0,
  perfect: 0,
  submitted: false,
  result: null
};

// ---- DOM REFS ----
const $ = id => document.getElementById(id);
const setupScreen = $('setup-screen');
const gameScreen = $('game-screen');
const finishScreen = $('finish-screen');
const levelGroup = $('level-group');
const countGroup = $('count-group');
const startBtn = $('start-btn');
const scoreEl = $('score');
const progressFill = $('progress-fill');
const progressText = $('progress-text');
const challengeTitle = $('challenge-title');
const challengeDiff = $('challenge-difficulty');
const challengeDesc = $('challenge-desc');
const htmlDisplay = $('html-display');
const cssStarter = $('css-starter');
const cssInput = $('css-input');
const submitBtn = $('submit-btn');
const nextBtn = $('next-btn');
const resetBtn = $('reset-btn');
const resultBox = $('result-box');
const resultText = $('result-text');
const previewFrame = $('preview-frame');
const teacherFace = $('teacher-face');
const finalScore = $('final-score');
const finalPerfect = $('final-perfect');
const finalTotal = $('final-total');
const finalMessage = $('final-message');
const finalTeacher = $('final-teacher');
const replayBtn = $('replay-btn');

// ---- SETUP ----
let selectedLevel = null;
let selectedCount = null;

document.querySelectorAll('.btn-option').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.parentElement;
    group.querySelectorAll('.btn-option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    if (group.id === 'level-group') {
      selectedLevel = btn.dataset.value;
    } else {
      selectedCount = parseInt(btn.dataset.value);
    }

    startBtn.disabled = !(selectedLevel && selectedCount);
  });
});

// ---- GAME START ----
startBtn.addEventListener('click', startGame);

function startGame() {
  state.level = selectedLevel;
  state.totalQty = selectedCount;
  state.currentIndex = 0;
  state.score = 0;
  state.perfect = 0;
  state.submitted = false;
  state.result = null;

  const pool = [...CHALLENGES[selectedLevel]];
  state.challenges = shuffleArray(pool).slice(0, selectedCount);

  setupScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  finishScreen.classList.add('hidden');

  loadChallenge(0);
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---- LOAD CHALLENGE ----
function loadChallenge(index) {
  const ch = state.challenges[index];
  if (!ch) return;

  state.submitted = false;
  state.result = null;
  submitBtn.disabled = false;
  nextBtn.disabled = true;
  resultBox.classList.add('hidden');
  detailBtn.classList.add('hidden');
  resetBtn.disabled = false;

  // Title & difficulty
  challengeTitle.textContent = `${index + 1}. ${ch.title}`;
  challengeDiff.textContent = state.level;
  challengeDiff.className = 'badge ' + state.level;

  // Description
  challengeDesc.innerHTML = ch.desc;

  // HTML display
  htmlDisplay.innerHTML = highlightHTML(ch.html);
  htmlDisplay.querySelector('code')?.addEventListener('copy', e => e.stopPropagation());

  // CSS starter display
  cssStarter.innerHTML = highlightCSS(ch.cssStarter);
  cssStarter.querySelector('code')?.addEventListener('copy', e => e.stopPropagation());

  // Editor
  cssInput.value = ch.cssStarter;
  updatePreview();

  // Progress
  updateProgress();

  // Score
  scoreEl.textContent = state.score;

  // Teacher - keep mood from previous challenge (don't reset)

  // Scroll editor to top
  cssInput.scrollTop = 0;
}

// ---- SYNTAX HIGHLIGHTING ----
function highlightHTML(code) {
  return '<code>' +
    code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="css-selector">$2</span>')
      .replace(/(&lt;[\w-]+)(\s+[^&]*?)(\/?&gt;)/g, (m, tag, attrs, end) => {
        const highlighted = attrs.replace(/([\w-]+)(=)("([^"]*)")/g, '$1<span class="css-colon">=</span><span class="css-string">"$4"</span>');
        return tag + highlighted + end;
      }) +
    '</code>';
}

function highlightCSS(code) {
  if (!code) return '<code></code>';

  // Save keyframes (comments handled inline in highlightSelector)
  const kfs = [];
  let clean = code.replace(/@keyframes\s+[^{]+\{(?:[^{}]|\{[^{}]*\})*\}/gi, m => {
    kfs.push(m);
    return `\x00${kfs.length - 1}_KFS\x00`;
  });

  let result = clean
    .replace(/(@[\w-]+)\b/g, '<span class="css-atrule">$1</span>')
    .replace(/([^{]*?)\{/g, (match, sel) => {
      return highlightSelector(sel) + '<span class="css-brace">{</span>';
    })
    .replace(/([\w-]+)(\s*:\s*)/g, (m, prop, colon) => {
      return `<span class="css-property">${prop}</span><span class="css-colon">:</span>${colon.replace(':', '')}`;
    })
    .replace(/([^;{}]*?)(;)/g, (m, val, semi) => {
      const h = val
        .replace(/(#[0-9a-fA-F]{3,8})\b/g, '<span class="css-value">$1</span>')
        .replace(/\b(\d+\.?\d*)(px|rem|em|vh|vw|%|s|ms|deg|fr|pt|cm|mm|in|ch|ex|vmin|vmax)\b/g, '<span class="css-number">$1</span><span class="css-unit">$2</span>')
        .replace(/\b(\d+)\b/g, '<span class="css-number">$1</span>')
        .replace(/\b(red|blue|green|yellow|black|white|gray|purple|orange|pink|brown|transparent|lightblue|lightgray|darkblue|gold|silver|teal|navy|fuchsia|lime|maroon|olive|aqua|magenta|violet|indigo|tan|salmon|coral|tomato|slate|currentcolor|inherit|initial|unset)\b/gi, '<span class="css-value">$1</span>')
        .replace(/\b(url|rgb|rgba|hsl|hsla|linear-gradient|radial-gradient|repeat|no-repeat|cover|contain|center|top|bottom|left|right|middle|bold|bolder|normal|italic|underline|overline|line-through|solid|dashed|dotted|double|groove|ridge|inset|outset|hidden|visible|scroll|auto|none|block|inline|inline-block|flex|grid|table|absolute|relative|fixed|sticky|static|nowrap|pre-wrap|pre|break-word|ellipsis|clip|both|left|right|center|space-between|space-around|space-evenly|flex-start|flex-end|center|baseline|stretch|wrap|nowrap|column|row|column-reverse|row-reverse|cover|contain|scale|rotate|translate|skew|matrix|perspective)\b/gi, '<span class="css-function">$1</span>');
      return h + '<span class="css-semicolon">;</span>';
    })
    .replace(/\}/g, '<span class="css-brace">}</span>');

  // Restore keyframes
  result = result.replace(/\x00(\d+)_KFS\x00/g, (m, idx) => {
    const k = kfs[parseInt(idx)];
    const e = k.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<span class="css-keyword">${e}</span>`;
  });

  return `<code>${result}</code>`;
}

function highlightSelector(sel) {
  let r = '';
  for (let i = 0; i < sel.length; i++) {
    const ch = sel[i];
    if (ch === '/' && i + 1 < sel.length && sel[i + 1] === '*') {
      let end = sel.indexOf('*/', i + 2);
      if (end === -1) end = sel.length - 2;
      r += '<span class="css-comment">' + sel.substring(i, end + 2) + '</span>';
      i = end + 1;
      continue;
    }
    if (ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r') {
      r += ch;
    } else if (ch === '>' || ch === '+' || ch === '~') {
      r += '<span class="css-keyword">' + ch + '</span>';
    } else if (ch === ':') {
      let s = i;
      i++;
      if (i < sel.length && sel[i] === ':') i++;
      while (i < sel.length && /[\w-]/.test(sel[i])) i++;
      r += '<span class="css-pseudo">' + sel.substring(s, i) + '</span>';
      i--;
    } else if (ch === '.') {
      let s = i;
      i++;
      while (i < sel.length && /[\w-]/.test(sel[i])) i++;
      r += '<span class="css-selector">' + sel.substring(s, i) + '</span>';
      i--;
    } else if (ch === '#') {
      let s = i;
      i++;
      while (i < sel.length && /[\w-]/.test(sel[i])) i++;
      r += '<span class="css-selector">' + sel.substring(s, i) + '</span>';
      i--;
    } else if (ch === '[') {
      let s = i;
      let d = 1;
      i++;
      while (i < sel.length && d > 0) {
        if (sel[i] === '[') d++;
        if (sel[i] === ']') d--;
        i++;
      }
      r += '<span class="css-keyword">' + sel.substring(s, i) + '</span>';
      i--;
    } else if (/[a-zA-Z]/.test(ch)) {
      let s = i;
      while (i < sel.length && /[\w-]/.test(sel[i])) i++;
      r += '<span class="css-selector">' + sel.substring(s, i) + '</span>';
      i--;
    } else if (ch === ',') {
      r += ',';
    } else if (ch === '*') {
      r += '<span class="css-selector">*</span>';
    } else {
      r += ch;
    }
  }
  return r;
}


// ---- PREVIEW ----
let previewTimer = null;

function updatePreview() {
  clearTimeout(previewTimer);
  previewTimer = setTimeout(() => {
    const ch = state.challenges[state.currentIndex];
    if (!ch) return;
    renderPreview(ch.html, cssInput.value);
  }, 200);
}

function renderPreview(html, css) {
  const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>${css}</style>
    </head>
    <body>${html}</body>
    </html>
  `);
  doc.close();
}

// ---- EVALUATION ----
function evaluateSolution(userCSS, challenge) {
  const text = userCSS.trim();
  if (!text || text === challenge.cssStarter.trim()) {
    return { score: 0, correct: 0, total: challenge.checks.length, reason: 'empty', details: [] };
  }

  const rules = parseCSSRules(text);
  if (rules.length === 0) {
    return { score: -5, correct: 0, total: challenge.checks.length, reason: 'syntax', details: [] };
  }

  let correct = 0;
  const total = challenge.checks.length;
  const details = [];

  for (const check of challenge.checks) {
    if (!check.s) {
      details.push({ check, passed: false, found: '—' });
      continue;
    }
    let found = false;
    let foundVal = '—';
    let sourceVal = null;
    for (const rule of rules) {
      if (found) break;
      const selectors = rule.selector.split(',').map(s => s.trim());
      for (const sel of selectors) {
        if (found) break;
        if (sel === check.s) {
          for (const [prop, val] of Object.entries(rule.decls)) {
            if (normalizeProp(prop) === normalizeProp(check.p)) {
              foundVal = val;
              sourceVal = val;
              if (normalizeVal(val) === normalizeVal(check.v)) {
                correct++;
                found = true;
              } else if (check.accept) {
                for (const alt of check.accept) {
                  if (normalizeVal(val) === normalizeVal(alt)) {
                    correct++;
                    found = true;
                    break;
                  }
                }
              }
              break;
            }
          }
        }
      }
    }

    // Fallback: propertyOnly check (any value is accepted)
    if (!found && check.propertyOnly && sourceVal !== null) {
      correct++;
      found = true;
    }

    // Fallback: relational comparison (e.g., z-index: .red > .blue)
    if (!found && check.compare && sourceVal !== null) {
      const targetProp = check.compare.prop || check.p;
      const a = parseFloat(sourceVal);
      if (!isNaN(a)) {
        let b = NaN;
        for (const rule of rules) {
          if (!isNaN(b)) break;
          const selectors = rule.selector.split(',').map(s => s.trim());
            if (selectors.includes(check.compare.target)) {
            for (const [prop, val] of Object.entries(rule.decls)) {
              if (normalizeProp(prop) === normalizeProp(targetProp)) {
                b = parseFloat(val);
                // Non-numeric values like 'auto' act as 0 in stacking context
                if (isNaN(b)) b = 0;
                break;
              }
            }
            // Target rule found but property not declared; use CSS default (0 for numeric props like z-index)
            if (isNaN(b)) b = 0;
          }
        }
        if (!isNaN(b)) {
          switch (check.compare.type) {
            case 'gt': if (a > b) { correct++; found = true; } break;
            case 'gte': if (a >= b) { correct++; found = true; } break;
            case 'lt': if (a < b) { correct++; found = true; } break;
            case 'lte': if (a <= b) { correct++; found = true; } break;
            case 'ne': if (a !== b) { correct++; found = true; } break;
          }
        }
      }
    }

    details.push({ check, passed: found, found: foundVal });
  }

  if (correct === 0) {
    return { score: -5, correct: 0, total, reason: 'wrong', details };
  }

  if (correct === total) {
    return { score: 20, correct, total, reason: 'perfect', details };
  }

  const pct = Math.round((correct / total) * 20);
  return { score: Math.max(1, pct), correct, total, reason: 'partial', details };
}

function parseCSSRules(css) {
  const rules = [];
  // Strip comments and at-rule blocks to avoid nested brace issues
  let cleaned = css.replace(/\/\*[\s\S]*?\*\//g, '');
  cleaned = cleaned.replace(/@(?:keyframes|media|container|supports|layer)\s+[^{]+\{(?:[^{}]|\{[^{}]*\})*\}/gi, '');
  const blockRegex = /([^{]+)\{([^}]*)\}/g;
  let match;
  while ((match = blockRegex.exec(cleaned)) !== null) {
    const selector = match[1].trim();
    const declText = match[2].trim();
    if (!selector || !declText) continue;
    if (selector.startsWith('@') || /^\d+%$/.test(selector.trim())) continue;
    const decls = {};
    const declRegex = /([^:;]+)\s*:\s*([^;]+)/g;
    let dm;
    while ((dm = declRegex.exec(declText)) !== null) {
      const p = dm[1].trim();
      const v = dm[2].trim();
      if (p && v) decls[p] = v;
    }
    if (Object.keys(decls).length > 0) {
      rules.push({ selector, decls });
    }
  }
  return rules;
}

const COLOR_MAP = {
  'red': '#ff0000', 'blue': '#0000ff', 'green': '#008000', 'yellow': '#ffff00',
  'black': '#000000', 'white': '#ffffff', 'gray': '#808080', 'grey': '#808080',
  'purple': '#800080', 'orange': '#ffa500', 'pink': '#ffc0cb', 'brown': '#a52a2a',
  'lightblue': '#add8e6', 'lightgray': '#d3d3d3', 'darkblue': '#00008b',
  'gold': '#ffd700', 'silver': '#c0c0c0', 'teal': '#008080', 'navy': '#000080',
  'fuchsia': '#ff00ff', 'lime': '#00ff00', 'maroon': '#800000', 'olive': '#808000',
  'aqua': '#00ffff', 'magenta': '#ff00ff', 'violet': '#ee82ee', 'indigo': '#4b0082',
  'tan': '#d2b48c', 'salmon': '#fa8072', 'coral': '#ff7f50', 'tomato': '#ff6347',
  'slate': '#708090', 'transparent': 'transparent'
};

function normalizeVal(val) {
  let v = val.trim().toLowerCase();
  // Normalize named colors to hex (individual words)
  for (const [name, hex] of Object.entries(COLOR_MAP)) {
    v = v.replace(new RegExp('\\b' + name + '\\b', 'g'), hex);
  }
  // Expand repeat() in grid values (repeat(3, 1fr) -> 1fr 1fr 1fr)
  v = v.replace(/\brepeat\s*\(\s*(\d+)\s*,\s*([^)]+?)\s*\)/g, (_, num, val) => {
    return Array(parseInt(num)).fill(val.trim()).join(' ');
  });
  // Normalize #rgb to #rrggbb and #rrggbb to lowercase anywhere
  v = v.replace(/#([0-9a-f])([0-9a-f])([0-9a-f])\b/gi, '#$1$1$2$2$3$3');
  v = v.replace(/#([0-9a-f])([0-9a-f])([0-9a-f])\1\2\3\b/gi, '#$1$2$3');
  // Remove spaces around commas in rgb/rgba/hsl/hsla
  v = v.replace(/\s*,\s*/g, ',');
  // Remove spaces around parentheses
  v = v.replace(/\s*\(\s*/g, '(').replace(/\s*\)\s*/g, ')');
  // Remove multiple spaces
  v = v.replace(/\s+/g, ' ');
  // Normalize 0 with any unit to just 0 (0px = 0 in CSS)
  v = v.replace(/\b0(?:px|em|rem|%|vh|vw|vmin|vmax|pt|pc|in|cm|mm|ex|ch|lh|rlh|svw|svh|lvw|lvh|dvw|dvh|s|ms|deg|rad|grad|turn|fr)\b/g, '0');
  // Collapse multiple zeros (e.g., "0 0 0 0" -> "0")
  v = v.replace(/\b0\s+0(?:\s+0(?:\s+0)?)?/g, '0');
  // Final trim
  v = v.trim();
  return v;
}

function normalizeProp(prop) {
  return prop.replace(/([A-Z])/g, '-$1').toLowerCase();
}

// ---- SUBMIT ----
submitBtn.addEventListener('click', handleSubmit);

function handleSubmit() {
  if (state.submitted) return;

  const ch = state.challenges[state.currentIndex];
  const result = evaluateSolution(cssInput.value, ch);

  state.submitted = true;
  state.result = result;
  submitBtn.disabled = true;

  if (result.score === 20) {
    state.perfect++;
  }

  state.score += result.score;

  scoreEl.textContent = state.score;
  updateTeacherFromResult(result);

  // Show result
  resultBox.classList.remove('hidden', 'success', 'error', 'partial');

  if (result.reason === 'perfect') {
    resultBox.className = 'success';
    resultText.textContent = `✅ Perfektní! Získáváš ${result.score} bodů!`;
  } else if (result.reason === 'partial') {
    resultBox.className = 'partial';
    resultText.textContent = `⚠️ ${result.correct} z ${result.total} správně. Získáváš ${result.score} bodů.`;
  } else if (result.reason === 'empty') {
    resultBox.className = 'error';
    resultText.textContent = `⏳ Nezadal/a jsi žádné CSS. 0 bodů.`;
  } else if (result.reason === 'syntax') {
    resultBox.className = 'error';
    resultText.textContent = `❌ Syntaxe CSS není platná (žádné platné pravidlo). Ztrácíš 5 bodů.`;
  } else {
    resultBox.className = 'error';
    resultText.textContent = `❌ Žádný z kontrolovaných CSS selektorů nebyl nalezen. Ztrácíš 5 bodů.`;
  }

  // Show detail button
  detailBtn.classList.remove('hidden');

  // Enable next button after a short delay
  setTimeout(() => {
    nextBtn.disabled = false;
  }, 500);
}

// ---- NEXT ----
nextBtn.addEventListener('click', handleNext);

function handleNext() {
  state.currentIndex++;

  if (state.currentIndex >= state.challenges.length) {
    endGame();
  } else {
    loadChallenge(state.currentIndex);
  }
}

// ---- RESET ----
resetBtn.addEventListener('click', () => {
  const ch = state.challenges[state.currentIndex];
  cssInput.value = ch.cssStarter;
  updatePreview();

  if (state.submitted) {
    state.submitted = false;
    submitBtn.disabled = false;
    nextBtn.disabled = true;
    resultBox.classList.add('hidden');
    detailBtn.classList.add('hidden');
  }
});

// ---- PROGRESS ----
function updateProgress() {
  const total = state.challenges.length;
  const current = state.currentIndex + 1;
  const pct = ((state.currentIndex) / total) * 100;

  progressFill.style.width = pct + '%';
  progressText.textContent = `Příklad ${current} z ${total}`;
}

// ---- TEACHER ----
const TEACHER_IMG = {
  thrilled: 'img/tomas_thrilled.png',
  happy: 'img/tomas_happy.png',
  good: 'img/tomas_good.jpg',
  neutral: 'img/tomas_neutral.png',
  slightly_angry: 'img/tomas_slightly_angry.png',
  angry: 'img/tomas_angry.png',
  mega_angry: 'img/tomas_mega_angry.png'
};

function updateTeacher(mood) {
  const src = TEACHER_IMG[mood] || TEACHER_IMG.neutral;
  teacherFace.innerHTML = `<img src="${src}" alt="${mood}" class="teacher-img">`;
  teacherFace.className = '';
  if (mood === 'angry' || mood === 'mega_angry' || mood === 'slightly_angry') {
    teacherFace.classList.add('angry');
  }
}

function updateTeacherFromResult(result) {
  const done = state.currentIndex + 1;
  const avgScore = state.score / done;

  if (avgScore >= 18) {
    updateTeacher('thrilled');
  } else if (avgScore >= 8) {
    updateTeacher('happy');
  } else if (avgScore >= 1) {
    updateTeacher('good');
  } else if (avgScore >= -4) {
    updateTeacher('slightly_angry');
  } else {
    updateTeacher('mega_angry');
  }
}

// ---- DETAIL MODAL ----

function openDetailModal() {
  const result = state.result;
  if (!result) return;

  modalOverlay.classList.remove('hidden');
  modalBody.innerHTML = '';
  modalTitle.textContent = 'Detail hodnocení';

  // Show AI feedback
  if (result.aiFeedback && result.aiReason) {
    const box = document.createElement('div');
    box.style.cssText = 'padding: 12px 16px; background: var(--surface2); border-radius: 10px; font-size: 0.9rem; line-height: 1.5; color: var(--text); border-left: 3px solid var(--primary); margin-bottom: 12px;';
    box.textContent = result.aiReason;
    modalBody.appendChild(box);
  }

  if (!result.details || result.details.length === 0) {
    if (!result.aiFeedback) {
      modalBody.innerHTML = '<p class="modal-empty">Žádné kontroly k zobrazení.</p>';
    }
  } else {
    const list = document.createElement('ul');
    list.className = 'modal-check-list';

    for (const d of result.details) {
      const li = document.createElement('li');
      li.className = 'modal-check-item' + (d.passed ? ' passed' : ' failed');

      const icon = document.createElement('span');
      icon.className = 'modal-check-icon';
      icon.textContent = d.passed ? '✓' : '✗';

      const text = document.createElement('span');
      text.className = 'modal-check-text';
      const c = d.check;
      const expected = `${c.s} { ${c.p}: ${c.v} }`;
      const foundStr = d.passed ? ' ✓' : ` (nalezeno: ${d.found})`;
      text.innerHTML = `<code>${expected}</code> — ${foundStr}`;

      li.appendChild(icon);
      li.appendChild(text);
      list.appendChild(li);
    }

    modalBody.appendChild(list);
  }
}

function closeDetailModal() {
  modalOverlay.classList.add('hidden');
}

// ---- END GAME ----
function endGame() {
  gameScreen.classList.add('hidden');
  finishScreen.classList.remove('hidden');

  const total = state.challenges.length;
  finalScore.textContent = state.score;
  finalPerfect.textContent = state.perfect;
  finalTotal.textContent = total;

  // Teacher final reaction - worst to best
  if (state.score <= -15) {
    finalTeacher.innerHTML = '<img src="img/tomas_mega_angry.png" alt="mega rozzlobený" class="teacher-img">';
    finalMessage.textContent = 'Tomáš je mega nasranej! Tohle byla katastrofa!';
  } else if (state.score < 0) {
    finalTeacher.innerHTML = '<img src="img/tomas_angry.png" alt="rozzlobený" class="teacher-img">';
    finalMessage.textContent = 'Tomáš není nadšený. Zkus to znovu a víc se soustřeď!';
  } else if (state.perfect === 0) {
    finalTeacher.innerHTML = '<img src="img/tomas_slightly_angry.png" alt="mírně nespokojený" class="teacher-img">';
    finalMessage.textContent = 'Tomáš vidí, že ses snažil, ale žádný příklad není perfektní. Zkus to znovu!';
  } else if (state.perfect === total) {
    finalTeacher.innerHTML = '<img src="img/tomas_thrilled.png" alt="pyšný" class="teacher-img">';
    finalMessage.textContent = 'Tomáš je na tebe neskutečně pyšný! Jsi mistr CSS!';
  } else if (state.perfect >= total * 0.5) {
    finalTeacher.innerHTML = '<img src="img/tomas_happy.png" alt="spokojený" class="teacher-img">';
    finalMessage.textContent = 'Tomáš je spokojený. Dobrá práce, pokračuj v učení!';
  } else if (state.score >= 0 && state.perfect >= total * 0.3) {
    finalTeacher.innerHTML = '<img src="img/tomas_good.jpg" alt="neutrální" class="teacher-img">';
    finalMessage.textContent = 'Tomáš vidí, že máš základy, ale je třeba víc cvičit.';
  } else {
    finalTeacher.innerHTML = '<img src="img/tomas_neutral.png" alt="neutrální" class="teacher-img">';
    finalMessage.textContent = 'Tomáš ví, že to není lehké. Nevzdávej to a zkus znovu!';
  }

  // Progress bar full
  progressFill.style.width = '100%';
}

// ---- REPLAY ----
replayBtn.addEventListener('click', () => {
  finishScreen.classList.add('hidden');
  setupScreen.classList.remove('hidden');
  selectedLevel = null;
  selectedCount = null;
  document.querySelectorAll('.btn-option').forEach(b => b.classList.remove('selected'));
  startBtn.disabled = true;
  progressFill.style.width = '0%';
  progressText.textContent = '';
});

// ---- LIVE PREVIEW ----
cssInput.addEventListener('input', updatePreview);

// ---- KEYBOARD SHORTCUTS ----
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'Enter') {
    e.preventDefault();
    if (gameScreen.classList.contains('hidden')) return;
    if (!submitBtn.disabled) handleSubmit();
    else if (!nextBtn.disabled) handleNext();
  }
});

// ---- INIT ----
updateTeacher('neutral');
renderPreview('<p>Počkej na načtení...</p>', '');

// ---- MODAL DOM REFS ----
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const modalTitle = document.getElementById('modal-title');
const modalClose = document.getElementById('modal-close');
const detailBtn = document.getElementById('detail-btn');

detailBtn.addEventListener('click', openDetailModal);
modalClose.addEventListener('click', closeDetailModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeDetailModal();
});

// ---- AI EVALUATION ----
let aiSettings = loadAISettings();

function loadAISettings() {
  return {
    enabled: localStorage.getItem('aiEnabled') === 'true',
    apiKey: localStorage.getItem('geminiApiKey') || '',
  };
}

function saveAISettings() {
  localStorage.setItem('aiEnabled', aiSettings.enabled);
  localStorage.setItem('geminiApiKey', aiSettings.apiKey);
}

function updateAIBtnState() {
  if (aiSettings.enabled && aiSettings.apiKey) {
    settingsBtn.classList.add('active');
    settingsBtn.textContent = 'AI';
  } else {
    settingsBtn.classList.remove('active');
    settingsBtn.textContent = 'AI';
  }
}

// Settings UI
const settingsBtn = document.getElementById('settings-btn');
const settingsOverlay = document.getElementById('settings-overlay');
const settingsClose = document.getElementById('settings-close');
const aiToggle = document.getElementById('ai-toggle');
const apiKeyInput = document.getElementById('api-key-input');
const aiStatus = document.getElementById('ai-status');
const settingsSave = document.getElementById('settings-save');

updateAIBtnState();

function updateAIStatusUI() {
  if (aiToggle.checked) {
    aiStatus.textContent = 'Zapnuto';
    aiStatus.className = 'active';
  } else {
    aiStatus.textContent = 'Vypnuto';
    aiStatus.className = '';
  }
}

settingsBtn.addEventListener('click', () => {
  aiToggle.checked = aiSettings.enabled;
  apiKeyInput.value = aiSettings.apiKey;
  updateAIStatusUI();
  settingsOverlay.classList.remove('hidden');
});

settingsClose.addEventListener('click', () => {
  settingsOverlay.classList.add('hidden');
});

settingsOverlay.addEventListener('click', (e) => {
  if (e.target === settingsOverlay) settingsOverlay.classList.add('hidden');
});

settingsSave.addEventListener('click', () => {
  aiSettings.enabled = aiToggle.checked;
  aiSettings.apiKey = apiKeyInput.value.trim();
  saveAISettings();
  updateAIBtnState();
  settingsOverlay.classList.add('hidden');
});

aiToggle.addEventListener('change', updateAIStatusUI);

function buildAIPrompt(userCSS, challenge) {
  const checksDesc = challenge.checks.map((c, i) =>
    `${i + 1}. "${c.s}" by měl mít vlastnost "${c.p}"` +
    (c.compare ? ` (větší než hodnota na "${c.compare.target}")` : '') +
    (c.propertyOnly ? ` (libovolná hodnota)` : ` (očekáváno: "${c.v}")`) +
    (c.accept ? ` (alternativy: ${c.accept.join(', ')})` : '')
  ).join('\n');

  return `Jsi hodnotitel CSS cvičení pro začátečníky.

ZADÁNÍ:
${challenge.desc}

CO SE KONTROLUJE:
${checksDesc}

CSS UŽIVATELE:
\`\`\`css
${userCSS}
\`\`\`

Vyhodnoť, zda toto CSS správně řeší zadání.
Buď shovívavý - pokud existuje více způsobů, jak dosáhnout stejného výsledku, uznej všechny.

ODPOVĚZ JEN TÍMTO JSON (žádný další text):
{
  "passed": boolean,
  "score": "perfect" | "partial" | "wrong",
  "reason": "stručné vysvětlení česky (max 2 věty)",
  "correctCount": číslo (1 = vše správně, 0 = nic),
  "totalCount": 1
}`;
}

async function evaluateWithAI(userCSS, challenge) {
  const prompt = buildAIPrompt(userCSS, challenge);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    // Current Gemini models as of 2026
    // gemini-1.5-flash and older are deprecated for new API keys
    const models = [
      'v1/models/gemini-2.5-flash',
      'v1/models/gemini-2.0-flash',
      'v1/models/gemini-2.5-flash-lite',
      'v1beta/models/gemini-2.5-flash',
      'v1/models/gemini-3.5-flash',
    ];

    let lastErr = null;
    let response = null;

    for (const model of models) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/${model}:generateContent?key=${aiSettings.apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }]
            }),
            signal: controller.signal
          }
        );

        if (res.ok) {
          response = res;
          break;
        }

        const errText = await res.text().catch(() => '');
        lastErr = new Error(`API ${res.status} (${model}): ${errText}`);
      } catch (e) {
        if (e.name === 'AbortError') throw e;
        lastErr = e;
      }
    }

    clearTimeout(timeout);

    if (!response) throw lastErr || new Error('Všechny modely selhaly');

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    if (!text) throw new Error('AI nevrátila žádnou odpověď');

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('AI nevrátila validní JSON');

    const parsed = JSON.parse(jsonMatch[0]);

    return {
      score:
        parsed.score === 'perfect' ? 20 :
        parsed.score === 'partial' ? 10 :
        -5,
      correct: parsed.passed ? parsed.correctCount || 1 : 0,
      total: parsed.totalCount || 1,
      reason: parsed.score || 'wrong',
      details: [],
      aiReason: parsed.reason || '',
      aiFeedback: true,
    };
  } catch (err) {
    clearTimeout(timeout);
    throw err;
  }
}

// Patch handleSubmit to support AI evaluation
const _origHandleSubmit = handleSubmit;

// Remove the old listener and re-attach after override
submitBtn.removeEventListener('click', _origHandleSubmit);

handleSubmit = async function() {
  if (state.submitted) return;

  const ch = state.challenges[state.currentIndex];
  let result;

  if (aiSettings.enabled && aiSettings.apiKey) {
    resultBox.className = 'partial';
    resultBox.classList.remove('hidden');
    resultText.textContent = '🤖 AI vyhodnocuje...';
    submitBtn.disabled = true;

    try {
      result = await evaluateWithAI(cssInput.value, ch);
    } catch (e) {
      console.warn('AI selhalo, používám lokální evaluation:', e);
      result = evaluateSolution(cssInput.value, ch);
    }
  } else {
    result = evaluateSolution(cssInput.value, ch);
  }

  state.submitted = true;
  state.result = result;
  submitBtn.disabled = true;

  if (result.score === 20) state.perfect++;
  state.score += result.score;
  scoreEl.textContent = state.score;
  updateTeacherFromResult(result);

  resultBox.classList.remove('hidden', 'success', 'error', 'partial');

  if (result.aiFeedback) {
    if (result.reason === 'perfect') {
      resultBox.className = 'success';
      resultText.textContent = `✅ Perfektní! ${result.aiReason}`;
    } else if (result.reason === 'partial') {
      resultBox.className = 'partial';
      resultText.textContent = `⚠️ ${result.aiReason}`;
    } else {
      resultBox.className = 'error';
      resultText.textContent = `❌ ${result.aiReason}`;
    }
  } else if (result.reason === 'perfect') {
    resultBox.className = 'success';
    resultText.textContent = `✅ Perfektní! Získáváš ${result.score} bodů!`;
  } else if (result.reason === 'partial') {
    resultBox.className = 'partial';
    resultText.textContent = `⚠️ ${result.correct} z ${result.total} správně. Získáváš ${result.score} bodů.`;
  } else if (result.reason === 'empty') {
    resultBox.className = 'error';
    resultText.textContent = '⏳ Nezadal/a jsi žádné CSS. 0 bodů.';
  } else if (result.reason === 'syntax') {
    resultBox.className = 'error';
    resultText.textContent = '❌ Syntaxe CSS není platná (žádné platné pravidlo). Ztrácíš 5 bodů.';
  } else {
    resultBox.className = 'error';
    resultText.textContent = '❌ Žádný z kontrolovaných CSS selektorů nebyl nalezen. Ztrácíš 5 bodů.';
  }

  detailBtn.classList.remove('hidden');

  setTimeout(() => {
    nextBtn.disabled = false;
  }, 500);
};

// Re-attach event listener with the new AI-aware handleSubmit
submitBtn.addEventListener('click', handleSubmit);
