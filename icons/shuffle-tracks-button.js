const av = require('../src/parts/av');
// Two crossing arrows; the rising one passes in front through a gap in the other.
const under = 'M25 36 L32 36 C43 36 47.5 60 58.5 60 L64 60';
const over = 'M25 60 L32 60 C43 60 47.5 36 58.5 36 L64 36';
const heads = `${av.head(73.5, 36)} ${av.head(73.5, 60)}`;

module.exports = av.button({
  id: 'shuffle-tracks-button',
  name: 'Shuffle Tracks Button',
  emoji: '🔀',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['shuffle', 'random', 'mix', 'music', 'crossed'],
}, (c) => {
  const gap = av.cut(c, over, 12);
  return (k) => `<g mask="${gap}">${av.line(under, k, 5.4)}</g>${av.line(over, k, 5.4)}${av.fill(heads, k)}`;
});
