// Shared shading for tools and hardware: polished steel, brass and wood, plus the geometry
// helpers that let a tool be drawn upright in its own frame and then turned onto the diagonal.
//
//   const m = require('../src/parts/metal');
//   const F = m.frame({ at: [50, 46], deg: 40, s: 0.9 });   // local -> icon coordinates
//   F.d('M0 -30 L4 20 Z')       -> the path moved, turned and scaled (M L Q C A Z, absolute only)
//   F.p([0, -30])               -> one point
//   m.round([[x, y], [x, y, r] …], 2)  -> closed polygon with rounded corners (r per corner)
//   m.band(c, 'h', 'steel', a, b)      -> gradient from a (lit edge) to b (shadow edge)
//   m.cyl(c, 'h', 'brown', p1, p2, w)  -> band across a bar whose axis runs p1 -> p2, lit side
//                                         chosen so the light always comes from the top left
//   m.bar(p1, p2, w, r)                -> rounded bar path from p1 to p2
//   m.part(d, fill, palette)           -> a filled shape with the engine's own edge, for parts
//                                         that sit outside `body`
//   m.tube(c, d, { width, palette })   -> any stroked path as a glossy solid (chains, cane, wire)
//
// Paths are moved numerically rather than with a transform="" so gradients stay in icon space
// and every part is lit from the same top-left light, whatever angle the tool lies at.
const palettes = require('../palettes');

const n = (v) => +v.toFixed(2);

// Brushed steel like the lock's shackle: dull edge, hot highlight, cool mid, dark far side.
const STOPS = {
  steel: [['#8E93AD', 0], ['#FFFFFF', 0.22], ['#C9CCDA', 0.5], ['#6E7390', 0.8], ['#3A3E52', 1]],
  brass: [['#C98500', 0], ['#FFF3A6', 0.22], ['#FFC21A', 0.5], ['#C98500', 0.8], ['#5E3A00', 1]],
  wood: [['#B06A32', 0], ['#E8B98A', 0.25], ['#B06A32', 0.55], ['#6E3A14', 0.85], ['#331805', 1]],
};
const stopsFor = (pal) => {
  if (STOPS[pal]) return STOPS[pal];
  const r = palettes[pal];
  return [[r[1], 0], [r[0], 0.22], [r[1], 0.5], [r[2], 0.8], [r[3], 1]];
};
const shadowOf = (pal) => (pal === 'steel' ? '#3A3E52' : pal === 'brass' ? '#5E3A00' : pal === 'wood' ? '#331805' : palettes[pal][3]);

function frame({ at = [0, 0], deg = 0, s = 1, flip = false } = {}) {
  const a = (deg * Math.PI) / 180;
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  const p = ([x, y]) => {
    const fx = flip ? -x : x;
    return [at[0] + s * (fx * cos - y * sin), at[1] + s * (fx * sin + y * cos)];
  };
  const d = (path) => {
    const tok = path.match(/[MLQCAZ]|-?\d*\.?\d+(?:e-?\d+)?/gi);
    let out = '';
    let i = 0;
    const num = () => +tok[i++];
    const pt = () => p([num(), num()]).map(n).join(' ');
    let cmd = '';
    while (i < tok.length) {
      if (/[A-Za-z]/.test(tok[i])) {
        cmd = tok[i++].toUpperCase();
        out += cmd;
        if (cmd === 'Z') { out += ' '; continue; }
      } else out += ' ';
      if (cmd === 'M' || cmd === 'L') out += pt();
      else if (cmd === 'Q') out += `${pt()} ${pt()}`;
      else if (cmd === 'C') out += `${pt()} ${pt()} ${pt()}`;
      else if (cmd === 'A') {
        const rx = num(), ry = num(), rot = num(), large = num(), sweep = num();
        out += `${n(rx * s)} ${n(ry * s)} ${n(rot + deg)} ${large} ${flip ? 1 - sweep : sweep} ${pt()}`;
      }
    }
    return out.trim();
  };
  return { p, d, deg, s, at };
}

