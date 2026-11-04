const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose();
module.exports = {
  id: 'old-man',
  name: 'Old Man',
  emoji: '👴',
  group: 'People & Body',
  subgroup: 'person',
  tags: ['old man', 'grandpa', 'grandfather', 'senior'],
  ...p.spec(P, 'brown'),
  draw(c) {
    const { fill, edge } = p.hairPaint(c, 'grey', 'tache');
    return p.bust(c, P, {
      garment: 'brown',
      neck: 'shirt',
      hair: 'side',
      color: 'grey',
      face: f.brows.flat({ y: 38, ink: '#8A8FA6', sw: 4 }) + f.eyes.oval({ y: 49 })
        + `<path d="M34 66 C38 59 45 59 48 62 C51 59 58 59 62 66 C57 68 52 66 48 65 C44 66 39 68 34 66 Z" fill="${fill}" stroke="${edge}" stroke-opacity=".55" stroke-width="1.6"/>`,
      over: p.glasses(P) + P.at('<path d="M40 22.5 Q48 20.5 56 22.5" stroke="#6B4A00" stroke-opacity=".35" stroke-width="2" fill="none" stroke-linecap="round"/>'),
    });
  },
};
