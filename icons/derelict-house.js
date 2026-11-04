const B = require('../src/parts/building');

// The house, left to rot: a bite out of the roof, a boarded window, the door hanging off.
const body = 'M45.5 13.5 Q48 11.5 50.5 13.5 L62 25 L60 31 L65.5 29 L67 35.5 L71.5 33.5 L82 44 Q84.5 47 81 49.5 L76 49.5 L76 80 Q76 84 72 84 L24 84 Q20 84 20 80 L20 49.5 L15 49.5 Q11.5 47 14 44 Z';
module.exports = {
  id: 'derelict-house',
  name: 'Derelict House',
  emoji: '🏚️',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['abandoned', 'haunted', 'ruin', 'old', 'spooky'],
  tone: 'sand',
  body,
  shine: [28, 36, -45],
  draw(c) {
    const wall = c.linear('a', 'sand', [0, 0, 1, 1], 1, 3);
    const roof = c.radial('roof', 'brown', 0.35, 0.2);
    const plank = c.linear('plank', 'brown', [0, 0, 0, 1], 0, 1);
    const ink = '#2A1A0A';
    return `<path d="${body}" fill="${wall}"/>
      <path d="M45.5 13.5 Q48 11.5 50.5 13.5 L62 25 L60 31 L65.5 29 L67 35.5 L71.5 33.5 L82 44 Q84.5 47 81 49.5 L15 49.5 Q11.5 47 14 44 Z" fill="${roof}"/>
      <path d="M53 26 L57 22 L61 31 L56 37 L50 33 Z" fill="${ink}" opacity=".85"/>
      <path d="M52 34 L60 24 M55 36 L60 30" stroke="#B08A4E" stroke-width="1.6" stroke-linecap="round"/>
      ${B.eave(20, 49.5, 56, 4, '#3D2A10', 0.4)}
      <rect x="27" y="58" width="16" height="15" rx="2" fill="${ink}"/>
      <path d="M24.5 61 L45.5 69 L45 72.5 L24 64.5 Z M24 70 L45 61.5 L45.6 65 L24.6 73.5 Z" fill="${plank}" stroke="#331805" stroke-opacity=".6" stroke-width=".9"/>
      <circle cx="28" cy="63" r=".9" fill="#331805"/><circle cx="42" cy="68.5" r=".9" fill="#331805"/>
      <path d="M52 84 L52 61 L65 61 L65 84 Z" fill="${ink}"/>
      <path d="M51 84.5 L54 61.5 L63 63 L61 84.5 Z" fill="${c.radial('door', 'brown', 0.3, 0.2)}" stroke="#331805" stroke-opacity=".55" stroke-width="1"/>
      <path d="M66 52 L69 58 L67 63 L70 68" fill="none" stroke="#5C4420" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 76 L27 79 M47 52 L45 55 L47 58" fill="none" stroke="#5C4420" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="48" cy="33" r="4" fill="${ink}" stroke="#331805" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M45.5 30.5 L50.5 35.5" stroke="#B08A4E" stroke-width="1.2"/>`;
  },
};
