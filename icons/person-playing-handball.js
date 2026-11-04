const F = require('../src/parts/figure');

// A jump shot: off the ground, ball cocked high behind the head, the other arm leading.
module.exports = {
  id: 'person-playing-handball',
  name: 'Person Playing Handball',
  emoji: '🤾',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['handball', 'throw', 'jump', 'ball', 'team'],
  tone: 'green',
  ...F.shineOf(44, 22, 12),
  ...F.build((c) => {
    const ball = c.radial('ball', 'red', 0.35, 0.3);
    return {
      art: `<circle cx="66" cy="15" r="7.5" fill="${ball}" stroke="#3D0003" stroke-width="1.3"/>
        <path d="M59 13 C63 16 69 16 73 12 M63 8.5 C66 12 66 18 63 22" stroke="#FFF7A8" stroke-opacity=".85" stroke-width="1.6" fill="none"/>`
        + F.person(c, {
          head: [44, 22], r: 12, hair: 'short', color: 'black', face: F.face.focus({ dx: -3 }),
          torso: [[46, 42], [48, 54]], tw: [9.5, 8.5], top: 'green', tee: 0.4, shorts: 'navy', shoes: 'white',
          armB: [[51, 39], [59, 31], [62, 22]], handB: { dir: -70 },
          armF: [[41, 39], [32, 41], [24, 37]],
          legB: [[52, 57], [58, 67], [60, 77]], footB: [65, 79],
          legF: [[45, 57], [36, 61], [36, 72]], footF: [32, 76],
        }),
    };
  }),
};
