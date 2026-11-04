const h = require('../src/parts/hand');

// Fist seen from the side, curled fingers stacked toward us, the thumb standing up.
const a = h.hand({ at: [52, 60], scale: 1.38, wrist: false, roll: 90, yaw: -25, fingers: { index: h.CURL, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: { root: 0.9, out: 90, across: 10, bend: [-5, -15], len: [1, 0.75, 0.75] } });

module.exports = {
  id: 'thumbs-up',
  name: 'Thumbs Up',
  emoji: '👍',
  group: 'People & Body',
  subgroup: 'hand-fingers-closed',
  tags: ['like', 'yes', 'approve', 'good', 'ok'],
  tone: 'yellow',
  body: a.body,
  shine: [38, 50, -30],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
