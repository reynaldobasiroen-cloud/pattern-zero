/* ============================================================
   PATTERN ZERO — app / flow / scoring engine (v0.1)
   Structured scoring = decision layer. (No AI engine needed yet.)
   ============================================================ */

/* ---------- state ---------- */
const state = {
  area: null,          // area key (love/money/career/business/life/unknown)
  bank: [],            // loaded question list
  index: 0,
  scores: {},          // { patternKey: total }
  answers: [],         // array of chosen option index
  result: null,        // { primary, secondary, strength, pattern }
  unlocked: false,
};

/* ---------- helpers ---------- */
function $(id) { return document.getElementById(id); }

function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function go(id) { showView(id); }

/* ---------- area selection ---------- */
function selectArea(key) {
  state.area = key;
  const area = AREAS[key];
  state.bank = QUESTIONS[area.bank] || [];
  state.index = 0;
  state.scores = {};
  state.answers = [];
  state.unlocked = false;

  $('intro-area').textContent = area.label;
  $('intro-count').textContent = state.bank.length;
  showView('v-intro');
}

/* ---------- assessment ---------- */
function startAssessment() {
  state.index = 0;
  renderQuestion();
  showView('v-question');
}

function renderQuestion() {
  const q = state.bank[state.index];
  const total = state.bank.length;
  const n = state.index + 1;
  const area = AREAS[state.area];

  $('q-progress').textContent = String(n).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
  $('q-bar-fill').style.width = ((state.index) / total * 100) + '%';
  $('q-area').textContent = area.label;
  $('q-text').textContent = q.text;
  $('q-micro').textContent = MICROCOPY[state.index % MICROCOPY.length];

  const letters = ['A', 'B', 'C', 'D', 'E'];
  const wrap = $('q-options');
  wrap.innerHTML = '';
  q.options.forEach((opt, i) => {
    const b = document.createElement('button');
    b.className = 'q-opt';
    b.setAttribute('data-i', i);
    b.innerHTML = '<span class="opt-letter">' + letters[i] + '</span><span class="opt-text">' + opt.t + '</span>';
    b.addEventListener('click', () => chooseOption(i));
    wrap.appendChild(b);
  });
}

function chooseOption(i) {
  const q = state.bank[state.index];
  const opt = q.options[i];

  // lock selection + brief reveal before advancing
  const buttons = document.querySelectorAll('.q-opt');
  buttons.forEach(b => b.disabled = true);
  const sel = document.querySelector('.q-opt[data-i="' + i + '"]');
  if (sel) sel.classList.add('sel');

  // tally scores
  for (const key in opt.s) {
    state.scores[key] = (state.scores[key] || 0) + opt.s[key];
  }
  state.answers.push(i);

  // advance bar
  const total = state.bank.length;
  $('q-bar-fill').style.width = ((state.index + 1) / total * 100) + '%';

  setTimeout(() => {
    if (state.index + 1 < state.bank.length) {
      state.index++;
      renderQuestion();
    } else {
      finishAssessment();
    }
  }, 320);
}

function finishAssessment() {
  computeResult();
  showView('v-processing');
  // 3s "reading your pattern"
  setTimeout(() => {
    renderFreeResult();
    showView('v-free');
  }, 3000);
}

/* ---------- scoring ---------- */
function computeResult() {
  const patternSet = PATTERNS[AREAS[state.area].patterns];
  const keys = Object.keys(patternSet);

  let ranked = keys
    .map(k => ({ key: k, score: state.scores[k] || 0 }))
    .sort((a, b) => b.score - a.score);

  const primary = ranked[0];
  const secondary = ranked[1];

  // believable strength 70–93%
  let strength = 72;
  if (primary.score > 0) {
    const gap = primary.score - secondary.score;
    strength = Math.round(74 + (gap / (primary.score + secondary.score + 1)) * 18);
    strength = Math.min(93, Math.max(70, strength));
  }

  state.result = {
    primary: primary.key,
    secondary: secondary.key,
    strength,
    pattern: patternSet[primary.key],
    secondaryPattern: patternSet[secondary.key],
    primaryScore: primary.score,
    secondaryScore: secondary.score,
  };
}

