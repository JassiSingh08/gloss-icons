const h = require('../src/parts/hand');

// A mirrored pair: the hand in o on the left of x = 48, its mirror image (the other hand) on the right.
const pair = (o, dx, y) => [h.hand({ ...o, at: [48 - dx, y] }), h.hand({ ...o, mirror: true, at: [48 + dx, y] })];
const F = [25, 70, 50];
// Two hands curled into a heart: fingers bent over the top, thumbs meeting below, a heart showing through.
const a = h.group(pair({ scale: 0.86, aim: [[0.25, 1, 0], [1, -0.25, -0.3]], fingers: { index: F, middle: F, ring: F, pinky: F }, thumb: { out: 0, across: 80, bend: [20, 30], toward: [0, -1, 0] } }, 21, 62));

module.exports = {
  id: 'heart-hands',
  name: 'Heart Hands',
  emoji: '🫶',
  group: 'People & Body',
  subgroup: 'hands',
  tags: ['love', 'heart', 'gratitude', 'support', 'fans'],
  tone: 'yellow',
  body: a.body,
  shine: [30, 44, -50],
  shineSize: [5, 2.4],
  draw(c) {
    return a.draw(c) + h.heart(c, 48, 51, 1.25);
  },
};
