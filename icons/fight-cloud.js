const h = require('../src/parts/heart');
const s = require('../src/parts/skin');
// A cartoon brawl: a dust cloud with fists and a foot flying out of it, and stars from the blows.
const n = (v) => +v.toFixed(2);
const N = 12;
const P = Array.from({ length: N }, (_, i) => {
  const a = (i * Math.PI * 2) / N - Math.PI / 2;
  return [n(48 + 29 * Math.cos(a)), n(53 + 23 * Math.sin(a))];
});
const body = `M${P[0].join(' ')} ${P.map((p, i) => {
  const q = P[(i + 1) % N];
  const r = n(Math.hypot(q[0] - p[0], q[1] - p[1]) * 0.62);
  return `A${r} ${r} 0 0 1 ${q.join(' ')}`;
}).join(' ')} Z`;
const FIST = 'M-7 -3 Q-7 -7 -3 -7 L3 -7 Q7 -7 7 -3 L7 3 Q7 7 3 7 L-3 7 Q-7 7 -7 3 Z';
const KNUCKLES = 'M-3.5 -7 L-3.5 -2 M0.5 -7 L0.5 -2 M4 -6.5 L4 -2';
const star = (x, y, R) =>
  `M${Array.from({ length: 10 }, (_, i) => {
    const a = (i * Math.PI) / 5 - Math.PI / 2;
    const r = i % 2 ? R * 0.45 : R;
    return `${n(x + r * Math.cos(a))} ${n(y + r * Math.sin(a))}`;
  }).join(' L')} Z`;
module.exports = {
  id: 'fight-cloud',
  name: 'Fight Cloud',
  emoji: '🫯',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['fight', 'brawl', 'scuffle', 'cartoon', 'dust cloud'],
  tone: 'grey',
  body,
  shine: [33, 41, -35],
  shineSize: [6, 2.6],
  draw(c) {
    const fist = (o) => s.shape(c, h.xform(FIST, { ...o, ox: 0, oy: 0 })) + s.crease(h.xform(KNUCKLES, { ...o, ox: 0, oy: 0 }), 1.1);
    const shoe = c.radial('shoe', 'red', 0.35, 0.25);
    const gold = c.radial('star', 'gold', 0.4, 0.3);
    const edge = 'stroke="#5E3A00" stroke-opacity=".5" stroke-width="1" stroke-linejoin="round"';
    return `${s.limb(c, [[38, 44], [22, 26]], 7.5)}${fist({ x: 19.5, y: 22.5, rot: -40, s: 1.15 })}
      ${s.limb(c, [[62, 44], [79, 34]], 7.5)}${fist({ x: 82.5, y: 31.5, rot: -110, s: 1.15 })}
      ${s.limb(c, [[60, 64], [74, 78]], 7.5)}
      <path d="M70 79 C70 74 76 73 81 75 C86 77 88 80 86 82.5 C84 84.5 72 84.5 70 82 Z" fill="${shoe}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1.1"/>
      <path d="${star(50, 16, 7)}" fill="${gold}" ${edge}/>
      <path d="${star(14, 52, 4.5)}" fill="${gold}" ${edge}/>
      <path d="${body}" fill="${c.radial('a', 'grey', 0.35, 0.25)}"/>
      <path d="M38 55 C34 51 37 46 42 47 C46 48 46 53 43 54 M57 63 C61 66 66 63 65 58" stroke="#6E6E80" stroke-opacity=".6" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
  },
};
