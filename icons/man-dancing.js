const F = require('../src/parts/figure');

// Disco: one finger to the ceiling, the other hand on the hip, a knee kicked out.
module.exports = {
  id: 'man-dancing',
  name: 'Man Dancing',
  emoji: '🕺',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['dance', 'disco', 'groove', 'party', 'dancing'],
  tone: 'purple',
  ...F.shineOf(44, 19, 12.5),
  ...F.build((c) => ({
    art: F.person(c, {
      head: [44, 19], r: 12.5, hair: 'curly', color: 'dark', face: F.face.happy({ dx: 3 }),
      torso: [[46, 41], [45, 55]], tw: [10, 8.5], top: 'purple', bottom: 'black', shoes: 'white',
      armB: [[40, 40], [31, 46], [38, 52]],
      legB: [[42, 59], [38, 70], [33, 80]], footB: [27, 81],
      legF: [[48, 59], [60, 65], [57, 79]], footF: [64, 80],
      armF: [[51, 38], [59, 29], [65, 20]], armOver: true,
      handF: F.limb(c, [[68, 14], [71.5, 6.5]], 3.4, 'bare', 3) + F.hand(c, 65, 20, { dir: -60 }),
      under: `<path d="M40 32.5 L46 39 L45 33 Z M52 32.5 L46 39 L47 33 Z" fill="#F7F5FF" stroke="#1A0040" stroke-opacity=".5" stroke-width="1" stroke-linejoin="round"/>`,
    }),
  })),
};
