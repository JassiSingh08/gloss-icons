const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'smiling-face-with-tear',
  name: 'Smiling Face With Tear',
  emoji: '🥲',
  group: 'Smileys & Emotion',
  subgroup: 'face-affection',
  tags: ['grateful', 'touched', 'bittersweet', 'proud', 'tear'],
  draw: (c) => f.head(c) + a.brows.sad({ slant: 3 }) + f.eyes.smile({ y: 46 }) + f.mouth.smile({ w: 12 }) + f.extras.drop(c, 61.5, 56, { scale: 0.9 }),
};
