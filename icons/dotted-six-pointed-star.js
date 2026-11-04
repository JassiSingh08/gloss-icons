const s = require('../src/parts/sign');
const P = s.SERIES.religion;
module.exports = {
  id: 'dotted-six-pointed-star',
  name: 'Dotted Six-Pointed Star',
  emoji: '🔯',
  group: 'Symbols',
  subgroup: 'religion',
  tags: ['star', 'hexagram', 'six pointed', 'fortune', 'religion'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[1];
    const pts = Array.from({ length: 12 }, (_, i) => { const t = s.rad(i * 30 - 90); const r = i % 2 ? 24 / Math.sqrt(3) : 24; return `${s.n(48 + r * Math.cos(t))} ${s.n(51 + r * Math.sin(t))}`; });
    const d = `M${pts.join(' L')} Z`;
    const dark = c.ramp(P)[2];
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" fill="${k}" stroke="${k}" stroke-width="1.6" stroke-linejoin="round"/>`) + `<circle cx="48" cy="51" r="4.4" fill="${dark}"/>`;
  },
};
