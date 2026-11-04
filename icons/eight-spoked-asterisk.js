const b = require('../src/parts/button');

let spokes = '';
for (let k = 0; k < 4; k++) {
  const t = (k * Math.PI) / 4;
  const dx = +(23 * Math.sin(t)).toFixed(2);
  const dy = +(23 * Math.cos(t)).toFixed(2);
  spokes += `M${48 - dx} ${47 - dy} L${48 + dx} ${47 + dy} `;
}
module.exports = {
  ...b.spec('green'),
  id: 'eight-spoked-asterisk',
  name: 'Eight-Spoked Asterisk',
  emoji: '✳️',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['asterisk', 'star', 'spokes', 'note'],
  draw: (c) =>
    b.face(c, 'green') +
    `<path d="${spokes}" stroke="${c.ramp('green')[3]}" stroke-opacity=".45" stroke-width="8" stroke-linecap="round" transform="translate(1.2 2)"/>
    <path d="${spokes}" stroke="#fff" stroke-width="8" stroke-linecap="round"/>`,
};
