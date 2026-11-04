const s = require('../src/parts/sign');
const P = s.SERIES.religion;
module.exports = {
  id: 'yin-yang',
  name: 'Yin Yang',
  emoji: '☯️',
  group: 'Symbols',
  subgroup: 'religion',
  tags: ['yin yang', 'tao', 'taoism', 'balance', 'religion'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[1];
    const dark = c.ramp(P)[3];
    const art = (k) => `<circle cx="48" cy="50" r="23" fill="${k}"/>`;
    return s.tile(c, P) + s.emboss(c, P, art) + `<path d="M48 27 A23 23 0 0 1 48 73 A11.5 11.5 0 0 1 48 50 A11.5 11.5 0 0 0 48 27 Z" fill="${dark}" opacity=".92"/>
      <circle cx="48" cy="61.5" r="3.6" fill="#fff"/><circle cx="48" cy="38.5" r="3.6" fill="${dark}"/>
      <circle cx="48" cy="50" r="23" fill="none" stroke="${dark}" stroke-width="1.4"/>`;
  },
};
