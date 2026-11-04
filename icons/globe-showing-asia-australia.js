const g = require('../src/parts/glass');
// Same sphere and lighting as globe.js; only the land differs.
module.exports = {
  id: 'globe-showing-asia-australia',
  name: 'Globe Showing Asia-Australia',
  emoji: '🌏',
  group: 'Travel & Places',
  subgroup: 'place-map',
  tags: ['world', 'earth', 'asia', 'australia', 'travel'],
  tone: 'blue',
  body: g.GLOBE,
  shine: [34, 29, -35],
  draw(c) {
    return g.globe(c, `<path d="M17 34 C21 22 39 17 55 21 C65 23 72 29 75 38 C71 42 65 40 61 44 C57 48 51 46 49 52 C45 50 43 46 39 46.5 C35 47 36 55 32 57 C28 53 26 49 22 50 C19 46 17 40 17 34 Z"/>
        <path d="M50 56 C53 54 57 56 56 59 C53 60 51 59 50 56 Z"/><path d="M60 54 C63 53 66 55 64 57.5 C62 58 60 57 60 54 Z"/>
        <path d="M50 67 C54 61.5 65 60 71 64 C73.5 70 68 76.5 61.5 76.5 C57 76.5 52.5 74 50 67 Z"/>`);
  },
};
