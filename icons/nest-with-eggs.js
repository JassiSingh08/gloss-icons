const L = require('../src/parts/leaf');
// The same nest holding three speckled robin's-egg-blue eggs.
const egg = (x, y, r) => L.xform('M0 -12 C6 -12 9.5 -3 9.5 3 C9.5 9 5.5 12 0 12 C-5.5 12 -9.5 9 -9.5 3 C-9.5 -3 -6 -12 0 -12 Z', { cx: 0, cy: 0, rotate: r, scale: 1.2, dx: x, dy: y });
module.exports = {
  id: 'nest-with-eggs',
  name: 'Nest With Eggs',
  emoji: '🪺',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['nest', 'eggs', 'bird', 'spring', 'easter'],
  tone: 'brown',
  body: L.NEST,
  shine: [20, 60, -50],
  shineSize: [5, 2.2],
  draw(c) {
    c.def(`<radialGradient id="${c.id('egg')}" cx="0.32" cy="0.25" r="0.95"><stop offset="0" stop-color="#F2FCFF"/><stop offset="0.4" stop-color="#A4DEF0"/><stop offset="0.8" stop-color="#4FA2C2"/><stop offset="1" stop-color="#1E5A70"/></radialGradient>`);
    const e = (x, y, r) => `<path d="${egg(x, y, r)}" fill="url(#${c.id('egg')})" stroke="#1E5A70" stroke-opacity=".5" stroke-width="1.1"/>${L.glint(x - 4, y - 6, 3, 1.5, -60 + r)}`;
    const specks = [[30, 41], [36, 47], [64, 40], [60, 47], [46, 47], [52, 42], [44, 54], [68, 48], [50, 56]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".9"/>`).join('');
    const inside = `${e(33, 44, -18)}${e(63, 44, 18)}${e(48, 48, 0)}<g fill="#4A2E14" opacity=".55">${specks}</g>`;
    return L.nest(c, inside);
  },
};
