const d = require('../src/parts/device');

const body = d.rr(12, 11, 72, 54, 6);

module.exports = {
  id: 'desktop-computer',
  name: 'Desktop Computer',
  emoji: '🖥️',
  group: 'Objects',
  subgroup: 'computer',
  tags: ['computer', 'desktop', 'monitor', 'screen', 'work', 'office'],
  tone: 'silver',
  body,
  shine: [15.5, 22, -80],
  shineSize: [5, 1.8],
  draw(c) {
    const frame = c.linear('a', 'silver', [0, 0, 1, 1], 0, 2);
    const neck = c.linear('neck', 'silver', [0, 0, 1, 0], 1, 3);
    const foot = c.linear('foot', 'silver', [0, 0, 0, 1], 0, 2);
    const scr = d.glass(c);
    const s = d.rr(17, 16, 62, 44, 2.5);
    c.def(`<clipPath id="${c.id('s')}"><path d="${s}"/></clipPath>`);
    return `<path d="M41 64 L55 64 L58 77 L38 77 Z" fill="${neck}"/>
      <path d="M28 80 Q28 76 32 76 L64 76 Q68 76 68 80 Q68 83 64 83 L32 83 Q28 83 28 80 Z" fill="${foot}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1"/>
      <path d="${body}" fill="${frame}"/>
      <path d="${s}" fill="${scr}"/>
      <g clip-path="url(#${c.id('s')})">
        <path d="M17 46 C32 36 50 52 79 36 L79 60 L17 60 Z" fill="#7A1FE0" opacity=".45"/>
        <path d="M17 54 C38 46 58 58 79 48 L79 60 L17 60 Z" fill="#0C8CF0" opacity=".35"/>
        <rect x="17" y="16" width="62" height="4" fill="#9AA8FF" opacity=".18"/>
      </g>
      <path d="M24 28 L44 28 M24 34 L37 34" stroke="#9AA8FF" stroke-opacity=".5" stroke-width="2.6" stroke-linecap="round"/>`;
  },
};
