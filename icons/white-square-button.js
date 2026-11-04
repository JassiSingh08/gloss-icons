const av = require('../src/parts/av');

module.exports = av.more(av.square({
  id: 'white-square-button',
  name: 'White Square Button',
  emoji: '🔳',
  group: 'Symbols',
  subgroup: 'geometric',
  tags: ['square', 'button', 'white', 'frame', 'key'],
}, 'white'), (c) => {
  // An inner square key, raised by a ring in the opposite colour.
  const d = 'M36 33 L60 33 Q63 33 63 36 L63 60 Q63 63 60 63 L36 63 Q33 63 33 60 L33 36 Q33 33 36 33 Z';
  return `<path d="${d}" fill="none" stroke="#2E2E3D" stroke-width="6.5" opacity=".9"/>
    <path d="${d}" fill="${c.linear('key', 'white', [0, 0, 1, 1], 0, 2)}"/>
    <path d="M37 35.6 L59 35.6" stroke="#fff" stroke-opacity=".5" stroke-width="1.4" stroke-linecap="round"/>`;
});
