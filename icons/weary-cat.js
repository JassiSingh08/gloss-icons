const f = require('../src/parts/face');
const b = require('../src/parts/face-b');
const k = require('../src/parts/cat');

const E = { y: k.CAT_EYE, dx: k.CAT_DX };
module.exports = {
  ...k.catSpec(),
  id: 'weary-cat',
  name: 'Weary Cat',
  emoji: '🙀',
  group: 'Smileys & Emotion',
  subgroup: 'cat-face',
  tags: ['cat', 'shocked', 'scared', 'scream', 'horror'],
  draw: (c) => k.catHead(c) + k.whiskers() + b.fear(c, { to: 44, opacity: 0.7, body: k.CAT }) + b.worried({ y: 39, dx: 12, slant: 5 }) + f.eyes.wide({ ...E, r: 6, pupil: 2.2 }) + k.nose(c) + `<ellipse cx="48" cy="69" rx="5" ry="6.5" fill="${f.MOUTH}"/>` + k.paw(c, { x: 22, y: 71, rot: 14 }) + k.paw(c, { x: 74, y: 71, rot: -14 }),
};
