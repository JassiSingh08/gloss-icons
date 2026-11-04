const body = 'M10 20 Q10 17 13 17 L83 17 Q86 17 86 20 L86 82 Q86 84 84 84 L80.5 84 Q79 84 79 82 L79 24 L17 24 L17 82 Q17 84 15.5 84 L12 84 Q10 84 10 82 Z';
module.exports = {
  id: 'goal-net',
  name: 'Goal Net',
  emoji: '🥅',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['goal', 'net', 'score', 'keeper', 'football'],
  tone: 'white',
  body,
  shine: [22, 19.5, -8],
  shineSize: [6, 1.6],
  draw(c) {
    c.def(`<clipPath id="${c.id('net')}"><path d="M17 24 L79 24 L79 84 L17 84 Z"/></clipPath>`);
    const lines = [];
    for (let x = -60; x < 100; x += 7) lines.push(`M${x} 24 L${x + 60} 84 M${x + 60} 24 L${x} 84`);
    const red = c.ramp('red')[1];
    return `<path d="M17 24 L28 33 L68 33 L79 24 Z M28 33 L28 78 L17 84 Z M68 33 L68 78 L79 84 Z" fill="#fff" opacity=".08"/>
      <path d="M28 33 L68 33 M28 33 L28 78 L68 78 L68 33 M17 84 L28 78 M79 84 L68 78 M17 24 L28 33 M79 24 L68 33" fill="none" stroke="#D8D2EE" stroke-opacity=".5" stroke-width="1.3"/>
      <g clip-path="url(#${c.id('net')})"><path d="${lines.join(' ')}" stroke="#FFFFFF" stroke-opacity=".55" stroke-width="1"/></g>
      <path d="${body}" fill="${c.linear('a', 'white', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M10 33 L17 33 M10 45 L17 45 M10 57 L17 57 M10 69 L17 69 M79 33 L86 33 M79 45 L86 45 M79 57 L86 57 M79 69 L86 69 M30 17 L30 24 M48 17 L48 24 M66 17 L66 24" stroke="${red}" stroke-width="5"/>`;
  },
};
