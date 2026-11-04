// Shared parts for buildings and place scenes, so every building matches the house: cream walls
// lit along the diagonal, the house's roof red, chunky glowing windows with a cross bar, a brown
// arched door. Scenes (sunrise, city at night…) sit in one rounded tile so they stand on the
// ground line like any other object.
//
//   const B = require('../src/parts/building');
//   B.rr(x, y, w, h, r)                 rounded rect path
//   B.wall(c) / B.roof(c) / B.glow(c)   the house's gradients, defined once per icon
//   B.win(c, x, y, w, h, opts)          a lit window like the house's
//   B.door(c, x, y, w, h)               arched brown door with a brass knob
//   B.TILE, B.tileSky(c, kind), B.clip(c)   scene tile, its sky, and a clip for its contents
//   B.ribbon(pts, w)                    a closed band of width w along a polyline (tracks, chutes)

const n = (v) => +v.toFixed(2);
const memo = new WeakMap();

function once(c, key, make) {
  let m = memo.get(c);
  if (!m) memo.set(c, (m = {}));
  if (!(key in m)) m[key] = make();
  return m[key];
}

function rr(x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  return `M${n(x + r)} ${n(y)} L${n(x + w - r)} ${n(y)} Q${n(x + w)} ${n(y)} ${n(x + w)} ${n(y + r)} L${n(x + w)} ${n(y + h - r)} Q${n(x + w)} ${n(y + h)} ${n(x + w - r)} ${n(y + h)} L${n(x + r)} ${n(y + h)} Q${n(x)} ${n(y + h)} ${n(x)} ${n(y + h - r)} L${n(x)} ${n(y + r)} Q${n(x)} ${n(y)} ${n(x + r)} ${n(y)} Z`;
}

// Raw 4-stop gradient for colours the palettes do not carry (sky, stone, patina).
function grad(c, name, stops, [x1, y1, x2, y2] = [0, 0, 0, 1]) {
  return once(c, `g:${name}`, () => {
    const s = stops.map((col, i) => `<stop offset="${n(i / (stops.length - 1))}" stop-color="${col}"/>`).join('');
    c.def(`<linearGradient id="${c.id(name)}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${s}</linearGradient>`);
    return `url(#${c.id(name)})`;
  });
}
function rgrad(c, name, stops, cx = 0.32, cy = 0.25) {
  return once(c, `r:${name}`, () => {
    const o = [0, 0.35, 0.75, 1];
    const s = stops.map((col, i) => `<stop offset="${o[i]}" stop-color="${col}"/>`).join('');
    c.def(`<radialGradient id="${c.id(name)}" cx="${cx}" cy="${cy}" r="0.95">${s}</radialGradient>`);
    return `url(#${c.id(name)})`;
  });
}

const wall = (c, pal = 'cream') => once(c, `wall:${pal}`, () => c.linear(`bw-${pal}`, pal, [0, 0, 1, 1], 0, 2));
const roof = (c, pal = 'red') => once(c, `roof:${pal}`, () => c.radial(`br-${pal}`, pal, 0.35, 0.2));
const glow = (c) => once(c, 'glow', () => c.radial('bglow', 'flame', 0.4, 0.4));
const glass = (c) => once(c, 'glass', () => grad(c, 'bglass', ['#E4F6FF', '#7FCBFF', '#2B7FD0'], [0, 0, 1, 1]));
const brown = (c) => once(c, 'brown', () => c.radial('bdoor', 'brown', 0.3, 0.2));
const STONE = ['#F4F1EC', '#D9D3CA', '#A69C8F', '#5E554A'];
const stone = (c) => once(c, 'stone', () => grad(c, 'bstone', STONE.slice(0, 3), [0, 0, 1, 1]));

