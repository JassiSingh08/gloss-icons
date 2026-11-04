// A bold stroke alphabet drawn as paths, so labels never depend on fonts (no <text> anywhere).
// Geometric, slightly condensed, round caps and joins; letters, digits, a few symbols, and the
// kana/kanji the Japanese buttons need.
//
//   const g = require('../src/parts/glyph');
//   g.path('OK', { x: 48, y: 47, size: 30 })        -> { d, width, size, weight }
//   g.draw('OK', { x: 48, y: 47, size: 30, color: '#fff', shadow: '#3D0003' })   -> markup
//   g.tube(c, d, { width: 7, palette: 'silver' })   -> any stroked path as a glossy solid
//   g.band([[x,y], ...], width)                    -> a thick polyline as one fill path
//
// x, y is the centre of the cap height. `size` is the visible cap height including the stroke,
// `weight` the stroke width (default size * 0.2 for Latin, size * 0.1 for kanji). `track`
// is the visible gap between glyphs (default weight * 0.5). `maxWidth` shrinks size and weight
// together until the visible width fits. Kanji and kana use a square em with the same `size`.

// Each glyph is drawn on a 10-unit cap height, y = 0 at the top, 10 on the baseline.
// [advance width, path]
const LATIN = {
  A: [7, 'M0 10 L3.5 0 L7 10 M1.35 6.4 L5.65 6.4'],
  B: [5.9, 'M0 4.8 L3.2 4.8 A2.6 2.6 0 0 1 3.2 10 L0 10 L0 0 L2.9 0 A2.4 2.4 0 0 1 2.9 4.8'],
  C: [5.9, 'M5.78 1.55 A3.1 3.1 0 0 0 0 3.1 L0 6.9 A3.1 3.1 0 0 0 5.78 8.45'],
  D: [6.2, 'M0 0 L0 10 L2.8 10 A3.4 3.4 0 0 0 6.2 6.6 L6.2 3.4 A3.4 3.4 0 0 0 2.8 0 Z'],
  E: [5.2, 'M5.2 0 L0 0 L0 10 L5.2 10 M0 4.9 L4.5 4.9'],
  F: [5, 'M5 0 L0 0 L0 10 M0 4.9 L4.3 4.9'],
  G: [6.4, 'M5.97 1.6 A3.2 3.2 0 0 0 0 3.2 L0 6.8 A3.2 3.2 0 0 0 6.4 6.8 L6.4 5.3 L3.7 5.3'],
  H: [6.2, 'M0 0 L0 10 M6.2 0 L6.2 10 M0 4.9 L6.2 4.9'],
  I: [0, 'M0 0 L0 10'],
  J: [5, 'M5 0 L5 7.5 A2.5 2.5 0 0 1 0 7.5'],
  K: [6, 'M0 0 L0 10 M5.9 0 L0.3 6.2 M2.3 4 L6 10'],
  L: [5, 'M0 0 L0 10 L5 10'],
  M: [7.6, 'M0 10 L0 0 L3.8 6.4 L7.6 0 L7.6 10'],
  N: [6.2, 'M0 10 L0 0 L6.2 10 L6.2 0'],
  O: [6.4, 'M0 3.2 A3.2 3.2 0 0 1 6.4 3.2 L6.4 6.8 A3.2 3.2 0 0 1 0 6.8 Z'],
  P: [5.8, 'M0 10 L0 0 L3 0 A2.8 2.8 0 0 1 3 5.6 L0 5.6'],
  Q: [6.6, 'M0 3.2 A3.2 3.2 0 0 1 6.4 3.2 L6.4 6.8 A3.2 3.2 0 0 1 0 6.8 Z M3.9 7.2 L6.6 10.2'],
  R: [6, 'M0 10 L0 0 L3 0 A2.8 2.8 0 0 1 3 5.6 L0 5.6 M2.6 5.6 L6 10'],
  S: [6, 'M5.8 1.6 C5.2 0.5 4.2 0 3 0 C1.4 0 0.2 1 0.2 2.6 C0.2 4.4 1.8 4.7 3 5 C4.4 5.3 6 5.7 6 7.5 C6 9 4.7 10 3 10 C1.6 10 0.6 9.4 0 8.3'],
  T: [6.2, 'M0 0 L6.2 0 M3.1 0 L3.1 10'],
  U: [6.2, 'M0 0 L0 6.9 A3.1 3.1 0 0 0 6.2 6.9 L6.2 0'],
  V: [6.8, 'M0 0 L3.4 10 L6.8 0'],
  W: [9.2, 'M0 0 L2.3 10 L4.6 2.6 L6.9 10 L9.2 0'],
  X: [6.4, 'M0 0 L6.4 10 M6.4 0 L0 10'],
  Y: [6.6, 'M0 0 L3.3 5 L6.6 0 M3.3 5 L3.3 10'],
  Z: [6, 'M0 0 L6 0 L0 10 L6 10'],
  // Lowercase: x-height 7 (y 3 to 10), ascenders to the cap line.
  a: [5.6, 'M5.6 3.2 L5.6 10 M5.6 6.5 A2.8 3.5 0 1 0 0 6.5 A2.8 3.5 0 1 0 5.6 6.5'],
  b: [5.6, 'M0 0 L0 10 M0 6.5 A2.8 3.5 0 1 1 5.6 6.5 A2.8 3.5 0 1 1 0 6.5'],
  c: [5.2, 'M4.9 4.3 A2.7 3.5 0 1 0 4.9 8.7'],
  d: [5.6, 'M5.6 0 L5.6 10 M5.6 6.5 A2.8 3.5 0 1 0 0 6.5 A2.8 3.5 0 1 0 5.6 6.5'],
  0: [6, 'M0 3 A3 3 0 0 1 6 3 L6 7 A3 3 0 0 1 0 7 Z'],
  1: [3.3, 'M0 2.3 L3.3 0 L3.3 10'],
  2: [6, 'M0.2 2.8 C0.4 1 1.6 0 3 0 C4.7 0 5.9 1.1 5.9 2.8 C5.9 4.4 4.8 5.4 3.7 6.3 L0 10 L6 10'],
  3: [6, 'M0.4 0 L5.6 0 L2.7 3.8 C4.6 3.8 6 5 6 6.9 C6 8.8 4.6 10 3 10 C1.6 10 0.6 9.4 0 8.4'],
  4: [6.2, 'M4.6 10 L4.6 0 L0 7 L6.2 7'],
  5: [6, 'M5.6 0 L0.9 0 L0.5 4.4 C1.2 3.9 2 3.7 3 3.7 C4.8 3.7 6 5 6 6.85 C6 8.7 4.6 10 3 10 C1.6 10 0.6 9.4 0 8.4'],
  6: [6, 'M0 7 A3 3 0 1 0 6 7 A3 3 0 1 0 0 7 M0.2 5.95 L3.8 0'],
  7: [6, 'M0 0 L6 0 L2.2 10'],
  8: [6, 'M3 4.7 A2.35 2.35 0 1 1 3 0 A2.35 2.35 0 1 1 3 4.7 A2.65 2.65 0 1 1 3 10 A2.65 2.65 0 1 1 3 4.7 Z'],
  9: [6, 'M6 3 A3 3 0 1 0 0 3 A3 3 0 1 0 6 3 M5.8 4.05 L2.2 10'],
  '#': [7, 'M2.7 0.4 L1.8 9.6 M5.8 0.4 L4.9 9.6 M0.2 3.3 L7 3.3 M0 6.7 L6.8 6.7'],
  '*': [6.4, 'M3.2 1.4 L3.2 8.6 M0.08 3.2 L6.32 6.8 M0.08 6.8 L6.32 3.2'],
  '!': [0, 'M0 0 L0 6.4 M0 10 L0 10.01'],
  '?': [6, 'M0.1 2.8 C0.1 1 1.4 0 3 0 C4.6 0 6 1 6 2.8 C6 4.4 4.7 5 3.7 5.6 C3.1 6 3 6.5 3 7.1 M3 10 L3 10.01'],
  i: [0, 'M0 0.4 L0 0.41 M0 3.8 L0 10'],
  '+': [6, 'M0 5 L6 5 M3 2 L3 8'],
  '-': [4, 'M0 5.4 L4 5.4'],
  '.': [0, 'M0 10 L0 10.01'],
  '/': [5, 'M5 0 L0 10'],
  '%': [7, 'M6.6 0.2 L0.4 9.8 M1.6 0.2 A1.6 1.9 0 1 0 1.6 4 A1.6 1.9 0 1 0 1.6 0.2 Z M5.4 6 A1.6 1.9 0 1 0 5.4 9.8 A1.6 1.9 0 1 0 5.4 6 Z'],
  $: [6, 'M5.8 2.2 C5.2 1.2 4.2 0.8 3 0.8 C1.4 0.8 0.2 1.7 0.2 3.1 C0.2 4.7 1.8 5 3 5.3 C4.4 5.6 6 6 6 7.6 C6 8.9 4.7 9.8 3 9.8 C1.6 9.8 0.6 9.3 0 8.3 M3 -0.6 L3 11'],
  '¥': [6.6, 'M0 0 L3.3 5 L6.6 0 M3.3 5 L3.3 10 M0.9 5.6 L5.7 5.6 M0.9 7.8 L5.7 7.8'],
  ' ': [3, ''],
};

