const a = require('../src/parts/animal');
const { porcine } = require('./pig');

// Darker and greyer than a farm brown: a wild animal's coat.
const BRISTLE = ['#B08A6A', '#6E4A30', '#3E2414', '#1A0C04'];

module.exports = porcine({
  id: 'boar',
  name: 'Boar',
  emoji: '🐗',
  tags: ['boar', 'wild pig', 'tusks', 'forest', 'hog'],
  coat: 'brown',
  fill: (c) => a.custom(c, 'a', BRISTLE, 0.3, 0.25),
  stops: BRISTLE,
  legPal: 'brown',
  hoof: '#1A0C04',
  ink: '#140802',
  snout: (c) => c.radial('snout', 'sand', 0.4, 0.2),
  ear: [[20, 33], [21, 25], [26, 21, 1], [28, 28], [25, 35]],
  // A bristling crest along the spine.
  back: (c) => `<path d="M18 33 L22 25 L25 31 L29 23 L32 30.5 L37 22.5 L39 31 L45 24 L46 32 L52 26 L53 33 L60 28 L59 34 L70 33 Z" fill="#2A160A"${a.edge('brown')}/>`,
  extra: () => `<path d="M11 53 Q10 47 14.5 44.5 Q12.5 49 14 53 Z" fill="#FFF8EC" stroke="#8A5A1E" stroke-width=".8"/>`,
});
