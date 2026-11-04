const L = require('../src/parts/leaf');
// Broad shoulders, a deep dip at the stem and a soft notch underneath: an apple, not a cherry.
const body = 'M48 30 C55 22 68 21 76 28 C83 35 84 48 81 59 C78 72 69 83 58 84 C54 84.5 51 82.5 48 82.5 C45 82.5 42 84.5 38 84 C27 83 18 72 15 59 C12 48 13 35 20 28 C28 21 41 22 48 30 Z';
module.exports = {
  id: 'red-apple',
  name: 'Red Apple',
  emoji: '🍎',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['apple', 'fruit', 'teacher', 'healthy', 'red'],
  tone: 'red',
  body,
  shine: [26, 37, -45],
  draw(c) {
    const k = L.kit(c);
    return `${L.twig('M48 32 C48 25 49.5 19 53 13', 2.6)}
      <path d="${body}" fill="${c.radial('a', 'red', 0.3, 0.25)}"/>
      <path d="M37 31 C42 34.5 54 34.5 59 31" stroke="#3D0003" stroke-opacity=".45" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <path d="M62 34 C70 40 74 50 73 60" stroke="#FFB08A" stroke-opacity=".25" stroke-width="2" stroke-linecap="round" fill="none"/>
      ${k.leaf([51, 22], [73, 13], 0.27, 0.25)}`;
  },
};
