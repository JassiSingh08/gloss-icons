const h = require('../src/parts/hand');

// A fist from the side, knuckles leading left, four curled fingers toward us and the thumb wrapped over them.
const a = h.hand({ at: [52, 60], scale: 1.3, arm: 16, roll: 90, yaw: -25, fingers: { index: h.CURL, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: h.TUCK });

module.exports = {
  id: 'left-facing-fist',
  name: 'Left-Facing Fist',
  emoji: '🤛',
  group: 'People & Body',
  subgroup: 'hand-fingers-closed',
  tags: ['fist bump', 'punch', 'left', 'bro', 'team'],
  tone: 'yellow',
  body: a.body,
  shine: [38, 44, -20],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
