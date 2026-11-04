const g = require('../src/parts/glass');
// Same sphere and lighting as globe.js, with the grid in place of land.
module.exports = {
  id: 'globe-with-meridians',
  name: 'Globe With Meridians',
  emoji: '🌐',
  group: 'Travel & Places',
  subgroup: 'place-map',
  tags: ['internet', 'web', 'world', 'network', 'language'],
  tone: 'blue',
  body: g.GLOBE,
  shine: [34, 29, -35],
  draw(c) {
    return `${g.globe(c, '')}
      <g clip-path="url(#${c.id('ball')})" fill="none" stroke="#C9ECFF" stroke-opacity=".85" stroke-width="2">
        <path d="${g.ellipse(48, 48, 13, 32)}"/><path d="${g.ellipse(48, 48, 25, 32)}"/><path d="M48 16 L48 80"/>
        <path d="M16 48 L80 48"/><path d="M20 33 C34 37 62 37 76 33"/><path d="M20 63 C34 59 62 59 76 63"/>
      </g>`;
  },
};
