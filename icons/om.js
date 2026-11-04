const s = require('../src/parts/sign');
const P = s.SERIES.religion;
module.exports = {
  id: 'om',
  name: 'Om',
  emoji: '🕉️',
  group: 'Symbols',
  subgroup: 'religion',
  tags: ['om', 'hindu', 'aum', 'sacred', 'religion'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[1];
    const three = 'M26 47 C27 41 33 39.5 37 40.5 C43 42 42.5 50.5 34.5 52 C43 52 47 57 46 63.5 C45 70.5 36 72.5 30 69.5 C27.5 68 26 66.5 25.4 64.5';
    const tail = 'M37 52 C45 52.5 47.5 59 51 65.5 C53.5 70.5 59 72.5 64 70.5 C70 68 70.5 59.5 66 55 C61.5 50.5 54 52.5 51.5 60';
    const moon = 'M45 33 Q48 40.5 56 40.5 Q64 40.5 67.5 33';
    const art = (k) => `<path d="${three} ${tail} ${moon}" stroke="${k}" ${s.ST(4.4)}/><circle cx="56.5" cy="26.5" r="3.3" fill="${k}"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
