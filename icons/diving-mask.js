const glyph = require('../src/parts/glyph');

const body = 'M13 42 C13 29 21 24 34 24 L62 24 C75 24 83 29 83 42 C83 56 76 64 65 64 C57 64 54 57 48 57 C42 57 39 64 31 64 C20 64 13 56 13 42 Z';
const lens = 'M19 42 C19 33 24 30 34 30 L62 30 C72 30 77 33 77 42 C77 52 72 58 65 58 C59 58 55 51 48 51 C41 51 37 58 31 58 C24 58 19 52 19 42 Z';

module.exports = {
  id: 'diving-mask',
  name: 'Diving Mask',
  emoji: '🤿',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['diving', 'snorkel', 'scuba', 'ocean', 'swim'],
  tone: 'orange',
  body,
  shine: [22, 32, -40],
  shineSize: [5, 2],
  draw(c) {
    c.def(`<clipPath id="${c.id('lens')}"><path d="${lens}"/></clipPath>`);
    return `<path d="M13 40 L8 42 L8 50 L14 49 Z M83 40 L88 42 L88 50 L82 49 Z" fill="#141420"/>
      ${glyph.tube(c, 'M78 62 Q79 76 70 80 Q64 82 62 76', { width: 5.4, palette: 'black', name: 'mouth' })}
      ${glyph.tube(c, 'M84 12 L84 58 Q84 66 78 66', { width: 5.4, palette: 'sky', name: 'snorkel' })}
      <path d="${body}" fill="${c.radial('a', 'orange', 0.3, 0.2)}"/>
      <path d="${lens}" fill="${c.linear('glass', 'sky', [0, 0, 1, 1], 0, 2)}" stroke="#6B0F00" stroke-opacity=".5" stroke-width="1.2"/>
      <g clip-path="url(#${c.id('lens')})">
        <path d="M28 28 L42 28 L26 62 L12 62 Z M47 28 L52 28 L36 62 L31 62 Z" fill="#fff" opacity=".45"/>
        <path d="M14 52 C30 48 60 50 82 46 L82 62 L14 62 Z" fill="#0A3A6B" opacity=".25"/>
      </g>
      <path d="M82 22 L86 22 L86 30 L82 30 Z" fill="#141420"/>`;
  },
};
