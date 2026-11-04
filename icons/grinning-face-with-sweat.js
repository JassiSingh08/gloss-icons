const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'grinning-face-with-sweat',
  name: 'Grinning Face With Sweat',
  emoji: '😅',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['phew', 'nervous', 'relief', 'awkward', 'sweat'],
  draw: (c) => f.head(c) + a.brows.sad({ y: 34, slant: 3 }) + f.eyes.smile() + f.mouth.grin(c) + f.extras.drop(c, 71, 33, { scale: 1.15, rot: -12 }),
};
