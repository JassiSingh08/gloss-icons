const L = require('../src/parts/leaf');
// Long, dark and striped, cut at one end to show the pale seedy middle.
const ROT = { rotate: -34, cx: 48, cy: 52 };
const local = 'M10 53 C10 45 16 41 24 41 C40 40 60 40 80 41 C84 41 88 46.4 88 53 C88 59.6 84 65 80 65 C60 66 40 66 24 65 C16 65 10 61 10 53 Z';
const body = L.xform(local, ROT);
module.exports = {
  id: 'cucumber',
  name: 'Cucumber',
  emoji: '🥒',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['cucumber', 'vegetable', 'salad', 'cool', 'green'],
  tone: 'green',
  body,
  shine: [26, 60, -35],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.25" r="0.95"><stop offset="0" stop-color="#A6E884"/><stop offset="0.35" stop-color="#2E8E32"/><stop offset="0.75" stop-color="#0F5218"/><stop offset="1" stop-color="#04260A"/></radialGradient>`);
    const bumps = [[22, 47], [34, 45], [46, 46], [58, 45], [70, 46], [28, 55], [40, 56], [52, 55], [64, 56], [24, 61], [46, 61], [68, 60]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1"/>`).join('');
    return `<g transform="rotate(-34 48 52)">
      <path d="${local}" fill="url(#${c.id('a')})"/>
      <path d="M20 45 C40 43.5 60 43.5 78 44.5 M16 57 C36 58.5 56 58.5 78 58" stroke="#A6E884" stroke-opacity=".35" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <g fill="#DFFFC8" opacity=".55">${bumps}</g>
      <ellipse cx="81.5" cy="53" rx="6" ry="11.5" fill="#E9FFD0" stroke="#7CC85A" stroke-width="1.6"/>
      <g fill="#B8E39A"><ellipse cx="81.5" cy="47" rx="1.2" ry="1.9"/><ellipse cx="81.5" cy="53" rx="1.2" ry="1.9"/><ellipse cx="81.5" cy="59" rx="1.2" ry="1.9"/><ellipse cx="78.6" cy="50" rx="1" ry="1.6"/><ellipse cx="78.6" cy="56" rx="1" ry="1.6"/><ellipse cx="84.4" cy="50" rx="1" ry="1.6"/><ellipse cx="84.4" cy="56" rx="1" ry="1.6"/></g>
      </g>`;
  },
};
