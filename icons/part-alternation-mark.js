const g = require('../src/parts/glyph');

const mark = 'M14 60 L27 34 L40 58 L57 17 C62 42 70 62 84 78';
module.exports = {
  id: 'part-alternation-mark',
  name: 'Part Alternation Mark',
  emoji: '〽️',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['mark', 'song', 'zigzag', 'japanese'],
  tone: 'orange',
  body: 'M0 0',
  shine: null,
  draw: (c) => g.tube(c, mark, { width: 9, palette: 'orange', name: 'm' }),
};
