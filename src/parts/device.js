// Shared pieces for the music, instrument, phone and computer icons: path helpers that turn a
// drawing about a point (long instruments are drawn upright, then tipped to fill the box), dark
// screen glass in the phone's family, a bilinear map for keys seen in perspective, and the
// optical disc used by the CD and DVD.

const n = (v) => +v.toFixed(2);

// Rounded rectangle, clockwise; rev runs it the other way so it cuts a hole in another subpath.
const rr = (x, y, w, h, r, rev = false) => {
  const X = n(x), Y = n(y), R = n(x + w), B = n(y + h);
  if (rev) return `M${n(x + r)} ${Y} Q${X} ${Y} ${X} ${n(y + r)} L${X} ${n(y + h - r)} Q${X} ${B} ${n(x + r)} ${B} L${n(x + w - r)} ${B} Q${R} ${B} ${R} ${n(y + h - r)} L${R} ${n(y + r)} Q${R} ${Y} ${n(x + w - r)} ${Y} Z`;
  return `M${n(x + r)} ${Y} L${n(x + w - r)} ${Y} Q${R} ${Y} ${R} ${n(y + r)} L${R} ${n(y + h - r)} Q${R} ${B} ${n(x + w - r)} ${B} L${n(x + r)} ${B} Q${X} ${B} ${X} ${n(y + h - r)} L${X} ${n(y + r)} Q${X} ${Y} ${n(x + r)} ${Y} Z`;
};

// rev draws it the other way round, so inside another subpath it cuts a hole.
const ell = (cx, cy, rx, ry = rx, rev = false) => {
  const s = rev ? 1 : 0;
  return `M${n(cx - rx)} ${n(cy)} A${rx} ${ry} 0 1 ${s} ${n(cx + rx)} ${n(cy)} A${rx} ${ry} 0 1 ${s} ${n(cx - rx)} ${n(cy)} Z`;
};

// A point drawn around the origin, turned `angle` degrees clockwise, scaled and moved to `at`.
const pt = (x, y, angle = 0, at = [0, 0], s = 1) => {
  const a = (angle * Math.PI) / 180;
  return [n(at[0] + s * (x * Math.cos(a) - y * Math.sin(a))), n(at[1] + s * (x * Math.sin(a) + y * Math.cos(a)))];
};

// The same for a whole path of absolute M L C Q A Z commands. Arcs keep their flags; only their
// end point moves, their radii scale and their own rotation gains the turn.
function turn(d, angle = 0, at = [0, 0], s = 1) {
  const tok = d.match(/[A-Za-z]|-?\d*\.?\d+(?:e-?\d+)?/g);
  const out = [];
  let i = 0;
  let cmd = null;
  const num = () => Number(tok[i++]);
  const p = () => pt(num(), num(), angle, at, s).join(' ');
  while (i < tok.length) {
    if (/[A-Za-z]/.test(tok[i])) {
      cmd = tok[i++];
      if (!'MLCQAZ'.includes(cmd)) throw new Error(`turn(): unsupported command ${cmd}`);
      if (cmd === 'Z') { out.push('Z'); continue; }
    }
    if (cmd === 'M' || cmd === 'L') out.push(`${cmd}${p()}`);
    else if (cmd === 'Q') out.push(`Q${p()} ${p()}`);
    else if (cmd === 'C') out.push(`C${p()} ${p()} ${p()}`);
    else if (cmd === 'A') {
      const rx = num() * s;
      const ry = num() * s;
      const rot = num() + angle;
      const large = num();
      const sweep = num();
      out.push(`A${n(rx)} ${n(ry)} ${n(rot)} ${large} ${sweep} ${p()}`);
    }
  }
  return out.join(' ');
}

// A transform attribute matching turn(), for groups drawn in the same upright coordinates.
const tf = (angle, at, s = 1) => `translate(${at[0]} ${at[1]}) rotate(${angle})${s === 1 ? '' : ` scale(${s})`}`;

// Dark glass with a little colour, as on the phone.
function glass(c, name = 'scr', [top, bottom] = ['#3B2A8F', '#12002E'], dir = [0, 0, 0.4, 1]) {
  c.def(`<linearGradient id="${c.id(name)}" x1="${dir[0]}" y1="${dir[1]}" x2="${dir[2]}" y2="${dir[3]}"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient>`);
  return `url(#${c.id(name)})`;
}

