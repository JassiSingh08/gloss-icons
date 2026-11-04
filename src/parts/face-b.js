// Extra parts for the unwell, concerned, negative and costume faces, on top of face.js: inks for
// faces in other palettes, hands pressed to the face (same skin as peek), a fear tint, tear
// streams, puffs, and a pixel tracer for the alien monster.
const f = require('./face');
const s = require('./skin');

const n = (v) => +v.toFixed(2);

// Deep ink for heads that are not yellow: a dark shade of the head's own colour.
const INKS = {
  yellow: f.INK,
  red: '#3D0003',
  orange: '#4D0B00',
  blue: '#001233',
  purple: '#12002E',
  green: '#06280F',
  white: '#1E1638',
  grey: '#14141F',
};

// A radial gradient in icon coordinates, so several shapes share one light.
function glow(c, name, palette, cx = 34, cy = 26, r = 60) {
  const [a, b, d, e] = c.ramp(palette);
  if (!c.defs.some((x) => x.includes(`id="${c.id(name)}"`))) {
    c.def(`<radialGradient id="${c.id(name)}" gradientUnits="userSpaceOnUse" cx="${cx}" cy="${cy}" r="${r}"><stop offset="0" stop-color="${a}"/><stop offset="0.35" stop-color="${b}"/><stop offset="0.75" stop-color="${d}"/><stop offset="1" stop-color="${e}"/></radialGradient>`);
  }
  return `url(#${c.id(name)})`;
}

// Place local points: scale, mirror, rotate (degrees), then move to (x, y).
const place = (pts, { x = 0, y = 0, rot = 0, sc = 1, flip = false }) => {
  const a = (rot * Math.PI) / 180;
  const cs = Math.cos(a), sn = Math.sin(a);
  return pts.map(([px, py]) => {
    const u = (flip ? -px : px) * sc, v = py * sc;
    return [n(x + u * cs - v * sn), n(y + u * sn + v * cs)];
  });
};

