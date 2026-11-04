const s = require('../src/parts/sign');
const P = s.SERIES.arrow;
module.exports = {
  id: 'right-arrow-curving-left',
  name: 'Right Arrow Curving Left',
  emoji: '↩️',
  group: 'Symbols',
  subgroup: 'arrow',
  tags: ['return', 'back', 'curve', 'arrow'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const shaft = 'M36 37 L51 37 A15 15 0 0 1 51 67 L41 67';
    const tip = s.head(21, 37, 180, 16, 13);
    const g = (k) => `<g transform="translate(2 2)"><path d="${shaft}" stroke="${k}" ${s.ST(11)}/><path d="${tip}" fill="${k}" stroke="${k}" stroke-width="3" stroke-linejoin="round"/></g>`;
    return s.tile(c, P) + s.emboss(c, P, g);
  },
};
