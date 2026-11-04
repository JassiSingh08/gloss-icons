const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'face-screaming-in-fear',
  name: 'Face Screaming In Fear',
  emoji: '😱',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['scream', 'fear', 'horror', 'shock'],
  draw: (c) => f.head(c) + f.brows.worried({ y: 31 }) + f.eyes.wide() + f.mouth.o({ rx: 7, ry: 10, y: 68 }),
};
