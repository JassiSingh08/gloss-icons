const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'frowning-face-with-open-mouth',
  name: 'Frowning Face With Open Mouth',
  emoji: '😦',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['frown', 'shocked', 'dismayed', 'oh no', 'gasp'],
  draw: (c) => f.head(c) + f.eyes.oval() + b.openFrown(c, { y: 68, w: 9.5, h: 8 }),
};