// Bilinear map of the unit square onto a four-cornered face (TL, TR, BR, BL): keys in perspective.
const quad = (tl, tr, br, bl) => (u, v) => [
  n((1 - v) * ((1 - u) * tl[0] + u * tr[0]) + v * ((1 - u) * bl[0] + u * br[0])),
  n((1 - v) * ((1 - u) * tl[1] + u * tr[1]) + v * ((1 - u) * bl[1] + u * br[1])),
];
// A cell of that map, inset by `g` (in unit fractions) on each side.
const cell = (map, u0, v0, u1, v1, gu = 0, gv = gu) => {
  const a = map(u0 + gu, v0 + gv);
  const b = map(u1 - gu, v0 + gv);
  const c = map(u1 - gu, v1 - gv);
  const d = map(u0 + gu, v1 - gv);
  return `M${a.join(' ')} L${b.join(' ')} L${c.join(' ')} L${d.join(' ')} Z`;
};

// A glossy oval note head joined to its stem. Returns the head's points where the stem's left
// edge meets its top and where the head is widest on the right, so a path can run up the stem
// and come back round the head with one arc.
function noteHead(cx, cy, rx, ry, rotDeg, stemW) {
  const t0 = (rotDeg * Math.PI) / 180;
  const P = (t) => [cx + rx * Math.cos(t) * Math.cos(t0) - ry * Math.sin(t) * Math.sin(t0), cy + rx * Math.cos(t) * Math.sin(t0) + ry * Math.sin(t) * Math.cos(t0)];
  let best = 0;
  for (let k = 0; k < 720; k++) {
    const t = (k / 720) * 2 * Math.PI;
    if (P(t)[0] > P(best)[0]) best = t;
  }
  const right = P(best);
  const xl = right[0] - stemW;
  let top = null;
  for (let k = 0; k < 2880; k++) {
    const t = (k / 2880) * 2 * Math.PI;
    const q = P(t);
    if (q[1] < cy && Math.abs(q[0] - xl) < (top ? Math.abs(top[0] - xl) : 1e9)) top = q;
  }
  return {
    right: right.map(n),
    left: [n(xl), n(top[1])],
    // From the widest point, clockwise round the bottom and back up to the stem's left edge.
    arc: `A${rx} ${ry} ${rotDeg} 1 1 ${n(xl)} ${n(top[1])}`,
  };
}

// A compact disc seen face-on, with a rainbow sheen and a clear hub. `pal` is the face colour.
function disc(c, { cx = 48, cy = 49, r = 34, pal = 'silver', sheen = ['#5BC2FF', '#FF9BEA', '#FFF3A6', '#9BF5E6'] } = {}) {
  const body = `${ell(cx, cy, r)} ${ell(cx, cy, r * 0.13, r * 0.13, true)}`;
  const face = c.radial('a', pal, 0.32, 0.25);
  c.def(`<clipPath id="${c.id('dc')}"><path d="${body}"/></clipPath>`);
  const wedge = (a0, a1, col, op) => {
    const p0 = pt(0, -r * 1.1, a0, [cx, cy]);
    const p1 = pt(0, -r * 1.1, a1, [cx, cy]);
    return `<path d="M${cx} ${cy} L${p0.join(' ')} L${p1.join(' ')} Z" fill="${col}" opacity="${op}"/>`;
  };
  const rk = c.ramp(pal);
  const art = `<path d="${body}" fill="${face}"/>
      <g clip-path="url(#${c.id('dc')})">
        ${wedge(-80, -35, sheen[0], 0.45)}${wedge(-35, 5, sheen[1], 0.35)}${wedge(100, 145, sheen[2], 0.4)}${wedge(145, 190, sheen[3], 0.4)}
        <circle cx="${cx}" cy="${cy}" r="${n(r * 0.66)}" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="1"/>
        <circle cx="${cx}" cy="${cy}" r="${n(r * 0.36)}" fill="#fff" opacity=".35"/>
        <circle cx="${cx}" cy="${cy}" r="${n(r * 0.36)}" fill="none" stroke="${rk[3]}" stroke-opacity=".35" stroke-width="1"/>
        <circle cx="${cx}" cy="${cy}" r="${n(r * 0.22)}" fill="none" stroke="${rk[2]}" stroke-opacity=".5" stroke-width="1"/>
      </g>
      <circle cx="${cx}" cy="${cy}" r="${n(r * 0.13)}" fill="none" stroke="${rk[3]}" stroke-opacity=".6" stroke-width="1.2"/>`;
  return { body, art };
}