// Window: lit glass, the house's cream cross bar, a thin brown frame. arch rounds the top.
function win(c, x, y, w, h, o = {}) {
  const { cross = true, arch = false, lit = true, frame = '#8A5A1E', bar = '#E0B472', r = 2 } = o;
  const fill = o.fill || (lit ? glow(c) : glass(c));
  const shape = arch
    ? `M${n(x)} ${n(y + h)} L${n(x)} ${n(y + w / 2)} A${n(w / 2)} ${n(w / 2)} 0 0 1 ${n(x + w)} ${n(y + w / 2)} L${n(x + w)} ${n(y + h)} Z`
    : rr(x, y, w, h, r);
  const mx = n(x + w / 2);
  const my = n(arch ? y + w / 2 + (h - w / 2) * 0.35 : y + h / 2);
  const bars = cross ? `<path d="M${mx} ${n(y + (arch ? 1 : 0))} L${mx} ${n(y + h)} M${n(x)} ${my} L${n(x + w)} ${my}" stroke="${bar}" stroke-width="${o.barW || 1.8}"/>` : '';
  return `<path d="${shape}" fill="${fill}"/>${bars}<path d="${shape}" fill="none" stroke="${frame}" stroke-opacity=".6" stroke-width="1.2"/>`;
}

function door(c, x, y, w, h, o = {}) {
  const d = `M${n(x)} ${n(y + h)} L${n(x)} ${n(y + w / 2)} A${n(w / 2)} ${n(w / 2)} 0 0 1 ${n(x + w)} ${n(y + w / 2)} L${n(x + w)} ${n(y + h)} Z`;
  const knob = o.knob === false ? '' : `<circle cx="${n(x + w * 0.76)}" cy="${n(y + h * 0.58)}" r="1.3" fill="#FFD24A"/>`;
  return `<path d="${d}" fill="${o.fill || brown(c)}" stroke="#331805" stroke-opacity=".45" stroke-width="1"/>${knob}`;
}

// Soft shade cast under an eave or a parapet, as on the house.
const eave = (x, y, w, h = 4, col = '#8A5A1E', op = 0.35) => `<path d="M${n(x)} ${n(y)} L${n(x + w)} ${n(y)} L${n(x + w)} ${n(y + h)} L${n(x)} ${n(y + h)} Z" fill="${col}" opacity="${op}"/>`;

// --- Scenes -----------------------------------------------------------------------------------
const TILE = rr(12, 13, 72, 71, 15);
const SKIES = {
  day: ['#D8F1FF', '#8AD3FF', '#3FA6EE'],
  dawn: ['#FFE7A8', '#FFB27A', '#F0708A'],
  dusk: ['#3A2A8C', '#9A3FA8', '#FF8A5C'],
  sunset: ['#FFE07A', '#FF9A3D', '#E8453A'],
  night: ['#05082E', '#16206A', '#3A3F9E'],
  fog: ['#F2F5FA', '#D5DCE8', '#A9B4C8'],
};
const tileSky = (c, kind) => `<path d="${TILE}" fill="${grad(c, `sky-${kind}`, SKIES[kind])}"/>`;
const clip = (c) => once(c, 'clip', () => {
  c.def(`<clipPath id="${c.id('tile')}"><path d="${TILE}"/></clipPath>`);
  return `url(#${c.id('tile')})`;
});

// Simple star sparkle for night skies.
const twinkle = (x, y, s, col = '#FFF3B0') => `<path d="M${n(x)} ${n(y - s)} Q${n(x + s * 0.18)} ${n(y - s * 0.18)} ${n(x + s)} ${n(y)} Q${n(x + s * 0.18)} ${n(y + s * 0.18)} ${n(x)} ${n(y + s)} Q${n(x - s * 0.18)} ${n(y + s * 0.18)} ${n(x - s)} ${n(y)} Q${n(x - s * 0.18)} ${n(y - s * 0.18)} ${n(x)} ${n(y - s)} Z" fill="${col}"/>`;

