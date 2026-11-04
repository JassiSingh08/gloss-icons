const B = require('../src/parts/building');

const body = 'M17 84 Q13 84 13 80 L13 32 Q13 28 17 28 L79 28 Q83 28 83 32 L83 80 Q83 84 79 84 Z';
module.exports = {
  id: 'convenience-store',
  name: 'Convenience Store',
  emoji: '🏪',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['shop', 'store', 'snacks', 'late night', 'corner shop'],
  tone: 'white',
  body,
  shine: [20, 36, -20],
  draw(c) {
    const wall = c.linear('a', 'white', [0, 0, 1, 1], 0, 2);
    const band = (y, h, pal) => `<path d="M13 ${y} L83 ${y} L83 ${y + h} L13 ${y + h} Z" fill="${c.linear(`s${y}`, pal, [0, 0, 0, 1], 0, 2)}"/>`;
    return `<path d="${body}" fill="${wall}"/>
      <path d="M17 28 L79 28 Q83 28 83 32 L83 34 L13 34 L13 32 Q13 28 17 28 Z" fill="${c.linear('s1', 'orange', [0, 0, 0, 1], 1, 2)}"/>
      ${band(34, 5, 'green')}${band(39, 5, 'red')}
      <path d="M13 44 L83 44 L83 48 L13 48 Z" fill="#6E61A8" opacity=".3"/>
      <path d="M17 50 L37 50 L37 84 L17 84 Z M59 50 L79 50 L79 84 L59 84 Z" fill="${B.glass(c)}" stroke="#5A6B8C" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M17 60 L37 60 M17 71 L37 71 M59 60 L79 60 M59 71 L79 71" stroke="#fff" stroke-opacity=".9" stroke-width="1.6"/>
      <rect x="20" y="55" width="4.4" height="5" rx="1" fill="#FF5C8A"/><rect x="26" y="55" width="4.4" height="5" rx="1" fill="#FFD82E"/><rect x="32" y="55" width="4.4" height="5" rx="1" fill="#2FB85A"/><rect x="20" y="66" width="4.4" height="5" rx="1" fill="#FF8C00"/><rect x="26" y="66" width="4.4" height="5" rx="1" fill="#0C8CF0"/><rect x="32" y="66" width="4.4" height="5" rx="1" fill="#FF5C8A"/><rect x="62" y="55" width="4.4" height="5" rx="1" fill="#FFD82E"/><rect x="68" y="55" width="4.4" height="5" rx="1" fill="#2FB85A"/><rect x="74" y="55" width="4.4" height="5" rx="1" fill="#FF8C00"/><rect x="62" y="66" width="4.4" height="5" rx="1" fill="#0C8CF0"/><rect x="68" y="66" width="4.4" height="5" rx="1" fill="#FF5C8A"/><rect x="74" y="66" width="4.4" height="5" rx="1" fill="#FFD82E"/>
      <path d="M40 84 L40 52 L56 52 L56 84 Z" fill="${B.glow(c)}" stroke="#5A6B8C" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M48 52 L48 84" stroke="#5A6B8C" stroke-opacity=".6" stroke-width="1.4"/>
      <rect x="42" y="54" width="12" height="5" rx="1.5" fill="#2FB85A"/>`;
  },
};
