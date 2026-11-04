const s = require('../src/parts/sign');
const P = s.SERIES.arrow;
module.exports = {
  id: 'down-arrow',
  name: 'Down Arrow',
  emoji: '⬇️',
  group: 'Symbols',
  subgroup: 'arrow',
  tags: ['down', 'south', 'direction', 'arrow'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const d = s.arrow(48, 50, 180, { len: 48, headLen: 20, half: 17, shaft: 6.2 });
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" fill="${k}" stroke="${k}" stroke-width="3" stroke-linejoin="round"/>`);
  },
};
