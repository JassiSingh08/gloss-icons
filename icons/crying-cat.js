const f = require('../src/parts/face');
const b = require('../src/parts/face-b');
const k = require('../src/parts/cat');

const E = { y: k.CAT_EYE, dx: k.CAT_DX };
module.exports = {
  ...k.catSpec(),
  id: 'crying-cat',
  name: 'Crying Cat',
  emoji: '😿',
  group: 'Smileys & Emotion',
  subgroup: 'cat-face',
  tags: ['cat', 'crying', 'sad', 'tear', 'upset'],
  draw: (c) => k.catHead(c) + k.whiskers() + b.worried({ y: 40, dx: 12, slant: 5 }) + f.eyes.oval({ ...E, ry: 5 }) + k.nose(c) + f.stroke('M41.5 69 Q48 63 54.5 69', 3.2) + f.extras.drop(c, 63, 63, { scale: 1.1 }),
};
