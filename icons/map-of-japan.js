const g = require('../src/parts/glass');
const body = 'M26 16 L70 16 Q82 16 82 28 L82 72 Q82 84 70 84 L26 84 Q14 84 14 72 L14 28 Q14 16 26 16 Z';
module.exports = {
  id: 'map-of-japan',
  name: 'Map Of Japan',
  emoji: '🗾',
  group: 'Travel & Places',
  subgroup: 'place-map',
  tags: ['japan', 'map', 'islands', 'travel', 'country'],
  tone: 'sky',
  body,
  shine: [22, 26, -40],
  shineSize: [5, 2],
  draw(c) {
    const sea = c.linear('a', 'sky', [0, 0, 1, 1], 1, 2);
    const land = c.radial('land', 'green', 0.4, 0.2);
    const ink = '#053A1A';
    return `<path d="${body}" fill="${sea}"/>
      <path d="M20 36 C24 34 26 37 30 35 M64 76 C68 74 70 77 74 75 M70 44 C73 42 75 45 78 43" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.4" stroke-linecap="round"/>
      <g fill="${land}" ${g.edge(ink, 1.1, 0.5)}>
        <path d="M60 23 C64 19 71 19 76 22 C78 25 75 27 73 30 C71 33 67 33 64 31 C61 29 58 26 60 23 Z"/>
        <path d="M61 35 C65.5 34.5 68 38.5 66 44 C64 50 61.5 54 57.5 58 C53 62 46 64 40 64 C34 65 29 67.5 25 68 C21.5 67.5 22 63.5 25.5 61.5 C30 59 36 58 42 57 C47.5 56 51.5 52 54 47 C56 42 57 36 61 35 Z"/>
        <path d="M36 68.5 C39 66.5 45 66.5 46.5 69.5 C44.5 72.5 38 72.5 36 68.5 Z"/>
        <path d="M19 70 C22 67.5 27 68.5 27.5 72.5 C27.5 76.5 24.5 80 21.5 79 C18.5 77.5 17.5 73.5 19 70 Z"/>
      </g>`;
  },
};
