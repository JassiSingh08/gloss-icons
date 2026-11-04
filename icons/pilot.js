const p = require('../src/parts/person');

const P = p.pose({ cy: 45, r: 21, sy: 65, crown: 'M19 44 L22 38 L22 32 C14 30 8 27 8 22 C8 12 28 5 48 5 C68 5 88 12 88 22 C88 27 82 30 74 32 L74 38 L77 44' });
module.exports = {
  id: 'pilot',
  name: 'Pilot',
  emoji: '🧑‍✈️',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['pilot', 'captain', 'aviator', 'airline', 'flight'],
  tone: 'navy',
  body: P.body,
  shine: [...P.pt(28, 12), -15],
  shineSize: [5, 1.8],
  draw(c) {
    const navy = c.radial('cap', 'navy', 0.35, 0.2);
    const nv = c.ramp('navy');
    const gold = c.linear('gold', 'gold', [0, 0, 1, 1], 0, 2);
    const cap = P.at(`<path d="M22 30 L74 30 L74 40 Q48 44 22 40 Z" fill="#141420"/>
      <path d="M8 22 C8 12 28 5 48 5 C68 5 88 12 88 22 C88 27 82 30 74 32 Q48 36 22 32 C14 30 8 27 8 22 Z" fill="${navy}" stroke="${nv[3]}" stroke-width="1.8"/>
      <path d="M22 38 Q48 34 74 38 Q72 48 48 48 Q24 48 22 38 Z" fill="${c.linear('peak', 'black', [0, 0, 0, 1], 0, 3)}" stroke="#05050A" stroke-width="1.4"/>
      <path d="M30 41 Q40 39 50 40" stroke="#fff" stroke-opacity=".45" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M48 26 C42 22 36 22 32 24 C38 25 42 27 48 30 C54 27 58 25 64 24 C60 22 54 22 48 26 Z" fill="${gold}"/>
      <circle cx="48" cy="26" r="3.6" fill="${gold}" stroke="#5E3A00" stroke-opacity=".6" stroke-width="1"/>`);
    const tab = (x) => `<path d="M${x - 7} 60 L${x + 7} 62 L${x + 6} 67 L${x - 8} 65 Z" fill="${nv[2]}" transform="rotate(${x < 48 ? -12 : 12} ${x} 63)"/><path d="M${x - 5} 62 L${x + 5} 63.5" stroke="#FFC21A" stroke-width="1.4" transform="rotate(${x < 48 ? -12 : 12} ${x} 63)"/>`;
    return p.bust(c, P, { garment: 'white', neck: 'shirt', tie: 'navy', hair: 'short', color: 'dark', under: tab(25) + tab(71), face: p.face.calm(), over: cap });
  },
};
