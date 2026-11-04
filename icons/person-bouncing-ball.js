const F = require('../src/parts/figure');

module.exports = {
  id: 'person-bouncing-ball',
  name: 'Person Bouncing Ball',
  emoji: '⛹️',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['basketball', 'dribble', 'ball', 'hoops', 'sport'],
  tone: 'blue',
  ...F.shineOf(42, 19, 12.5),
  ...F.build((c) => {
    const ball = c.radial('ball', 'orange', 0.35, 0.3);
    const ballArt = `<circle cx="66" cy="71" r="9" fill="${ball}" stroke="#6B0F00" stroke-width="1.3"/>
      <path d="M57 71 L75 71 M66 62 L66 80 M59.5 64.5 C63 68 63 74 59.5 77.5 M72.5 64.5 C69 68 69 74 72.5 77.5" stroke="#6B0F00" stroke-opacity=".75" stroke-width="1.3" fill="none"/>`;
    return {
      art: F.person(c, {
        head: [42, 19], r: 12.5, hair: 'crop', color: 'black', face: F.face.focus({ dx: 4 }),
        torso: [[43, 41], [42, 54]], tw: [9.5, 8.5], top: 'blue', shorts: 'blue', shoes: 'white', tee: 0.3,
        armB: [[38, 39], [30, 47], [27, 55]],
        armF: [[48, 39], [56, 48], [62, 55]],
        legB: [[39, 57], [33, 67], [28, 76]], footB: [24, 80],
        legF: [[45, 57], [50, 68], [49, 79]], footF: [55, 81],
      }) + ballArt,
    };
  }),
};
