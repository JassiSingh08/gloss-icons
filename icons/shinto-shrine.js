// A torii gate. The two small openings between the top beam and the tie beam are holes, wound the
// other way so the outline runs round them.
const body = 'M9 11 Q48 20 87 11 L85.5 19 L72 21.8 L72 32 L79 32 L79 37 L72 37 L72 84 L64 84 L64 37 L32 37 L32 84 L24 84 L24 37 L17 37 L17 32 L24 32 L24 21.8 L10.5 19 Z M32 22.9 L32 32 L45 32 L45 23.7 Z M51 23.7 L51 32 L64 32 L64 22.9 Z';
module.exports = {
  id: 'shinto-shrine',
  name: 'Shinto Shrine',
  emoji: '⛩️',
  group: 'Travel & Places',
  subgroup: 'place-religious',
  tags: ['torii', 'shrine', 'japan', 'shinto', 'gate'],
  tone: 'ember',
  body,
  shine: [20, 16.5, 12],
  shineSize: [5, 1.6],
  draw(c) {
    const red = c.linear('a', 'ember', [0, 0, 1, 1], 0, 2);
    const cap = c.linear('cap', 'black', [0, 0, 0, 1], 0, 2);
    const foot = c.linear('foot', 'black', [0, 0, 1, 0], 0, 2);
    const shade = '#3D0700';
    return `<path d="${body}" fill="${red}" fill-rule="nonzero"/>
      <path d="M9 11 Q48 20 87 11 L86.4 15 Q48 24 9.6 15 Z" fill="${cap}"/>
      <path d="M24 21.8 L32 22.9 L32 25 L24 24 Z M64 22.9 L72 21.8 L72 24 L64 25 Z M17 37 L79 37 L79 35.5 L17 35.5 Z" fill="${shade}" opacity=".3"/>
      <rect x="42.5" y="24.5" width="11" height="7" rx="1" fill="${cap}"/>
      <path d="M24 37 L24 84 M64 37 L64 84" stroke="#fff" stroke-opacity=".25" stroke-width="1.6"/>
      <rect x="22.5" y="77" width="11" height="7" rx="1.2" fill="${foot}"/>
      <rect x="62.5" y="77" width="11" height="7" rx="1.2" fill="${foot}"/>`;
  },
};
