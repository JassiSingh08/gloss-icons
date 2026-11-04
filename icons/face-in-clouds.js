const f = require('../src/parts/face');

// A bank of cloud covers the lower face. The body is only the visible head above the cloud, so
// the head's outline stops where the cloud starts; the cloud draws its own edge, edge-then-fill
// so the puffs merge.
const TOP = [[24, 63, 8.5], [36.5, 59.5, 8.5], [49.5, 58.5, 9], [62, 59.5, 8.5], [73, 63, 8.5]];
const LOW = [[48, 68, 12], [13, 70, 6.5], [21, 75, 8], [35, 76, 9.5], [50, 77, 9.5], [64, 76, 9.5], [76, 73, 8], [84, 68, 5.5]];
const r2 = (v) => +v.toFixed(2);
// Upper intersection of two circles.
function meet([x1, y1, r1], [x2, y2, r2_]) {
  const dx = x2 - x1, dy = y2 - y1, d = Math.hypot(dx, dy);
  const a = (r1 * r1 - r2_ * r2_ + d * d) / (2 * d);
  const h = Math.sqrt(r1 * r1 - a * a);
  const mx = x1 + (a * dx) / d, my = y1 + (a * dy) / d;
  const p = [[mx + (h * dy) / d, my - (h * dx) / d], [mx - (h * dy) / d, my + (h * dx) / d]];
  return (p[0][1] < p[1][1] ? p[0] : p[1]).map(r2);
}
const HEAD = [f.CX, f.CY, f.R];
const pts = [meet(HEAD, TOP[0]), ...TOP.slice(1).map((p, i) => meet(TOP[i], p)), meet(TOP[TOP.length - 1], HEAD)];
const body = `M${pts[0].join(' ')} A30 30 0 1 1 ${pts[pts.length - 1].join(' ')} ${TOP.slice().reverse().map((p, i) => `A${p[2]} ${p[2]} 0 0 0 ${pts[pts.length - 2 - i].join(' ')}`).join(' ')} Z`;
module.exports = {
  ...f.spec(),
  id: 'face-in-clouds',
  name: 'Face In Clouds',
  emoji: '😶‍🌫️',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['foggy', 'confused', 'absent minded', 'head in the clouds', 'dreamy'],
  body,
  draw(c) {
    const [, , , sh] = c.ramp('white');
    c.def(`<radialGradient id="${c.id('cloud')}" gradientUnits="userSpaceOnUse" cx="30" cy="56" r="40"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.55" stop-color="#F2EFFA"/><stop offset="1" stop-color="#CBC3E3"/></radialGradient>`);
    const puffs = [...LOW, ...TOP];
    const cloud = (o) => puffs.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"${o}/>`).join('');
    return f.head(c) + f.eyes.oval({ y: 45 })
      + cloud(` fill="none" stroke="${sh}" stroke-opacity=".75" stroke-width="2.6"`) + cloud(` fill="url(#${c.id('cloud')})"`)
      + `<ellipse cx="31" cy="56.5" rx="4" ry="1.8" fill="#fff" transform="rotate(-20 31 56.5)"/>`;
  },
};
