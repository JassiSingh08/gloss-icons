const h = require('../src/parts/hand');

// A fist coming straight at you, knuckles first.
const a = h.hand({ at: [48, 44], scale: 1.55, wrist: false, pitch: 72, fingers: { index: h.CURL, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: h.TUCK });

module.exports = {
  id: 'oncoming-fist',
  name: 'Oncoming Fist',
  emoji: '👊',
  group: 'People & Body',
  subgroup: 'hand-fingers-closed',
  tags: ['punch', 'fist bump', 'bro', 'hit', 'pow'],
  tone: 'yellow',
  body: a.body,
  shine: [36, 38, -30],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
