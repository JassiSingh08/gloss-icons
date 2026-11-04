const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'face-with-open-mouth',
  name: 'Face With Open Mouth',
  emoji: '😮',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['surprised', 'wow', 'oh', 'shocked', 'gasp'],
  draw: (c) => f.head(c) + f.eyes.oval() + f.mouth.o({ y: 67, rx: 6, ry: 7.5 }),
};
