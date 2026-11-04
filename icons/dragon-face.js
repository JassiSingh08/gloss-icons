const k = require('../src/parts/critter');
// An eastern dragon's head, front on: antler horns, side frills, long whiskers, slit eyes under heavy brows.
const body = 'M30 30 C34 22 42 20 48 20 C54 20 62 22 66 30 C72 34 76 42 74 50 C78 56 78 66 72 72 C66 80 58 82 48 82 C38 82 30 80 24 72 C18 66 18 56 22 50 C20 42 24 34 30 30 Z';
module.exports = {
  id: 'dragon-face',
  name: 'Dragon Face',
  emoji: '🐲',
  group: 'Animals & Nature',
  subgroup: 'animal-reptile',
  tags: ['dragon', 'myth', 'lunar new year', 'fantasy', 'fierce'],
  tone: 'green',
  body,
  shine: [32, 33, -45],
  shineSize: [6, 2.6],
  draw(c) {
    const horn = c.radial('horn', 'gold', 0.3, 0.2);
    const frill = c.radial('frill', 'teal', 0.5, 0.3);
    const ink = '#053A1A';
    return `${k.part(c, 'M35 27 C30 20 28 13 30 6 C32 11 34 14 37 16 C37 12 38 9 40 7 C41 13 41 19 40 25 Z', horn, 'gold')}
      ${k.part(c, 'M61 27 C66 20 68 13 66 6 C64 11 62 14 59 16 C59 12 58 9 56 7 C55 13 55 19 56 25 Z', horn, 'gold')}
      ${k.part(c, 'M24 42 L10 36 L15 44 L8 48 L16 51 L11 57 L22 56 Z', frill, 'teal')}
      ${k.part(c, 'M72 42 L86 36 L81 44 L88 48 L80 51 L85 57 L74 56 Z', frill, 'teal')}
      <path d="${body}" fill="${c.radial('a', 'green', 0.35, 0.25)}"/>
      <path d="M30 60 C30 52 38 50 48 50 C58 50 66 52 66 60 C66 70 58 77 48 77 C38 77 30 70 30 60 Z" fill="${c.radial('snout', 'lime', 0.4, 0.2)}" opacity=".9"/>
      ${k.legs('M30 66 C22 68 16 74 13 81 M66 66 C74 68 80 74 83 81', '#C98500', 2.4)}
      ${k.irisEye(37, 42, 4.2, '#FFD82E', ink, 0.38)}${k.irisEye(59, 42, 4.2, '#FFD82E', ink, 0.38)}
      ${k.legs('M30 35.5 L44 39.5 M66 35.5 L52 39.5', ink, 3.4)}
      <path d="M40 58 C42 55 45 56 44.5 59 M56 58 C54 55 51 56 51.5 59" stroke="${ink}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      ${k.legs('M36 69 C42 72.5 54 72.5 60 69', ink, 2.4)}
      <path d="M39 70.5 L40.5 75 L42.5 71.3 Z M57 70.5 L55.5 75 L53.5 71.3 Z" fill="#FFF8EC"/>`;
  },
};
