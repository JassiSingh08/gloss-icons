const h = require('../src/parts/hand');

// Thumb, index and little finger out; middle and ring folded down.
const a = h.hand({ at: [47, 56], scale: 0.95, fingers: { index: { spread: 9 }, middle: h.CURL, ring: h.CURL, pinky: { spread: -14 } }, thumb: { out: 62, bend: [-5, 5] } });

module.exports = {
  id: 'love-you-gesture',
  name: 'Love-You Gesture',
  emoji: '🤟',
  group: 'People & Body',
  subgroup: 'hand-fingers-partial',
  tags: ['love you', 'ily', 'sign language', 'rock', 'love'],
  tone: 'yellow',
  body: a.body,
  shine: [38, 58, -60],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
