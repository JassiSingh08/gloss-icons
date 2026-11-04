const p = require('../src/parts/person');

const P = p.pose({ cy: 45, r: 21, sy: 65, crown: 'M19 44 L20 42 C14 42 10 42 10 39 C10 35 14 34 19 34 C17 13 30 2 48 2 C66 2 79 13 77 34 C82 34 86 35 86 39 C86 42 82 42 76 42 L77 44' });
module.exports = {
  id: 'construction-worker',
  name: 'Construction Worker',
  emoji: '👷',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['builder', 'construction', 'hard hat', 'worker', 'site'],
  tone: 'orange',
  body: P.body,
  shine: [...P.pt(30, 14), -40],
  shineSize: [5, 2.2],
  draw(c) {
    const shell = c.radial('hat', 'gold', 0.3, 0.2);
    const g = c.ramp('gold');
    const hat = P.at(`<path d="M19 36 C17 13 30 2 48 2 C66 2 79 13 77 36 Z" fill="${shell}" stroke="${g[3]}" stroke-opacity=".8" stroke-width="1.8"/>
      <path d="M43 3 L53 3 C55 12 55 24 54 35 L42 35 C41 24 41 12 43 3 Z" fill="${g[0]}" stroke="${g[3]}" stroke-opacity=".5" stroke-width="1.4"/>
      <path d="M10 39 C10 35 14 34 20 34 L76 34 C82 34 86 35 86 39 C86 42 82 43 76 43 Q48 39 20 43 C14 43 10 42 10 39 Z" fill="${c.linear('brim', 'gold', [0, 0, 0, 1], 1, 2)}" stroke="${g[3]}" stroke-opacity=".8" stroke-width="1.8"/>`);
    const vest = `<path d="M22 60 C27 60 31 64 33 70 L33 84 L19 84 L18 64 Z M74 60 C69 60 65 64 63 70 L63 84 L77 84 L78 64 Z" fill="${c.linear('vest', 'orange', [0, 0, 1, 1], 1, 2)}"/>
      <path d="M18.5 74 L33 74 M63 74 L77.5 74" stroke="#E6E9F2" stroke-width="3.2"/>`;
    return p.bust(c, P, { garment: 'blue', neck: 'crew', hair: 'crop', color: 'brown', under: vest, face: p.face.calm(), over: hat });
  },
};
