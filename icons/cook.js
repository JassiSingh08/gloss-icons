const p = require('../src/parts/person');

const TOQUE = 'M22 22 C10 20 8 4 20 2 C20 -8 34 -12 42 -5 C48 -12 60 -10 62 -4 C72 -10 86 -2 80 10 C88 14 84 24 74 22';
const P = p.pose({ cx: 44, cy: 47, r: 20, sw: 32, sy: 66, crown: `M19 44 L22 34 L${TOQUE.slice(1)} L74 34 L77 44` });
module.exports = {
  id: 'cook',
  name: 'Cook',
  emoji: '🧑‍🍳',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['cook', 'chef', 'kitchen', 'cooking', 'restaurant'],
  tone: 'white',
  body: P.body,
  shine: [...P.pt(22, 4), -40],
  shineSize: [4.5, 2],
  draw(c) {
    const cloth = c.radial('toque', 'white', 0.3, 0.2);
    const w = c.ramp('white');
    const hat = P.at(`<path d="${TOQUE} Z" fill="${cloth}" stroke="${w[3]}" stroke-opacity=".7" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M22 20 L74 20 L74 34 Q48 38 22 34 Z" fill="${c.linear('band', 'white', [0, 0, 0, 1], 1, 2)}" stroke="${w[3]}" stroke-opacity=".7" stroke-width="1.8"/>
      <path d="M34 22 L34 35 M48 22 L48 36 M62 22 L62 35 M42 -4 C40 2 40 8 44 14 M62 -3 C64 3 64 8 60 14" stroke="${w[3]}" stroke-opacity=".35" stroke-width="1.6" fill="none"/>`);
    const y = P.cy + P.r;
    const jacket = `<path d="M${P.cx - 10} ${y - 4} L${P.cx} ${y + 8} L${P.cx + 10} ${y - 4} L${P.cx + 6} ${y + 3} L${P.cx} ${y + 4} L${P.cx - 6} ${y + 3} Z" fill="${c.radial('kerchief', 'red', 0.4, 0.2)}"/>
      ${[0, 1].map((i) => `<circle cx="${P.cx - 7}" cy="${y + 10 + i * 6}" r="1.5" fill="${w[3]}"/><circle cx="${P.cx + 7}" cy="${y + 10 + i * 6}" r="1.5" fill="${w[3]}"/>`).join('')}`;
    const pan = `<g transform="translate(72 66) rotate(-20)">
        <rect x="-2" y="6" width="4" height="16" rx="2" fill="${c.linear('handle', 'black', [0, 0, 1, 0], 0, 2)}"/>
        <ellipse cx="0" cy="0" rx="12" ry="7" fill="${c.linear('pan', 'black', [0, 0, 1, 1], 0, 2)}" stroke="#05050A" stroke-width="1.2"/>
        <ellipse cx="0" cy="-0.5" rx="9" ry="4.6" fill="#141420"/>
        <ellipse cx="2" cy="-0.5" rx="4" ry="2.8" fill="#fff"/><circle cx="2.5" cy="-0.5" r="1.8" fill="#FFC21A"/>
      </g>`;
    return p.bust(c, P, { garment: 'white', neck: 'none', hair: 'crop', color: 'dark', under: jacket, face: p.face.calm(), over: hat })
      + p.sleeve(c, P, [[74, 64], [80, 76], [80, 87]], 9.5) + pan + p.hand(c, 77, 80, { rot: -20, pose: 'fist' });
  },
};
