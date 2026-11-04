const b = require('../src/parts/button');

const x = 'M33 32 L63 62 M63 32 L33 62';
module.exports = {
  ...b.spec('green'),
  id: 'cross-mark-button',
  name: 'Cross Mark Button',
  emoji: '❎',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['cross', 'x', 'no', 'cancel', 'button'],
  draw: (c) =>
    b.face(c, 'green') +
    `<path d="${x}" stroke="${c.ramp('green')[3]}" stroke-opacity=".45" stroke-width="10" fill="none" stroke-linecap="round" transform="translate(1.4 2.4)"/>
    <path d="${x}" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round"/>`,
};
