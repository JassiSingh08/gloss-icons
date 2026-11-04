const L = require('../src/parts/leaf');
// Rounder and smaller-nubbed than the lemon, in deep green: the two never get confused.
const body = L.xform('M17 52 C17.5 50 19.5 49 22 48.5 C25 35 35 27 48 27 C61 27 71 35 74 48.5 C76.5 49 78.5 50 79 52 C78.5 54 76.5 55 74 55.5 C71 69 61 77 48 77 C35 77 25 69 22 55.5 C19.5 55 17.5 54 17 52 Z', { rotate: -20, cx: 48, cy: 56, scale: 1.1 });
module.exports = {
  id: 'lime',
  name: 'Lime',
  emoji: '🍋‍🟩',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['lime', 'citrus', 'sour', 'fruit', 'cocktail'],
  tone: 'green',
  body,
  shine: [30, 48, -40],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.25" r="0.95"><stop offset="0" stop-color="#E4FF9E"/><stop offset="0.35" stop-color="#6CCB2A"/><stop offset="0.75" stop-color="#22800E"/><stop offset="1" stop-color="#0A3A05"/></radialGradient>`);
    const k = L.kit(c);
    const pores = [[38, 50], [52, 44], [62, 54], [46, 62], [58, 66], [34, 66], [66, 42]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".9"/>`).join('');
    return `${k.leaf([74, 36], [60, 14], 0.3, -0.3)}
      <path d="${body}" fill="url(#${c.id('a')})"/>
      <g fill="#E4FF9E" opacity=".35">${pores}</g>`;
  },
};
