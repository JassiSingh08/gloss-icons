const m = require('../src/parts/metal');
const body = m.round([[36, 9], [60, 9], [73, 29], [64, 84], [32, 84], [23, 29]], 3.5);
const lid = m.round([[38.5, 15], [57.5, 15], [67, 30.5], [59.5, 78], [36.5, 78], [29, 30.5]], 2.5);
module.exports = {
  id: 'coffin',
  name: 'Coffin',
  emoji: '⚰️',
  group: 'Objects',
  subgroup: 'other-object',
  tags: ['coffin', 'death', 'funeral', 'vampire', 'halloween'],
  tone: 'brown',
  body,
  shine: [31, 26, -55],
  shineSize: [5, 2],
  draw(c) {
    const wood = c.linear('a', 'brown', [0, 0, 1, 1], 1, 3);
    const top = c.linear('t', 'brown', [0, 0, 1, 1], 0, 2);
    const brass = c.linear('g', 'gold', [0, 0, 0, 1], 0, 2);
    return `<path d="${body}" fill="${wood}"/>
      <path d="${lid}" fill="${top}"/>
      <path d="${lid}" fill="none" stroke="#FFE2C4" stroke-opacity=".35" stroke-width="1.2"/>
      ${m.part(m.round([[19.5, 42], [24, 42], [24, 52], [19.5, 52]], 1.5), brass, 'gold')}
      ${m.part(m.round([[72, 42], [76.5, 42], [76.5, 52], [72, 52]], 1.5), brass, 'gold')}`;
  },
};