// Kana and kanji on a square 10 x 10 em, gothic (sans) strokes, no brush.
const CJK = {
  コ: [4.4, 'M0 1.8 L4.4 1.8 L4.4 8.4 L0 8.4'],
  サ: [10, 'M0.3 3.6 L9.7 3.6 M3.1 0.6 L3.1 6.4 M6.9 0.6 L6.9 5.2 Q6.9 8.6 3.4 9.8'],
  月: [10, 'M2.5 0.5 L8 0.5 L8 9 Q8 9.8 6.6 9.6 M2.5 0.5 L2.5 6 Q2.5 8.6 0.9 9.8 M2.5 3.5 L8 3.5 M2.5 6.4 L8 6.4'],
  有: [10, 'M0.3 2.3 L9.7 2.3 M4.7 0 Q3.7 5.2 0.5 8.8 M3.3 4.4 L3.3 9.9 M3.3 4.4 L8.5 4.4 L8.5 9.1 Q8.5 9.9 7.2 9.7 M3.3 6.2 L8.5 6.2 M3.3 8 L8.5 8'],
  指: [10, 'M0.2 2.9 L3.6 2.9 M2 0.1 L2 9.2 Q2 9.9 1.1 9.5 M0.2 7.2 L3.8 5.6 M5.1 0.1 L5.1 3.1 Q5.1 4 6.1 4 L9.6 4 L9.6 3 M8.9 0.6 L5.2 2.1 M5.4 5.6 L9.2 5.6 L9.2 9.9 L5.4 9.9 Z M5.4 7.75 L9.2 7.75'],
  得: [10, 'M2.6 0 Q1.8 1.6 0.2 2.8 M2.8 3.1 Q1.8 5 0.1 6.3 M1.8 4.6 L1.8 10 M4.4 0.2 L8.8 0.2 L8.8 3.4 L4.4 3.4 Z M4.4 1.8 L8.8 1.8 M3.6 4.7 L9.8 4.7 M3.6 6.5 L9.8 6.5 M8 4.7 L8 9.2 Q8 9.9 6.8 9.6 M4.9 7.7 L5.8 8.8'],
  割: [10, 'M3 0 L3 1 M0.4 2.3 L0.4 1.2 L5.6 1.2 L5.6 2.3 M1.1 3 L4.9 3 M1.4 4.3 L4.6 4.3 M0.2 5.6 L5.8 5.6 M3 1.9 L3 5.6 M1.1 6.8 L4.9 6.8 L4.9 9.8 L1.1 9.8 Z M7.1 1.4 L7.1 7.6 M9.3 0 L9.3 9.2 Q9.3 9.9 8.3 9.6'],
  無: [10, 'M3 0 Q2.4 1.3 0.8 2.4 M2.1 1.4 L9.2 1.4 M1.1 3.8 L9 3.8 M0.2 6.1 L9.8 6.1 M2.3 1.4 L2.3 6.1 M4.3 1.4 L4.3 6.1 M6 1.4 L6 6.1 M7.9 1.4 L7.9 6.1 M1.5 7.8 L0.6 9.7 M3.7 7.8 L3.5 9.7 M6 7.8 L6.4 9.7 M8.3 7.8 L9.3 9.7'],
  禁: [10, 'M0.4 1.5 L4.3 1.5 M2.4 0 L2.4 4.5 M2.3 1.8 Q1.6 3.4 0.2 4.4 M2.6 2.2 L3.9 3.6 M5.4 1.5 L9.7 1.5 M7.5 0 L7.5 4.5 M7.4 1.8 Q6.6 3.4 5.3 4.4 M7.6 1.8 Q8.5 3.4 9.8 4.4 M2.3 5.5 L7.7 5.5 M0.3 7 L9.7 7 M5 7 L5 9.3 Q5 9.9 4 9.6 M2.8 8.1 L1.4 9.4 M7.2 8.1 L8.6 9.4'],
  可: [10, 'M0.2 1.3 L9.8 1.3 M1.6 3.5 L5.8 3.5 L5.8 7.3 L1.6 7.3 Z M7.9 1.3 L7.9 9.2 Q7.9 9.9 6.4 9.6'],
  申: [10, 'M1.2 2 L8.8 2 L8.8 7.6 L1.2 7.6 Z M1.2 4.8 L8.8 4.8 M5 0 L5 10'],
  合: [10, 'M5 0.2 Q2.9 2.8 0.2 4.4 M5 0.2 Q7.1 2.8 9.8 4.4 M3.1 4.3 L6.9 4.3 M2.2 6 L7.8 6 L7.8 9.8 L2.2 9.8 Z'],
  空: [10, 'M5 0 L5 1.1 M0.5 2.8 L0.5 1.5 L9.5 1.5 L9.5 2.8 M3.8 2.5 Q3.4 4 1.6 4.9 M6.1 2.5 Q6.6 4 8.5 4.9 M2 6.2 L8 6.2 M5 6.2 L5 9.5 M0.4 9.5 L9.6 9.5'],
  祝: [10, 'M1.8 0 L2.5 1 M0.5 2.6 L3.7 2.6 Q2.7 4.9 0.2 6.6 M2.3 4.5 L2.3 10 M2.8 5.8 L3.8 6.8 M5 0.6 L9.2 0.6 L9.2 4.6 L5 4.6 Z M6 4.6 Q5.8 8.2 4.1 9.7 M8.1 4.6 L8.1 8.8 Q8.1 9.6 8.9 9.6 L9.8 9.6 L9.8 8.6'],
  秘: [10, 'M3.6 0.1 Q2.4 0.7 0.5 0.9 M0.2 3 L4 3 M2.2 0.8 L2.2 10 M2 3.4 Q1.4 5.6 0.2 7.2 M2.6 4 L3.8 5.6 M6.4 0.4 L7.2 1.5 M5.6 3.4 L5.6 8.6 Q5.6 9.6 6.7 9.6 L8.4 9.6 Q9.5 9.6 9.6 8 M4.7 5 L4.2 7.2 M8.6 3.8 L9.6 6.2 M8.9 2 L4.7 9.9'],
  営: [10, 'M2 0.1 L2.6 1.2 M5 0 L5 1.2 M8.1 0.1 L7.4 1.2 M0.6 3.1 L0.6 2 L9.4 2 L9.4 3.1 M2.7 3.4 L7.3 3.4 L7.3 5.4 L2.7 5.4 Z M1.9 6.8 L8.1 6.8 L8.1 9.9 L1.9 9.9 Z'],
  満: [10, 'M0.7 0.5 L1.7 1.5 M0.3 3.6 L1.3 4.6 M0.3 9.5 L1.7 6.6 M3.1 1.6 L9.8 1.6 M5 0.1 L5 2.9 M7.9 0.1 L7.9 2.9 M3.4 3.9 L9.6 3.9 M6.5 3.9 L6.5 8.4 M3.8 10 L3.8 5.4 L9.2 5.4 L9.2 9.3 Q9.2 9.9 8.3 9.9 M5 6.6 L5 8.6 L8 8.6 L8 6.6'],
};

