const h = require('../src/parts/hand');

const F4 = ['index', 'middle', 'ring', 'pinky'];
const W = { curl: [50, 70, 40] };
const grip = (spread) => ({ curl: [85, 90, 40], spread, front: true });
const A = { at: [34, 50], scale: 0.82, arm: 22, aim: [[1, -0.05, 0], [0, -0.25, -1]], fingers: { index: W, middle: W, ring: W, pinky: W }, thumb: { out: 55, across: 10, bend: [0, 15] } };
const B = { at: [48, 53], scale: 0.82, arm: 22, aim: [[-1, 0.05, 0], [0, 0.25, 1]], fingers: { index: grip(5), middle: grip(1), ring: grip(-3), pinky: grip(-7) }, thumb: { out: 55, across: 10, bend: [0, 15] } };
// Two right hands meeting from either side, thumbs on top, one wrapping its fingers over the back of the other.
const a = h.group([h.hand({ ...B, hide: F4 }), h.hand({ ...A, hide: F4 }), h.hand({ ...B, hide: ['palm', 'thumb'], arm: 0 })]);

module.exports = {
  id: 'handshake',
  name: 'Handshake',
  emoji: '🤝',
  group: 'People & Body',
  subgroup: 'hands',
  tags: ['deal', 'agreement', 'meeting', 'partnership', 'shake hands'],
  tone: 'yellow',
  body: a.body,
  shine: [30, 46, -15],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
