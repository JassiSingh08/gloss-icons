const k = require('../src/parts/critter');
// Rooster facing left, chest out: ember plumage, gold neck hackles, dark sickle tail arching over.
const body = 'M26 33 C25 23 31 17 38 17 C45 17 48 23 47 30 C47 39 50 45 58 47 C68 49 76 55 76 65 C76 74 66 79 52 79 C38 79 28 72 28 61 C28 51 32 45 30 40 C28 38 26 36 26 33 Z';
module.exports = {
  id: 'rooster',
  name: 'Rooster',
  emoji: '🐓',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['rooster', 'cock', 'farm', 'morning', 'crow'],
  tone: 'ember',
  body,
  shine: [32, 23, -40],
  draw(c) {
    const red = c.radial('comb', 'red', 0.3, 0.2);
    const black = c.radial('t1', 'black', 0.2, 0.2);
    const teal = c.radial('t2', 'teal', 0.2, 0.2);
    const leg = '#6B3A00';
    return `${k.part(c, 'M60 50 C60 30 72 14 86 14 C88 14 89 16 87 17 C76 21 70 34 70 54 Z', black, 'black')}
      ${k.part(c, 'M66 54 C70 38 80 30 90 32 C92 33 91 35 89 35 C82 37 77 45 76 58 Z', teal, 'teal')}
      ${k.part(c, 'M70 58 C76 48 84 46 90 50 C91 51 90 53 88 52 C83 52 79 56 77 63 Z', black, 'black')}
      ${k.foot(44, 86, 77, -1, leg)}${k.foot(58, 86, 77, -1, leg)}
      ${k.legs('M44 82 L48 81 M58 82 L62 81', leg, 2.4)}
      ${k.part(c, 'M29 22 C25 14 30 9 34 13 C34 5 42 4 42 11 C44 5 52 7 49 14 C53 13 55 18 49 20 C44 22 36 22 30 22 Z', red, 'red')}
      <path d="${body}" fill="${c.radial('a', 'ember', 0.35, 0.2)}"/>
      <path d="M26 33 C25 23 31 17 38 17 C45 17 48 23 47 30 C47 38 50 44 54 48 L48 54 L46 50 L42 56 L40 51 L35 57 L34 51 L30 54 C31 48 31 44 30 40 C28 38 26 36 26 33 Z" fill="${c.radial('neck', 'gold', 0.3, 0.2)}"/>
      <path d="M44 60 C54 54 66 56 70 64 C64 72 52 74 42 70 C41 66 42 63 44 60 Z" fill="${c.radial('w', 'ember', 0.7, 0.8)}" stroke="#3D0700" stroke-opacity=".45" stroke-width="1.1"/>
      ${k.part(c, 'M26.5 28 L16 32 L26.5 36 Z', c.radial('beak', 'gold', 0.3, 0.2), 'gold')}
      ${k.part(c, 'M26 37 C29 37 31 41 30 47 C29 52 25 53 24 49 C23 45 24 40 26 37 Z', red, 'red')}
      ${k.eye(35, 27, 2.9, '#2A0A00')}
      ${k.line('M31 23.5 L38 24.5', '#3D0700', 2, 0.7)}`;
  },
};