// An open hand, fingers up, thumb out to its right (flip for the other hand): palm, four tapered
// fingers and the thumb merged into one smooth outline, with creases between the fingers.
// Local units are drawn large and scaled by K, so sc 1 is about 24 wide; (x, y) is the middle
// of the palm. Draw it last, over the face.
const K = 0.5;
const FINGERS = [
  [[13.5, -14], [17.5, -34], 9, 7.8],
  [[5.5, -17], [7, -45], 9.8, 8.6],
  [[-3, -18], [-4, -48], 10, 8.8],
  [[-11.5, -16], [-15.5, -41], 9.6, 8.4],
];
const THUMB = [[15, 2], [28, -15], 11, 9.4];
const PALM = [[18, -16], [-18, -16], [-18.5, 0], [-14, 14], [-4, 21], [8, 21], [16, 15], [19, 2]];
const CREASES = [
  [[9.6, -17], [11.6, -29]],
  [[1.5, -19], [1.8, -32]],
  [[-7, -18], [-7.5, -32]],
];
let hands = 0;
function hand(c, opts = {}) {
  const sc = (opts.sc ?? 1) * K;
  const o = { ...opts, sc };
  const p = (pts) => place(pts, o);
  const parts = [p(PALM), p(s.ellipse(0, 4, 18, 17)), ...FINGERS.map(([a, z, w0, w1]) => p(s.capsule(a, z, w0, w1)))];
  if (opts.thumb !== false) parts.push(p(s.capsule(THUMB[0], THUMB[1], THUMB[2], THUMB[3])));
  const d = s.union(parts);
  // Lit from the hand's own top left, so a hand low in the frame is as bright as the face.
  const paint = opts.paint ?? s.fill(c, `hand${hands++}`, place([[-14, -40]], o)[0], n(110 * sc));
  const edge = opts.edge ?? s.EDGE;
  const line = (pts, w = 1.3) => `<path d="M${p(pts).map((q) => q.join(' ')).join(' L')}" stroke="${edge}" stroke-opacity=".45" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;
  const thumbLine = opts.thumb === false ? '' : `<path d="M${p([[15, 4]])[0].join(' ')} Q${p([[10, 0]])[0].join(' ')} ${p([[7, -7]])[0].join(' ')}" stroke="${edge}" stroke-opacity=".45" stroke-width="1.3" fill="none" stroke-linecap="round"/>`;
  return `<path d="${d}" fill="${paint}" stroke="${edge}" stroke-opacity="${opts.edgeOpacity ?? 0.7}" stroke-width="${opts.edgeWidth ?? 1.2}" stroke-linejoin="round"/>`
    + CREASES.map((cr) => line(cr)).join('') + thumbLine;
}

// Inner ends lifted: worry, sadness, pleading. (Own version: the brow tips go up in the middle.)
const worried = ({ y = f.BROW, dx = f.DX, ink = f.INK, sw = 3.2, slant = 4.5, w = 5.5 } = {}) =>
  [-1, 1].map((s2) => {
    const x = f.CX + s2 * dx;
    return f.stroke(`M${n(x + s2 * w)} ${n(y + slant / 2)} Q${x} ${n(y - slant * 0.2)} ${n(x - s2 * w)} ${n(y - slant / 2)}`, sw, ink);
  }).join('');

// Open mouth turned down: flat-ish bottom, round top. Upper teeth optional.
function openFrown(c, { y = 68, w = 10, h = 7, teeth = false, tongue = true, name = 'ofrown' } = {}) {
  const l = f.CX - w, r = f.CX + w;
  const d = `M${l} ${n(y + h / 2)} C${n(l + 0.5)} ${n(y - h * 0.9)} ${n(r - 0.5)} ${n(y - h * 0.9)} ${r} ${n(y + h / 2)} Q${f.CX} ${n(y + h * 0.1)} ${l} ${n(y + h / 2)} Z`;
  c.def(`<clipPath id="${c.id(name)}"><path d="${d}"/></clipPath>`);
  return `<path d="${d}" fill="${f.MOUTH}" stroke="${f.MOUTH}" stroke-width="1.6" stroke-linejoin="round"/>
    <g clip-path="url(#${c.id(name)})">
      ${teeth ? `<rect x="${l}" y="${n(y - h)}" width="${w * 2}" height="${n(h * 0.55)}" fill="${f.TEETH}"/>` : ''}
      ${tongue ? `<ellipse cx="${f.CX}" cy="${n(y + h * 0.55)}" rx="${n(w * 0.7)}" ry="${n(h * 0.45)}" fill="${f.TONGUE}"/>` : ''}
    </g>`;
}

// Big glossy eyes: pleading, holding back tears. water: a pool of tears along the lower lid.
function bigEyes(c, { y = 46, dx = 11.5, rx = 6.4, ry = 7.4, iris = 5, look = [0, 0.8], water = false, ink = f.INK } = {}) {
  return [-1, 1].map((s2) => {
    const x = f.CX + s2 * dx;
    const ix = x + look[0], iy = y + look[1];
    const pool = water
      ? `<path d="M${n(x - rx + 0.3)} ${n(y + 1.5)} Q${x} ${n(y + 4.5)} ${n(x + rx - 0.3)} ${n(y + 1.5)} Q${n(x + rx * 0.7)} ${n(y + ry + 0.6)} ${x} ${n(y + ry + 0.8)} Q${n(x - rx * 0.7)} ${n(y + ry + 0.6)} ${n(x - rx + 0.3)} ${n(y + 1.5)} Z" fill="${glow(c, 'pool', 'sky', x, y, 12)}" opacity=".9"/>`
      : '';
    return `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#fff" stroke="${ink}" stroke-width="1.6"/>
      <circle cx="${ix}" cy="${iy}" r="${iris}" fill="${ink}"/>
      ${f.glint(ix - iris * 0.35, iy - iris * 0.4, iris * 0.38)}
      <circle cx="${n(ix + iris * 0.42)}" cy="${n(iy + iris * 0.38)}" r="${n(iris * 0.18)}" fill="#fff"/>${pool}`;
  }).join('');
}

// A skull, sockets set at a sly slant. Returns the silhouette and its art; (x, y) is the middle
// of the cranium, sc scales it.
function skull(c, { x = 48, y = 44, sc = 1, ink = '#241B3D' } = {}) {
  const P = (px, py) => `${n(x + px * sc)} ${n(y + py * sc)}`;
  const body = `M${P(0, -30)} C${P(19, -30)} ${P(30, -17)} ${P(30, -1)} C${P(30, 9)} ${P(26, 15)} ${P(20, 18)} L${P(19, 27)} Q${P(19, 34)} ${P(12, 34)} L${P(-12, 34)} Q${P(-19, 34)} ${P(-19, 27)} L${P(-20, 18)} C${P(-26, 15)} ${P(-30, 9)} ${P(-30, -1)} C${P(-30, -17)} ${P(-19, -30)} ${P(0, -30)} Z`;
  const socket = (s2) => `M${P(s2 * 3.5, -3)} Q${P(s2 * 12, -7)} ${P(s2 * 20, -5)} Q${P(s2 * 22.5, 3)} ${P(s2 * 17, 8.5)} Q${P(s2 * 9, 12)} ${P(s2 * 4.5, 6)} Q${P(s2 * 2.5, 1.5)} ${P(s2 * 3.5, -3)} Z`;
  const nose = `M${P(0, 10)} L${P(3.4, 17)} Q${P(0, 19)} ${P(-3.4, 17)} Z`;
  const teeth = [-8, -2.7, 2.7, 8].map((t) => `M${P(t, 23.5)} L${P(t, 31)}`).join(' ');
  const art = `<path d="${body}" fill="${c.radial('bone', 'ivory', 0.32, 0.22)}"/>
    <path d="${socket(-1)} ${socket(1)} ${nose}" fill="${ink}" stroke="${ink}" stroke-width="${n(1.2 * sc)}" stroke-linejoin="round"/>
    <circle cx="${P(-12, 2.5).split(' ')[0]}" cy="${P(-12, 2.5).split(' ')[1]}" r="${n(1.6 * sc)}" fill="#fff" opacity=".7"/>
    <path d="M${P(-14, 23.5)} Q${P(0, 20.5)} ${P(14, 23.5)}" stroke="${ink}" stroke-width="${n(2.2 * sc)}" fill="none" stroke-linecap="round"/>
    <path d="${teeth}" stroke="${ink}" stroke-width="${n(1.8 * sc)}" stroke-linecap="round" opacity=".75"/>`;
  return { body, art };
}

// Cold blue washing down from the top of the head: fear.
function fear(c, { to = 50, palette = 'navy', opacity = 0.9, body = f.BODY } = {}) {
  const [, b] = c.ramp(palette);
  c.def(`<linearGradient id="${c.id('fear')}" x1="0" y1="22" x2="0" y2="${to}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${b}" stop-opacity="${opacity}"/><stop offset="1" stop-color="${b}" stop-opacity="0"/></linearGradient>`);
  return `<path d="${body}" fill="url(#${c.id('fear')})"/>`;
}

// A tear streaming from under an eye: a tapering ribbon down the cheek.
function stream(c, pts, w = 4.6) {
  const fill = glow(c, 'stream', 'sky', 40, 40, 50);
  const d = `M${pts.map((q) => q.join(' ')).join(' L')}`;
  return `<path d="${d}" stroke="${fill}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${d}" stroke="#fff" stroke-opacity=".55" stroke-width="${n(w * 0.25)}" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="translate(-0.8 -0.4)"/>`;
}

// A cluster of round puffs with one edge around the union (edge first, fills on top).
function puffs(c, circles, { paint, edge, sw = 2.4 } = {}) {
  const ring = circles.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('');
  return `<g fill="${edge}" stroke="${edge}" stroke-width="${sw}">${ring}</g><g fill="${paint}">${ring}</g>`;
}

// Union outline of filled cells in a pixel grid ('#' filled): one path, holes included.
// r rounds every corner, convex and concave, so the blocks read as one moulded piece.
function pixels(rows, size, x0, y0, r = 0) {
  const filled = (r, k) => rows[r]?.[k] === '#';
  const edges = new Map();
  const add = (a, b) => edges.set(a.join(), b);
  rows.forEach((row, r) => [...row].forEach((ch, k) => {
    if (ch !== '#') return;
    if (!filled(r - 1, k)) add([k, r], [k + 1, r]);
    if (!filled(r, k + 1)) add([k + 1, r], [k + 1, r + 1]);
    if (!filled(r + 1, k)) add([k + 1, r + 1], [k, r + 1]);
    if (!filled(r, k - 1)) add([k, r + 1], [k, r]);
  }));
  let d = '';
  while (edges.size) {
    const [startKey, first] = edges.entries().next().value;
    edges.delete(startKey);
    const loop = [startKey.split(',').map(Number)];
    let cur = first;
    while (cur.join() !== startKey) {
      loop.push(cur);
      const next = edges.get(cur.join());
      edges.delete(cur.join());
      cur = next;
    }
    // Keep only the corners.
    const pts = loop.filter((p, i) => {
      const a = loop[(i - 1 + loop.length) % loop.length], b = loop[(i + 1) % loop.length];
      return (p[0] - a[0]) * (b[1] - p[1]) !== (p[1] - a[1]) * (b[0] - p[0]);
    });
    const P = pts.map(([k, row]) => [x0 + k * size, y0 + row * size]);
    if (!r) { d += `M${P.map(([x, y]) => `${n(x)} ${n(y)}`).join(' L')} Z `; continue; }
    const toward = (a, b2) => {
      const len = Math.hypot(b2[0] - a[0], b2[1] - a[1]);
      return [n(a[0] + ((b2[0] - a[0]) * r) / len), n(a[1] + ((b2[1] - a[1]) * r) / len)];
    };
    P.forEach((p, i) => {
      const prev = P[(i - 1 + P.length) % P.length], next = P[(i + 1) % P.length];
      const a = toward(p, prev), b2 = toward(p, next);
      d += `${i ? 'L' : 'M'}${a.join(' ')} Q${n(p[0])} ${n(p[1])} ${b2.join(' ')} `;
    });
    d += 'Z ';
  }
  return d.trim();
}

module.exports = { INKS, worried, openFrown, bigEyes, skull, glow, place, hand, fear, stream, puffs, pixels };
