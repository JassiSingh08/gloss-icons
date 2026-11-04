const L = require('../src/parts/leaf');
// Wide shoulders tapering to a soft point, freckled with seeds under a ruff of green sepals.
const body = 'M48 27 C62 25 79 28 80 42 C81 56 67 73 53 82 C50 84 46 84 43 82 C29 73 15 56 16 42 C17 28 34 25 48 27 Z';
const SEEDS = [
  [30, 42], [42, 40], [55, 40], [67, 42],
  [24, 52], [36, 51], [49, 50], [61, 51], [72, 52],
  [32, 61], [44, 60], [56, 60], [66, 61],
  [40, 70], [52, 70], [47, 78],
];
module.exports = {
  id: 'strawberry',
  name: 'Strawberry',
  emoji: '🍓',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['strawberry', 'berry', 'fruit', 'sweet', 'summer'],
  tone: 'red',
  body,
  shine: [25, 42, -55],
  shineSize: [6.5, 3],
  draw(c) {
    const k = L.kit(c);
    const seeds = SEEDS.map(([x, y]) => `<ellipse cx="${x}" cy="${y + 0.9}" rx="1.6" ry="2.2" fill="#5A0004" opacity=".45"/><ellipse cx="${x}" cy="${y}" rx="1.15" ry="1.75" fill="#FFE27A"/>`).join('');
    const sepals = L.xform(L.star(48, 30, 19, 6.5, 6, -60), { cx: 48, cy: 30, sy: 0.5 });
    return `<path d="${body}" fill="${c.radial('a', 'red', 0.32, 0.22)}"/>
      ${seeds}
      ${k.paint(sepals)}
      ${k.stem('M48 28 C48 22 49.5 17 52.5 13', 3)}`;
  },
};
