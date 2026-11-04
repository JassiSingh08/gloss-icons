const s = require('../src/parts/sign');
const P = s.SERIES.transport;
module.exports = {
  id: 'restroom',
  name: 'Restroom',
  emoji: '🚻',
  group: 'Symbols',
  subgroup: 'transport-sign',
  tags: ['restroom', 'toilet', 'bathroom', 'wc', 'lavatory'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[2];
    const art = (k) => `<g transform="translate(-4.5 7) scale(.8)" >${s.man(k)}</g>
      <g transform="translate(23.5 7) scale(.8)">${s.woman(k)}</g>
      <path d="M48 27 L48 73" stroke="${k}" stroke-width="2.4" stroke-linecap="round"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
