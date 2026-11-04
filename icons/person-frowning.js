const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ hair: 'bob' });
module.exports = {
  id: 'person-frowning',
  name: 'Person Frowning',
  emoji: '🙍',
  group: 'People & Body',
  subgroup: 'person-gesture',
  tags: ['frown', 'sad', 'unhappy', 'disappointed', 'down'],
  ...p.spec(P, 'slate'),
  draw: (c) => p.bust(c, P, {
    garment: 'slate',
    neck: 'crew',
    hair: 'bob',
    color: 'brown',
    face: f.brows.worried({ y: 41 }) + f.eyes.oval({ y: 50, ry: 4 }) + f.mouth.frown({ y: 70, w: 8 }),
  })
    + p.sleeve(c, P, [[18, 63], [21, 79], [42, 80]], 10) + p.sleeve(c, P, [[78, 63], [75, 79], [54, 80]], 10)
    + p.hand(c, 44.5, 72, { rot: 12, pose: 'fist' }) + p.hand(c, 51.5, 72, { rot: -12, pose: 'fist', flip: true }),
};
