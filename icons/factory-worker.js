const p = require('../src/parts/person');

// A welding mask tipped up off the face, its dark window looking at the sky.
const MASK = 'M15 50 C10 18 28 -2 48 -2 C68 -2 86 18 81 50';
const P = p.pose({ cy: 45, r: 21, sy: 65, crown: `${MASK}` });
module.exports = {
  id: 'factory-worker',
  name: 'Factory Worker',
  emoji: '🧑‍🏭',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['factory', 'welder', 'industry', 'worker', 'welding'],
  tone: 'brown',
  body: P.body,
  shine: [...P.pt(28, 10), -45],
  shineSize: [5, 2],
  draw(c) {
    const shell = c.radial('shell', 'slate', 0.3, 0.2);
    const sl = c.ramp('slate');
    const glass = c.linear('glass', 'teal', [0, 0, 1, 1], 2, 3);
    const mask = P.at(`<path d="${MASK} C70 40 58 34 48 34 C38 34 26 40 15 50 Z" fill="${shell}" stroke="${sl[3]}" stroke-opacity=".7" stroke-width="1.8" stroke-linejoin="round"/>
      <rect x="31" y="8" width="34" height="15" rx="3" fill="${glass}" stroke="${sl[3]}" stroke-width="2"/>
      <path d="M35 12 L44 12" stroke="#fff" stroke-opacity=".5" stroke-width="2" stroke-linecap="round"/>
      <circle cx="18" cy="44" r="4" fill="${sl[1]}" stroke="${sl[3]}" stroke-width="1.6"/><circle cx="78" cy="44" r="4" fill="${sl[1]}" stroke="${sl[3]}" stroke-width="1.6"/>`);
    const apron = `<path d="M31 66 L65 66 L67 84 L29 84 Z" fill="${c.linear('apron', 'brown', [0, 0, 1, 1], 1, 2)}" stroke="#331805" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M32 67 L28 58 M64 67 L68 58" stroke="#6E3A14" stroke-width="3" stroke-linecap="round"/>`;
    const sparks = `<g stroke="#FFC21A" stroke-width="1.8" stroke-linecap="round"><path d="M78 70 L86 64 M80 74 L89 73 M78 77 L84 82 M75 68 L77 60"/></g><circle cx="76" cy="73" r="3" fill="#FFF7A8"/>`;
    return p.bust(c, P, { garment: 'olive', neck: 'crew', hair: 'crop', color: 'dark', under: apron, face: p.face.calm(), over: mask }) + sparks;
  },
};
