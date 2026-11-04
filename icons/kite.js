const body = 'M52 9 Q54 9 55.5 10.5 L79 34 Q80.5 35.5 79.3 37.3 L49 73 Q47.5 74.8 46 73 L21.5 34.5 Q20.3 32.6 22 31.3 L49 10 Q50.5 9 52 9 Z';
module.exports = {
  id: 'kite',
  name: 'Kite',
  emoji: '🪁',
  group: 'Activities',
  subgroup: 'game',
  tags: ['kite', 'wind', 'fly', 'beach', 'summer'],
  tone: 'red',
  body,
  shine: [36, 23, -38],
  draw(c) {
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    const bow = (x, y, fill) => `<path d="M${x} ${y} L${x - 5} ${y - 4} L${x - 5} ${y + 4} Z M${x} ${y} L${x + 5} ${y - 4} L${x + 5} ${y + 4} Z" fill="${fill}"/>`;
    return `<path d="M47 73 C40 78 34 74 28 78 C22 82 18 80 14 84" fill="none" stroke="#F7F5FF" stroke-width="1.4" stroke-linecap="round"/>
      ${bow(36, 76, '#FFD82E')}${bow(23, 80, '#5BC2FF')}
      <path d="${body}" fill="${c.radial('a', 'red', 0.35, 0.2)}"/>
      <g clip-path="url(#${c.id('k')})">
        <path d="M52 9 L50 40 L80 36 Z" fill="${c.linear('y', 'gold', [0, 0, 1, 1], 0, 2)}"/>
        <path d="M21 32 L50 40 L47 75 Z" fill="${c.linear('b', 'blue', [0, 0, 1, 1], 0, 2)}"/>
      </g>
      <path d="M52 10 L47 73 M22 32 L79 36" stroke="#331805" stroke-opacity=".55" stroke-width="1.8" stroke-linecap="round"/>`;
  },
};
