const L = require('../src/parts/leaf');
// Flatter than an apple, faintly lobed, with a green star of sepals instead of a leaf.
const body = 'M48 33 C54 30 63 29.5 70 32 C79 36 83 46 82 57 C81 73 66 84 48 84 C30 84 15 73 14 57 C13 46 17 36 26 32 C33 29.5 42 30 48 33 Z';
module.exports = {
  id: 'tomato',
  name: 'Tomato',
  emoji: '🍅',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['tomato', 'vegetable', 'salad', 'red', 'garden'],
  tone: 'ember',
  body,
  shine: [26, 45, -45],
  draw(c) {
    const k = L.kit(c);
    const sepals = L.xform(L.star(48, 33, 17, 4.5, 6, -75), { cx: 48, cy: 33, sy: 0.55 });
    return `<path d="${body}" fill="${c.radial('a', 'ember', 0.3, 0.25)}"/>
      <path d="M36 35 C31 44 31 55 35 64 M61 35 C66 44 66.5 55 63 63" stroke="#8A1200" stroke-opacity=".28" stroke-width="2" stroke-linecap="round" fill="none"/>
      ${k.paint(sepals)}
      ${k.stem('M48 32 C48 26 49 22 52 19', 3.2)}`;
  },
};
