const g = require('../src/parts/garment');

const body = 'M12 60 C10 37 25 21 44 21 C60 21 70 32 72 48 C80 50 88 55 87.5 62 C87 70 76 72.5 62 70.5 C50 69 36 69.5 26 69.5 C17 69.5 12.5 66 12 60 Z';
const bill = 'M53 61 C61 51.5 79 50.5 85.5 55.5 C89 58.5 88 66 84 68.5 C76 72.5 62 71 53 69 C50.5 66.5 50.5 63.5 53 61 Z';

module.exports = {
  id: 'billed-cap',
  name: 'Billed Cap',
  emoji: '🧢',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['cap', 'baseball', 'hat', 'sport', 'casual'],
  tone: 'blue',
  body,
  shine: [24, 33, -45],
  draw(c) {
    const dome = c.radial('a', 'blue', 0.3, 0.2);
    const top = c.linear('bill', 'blue', [0, 0, 0.3, 1], 0, 2);
    const b = c.ramp('blue');
    return `<path d="${body}" fill="${dome}"/>
      ${g.fold('M44 22 C36 33 32 47 32 68 M44 22 C53 33 57 44 56 59', b[3], 0.45, 1.4)}
      ${g.stitch('M13.5 59 C21 64 38 64.5 51 62.5', '#fff', 0.35)}
      <path d="${bill}" fill="${top}"/>
      <path d="M53 61 C61 51.5 79 50.5 85.5 55.5" fill="none" stroke="${b[3]}" stroke-opacity=".7" stroke-width="1.6"/>
      <path d="M84 68.5 C76 72.5 62 71 53 69" fill="none" stroke="${b[3]}" stroke-opacity=".6" stroke-width="2.4"/>
      ${g.stitch('M56 62.5 C64 55.5 78 55 83.5 58.5', '#fff', 0.5)}
      <ellipse cx="44" cy="21.6" rx="4" ry="2.2" fill="${b[1]}" stroke="${b[3]}" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
