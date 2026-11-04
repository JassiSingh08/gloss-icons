const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// Gauzy wings behind the shoulders, hair up in a bun, a wand with a star, a few sparkles.
const P = p.pose({ cy: 39, r: 21, sw: 28, sy: 64, hair: 'bun' });
const UPPER = 'M40 62 C30 50 14 34 10 20 C22 18 36 30 44 52 Z';
const LOWER = 'M38 66 C28 70 16 78 12 84 C24 86 36 78 42 70 Z';
module.exports = {
  id: 'fairy',
  name: 'Fairy',
  emoji: '🧚',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['fairy', 'magic', 'wings', 'wand', 'sprite'],
  tone: 'magenta',
  ...p.spec(P, 'magenta'),
  ...F.build((c) => {
    const wing = c.radial('wing', 'sky', 0.4, 0.3);
    const w = (d, flip) => `<path d="${d}" ${flip ? 'transform="translate(96 0) scale(-1 1)"' : ''} fill="${wing}" fill-opacity=".85" stroke="#1F7FD1" stroke-opacity=".7" stroke-width="1.2" stroke-linejoin="round"/>`;
    const wings = w(UPPER) + w(LOWER) + w(UPPER, 1) + w(LOWER, 1)
      + `<path d="M38 56 C30 46 22 36 16 26 M58 56 C66 46 74 36 80 26" stroke="#fff" stroke-opacity=".5" stroke-width="1.4" fill="none"/>`;
    const star = `<path d="M82 22 L84 27 L89 27.5 L85 31 L86.5 36 L82 33 L77.5 36 L79 31 L75 27.5 L80 27 Z" fill="${c.linear('star', 'gold', [0, 0, 1, 1], 0, 2)}" stroke="#5E3A00" stroke-width="1" stroke-linejoin="round"/>`;
    return {
      art: wings + F.bust(c, P, { garment: 'magenta', neck: 'v', hair: 'bun', color: 'blond',
        face: f.brows.raised({ y: 36, sw: 3.4 }) + f.eyes.wink({ y: 50 }) + f.mouth.smile({ y: 67 }) + f.extras.blush(c, { y: 59, opacity: 0.4 }) })
        + F.limb(c, [[68, 70], [74, 58], [74, 48]], 7, 'bare', 6) + F.rod('M76 46 L82 31', 1.8, '#FFF3A6', '#5E3A00') + F.hand(c, 74, 50, { dir: -80, thumb: -1 }) + star,
      extra: '<path d="M14 40 L16 44 L14 48 L12 44 Z M22 12 L23.5 15 L22 18 L20.5 15 Z M88 50 L89.5 53 L88 56 L86.5 53 Z" fill="#FFF3A6"/>',
    };
  }),
};
