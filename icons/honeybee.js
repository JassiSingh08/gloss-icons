const k = require('../src/parts/critter');
// A honeybee in flight facing left: fuzzy gold body with black bands, glassy wings, a sharp sting.
const body = k.ellipse(52, 56, 25, 17, 0);
module.exports = {
  id: 'honeybee',
  name: 'Honeybee',
  emoji: '🐝',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['bee', 'honey', 'buzz', 'insect', 'pollinate'],
  tone: 'gold',
  body,
  shine: [40, 45, -25],
  draw(c) {
    c.def(`<clipPath id="${c.id('in')}"><path d="${body}"/></clipPath>`);
    const ink = '#1A1000';
    const wing = c.radial('wing', 'sky', 0.3, 0.2);
    const band = c.linear('band', 'black', [0, 0, 1, 1], 0, 2);
    return `${k.part(c, 'M50 42 C44 30 46 16 56 12 C66 10 70 22 64 34 C60 40 56 42 50 42 Z', wing, 'sky', ' opacity=".8"')}
      ${k.part(c, 'M58 42 C60 32 68 24 78 24 C86 26 84 36 76 40 C70 43 64 44 58 42 Z', wing, 'sky', ' opacity=".8"')}
      ${k.legs('M44 72 L40 80 M54 73 L54 81 M62 71 L66 79', ink, 2.6)}
      ${k.legs('M76 58 L86 60', ink, 3)}
      <path d="${body}" fill="${c.radial('a', 'gold', 0.35, 0.25)}"/>
      <g clip-path="url(#${c.id('in')})" fill="${band}">
        <path d="M44 36 C50 46 50 66 44 76 L52 76 C58 66 58 46 52 36 Z"/>
        <path d="M60 36 C66 46 66 66 60 76 L68 76 C74 66 74 46 68 36 Z"/>
        <path d="M76 36 C80 46 80 66 76 76 L90 76 L90 36 Z"/>
      </g>
      ${k.legs('M22 42 C18 34 20 28 14 24 M26 41 C26 32 30 28 28 22', ink, 2)}
      <circle cx="24" cy="54" r="10" fill="${c.radial('head', 'black', 0.3, 0.25)}" stroke="#05050A" stroke-opacity=".5" stroke-width="1.1"/>
      ${k.glint(20.5, 49.5, 2.6, 1.3, -40, 0.7)}
      <circle cx="21" cy="53" r="3.2" fill="#3A3A50"/>${k.eye(21, 53, 2.4, '#05050A')}`;
  },
};