function round(points, r = 2) {
  const L = points.length;
  let d = '';
  for (let i = 0; i < L; i++) {
    const [x, y, rr = r] = points[i];
    const [px, py] = points[(i - 1 + L) % L];
    const [nx, ny] = points[(i + 1) % L];
    const l1 = Math.hypot(px - x, py - y);
    const l2 = Math.hypot(nx - x, ny - y);
    const k = Math.min(rr, l1 / 2, l2 / 2);
    if (k <= 0.01) { d += `${i ? 'L' : 'M'}${n(x)} ${n(y)} `; continue; }
    const a = [x + ((px - x) * k) / l1, y + ((py - y) * k) / l1];
    const b = [x + ((nx - x) * k) / l2, y + ((ny - y) * k) / l2];
    d += `${i ? 'L' : 'M'}${n(a[0])} ${n(a[1])} Q${n(x)} ${n(y)} ${n(b[0])} ${n(b[1])} `;
  }
  return `${d}Z`;
}

function band(c, name, pal, a, b) {
  const id = c.id(name);
  const stops = stopsFor(pal).map(([col, o]) => `<stop offset="${o}" stop-color="${col}"/>`).join('');
  c.def(`<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${n(a[0])}" y1="${n(a[1])}" x2="${n(b[0])}" y2="${n(b[1])}">${stops}</linearGradient>`);
  return `url(#${id})`;
}

function cyl(c, name, pal, p1, p2, w) {
  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];
  const l = Math.hypot(dx, dy) || 1;
  let nx = -dy / l;
  let ny = dx / l;
  if (nx + ny > 0) { nx = -nx; ny = -ny; }
  const m = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
  const h = w / 2;
  return band(c, name, pal, [m[0] + nx * h, m[1] + ny * h], [m[0] - nx * h, m[1] - ny * h]);
}

function bar(p1, p2, w, r = w / 2) {
  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];
  const l = Math.hypot(dx, dy) || 1;
  const nx = (-dy / l) * (w / 2);
  const ny = (dx / l) * (w / 2);
  return round([[p1[0] + nx, p1[1] + ny], [p2[0] + nx, p2[1] + ny], [p2[0] - nx, p2[1] - ny], [p1[0] - nx, p1[1] - ny]], r);
}

const edge = (pal, w = 1.3, o = 0.5) => `stroke="${shadowOf(pal)}" stroke-opacity="${o}" stroke-width="${w}" stroke-linejoin="round"`;
const part = (d, fill, pal, extra = '') => `<path d="${d}" fill="${fill}" ${edge(pal)} ${extra}/>`;

const STROKE = 'fill="none" stroke-linecap="round" stroke-linejoin="round"';
function tube(c, d, { width = 6, palette = 'silver', name = 't', outline = true, cap } = {}) {
  const r = palettes[palette] ?? palettes.silver;
  const sty = cap ? STROKE.replace('round"', `${cap}"`) : STROKE;
  const m = c.id(`${name}-m`);
  const lit = width * 0.2;
  c.def(`<mask id="${m}" maskUnits="userSpaceOnUse" x="0" y="0" width="96" height="96"><path d="${d}" stroke="#fff" stroke-width="${n(width)}" ${sty}/></mask>`);
  return `${outline ? `<path d="${d}" stroke="${r[3]}" stroke-opacity=".75" stroke-width="${n(width + 1.4)}" ${sty}/>` : ''}
    <path d="${d}" stroke="${r[1]}" stroke-width="${n(width)}" ${sty}/>
    <g mask="url(#${m})">
      <path d="${d}" stroke="${r[2]}" stroke-width="${n(width * 0.6)}" ${sty} transform="translate(${n(width * 0.3)} ${n(width * 0.3)})"/>
      <path d="${d}" stroke="${r[3]}" stroke-opacity=".45" stroke-width="${n(width * 0.35)}" ${sty} transform="translate(${n(width * 0.42)} ${n(width * 0.42)})"/>
      <path d="${d}" stroke="${r[0]}" stroke-opacity=".9" stroke-width="${n(width * 0.26)}" ${sty} transform="translate(${n(-lit)} ${n(-lit)})"/>
    </g>`;
}

