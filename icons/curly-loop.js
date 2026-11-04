const g = require('../src/parts/glyph');

// Drawn in two pieces so the second passes over the first where the line crosses itself.
const under = 'M10 73 C30 73 50 63 57 45 C62 30 58 14 46 14';
const over = 'M46 14 C34 14 29 30 37 46 C45 63 64 73 86 73';
module.exports = {
  id: 'curly-loop',
  name: 'Curly Loop',
  emoji: '➰',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['loop', 'curl', 'swirl', 'ribbon'],
  tone: 'teal',
  // A line has no silhouette of its own; glyph.tube draws its outline and gloss.
  body: 'M0 0',
  shine: null,
  draw: (c) => g.tube(c, under, { width: 11, palette: 'teal', name: 'u' }) + g.tube(c, over, { width: 11, palette: 'teal', name: 'o' }),
};
