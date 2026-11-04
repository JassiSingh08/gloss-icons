const d = require('../src/parts/device');

const handset = d.turn(d.HANDSET, 0, [48, 30.5], 0.78);
const base = 'M24 46 L72 46 Q76 46 77 50 L83 78 Q84 82 80 82 L16 82 Q12 82 13 78 L19 50 Q20 46 24 46 Z';

module.exports = {
  id: 'telephone',
  name: 'Telephone',
  emoji: '☎️',
  group: 'Objects',
  subgroup: 'phone',
  tags: ['telephone', 'call', 'landline', 'retro', 'ring'],
  tone: 'red',
  body: [handset, base],
  shine: [22, 23, -25],
  shineSize: [5.5, 2.2],
  draw(c) {
    const shell = c.radial('a', 'red', 0.3, 0.15);
    const top = c.linear('top', 'red', [0, 0, 0, 1], 0, 1);
    const dial = c.radial('dial', 'cream', 0.35, 0.3);
    const hub = c.radial('hub', 'red', 0.35, 0.3);
    let holes = '';
    for (let k = 0; k < 9; k++) {
      const [x, y] = d.pt(0, -8.8, -150 + k * 30, [48, 65]);
      holes += `<circle cx="${x}" cy="${y}" r="2.2" fill="#8A0006" opacity=".75"/>`;
    }
    return `<path d="M31 41 L31 47 M65 41 L65 47" stroke="#3D0003" stroke-width="4" stroke-linecap="round"/>
      <path d="${base}" fill="${shell}"/>
      <path d="M24 46 L72 46 Q76 46 77 50 L78 53 L18 53 L19 50 Q20 46 24 46 Z" fill="${top}"/>
      <circle cx="48" cy="65" r="13" fill="${dial}" stroke="#8A5A1E" stroke-opacity=".5" stroke-width="1"/>
      ${holes}
      <circle cx="48" cy="65" r="4.2" fill="${hub}"/>
      <path d="M57.5 72 L61 75.5" stroke="#8A5A1E" stroke-width="1.8" stroke-linecap="round"/>
      <path d="${handset}" fill="${shell}"/>`;
  },
};
