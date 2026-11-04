const p = require('../src/parts/paper');
module.exports = {
  id: 'chart-increasing',
  name: 'Chart Increasing',
  emoji: '📈',
  group: 'Objects',
  subgroup: 'office',
  tags: ['growth', 'up', 'trend', 'success', 'stats'],
  tone: 'white',
  body: p.CHART,
  shine: [21, 21, -45],
  draw(c) {
    const g = c.ramp('green');
    const d = 'M22 68 L36 54 L48 60 L72 30';
    return `${p.chartCard(c)}
      <path d="${d}" stroke="${g[3]}" stroke-opacity=".45" stroke-width="5.4" ${p.ST} transform="translate(.8 1.4)"/>
      <path d="${d}" stroke="${g[1]}" stroke-width="5" ${p.ST}/>
      <path d="M76 25 L75 39 L63 30 Z" fill="${g[1]}" stroke="${g[1]}" stroke-width="2" stroke-linejoin="round"/>
      ${[[22, 68], [36, 54], [48, 60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.6" fill="#fff" stroke="${g[2]}" stroke-width="2"/>`).join('')}`;
  },
};
