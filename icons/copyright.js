const g = require('../src/parts/glyph');

// A ring with the letter standing free inside it; the hole winds the other way.
const R = 35;
const r = 28.5;
const body = `M48 ${47 - R} A${R} ${R} 0 1 1 47.99 ${47 - R} Z M48 ${47 - r} A${r} ${r} 0 1 0 48.01 ${47 - r} Z`;
const letter = g.path('C', { x: 48.5, y: 47, size: 34, weight: 7.5 });
module.exports = {
  id: 'copyright',
  name: 'Copyright',
  emoji: '©️',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['copyright', 'legal', 'rights', 'c'],
  tone: 'silver',
  body,
  shine: [26, 30, -52],
  shineSize: [5, 2],
  draw(c) {
    const lip = c.linear('lip', 'silver', [0, 0, 1, 1], 3, 0);
    return `<path d="${body}" fill="${c.radial('a', 'silver', 0.3, 0.22)}" fill-rule="evenodd"/>
      <circle cx="48" cy="47" r="${r + 1.2}" fill="none" stroke="${lip}" stroke-width="2.4" opacity=".5"/>` +
      g.tube(c, letter.d, { width: letter.weight, palette: 'silver', name: 'l' });
  },
};
