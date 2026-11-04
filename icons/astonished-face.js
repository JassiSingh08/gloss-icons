const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'astonished-face',
  name: 'Astonished Face',
  emoji: '😲',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['astonished', 'amazed', 'shocked', 'surprised', 'omg'],
  draw: (c) => f.head(c) + f.brows.raised({ y: 30, dx: 12 }) + f.eyes.wide({ y: 43, dx: 12, r: 6.6, pupil: 2.6 }) + f.mouth.o({ y: 68, rx: 7.5, ry: 9 }),
};
