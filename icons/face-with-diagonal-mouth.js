const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'face-with-diagonal-mouth',
  name: 'Face With Diagonal Mouth',
  emoji: '🫤',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['meh', 'unimpressed', 'skeptical', 'disappointed', 'unsure'],
  draw: (c) => f.head(c) + f.eyes.lidded({ tilt: 0 }) + f.mouth.flat({ y: 66, w: 10, tilt: -7 }),
};
