const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'face-with-hand-over-mouth',
  name: 'Face With Hand Over Mouth',
  emoji: '🤭',
  group: 'Smileys & Emotion',
  subgroup: 'face-hand',
  tags: ['giggle', 'oops', 'tee hee', 'covering mouth', 'secret'],
  draw: (c) => f.head(c) + f.eyes.smile() + f.extras.blush(c, { opacity: 0.35 }) + f.mouth.smile({ w: 10 })
    + a.flatHand(c, { x: 64, y: 77, rot: 30, flip: true, scale: 1.2 }, { lengths: [17, 19.5, 18.5, 15], thumb: true, wrist: 1 }),
};
