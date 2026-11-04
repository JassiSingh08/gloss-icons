const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'shushing-face',
  name: 'Shushing Face',
  emoji: '🤫',
  group: 'Smileys & Emotion',
  subgroup: 'face-hand',
  tags: ['shush', 'quiet', 'secret', 'silence', 'hush'],
  draw: (c) => f.head(c) + f.brows.flat({ y: 37 }) + f.eyes.lidded({ tilt: 0 }) + a.mouth.pucker({ x: 46 })
    + a.pointHand(c, { x: 51, y: 76, scale: 1.15 }, { index: 17 }),
};
