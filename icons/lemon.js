const L = require('../src/parts/leaf');
// Long oval with a nipple at each end, tipped up to the right.
const body = L.xform('M12 52 C13 49.5 16.5 48 20 47.5 C24 35 35 29 48 29 C61 29 72 35 76 47.5 C79.5 48 83 49.5 84 52 C83 54.5 79.5 56 76 56.5 C72 69 61 75 48 75 C35 75 24 69 20 56.5 C16.5 56 13 54.5 12 52 Z', { rotate: -25, cx: 48, cy: 54 });
module.exports = {
  id: 'lemon',
  name: 'Lemon',
  emoji: '🍋',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['lemon', 'citrus', 'sour', 'fruit', 'zest'],
  tone: 'yellow',
  body,
  shine: [30, 50, -40],
  draw(c) {
    const k = L.kit(c);
    const pores = [[38, 50], [52, 44], [62, 52], [46, 62], [58, 64], [34, 64], [68, 42]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".9"/>`).join('');
    return `${k.leaf([75, 36], [60, 15], 0.3, -0.3)}
      <path d="${body}" fill="${c.radial('a', 'yellow', 0.3, 0.25)}"/>
      <g fill="#B88A00" opacity=".35">${pores}</g>`;
  },
};
