const g = require('../src/parts/glass');
const swirl = 'C22 55.5 19.5 47 25.5 44 C21.5 40 25 33.5 31 33.5 C29 27.5 34.5 22.5 41 23 C42.5 17.5 48 14.5 55 11.5 C53.5 15.5 55.5 19 58.5 22.5 C64.5 24 67 29 64.5 33.5 C71 34 74.5 41 70.5 44 C76.5 47 74 55.5 65.5 56';
const body = `M47 82.5 L30.5 56 ${swirl} L49 82.5 Q48 84.5 47 82.5 Z`;
module.exports = {
  id: 'soft-ice-cream',
  name: 'Soft Ice Cream',
  emoji: '🍦',
  group: 'Food & Drink',
  subgroup: 'food-sweet',
  tags: ['ice cream', 'soft serve', 'cone', 'summer', 'dessert'],
  tone: 'cream',
  body,
  shine: [29, 41, -30],
  shineSize: [5, 2.2],
  draw(c) {
    const cone = c.linear('cone', 'amber', [0, 0, 1, 0], 0, 2);
    const cream = c.radial('a', 'cream', 0.35, 0.2);
    c.def(`<clipPath id="${c.id('cc')}"><path d="M30.5 56 L65.5 56 L48 84 Z"/></clipPath>`);
    const b = c.ramp('amber');
    return `<path d="M30.5 56 L65.5 56 L49 82.5 Q48 84.5 47 82.5 Z" fill="${cone}"/>
      <g clip-path="url(#${c.id('cc')})" stroke="${b[2]}" stroke-opacity=".6" stroke-width="1.3" fill="none">
        <path d="M30 62 L52 84 M34 56 L60 82 M44 56 L66 78 M54 56 L70 72 M66 62 L44 84 M62 56 L36 82 M52 56 L30 78 M42 56 L26 72"/>
      </g>
      <path d="M30.5 56 ${swirl} C56 59 40 59 30.5 56 Z" fill="${cream}"/>
      <g fill="none" stroke="#E0B472" stroke-width="1.6" stroke-linecap="round">
        <path d="M25.5 44 C34 48.5 58 48.5 70.5 44"/><path d="M31 33.5 C39 37.5 56 37.5 64.5 33.5"/><path d="M41 23 C46 26 54 25.5 58.5 22.5"/>
      </g>
      ${g.gleam(['M28 51 C32 53 38 54 44 54', 'M33 41 C37 43 42 44 47 44', 'M42 30 C45 31.5 48 32 51 32'], 1.5, 0.75)}`;
  },
};
