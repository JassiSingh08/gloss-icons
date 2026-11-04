const s = require('../src/parts/sign');
const P = s.SERIES.religion;
module.exports = {
  id: 'wheel-of-dharma',
  name: 'Wheel Of Dharma',
  emoji: '☸️',
  group: 'Symbols',
  subgroup: 'religion',
  tags: ['dharma', 'wheel', 'buddhist', 'buddhism', 'religion'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[1];
    const at = (r, a) => `${s.n(48 + r * Math.cos(s.rad(a)))} ${s.n(50 + r * Math.sin(s.rad(a)))}`;
    const A = [0, 45, 90, 135, 180, 225, 270, 315].map((a) => a + 22.5);
    const spokes = A.map((a) => `M${at(4, a)} L${at(16, a)}`).join(' ');
    const knobs = A.map((a) => `M${at(18, a)} L${at(21.5, a)}`).join(' ');
    const art = (k) => `<circle cx="48" cy="50" r="16.5" fill="none" stroke="${k}" stroke-width="4"/>
      <circle cx="48" cy="50" r="8.5" fill="none" stroke="${k}" stroke-width="1.8"/>
      <path d="${spokes}" stroke="${k}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="${knobs}" stroke="${k}" stroke-width="3" stroke-linecap="round"/>
      ${A.map((a) => { const [x, y] = at(23.2, a).split(' '); return `<circle cx="${x}" cy="${y}" r="2.6" fill="${k}"/>`; }).join('')}
      <circle cx="48" cy="50" r="4.4" fill="${k}"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
