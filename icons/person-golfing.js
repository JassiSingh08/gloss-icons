const F = require('../src/parts/figure');

// The follow-through: club swung round over the shoulder, weight on the front foot, the ball gone.
module.exports = {
  id: 'person-golfing',
  name: 'Person Golfing',
  emoji: '🏌️',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['golf', 'golfer', 'swing', 'club', 'tee'],
  tone: 'green',
  ...F.shineOf(44, 22, 12.5),
  ...F.build((c) => {
    const cap = `<path d="M17 46 C16 24 32 13 48 13 C64 13 78 23 79 44 Z" fill="${c.radial('cap', 'navy', 0.3, 0.2)}" stroke="#080C3D" stroke-width="2.2"/><path d="M60 42 C70 38 84 38 92 42 C86 46 72 47 60 46 Z" fill="#1A238A" stroke="#080C3D" stroke-width="2"/>`;
    return {
      art: F.rod('M63 33 L24 9', 2.2, '#D9DCE8', '#3A3E52') + `<path d="M22 5 L25 12 L17 13 Z" fill="#8E93AD" stroke="#3A3E52" stroke-width="1.4" stroke-linejoin="round"/>`
        + F.person(c, {
          head: [44, 22], r: 12.5, hat: cap, face: F.face.calm({ dx: 3 }),
          torso: [[45, 45], [44, 57]], tw: [10, 8.5], top: 'green', bottom: 'sand', shoes: 'white',
          armB: [[40, 41], [50, 43], [60, 37]],
          armF: [[50, 41], [58, 41], [62, 35]], handF: { dir: -60 },
          legB: [[40, 60], [38, 71], [34, 80]], footB: [36, 82.5],
          legF: [[48, 60], [51, 70], [52, 80]], footF: [58, 81.5],
        }),
      extra: `<circle cx="78" cy="79" r="3.6" fill="#fff" stroke="#8C83AD" stroke-width="1"/><path d="M77 83 L78 86 L79 83 Z" fill="#E9C98F"/>`,
    };
  }),
};
