const g = require('../src/parts/glass');
const body = 'M45.5 20 Q48 16 50.5 20 L80 73 Q81 75.5 78.5 75.5 L17.5 75.5 Q15 75.5 16 73 Z';
module.exports = {
  id: 'camping',
  name: 'Camping',
  emoji: '🏕️',
  group: 'Travel & Places',
  subgroup: 'place-geographic',
  tags: ['camping', 'tent', 'outdoors', 'adventure', 'nature'],
  tone: 'orange',
  body,
  shine: [37, 41, -60],
  shineSize: [5, 1.8],
  draw(c) {
    const tent = c.linear('a', 'orange', [0, 0, 1, 1], 1, 2);
    const side = c.linear('side', 'ember', [0, 0, 1, 1], 1, 2);
    const grass = c.linear('grass', 'green', [0, 0, 0, 1], 1, 2);
    const pine = c.linear('pine', 'green', [0, 0, 1, 1], 1, 3);
    const gr = c.ramp('green');
    return `<path d="${g.ellipse(48, 78.5, 37, 5.5)}" fill="${grass}" stroke="${gr[3]}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M74 14 L84 36 L79 36 L86 52 L80 52 L87 68 L61 68 L68 52 L62 52 L69 36 L64 36 Z" fill="${pine}" ${g.edge(gr[3], 1.1, 0.5)} transform="translate(-4 4) scale(.95)"/>
      <path d="M70.6 69 L70.6 75" stroke="#6E3A14" stroke-width="3"/>
      <path d="${body}" fill="${tent}"/>
      <path d="M48 18 L80 73 Q81 75.5 78.5 75.5 L60 75.5 Z" fill="${side}" opacity=".7"/>
      <path d="M48 30 L59 75.5 L37 75.5 Z" fill="#3D0700"/>
      <path d="M48 30 L37 75.5 L31 75.5 C38 62 44 46 48 30 Z" fill="#FFF07A" opacity=".9"/>
      <path d="M42 21 L48 17 L54 21" fill="none" stroke="#6B0F00" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M44 24 L35 41" stroke="#fff" stroke-opacity=".7" stroke-width="1.4" stroke-linecap="round"/>`;
  },
};
