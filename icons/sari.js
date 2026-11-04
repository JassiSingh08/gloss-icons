const g = require('../src/parts/garment');

// One shoulder draped: the pallu runs from the left hip over the right shoulder and falls behind.
const body = 'M37 18 Q47 22 57 15 L65 14 Q72 17 74 25 L81 64 Q81.5 67.5 78 67.5 L73.5 67.5 L77 80 Q77.5 83 74 83 L22 83 Q18.5 83 19 80 L28 47 Q30 38 31.5 28 Q33 20 37 18 Z';

module.exports = {
  id: 'sari',
  name: 'Sari',
  emoji: '🥻',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['sari', 'saree', 'india', 'traditional', 'wedding'],
  tone: 'magenta',
  body,
  shine: [34, 28, -75],
  shineSize: [5, 1.8],
  draw(c) {
    const silk = c.radial('a', 'magenta', 0.3, 0.2);
    const pallu = c.linear('pallu', 'magenta', [0, 0, 1, 1], 0, 2);
    const choli = c.radial('choli', 'orange', 0.3, 0.2);
    const gold = c.linear('gold', 'gold', [0, 0, 1, 1], 0, 2);
    const m = c.ramp('magenta');
    return `<path d="${body}" fill="${silk}"/>
      <path d="M37 18 Q42 21 46 21 L42 40 Q36 42 30 44 L31.5 28 Q33 20 37 18 Z" fill="${choli}"/>
      ${g.fold('M44 56 L41 82.5 M49 56 L48 83 M54 56 L55 82.5', m[3], 0.5, 1.5)}
      <path d="M28.5 46 L57 15 L65 14 L72 20 L37 56 Z" fill="${pallu}"/>
      <path d="M72 20 Q74 26 75 32 L81 64 Q81.5 67.5 78 67.5 L73.5 67.5 L68 36 Z" fill="${m[2]}" opacity=".6"/>
      <path d="M28.5 46 L57 15 M37 56 L72 20" fill="none" stroke="${gold}" stroke-width="3"/>
      <path d="M19.5 79 L76.5 79" stroke="${gold}" stroke-width="3"/>
      <path d="M73.5 67.5 L81 64" stroke="${gold}" stroke-width="2.4" stroke-linecap="round"/>
      ${g.stitch('M34 46 L61 18 M40 49 L66 22', '#FFF3A6', 0.6, 1.2)}`;
  },
};
