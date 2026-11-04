const av = require('../src/parts/av');
const loop = 'M28 53 L28 43 Q28 34 37 34 L61 34 M68 41 L68 51 Q68 60 59 60 L35 60';
const heads = `${av.head(71.5, 34)} ${av.head(24.5, 60, 180)}`;

module.exports = av.button({
  id: 'repeat-button',
  name: 'Repeat Button',
  emoji: '🔁',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['repeat', 'loop', 'again', 'music', 'cycle'],
}, () => (k) => av.line(loop, k, 5.4) + av.fill(heads, k));
