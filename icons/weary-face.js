const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'weary-face',
  name: 'Weary Face',
  emoji: '😩',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['weary', 'exhausted', 'fed up', 'ugh', 'frustrated'],
  draw: (c) => f.head(c) + b.worried({ y: 33, slant: 6 }) + f.stroke('M31 47 Q37 41 43 45.5', 3.6) + f.stroke('M65 47 Q59 41 53 45.5', 3.6) + b.openFrown(c, { y: 68, w: 12, h: 11, teeth: true }),
};
