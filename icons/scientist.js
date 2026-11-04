const p = require('../src/parts/person');

const P = p.pose({ cx: 45, hair: 'curly' });
module.exports = {
  id: 'scientist',
  name: 'Scientist',
  emoji: '🧑‍🔬',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['scientist', 'lab', 'chemistry', 'research', 'flask'],
  ...p.spec(P, 'white'),
  draw(c) {
    const liquid = c.radial('liquid', 'lime', 0.4, 0.3);
    const lens = c.radial('lens', 'sky', 0.35, 0.3);
    const flask = `<g transform="translate(75 62)">
        <path d="M-3 -16 L3 -16 L3 -6 L12 9 Q13 13 9 13 L-9 13 Q-13 13 -12 9 L-3 -6 Z" fill="#fff" fill-opacity=".35"/>
        <path d="M-7.2 2 L7.2 2 L12 9 Q13 13 9 13 L-9 13 Q-13 13 -12 9 Z" fill="${liquid}"/>
        <path d="M-3 -16 L3 -16 L3 -6 L12 9 Q13 13 9 13 L-9 13 Q-13 13 -12 9 L-3 -6 Z" fill="none" stroke="#3A3E52" stroke-width="1.4" stroke-linejoin="round"/>
        <rect x="-4.5" y="-18.5" width="9" height="3" rx="1.2" fill="#D9DCE8" stroke="#3A3E52" stroke-width="1.2"/>
        <circle cx="-2" cy="7" r="1.4" fill="#fff" opacity=".8"/><circle cx="3" cy="4.5" r="1" fill="#fff" opacity=".8"/>
        <path d="M-1 -12 L-1 -6" stroke="#fff" stroke-opacity=".8" stroke-width="1.2" stroke-linecap="round"/>
      </g>`;
    const goggles = P.at(`<path d="M18 33 Q48 24 78 33" stroke="#2E2E3D" stroke-width="4" fill="none"/>
      <rect x="27" y="24" width="18" height="13" rx="6" fill="${lens}" stroke="#2E2E3D" stroke-width="2.6"/>
      <rect x="51" y="24" width="18" height="13" rx="6" fill="${lens}" stroke="#2E2E3D" stroke-width="2.6"/>
      <path d="M31 28 L35 27" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M55 28 L59 27" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`);
    return p.bust(c, P, { garment: 'white', neck: 'jacket', shirt: 'purple', hair: 'curly', color: 'auburn', face: p.face.calm(), over: goggles })
      + p.sleeve(c, P, [[76, 63], [81, 76], [69.5, 87]], 10) + flask + p.hand(c, 72, 80, { rot: 20, pose: 'fist' });
  },
};
