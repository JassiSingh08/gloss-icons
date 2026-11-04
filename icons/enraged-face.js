const f = require('../src/parts/face');

module.exports = {
  ...f.spec('red'),
  id: 'enraged-face',
  name: 'Enraged Face',
  emoji: '😡',
  group: 'Smileys & Emotion',
  subgroup: 'face-negative',
  tags: ['angry', 'rage', 'mad', 'furious'],
  draw: (c) => f.head(c, 'red') + f.brows.angry({ ink: '#3D0003' }) + f.eyes.oval({ ink: '#3D0003' }) + f.mouth.frown({ ink: '#3D0003' }),
};
