const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'saluting-face',
  name: 'Saluting Face',
  emoji: '🫡',
  group: 'Smileys & Emotion',
  subgroup: 'face-hand',
  tags: ['salute', 'respect', 'yes sir', 'duty', 'troops'],
  draw: (c) => f.head(c) + f.brows.flat({ dx: 11 }).split('/>')[0] + '/>' + f.eyes.oval({ y: 49 }) + f.mouth.flat({ y: 67, w: 8 })
    + a.flatHand(c, { x: 78, y: 43, rot: 28, flip: true, scale: 1.05 }, { lengths: [16, 18, 17, 14], wrist: 8 }),
};
