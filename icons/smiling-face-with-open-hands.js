const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'smiling-face-with-open-hands',
  name: 'Smiling Face With Open Hands',
  emoji: '🤗',
  group: 'Smileys & Emotion',
  subgroup: 'face-hand',
  tags: ['hug', 'hugging', 'welcome', 'jazz hands', 'warm'],
  draw: (c) => f.head(c) + f.eyes.smile() + f.extras.blush(c, { opacity: 0.4 }) + f.mouth.smile({ y: 62, w: 11 })
    + a.openHand(c, { x: 21, y: 72, rot: -14, scale: 1.15 }) + a.openHand(c, { x: 75, y: 72, rot: 14, flip: true, scale: 1.15 }),
};
