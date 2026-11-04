const h = require('../src/parts/hand');

// An open palm leaning into the wave, with swish marks off the fingertips.
const a = h.hand({ at: [46, 55], scale: 0.96, roll: 22, thumb: { out: 40 } });

module.exports = {
  id: 'waving-hand',
  name: 'Waving Hand',
  emoji: '👋',
  group: 'People & Body',
  subgroup: 'hand-fingers-open',
  tags: ['wave', 'hello', 'hi', 'bye', 'hand'],
  tone: 'yellow',
  body: a.body,
  shine: [38, 52, -45],
  shineSize: [5, 2.4],
  draw(c) {
    return a.draw(c) + h.mark('M67 12 Q74 13 77 20') + h.mark('M71 6.5 Q81 8 84 17') + h.mark('M15 64 Q14 72 20 77');
  },
};
