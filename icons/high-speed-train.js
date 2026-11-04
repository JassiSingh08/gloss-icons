const v = require('../src/parts/vehicle');
const body = 'M11 72 Q8 72 8 68 L8 37 Q8 30 15 30 L52 30 C66 30 74 39 80 50 Q86 60 86 65 Q86 72 80 72 Z';
module.exports = {
  id: 'high-speed-train',
  name: 'High-Speed Train',
  emoji: '🚄',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['fast', 'rail', 'express', 'intercity', 'travel'],
  tone: 'silver',
  body,
  shine: [14, 35, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'silver', [0, 0, 0.3, 1], 0, 2);
    const red = c.linear('red', 'red', [0, 0, 1, 0], 1, 2);
    const s = c.ramp('silver');
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    const windows = [13, 23, 33, 43].map((x) => v.win(c, x, 38, 7.5, 9, 1.8, 'dark')).join('');
    return `<path d="${body}" fill="${paint}"/>
      <g clip-path="url(#${c.id('k')})">
        <path d="M0 54 L60 54 C70 54 78 56 90 62 L90 68 C78 62 70 60 60 60 L0 60 Z" fill="${red}"/>
        <rect x="0" y="66" width="96" height="8" fill="#3A3E52" opacity=".7"/>
      </g>
      ${windows}
      <path d="M56 35 C64 36 70 40 75 47 L58 47 Q56 47 56 45 Z" fill="${v.glass(c, 'dark')}"/>
      <path d="M53 31 L53 65" stroke="${s[3]}" stroke-opacity=".35" stroke-width="1.2"/>
      ${v.lamp(81, 63, 2.6, 1.8)}
      ${v.rail(5, 91)}
      ${v.bogie(c, 23, 79)}${v.bogie(c, 69, 79)}`;
  },
};
