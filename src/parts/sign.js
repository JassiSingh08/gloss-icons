// Signs and symbols: a glossy enamel tile or disc with a bold embossed symbol on top (the look of
// badge-18), plus freestanding glossy glyphs whose silhouette is built from a centre line.
//
//   const s = require('../src/parts/sign');
//   s.TILE, s.DISC                          bodies: rounded square / disc, both centred on 48 50
//   s.tile(c, 'blue')  s.disc(c, 'red')     the enamel face with its recessed inner panel
//   s.emboss(c, 'blue', (k) => markup)      the symbol twice: a soft drop in the shadow colour,
//                                           then light; `k` is the colour to paint with
//   s.ST(w)                                 attributes for a round-capped stroke of width w
//   s.word('BACK', 48, 64, 12, 3.4)         a path `d` of drawn letters, centred on x, y
//   s.head(x, y, deg, len, half)            a filled arrowhead with its tip at x, y
//   s.tube(points, hw, { caps })            outline of a thick stroke along a centre line
//   s.arc(cx, cy, r, a0, a1, n)  s.line(p, q, n)   centre-line samples (degrees, y down)
//   s.noSign(c, (k) => markup)              white disc with a red ring and slash over a pictogram
const n = (v) => +v.toFixed(2);

// One face colour per series, so each family reads as a set.
const SERIES = { transport: 'blue', arrow: 'slate', zodiac: 'purple', religion: 'navy', gender: 'magenta', currency: 'green' };

const rad = (d) => (d * Math.PI) / 180;

const TILE = 'M30 16 L66 16 Q82 16 82 32 L82 68 Q82 84 66 84 L30 84 Q14 84 14 68 L14 32 Q14 16 30 16 Z';
const PANEL = 'M32 21 L64 21 Q77 21 77 34 L77 66 Q77 79 64 79 L32 79 Q19 79 19 66 L19 34 Q19 21 32 21 Z';
const DISC = 'M48 18 A32 32 0 1 1 47.99 18 Z';

const ST = (w) => `fill="none" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;

// Recessed panel: lit from the middle, never as pale as the rim, so a white symbol always reads.
// Pale ramps (slate) pass deep so the panel sits a step darker.
const DEEP = { slate: true, grey: true, sky: true };
function panel(c, pal) {
  const [lt, md, dp] = c.ramp(pal);
  const [a, b] = DEEP[pal] ? [mix(md, dp, 0.15), mix(md, dp, 0.55)] : [mix(lt, md, 0.55), md];
  c.def(`<radialGradient id="${c.id('panel')}" cx="0.5" cy="0.6" r="0.75"><stop offset="0" stop-color="${a}"/><stop offset="0.55" stop-color="${b}"/><stop offset="1" stop-color="${dp}"/></radialGradient>`);
  return `url(#${c.id('panel')})`;
}

function tile(c, pal) {
  const [, , , dk] = c.ramp(pal);
  return `<path d="${TILE}" fill="${c.radial('tile', pal, 0.3, 0.2)}"/>
    <path d="${PANEL}" fill="${panel(c, pal)}"/>
    <path d="${PANEL}" fill="none" stroke="${dk}" stroke-opacity=".45" stroke-width="1.6"/>
    <path d="M31 19.6 L65 19.6 Q78.4 19.6 78.4 33 L78.4 67 Q78.4 80.4 65 80.4 L31 80.4 Q17.6 80.4 17.6 67 L17.6 33 Q17.6 19.6 31 19.6 Z" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="1"/>`;
}

function disc(c, pal) {
  const [, , , dk] = c.ramp(pal);
  return `<path d="${DISC}" fill="${c.radial('disc', pal, 0.32, 0.25)}"/>
    <circle cx="48" cy="50" r="25.5" fill="${panel(c, pal)}"/>
    <circle cx="48" cy="50" r="25.5" fill="none" stroke="${dk}" stroke-opacity=".45" stroke-width="1.6"/>
    <circle cx="48" cy="50" r="27" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="1"/>`;
}

