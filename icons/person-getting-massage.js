const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// Eyes closed in bliss while two hands, arms reaching in from either side, rub the temples.
const P = p.pose({ cy: 44, r: 22, sw: 32, sy: 68, hair: 'long' });
module.exports = {
  id: 'person-getting-massage',
  name: 'Person Getting Massage',
  emoji: '💆',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['massage', 'spa', 'relax', 'head massage', 'pamper'],
  tone: 'teal',
  ...p.spec(P, 'teal'),
  ...F.build((c) => ({
    art: F.bust(c, P, { garment: 'white', neck: 'v', hair: 'long', color: 'brown',
      face: f.brows.raised({ y: 38, sw: 3.6 }) + f.eyes.closed({ y: 51 }) + f.mouth.smile({ y: 68, w: 9, lift: 3 }) + f.extras.blush(c, { y: 60, opacity: 0.45 }) })
      + F.limb(c, [[2, 18], [10, 26], [21, 36]], 9, 'teal', 8) + F.hand(c, 20, 35, { dir: 60, thumb: -1 })
      + F.limb(c, [[94, 18], [86, 26], [75, 36]], 9, 'teal', 8) + F.hand(c, 76, 35, { dir: 120, thumb: 1 }),
  })),
};
