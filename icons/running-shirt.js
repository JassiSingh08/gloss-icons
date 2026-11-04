const body = 'M31 12 L40 12 C41 21 44 26 48 26 C52 26 55 21 56 12 L65 12 L66 27 C70 32 73 37 73 46 L73 80 Q73 84 69 84 L27 84 Q23 84 23 80 L23 46 C23 37 26 32 30 27 Z';
module.exports = {
  id: 'running-shirt',
  name: 'Running Shirt',
  emoji: '🎽',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['running', 'marathon', 'race', 'vest', 'jog'],
  tone: 'sky',
  body,
  shine: [27, 44, -70],
  shineSize: [6, 2.2],
  draw(c) {
    c.def(`<clipPath id="${c.id('shirt')}"><path d="${body}"/></clipPath>`);
    return `<path d="${body}" fill="${c.linear('a', 'sky', [0, 0, 1, 1], 0, 2)}"/>
      <g clip-path="url(#${c.id('shirt')})">
        <path d="M28 10 L40 10 L80 70 L80 86 L72 86 Z" fill="${c.linear('sash', 'red', [0, 0, 1, 1], 0, 2)}"/>
        <path d="M40 10 L44 10 L82 66 L80 72 Z" fill="#FFFFFF" opacity=".9"/>
      </g>
      <path d="M40 12 C41 21 44 26 48 26 C52 26 55 21 56 12" fill="none" stroke="#0A3A6B" stroke-opacity=".45" stroke-width="2.4"/>
      <path d="M30 27 C26 32 23 37 23 46 M66 27 C70 32 73 37 73 46" fill="none" stroke="#0A3A6B" stroke-opacity=".35" stroke-width="2.4"/>`;
  },
};
