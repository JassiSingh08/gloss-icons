const f = require('../src/parts/face');
const k = require('../src/parts/cat');

const E = { y: k.CAT_EYE, dx: k.CAT_DX };
module.exports = {
  ...k.catSpec(),
  id: 'pouting-cat',
  name: 'Pouting Cat',
  emoji: '😾',
  group: 'Smileys & Emotion',
  subgroup: 'cat-face',
  tags: ['cat', 'grumpy', 'pout', 'angry', 'sulk'],
  draw: (c) => k.catHead(c) + k.whiskers() + f.brows.angry({ y: 41, dx: 12, slant: 5 }) + f.eyes.oval({ ...E, ry: 4.6 }) + k.nose(c) + f.stroke('M42 69 Q48 64 54 69', 3.4),
};