const GLYPHS = { ...LATIN, ...CJK };
const isCJK = (s) => [...s].some((ch) => CJK[ch] && ch !== ' ');
const n = (v) => +v.toFixed(2);

// Scale a glyph path (M L Q C A Z, absolute only) to the page.
function place(d, ox, oy, s) {
  const tokens = d.match(/[A-Za-z]|-?\d*\.?\d+(?:e-?\d+)?/g) || [];
  let out = '';
  let cmd = '';
  let args = [];
  const flush = () => {
    if (!cmd) return;
    if (cmd === 'Z') out += 'Z ';
    else if (cmd === 'A') {
      for (let i = 0; i < args.length; i += 7) {
        const [rx, ry, rot, large, sweep, x, y] = args.slice(i, i + 7);
        out += `A${n(rx * s)} ${n(ry * s)} ${rot} ${large} ${sweep} ${n(ox + x * s)} ${n(oy + y * s)} `;
      }
    } else {
      const pts = [];
      for (let i = 0; i < args.length; i += 2) pts.push(`${n(ox + args[i] * s)} ${n(oy + args[i + 1] * s)}`);
      out += `${cmd}${pts.join(' ')} `;
    }
  };
  for (const t of tokens) {
    if (/[A-Za-z]/.test(t)) {
      flush();
      cmd = t;
      args = [];
    } else args.push(+t);
  }
  flush();
  return out.trim();
}

