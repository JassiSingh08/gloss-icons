const k = require('../src/parts/critter');
// An oyster cracked open: ridged lid tipped back, a pearly lining and one fat pearl.
const body = 'M14 60 C14 54 22 52 32 54 L64 54 C74 52 82 54 82 60 C80 72 66 82 48 82 C30 82 16 72 14 60 Z';
module.exports = {
  id: 'oyster',
  name: 'Oyster',
  emoji: '🦪',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['oyster', 'pearl', 'seafood', 'shell', 'luxury'],
  tone: 'slate',
  body,
  shine: [26, 62, -15],
  shineSize: [6, 2.2],
  draw(c) {
    const lid = c.radial('lid', 'slate', 0.3, 0.2);
    const pearl = c.radial('pearl', 'ivory', 0.3, 0.25);
    const edge = '#1E2A3D';
    return `${k.part(c, 'M18 54 C14 38 26 20 48 18 C68 16 82 32 80 52 C70 50 58 48 48 48 C36 48 26 50 18 54 Z', lid, 'slate')}
      <path d="M22 50 C22 36 34 24 48 22 C62 22 74 32 76 48 C66 46 58 45 48 45 C38 45 30 47 22 50 Z" fill="${c.radial('lining', 'ivory', 0.4, 0.4)}"/>
      ${k.line('M48 22 L48 45 M34 28 L38 46 M62 28 L58 46', '#BDB2E8', 1.2, 0.6)}
      <path d="${body}" fill="${c.radial('a', 'slate', 0.35, 0.25)}"/>
      <path d="M18 58 C24 54 36 54 48 54 C60 54 72 54 78 58 C72 64 62 66 48 66 C34 66 24 64 18 58 Z" fill="${c.radial('in', 'ivory', 0.4, 0.3)}"/>
      ${k.line('M24 70 C34 76 62 76 72 70 M30 76 C40 80 56 80 66 76', edge, 1.3, 0.5)}
      <circle cx="48" cy="56" r="8" fill="${pearl}" stroke="#6E61A8" stroke-opacity=".5" stroke-width="1"/>
      ${k.glint(45.4, 53.2, 2.6, 1.4, -40, 0.9)}`;
  },
};
