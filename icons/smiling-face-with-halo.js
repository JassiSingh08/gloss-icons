const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'smiling-face-with-halo',
  name: 'Smiling Face With Halo',
  emoji: '😇',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['angel', 'innocent', 'halo', 'saint', 'good'],
  draw: (c) => f.head(c) + a.extras.halo(c) + f.eyes.smile() + f.mouth.smile(),
};