// The symbol's own light: pure white at the top, a cool tint of the face colour at the bottom.
function emboss(c, pal, fn, { dx = 0.8, dy = 1.2, op = 0.4, light = true } = {}) {
  const [lt, , , dk] = c.ramp(pal);
  let k = '#FFFFFF';
  if (light) {
    c.def(`<linearGradient id="${c.id('ink')}" gradientUnits="userSpaceOnUse" x1="0" y1="22" x2="0" y2="80"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="${mix('#FFFFFF', lt, 0.45)}"/></linearGradient>`);
    k = `url(#${c.id('ink')})`;
  }
  return `<g transform="translate(${dx} ${dy})" opacity="${op}">${fn(dk)}</g>${fn(k)}`;
}

// Dark ink symbol for light faces (warning yellow, white discs).
function inkEmboss(fn, ink = '#2A1508', { op = 0.35, hi = true } = {}) {
  return `${hi ? `<g transform="translate(-.5 -.7)" opacity="${op}">${fn('#FFFFFF')}</g>` : ''}${fn(ink)}`;
}

function mix(a, b, t) {
  const p = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [x, y] = [p(a), p(b)];
  return `#${x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, '0')).join('')}`;
}

// "No ..." signs: white enamel face, pictogram in ink, red ring and slash on top.
function noSign(c, fn, { ink = '#241A2E', slash = true } = {}) {
  const face = c.radial('face', 'white', 0.32, 0.25);
  const ring = c.radial('ring', 'red', 0.32, 0.25);
  const R = 32, r = 24.5;
  const ringD = `M48 ${50 - R} A${R} ${R} 0 1 1 ${48 - 0.01} ${50 - R} Z M48 ${50 - r} A${r} ${r} 0 1 0 ${48 + 0.01} ${50 - r} Z`;
  const bar = `M${48 - 19.5} ${50 - 19.5} L${48 + 19.5} ${50 + 19.5}`;
  return `<path d="${DISC}" fill="${face}"/>
    <circle cx="48" cy="50" r="${r}" fill="#000" opacity=".05"/>
    ${inkEmboss(fn, ink)}
    ${slash ? `<path d="${bar}" stroke="#3D0003" stroke-opacity=".35" stroke-width="7.2" transform="translate(.8 1.2)"/>
    <path d="${bar}" stroke="${c.linear('slash', 'red', [0, 0, 1, 1], 1, 2)}" stroke-width="6.4"/>` : ''}
    <path d="${ringD}" fill="${ring}"/>
    <circle cx="48" cy="50" r="${r}" fill="none" stroke="#3D0003" stroke-opacity=".5" stroke-width="1.2"/>
    <circle cx="48" cy="50" r="${r + 1.3}" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="1"/>`;
}


// ---- pictograms (centred on x 48; k is the paint) ----
function man(k) {
  return `<circle cx="48" cy="25.5" r="5.6" fill="${k}"/>
    <path d="M42.5 34 L53.5 34 Q55.5 34 55.5 36 L55.5 74 Q55.5 76.5 53 76.5 Q50.6 76.5 50.6 74 L50.6 57 L45.4 57 L45.4 74 Q45.4 76.5 43 76.5 Q40.5 76.5 40.5 74 L40.5 36 Q40.5 34 42.5 34 Z" fill="${k}"/>
    <rect x="35" y="34" width="4.2" height="23" rx="2.1" fill="${k}"/><rect x="56.8" y="34" width="4.2" height="23" rx="2.1" fill="${k}"/>`;
}
function woman(k) {
  return `<circle cx="48" cy="25.5" r="5.6" fill="${k}"/>
    <path d="M43.6 34 L52.4 34 Q54.4 34 55 36 L60.5 59.5 L35.5 59.5 L41 36 Q41.6 34 43.6 34 Z" fill="${k}"/>
    <rect x="42.2" y="56" width="4.3" height="20.5" rx="2.15" fill="${k}"/><rect x="49.5" y="56" width="4.3" height="20.5" rx="2.15" fill="${k}"/>
    <path d="M37.5 51 L40.6 37.5 M58.5 51 L55.4 37.5" stroke="${k}" ${ST(4.2)}/>`;
}
// Suitcase: body x, y, w, h with a handle on top; straps in the gap colour g.
function suitcase(x, y, w, h, k, g) {
  const hx = x + w / 2;
  return `<path d="M${n(hx - w * 0.17)} ${y} L${n(hx - w * 0.17)} ${n(y - h * 0.16)} Q${n(hx - w * 0.17)} ${n(y - h * 0.22)} ${n(hx - w * 0.11)} ${n(y - h * 0.22)} L${n(hx + w * 0.11)} ${n(y - h * 0.22)} Q${n(hx + w * 0.17)} ${n(y - h * 0.22)} ${n(hx + w * 0.17)} ${n(y - h * 0.16)} L${n(hx + w * 0.17)} ${y}" stroke="${k}" ${ST(3.2)}/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${n(Math.min(w, h) * 0.16)}" fill="${k}"/>
    ${g ? `<path d="M${n(x + w * 0.27)} ${n(y + 1.5)} L${n(x + w * 0.27)} ${n(y + h - 1.5)} M${n(x + w * 0.73)} ${n(y + 1.5)} L${n(x + w * 0.73)} ${n(y + h - 1.5)}" stroke="${g}" stroke-width="${n(w * 0.07)}" stroke-linecap="round" opacity=".55"/>` : ''}`;
}

