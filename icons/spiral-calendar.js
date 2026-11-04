const p = require('../src/parts/paper');
const body = p.rr(14, 16, 68, 68, 7);
module.exports = {
  id: 'spiral-calendar',
  name: 'Spiral Calendar',
  emoji: '🗓️',
  group: 'Objects',
  subgroup: 'office',
  tags: ['calendar', 'month', 'planner', 'schedule', 'agenda'],
  tone: 'white',
  body,
  shine: [21, 40, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const w = c.ramp('white');
    let cells = '';
    for (let r = 0; r < 4; r++) for (let k = 0; k < 5; k++) if (!(r === 1 && k === 3)) cells += p.rr(20 + k * 11.6, 44 + r * 9.4, 8.4, 6.4, 1.4) + ' ';
    return `<path d="${body}" fill="${c.linear('a', 'white', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M14 22 Q14 16 21 16 L75 16 Q82 16 82 22 L82 36 L14 36 Z" fill="${c.linear('head', 'green', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${cells}" fill="${w[2]}"/>
      <path d="${p.rr(53.6, 52.2, 11.6, 9, 2.4)}" fill="${c.linear('day', 'green', [0, 0, 1, 1], 0, 2)}"/>
      ${p.spiral(c, 22, 74, 15, 8)}`;
  },
};
