const k = require('../src/parts/critter');
// A branching coral: one silhouette from trunk to five knobbly tips, dotted with polyps.
const body = 'M42 84 C43 76 42 70 38 66 C32 62 26 58 22 50 C20 46 18 40 18 34 C18 29 24 29 24 34 C24 40 26 46 30 50 C30 44 30 36 32 30 C33 25 38 25 38 30 C38 38 38 46 42 54 C44 46 46 34 46 24 C46 17 52 17 52 24 C52 34 52 46 54 54 C58 46 58 38 60 32 C61 27 66 27 66 32 C66 40 64 46 66 50 C70 46 72 40 74 34 C75 29 80 29 80 34 C80 42 76 50 70 56 C62 64 56 70 54 76 C53 80 54 82 54 84 Z';
module.exports = {
  id: 'coral',
  name: 'Coral',
  emoji: '🪸',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['coral', 'reef', 'ocean', 'sea', 'marine'],
  tone: 'pink',
  body,
  shine: [21, 36, -75],
  shineSize: [4, 1.7],
  draw(c) {
    const dots = [[21, 33], [35, 29], [49, 23], [63, 31], [77, 33], [28, 52], [44, 60], [58, 58], [70, 50], [48, 72]];
    return `<path d="${body}" fill="${c.radial('a', 'pink', 0.4, 0.3)}"/>
      ${dots.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.5" fill="#FFD6E0" opacity=".85"/>`).join('')}
      ${k.part(c, 'M30 84 C30 79 38 77 48 77 C58 77 66 79 66 84 Z', c.radial('rock', 'sand', 0.4, 0.2), 'sand')}`;
  },
};