// A tap pouring a drop into a glass (potable and non-potable water).
function potable(k, g) {
  return `<rect x="22.5" y="28" width="4.4" height="11" rx="1.6" fill="${k}"/>
    <path d="M26 33.5 L45.5 33.5 Q49 33.5 49 37 L49 42" stroke="${k}" fill="none" stroke-width="7" stroke-linejoin="round"/>
    <path d="M38 31 L38 25.5 M32.5 24.5 L43.5 24.5" stroke="${k}" ${ST(3.6)}/>
    <path d="M49 46.5 Q52.6 51.2 52.6 53.4 A3.6 3.6 0 0 1 45.4 53.4 Q45.4 51.2 49 46.5 Z" fill="${k}"/>
    <path d="M38.5 58 L59.5 58 L57 75" stroke="${k}" ${ST(3.2)}/>
    <path d="M38.5 58 L41 75" stroke="${k}" ${ST(3.2)}/>
    <path d="M39.6 65 L58.4 65 L57 75.2 Q56.8 76.6 55.4 76.6 L42.6 76.6 Q41.2 76.6 41 75.2 Z" fill="${k}"/>`;
}

// ---- drawn letters (cap height 10, y down) ----
const LETTERS = {
  A: [7, 'M0 10 L3.5 0 L7 10 M1.45 6.6 L5.55 6.6'],
  B: [5.8, 'M0 5 L3.4 5 C6.6 5 6.6 10 3.4 10 L0 10 L0 0 L3 0 C5.8 0 5.8 5 3 5'],
  C: [6, 'M6 1.9 C4.9 0.3 2.6 -0.2 1.2 1.2 C-0.4 2.8 -0.4 7.2 1.2 8.8 C2.6 10.2 4.9 9.7 6 8.1'],
  D: [6.3, 'M0 0 L0 10 L2.4 10 C7.7 10 7.7 0 2.4 0 Z'],
  E: [5.2, 'M5.2 0 L0 0 L0 10 L5.2 10 M0 5 L4.4 5'],
  K: [6, 'M0 0 L0 10 M5.8 0 L0.6 5.4 M2.3 3.8 L6 10'],
  M: [8.2, 'M0 10 L0 0 L4.1 6.4 L8.2 0 L8.2 10'],
  N: [6.4, 'M0 10 L0 0 L6.4 10 L6.4 0'],
  O: [7.4, 'M3.7 0 C-1.23 0 -1.23 10 3.7 10 C8.63 10 8.63 0 3.7 0 Z'],
  P: [5.6, 'M0 10 L0 0 L3 0 C6.4 0 6.4 5.6 3 5.6 L0 5.6'],
  S: [5.8, 'M5.6 1.7 C4.6 0.1 0.2 -0.5 0.2 2.7 C0.2 5.4 5.8 4.6 5.8 7.4 C5.8 10.5 1.2 10.3 0 8.4'],
  T: [6.6, 'M0 0 L6.6 0 M3.3 0 L3.3 10'],
  W: [10, 'M0 0 L2.5 10 L5 2.4 L7.5 10 L10 0'],
  '!': [0, 'M0 0 L0 6.3 M0 9.95 L0 10'],
};

