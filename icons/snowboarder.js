const F = require('../src/parts/figure');

// Side-on on the board, knees bent, arms out for balance, snow kicked up behind.
const BEANIE = `<path d="M17 50 C15 24 30 11 48 11 C66 11 81 24 79 50 Z" fill="url(#B)" stroke="#003A33" stroke-width="2.4"/>
  <path d="M17 42 L79 42 L79 51 L17 51 Z" fill="url(#B)" stroke="#003A33" stroke-width="1.8"/>
  <path d="M30 18 Q36 14 44 14" stroke="#fff" stroke-opacity=".5" stroke-width="3" fill="none" stroke-linecap="round"/>`;
module.exports = {
  id: 'snowboarder',
  name: 'Snowboarder',
  emoji: '🏂',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['snowboard', 'snow', 'winter', 'board', 'slope'],
  tone: 'purple',
  ...F.shineOf(50, 21, 12.5),
  ...F.build((c) => {
    const board = c.linear('board', 'gold', [0, 0, 1, 1], 0, 2);
    return {
      art: F.person(c, {
        head: [50, 21], r: 12.5, hat: BEANIE.replaceAll('url(#B)', c.radial('beanie', 'teal', 0.3, 0.2)), face: F.face.grin(c, { dx: 3 }),
        torso: [[48, 42], [45, 55]], tw: [10, 8.5], top: 'purple', bottom: 'slate', shoes: 'black',
        armB: [[44, 40], [34, 41], [24, 36]], armF: [[53, 40], [63, 44], [72, 41]],
        legB: [[42, 58], [33, 64], [34, 74]], footB: [33, 76],
        legF: [[48, 58], [58, 63], [60, 73]], footF: [60, 76],
      }) + `<path d="M17 76 Q16 72 21 72.5 L76 74.5 Q81 75 80 79 Q79 81.5 74 81 L22 79.5 Q17 79.5 17 76 Z" fill="${board}" stroke="#5E3A00" stroke-width="1.4"/>
        <path d="M30 76.5 L66 77.8" stroke="#E02A00" stroke-width="2" stroke-linecap="round"/>`,
      extra: `<path d="M8 74 C10 70 13 70 14 73 M10 66 C11 64 13 64 14 66 M6 80 C8 78 10 78 11 80" stroke="#fff" stroke-opacity=".7" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
    };
  }),
};
