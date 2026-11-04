const ball = require('../src/parts/ball');

const body = 'M50 47 C44 38 44 20 56 13 C66 7 82 11 84 24 C86 36 74 46 60 50 C56 51 52 50 50 47 Z';
const shaft = ball.band([[16, 85], [52, 48]], 6.4);
const b = ball.make(67, 27, 7);

module.exports = {
  id: 'lacrosse',
  name: 'Lacrosse',
  emoji: '🥍',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['lacrosse', 'stick', 'net', 'ball', 'sport'],
  tone: 'white',
  body,
  shine: [52, 26, -70],
  shineSize: [5, 1.8],
  draw(c) {
    c.def(`<clipPath id="${c.id('head')}"><path d="${body}"/></clipPath>`);
    const net = [];
    for (let k = -40; k < 60; k += 6.5) net.push(`M${30 + k} 0 L${80 + k} 60 M${110 - k} 0 L${60 - k} 60`);
    return `<path d="${shaft}" fill="${c.linear('shaft', 'silver', [0, 0, 1, 0], 0, 3)}"/>
      <path d="${body}" fill="#1E2A3D" opacity=".85"/>
      <g clip-path="url(#${c.id('head')})">
        <path d="${net.join(' ')}" stroke="#FFFFFF" stroke-opacity=".75" stroke-width="1.1"/>
        <path d="${b.body}" fill="${b.fill(c, 'ball', 'orange')}"/>
      </g>
      <path d="${body}" fill="none" stroke="${c.linear('frame', 'white', [0, 0, 1, 1], 0, 2)}" stroke-width="4.6"/>
      <path d="M50 46 C56 49 62 48 66 46" fill="none" stroke="#D8D2EE" stroke-width="2.4" stroke-linecap="round"/>`;
  },
};
