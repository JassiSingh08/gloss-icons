const b = require('../src/parts/button');
const g = require('../src/parts/glyph');

module.exports = {
  ...b.spec('white'),
  id: 'check-box-with-check',
  name: 'Check Box With Check',
  emoji: '☑️',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['checkbox', 'check', 'ticked', 'vote', 'done'],
  draw: (c) =>
    b.face(c, 'white') +
    `<path d="${b.rrect(23, 22, 50, 50, 8)}" fill="#E4E0F2" stroke="#6E61A8" stroke-opacity=".55" stroke-width="2.4"/>
    <path d="${b.rrect(23, 22, 50, 50, 8)}" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="1" transform="translate(.9 1.4)"/>` +
    g.tube(c, 'M31 46 L44 59 L72 25', { width: 9, palette: 'blue', name: 'tick' }),
};
