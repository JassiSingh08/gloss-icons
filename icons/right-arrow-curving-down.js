const s = require('../src/parts/sign');
const P = s.SERIES.arrow;
module.exports = {
  id: 'right-arrow-curving-down',
  name: 'Right Arrow Curving Down',
  emoji: '⤵️',
  group: 'Symbols',
  subgroup: 'arrow',
  tags: ['down', 'turn', 'curve', 'arrow'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const shaft = 'M29 34 L48 34 A16 16 0 0 1 64 50 L64 60';
    const tip = s.head(64, 76, 90, 16, 12.5);
    const g = (k) => `<g transform="translate(-2 -2.5)"><path d="${shaft}" stroke="${k}" ${s.ST(11)}/><path d="${tip}" fill="${k}" stroke="${k}" stroke-width="3" stroke-linejoin="round"/></g>`;
    return s.tile(c, P) + s.emboss(c, P, g);
  },
};
