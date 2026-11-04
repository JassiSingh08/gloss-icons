const s = require('../src/parts/sign');
const P = s.SERIES.religion;
module.exports = {
  id: 'star-of-david',
  name: 'Star Of David',
  emoji: '✡️',
  group: 'Symbols',
  subgroup: 'religion',
  tags: ['star of david', 'jewish', 'judaism', 'magen david', 'religion'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[1];
    const tri = (rot) => `M${[0, 120, 240].map((a) => { const t = s.rad(a + rot); return `${s.n(48 + 24 * Math.cos(t))} ${s.n(51 + 24 * Math.sin(t))}`; }).join(' L')} Z`;
    const art = (k) => `<path d="${tri(-90)} ${tri(90)}" stroke="${k}" fill="none" stroke-width="4.2" stroke-linejoin="round"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
