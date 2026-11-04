const F = require('../src/parts/figure');

// A power chair: battery box under the seat, a joystick on the armrest, smaller drive wheels.
module.exports = {
  id: 'person-in-motorized-wheelchair',
  name: 'Person In Motorized Wheelchair',
  emoji: '🧑‍🦼',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['wheelchair', 'power chair', 'accessibility', 'mobility', 'electric'],
  tone: 'purple',
  ...F.shineOf(42, 18, 12.5),
  ...F.build((c) => {
    const box = c.linear('box', 'black', [0, 0, 0, 1], 0, 2);
    const seat = c.linear('seat', 'purple', [0, 0, 1, 1], 1, 3);
    const chair = `<path d="M22 22 Q20 22 20 26 L22 58 L32 60 L30 26 Q30 22 26 22 Z" fill="${seat}" stroke="#1A0040" stroke-width="1.2" stroke-linejoin="round"/>
      <rect x="24" y="60" width="36" height="13" rx="3.5" fill="${box}" stroke="#05050A" stroke-width="1.2"/>
      <path d="M28 64 L42 64" stroke="#FFD82E" stroke-width="1.8" stroke-linecap="round"/>
      ${F.rod('M58 62 L64 76 L71 77', 3, '#D9DCE8')}`;
    return {
      art: chair + F.person(c, {
        head: [42, 18], r: 12.5, hair: 'long', color: 'dark', face: F.face.happy({ dx: 4 }),
        torso: [[40, 40], [38, 52]], tw: [9.5, 8.5], top: 'teal', bottom: 'navy',
        armB: [[43, 38], [51, 45], [55, 49]],
        legB: [[38, 56], [55, 55], [59, 70]], footB: [65, 72],
        legF: [[40, 58], [57, 58], [62, 72]], footF: [68, 74],
        armF: [[37, 39], [40, 50], [48, 53]], handF: false,
        over: `${F.rod('M30 54 L56 54', 4.2, '#4D5F7A', '#1E2A3D')}<path d="M54 54 L56 46" stroke="#14141E" stroke-width="2.6" stroke-linecap="round"/><circle cx="56" cy="45" r="2.6" fill="#E3120B" stroke="#3D0003" stroke-width="1"/>${F.hand(c, 48, 53, { dir: 0 })}`
          + F.wheel(c, 33, 73, 11, { spokes: 3, name: 'w1' }) + F.wheel(c, 68, 79, 4.5, { spokes: 2, tyre: 3, hub: 1.4, name: 'cs' }),
      }),
    };
  }),
};
