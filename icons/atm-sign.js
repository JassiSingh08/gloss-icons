const s = require('../src/parts/sign');
const P = s.SERIES.transport;
module.exports = {
  id: 'atm-sign',
  name: 'ATM Sign',
  emoji: '🏧',
  group: 'Symbols',
  subgroup: 'transport-sign',
  tags: ['atm', 'cash', 'bank', 'money', 'withdraw'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[2];
    const w = s.word('ATM', 48, 61, 15, 4.8);
    const art = (k) => `<rect x="30" y="26" width="36" height="20" rx="3.5" fill="${k}"/>
      <path d="M30.5 32 L65.5 32" stroke="${g}" stroke-width="3.4" opacity=".55"/>
      <path d="M35 40.5 L45 40.5" stroke="${g}" stroke-width="2.2" stroke-linecap="round" opacity=".45"/>
      <path d="${w}" stroke="${k}" ${s.ST(4.8)}/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
