const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'grinning-face',
  name: 'Grinning Face',
  emoji: '😀',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['happy', 'grin', 'smile', 'cheerful'],
  draw: (c) => f.head(c) + f.brows.flat() + f.eyes.oval() + f.mouth.grin(c),
};
