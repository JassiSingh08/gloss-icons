const v = require('../src/parts/vehicle');
const body = 'M10 52 C10 46 24 42 34 41.5 C35 33 41 28 48 28 C55 28 61 33 62 41.5 C72 42 86 46 86 52 C86 58 70 63 48 63 C26 63 10 58 10 52 Z';
module.exports = {
  id: 'flying-saucer',
  name: 'Flying Saucer',
  emoji: '🛸',
  group: 'Travel & Places',
  subgroup: 'transport-air',
  tags: ['ufo', 'alien', 'space', 'sci-fi', 'mystery'],
  tone: 'silver',
  body,
  shine: [22, 47, -12],
  shineSize: [6, 2],
  draw(c) {
    const disc = c.radial('a', 'silver', 0.35, 0.2);
    const rim = c.linear('rim', 'slate', [0, 0, 0, 1], 1, 3);
    c.def(`<linearGradient id="${c.id('beam')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C6FFB0" stop-opacity=".8"/><stop offset="1" stop-color="#C6FFB0" stop-opacity=".1"/></linearGradient>
      <radialGradient id="${c.id('dome')}" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#E8FFE0"/><stop offset=".45" stop-color="#7FE0A0"/><stop offset="1" stop-color="#0E6E5A"/></radialGradient>`);
    const lights = [20, 30, 41, 55, 66, 76].map((x, i) => `<circle cx="${x}" cy="${i === 0 || i === 5 ? 55.5 : 57.5}" r="2.4" fill="${i % 2 ? '#FFD82E' : '#FF6EC7'}"/>`).join('');
    return `<path d="M34 60 L62 60 L76 84 L20 84 Z" fill="url(#${c.id('beam')})"/>
      <path d="${body}" fill="${disc}"/>
      <path d="M34 41.5 C35 33 41 28 48 28 C55 28 61 33 62 41.5 C58 44 38 44 34 41.5 Z" fill="url(#${c.id('dome')})"/>
      <path d="M10.5 53 C14 58 30 61 48 61 C66 61 82 58 85.5 53 C84 58 70 63 48 63 C26 63 12 58 10.5 53 Z" fill="${rim}"/>
      <path d="M12 51 C20 48 34 47 48 47 C62 47 76 48 84 51" stroke="#8E93AD" stroke-width="1.3" fill="none"/>
      ${lights}`;
  },
};
