const p = require('../src/parts/person');

const P = p.pose({ hair: 'short' });
module.exports = {
  id: 'person-in-tuxedo',
  name: 'Person In Tuxedo',
  emoji: '🤵',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['tuxedo', 'formal', 'black tie', 'groom', 'gala'],
  ...p.spec(P, 'black'),
  draw(c) {
    const satin = c.linear('bow', 'black', [0, 0, 0, 1], 0, 2);
    const y = P.cy + P.r + 3;
    const bow = `<path d="M48 ${y} L39 ${y - 4.5} Q37.5 ${y} 39 ${y + 4.5} Z M48 ${y} L57 ${y - 4.5} Q58.5 ${y} 57 ${y + 4.5} Z" fill="${satin}" stroke="#05050A" stroke-width="1" stroke-linejoin="round"/>
      <rect x="45.6" y="${y - 2.6}" width="4.8" height="5.2" rx="1.4" fill="#2E2E3D"/>
      <circle cx="48" cy="${y + 10}" r="1.2" fill="#2E2E3D"/><circle cx="48" cy="${y + 16}" r="1.2" fill="#2E2E3D"/>`;
    const pocket = `<path d="M66 70 L68 66.5 L70 69 L72 66 L73.5 70 Z" fill="#fff"/><path d="M64.5 70 L75 70" stroke="#05050A" stroke-width="1.4"/>`;
    return p.bust(c, P, { garment: 'black', neck: 'jacket', hair: 'short', color: 'dark', face: p.face.calm(), over: bow + pocket });
  },
};
