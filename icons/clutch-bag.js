const g = require('../src/parts/garment');

const body = 'M13 47 Q13 37 23 37 L73 37 Q83 37 83 47 L82 73 Q81 83.5 70 83.5 L26 83.5 Q15 83.5 14 73 Z';
const flap = 'M13.6 44 Q15 37.6 23 37.6 L73 37.6 Q81 37.6 82.4 44 Q68 68 48 68 Q28 68 13.6 44 Z';

module.exports = {
  id: 'clutch-bag',
  name: 'Clutch Bag',
  emoji: '👝',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['clutch', 'bag', 'evening', 'party', 'pouch'],
  tone: 'navy',
  body,
  shine: [21, 43, -25],
  draw(c) {
    const satin = c.radial('a', 'navy', 0.3, 0.2);
    const top = c.radial('flap', 'navy', 0.3, 0.05);
    const gold = c.linear('gold', 'gold', [0, 0, 1, 1], 0, 2);
    const n = c.ramp('navy');
    return g.tube(c, 'M23 39 Q22 22 34 22 Q44 22 43 39', { width: 2, palette: 'gold', name: 'chain', box: [22, 22, 44, 39] })
      + `<path d="${body}" fill="${satin}"/>
      ${g.fold('M24 80 Q48 83 72 80', n[0], 0.3, 1.2)}
      <path d="${flap}" fill="${top}" stroke="${n[3]}" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M17.5 44 Q31 63 48 63.5 Q65 63 78.5 44" fill="none" stroke="${gold}" stroke-width="1.3" opacity=".8"/>
      <path d="M44 61.5 L48 57.5 L52 61.5 L48 70 Z" fill="${gold}" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1" stroke-linejoin="round"/>
      <path d="M46.5 61.5 L48 60 L49.5 61.5" stroke="#fff" stroke-opacity=".8" stroke-width=".9" fill="none"/>`;
  },
};
