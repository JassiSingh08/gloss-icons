const L = require('../src/parts/leaf');
// A heavy bulb swinging up to a narrow neck under a spiky green cap.
const body = 'M64 25 C72 23 79 29 77 38 C75 47 71 55 66 63 C59 75 48 84 33 83 C21 82 14 73 16 62 C18 51 29 46 39 42 C50 37.5 55 27 64 25 Z';
module.exports = {
  id: 'eggplant',
  name: 'Eggplant',
  emoji: '🍆',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['eggplant', 'aubergine', 'vegetable', 'purple', 'cheeky'],
  tone: 'purple',
  body,
  shine: [22, 59, -40],
  draw(c) {
    const k = L.kit(c);
    const cap = 'M55 31 C57 23 65 18 73 19 C79 20 82 25 81 31 C80 35 78 38 75 41 C74 37 72.5 35 70 34.5 C69 38 67 41 63 43 C63 39 62 36 59.5 35 C58 37 56 38 52.5 38.5 C53.5 36 54 33.5 55 31 Z';
    return `<path d="${body}" fill="${c.radial('a', 'purple', 0.32, 0.25)}"/>
      <path d="M30 51 C38 47 46 44 52 40" stroke="#C58BFF" stroke-opacity=".35" stroke-width="2" stroke-linecap="round" fill="none"/>
      ${k.stem('M73 21 C75 16 78 12.5 82 10.5', 4)}
      ${k.paint(cap)}
      <path d="M60 28 C64 24 70 22 76 23" stroke="${k.light}" stroke-opacity=".6" stroke-width="1.2" stroke-linecap="round" fill="none"/>`;
  },
};
