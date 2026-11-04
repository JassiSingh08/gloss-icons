const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ hair: 'long' });
module.exports = {
  id: 'woman',
  name: 'Woman',
  emoji: '👩',
  group: 'People & Body',
  subgroup: 'person',
  tags: ['woman', 'lady', 'female', 'adult'],
  ...p.spec(P, 'magenta'),
  draw: (c) => p.bust(c, P, { garment: 'magenta', neck: 'v', hair: 'long', color: 'brown', face: p.face.calm() }),
};
