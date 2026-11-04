const L = require('../src/parts/leaf');
// A little squat, with a dimple at the top where the green star of the stem sits.
const body = 'M48 31 C51 29.5 56 29 60 29.5 C73 31.5 82 42 82 57 C82 73 67 84 48 84 C29 84 14 73 14 57 C14 42 23 31.5 36 29.5 C40 29 45 29.5 48 31 Z';
module.exports = {
  id: 'tangerine',
  name: 'Tangerine',
  emoji: '🍊',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['orange', 'tangerine', 'mandarin', 'citrus', 'fruit'],
  tone: 'orange',
  body,
  shine: [26, 44, -45],
  draw(c) {
    const k = L.kit(c);
    const pores = [[34, 46], [50, 42], [64, 46], [42, 58], [58, 58], [30, 64], [70, 64], [48, 72], [62, 74]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".95"/>`).join('');
    return `<path d="${body}" fill="${c.radial('a', 'orange', 0.3, 0.25)}"/>
      <g fill="#A31F00" opacity=".3">${pores}</g>
      ${k.leaf([49, 30], [70, 15], 0.3, 0.25)}
      ${k.paint(L.xform(L.star(48, 32, 6.5, 2.4, 5), { cx: 48, cy: 32, sy: 0.6 }))}
      <circle cx="48" cy="31.5" r="1.8" fill="#6E3A14"/>`;
  },
};
