const h = require('../src/parts/hand');

// Side on: the thumb laid across the bent index (a finger heart), with a small heart to say so.
const a = h.hand({ at: [42, 62], scale: 0.95, aim: [[0.1, 1, 0], [0.75, 0, 0.66]], fingers: { index: { curl: [60, 45, 10] }, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: { root: 0.5, out: 25, across: 45, reach: 'index', off: [-3, 6, 3], bow: [0, 0, 2], front: true } });

module.exports = {
  id: 'hand-with-index-finger-and-thumb-crossed',
  name: 'Hand With Index Finger And Thumb Crossed',
  emoji: '🫰',
  group: 'People & Body',
  subgroup: 'hand-fingers-partial',
  tags: ['finger heart', 'love', 'snap', 'money', 'heart'],
  tone: 'yellow',
  body: a.body,
  shine: [34, 64, -60],
  shineSize: [5, 2.4],
  draw(c) {
    return a.draw(c) + h.heart(c, 70, 24, 1.6, 12);
  },
};
