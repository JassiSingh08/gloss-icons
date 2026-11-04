const h = require('../src/parts/hand');

// The thumbs-up turned over: curled fingers stacked, the thumb pointing down.
const a = h.hand({ at: [44, 36], scale: 1.38, wrist: false, roll: -90, yaw: -25, fingers: { index: h.CURL, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: { root: 0.9, out: 90, across: 10, bend: [-5, -15], len: [1, 0.75, 0.75] } });

module.exports = {
  id: 'thumbs-down',
  name: 'Thumbs Down',
  emoji: '👎',
  group: 'People & Body',
  subgroup: 'hand-fingers-closed',
  tags: ['dislike', 'no', 'bad', 'disapprove', 'thumbs down'],
  tone: 'yellow',
  body: a.body,
  shine: [36, 34, -30],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
