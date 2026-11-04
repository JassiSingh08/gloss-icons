const a = require('../src/parts/animal');

const body = a.mirror([[48, 31], [37, 32], [28, 36.5], [22.5, 45], [20, 55], [15.5, 62, 1], [23.5, 66], [33, 75.5], [48, 80]]);
const EAR = [[23, 44], [19.5, 30], [20.5, 16, 1], [30, 23], [38, 32.5]];
const INNER = [[25, 38], [23.5, 29], [24, 21.5, 1], [30, 26.5], [33, 32]];
module.exports = {
  id: 'cat-face',
  name: 'Cat Face',
  emoji: '🐱',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['cat', 'kitten', 'pet', 'meow', 'animal'],
  tone: 'amber',
  body,
  shine: [33, 39, -35],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#2A1200';
    const inner = c.radial('inner', 'pink', 0.5, 0.3);
    const tabby = '#B85F00';
    return `${a.part(c, 'earl', a.spline(EAR), 'amber')}${a.part(c, 'earr', a.spline(a.flipX(EAR)), 'amber')}
      <path d="${a.spline(INNER)}" fill="${inner}" opacity=".75"/><path d="${a.spline(a.flipX(INNER))}" fill="${inner}" opacity=".75"/>
      <path d="${body}" fill="${c.radial('a', 'amber', 0.36, 0.22)}"/>
      <path d="${a.taper(48, 33, 48, 44, 2.2)} ${a.taper(41, 33.5, 43, 42, 1.8)} ${a.taper(55, 33.5, 53, 42, 1.8)}" fill="${tabby}" opacity=".7"/>
      <path d="${a.taper(17, 57, 27, 58, 1.8)} ${a.taper(79, 57, 69, 58, 1.8)}" fill="${tabby}" opacity=".6"/>
      <ellipse cx="42.5" cy="67" rx="7" ry="5.5" fill="#FFF4D6" opacity=".85"/><ellipse cx="53.5" cy="67" rx="7" ry="5.5" fill="#FFF4D6" opacity=".85"/>
      ${a.eyes(52, 11, { rx: 4.3, ry: 3.4, lid: 0.3, tilt: 1.3, ink })}
      <path d="M44.5 61.5 L51.5 61.5 L48 65.5 Z" fill="#C2436A" stroke="#C2436A" stroke-width="1.6" stroke-linejoin="round"/>
      ${a.line('M48 65.5 L48 67 Q45.5 70 42.5 68.5 M48 67 Q50.5 70 53.5 68.5', ink, 1.9)}
      ${a.whiskers(48, 66, 11, { len: 14 })}`;
  },
};
