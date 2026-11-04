// A paella pan: wide and shallow with loop handles, golden rice, prawns, peas and lemon.
const d = require('../src/parts/dish');
const top = Array.from({ length: 40 }, (_, i) => [48 + 33 * Math.cos((i * Math.PI) / 20), 54 + 17 * Math.sin((i * Math.PI) / 20)]);
const body = d.hull([...top, ...top.map(([x, y]) => [x, y + 7])]);
module.exports = {
  id: 'shallow-pan-of-food',
  name: 'Shallow Pan of Food',
  emoji: '🥘',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['paella', 'pan', 'rice', 'spanish', 'dinner'],
  tone: 'slate',
  body,
  shine: [21, 63, -70],
  shineSize: [5, 2.4],
  draw(c) {
    const pan = c.linear('a', 'slate', [0, 0, 0, 1], 1, 3);
    const rim = c.radial('rim', 'slate', 0.3, 0.2);
    const rice = c.radial('rice', 'gold', 0.4, 0.3);
    const prawn = c.linear('prawn', 'orange', [0, 0, 1, 1], 1, 2);
    const handle = (x, s) => `<path d="M${x} 52 C${x + s * 9} 46 ${x + s * 11} 60 ${x} 60" stroke="#1E2A3D" stroke-opacity=".6" stroke-width="5.4" fill="none" stroke-linecap="round"/>
      <path d="M${x} 52 C${x + s * 9} 46 ${x + s * 11} 60 ${x} 60" stroke="#8DA0BA" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;
    const shrimp = (x, y, a) => `<g transform="translate(${x} ${y}) rotate(${a})"><path d="M-6 2 C-7 -5 2 -8 6 -3 C7 0 5 2 3 1 C1 -3 -3 -3 -3 1 Z" fill="${prawn}" stroke="#6B0F00" stroke-opacity=".5" stroke-width=".9"/><path d="M-6 2 L-8.5 4.5 L-4.5 4.2 Z" fill="#E02A00"/></g>`;
    const pea = (x, y) => `<circle cx="${x}" cy="${y}" r="2" fill="#2FB85A" stroke="#053A1A" stroke-opacity=".5" stroke-width=".7"/>`;
    return `${handle(16, -1)}${handle(80, 1)}
      <path d="${body}" fill="${pan}"/>
      <path d="${d.ellipse(48, 54, 33, 17)}" fill="${rim}"/>
      <path d="${d.ellipse(48, 54.6, 29.5, 14.4)}" fill="${rice}"/>
      ${d.grains([[30, 50, 10], [38, 46, -20], [52, 45, 30], [62, 50, -10], [44, 60, 20], [58, 61, -30], [30, 59, 40], [68, 57, 10]], '#FFF3A6', 2.4, 1.3)}
      <path d="M58 58 L70 51 C72 55 70 60 66 62 Z" fill="#FFF07A" stroke="#C98500" stroke-width="1.2" stroke-linejoin="round"/>
      <ellipse cx="34" cy="55" rx="5" ry="2.8" fill="#141420" transform="rotate(-20 34 55)"/><ellipse cx="34.4" cy="54.4" rx="3.2" ry="1.5" fill="#FF8C00" transform="rotate(-20 34 55)"/>
      ${shrimp(46, 51, 10)}${shrimp(58, 47, -20)}${shrimp(40, 61, 170)}
      ${pea(30, 49)}${pea(52, 61)}${pea(65, 47)}${pea(39, 46)}${pea(48, 56)}`;
  },
};
