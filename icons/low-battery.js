const d = require('../src/parts/device');

module.exports = {
  id: 'low-battery',
  name: 'Low Battery',
  emoji: '🪫',
  group: 'Objects',
  subgroup: 'computer',
  tags: ['low battery', 'empty', 'drained', 'charge', 'tired'],
  tone: 'silver',
  body: d.BATTERY,
  shine: [17, 38, -40],
  shineSize: [5, 2.2],
  draw: (c) => `${d.battery(c, 1, 'red')}
      <ellipse cx="25" cy="70" rx="9" ry="4" fill="#FF7A62" opacity=".3"/>`,
};
