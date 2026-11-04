const g = require('../src/parts/garment');

const body = 'M10 71 Q10 61 22 57.5 L37 51 Q43 47 47 40 Q49.5 35.5 55 35.5 L65 36 Q71 29 78 31 Q86 34 86 46 L86 78 Q86 84 80 84 L16 84 Q10 84 10 78 Z';

module.exports = {
  id: 'running-shoe',
  name: 'Running Shoe',
  emoji: '👟',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['sneaker', 'running', 'sport', 'gym', 'trainers'],
  tone: 'blue',
  body,
  shine: [21, 61, -25],
  shineSize: [6, 2.2],
  draw(c) {
    const mesh = c.radial('a', 'blue', 0.3, 0.2);
    const mid = c.linear('mid', 'white', [0, 0, 0, 1], 0, 2);
    const accent = c.linear('acc', 'orange', [0, 0, 1, 1], 0, 2);
    const b = c.ramp('blue');
    return `<path d="${body}" fill="${mesh}"/>
      <path d="M66 36.5 Q72 31 78 32.5 Q80 38 76 42 Q70 44 66 36.5 Z" fill="${b[3]}" opacity=".7"/>
      <path d="M44 42 Q46 32 52 30 Q56 31 56 36 Z" fill="${b[1]}" stroke="${b[3]}" stroke-opacity=".5" stroke-width="1"/>
      <path d="M10 70 Q48 74 86 66 L86 78 Q86 84 80 84 L16 84 Q10 84 10 78 Z" fill="${mid}"/>
      <path d="M10.5 80 L85.5 80 Q85 84 80 84 L16 84 Q11 84 10.5 80 Z" fill="${accent}"/>
      <path d="M10 70 Q48 74 86 66" fill="none" stroke="${b[3]}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M40 66 Q52 64 58 56 Q64 48 78 47 L79 53 Q68 53 63 60 Q56 69 41 70.5 Z" fill="${accent}"/>
      ${g.fold('M11 64 Q16 57 26 55', '#fff', 0.5, 1.4)}
      <path d="M38 50 L46 44 M42 54 L50 47 M46 58 L54 50" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
      ${g.stitch('M24 61 Q34 56 40 52', '#fff', 0.45)}`;
  },
};
