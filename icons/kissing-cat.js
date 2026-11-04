const f = require('../src/parts/face');
const k = require('../src/parts/cat');

const E = { y: k.CAT_EYE, dx: k.CAT_DX };
module.exports = {
  ...k.catSpec(),
  id: 'kissing-cat',
  name: 'Kissing Cat',
  emoji: '😽',
  group: 'Smileys & Emotion',
  subgroup: 'cat-face',
  tags: ['cat', 'kiss', 'love', 'smooch', 'affection'],
  draw: (c) => k.catHead(c) + k.whiskers() + f.eyes.closed({ ...E, h: 3 }) + k.nose(c) + f.stroke('M46.5 63.5 Q52 64.5 49 67 Q52.5 69.5 46.5 71', 3) + `<path d="${f.HEART}" fill="${c.radial('kiss', 'red', 0.35, 0.3)}" transform="translate(65 69) rotate(14) scale(0.8)"/>`,
};
