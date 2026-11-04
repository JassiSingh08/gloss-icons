const av = require('../src/parts/av');
const g = require('../src/parts/glyph');
const loop = 'M28 54 L28 41 Q28 31 38 31 L61 31 M68 40 L68 53 Q68 63 58 63 L35 63';
const heads = `${av.head(71.5, 31)} ${av.head(24.5, 63, 180)}`;
const one = g.path('1', { x: 48.5, y: 47, size: 17 });

module.exports = av.button({
  id: 'repeat-single-button',
  name: 'Repeat Single Button',
  emoji: '🔂',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['repeat one', 'loop', 'single', 'music', 'once'],
}, () => (k) => av.line(loop, k, 5.4) + av.fill(heads, k) + av.line(one.d, k, one.weight));
