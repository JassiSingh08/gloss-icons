const p = require('../src/parts/person');

const P = p.pose({ cy: 45, r: 21, sy: 65, crown: 'M19 44 L22 33 L2 19 L2 16 L48 2 L94 16 L94 19 L74 33 L77 44' });
module.exports = {
  id: 'student',
  name: 'Student',
  emoji: '🧑‍🎓',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['graduate', 'student', 'graduation', 'mortarboard', 'university'],
  tone: 'black',
  body: P.body,
  shine: [...P.pt(30, 12), -18],
  shineSize: [5, 1.6],
  draw(c) {
    const board = c.linear('board', 'black', [0, 0, 1, 1], 0, 2);
    const gold = c.radial('tassel', 'gold', 0.4, 0.3);
    const cap = P.at(`<path d="M22 22 L22 34 Q48 42 74 34 L74 22 Z" fill="${c.linear('cap', 'black', [0, 0, 0, 1], 1, 3)}"/>
      <path d="M2 16 L48 30 L94 16 L94 19.5 L48 33.5 L2 19.5 Z" fill="#05050A"/>
      <path d="M2 16 L48 2 L94 16 L48 30 Z" fill="${board}" stroke="#05050A" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M48 16 L84 20 L85 36" stroke="#FFC21A" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <ellipse cx="48" cy="16" rx="3.6" ry="2" fill="#FFC21A"/>
      <path d="M82 34 L88 34 L90.5 48 L79.5 48 Z" fill="${gold}" stroke="#5E3A00" stroke-opacity=".6" stroke-width="1.2" stroke-linejoin="round"/>`);
    return p.bust(c, P, { garment: 'black', neck: 'shirt', hair: 'short', color: 'brown', face: p.face.calm(), over: cap });
  },
};
