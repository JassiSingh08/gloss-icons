const p = require('../src/parts/person');

const P = p.pose({ cx: 40, cy: 42, r: 21, sw: 28, sy: 64, hair: 'bun' });
module.exports = {
  id: 'teacher',
  name: 'Teacher',
  emoji: '🧑‍🏫',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['teacher', 'school', 'lesson', 'professor', 'class'],
  ...p.spec(P, 'teal'),
  draw(c) {
    const slate = c.linear('board', 'green', [0, 0, 1, 1], 2, 3);
    const frame = c.linear('frame', 'brown', [0, 0, 1, 1], 0, 2);
    const board = `<rect x="46" y="10" width="40" height="36" rx="3" fill="${frame}" stroke="#331805" stroke-opacity=".6" stroke-width="1.2"/>
      <rect x="49.5" y="13.5" width="33" height="29" rx="1.5" fill="${slate}"/>
      <g stroke="#fff" stroke-opacity=".85" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M70 19 L70 27 M66 23 L74 23"/><path d="M54 33 Q58 29 62 33 T70 33"/>
      </g>`;
    const pointer = `<path d="M64 76 L80 30" stroke="#6E3A14" stroke-width="2.4" stroke-linecap="round"/><path d="M78.6 34 L80 30" stroke="#FFF9EC" stroke-width="2.6" stroke-linecap="round"/>`;
    return board + p.bust(c, P, { garment: 'teal', neck: 'shirt', hair: 'bun', color: 'brown', face: p.face.calm(), over: p.glasses(P) })
      + p.sleeve(c, P, [[65, 66], [70, 80], [63, 81]], 9.5) + pointer + p.hand(c, 65, 74, { rot: 20, pose: 'fist' });
  },
};
