const g = require('../src/parts/glyph');

const tm = g.path('TM', { x: 48, y: 46, size: 40, weight: 8.5 });
module.exports = {
  id: 'trade-mark',
  name: 'Trade Mark',
  emoji: '™️',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['trademark', 'tm', 'brand', 'legal'],
  tone: 'silver',
  body: 'M0 0',
  shine: null,
  draw: (c) => g.tube(c, tm.d, { width: tm.weight, palette: 'silver', name: 'tm' }),
};