// The padlock body and shackle exactly as icons/lock.js draws them, optionally opened, moved
// and scaled, so every padlock in the set is the same lock.
const LOCK_SHACKLE = 'M34 46 L34 33 C34 24 40 17.5 48 17.5 C56 17.5 62 24 62 33 L62 46';
const LOCK_GLINT = 'M33.2 34 C33.5 26 38 20.5 44 19.2';
function padlock(c, { open = false, at = [0, 0], s = 1 } = {}) {
  const lock = require('../../icons/lock.js');
  let art = lock.draw(c);
  if (!art.includes(LOCK_SHACKLE) || !art.includes(LOCK_GLINT)) throw new Error('metal.padlock: lock.js shackle changed');
  if (open) {
    const lifted = 'M34 37 L34 27 C34 18 40 11.5 48 11.5 C56 11.5 62 18 62 27 L62 46';
    art = art.split(LOCK_SHACKLE).join(lifted).replace(LOCK_GLINT, 'M33.2 28 C33.5 20 38 14.5 44 13.2');
  }
  return { body: padlockBody({ at, s }), art: `<g transform="translate(${at[0]} ${at[1]}) scale(${s})">${art}</g>` };
}
const padlockBody = ({ at = [0, 0], s = 1 } = {}) => frame({ at, s }).d(require('../../icons/lock.js').body);

module.exports = { frame, round, band, cyl, bar, part, edge, tube, padlock, padlockBody, shadowOf, STOPS, n };

// Tools drawn upright in their own frame (handle down the +y axis), shared by the single tools
// and the crossed pairs. Each returns { d, art }: d is the whole silhouette in icon space (use
// it as `body`, or pass the tool to `edged` when it stands behind the body), art paints it.
const edged = (t, pal) => `${t.art}<path d="${t.d}" fill="none" ${edge(pal)}/>`;

function handle(c, F, key, y1, y2, w = 9, pal = 'wood') {
  const a = F.p([0, y1]);
  const b = F.p([0, y2]);
  const fill = cyl(c, key, pal, a, b, w * F.s);
  return `<path d="${F.d(round([[-w / 2, y1], [w / 2, y1], [w / 2, y2, w / 2], [-w / 2, y2, w / 2]], 0.6))}" fill="${fill}"/>`;
}
const grain = (F, y1, y2) => `<path d="${F.d(`M-1.6 ${y1} L-1.6 ${y2}`)}" stroke="#FFE2C4" stroke-opacity=".45" stroke-width="${1.3 * F.s}" stroke-linecap="round"/>`;
const HANDLE = (top) => `L4.6 ${top} L4.6 32 Q4.6 37 0 37 Q-4.6 37 -4.6 32 L-4.6 ${top}`;

function hammer(c, F, key = 'hm') {
  const a = 'M-26 -28 Q-26 -31 -23 -31 L-20 -31 Q-18 -31 -18 -29 L-18 -27.5 L-10 -27.5 L-10 -29 Q-10 -31 -8 -31 L5 -31 C13 -31 21 -26 27 -15 C20 -19.5 13 -20 9 -18 L9 -9.5 Q9 -7 6.5 -7';
  const z = 'L-7.5 -7 Q-10 -7 -10 -9.5 L-10 -10.5 L-18 -10.5 L-18 -9 Q-18 -7 -20 -7 L-23 -7 Q-26 -7 -26 -10 Z';
  const head = `${a} ${z}`;
  const d = `${a} ${HANDLE(-7)} ${z}`;
  const steel = cyl(c, `${key}-h`, 'steel', F.p([-20, -19]), F.p([20, -19]), 24 * F.s);
  return {
    d: F.d(d),
    art: `${handle(c, F, `${key}-w`, -9, 37)}${grain(F, -4, 32)}
      <path d="${F.d(head)}" fill="${steel}"/>
      <path d="${F.d('M-24.3 -28.5 L-24.3 -9.5')}" stroke="#fff" stroke-opacity=".75" stroke-width="${1.6 * F.s}" stroke-linecap="round"/>
      <path d="${F.d('M-18 -27.5 L-18 -10.5 M-10 -27.5 L-10 -10.5')}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="${1.2 * F.s}"/>
      <path d="${F.d('M-7 -28.6 L5 -28.6 C11 -28.6 16 -25.5 20 -21')}" stroke="#fff" stroke-opacity=".8" stroke-width="${1.5 * F.s}" stroke-linecap="round" fill="none"/>`,
  };
}

