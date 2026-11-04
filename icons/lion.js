const a = require('../src/parts/animal');

// The mane is the silhouette: a ring of soft locks around the face.
const LOCKS = 13;
const mane = [];
for (let i = 0; i < LOCKS * 2; i++) {
  const t = (i / (LOCKS * 2)) * Math.PI * 2;
  const r = i % 2 ? 31.5 : 35;
  mane.push([48 + r * Math.sin(t), 50 - r * Math.cos(t) * 0.97, i % 2 ? 0 : 0]);
}
const body = a.spline(mane);
const MANE = ['#F7B26A', '#C8641E', '#7E3208', '#3A1402'];
const face = a.mirror([[48, 31], [39, 32], [32, 37], [28.5, 47], [29.5, 59], [34, 69], [41, 75.5], [48, 77]]);
module.exports = {
  id: 'lion',
  name: 'Lion',
  emoji: '🦁',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['lion', 'king', 'mane', 'big cat', 'pride', 'leo'],
  tone: 'brown',
  body,
  shine: [26, 27, -45],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#2A1000';
    const ear = (x) => `${a.part(c, 'ear', a.ellipse(x, 33, 6.5, 6), 'amber')}<circle cx="${x + (x < 48 ? 1 : -1)}" cy="34" r="3" fill="#B85F00"/>`;
    const locks = mane.filter((_, i) => i % 2 === 0).map(([x, y]) => a.taper(48 + (x - 48) * 0.62, 50 + (y - 50) * 0.62, 48 + (x - 48) * 0.9, 50 + (y - 50) * 0.9, 2.2, 1.5)).join(' ');
    return `<path d="${body}" fill="${a.custom(c, 'a', MANE, 0.36, 0.22)}"/>
      <path d="${locks}" fill="#5A2006" opacity=".35"/>
      ${ear(33)}${ear(63)}
      ${a.part(c, 'face', face, 'amber', { cx: 0.36, cy: 0.22 })}
      <ellipse cx="42.5" cy="65" rx="7" ry="5.5" fill="#FFF4D6" opacity=".85"/><ellipse cx="53.5" cy="65" rx="7" ry="5.5" fill="#FFF4D6" opacity=".85"/>
      ${a.line('M34 44.5 L43 46.5 M62 44.5 L53 46.5', '#8A4A00', 2.2, ' opacity=".7"')}
      ${a.eyes(50, 9.5, { rx: 3.6, ry: 3, lid: 0.4, tilt: 0.9, ink })}
      <path d="M43 57 L53 57 Q53 60.5 48 63 Q43 60.5 43 57 Z" fill="#8A3A20"/>
      <ellipse cx="46" cy="58" rx="1.8" ry=".8" fill="#fff" opacity=".5"/>
      ${a.line('M48 63 L48 65.5 Q45 69 41.5 67 M48 65.5 Q51 69 54.5 67', ink, 2)}`;
  },
};
