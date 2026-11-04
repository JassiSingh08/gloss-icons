const g = require('../src/parts/glass');
// A map folded in three: each panel tilts its own way, so each catches the light differently.
const body = 'M14 25 L37 31 L59 23 L82 29 L82 79 L59 73 L37 81 L14 75 Z';
const panels = ['M14 25 L37 31 L37 81 L14 75 Z', 'M37 31 L59 23 L59 73 L37 81 Z', 'M59 23 L82 29 L82 79 L59 73 Z'];
module.exports = {
  id: 'world-map',
  name: 'World Map',
  emoji: '🗺️',
  group: 'Travel & Places',
  subgroup: 'place-map',
  tags: ['map', 'world', 'travel', 'route', 'explore'],
  tone: 'sky',
  body,
  shine: [22, 34, 15],
  shineSize: [5, 1.8],
  draw(c) {
    const sea = [c.linear('a', 'sky', [0, 0, 1, 1], 0, 1), c.linear('b', 'sky', [0, 0, 1, 1], 1, 2), c.linear('c', 'sky', [0, 0, 1, 1], 0, 1)];
    const land = c.radial('land', 'green', 0.35, 0.25);
    c.def(`<clipPath id="${c.id('m')}"><path d="${body}"/></clipPath>`);
    return `${panels.map((d, i) => `<path d="${d}" fill="${sea[i]}"/>`).join('')}
      <g clip-path="url(#${c.id('m')})" fill="${land}">
        <path d="M17 38 C21 31 31 33 34 38 C36 43 32 46 30 50 C28 54 30 58 27 60 C24 56 18 52 17 46 Z"/>
        <path d="M30 63 C34 61 38 64 37 69 C36 74 33 77 31 76 C29 72 29 67 30 63 Z"/>
        <path d="M44 34 C50 30 58 29 64 32 C70 31 77 33 79 39 C76 43 70 42 66 45 C62 48 58 46 54 47 C50 48 47 44 44 42 C42 39 42 36 44 34 Z"/>
        <path d="M46 51 C50 49 55 51 55 56 C55 61 51 66 48 65 C46 61 44 55 46 51 Z"/>
        <path d="M68 58 C72 55 78 57 78 62 C76 66 70 66 68 63 Z"/>
      </g>
      <path d="M25 44 C36 58 44 40 52 55 C58 66 66 52 72 61" fill="none" stroke="#E3120B" stroke-width="1.6" stroke-dasharray="3 2.4" stroke-linecap="round"/>
      <circle cx="72" cy="61" r="2.2" fill="#E3120B" stroke="#fff" stroke-width="1"/>
      <path d="M37 31 L37 81 M59 23 L59 73" stroke="#0A3A6B" stroke-opacity=".35" stroke-width="1.1"/>`;
  },
};