// Path d for a word, centred on x, y; size is the cap height, weight the stroke it will get.
function word(text, x, y, size, weight, track = weight * 0.62) {
  const s = size / 10;
  const chars = [...text];
  const widths = chars.map((ch) => LETTERS[ch][0] * s);
  const total = widths.reduce((a, b) => a + b, 0) + track * (chars.length - 1);
  let ox = x - total / 2;
  const oy = y - size / 2;
  let d = '';
  chars.forEach((ch, i) => {
    let flip = 0;
    d += LETTERS[ch][1].replace(/-?\d*\.?\d+/g, (m) => {
      const v = parseFloat(m);
      const out = flip++ % 2 === 0 ? ox + v * s : oy + v * s;
      return String(n(out));
    }) + ' ';
    ox += widths[i] + track;
  });
  return d.trim();
}

// ---- arrows ----
// Filled arrowhead: tip at x, y, pointing along deg (0 = right, 90 = down), len long, half wide.
function head(x, y, deg, len = 15, half = 13) {
  const a = rad(deg);
  const ux = Math.cos(a), uy = Math.sin(a);
  const bx = x - ux * len, by = y - uy * len;
  return `M${n(x)} ${n(y)} L${n(bx - uy * half)} ${n(by + ux * half)} L${n(bx + uy * half)} ${n(by - ux * half)} Z`;
}

// A straight bold arrow as one polygon, centred on cx, cy, pointing up, then rotated by deg.
function arrow(cx, cy, deg, { len = 54, headLen = 22, half = 19, shaft = 6.8, double = false } = {}) {
  const t = cy - len / 2, b = cy + len / 2;
  let pts;
  if (double) {
    pts = [[cx, t], [cx + half, t + headLen], [cx + shaft, t + headLen], [cx + shaft, b - headLen], [cx + half, b - headLen], [cx, b],
      [cx - half, b - headLen], [cx - shaft, b - headLen], [cx - shaft, t + headLen], [cx - half, t + headLen]];
  } else {
    pts = [[cx, t], [cx + half, t + headLen], [cx + shaft, t + headLen], [cx + shaft, b], [cx - shaft, b], [cx - shaft, t + headLen], [cx - half, t + headLen]];
  }
  const a = rad(deg);
  const rot = ([px, py]) => {
    const dx = px - cx, dy = py - cy;
    return [cx + dx * Math.cos(a) - dy * Math.sin(a), cy + dx * Math.sin(a) + dy * Math.cos(a)];
  };
  return `M${pts.map(rot).map(([px, py]) => `${n(px)} ${n(py)}`).join(' L')} Z`;
}

// ---- centre lines and thick outlines ----
function arc(cx, cy, r, a0, a1, steps = 24, ry = r) {
  return Array.from({ length: steps + 1 }, (_, i) => {
    const a = rad(a0 + ((a1 - a0) * i) / steps);
    return [cx + r * Math.cos(a), cy + ry * Math.sin(a)];
  });
}
function line(p, q, steps = 4) {
  return Array.from({ length: steps + 1 }, (_, i) => [p[0] + ((q[0] - p[0]) * i) / steps, p[1] + ((q[1] - p[1]) * i) / steps]);
}
function join(...parts) {
  const out = [];
  parts.forEach((p) => p.forEach((pt) => {
    const last = out[out.length - 1];
    if (!last || Math.hypot(last[0] - pt[0], last[1] - pt[1]) > 0.05) out.push(pt);
  }));
  return out;
}

