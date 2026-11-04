const s = require('../src/parts/sign');
const P = s.SERIES.religion;
module.exports = {
  id: 'orthodox-cross',
  name: 'Orthodox Cross',
  emoji: '☦️',
  group: 'Symbols',
  subgroup: 'religion',
  tags: ['orthodox', 'cross', 'christian', 'church', 'religion'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[1];
    const d = 'M48 21 L48 78 M40.5 29 L55.5 29 M31 40.5 L65 40.5 M37 66.5 L59 57.5';
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" fill="none" stroke-width="6"/>`);
  },
};
