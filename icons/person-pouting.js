const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ hair: 'ponytail' });
module.exports = {
  id: 'person-pouting',
  name: 'Person Pouting',
  emoji: '🙎',
  group: 'People & Body',
  subgroup: 'person-gesture',
  tags: ['pout', 'sulk', 'grumpy', 'annoyed', 'huff'],
  ...p.spec(P, 'purple'),
  draw: (c) => p.bust(c, P, {
    garment: 'purple',
    neck: 'crew',
    hair: 'ponytail',
    color: 'black',
    face: f.brows.angry({ y: 41, slant: 3 }) + f.eyes.oval({ y: 50, ry: 4 }) + f.extras.blush(c, { y: 62, dx: 20, opacity: 0.6 })
      + `<path d="M44 70 Q48 66 52 70 Q48 73 44 70 Z" fill="${f.INK}" stroke="${f.INK}" stroke-width="3" stroke-linejoin="round"/>`,
  })
    // The far hand is tucked under the near arm.
    + p.sleeve(c, P, [[78, 62], [79, 76], [36, 79]], 10.5)
    + p.sleeve(c, P, [[18, 62], [17, 72], [62, 75]], 10.5) + p.hand(c, 66, 73, { rot: 90, pose: 'fist' }),
};
