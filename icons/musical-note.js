const d = require('../src/parts/device');

const h = d.noteHead(35, 69, 13.5, 10, -22, 6);
const [xl, yl] = h.left;
const [xr, yr] = h.right;
const body = `M${xl} ${yl} L${xl} 13 Q${xl} 11 ${xl + 2} 11 L${xr} 11 C${d.n(xr + 2)} 21 ${d.n(xr + 23)} 25 ${d.n(xr + 19)} 50 C${d.n(xr + 17)} 40 ${d.n(xr + 9)} 34 ${xr} 33 L${xr} ${yr} ${h.arc} Z`;

module.exports = {
  id: 'musical-note',
  name: 'Musical Note',
  emoji: '🎵',
  group: 'Objects',
  subgroup: 'music',
  tags: ['music', 'note', 'song', 'melody', 'tune'],
  tone: 'blue',
  body,
  shine: [28, 64, -30],
  shineSize: [5.5, 2.6],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'blue', 0.3, 0.2)}"/>
      <path d="M${xl + 1.6} 16 L${xl + 1.6} 56" stroke="#fff" stroke-opacity=".35" stroke-width="1.4" stroke-linecap="round"/>`;
  },
};
