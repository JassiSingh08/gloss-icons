const s = require('../src/parts/sign');
const P = s.SERIES.religion;
module.exports = {
  id: 'atom-symbol',
  name: 'Atom Symbol',
  emoji: '⚛️',
  group: 'Symbols',
  subgroup: 'religion',
  tags: ['atom', 'science', 'physics', 'atheist', 'nucleus'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[1];
    const art = (k) => `<g fill="none" stroke="${k}" stroke-width="3.4">${[0, 60, 120].map((a) => `<ellipse cx="48" cy="50" rx="24" ry="9" transform="rotate(${a} 48 50)"/>`).join('')}</g>
      <circle cx="48" cy="50" r="4.8" fill="${k}"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
