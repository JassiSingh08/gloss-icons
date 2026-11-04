const v = require('../src/parts/vehicle');
const body = 'M7 54 L27 54 L27 40 Q27 36 31 36 L51 36 L52 26 Q52.4 24 54.4 24 L60 24 Q62 24 62 26 L62 36 L65 36 Q69 36 69 40 L69 54 L89 54 L83 72 L13 72 Z';
module.exports = {
  id: 'ferry',
  name: 'Ferry',
  emoji: '⛴️',
  group: 'Travel & Places',
  subgroup: 'transport-water',
  tags: ['boat', 'crossing', 'island', 'harbour', 'cars'],
  tone: 'blue',
  body,
  shine: [31, 40, -30],
  shineSize: [4, 1.6],
  draw(c) {
    const paint = c.linear('a', 'blue', [0, 0, 0, 1], 0, 2);
    const white = c.linear('white', 'white', [0, 0, 0, 1], 0, 2);
    const funnel = c.linear('funnel', 'gold', [0, 0, 1, 0], 0, 2);
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    return `<path d="${body}" fill="${paint}"/>
      <g clip-path="url(#${c.id('k')})">
        <rect x="0" y="0" width="96" height="62" fill="${white}"/>
        <rect x="50" y="20" width="14" height="16" fill="${funnel}"/>
        <rect x="50" y="20" width="14" height="5" fill="#141420"/>
      </g>
      ${v.win(c, 32, 41, 32, 6, 2, 'dark')}
      <path d="M8 54 L88 54" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="${v.rr(14, 56.5, 14, 4.5, 1.5)}" fill="#141420" opacity=".8"/><path d="${v.rr(32, 56.5, 14, 4.5, 1.5)}" fill="#141420" opacity=".8"/>
      <path d="${v.rr(50, 56.5, 14, 4.5, 1.5)}" fill="#141420" opacity=".8"/><path d="${v.rr(68, 56.5, 14, 4.5, 1.5)}" fill="#141420" opacity=".8"/>
      <path d="M10 66 L86 66" stroke="#F7F5FF" stroke-width="2"/>
      ${v.water(c, 72)}`;
  },
};