/* ---------- free result ---------- */
function renderFreeResult() {
  const r = state.result;
  const p = r.pattern;

  $('free-name').textContent = p.name;
  $('free-strength').textContent = 'PATTERN STRENGTH — ' + r.strength + '%';

  const lines = p.lines.map(t => '<p>' + t + '</p>').join('');
  $('free-lines').innerHTML = lines;

  const loop = p.loop_short.map((n, i) =>
    '<div class="loop-node' + (i === p.loop_short.length - 1 ? ' repeat' : '') + '">' + n + '</div>'
  ).join('');
  $('free-loop').innerHTML = loop;
}

/* ---------- paywall / checkout ---------- */
function openCheckout() {
  $('co-price').textContent = CONFIG.priceLabel;
  $('co-total').textContent = CONFIG.priceLabel;
  $('pay-btn').textContent = 'BAYAR ' + CONFIG.priceLabel + ' →';
  $('checkout-body').classList.remove('hidden');
  $('checkout-success').classList.add('hidden');
  $('checkout-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  $('checkout-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function pay() {
  $('pay-btn').textContent = 'MEMPROSES…';
  $('pay-btn').disabled = true;
  setTimeout(() => {
    $('checkout-body').classList.add('hidden');
    $('checkout-success').classList.remove('hidden');
    state.unlocked = true;
  }, 1400);
}

function unlock() {
  closeCheckout();
  renderFullReport();
  showView('v-full');
}

/* ---------- full report ---------- */
function renderFullReport() {
  const r = state.result;
  const p = r.pattern;
  const s = r.secondaryPattern;

  const loopFull = p.loop_full.map((n, i) => {
    const isRepeat = i === p.loop_full.length - 1;
    return '<div class="node' + (isRepeat ? ' repeat' : '') + '">' +
      '<span>' + n + '</span><span class="idx">' + String(i + 1).padStart(2, '0') + '</span></div>' +
      (i < p.loop_full.length - 1 ? '<div class="arrow">↓</div>' : '');
  }).join('');

  const protocol = buildProtocol(p);

  const html =
    '<div class="full-head">' +
      '<p class="mono-label accent">PATTERN REPORT · ' + AREAS[state.area].label + '</p>' +
      '<h2 class="pattern-name">' + p.name + '</h2>' +
      '<p class="pattern-strength mono">PATTERN STRENGTH — ' + r.strength + '% · SECONDARY: ' + s.name + '</p>' +
    '</div>' +

    '<section class="full-sec">' +
      '<p class="fs-num">01 — YOUR CORE PATTERN</p>' +
      '<h3 class="fs-title">' + p.name + '</h3>' +
      '<p class="body">' + p.desc + '</p>' +
      '<p class="body"><strong>Pattern strength ' + r.strength + '%.</strong> Pola sekunder kamu cenderung ke arah ' + s.name + ' — tapi sinyal yang paling dominan jelas ke ' + p.name + '.</p>' +
    '</section>' +

    '<section class="full-sec">' +
      '<p class="fs-num">02 — YOUR REPEATING LOOP</p>' +
      '<h3 class="fs-title">Begini loop-nya berputar.</h3>' +
      '<div class="loop-full">' + loopFull + '</div>' +
      '<p class="body">Loop ini bukan sesuatu yang terjadi pada kamu. Ini sesuatu yang kamu jalani — dan selama belum diputus, dia akan terus berputar.</p>' +
    '</section>' +

    '<section class="full-sec">' +
      '<p class="fs-num">03 — WHY IT KEEPS HAPPENING</p>' +
      '<h3 class="fs-title">Kenapa ini terus terjadi.</h3>' +
      '<p class="body">' + p.why + '</p>' +
    '</section>' +

    '<section class="full-sec">' +
      '<p class="fs-num">04 — YOUR BLIND SPOT</p>' +
      '<h3 class="fs-title">Bagian yang tidak kamu lihat.</h3>' +
      '<p class="fs-highlight">' + p.blind_spot + '</p>' +
    '</section>' +

    '<section class="full-sec">' +
      '<p class="fs-num">05 — YOUR BREAKING POINT</p>' +
      '<h3 class="fs-title">Di sinilah kamu bisa memutusnya.</h3>' +
      '<p class="body">Jangan coba mengubah seluruh pola sekaligus. Ubah satu keputusan — tepat di titik yang paling strategis.</p>' +
      '<p class="fs-highlight">' + p.breaking_point + '</p>' +
    '</section>' +

    '<section class="full-sec">' +
      '<p class="fs-num">06 — YOUR NEW PATTERN</p>' +
      '<h3 class="fs-title">Ganti satu kalimat di kepala kamu.</h3>' +
      '<div class="oldnew">' +
        '<div class="row"><span class="tag">OLD</span><span class="old">' + p.new_old + '</span></div>' +
        '<div class="row"><span class="tag">NEW</span><span class="new">' + p.new_new + '</span></div>' +
      '</div>' +
    '</section>' +

    '<section class="full-sec">' +
      '<p class="fs-num">07 — 30-DAY PATTERN RESET</p>' +
      '<h3 class="fs-title">Protokol 30 hari.</h3>' +
      '<p class="body">Empat minggu. Satu fokus tiap minggu. Ini bukan soal jadi orang baru — ini soal nge-break satu loop lama.</p>' +
      protocol +
    '</section>' +

    '<div class="restart">' +
      '<button onclick="restart()">↺ MULAI LAGI / PILIH AREA LAIN</button>' +
    '</div>';

  $('full-content').innerHTML = html;
}

function buildProtocol(p) {
  const trigger = p.loop_short[0].replace('TRIGGER: ', '');
  const weeks = [
    { name: 'Awareness', w: 'WEEK 1',
      obj: 'Kenali trigger-mu: <em>' + trigger.toLowerCase() + '</em>.',
      beh: 'Catat tiap kali dorongan lama muncul — tanpa menghakimi, tanpa mengubah apa pun dulu.',
      ref: 'Kapan kamu paling sering masuk ke loop ini? Apa yang terjadi tepat sebelumnya?',
      act: 'Tulis 3 kejadian minggu ini di mana pola lama muncul.' },
    { name: 'Interruption', w: 'WEEK 2',
      obj: 'Putus loop di titik breaking point-mu.',
      beh: 'Begitu sadar sedang masuk loop, pause 10 detik. Jangan langsung merespons.',
      ref: 'Apa yang mau kamu lakukan vs. apa yang biasanya kamu lakukan?',
      act: 'Ganti satu respons lama hari ini — sekali saja dulu.' },
    { name: 'Replacement', w: 'WEEK 3',
      obj: 'Pasang respons baru: <em>' + p.new_new + '</em>',
      beh: 'Praktik respons baru minimal sekali sehari, sekecil apa pun.',
      ref: 'Apa perbedaan hasil yang kamu rasakan?',
      act: 'Catat satu kemenangan kecil tiap hari.' },
    { name: 'Stabilization', w: 'WEEK 4',
      obj: 'Kunci pola baru supaya tidak kembali lagi.',
      beh: 'Review ulang sebulan penuh: kapan kamu nyaris kembali ke pola lama?',
      ref: 'Kapan kamu kembali ke pola lama, dan kenapa?',
      act: 'Buat satu aturan 1 kalimat buat diri kamu sendiri — dan pegang itu.' },
  ];
  return weeks.map(wk =>
    '<div class="week">' +
      '<div class="week-head"><span class="wk">' + wk.w + '</span><span class="wk-name">' + wk.name + '</span></div>' +
      '<p><b>Objective</b>' + wk.obj + '</p>' +
      '<p><b>Behavior</b>' + wk.beh + '</p>' +
      '<p><b>Reflection</b>' + wk.ref + '</p>' +
      '<p><b>Measurable action</b>' + wk.act + '</p>' +
    '</div>'
  ).join('');
}

/* ---------- restart ---------- */
function restart() {
  state.area = null;
  state.bank = [];
  state.index = 0;
  state.scores = {};
  state.answers = [];
  state.result = null;
  state.unlocked = false;
  closeCheckout();
  showView('v-landing');
}
