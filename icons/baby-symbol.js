const s = require('../src/parts/sign');
const P = s.SERIES.transport;
module.exports = {
  id: 'baby-symbol',
  name: 'Baby Symbol',
  emoji: '🚼',
  group: 'Symbols',
  subgroup: 'transport-sign',
  tags: ['baby', 'changing', 'infant', 'nursery'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[2];
    const art = (k) => `<circle cx="48" cy="33" r="9.5" fill="${k}"/>
      <path d="M45 23.8 Q46 19 50.5 20.5" stroke="${k}" ${s.ST(2.6)}/>
      <path d="M48 44.5 Q57 44.5 57 54 Q57 62 48 62 Q39 62 39 54 Q39 44.5 48 44.5 Z" fill="${k}"/>
      <path d="M41.5 49 L33 42.5 M54.5 49 L63 42.5 M43.5 59 L39.5 72 M52.5 59 L56.5 72" stroke="${k}" ${s.ST(5)}/>
      <circle cx="44.6" cy="34" r="1.3" fill="${g}" opacity=".7"/><circle cx="51.4" cy="34" r="1.3" fill="${g}" opacity=".7"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
