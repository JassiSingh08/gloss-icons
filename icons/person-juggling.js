const F = require('../src/parts/figure');

// Three balls in the air over a juggler's head, both hands up ready to catch.
module.exports = {
  id: 'person-juggling',
  name: 'Person Juggling',
  emoji: '🤹',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['juggle', 'juggling', 'circus', 'skill', 'multitask'],
  tone: 'purple',
  ...F.shineOf(48, 33, 12),
  ...F.build((c) => {
    const ball = (x, y, pal) => `<circle cx="${x}" cy="${y}" r="6.2" fill="${c.radial(`b${x}`, pal, 0.35, 0.3)}" stroke="${c.ramp(pal)[3]}" stroke-width="1.2"/>`;
    return {
      art: F.person(c, {
        head: [48, 33], r: 12, hair: 'curly', color: 'auburn', face: F.face.happy(),
        torso: [[48, 53], [48, 64]], tw: [10, 8.5], top: 'purple', bottom: 'navy', shoes: 'black',
        armB: [[40, 50], [31, 58], [26, 49]], handB: { dir: -100 },
        armF: [[56, 50], [65, 58], [70, 49]], handF: { dir: -80 },
        legB: [[44, 67], [43, 75], [42, 80]], footB: [38, 82],
        legF: [[52, 67], [53, 75], [54, 80]], footF: [58, 82],
      }) + ball(22, 30, 'red') + ball(48, 11, 'teal') + ball(74, 30, 'gold'),
      extra: `<path d="M24 22 Q30 10 40 8 M56 8 Q66 10 72 22" stroke="#fff" stroke-opacity=".35" stroke-width="1.6" stroke-dasharray="2 3" fill="none" stroke-linecap="round"/>`,
    };
  }),
};
