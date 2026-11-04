const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'grinning-face-with-smiling-eyes',
  name: 'Grinning Face With Smiling Eyes',
  emoji: '😄',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['happy', 'laugh', 'grin', 'joy', 'cheerful'],
  draw: (c) => f.head(c) + f.eyes.smile() + f.mouth.grin(c),
};
