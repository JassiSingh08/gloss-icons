const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ hair: 'short' });
module.exports = {
  id: 'man',
  name: 'Man',
  emoji: '👨',
  group: 'People & Body',
  subgroup: 'person',
  tags: ['man', 'guy', 'male', 'adult'],
  ...p.spec(P, 'blue'),
  draw: (c) => p.bust(c, P, { garment: 'blue', neck: 'shirt', hair: 'short', color: 'dark', face: p.face.calm() }),
};
