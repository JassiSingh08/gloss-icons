const s = require('../src/parts/sign');
const P = s.SERIES.arrow;
module.exports = {
  id: 'down-left-arrow',
  name: 'Down-Left Arrow',
  emoji: '↙️',
  group: 'Symbols',
  subgroup: 'arrow',
  tags: ['down left', 'southwest', 'direction', 'arrow'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const d = s.arrow(48, 50, 225, { len: 46, headLen: 19, half: 16, shaft: 6 });
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" fill="${k}" stroke="${k}" stroke-width="3" stroke-linejoin="round"/>`);
  },
};