// Smooth closed/open curve through points (Catmull-Rom as cubic Béziers).
function smooth(pts, closed = false) {
  const P = (i) => (closed ? pts[(i + pts.length) % pts.length] : pts[Math.max(0, Math.min(pts.length - 1, i))]);
  let d = '';
  const last = closed ? pts.length : pts.length - 1;
  for (let i = 0; i < last; i++) {
    const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${n(c1[0])} ${n(c1[1])} ${n(c2[0])} ${n(c2[1])} ${n(p2[0])} ${n(p2[1])}`;
  }
  return d;
}

// Outline of a stroke of half-width hw along pts: one closed path, round or butt caps.
function tube(pts, hw, { caps = 'round', capEnd } = {}) {
  const normals = pts.map((p, i) => {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy);
    return [-dy / l, dx / l];
  });
  const left = pts.map((p, i) => [p[0] + normals[i][0] * hw, p[1] + normals[i][1] * hw]);
  const right = pts.map((p, i) => [p[0] - normals[i][0] * hw, p[1] - normals[i][1] * hw]).reverse();
  const cap = (c) => (c === 'round' ? `A${hw} ${hw} 0 0 0` : 'L');
  const e = capEnd ?? caps;
  return `M${n(left[0][0])} ${n(left[0][1])}${smooth(left)} ${cap(e)} ${n(right[0][0])} ${n(right[0][1])}${smooth(right)} ${cap(caps)} ${n(left[0][0])} ${n(left[0][1])} Z`;
}

// Points along any centre line, rendered as a smooth open path (for strokes).
function curve(pts) {
  return `M${n(pts[0][0])} ${n(pts[0][1])}${smooth(pts)}`;
}


// ---- freestanding glyph silhouettes ----
// Polygon with every corner rounded by r (a number, or one per vertex).
function roundPoly(pts, r) {
  let d = '';
  pts.forEach((v, i) => {
    const prev = pts[(i + pts.length - 1) % pts.length], next = pts[(i + 1) % pts.length];
    const rr = Array.isArray(r) ? r[i] : r;
    const cut = (o) => { const dx = o[0] - v[0], dy = o[1] - v[1], l = Math.hypot(dx, dy); return [n(v[0] + (dx * rr) / l), n(v[1] + (dy * rr) / l)]; };
    const a = cut(prev), b = cut(next);
    d += `${i ? 'L' : 'M'}${a[0]} ${a[1]} Q${n(v[0])} ${n(v[1])} ${b[0]} ${b[1]} `;
  });
  return `${d}Z`;
}
function rotPts(pts, cx, cy, deg) {
  const a = rad(deg), co = Math.cos(a), si = Math.sin(a);
  return pts.map(([x, y]) => [cx + (x - cx) * co - (y - cy) * si, cy + (x - cx) * si + (y - cy) * co]);
}
function cross(cx, cy, a, w, deg = 0, r = 3) {
  const p = [[cx - w, cy - a], [cx + w, cy - a], [cx + w, cy - w], [cx + a, cy - w], [cx + a, cy + w], [cx + w, cy + w], [cx + w, cy + a], [cx - w, cy + a], [cx - w, cy + w], [cx - a, cy + w], [cx - a, cy - w], [cx - w, cy - w]];
  return roundPoly(rotPts(p, cx, cy, deg), p.map((_, i) => (i % 3 === 2 ? 1.2 : r)));
}
function bar(x0, y0, x1, y1, r = 3.5) {
  return roundPoly([[x0, y0], [x1, y0], [x1, y1], [x0, y1]], r);
}
function dot(cx, cy, r) {
  return `M${n(cx)} ${n(cy - r)} A${r} ${r} 0 1 1 ${n(cx - 0.01)} ${n(cy - r)} Z`;
}
// Exclamation mark: tapered bar and dot, centred on x; w = half width at the top, sc = scale.
function bang(x, w = 8, top = 15, sc = 1) {
  const y = (v) => n(top + v * sc);
  const b = w * 0.45;
  return `M${n(x - w)} ${y(7)} Q${n(x - w)} ${y(0)} ${n(x)} ${y(0)} Q${n(x + w)} ${y(0)} ${n(x + w)} ${y(7)} L${n(x + b)} ${y(43)} Q${n(x + b * 0.9)} ${y(47)} ${n(x)} ${y(47)} Q${n(x - b * 0.9)} ${y(47)} ${n(x - b)} ${y(43)} Z ${dot(x, top + 58 * sc, w * 0.9)}`;
}
// Question mark hook as a thick outline plus its dot; centred on x, top at `top`, sc = scale.
function question(x, top = 15, sc = 1, hw = 6.2) {
  const R = 14 * sc;
  const cy = top + hw + R;
  const hook = arc(x, cy, R, 192, 400, 16);
  const [ex, ey] = hook[hook.length - 1];
  const C = [x, ey + 8 * sc], E = [x, top + 46 * sc];
  const tail = Array.from({ length: 5 }, (_, i) => { const t = (i + 1) / 5, u = 1 - t; return [u * u * ex + 2 * u * t * C[0] + t * t * E[0], u * u * ey + 2 * u * t * C[1] + t * t * E[1]]; });
  return `${tube(join(hook, tail), hw * sc)} ${dot(x, top + 62 * sc, 7.2 * sc)}`;
}

module.exports = { roundPoly, rotPts, cross, bar, dot, bang, question, potable, man, woman, suitcase, SERIES, TILE, PANEL, DISC, ST, tile, disc, emboss, inkEmboss, noSign, mix, word, head, arrow, arc, line, join, smooth, tube, curve, n, rad };
