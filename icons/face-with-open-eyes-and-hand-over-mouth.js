const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'face-with-open-eyes-and-hand-over-mouth',
  name: 'Face With Open Eyes And Hand Over Mouth',
  emoji: '🫢',
  group: 'Smileys & Emotion',
  subgroup: 'face-hand',
  tags: ['gasp', 'shock', 'awe', 'omg', 'surprise'],
  draw: (c) => f.head(c) + f.brows.raised({ y: 31 }) + f.eyes.wide({ y: 44, r: 6.4, pupil: 3 })
    + a.flatHand(c, { x: 64, y: 78, rot: 26, flip: true, scale: 1.2 }, { lengths: [17, 19.5, 18.5, 15], thumb: true, wrist: 1 }),
};
