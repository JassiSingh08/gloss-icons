const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ cy: 39, r: 21, sw: 24, sy: 64, hair: 'crop' });
module.exports = {
  id: 'person-shrugging',
  name: 'Person Shrugging',
  emoji: '🤷',
  group: 'People & Body',
  subgroup: 'person-gesture',
  tags: ['shrug', 'dunno', 'whatever', 'no idea', 'doubt'],
  ...p.spec(P, 'teal'),
  draw: (c) => p.bust(c, P, {
    garment: 'teal',
    neck: 'crew',
    hair: 'crop',
    color: 'brown',
    face: f.brows.one({ y: 40 }) + f.eyes.lidded({ y: 50 }) + f.mouth.flat({ y: 69, w: 8, tilt: -3 }),
  })
    + p.sleeve(c, P, [[28, 67], [19, 77], [15, 65]], 9) + p.hand(c, 14.5, 56.5, { rot: -25 })
    + p.sleeve(c, P, [[68, 67], [77, 77], [81, 65]], 9) + p.hand(c, 81.5, 56.5, { rot: 25, flip: true }),
};
