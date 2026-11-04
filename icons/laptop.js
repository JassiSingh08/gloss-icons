const d = require('../src/parts/device');

const body = 'M24 14 L72 14 Q76 14 76 18 L76 60 L79 60 L84.5 73 Q86 78 81 78 L15 78 Q10 78 11.5 73 L17 60 L20 60 L20 18 Q20 14 24 14 Z';

module.exports = {
  id: 'laptop',
  name: 'Laptop',
  emoji: '💻',
  group: 'Objects',
  subgroup: 'computer',
  tags: ['laptop', 'computer', 'work', 'remote', 'online', 'notebook'],
  tone: 'silver',
  body,
  shine: [23, 22, -80],
  shineSize: [5, 1.8],
  draw(c) {
    const lid = c.linear('a', 'silver', [0, 0, 1, 1], 0, 2);
    const deck = c.linear('deck', 'silver', [0, 0, 0, 1], 0, 1);
    const front = c.linear('front', 'silver', [0, 0, 1, 0], 1, 3);
    const scr = d.glass(c);
    c.def(`<clipPath id="${c.id('s')}"><path d="${d.rr(24, 18, 48, 38, 2)}"/></clipPath>`);
    return `<path d="${body}" fill="${lid}"/>
      <path d="${d.rr(24, 18, 48, 38, 2)}" fill="${scr}"/>
      <g clip-path="url(#${c.id('s')})">
        <path d="M24 46 C36 38 48 50 72 38 L72 56 L24 56 Z" fill="#7A1FE0" opacity=".45"/>
        <path d="M24 52 C40 44 56 54 72 46 L72 56 L24 56 Z" fill="#E21FC4" opacity=".35"/>
      </g>
      <path d="M30 26 L48 26 M30 31.5 L42 31.5" stroke="#9AA8FF" stroke-opacity=".5" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="48" cy="16" r=".9" fill="#3A3E52"/>
      <path d="M17 60 L79 60 L83.5 71 L12.5 71 Z" fill="${deck}"/>
      <path d="M22 62 L74 62 L77 68 L19 68 Z" fill="#3A3E52" opacity=".5"/>
      <path d="M12.5 71 L83.5 71 L84.5 73 Q86 78 81 78 L15 78 Q10 78 11.5 73 Z" fill="${front}"/>
      <path d="M41 71 L55 71 L54 73 L42 73 Z" fill="#3A3E52" opacity=".5"/>`;
  },
};
