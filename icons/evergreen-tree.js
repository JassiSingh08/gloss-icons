const L = require('../src/parts/leaf');
// A tall wild conifer: three drooping tiers in deep forest green, no decorations (that is the
// Christmas tree's job).
const body = 'M48 7 C52 15 57 23 63 29 C64.2 30.4 63.5 32.5 61.5 32.5 L57 32.5 C62 40 67 46 72.5 51 C73.8 52.3 73 54.5 71 54.5 L64 54.5 C69 62 75 68 80.5 72 C82 73.2 81.3 75.5 79 75.5 C70 76.5 58 76 48 73.5 C38 76 26 76.5 17 75.5 C14.7 75.5 14 73.2 15.5 72 C21 68 27 62 32 54.5 L25 54.5 C23 54.5 22.2 52.3 23.5 51 C29 46 34 40 39 32.5 L34.5 32.5 C32.5 32.5 31.8 30.4 33 29 C39 23 44 15 48 7 Z';
module.exports = {
  id: 'evergreen-tree',
  name: 'Evergreen Tree',
  emoji: '🌲',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['tree', 'pine', 'forest', 'evergreen', 'nature'],
  tone: 'green',
  body,
  shine: [41, 26, -60],
  shineSize: [6, 2.6],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.35" cy="0.2" r="0.95"><stop offset="0" stop-color="#86D88A"/><stop offset="0.35" stop-color="#1F8A4A"/><stop offset="0.75" stop-color="#0B5A2E"/><stop offset="1" stop-color="#032A12"/></radialGradient>`);
    c.def(`<clipPath id="${c.id('t')}"><path d="${body}"/></clipPath>`);
    const trunk = c.linear('trunk', 'brown', [0, 0, 1, 0], 1, 3);
    return `<path d="M43 72 L53 72 L53.5 82 Q53.5 84.5 51 84.5 L45 84.5 Q42.5 84.5 42.5 82 Z" fill="${trunk}" stroke="#331805" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${body}" fill="url(#${c.id('a')})"/>
      <g clip-path="url(#${c.id('t')})" fill="#032A12" opacity=".4">
        <path d="M34 32.5 C40 36 56 36 62 32.5 L62 36 C56 39.5 40 39.5 34 36 Z"/>
        <path d="M24 54.5 C34 59 62 59 72 54.5 L72 58 C62 62.5 34 62.5 24 58 Z"/>
      </g>
      <g stroke="#86D88A" stroke-opacity=".45" stroke-width="1.4" stroke-linecap="round" fill="none">
        <path d="M48 14 L48 30 M44 22 L40 28 M52 22 L56 28"/><path d="M48 37 L48 52 M43 42 L36 50 M53 42 L60 50"/><path d="M48 60 L48 71 M42 63 L32 71 M54 63 L64 71"/>
      </g>`;
  },
};
