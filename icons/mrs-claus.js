const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// Silver bun, round glasses, a red dress with a white fur collar and a sprig of holly.
const P = p.pose({ hair: 'bun' });
module.exports = {
  id: 'mrs-claus',
  name: 'Mrs. Claus',
  emoji: '🤶',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['mrs claus', 'christmas', 'holiday', 'festive', 'mother christmas'],
  tone: 'red',
  ...p.spec(P, 'red'),
  ...F.build((c) => {
    const fur = c.radial('trim', 'white', 0.3, 0.2);
    const collar = `<path d="M26 66 C30 58 40 58 48 64 C56 58 66 58 70 66 C66 72 58 72 48 68 C38 72 30 72 26 66 Z" fill="${fur}" stroke="#8C83AD" stroke-width="1.2"/>`;
    const holly = `<path d="M58 74 C62 70 68 70 70 73 C67 74 66 77 62 78 Z M58 74 C60 79 58 83 55 84 C55 80 54 78 56 76 Z" fill="${c.radial('leaf', 'green', 0.3, 0.2)}" stroke="#053A1A" stroke-width="1"/>
      <circle cx="58" cy="74" r="2.4" fill="#E3120B"/><circle cx="61" cy="77" r="2" fill="#E3120B"/>`;
    return {
      art: F.bust(c, P, { garment: 'red', neck: 'none', hair: 'bun', color: 'grey', under: collar + holly,
        face: f.brows.raised({ y: 37, sw: 3.6 }) + f.eyes.smile({ y: 50 }) + f.mouth.smile({ y: 68 }) + f.extras.blush(c, { y: 60, opacity: 0.45 }) })
        + p.glasses(P, { y: 50 }),
    };
  }),
};
