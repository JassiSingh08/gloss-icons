const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'star-struck',
  name: 'Star-Struck',
  emoji: '🤩',
  group: 'Smileys & Emotion',
  subgroup: 'face-affection',
  tags: ['wow', 'starstruck', 'excited', 'amazed'],
  draw: (c) => f.head(c) + f.eyes.star(c) + f.mouth.grin(c),
};
