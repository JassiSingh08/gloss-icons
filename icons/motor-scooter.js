const v = require('../src/parts/vehicle');
const body = 'M18 68 Q11 68 12 58 Q13 46 24 45 L40 45 Q45 45 45 52 L45 61 L60 61 L63 34 Q63.5 31 66.5 31 L68 31 Q70.5 31 70.5 34 L72.5 62 Q73 68 67 68 Z';
module.exports = {
  id: 'motor-scooter',
  name: 'Motor Scooter',
  emoji: '🛵',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['scooter', 'moped', 'delivery', 'vespa', 'city'],
  tone: 'sky',
  body,
  shine: [18, 51, -45],
  shineSize: [4.5, 2],
  draw(c) {
    const paint = c.linear('a', 'sky', [0, 0, 0.5, 1], 0, 2);
    const seat = c.linear('seat', 'brown', [0, 0, 0, 1], 1, 3);
    const s = c.ramp('sky');
    return `<path d="M58 25 L77 23.5" stroke="#2E2E3D" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M62 30 Q62 24 67.5 24 Q73 24 73 30 Z" fill="${paint}" stroke="${s[3]}" stroke-opacity=".5" stroke-width="1.2"/>
      ${v.lamp(72.5, 27.5, 2, 2.4)}
      <path d="${v.rr(19, 38.5, 24, 7.5, [3.5, 3.5, 1, 1])}" fill="${seat}" stroke="#331805" stroke-opacity=".5" stroke-width="1"/>
      <path d="M65 64 Q71 61 78 66 L78 70 L66 70 Z" fill="${s[2]}" stroke="${s[3]}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${body}" fill="${paint}"/>
      <path d="M46 61.5 L59.5 61.5" stroke="#141420" stroke-opacity=".55" stroke-width="2" stroke-linecap="round"/>
      <path d="M22 55 L38 55" stroke="${s[3]}" stroke-opacity=".35" stroke-width="1.3" stroke-linecap="round"/>
      ${v.wheel(c, 24, 75.5, 8.5)}${v.wheel(c, 71, 75.5, 8.5)}`;
  },
};
