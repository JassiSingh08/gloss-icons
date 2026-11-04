const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ cy: 48, r: 19, sw: 27, sy: 68, hair: 'long' });
module.exports = {
  id: 'person-gesturing-ok',
  name: 'Person Gesturing OK',
  emoji: '🙆',
  group: 'People & Body',
  subgroup: 'person-gesture',
  tags: ['ok', 'yes', 'all good', 'approve', 'circle'],
  ...p.spec(P, 'green'),
  draw: (c) => p.bust(c, P, {
    garment: 'green',
    neck: 'v',
    hair: 'long',
    color: 'brown',
    face: f.brows.raised({ y: 38 }) + f.eyes.smile({ y: 50 }) + f.mouth.smile({ y: 67 }),
  })
    + p.sleeve(c, P, [[25, 70], [16, 50], [19, 30], [32, 17]], 9) + p.hand(c, 41, 14, { rot: 68, s: 1 })
    + p.sleeve(c, P, [[71, 70], [80, 50], [77, 30], [64, 17]], 9) + p.hand(c, 55, 14, { rot: -68, s: 1, flip: true }),
};
