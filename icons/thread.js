const body = 'M29 25 L67 25 L67 71 L29 71 Z';
module.exports = {
  id: 'thread',
  name: 'Thread',
  emoji: '🧵',
  group: 'Activities',
  subgroup: 'arts & crafts',
  tags: ['thread', 'sewing', 'spool', 'stitch', 'craft'],
  tone: 'red',
  body,
  shine: [33, 34, -80],
  shineSize: [6, 1.8],
  draw(c) {
    c.def(`<clipPath id="${c.id('w')}"><path d="${body}"/></clipPath>`);
    const wood = c.linear('wood', 'sand', [0, 0, 1, 0], 0, 2);
    const flange = (y) => `<path d="M22 ${y} Q18 ${y} 18 ${y + 3.5} L18 ${y + 6.5} Q18 ${y + 10} 22 ${y + 10} L74 ${y + 10} Q78 ${y + 10} 78 ${y + 6.5} L78 ${y + 3.5} Q78 ${y} 74 ${y} Z" fill="${wood}" stroke="#5C4420" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="M22 ${y + 1.6} L74 ${y + 1.6}" stroke="#FFF4D6" stroke-opacity=".7" stroke-width="1.2" stroke-linecap="round"/>`;
    const winds = [];
    for (let y = 22; y < 76; y += 3.2) winds.push(`M29 ${y} L67 ${y + 4}`);
    return `<path d="${body}" fill="${c.linear('a', 'red', [0, 0, 1, 0], 0, 2)}"/>
      <g clip-path="url(#${c.id('w')})"><path d="${winds.join(' ')}" stroke="#8A0006" stroke-opacity=".45" stroke-width="1.1"/></g>
      ${flange(15)}${flange(71)}
      <path d="M67 52 C76 54 84 60 82 68 C80 74 72 72 76 80" fill="none" stroke="#E3120B" stroke-width="2.2" stroke-linecap="round"/>`;
  },
};
