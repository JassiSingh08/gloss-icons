const F = require('../src/parts/figure');

// Riding the face of a curling wave, crouched on the board, arms spread.
const WAVE = 'M10 84 C10 60 14 38 30 26 C42 17 58 18 62 28 C64 34 60 38 54 36 C48 34 44 38 44 44 C44 58 54 68 66 74 C74 78 82 79 86 80 L86 84 Z';
module.exports = {
  id: 'person-surfing',
  name: 'Person Surfing',
  emoji: '🏄',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['surf', 'surfing', 'wave', 'beach', 'ocean'],
  tone: 'blue',
  ...F.shineOf(22, 46, 12),
  ...F.build((c) => {
    const water = c.radial('wave', 'blue', 0.3, 0.2);
    const board = c.linear('board', 'gold', [0, 0, 1, 1], 0, 2);
    const foam = `<path d="M30 26 C42 17 58 18 62 28 C64 34 60 38 54 36 C56 32 54 28 48 28 C42 28 38 30 34 34 Z" fill="#fff" opacity=".9"/>
      <path d="M18 60 C20 46 26 36 34 32 M24 76 C24 64 28 54 34 48" stroke="#C9ECFF" stroke-opacity=".6" stroke-width="2" fill="none" stroke-linecap="round"/>`;
    return {
      art: `<path d="${WAVE}" fill="${water}"/>${foam}`
        + F.person(c, {
          head: [62, 37], r: 11, hair: 'long', color: 'blond', face: F.face.happy({ dx: 3 }),
          torso: [[61, 55], [58, 64]], tw: [8.5, 7.5], top: 'red', sleeve: 'bare', shorts: 'teal', shoes: 'black',
          armB: [[57, 53], [48, 50], [40, 47]], armF: [[65, 53], [74, 52], [82, 48]],
          legB: [[56, 66], [50, 70], [52, 76]], legF: [[61, 66], [68, 70], [68, 76]],
          aw: 6.6, lw: 7.6,
        }) + `<path d="M36 78 Q44 74 60 76 L84 77 Q88 78 84 80 Q60 84 42 82 Q34 81 36 78 Z" fill="${board}" stroke="#5E3A00" stroke-width="1.3"/>
          <path d="M44 79 L80 78.5" stroke="#E3120B" stroke-width="1.6" stroke-linecap="round"/>`,
    };
  }),
};
