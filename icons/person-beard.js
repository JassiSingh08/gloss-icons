const p = require('../src/parts/person');

const P = p.pose({ hair: 'short' });
module.exports = {
  id: 'person-beard',
  name: 'Person: Beard',
  emoji: '🧔',
  group: 'People & Body',
  subgroup: 'person',
  tags: ['beard', 'bearded', 'facial hair', 'hipster'],
  ...p.spec(P, 'olive'),
  draw: (c) => p.bust(c, P, { garment: 'olive', neck: 'crew', hair: 'short', color: 'brown', beard: true, face: p.face.calm({ mouth: false }) }),
};
