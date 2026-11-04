const g = require('../src/parts/garment');

const body = 'M32.5 11 L37 11 Q40 26 48 28 Q56 26 59 11 L63.5 11 Q67 27 67.5 39 Q68 49 65.5 56 Q71 64 78 70 Q66 73 57 80 Q52.5 84 48 84 Q43.5 84 39 80 Q30 73 18 70 Q25 64 30.5 56 Q28 49 28.5 39 Q29 27 32.5 11 Z';

module.exports = {
  id: 'one-piece-swimsuit',
  name: 'One-Piece Swimsuit',
  emoji: '🩱',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['swimsuit', 'swim', 'beach', 'pool', 'summer'],
  tone: 'purple',
  body,
  shine: [34, 30, -80],
  shineSize: [5.5, 1.8],
  draw(c) {
    const cloth = c.radial('a', 'purple', 0.3, 0.2);
    const stripe = c.linear('stripe', 'pink', [0, 0, 1, 1], 0, 1);
    const p = c.ramp('purple');
    c.def(`<clipPath id="${c.id('cl')}"><path d="${body}"/></clipPath>`);
    return `<path d="${body}" fill="${cloth}"/>
      <g clip-path="url(#${c.id('cl')})"><path d="M20 66 L74 34 L76 42 L22 74 Z" fill="${stripe}"/><path d="M20 76 L76 45 L77 48.5 L21 79.5 Z" fill="#FFF3A6" opacity=".9"/></g>
      ${g.fold('M37 31 Q48 37 59 31', p[3], 0.45, 1.3)}
      ${g.fold('M30 45 Q34 52 31 58 M66 45 Q62 52 65 58', p[0], 0.4, 1.2)}`;
  },
};
