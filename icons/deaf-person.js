const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ cx: 50, cy: 38, r: 22, sw: 31, sy: 63, hair: 'crop' });
module.exports = {
  id: 'deaf-person',
  name: 'Deaf Person',
  emoji: '🧏',
  group: 'People & Body',
  subgroup: 'person-gesture',
  tags: ['deaf', 'hearing', 'ear', 'accessibility', 'sign'],
  ...p.spec(P, 'purple'),
  draw(c) {
    const ear = P.at(`<path d="M22 42 C8 36 3 50 7 60 C10 67 18 69 23 64 Z" fill="${c.radial('ear', 'yellow', 0.4, 0.3)}" stroke="#6B4A00" stroke-opacity=".55" stroke-width="1.8"/><path d="M18 47 C11 46 10 56 16 59" stroke="#B88400" stroke-width="2" fill="none" stroke-linecap="round"/>`);
    return p.bust(c, P, {
      garment: 'purple',
      neck: 'crew',
      hair: 'crop',
      color: 'dark',
      face: p.face.calm({ smile: { w: 8, lift: 2, tick: false } }),
      over: ear,
    })
      + p.sleeve(c, P, [[22, 63], [26, 80], [13.5, 67.5]], 9.5) + p.hand(c, 16, 60, { rot: 22, s: 1.05, pose: 'point' });
  },
};