function measure(chars, size, weight, track) {
  const s = (size - weight) / 10;
  const advances = chars.map((ch) => (GLYPHS[ch] ? GLYPHS[ch][0] : 6) * s);
  const inner = advances.reduce((a, b) => a + b, 0) + (chars.length - 1) * (weight + track);
  return { s, advances, inner, width: inner + weight };
}

function path(text, { x = 48, y = 48, size = 30, weight, track, maxWidth } = {}) {
  const chars = [...String(text)];
  const cjk = isCJK(text);
  weight ??= size * (cjk ? 0.1 : 0.2);
  track ??= weight * (cjk ? 0.3 : 0.5);
  let m = measure(chars, size, weight, track);
  if (maxWidth && m.width > maxWidth) {
    const k = maxWidth / m.width;
    size *= k;
    weight *= k;
    track *= k;
    m = measure(chars, size, weight, track);
  }
  let cx = x - m.inner / 2;
  const top = y - (size - weight) / 2;
  const parts = chars.map((ch, i) => {
    const g = GLYPHS[ch];
    const p = g && g[1] ? place(g[1], cx, top, m.s) : '';
    cx += m.advances[i] + weight + track;
    return p;
  });
  return { d: parts.filter(Boolean).join(' '), width: n(m.width), size: n(size), weight: n(weight) };
}

