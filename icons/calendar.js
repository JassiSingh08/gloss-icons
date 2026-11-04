const p = require('../src/parts/paper');
const body = p.rr(14, 18, 68, 66, 8);
module.exports = {
  id: 'calendar',
  name: 'Calendar',
  emoji: '📅',
  group: 'Objects',
  subgroup: 'office',
  tags: ['calendar', 'date', 'schedule', 'plan', 'event'],
  tone: 'white',
  body,
  shine: [21, 23, -40],
  draw(c) {
    const w = c.ramp('white');
    let cells = '';
    for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) if (!(r === 2 && k === 2)) cells += p.rr(22 + k * 14, 44 + r * 9.4, 10, 6.4, 1.6) + ' ';
    return `<path d="${body}" fill="${c.linear('a', 'white', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M14 26 Q14 18 22 18 L74 18 Q82 18 82 26 L82 37 L14 37 Z" fill="${c.linear('head', 'red', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M30 13 L30 22 M66 13 L66 22" stroke="#3A3E52" stroke-width="5" stroke-linecap="round"/>
      <path d="M30 13 L30 22 M66 13 L66 22" stroke="${c.linear('ring', 'silver', [0, 0, 1, 0], 0, 2)}" stroke-width="3" stroke-linecap="round"/>
      <path d="${cells}" fill="${w[2]}"/>
      <path d="${p.rr(49, 61.8, 14, 9.6, 2.6)}" fill="${c.linear('day', 'red', [0, 0, 1, 1], 0, 2)}"/>`;
  },
};
