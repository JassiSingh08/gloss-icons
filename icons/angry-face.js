const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'angry-face',
  name: 'Angry Face',
  emoji: '😠',
  group: 'Smileys & Emotion',
  subgroup: 'face-negative',
  tags: ['angry', 'mad', 'annoyed', 'grumpy', 'cross'],
  draw: (c) => f.head(c) + f.brows.angry({ y: 38, slant: 6 }) + f.eyes.oval({ y: 47, ry: 4.6 }) + f.mouth.frown({ y: 69, w: 9 }),
};
