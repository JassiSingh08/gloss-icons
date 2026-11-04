const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'smiling-face-with-hearts',
  name: 'Smiling Face With Hearts',
  emoji: '🥰',
  group: 'Smileys & Emotion',
  subgroup: 'face-affection',
  tags: ['love', 'adored', 'crush', 'hearts', 'affection'],
  draw: (c) => f.head(c) + f.eyes.smile() + f.extras.blush(c) + f.mouth.smile()
    + a.heart(c, 18, 36, { scale: 1.35, rot: -22 }) + a.heart(c, 79, 25, { scale: 1.1, rot: 18 }) + a.heart(c, 80, 68, { scale: 1.25, rot: 24 }),
};
