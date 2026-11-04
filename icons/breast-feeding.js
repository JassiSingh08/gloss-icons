const f = require('../src/parts/face');
const p = require('../src/parts/person');

// A parent nursing: the baby lies across the chest, head in the crook of the arm on the viewer's
// left and turned in to the chest; the other arm comes round with a hand on the bundle.
const P = p.pose({ cx: 50, cy: 33, r: 21, sw: 33, sy: 59, hair: 'long' });
module.exports = {
  id: 'breast-feeding',
  name: 'Breast-Feeding',
  emoji: '🤱',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['breastfeeding', 'nursing', 'mother', 'baby', 'newborn'],
  ...p.spec(P, 'pink'),
  draw: (c) => p.bust(c, P, {
    garment: 'pink',
    neck: 'crew',
    hair: 'long',
    color: 'dark',
    face: f.brows.flat({ y: 42 }) + f.eyes.closed({ y: 52 }) + f.mouth.smile({ y: 68, w: 8, lift: 2, tick: false }),
  })
    + p.sleeve(c, P, [[19, 61], [19, 76], [26, 82], [52, 83]], 10)
    + p.baby(c, 32, 68, { rot: 16, s: 1.2, wrap: 'sky' })
    + p.sleeve(c, P, [[78, 61], [80, 76], [74, 81], [64, 80]], 9.5)
    + p.hand(c, 57, 76, { rot: -78, pose: 'flat', s: 0.9 }),
};
