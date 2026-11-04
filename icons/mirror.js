const body = 'M48 9 C64 9 75 23 75 42 C75 61 64 75 48 75 C32 75 21 61 21 42 C21 23 32 9 48 9 Z';
const glass = 'M48 15 C60.5 15 69 27 69 42 C69 57 60.5 69 48 69 C35.5 69 27 57 27 42 C27 27 35.5 15 48 15 Z';
module.exports = {
  id: 'mirror',
  name: 'Mirror',
  emoji: '🪞',
  group: 'Objects',
  subgroup: 'household',
  tags: ['mirror', 'reflection', 'vanity', 'self', 'look'],
  tone: 'gold',
  body,
  shine: [29, 26, -55],
  shineSize: [6, 2.4],
  draw(c) {
    const frame = c.radial('a', 'gold', 0.3, 0.2);
    const pane = c.linear('g', 'sky', [0, 0, 1, 1], 0, 2);
    const foot = c.linear('f', 'gold', [0, 0, 0, 1], 1, 3);
    c.def(`<clipPath id="${c.id('m')}"><path d="${glass}"/></clipPath>`);
    return `<path d="M44 74 L52 74 L54 80 L42 80 Z" fill="${foot}"/>
      <path d="M32 80 Q32 78 35 78 L61 78 Q64 78 64 80 L64 82 Q64 84 61 84 L35 84 Q32 84 32 82 Z" fill="${foot}"/>
      <path d="${body}" fill="${frame}"/>
      <path d="${glass}" fill="${pane}"/>
      <g clip-path="url(#${c.id('m')})">
        <path d="M30 40 L52 14 L60 14 L34 48 Z M38 54 L66 22 L70 26 L42 58 Z" fill="#fff" opacity=".45"/>
      </g>
      <path d="${glass}" fill="none" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1.3"/>`;
  },
};