// A battery lying on its side: metal casing, dark window, `bars` of four charge cells in `pal`.
const BATTERY = 'M19 31 L71 31 Q78 31 78 38 L78 46 L81.5 46 Q85 46 85 49.5 L85 61.5 Q85 65 81.5 65 L78 65 L78 74 Q78 81 71 81 L19 81 Q12 81 12 74 L12 38 Q12 31 19 31 Z';
function battery(c, bars, pal) {
  const shell = c.linear('a', 'silver', [0, 0, 1, 1], 0, 2);
  const win = glass(c, 'win', ['#2A2350', '#0B0620']);
  const cell = c.linear('cell', pal, [0, 0, 0.6, 1], 0, 2);
  const w = (50 - 9) / 4;
  let cells = '';
  for (let k = 0; k < bars; k++) {
    const x = 20 + k * (w + 3);
    cells += `<rect x="${n(x)}" y="41" width="${n(w)}" height="30" rx="2.5" fill="${cell}"/><rect x="${n(x + 1.6)}" y="43" width="${n(w - 3.2)}" height="4" rx="2" fill="#fff" opacity=".45"/>`;
  }
  for (let k = bars; k < 4; k++) cells += `<rect x="${n(20 + k * (w + 3))}" y="41" width="${n(w)}" height="30" rx="2.5" fill="none" stroke="#8E93AD" stroke-opacity=".22" stroke-width="1.2"/>`;
  return `<path d="${BATTERY}" fill="${shell}"/>
      <path d="M78 47.5 L82 47.5 Q83.5 47.5 83.5 49 L83.5 62 Q83.5 63.5 82 63.5 L78 63.5 Z" fill="#8E93AD"/>
      <path d="${rr(17, 37, 56, 38, 4)}" fill="${win}"/>
      ${cells}`;
}

// The phone from phone.js, moved right by dx: frame, screen glass, camera notch and side button.
// The caller adds what is on the screen.
const phoneBody = (dx = 0) => turn('M37 10 L59 10 Q69 10 69 20 L69 74 Q69 84 59 84 L37 84 Q27 84 27 74 L27 20 Q27 10 37 10 Z', 0, [dx, 0]);
function phone(c, dx = 0) {
  const frame = c.linear('a', 'navy', [0, 0, 1, 1], 0, 2);
  const scr = glass(c);
  const screen = turn('M38 15.5 L58 15.5 Q63.5 15.5 63.5 21 L63.5 73 Q63.5 78.5 58 78.5 L38 78.5 Q32.5 78.5 32.5 73 L32.5 21 Q32.5 15.5 38 15.5 Z', 0, [dx, 0]);
  return `<path d="${phoneBody(dx)}" fill="${frame}"/>
      <path d="${screen}" fill="${scr}"/>
      <rect x="${43 + dx}" y="18.5" width="10" height="3.2" rx="1.6" fill="#12002E"/>
      <path d="M${66.5 + dx} 27 L${66.5 + dx} 36" stroke="#fff" stroke-opacity=".35" stroke-width="1.2" stroke-linecap="round"/>`;
}

// A telephone handset lying level, earpiece left, cups facing down, centred on the origin.
const HANDSET = 'M-44 -4 C-44 -14 -30 -18 0 -18 C30 -18 44 -14 44 -4 L44 4 Q44 10 38 10 L24 10 Q18 10 18 4 L18 0 Q18 -4 13 -4 L-13 -4 Q-18 -4 -18 0 L-18 4 Q-18 10 -24 10 L-38 10 Q-44 10 -44 4 Z';

module.exports = { phoneBody, phone, HANDSET, BATTERY, battery, n, rr, ell, pt, turn, tf, glass, quad, cell, noteHead, disc };