const STROKE = 'fill="none" stroke-linecap="round" stroke-linejoin="round"';

// Lettering with an optional drop shadow under it (the badge-18 look).
function draw(text, opts = {}) {
  const { color = '#fff', shadow = null, shadowOpacity = 0.45 } = opts;
  const p = path(text, opts);
  const dx = n(p.weight * 0.14);
  const dy = n(p.weight * 0.22);
  const under = shadow
    ? `<path d="${p.d}" stroke="${shadow}" stroke-opacity="${shadowOpacity}" stroke-width="${p.weight}" ${STROKE} transform="translate(${dx} ${dy})"/>`
    : '';
  return `${under}<path d="${p.d}" stroke="${color}" stroke-width="${p.weight}" ${STROKE}/>`;
}

// Bounding box of a path's coordinates (control points included: close enough for gradients).
function bbox(d) {
  const xs = [];
  const ys = [];
  // Arc parameters would pollute the box, so read only pairs that follow M/L/Q/C or close an A.
  const re = /([MLQCA])([^MLQCAZ]*)/g;
  let mm;
  while ((mm = re.exec(d))) {
    const a = (mm[2].match(/-?\d*\.?\d+/g) || []).map(Number);
    if (mm[1] === 'A') for (let i = 0; i + 6 < a.length; i += 7) { xs.push(a[i + 5]); ys.push(a[i + 6]); }
    else for (let i = 0; i + 1 < a.length; i += 2) { xs.push(a[i]); ys.push(a[i + 1]); }
  }
  if (!xs.length) return [0, 0, 96, 96];
  return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
}

