const b = require('../src/parts/button');

const tick = 'M28 48 L42 61 L68 32';
module.exports = {
  ...b.spec('green'),
  id: 'check-mark-button',
  name: 'Check Mark Button',
  emoji: '✅',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['check', 'done', 'complete', 'yes', 'tick'],
  draw: (c) =>
    b.face(c, 'green') +
    `<path d="${tick}" stroke="${c.ramp('green')[3]}" stroke-opacity=".45" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="translate(1.4 2.4)"/>
    <path d="${tick}" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
};
