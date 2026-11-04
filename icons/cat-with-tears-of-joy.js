const f = require('../src/parts/face');
const b = require('../src/parts/face-b');
const k = require('../src/parts/cat');

const E = { y: k.CAT_EYE, dx: k.CAT_DX };
module.exports = {
  ...k.catSpec(),
  id: 'cat-with-tears-of-joy',
  name: 'Cat With Tears Of Joy',
  emoji: '😹',
  group: 'Smileys & Emotion',
  subgroup: 'cat-face',
  tags: ['cat', 'laughing', 'tears', 'lol', 'funny'],
  draw: (c) => k.catHead(c) + k.whiskers() + f.eyes.squint({ ...E, y: 49 }) + f.mouth.grin(c, { y: 62, w: 13, depth: 13 }) + k.nose(c) + b.stream(c, [[29, 54], [22, 57], [18, 64]], 4.4) + b.stream(c, [[67, 54], [74, 57], [78, 64]], 4.4),
};
