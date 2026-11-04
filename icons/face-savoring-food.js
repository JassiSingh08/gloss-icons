const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'face-savoring-food',
  name: 'Face Savoring Food',
  emoji: '😋',
  group: 'Smileys & Emotion',
  subgroup: 'face-tongue',
  tags: ['yum', 'delicious', 'tasty', 'savor', 'lick'],
  draw: (c) => f.head(c) + f.eyes.smile() + f.extras.tongue(c, 55.5, 66.5, { rot: -24, scale: 0.95 }) + f.mouth.smile({ w: 13 }),
};
