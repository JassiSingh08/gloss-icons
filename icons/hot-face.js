const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

const ink = b.INKS.orange;
module.exports = {
  ...f.spec('orange'),
  id: 'hot-face',
  name: 'Hot Face',
  emoji: '🥵',
  group: 'Smileys & Emotion',
  subgroup: 'face-unwell',
  tags: ['hot', 'heat', 'sweating', 'heatwave', 'flushed'],
  draw(c) {
    return f.head(c, 'orange') + b.worried({ ink, y: 35, slant: 5 }) + f.eyes.lidded({ ink, tilt: -4 })
      + `<path d="M36 61 Q48 64.5 60 61 Q59 70 48 71 Q37 70 36 61 Z" fill="${f.MOUTH}"/>`
      + f.extras.tongue(c, 49, 66, { scale: 1.25, rot: -6 })
      + f.extras.drop(c, 24, 38, { scale: 0.85, rot: -12 }) + f.extras.drop(c, 73, 33, { scale: 1, rot: 10 })
      + f.extras.drop(c, 77, 52, { scale: 0.65, rot: 14 });
  },
};
