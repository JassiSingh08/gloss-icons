const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ cy: 40, r: 27, sw: 26, sy: 68, neck: 0.95 });
module.exports = {
  id: 'baby',
  name: 'Baby',
  emoji: '👶',
  group: 'People & Body',
  subgroup: 'person',
  tags: ['baby', 'infant', 'newborn', 'little one'],
  ...p.spec(P, 'sky'),
  draw: (c) => p.bust(c, P, {
    garment: 'sky',
    hair: 'tuft',
    color: 'brown',
    face: f.eyes.oval({ y: 50, rx: 3.6, ry: 4.4 }) + f.extras.blush(c, { y: 60, opacity: 0.55 }) + f.mouth.smile({ y: 68, w: 7, lift: 2, tick: false }),
  }),
};
