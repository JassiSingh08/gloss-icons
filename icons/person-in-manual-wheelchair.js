const F = require('../src/parts/figure');

// Seated, one hand on the push rim of the big wheel; the small caster at the front.
module.exports = {
  id: 'person-in-manual-wheelchair',
  name: 'Person In Manual Wheelchair',
  emoji: '🧑‍🦽',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['wheelchair', 'accessibility', 'mobility', 'manual'],
  tone: 'green',
  ...F.shineOf(46, 18, 12.5),
  ...F.build((c) => {
    const frame = c.linear('frame', 'silver', [0, 0, 1, 1], 1, 2);
    const chair = `<path d="M27 26 L31 26 L33 58 L60 58" stroke="#3A3E52" stroke-width="5.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M27 26 L31 26 L33 58 L60 58" stroke="${frame}" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      ${F.rod('M58 58 L66 75 L71 78', 3.2, '#D9DCE8')}`;
    return {
      art: chair + F.person(c, {
        head: [46, 18], r: 12.5, hair: 'short', color: 'brown', face: F.face.calm({ dx: 4 }),
        torso: [[44, 40], [42, 52]], tw: [9.5, 8.5], top: 'green', bottom: 'navy',
        armB: [[47, 38], [55, 45], [58, 52]],
        legB: [[42, 56], [58, 55], [61, 70]], footB: [67, 72],
        legF: [[44, 58], [60, 58], [64, 72]], footF: [70, 74.5],
        armF: [[41, 39], [42, 50], [45, 56]], handF: false,
        over: F.wheel(c, 40, 66, 17, { spokes: 5 }) + `<circle cx="40" cy="66" r="12.5" fill="none" stroke="#8E93AD" stroke-width="1.6"/>` + F.hand(c, 45, 56, { dir: 75 }) + F.wheel(c, 71, 79, 4.5, { spokes: 2, tyre: 3, hub: 1.4, name: 'cs' }),
      }),
    };
  }),
};
