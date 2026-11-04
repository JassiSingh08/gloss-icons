const g = require('../src/parts/glass');
const body = 'M26 18 L70 18 Q82 18 82 30 L82 72 Q82 84 70 84 L26 84 Q14 84 14 72 L14 30 Q14 18 26 18 Z';
module.exports = {
  id: 'national-park',
  name: 'National Park',
  emoji: '🏞️',
  group: 'Travel & Places',
  subgroup: 'place-geographic',
  tags: ['park', 'nature', 'river', 'hiking', 'outdoors'],
  tone: 'green',
  body,
  shine: [22, 28, -40],
  shineSize: [5, 2],
  draw(c) {
    c.def(`<clipPath id="${c.id('t')}"><path d="${body}"/></clipPath>`);
    const sky = c.linear('sky', 'sky', [0, 0, 0, 1], 0, 1);
    const far = c.linear('far', 'slate', [0, 0, 1, 1], 1, 2);
    const hill = c.linear('a', 'green', [0, 0, 1, 1], 0, 2);
    const near = c.linear('near', 'green', [0, 0, 1, 1], 1, 3);
    const river = c.linear('river', 'blue', [0, 0, 0, 1], 0, 1);
    const pine = (x, y, s) => `<path d="M${x} ${y - 14 * s} L${x + 5 * s} ${y - 4 * s} L${x + 2 * s} ${y - 4 * s} L${x + 6 * s} ${y + 3 * s} L${x - 6 * s} ${y + 3 * s} L${x - 2 * s} ${y - 4 * s} L${x - 5 * s} ${y - 4 * s} Z" fill="#0E6E33"/>`;
    return `<g clip-path="url(#${c.id('t')})">
        <rect x="10" y="10" width="76" height="76" fill="${sky}"/>
        <circle cx="68" cy="30" r="5" fill="#FFF3A6"/>
        <path d="M10 56 L30 32 Q33 29 36 32 L46 44 L56 34 Q59 31 62 34 L86 56 Z" fill="${far}"/>
        <path d="M30 32 Q33 29 36 32 L38 35 L35 34 L33 36.5 L31 34 L28 35 Z M56 34 Q59 31 62 34 L64 36 L61 35.5 L59 38 L57 35.5 L54 36 Z" fill="#fff"/>
        <path d="M10 60 C24 50 38 52 50 56 C62 60 74 52 86 54 L86 86 L10 86 Z" fill="${hill}"/>
        <path d="M44 56 C50 57 54 58 52 62 C50 66 40 68 38 74 C36 80 44 84 46 86 L28 86 C26 80 24 74 30 68 C34 64 46 62 44 56 Z" fill="${river}"/>
        <path d="M10 72 C16 68 22 70 27 76 L30 86 L10 86 Z M86 70 C76 66 66 70 58 76 L54 86 L86 86 Z" fill="${near}"/>
        ${pine(20, 64, 0.9)}${pine(70, 64, 1)}${pine(77, 66, 0.8)}
        <path d="M36 72 C38 70 40 69 42 68" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.3" stroke-linecap="round"/>
      </g>`;
  },
};
