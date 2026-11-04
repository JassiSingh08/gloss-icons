const s = require('../src/parts/sign');
const P = s.SERIES.religion;
module.exports = {
  id: 'menorah',
  name: 'Menorah',
  emoji: '🕎',
  group: 'Symbols',
  subgroup: 'religion',
  tags: ['menorah', 'hanukkah', 'candles', 'jewish', 'religion'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[1];
    const arms = [6, 11, 16, 21].map((r) => `M${48 - r} 37 L${48 - r} 41 A${r} ${r} 0 0 0 ${48 + r} 41 L${48 + r} 37`).join(' ');
    const flame = (x, y) => `M${x} ${y - 6} Q${x + 2.6} ${y - 2.4} ${x + 2.2} ${y - 0.8} A2.2 2.2 0 0 1 ${x - 2.2} ${y - 0.8} Q${x - 2.6} ${y - 2.4} ${x} ${y - 6} Z`;
    const xs = [27, 32, 37, 42, 54, 59, 64, 69];
    const flames = xs.map((x) => flame(x, 34)).join(' ') + ' ' + flame(48, 29);
    const art = (k) => `<path d="${arms} M48 32 L48 67" stroke="${k}" fill="none" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M44 66 L52 66 L56 72 L40 72 Z" fill="${k}"/><rect x="35" y="71.5" width="26" height="4" rx="2" fill="${k}"/>`;
    return s.tile(c, P) + s.emboss(c, P, art) + `<path d="${flames}" fill="${c.radial('fl', 'flame', 0.5, 0.7)}"/>`;
  },
};
