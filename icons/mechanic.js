const p = require('../src/parts/person');

const P = p.pose({ cx: 45, hair: 'short' });
module.exports = {
  id: 'mechanic',
  name: 'Mechanic',
  emoji: '🧑‍🔧',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['mechanic', 'repair', 'wrench', 'garage', 'fix'],
  ...p.spec(P, 'navy'),
  draw(c) {
    const steel = c.linear('steel', 'silver', [0, 0, 1, 1], 0, 2);
    const wrench = `<g transform="translate(76 48) rotate(22)">
        <path d="M-3 -6 C-8.5 -7 -9.5 -14.5 -5.5 -19 L-3 -13.5 L3 -13.5 L5.5 -19 C9.5 -14.5 8.5 -7 3 -6 L2.6 14 C6.5 15 7 21 3.6 23.5 L2 20 L-2 20 L-3.6 23.5 C-7 21 -6.5 15 -2.6 14 Z" fill="${steel}" stroke="#3A3E52" stroke-width="1.2" stroke-linejoin="round"/>
        <path d="M-1 -4 L-1 12" stroke="#fff" stroke-opacity=".7" stroke-width="1.2" stroke-linecap="round"/>
      </g>`;
    const pocket = `<rect x="24" y="68" width="12" height="9" rx="1.5" fill="none" stroke="#080C3D" stroke-opacity=".5" stroke-width="1.4"/><path d="M27 68 L27 64 M30 68 L30 65" stroke="#E3120B" stroke-width="1.6" stroke-linecap="round"/>`;
    return p.bust(c, P, { garment: 'navy', neck: 'shirt', shirt: 'navy', hair: 'short', color: 'brown', under: pocket, face: p.face.calm() })
      + `<ellipse cx="38" cy="47" rx="3" ry="1.6" fill="#2E2E3D" opacity=".35" transform="rotate(-20 38 47)"/>`
      + p.sleeve(c, P, [[76, 63], [81, 78], [70.5, 81.5]], 10) + wrench + p.hand(c, 73, 74, { rot: 22, pose: 'fist', s: 1.05 });
  },
};
