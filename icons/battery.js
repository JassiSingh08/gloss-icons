const d = require('../src/parts/device');

module.exports = {
  id: 'battery',
  name: 'Battery',
  emoji: '🔋',
  group: 'Objects',
  subgroup: 'computer',
  tags: ['battery', 'charged', 'power', 'energy', 'full'],
  tone: 'silver',
  body: d.BATTERY,
  shine: [17, 38, -40],
  shineSize: [5, 2.2],
  draw: (c) => d.battery(c, 4, 'green'),
};
