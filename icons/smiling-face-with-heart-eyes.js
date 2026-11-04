const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'smiling-face-with-heart-eyes',
  name: 'Smiling Face With Heart-Eyes',
  emoji: '😍',
  group: 'Smileys & Emotion',
  subgroup: 'face-affection',
  tags: ['love', 'crush', 'adore', 'heart eyes'],
  draw: (c) => f.head(c) + f.eyes.heart(c) + f.mouth.grin(c, { w: 15, depth: 15 }),
};
