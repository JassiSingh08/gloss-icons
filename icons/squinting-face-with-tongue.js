const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'squinting-face-with-tongue',
  name: 'Squinting Face With Tongue',
  emoji: '😝',
  group: 'Smileys & Emotion',
  subgroup: 'face-tongue',
  tags: ['tongue', 'blep', 'gross', 'playful', 'squint'],
  draw: (c) => f.head(c) + f.eyes.squint() + f.mouth.grin(c, { y: 58, w: 17, depth: 12, teeth: true, tongue: false })
    + f.extras.tongue(c, 48, 67.5, { scale: 1.35 }),
};
