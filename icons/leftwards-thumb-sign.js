const h = require('../src/parts/hand');

// Fist with its curled fingers toward us and the thumb stuck out to the left: that way.
const a = h.hand({ at: [60, 58], scale: 1.38, wrist: false, roll: 180, yaw: -25, fingers: { index: h.CURL, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: { root: 0.9, out: 90, across: 10, bend: [-5, -15], len: [1, 0.75, 0.75] } });

module.exports = {
  id: 'leftwards-thumb-sign',
  name: 'Leftwards Thumb Sign',
  emoji: '🫹',
  group: 'People & Body',
  subgroup: 'hand-fingers-closed',
  tags: ['thumb', 'left', 'hitchhike', 'that way', 'direction'],
  tone: 'yellow',
  body: a.body,
  shine: [52, 42, -30],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
