const s = require('../src/parts/sign');
const P = s.SERIES.currency;
// A dollar and a yen trading places, chased round by two curved arrows.
const dollar = (x, y) => `M${x + 4.9} ${y - 8.3} A5.6 5 0 1 0 ${x} ${y} A5.6 5 0 1 1 ${x - 4.9} ${y + 8.3} M${x} ${y - 14} L${x} ${y + 14}`;
const yen = (x, y) => `M${x - 7} ${y - 12} L${x} ${y - 1} L${x + 7} ${y - 12} M${x} ${y - 1} L${x} ${y + 12} M${x - 6} ${y + 1.5} L${x + 6} ${y + 1.5} M${x - 6} ${y + 6.5} L${x + 6} ${y + 6.5}`;
module.exports = {
  id: 'currency-exchange',
  name: 'Currency Exchange',
  emoji: '💱',
  group: 'Symbols',
  subgroup: 'currency',
  tags: ['exchange', 'currency', 'money', 'forex', 'bureau de change'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const arrows = 'M49 30 Q63 29 65.5 40 M47 70 Q33 71 30.5 60';
    const heads = `${s.head(66.5, 47, 80, 9, 6)} ${s.head(29.5, 53, 260, 9, 6)}`;
    const art = (k) => `<path d="${dollar(35, 38)} ${yen(61, 62)}" stroke="${k}" ${s.ST(4.4)}/>
      <path d="${arrows}" stroke="${k}" ${s.ST(3.4)}/><path d="${heads}" fill="${k}" stroke="${k}" stroke-width="1.6" stroke-linejoin="round"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