function pick(c, F, key = 'pk') {
  const a = 'M-31 -8 C-24 -25 -11 -32 0 -32 C11 -32 24 -25 31 -8 C22 -16 13 -18.5 7 -18.8 L7 -14 Q7 -12.5 5.5 -12.5';
  const z = 'L-5.5 -12.5 Q-7 -12.5 -7 -14 L-7 -18.8 C-13 -18.5 -22 -16 -31 -8 Z';
  const head = `${a} ${z}`;
  const d = `${a} ${HANDLE(-12.5)} ${z}`;
  const steel = band(c, `${key}-h`, 'steel', F.p([0, -33]), F.p([0, -12]));
  return {
    d: F.d(d),
    art: `${handle(c, F, `${key}-w`, -14, 37)}${grain(F, -8, 32)}
      <path d="${F.d(head)}" fill="${steel}"/>
      <path d="${F.d('M-25 -14 C-17 -24.5 -9 -29.2 0 -29.2 C9 -29.2 17 -24.5 25 -14')}" stroke="#fff" stroke-opacity=".8" stroke-width="${1.6 * F.s}" fill="none" stroke-linecap="round"/>
      <path d="${F.d('M-7 -17.5 L7 -17.5')}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="${1.2 * F.s}"/>`,
  };
}

function wrench(c, F, key = 'wr') {
  const R1 = 14.5, sl = 5.8, hw = 5.4, R2 = 11, J = -25, B = 30;
  const top = n(J - Math.sqrt(R1 * R1 - sl * sl));
  const jb = n(J + Math.sqrt(R1 * R1 - hw * hw));
  const rb = n(B - Math.sqrt(R2 * R2 - hw * hw));
  const hex = Array.from({ length: 6 }, (_, i) => {
    const t = ((i * 60 + 30) * Math.PI) / 180;
    return `${n(Math.cos(t) * 5.4)} ${n(B + Math.sin(t) * 5.4)}`;
  });
  const d = `M-${sl} ${top} A${R1} ${R1} 0 0 0 -${hw} ${jb} L-${hw} ${rb} A${R2} ${R2} 0 1 0 ${hw} ${rb} L${hw} ${jb} A${R1} ${R1} 0 0 0 ${sl} ${top} L${sl} ${J - 2} A${sl} ${sl} 0 0 1 -${sl} ${J - 2} Z `
    + `M${hex[0]} L${hex.slice(1).join(' L')} Z`;
  const fill = cyl(c, key, 'steel', F.p([0, -30]), F.p([0, 30]), 26 * F.s);
  return {
    d: F.d(d),
    art: `<path d="${F.d(d)}" fill="${fill}"/>
      <path d="${F.d(`M-2 ${jb + 2} L-2 ${rb - 2}`)}" stroke="#fff" stroke-opacity=".7" stroke-width="${1.3 * F.s}" stroke-linecap="round"/>
      <path d="${F.d(`M2 ${jb + 2} L2 ${rb - 2}`)}" stroke="#3A3E52" stroke-opacity=".3" stroke-width="${1.2 * F.s}" stroke-linecap="round"/>`,
  };
}

