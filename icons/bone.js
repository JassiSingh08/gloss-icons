const h = require('../src/parts/heart');
// A cartoon bone laid on the diagonal: a straight shaft with a double knuckle at each end.
const LOCAL = 'M-22 -6 L22 -6 C24 -15 31 -19 36 -16 C41 -13 41 -5 36 -2 Q34 0 36 2 C41 5 41 13 36 16 C31 19 24 15 22 6 L-22 6 C-24 15 -31 19 -36 16 C-41 13 -41 5 -36 2 Q-34 0 -36 -2 C-41 -5 -41 -13 -36 -16 C-31 -19 -24 -15 -22 -6 Z';
const T = { s: 1, rot: -32, ox: 0, oy: 0, x: 48, y: 48 };
const body = h.xform(LOCAL, T);
module.exports = {
  id: 'bone',
  name: 'Bone',
  emoji: '🦴',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['bone', 'skeleton', 'dog', 'treat', 'halloween'],
  tone: 'cream',
  body,
  shine: h.at([-33, -10], T).concat(-60),
  shineSize: [4.5, 2.2],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'cream', 0.35, 0.3)}"/>
      <path d="${h.xform('M-18 -1.5 L18 -1.5', T)}" stroke="#fff" stroke-opacity=".65" stroke-width="2.2" stroke-linecap="round"/>`;
  },
};
