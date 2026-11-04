const L = require('../src/parts/leaf');
// Blocky and lobed, with a fat curled stalk: nothing like an apple once you see the lobes.
const body = 'M30 32 C37 28 43 31 48 31 C53 31 59 28 66 32 C76 37 80 48 78 60 C76.5 72 71 82 62 83 C57 84 53 81 48 81 C43 81 39 84 34 83 C25 82 19.5 72 18 60 C16 48 20 37 30 32 Z';
module.exports = {
  id: 'bell-pepper',
  name: 'Bell Pepper',
  emoji: '🫑',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['pepper', 'capsicum', 'vegetable', 'green', 'salad'],
  tone: 'green',
  body,
  shine: [26, 43, -60],
  draw(c) {
    const k = L.kit(c);
    return `<path d="${body}" fill="${c.radial('a', 'green', 0.3, 0.22)}"/>
      <g stroke="#053A1A" stroke-opacity=".38" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M39 33 C34 47 34 66 39 81"/><path d="M57 33 C62 47 62 66 57 81"/></g>
      <g stroke="#A6F07A" stroke-opacity=".35" stroke-width="2" stroke-linecap="round" fill="none"><path d="M44 38 C42 50 42 62 44 72"/><path d="M63 40 C67 50 67 60 65 70"/></g>
      ${k.paint('M37 32.5 C39 27 44 25 48 25 C52 25 57 27 59 32.5 C55 34.5 52 33 48 34.5 C44 33 41 34.5 37 32.5 Z')}
      ${k.stem('M48 28 C48 21 51 16 57 13.5', 5)}`;
  },
};
