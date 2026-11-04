const F = require('../src/parts/figure');

// An arabesque en pointe: one leg stretched out behind, arms lifted; a stiff tutu round the hips.
module.exports = {
  id: 'ballet-dancer',
  name: 'Ballet Dancer',
  emoji: '🧑‍🩰',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['ballet', 'dancer', 'tutu', 'pointe', 'dance'],
  tone: 'pink',
  ...F.shineOf(40, 21, 12),
  ...F.build((c) => {
    const tutu = c.radial('tutu', 'pink', 0.3, 0.2);
    const pk = c.ramp('pink');
    const skirt = `<path d="M24 53 C28 47 58 45 64 50 C67 53 64 56 60 55.5 C57 58 53 56.5 50 58.5 C46 60.5 43 58.5 39 59.5 C35 60.5 32 58 29 58.5 C25 58.5 22 56 24 53 Z" fill="${tutu}" stroke="${pk[3]}" stroke-opacity=".6" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M29 52 C38 49 52 48 60 50" stroke="#fff" stroke-opacity=".45" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
    return {
      art: F.person(c, {
        head: [40, 21], r: 12, hair: 'bun', color: 'brown', face: F.face.closed({ dx: -2 }),
        torso: [[42, 41], [44, 51]], tw: [8, 6.5], top: 'pink', bottom: 'cream', shoes: 'pink',
        armB: [[46, 38], [56, 30], [66, 24]], armF: [[38, 39], [28, 33], [20, 26]],
        legB: [[42, 55], [41, 68], [41, 79]], footB: [41, 84],
        legF: [[47, 55], [62, 53], [75, 48]], footF: [80, 46],
        aw: 6.6, lw: 7.4, sleeve: 'bare', under: skirt,
      }),
    };
  }),
};