// A straight sword or a dagger: blade, cross guard, wrapped grip, pommel.
function sword(c, F, key = 'sw', { tip = -46, half = 5.5, guard = 12, reach = 15, grip = 12, leaf = false } = {}) {
  const g2 = guard + 5;
  const ge = g2 + grip;
  const pr = 5.4;
  const py = ge + Math.sqrt(pr * pr - 12.25);
  const side = leaf
    ? `M0 ${tip} C${half * 0.5} ${tip + 8} ${half * 1.1} ${tip + 22} ${half} ${guard}`
    : `M0 ${tip} L${half} ${tip + 8} L${half} ${guard}`;
  const back = leaf
    ? `L-${half} ${guard} C-${half * 1.1} ${tip + 22} -${half * 0.5} ${tip + 8} 0 ${tip} Z`
    : `L-${half} ${guard} L-${half} ${tip + 8} Z`;
  const d = `${side} L${reach - 2.5} ${guard} Q${reach} ${guard} ${reach} ${guard + 2.5} Q${reach} ${g2} ${reach - 2.5} ${g2} L3.5 ${g2} L3.5 ${ge} A${pr} ${pr} 0 1 1 -3.5 ${ge} L-3.5 ${g2} L-${reach - 2.5} ${g2} Q-${reach} ${g2} -${reach} ${guard + 2.5} Q-${reach} ${guard} -${reach - 2.5} ${guard} ${back}`;
  const blade = `${side} ${back}`;
  const bladeFill = cyl(c, `${key}-b`, 'steel', F.p([0, tip]), F.p([0, guard]), half * 2 * F.s);
  const brass = cyl(c, `${key}-g`, 'brass', F.p([-reach, guard + 2.5]), F.p([reach, guard + 2.5]), 5 * F.s);
  const pom = c.radial(`${key}-p`, 'gold', 0.3, 0.25);
  const wraps = Array.from({ length: Math.floor(grip / 3) }, (_, i) => `M-3.5 ${g2 + 2 + i * 3} L3.5 ${g2 + 3.4 + i * 3}`).join(' ');
  const pc = F.p([0, py]);
  return {
    d: F.d(d),
    art: `<path d="${F.d(d)}" fill="#3A3E52"/>
      ${handle(c, F, `${key}-w`, g2 - 1, ge + 1, 7, 'brown')}
      <path d="${F.d(wraps)}" stroke="#331805" stroke-opacity=".6" stroke-width="${1 * F.s}"/>
      <circle cx="${n(pc[0])}" cy="${n(pc[1])}" r="${pr * F.s}" fill="${pom}"/>
      <path d="${F.d(blade)}" fill="${bladeFill}"/>
      <path d="${F.d(`M0 ${tip + 7} L0 ${guard - 1}`)}" stroke="#3A3E52" stroke-opacity=".35" stroke-width="${1.2 * F.s}" stroke-linecap="round"/>
      <path d="${F.d(`M-${reach - 2.5} ${guard} Q-${reach} ${guard} -${reach} ${guard + 2.5} Q-${reach} ${g2} -${reach - 2.5} ${g2} L${reach - 2.5} ${g2} Q${reach} ${g2} ${reach} ${guard + 2.5} Q${reach} ${guard} ${reach - 2.5} ${guard} Z`)}" fill="${brass}"/>`,
  };
}

module.exports.edged = edged;
module.exports.handle = handle;
module.exports.tools = { hammer, pick, wrench, sword };
// A context that draws nothing, for reading a tool's silhouette at load time.
module.exports.dry = { id: (x) => x, def() {}, radial: () => '', linear: () => '', ramp: (p) => palettes[p] };

// A chain link seen face on, centred on the frame's origin along its x axis: `d` is the solid
// ring (outer edge plus the hole, run the other way round), `mid` the centre line for tube().
function chainLink(F, { len = 16, r = 8, w = 7, x = 0 } = {}) {
  const R = r + w / 2;
  const q = r - w / 2;
  const a = x - len;
  const b = x + len;
  return {
    d: F.d(`M${a} ${-R} L${b} ${-R} A${R} ${R} 0 0 1 ${b} ${R} L${a} ${R} A${R} ${R} 0 0 1 ${a} ${-R} Z M${a} ${-q} A${q} ${q} 0 0 0 ${a} ${q} L${b} ${q} A${q} ${q} 0 0 0 ${b} ${-q} Z`),
    mid: F.d(`M${a} ${-r} L${b} ${-r} A${r} ${r} 0 0 1 ${b} ${r} L${a} ${r} A${r} ${r} 0 0 1 ${a} ${-r} Z`),
    width: w * F.s,
  };
}
module.exports.chainLink = chainLink;

// A closed band of width w around a sampled centre line [[x, y], …], for strands that must be
// a filled `body` rather than a stroke.
function ribbon(pts, w) {
  const h = w / 2;
  const side = (k) => pts.map((p, i) => {
    const a = pts[Math.max(0, i - 1)];
    const b = pts[Math.min(pts.length - 1, i + 1)];
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const l = Math.hypot(dx, dy) || 1;
    return [p[0] - (dy / l) * h * k, p[1] + (dx / l) * h * k];
  });
  const L = side(1);
  const R = side(-1).reverse();
  const f = ([x, y]) => `${n(x)} ${n(y)}`;
  return `M${L.map(f).join(' L')} A${h} ${h} 0 0 1 ${f(R[0])} L${R.map(f).join(' L')} A${h} ${h} 0 0 1 ${f(L[0])} Z`;
}
module.exports.ribbon = ribbon;
