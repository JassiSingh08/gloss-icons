const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'face-blowing-a-kiss',
  name: 'Face Blowing A Kiss',
  emoji: '😘',
  group: 'Smileys & Emotion',
  subgroup: 'face-affection',
  tags: ['kiss', 'flirt', 'love', 'mwah', 'goodbye'],
  draw: (c) => f.head(c) + f.brows.one({ side: -1 }) + f.eyes.wink() + a.mouth.pucker({ x: 46 }) + a.heart(c, 64, 71, { scale: 1.45, rot: 16 }),
};
