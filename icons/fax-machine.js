const d = require('../src/parts/device');

const body = 'M18 42 L78 42 Q84 42 84 48 L84 77 Q84 82 79 82 L17 82 Q12 82 12 77 L12 48 Q12 42 18 42 Z';

module.exports = {
  id: 'fax-machine',
  name: 'Fax Machine',
  emoji: '📠',
  group: 'Objects',
  subgroup: 'phone',
  tags: ['fax', 'office', 'send', 'document', 'retro'],
  tone: 'white',
  body,
  shine: [17, 50, -50],
  shineSize: [4.5, 2],
  draw(c) {
    const box = c.linear('a', 'white', [0, 0, 1, 1], 0, 2);
    const top = c.linear('top', 'white', [0, 0, 0, 1], 0, 1);
    const paper = c.linear('paper', 'white', [0, 0, 0, 1], 0, 1);
    const hs = c.radial('hs', 'navy', 0.3, 0.2);
    const lcd = d.glass(c, 'lcd');
    let keys = '';
    for (let r = 0; r < 3; r++) for (let k = 0; k < 3; k++) keys += `<rect x="${59 + k * 7}" y="${59 + r * 6}" width="5" height="4" rx="1.2"/>`;
    return `<path d="M51 13 L77 13 L77 46 L51 46 Z" fill="${paper}" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1"/>
      <path d="M56 20 L72 20 M56 25.5 L72 25.5 M56 31 L66 31" stroke="#7A8CB0" stroke-width="2" stroke-linecap="round"/>
      <path d="${body}" fill="${box}"/>
      <path d="M18 42 L78 42 Q84 42 84 48 L84 52 L12 52 L12 48 Q12 42 18 42 Z" fill="${top}"/>
      <path d="M50 44.5 L79 44.5" stroke="#3D4FD6" stroke-opacity=".6" stroke-width="2.4" stroke-linecap="round"/>
      <path d="${d.turn(d.HANDSET, 0, [30.5, 41], 0.4)}" fill="${hs}" stroke="#080C3D" stroke-opacity=".6" stroke-width="1"/>
      <path d="${d.rr(18, 58, 32, 11, 2.5)}" fill="${lcd}"/>
      <path d="M22.5 63.5 L37 63.5" stroke="#9BF5E6" stroke-width="2.4" stroke-linecap="round"/>
      <g fill="#3D4FD6" opacity=".75">${keys}</g>
      <path d="M18 75 L78 75" stroke="#8C83AD" stroke-opacity=".5" stroke-width="1.4" stroke-linecap="round"/>`;
  },
};
