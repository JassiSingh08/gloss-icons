const p = require('../src/parts/paper');
module.exports = {
  id: 'chart-decreasing',
  name: 'Chart Decreasing',
  emoji: '📉',
  group: 'Objects',
  subgroup: 'office',
  tags: ['decline', 'down', 'loss', 'trend', 'stats'],
  tone: 'white',
  body: p.CHART,
  shine: [21, 21, -45],
  draw(c) {
    const r = c.ramp('red');
    const d = 'M22 28 L36 44 L48 38 L72 66';
    return `${p.chartCard(c)}
      <path d="${d}" stroke="${r[3]}" stroke-opacity=".45" stroke-width="5.4" ${p.ST} transform="translate(.8 1.4)"/>
      <path d="${d}" stroke="${r[1]}" stroke-width="5" ${p.ST}/>
      <path d="M76 71 L62 69 L72 58 Z" fill="${r[1]}" stroke="${r[1]}" stroke-width="2" stroke-linejoin="round"/>
      ${[[22, 28], [36, 44], [48, 38]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.6" fill="#fff" stroke="${r[2]}" stroke-width="2"/>`).join('')}`;
  },
};
