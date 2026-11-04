const s = require('../src/parts/sign');
const P = s.SERIES.religion;
module.exports = {
  id: 'latin-cross',
  name: 'Latin Cross',
  emoji: '✝️',
  group: 'Symbols',
  subgroup: 'religion',
  tags: ['cross', 'christian', 'christianity', 'church', 'religion'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[1];
    const d = 'M43.5 22 L52.5 22 L52.5 34.5 L65 34.5 L65 43.5 L52.5 43.5 L52.5 77 L43.5 77 L43.5 43.5 L31 43.5 L31 34.5 L43.5 34.5 Z';
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" fill="${k}" stroke="${k}" stroke-width="1.6" stroke-linejoin="round"/>`);
  },
};
