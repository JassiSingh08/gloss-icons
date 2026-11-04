const h = require('../src/parts/hand');

// Turned three-quarter: thumb and index held a hair apart, the rest curled.
const a = h.hand({ at: [40, 58], scale: 1.15, aim: [[0.05, 1, 0], [0.95, 0, 0.3]], fingers: { index: { curl: [55, 30, 10] }, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: { root: 0.5, out: 20, across: 55, bend: [0, 10] } });

module.exports = {
  id: 'pinching-hand',
  name: 'Pinching Hand',
  emoji: '🤏',
  group: 'People & Body',
  subgroup: 'hand-fingers-partial',
  tags: ['small', 'tiny', 'little bit', 'pinch', 'amount'],
  tone: 'yellow',
  body: a.body,
  shine: [34, 60, -60],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
