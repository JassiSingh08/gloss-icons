const F = require('../src/parts/figure');

// A star shape turned on its side: one hand planted, legs wheeling over the top.
module.exports = {
  id: 'person-cartwheeling',
  name: 'Person Cartwheeling',
  emoji: '🤸',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['cartwheel', 'gymnastics', 'acrobat', 'tumble', 'flip'],
  tone: 'magenta',
  ...F.build((c) => ({
    art: F.person(c, {
      head: [48, 21], r: 11.5, hair: 'ponytail', color: 'brown', face: F.face.happy(),
      torso: [[48, 40], [48, 51]], tw: [9, 8], top: 'magenta', sleeve: 'bare', shorts: 'magenta', shoes: 'white',
      armB: [[41, 37], [32, 29], [24, 21]], handB: { dir: -135 },
      armF: [[55, 37], [64, 29], [72, 21]], handF: { dir: -45 },
      legB: [[44, 54], [37, 65], [30, 75]], footB: [27, 79],
      legF: [[52, 54], [59, 65], [66, 75]], footF: [69, 79],
      transform: 'translate(5 -1) rotate(-125 48 50)',
    }),
  })),
  shine: [50, 40, -30], shineSize: [4, 2],
};
