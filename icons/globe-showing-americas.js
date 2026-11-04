const g = require('../src/parts/glass');
// Same sphere and lighting as globe.js; only the land differs.
module.exports = {
  id: 'globe-showing-americas',
  name: 'Globe Showing Americas',
  emoji: '🌎',
  group: 'Travel & Places',
  subgroup: 'place-map',
  tags: ['world', 'earth', 'americas', 'travel', 'planet'],
  tone: 'blue',
  body: g.GLOBE,
  shine: [34, 29, -35],
  draw(c) {
    return g.globe(c, `<path d="M19 31 C25 20 43 15 57 20 C61 23 57 27 53 28.5 C49 30.5 51 36 47.5 40 C44 44 45.5 48 48 52 C43 51 40 46 36 44.5 C30 42.5 23 40 19 31 Z"/>
        <path d="M59 17.5 C63 13.5 71 15.5 69 21 C66 24 61 23 59 17.5 Z"/>
        <path d="M50.5 55 C56 52 66 54 70 60 C72 66 64.5 70 60.5 76 C58.5 80 56.5 82 54.5 80 C54 74 52 68 50 62 C48.5 59 48.5 56 50.5 55 Z"/>`);
  },
};
