const f = require('../src/parts/face');
const p = require('../src/parts/person');

const HAIR = 'spiky';
const P = p.pose({ cy: 39, r: 24, sw: 29, sy: 65, neck: 0.9, hair: HAIR });
module.exports = {
  id: 'boy',
  name: 'Boy',
  emoji: '👦',
  group: 'People & Body',
  subgroup: 'person',
  tags: ['boy', 'kid', 'son', 'child'],
  ...p.spec(P, 'green'),
  draw(c) {
    const stripe = c.ramp('green')[0];
    return p.bust(c, P, {
      garment: 'green',
      neck: 'crew',
      hair: HAIR,
      color: 'brown',
      under: `<path d="M21 76 L75 76 M20 70 L76 70" stroke="${stripe}" stroke-opacity=".5" stroke-width="2.6"/>`,
      face: f.brows.flat({ y: 41 }) + f.eyes.oval({ y: 51, ry: 5 }) + f.mouth.smile({ y: 68, w: 9, lift: 3 }),
    });
  },
};