// A stroked path rendered as a glossy solid: outline, light from the top left, an inner
// highlight along the upper-left edge, and the engine's window streak, all kept inside the
// stroke with a mask. Use it for marks that are lines rather than silhouettes (loops, ticks,
// letters standing alone). `name` must be unique within the icon.
function tube(c, d, { width = 7, palette = 'silver', name = 't', outline = true } = {}) {
  const r = c.ramp(palette);
  const [x0, y0, x1, y1] = bbox(d);
  const pad = width / 2;
  const g = c.id(`${name}-g`);
  const m = c.id(`${name}-m`);
  const s = c.id(`${name}-s`);
  c.def(`<linearGradient id="${g}" gradientUnits="userSpaceOnUse" x1="${n(x0 - pad)}" y1="${n(y0 - pad)}" x2="${n(x1 + pad)}" y2="${n(y1 + pad)}"><stop offset="0" stop-color="${r[0]}"/><stop offset=".4" stop-color="${r[1]}"/><stop offset="1" stop-color="${r[2]}"/></linearGradient>
    <linearGradient id="${s}" x1="0" y1="0" x2="1" y2="1"><stop offset=".2" stop-color="#fff" stop-opacity="0"/><stop offset=".32" stop-color="#fff" stop-opacity=".45"/><stop offset=".44" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <mask id="${m}" maskUnits="userSpaceOnUse" x="0" y="0" width="96" height="96"><path d="${d}" stroke="#fff" stroke-width="${width}" ${STROKE}/></mask>`);
  const hi = n(width * 0.2);
  return `${outline ? `<path d="${d}" stroke="${r[3]}" stroke-opacity=".7" stroke-width="${n(width + 1.4)}" ${STROKE}/>` : ''}
    <path d="${d}" stroke="url(#${g})" stroke-width="${width}" ${STROKE}/>
    <g mask="url(#${m})">
      <path d="${d}" stroke="${r[3]}" stroke-opacity=".35" stroke-width="${n(width * 0.5)}" ${STROKE} transform="translate(${n(width * 0.3)} ${n(width * 0.4)})"/>
      <path d="${d}" stroke="#fff" stroke-opacity=".55" stroke-width="${n(width * 0.28)}" ${STROKE} transform="translate(${-hi} ${-hi})"/>
      <rect x="${n(x0 - pad)}" y="${n(y0 - pad)}" width="${n(x1 - x0 + width)}" height="${n(y1 - y0 + width)}" fill="url(#${s})"/>
    </g>`;
}


// A thick polyline as one closed fill path: round caps, mitred joins. For a silhouette (a tick,
// a bent arrow shaft) that should get the engine's outline and gloss like any body.
function band(pts, width) {
  const h = width / 2;
  const nrm = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const dx = pts[i + 1][0] - pts[i][0];
    const dy = pts[i + 1][1] - pts[i][1];
    const len = Math.hypot(dx, dy);
    nrm.push([-dy / len, dx / len]);
  }
  const off = (i, side) => {
    const a = nrm[Math.max(0, i - 1)];
    const b = nrm[Math.min(nrm.length - 1, i)];
    let m = [a[0] + b[0], a[1] + b[1]];
    const ml = Math.hypot(...m);
    m = [m[0] / ml, m[1] / ml];
    const k = h / (m[0] * b[0] + m[1] * b[1]);
    return `${n(pts[i][0] + side * k * m[0])} ${n(pts[i][1] + side * k * m[1])}`;
  };
  const idx = pts.map((_, i) => i);
  const left = idx.map((i) => off(i, 1));
  const right = idx.reverse().map((i) => off(i, -1));
  return `M${left.join(' L')} A${h} ${h} 0 0 0 ${right.join(' L')} A${h} ${h} 0 0 0 ${left[0]} Z`;
}

module.exports = { path, draw, tube, band, place, bbox, GLYPHS, LATIN, CJK };
