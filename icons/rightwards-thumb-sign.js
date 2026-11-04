const h = require('../src/parts/hand');

// Fist with its curled fingers toward us and the thumb stuck out to the right: that way.
const a = h.hand({ at: [36, 58], scale: 1.38, wrist: false, mirror: true, roll: 180, yaw: -25, fingers: { index: h.CURL, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: { root: 0.9, out: 90, across: 10, bend: [-5, -15], len: [1, 0.75, 0.75] } });

module.exports = {
  id: 'rightwards-thumb-sign',
  name: 'Rightwards Thumb Sign',
  emoji: '🫺',
  group: 'People & Body',
  subgroup: 'hand-fingers-closed',
  tags: ['thumb', 'right', 'hitchhike', 'that way', 'direction'],
  tone: 'yellow',
  body: a.body,
  shine: [30, 42, -30],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
