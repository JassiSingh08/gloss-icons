const g = require('../src/parts/glyph');

// Three pieces, each laid over the one before, so both crossings read as over-and-under.
const a = 'M9 72 C22 72 33 64 36 52 C39 40 36 26 27 26';
const b = 'M27 26 C17 26 14 40 22 50 C30 60 40 66 48 66 C56 66 66 60 74 50 C82 40 79 26 69 26';
const d = 'M69 26 C60 26 57 40 60 52 C63 64 74 72 87 72';
module.exports = {
  id: 'double-curly-loop',
  name: 'Double Curly Loop',
  emoji: '➿',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['loop', 'curl', 'double', 'voicemail'],
  tone: 'navy',
  body: 'M0 0',
  shine: null,
  draw: (c) =>
    g.tube(c, a, { width: 9, palette: 'navy', name: 'a' }) +
    g.tube(c, b, { width: 9, palette: 'navy', name: 'b' }) +
    g.tube(c, d, { width: 9, palette: 'navy', name: 'd' }),
};
