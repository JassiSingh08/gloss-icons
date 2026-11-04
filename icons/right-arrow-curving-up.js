const s = require('../src/parts/sign');
const P = s.SERIES.arrow;
module.exports = {
  id: 'right-arrow-curving-up',
  name: 'Right Arrow Curving Up',
  emoji: '⤴️',
  group: 'Symbols',
  subgroup: 'arrow',
  tags: ['up', 'turn', 'curve', 'arrow'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const shaft = 'M29 66 L48 66 A16 16 0 0 0 64 50 L64 40';
    const tip = s.head(64, 24, -90, 16, 12.5);
    const g = (k) => `<g transform="translate(-2 2.5)"><path d="${shaft}" stroke="${k}" ${s.ST(11)}/><path d="${tip}" fill="${k}" stroke="${k}" stroke-width="3" stroke-linejoin="round"/></g>`;
    return s.tile(c, P) + s.emboss(c, P, g);
  },
};
