const s = require('../src/parts/sign');
const P = s.SERIES.transport;
module.exports = {
  id: 'wheelchair-symbol',
  name: 'Wheelchair Symbol',
  emoji: '♿',
  group: 'Symbols',
  subgroup: 'transport-sign',
  tags: ['wheelchair', 'accessible', 'access', 'disability'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[2];
    const wheel = s.curve(s.arc(42, 59, 14.5, 18, 252, 20));
    const art = (k) => `<circle cx="42" cy="25.5" r="5.4" fill="${k}"/>
      <path d="M41.5 35 L42.5 51 L56 51 L61 67.5 L66 67.5 M42 41.5 L54 41.5" stroke="${k}" ${s.ST(5.6)}/>
      <path d="${wheel}" stroke="${k}" ${s.ST(5)}/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
