const F = require('../src/parts/figure');

// Two wrestlers locked head to head, each with a hand on the other's shoulder.
module.exports = {
  id: 'people-wrestling',
  name: 'People Wrestling',
  emoji: '🤼',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['wrestling', 'wrestle', 'grapple', 'match', 'sport'],
  tone: 'red',
  ...F.shineOf(31, 28, 11.5),
  ...F.build((c) => {
    const L = {
      head: [31, 28], r: 11.5, hair: 'crop', color: 'dark', face: F.face.effort({ dx: 5 }), name: 'l',
      torso: [[33, 46], [28, 58]], tw: [9.5, 8.5], top: 'red', sleeve: 'bare', shorts: 'red', shoes: 'black',
      armB: [[29, 43], [21, 52], [20, 62]],
      legB: [[25, 61], [18, 71], [13, 80]], footB: [9, 82],
      legF: [[31, 61], [35, 71], [35, 80]], footF: [40, 82],
    };
    const mirror = (pts) => pts && pts.map(([x, y]) => [96 - x, y]);
    const R = {
      ...L, name: 'r', hair: 'short', color: 'brown', top: 'blue', shorts: 'blue', face: F.face.effort({ dx: -5 }),
      head: [65, 28], torso: [[63, 46], [68, 58]],
      armB: mirror(L.armB), legB: mirror(L.legB), footB: [87, 82], legF: mirror(L.legF), footF: [56, 82],
    };
    return {
      art: F.person(c, R) + F.person(c, L)
        + F.limb(c, [[36, 43], [47, 48], [58, 42]], 7.8, 'bare') + F.hand(c, 58, 42, { dir: -30 })
        + F.limb(c, [[60, 43], [50, 50], [40, 43]], 7.8, 'bare') + F.hand(c, 40, 43, { dir: -150 }),
    };
  }),
};
