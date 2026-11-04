const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// Long fair hair parted round tall pointed ears, a green tunic with a leaf clasp.
const P = p.pose({ hair: 'long' });
module.exports = {
  id: 'elf',
  name: 'Elf',
  emoji: '🧝',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['elf', 'fantasy', 'pointed ears', 'legend', 'forest'],
  tone: 'green',
  ...p.spec(P, 'green'),
  ...F.build((c) => {
    const ear = (side) => P.at(`<path d="M${48 + side * 26} 50 C${48 + side * 34} 42 ${48 + side * 42} 30 ${48 + side * 46} 18 C${48 + side * 40} 22 ${48 + side * 30} 32 ${48 + side * 24} 40 Z" fill="${c.radial('ear', 'yellow', 0.4, 0.3)}" stroke="#6B4A00" stroke-opacity=".6" stroke-width="1.6" stroke-linejoin="round"/>`);
    const clasp = `<path d="M48 64 C52 66 54 70 48 76 C42 70 44 66 48 64 Z" fill="${c.linear('clasp', 'gold', [0, 0, 1, 1], 0, 2)}" stroke="#5E3A00" stroke-width="1"/>`;
    return {
      art: F.bust(c, P, { garment: 'green', neck: 'v', hair: 'long', color: 'blond', under: clasp,
        face: f.brows.one({ y: 39 }) + f.eyes.lidded({ y: 50 }) + f.mouth.smile({ y: 68, w: 9 }) }).replace(/(<g transform[^>]*><path d="M16.5 70)/, `${ear(-1)}${ear(1)}$1`),
    };
  }),
};
