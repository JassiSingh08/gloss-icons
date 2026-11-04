const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'hushed-face',
  name: 'Hushed Face',
  emoji: '😯',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['hushed', 'surprised', 'stunned', 'quiet', 'speechless'],
  draw: (c) => f.head(c) + f.brows.raised({ y: 33 }) + f.eyes.oval({ y: 46, rx: 3.3, ry: 4.6 }) + f.mouth.o({ y: 67, rx: 4, ry: 4.6 }),
};
