const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'face-with-crossed-out-eyes',
  name: 'Face With Crossed-Out Eyes',
  emoji: '😵',
  group: 'Smileys & Emotion',
  subgroup: 'face-unwell',
  tags: ['knocked out', 'dead', 'dizzy', 'ko', 'shocked'],
  draw: (c) => f.head(c) + f.eyes.cross({ s: 4.6 }) + f.mouth.o({ rx: 5.5, ry: 6.5, y: 67 }),
};
