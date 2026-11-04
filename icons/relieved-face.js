const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'relieved-face',
  name: 'Relieved Face',
  emoji: '😌',
  group: 'Smileys & Emotion',
  subgroup: 'face-sleepy',
  tags: ['relieved', 'calm', 'content', 'phew', 'at peace'],
  draw: (c) => f.head(c) + a.brows.sad({ y: 35, slant: 2.5, sw: 3 }) + f.eyes.closed({ y: 46 }) + f.mouth.smile({ w: 9, lift: 3 }),
};
