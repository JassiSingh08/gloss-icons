const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'worried-face',
  name: 'Worried Face',
  emoji: '😟',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['worried', 'nervous', 'concerned', 'uneasy', 'anxious'],
  draw: (c) => f.head(c) + b.worried({ y: 35, slant: 5 }) + f.eyes.oval({ y: 46 }) + f.mouth.frown({ y: 68, w: 9 }),
};