// Skyline: towers as [x, w, top], all standing on `base`. Returns their union outline (towers
// side by side may touch; overlaps are fine since this is only ever filled, never the body).
function skyline(towers, base) {
  return towers.map(([x, w, t]) => `M${n(x)} ${n(base)} L${n(x)} ${n(t)} L${n(x + w)} ${n(t)} L${n(x + w)} ${n(base)} Z`).join(' ');
}
// Grid of small window lights inside each tower: cols per tower, rows every `step`.
function lights(towers, base, { cols = 2, step = 7, size = 3, skip = [] } = {}) {
  let d = '';
  towers.forEach(([x, w, t], i) => {
    const k = Math.max(1, Math.min(cols, Math.floor((w - 2) / (size + 2.5))));
    const gap = (w - k * size) / (k + 1);
    for (let y = t + 4, row = 0; y + size < base - 3; y += step, row++) {
      for (let j = 0; j < k; j++) {
        if ((i * 7 + row * 3 + j * 5) % 5 === 0 || skip.includes(i)) continue;
        d += `M${n(x + gap + j * (size + gap))} ${n(y)} h${size} v${size} h${-size} Z `;
      }
    }
  });
  return d;
}

// --- Bands along a curve ----------------------------------------------------------------------
function bez(p0, p1, p2, p3, steps = 16) {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps, u = 1 - t;
    pts.push([
      u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
      u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1],
    ]);
  }
  return pts;
}
// Closed outline of a band of width w (or [w0, w1] tapering) along the points.
function ribbon(pts, w) {
  const [w0, w1] = Array.isArray(w) ? w : [w, w];
  const L = [], R = [];
  pts.forEach((p, i) => {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1;
    const h = (w0 + ((w1 - w0) * i) / (pts.length - 1)) / 2;
    L.push([p[0] - (dy / len) * h, p[1] + (dx / len) * h]);
    R.push([p[0] + (dy / len) * h, p[1] - (dx / len) * h]);
  });
  const all = [...L, ...R.reverse()];
  return `M${all.map(([x, y]) => `${n(x)} ${n(y)}`).join(' L')} Z`;
}
const poly = (pts) => `M${pts.map(([x, y]) => `${n(x)} ${n(y)}`).join(' L')}`;

module.exports = { n, once, rr, grad, rgrad, wall, roof, glow, glass, brown, STONE, stone, win, door, eave, TILE, SKIES, tileSky, clip, twinkle, skyline, lights, bez, ribbon, poly };

// Chapel seen from the side: a tower with a spire on the left, the nave to the right. Church and
// wedding share it; the finial (cross or heart) and colours set them apart.
const CHAPEL = 'M18 84 Q14 84 14 80 L14 40 L12.5 40 Q10.5 39.5 11.5 37.5 L23 19.5 Q25 16.5 27 19.5 L37.2 35 L76 35 Q77.5 35 78.5 36.5 L84.5 45.5 Q85.5 48 83 48 L80 48 L80 80 Q80 84 76 84 Z';
function chapel(c, { wall, roof, finial, rose }) {
  return `${finial}
    <path d="${CHAPEL}" fill="${wall}"/>
    <path d="M36 35 L76 35 Q77.5 35 78.5 36.5 L84.5 45.5 Q85.5 48 83 48 L36 48 Z" fill="${roof}"/>
    <path d="M23 19.5 Q25 16.5 27 19.5 L38.5 37.5 Q39.5 39.5 37.5 40 L12.5 40 Q10.5 39.5 11.5 37.5 Z" fill="${roof}"/>
    ${eave(14, 40, 22)}${eave(36, 48, 44)}
    <path d="M36 44 L36 84" stroke="#8A5A1E" stroke-opacity=".35" stroke-width="1.2"/>
    ${rose}
    ${door(c, 19, 63, 12, 21)}
    ${win(c, 42, 56, 8, 16, { arch: true })}${win(c, 55, 56, 8, 16, { arch: true })}${win(c, 68, 56, 8, 16, { arch: true })}`;
}
module.exports.CHAPEL = CHAPEL;
module.exports.chapel = chapel;
