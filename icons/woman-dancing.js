const F = require('../src/parts/figure');

// A red dress swinging out to one side, one arm thrown up, a heel kicked back.
const DRESS = 'M36 35 C37 31 51 31 52 35 L50 47 C58 54 69 60 76 71 C70 74.5 66 70.5 61 74 C56 77.5 51 73 46 76.5 C40 79 36 75 30 73.5 C33 63 36 55 40 47 Z';
module.exports = {
  id: 'woman-dancing',
  name: 'Woman Dancing',
  emoji: '💃',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['dance', 'dancing', 'salsa', 'flamenco', 'party'],
  tone: 'red',
  ...F.shineOf(43, 20, 12.5),
  ...F.build((c) => {
    const r = c.ramp('red');
    const folds = `<path d="M48 50 C52 60 56 66 58 74 M44 51 C44 60 45 68 46 76 M50 48 C58 56 64 62 68 72" stroke="${r[3]}" stroke-opacity=".35" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
    return {
      art: F.person(c, {
        head: [43, 20], r: 12.5, hair: 'bun', color: 'dark', face: F.face.happy({ dx: -2 }),
        torsoPath: DRESS, top: 'red', shoes: 'red',
        armB: [[50, 34], [60, 39], [70, 34]],
        armF: [[38, 35], [29, 27], [26, 15]],
        legB: [[52, 70], [60, 76], [66, 80]], footB: [71, 78], legF: [[42, 70], [42, 81]], footF: [46, 83],
        lw: 6.4, bottom: 'bare', sleeve: 'bare', under: folds,
      }),
    };
  }),
};
