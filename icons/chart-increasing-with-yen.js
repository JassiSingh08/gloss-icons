const p = require('../src/parts/paper');
const body = p.rr(14, 14, 68, 68, 10);
module.exports = {
  id: 'chart-increasing-with-yen',
  name: 'Chart Increasing With Yen',
  emoji: '💹',
  group: 'Objects',
  subgroup: 'money',
  tags: ['market', 'growth', 'yen', 'stocks', 'trend'],
  tone: 'green',
  body,
  shine: [22, 22, -45],
  draw(c) {
    const g = c.ramp('green');
    const trend = 'M22 70 L38 56 L48 63 L70 38';
    return `<path d="${body}" fill="${c.linear('a', 'green', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M20 76 L76 76 M20 76 L20 22', g[3], 1.4, 0.4)}
      <path d="${p.symbol('¥', [34, 34], 1.5)}" stroke="${g[3]}" stroke-opacity=".5" stroke-width="3.6" ${p.ST} transform="translate(.8 1.2)"/>
      <path d="${p.symbol('¥', [34, 34], 1.5)}" stroke="#fff" stroke-width="3.6" ${p.ST}/>
      <path d="${trend}" stroke="${g[3]}" stroke-opacity=".5" stroke-width="5" ${p.ST} transform="translate(.8 1.2)"/>
      <path d="${trend}" stroke="#fff" stroke-width="5" ${p.ST}/>
      <path d="M74 33 L74 45 L62 33 Z" fill="#fff" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>`;
  },
};
