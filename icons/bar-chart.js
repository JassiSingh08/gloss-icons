const p = require('../src/parts/paper');
module.exports = {
  id: 'bar-chart',
  name: 'Bar Chart',
  emoji: '📊',
  group: 'Objects',
  subgroup: 'office',
  tags: ['chart', 'stats', 'data', 'report', 'graph'],
  tone: 'white',
  body: p.CHART,
  shine: [21, 21, -45],
  draw(c) {
    const bar = (x, top, pal) => `<path d="${p.rr(x, top, 13, 74 - top, [2.5, 2.5, 0, 0])}" fill="${c.linear(pal, pal, [0, 0, 1, 0.3], 0, 2)}" stroke="${c.ramp(pal)[3]}" stroke-opacity=".55" stroke-width="1.1"/>`;
    return `${p.chartCard(c)}
      ${bar(22, 50, 'blue')}${bar(41.5, 32, 'orange')}${bar(61, 42, 'green')}
      ${p.line('M19 74.5 L77 74.5', c.ramp('white')[3], 1.6, 0.7)}`;
  },
};
