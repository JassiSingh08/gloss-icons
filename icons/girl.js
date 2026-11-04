const f = require('../src/parts/face');
const p = require('../src/parts/person');

const HAIR = 'pigtails';
const P = p.pose({ cy: 39, r: 24, sw: 29, sy: 65, neck: 0.9, hair: HAIR });
module.exports = {
  id: 'girl',
  name: 'Girl',
  emoji: '👧',
  group: 'People & Body',
  subgroup: 'person',
  tags: ['girl', 'kid', 'daughter', 'child'],
  ...p.spec(P, 'purple'),
  draw(c) {
    const tie = c.radial('tie', 'pink', 0.35, 0.3);
    const knot = (x, y) => `<circle cx="${x}" cy="${y}" r="3.2" fill="${tie}" stroke="#4A0016" stroke-opacity=".5" stroke-width="1"/>`;
    return p.bust(c, P, {
      garment: 'purple',
      neck: 'crew',
      hair: HAIR,
      color: 'dark',
      face: f.brows.flat({ y: 41 }) + f.eyes.oval({ y: 51, ry: 5 }) + f.mouth.smile({ y: 68, w: 9, lift: 3 }),
      over: knot(...P.pt(15, 46)) + knot(...P.pt(81, 46)),
    });
  },
};
