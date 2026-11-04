const p = require('../src/parts/person');
const f = require('../src/parts/face');

const P = p.pose({ cx: 45, cy: 44, r: 21, sy: 64, crown: 'M19 44 L20 38 C10 37 4 36 4 33 C4 29 12 27 22 26 C21 12 29 3 40 5 L48 9 L56 5 C67 3 75 12 74 26 C84 27 92 29 92 33 C92 36 86 37 76 38 L77 44' });
module.exports = {
  id: 'detective',
  name: 'Detective',
  emoji: '🕵️',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['detective', 'sleuth', 'spy', 'investigate', 'mystery'],
  tone: 'sand',
  body: P.body,
  shine: [...P.pt(30, 12), -30],
  shineSize: [4.5, 1.8],
  draw(c) {
    const felt = c.radial('fedora', 'grey', 0.3, 0.2);
    const g = c.ramp('grey');
    const hat = P.at(`<path d="M4 33 C4 29 20 26 48 26 C76 26 92 29 92 33 C92 38 74 39 48 39 C22 39 4 38 4 33 Z" fill="${felt}" stroke="${g[3]}" stroke-width="1.8"/>
      <path d="M22 30 C21 12 29 3 40 5 L48 9 L56 5 C67 3 75 12 74 30 Q48 34 22 30 Z" fill="${felt}" stroke="${g[3]}" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M22.4 23 Q48 27 73.6 23 L74 30 Q48 34 22 30 Z" fill="${c.linear('band', 'black', [0, 0, 0, 1], 0, 2)}"/>
      <path d="M48 10 L48 20" stroke="${g[3]}" stroke-opacity=".5" stroke-width="1.6" stroke-linecap="round"/>`);
    const glass = `<g transform="translate(67 61)">
        <path d="M5 5 L13 15" stroke="#6E3A14" stroke-width="4.4" stroke-linecap="round"/>
        <circle r="9" fill="${c.radial('lens', 'sky', 0.35, 0.3)}" fill-opacity=".75" stroke="${c.linear('rim', 'silver', [0, 0, 1, 1], 0, 2)}" stroke-width="3.2"/>
        <circle r="10.6" fill="none" stroke="#3A3E52" stroke-width=".9"/>
        <path d="M-5 -3 Q-4 -6 -1 -6.5" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>
      </g>`;
    const coat = `<path d="M30 58 L42 72 L37 74 L23 64 Z M60 58 L48 72 L53 74 L67 64 Z" fill="#B08A4E" stroke="#5C4420" stroke-opacity=".6" stroke-width="1.1" stroke-linejoin="round"/>
      <circle cx="40" cy="78" r="1.5" fill="#5C4420"/><circle cx="50" cy="78" r="1.5" fill="#5C4420"/>`;
    return p.bust(c, P, { garment: 'sand', neck: 'none', hair: 'crop', color: 'dark', under: coat, face: f.brows.one({ y: 41, side: 1 }) + f.eyes.lidded({ y: 50 }) + f.mouth.smirk({ y: 68 }), over: hat })
      + p.sleeve(c, P, [[76, 62], [84, 72], [84, 82]], 9.5) + glass + p.hand(c, 79, 76, { rot: -40, pose: 'fist' });
  },
};
