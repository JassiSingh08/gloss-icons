const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'grinning-squinting-face',
  name: 'Grinning Squinting Face',
  emoji: '😆',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['laugh', 'squint', 'lol', 'hilarious', 'grin'],
  draw: (c) => f.head(c) + f.eyes.squint({ y: 42 }) + f.mouth.grin(c, { y: 55, w: 20, depth: 22 }),
};
