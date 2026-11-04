const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'slightly-frowning-face',
  name: 'Slightly Frowning Face',
  emoji: '🙁',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['frown', 'sad', 'unhappy', 'disappointed', 'down'],
  draw: (c) => f.head(c) + f.eyes.oval() + f.stroke('M40 70 Q48 64.5 56 69.5', 3.6),
};
