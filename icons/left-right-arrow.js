const s = require('../src/parts/sign');
const P = s.SERIES.arrow;
module.exports = {
  id: 'left-right-arrow',
  name: 'Left-Right Arrow',
  emoji: '↔️',
  group: 'Symbols',
  subgroup: 'arrow',
  tags: ['left right', 'horizontal', 'both ways', 'arrow'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const d = s.arrow(48, 50, 90, { double: true, len: 52, headLen: 17, half: 15.5, shaft: 6 });
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" fill="${k}" stroke="${k}" stroke-width="3" stroke-linejoin="round"/>`);
  },
};
