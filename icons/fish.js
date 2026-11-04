const k = require('../src/parts/critter');
// A plain blue fish swimming left, tail as part of the silhouette, fins and a gill line.
const raw = 'M12 50 C18 38 32 30 46 30 C58 30 66 36 72 44 L86 32 C88 31 90 32 89 34 L84 50 L89 66 C90 68 88 69 86 68 L72 56 C66 64 58 70 46 70 C32 70 18 62 12 50 Z';
module.exports = {
  id: 'fish',
  name: 'Fish',
  emoji: '🐟',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['fish', 'sea', 'swim', 'pisces', 'ocean'],
  tone: 'blue',
  body: k.move(raw, 0, 6),
  shine: [30, 42, -25],
  draw(c) {
    const fin = c.radial('fin', 'sky', 0.4, 0.3);
    const ink = '#001E4D';
    return `<g transform="translate(0 6)">
      ${k.part(c, 'M38 32 C42 24 52 20 62 22 C60 26 60 30 62 35 Z', fin, 'sky')}
      ${k.part(c, 'M44 68 C46 74 52 77 58 76 C56 72 56 70 57 67 Z', fin, 'sky')}
      <path d="${raw}" fill="${c.radial('a', 'blue', 0.35, 0.2)}"/>
      <path d="M13 52 C20 62 32 69 46 69 C58 69 66 64 71 57 C56 62 30 60 13 52 Z" fill="${c.ramp('sky')[0]}" opacity=".6"/>
      ${k.line('M34 38 C30 44 30 54 34 60', ink, 1.6, 0.5)}
      ${k.line('M46 42 C48 40 50 40 52 42 M54 46 C56 44 58 44 60 46 M46 50 C48 48 50 48 52 50 M54 54 C56 52 58 52 60 54', '#C9ECFF', 1.2, 0.45)}
      ${k.part(c, 'M38 52 C42 52 46 55 46 60 C42 60 39 57 38 52 Z', fin, 'sky')}
      ${k.legs('M13.5 51 L18 52', ink, 1.6)}
      ${k.eye(24, 46, 3, ink)}</g>`;
  },
};
