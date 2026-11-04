const h = require('../src/parts/hand');

// A fist from the side, knuckles leading right, four curled fingers toward us and the thumb wrapped over them.
const a = h.hand({ at: [44, 60], scale: 1.3, arm: 16, mirror: true, roll: 90, yaw: -25, fingers: { index: h.CURL, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: h.TUCK });

module.exports = {
  id: 'right-facing-fist',
  name: 'Right-Facing Fist',
  emoji: '🤜',
  group: 'People & Body',
  subgroup: 'hand-fingers-closed',
  tags: ['fist bump', 'punch', 'right', 'bro', 'team'],
  tone: 'yellow',
  body: a.body,
  shine: [50, 44, -20],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
