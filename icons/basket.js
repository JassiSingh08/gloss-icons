const body = 'M15 34 L81 34 Q85 34 84.5 38 L77 80 Q76.3 84 72 84 L24 84 Q19.7 84 19 80 L11.5 38 Q11 34 15 34 Z';
module.exports = {
  id: 'basket',
  name: 'Basket',
  emoji: '🧺',
  group: 'Objects',
  subgroup: 'household',
  tags: ['basket', 'laundry', 'picnic', 'wicker', 'chores'],
  tone: 'sand',
  body,
  shine: [20, 40, -15],
  shineSize: [5, 2],
  draw(c) {
    const wicker = c.linear('a', 'sand', [0, 0, 1, 1], 0, 2);
    const rim = c.linear('r', 'brown', [0, 0, 0, 1], 0, 1);
    c.def(`<clipPath id="${c.id('b')}"><path d="${body}"/></clipPath>`);
    let weave = '';
    for (let row = 0; row < 5; row++) {
      const y = 46 + row * 7.6;
      for (let k = 0; k < 9; k++) {
        const x = 12 + k * 8.5 + (row % 2 ? 4.25 : 0);
        weave += `M${x} ${y + 1.5} Q${x + 3.4} ${y - 0.6} ${x + 6.8} ${y + 1.5} L${x + 6.8} ${y + 5} Q${x + 3.4} ${y + 2.9} ${x} ${y + 5} Z `;
      }
    }
    return `<path d="${body}" fill="${wicker}"/>
      <g clip-path="url(#${c.id('b')})"><path d="${weave}" fill="#5C4420" opacity=".28"/></g>
      <path d="M13 34 L83 34 Q86 34 85.5 37.5 L84.6 43 L11.4 43 L10.5 37.5 Q10 34 13 34 Z" fill="${rim}"/>
      <path d="M14 37 L82 37" stroke="#FFF4D6" stroke-opacity=".6" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M22 38.5 Q22 36 25 36 L31 36 Q34 36 34 38.5 Z M62 38.5 Q62 36 65 36 L71 36 Q74 36 74 38.5 Z" fill="#331805" opacity=".7"/>`;
  },
};
