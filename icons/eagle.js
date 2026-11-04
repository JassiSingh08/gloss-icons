const k = require('../src/parts/critter');
// A bald eagle standing in profile facing left: white head with a ragged ruff, hooked gold beak, stern brow.
const body = 'M22 36 C22 26 30 18 40 18 C50 18 56 24 58 32 C64 40 72 52 74 66 L82 83 L64 81 C58 82 48 82 40 78 C32 73 30 62 32 52 C30 48 26 44 24 42 C22 40 22 38 22 36 Z';
module.exports = {
  id: 'eagle',
  name: 'Eagle',
  emoji: '🦅',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['eagle', 'bird', 'freedom', 'prey', 'proud'],
  tone: 'brown',
  body,
  shine: [32, 24, -35],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#1F0E02';
    const gold = c.radial('beak', 'gold', 0.3, 0.2);
    return `<path d="${body}" fill="${c.radial('a', 'brown', 0.4, 0.3)}"/>
      <path d="M50 46 C62 48 70 58 72 70 L77 81 C66 79 56 72 50 62 C47 56 47 50 50 46 Z" fill="${c.radial('w', 'brown', 0.7, 0.8)}" stroke="#331805" stroke-opacity=".5" stroke-width="1.1"/>
      ${k.line('M54 56 L70 74 M52 62 L66 77', '#331805', 1.3, 0.55)}
      <path d="M22 36 C22 26 30 18 40 18 C50 18 56 24 58 32 C60 37 60 42 57 46 L53 44 L52 49 L47 46 L45 52 L41 47 L38 53 L35 48 L32 52 C30 48 26 44 24 42 C22 40 22 38 22 36 Z" fill="${c.radial('head', 'white', 0.3, 0.2)}"/>
      ${k.legs('M42 78 L40 84 M40 84 L34 85 M40 84 L37 87 M40 84 L44 86 M52 80 L52 84 M52 84 L46 85.5 M52 84 L49 87.5 M52 84 L56 86', '#C98500', 3)}
      ${k.part(c, 'M25 29 C18 28 12 31 11 38 C11 42 14 43 15 40 C16 37 19 36 25 39 Z', gold, 'gold')}
      ${k.line('M15 37 C18 35.5 22 35.5 25 36', '#5E3A00', 1.1, 0.7)}
      ${k.irisEye(35, 30, 3.4, '#FFC21A', ink, 0.55)}
      ${k.legs('M29 25.5 L41 28', ink, 2.6)}`;
  },
};
