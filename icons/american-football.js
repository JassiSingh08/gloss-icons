const { turn: xform, turnPt: at } = require('../src/parts/ball');

const T = { deg: -35, s: 1.12, x: 48, y: 52, ox: 48, oy: 50 };
const body = xform('M11 50 C19 35 33 30 48 30 C63 30 77 35 85 50 C77 65 63 70 48 70 C33 70 19 65 11 50 Z', T);

module.exports = {
  id: 'american-football',
  name: 'American Football',
  emoji: '🏈',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['football', 'nfl', 'touchdown', 'super bowl', 'sport'],
  tone: 'brown',
  body,
  shine: [...at([36, 35], T), -48],
  draw(c) {
    c.def(`<clipPath id="${c.id('ball')}"><path d="${body}"/></clipPath>`);
    const stripe = xform('M25 36.5 C28.5 45 28.5 55 25 63.5 M71 36.5 C67.5 45 67.5 55 71 63.5', T);
    const seam = xform('M35 46 L61 46', T);
    const laces = xform('M37 42 L37 50 M41.4 42 L41.4 50 M45.8 42 L45.8 50 M50.2 42 L50.2 50 M54.6 42 L54.6 50 M59 42 L59 50', T);
    return `<path d="${body}" fill="${c.radial('a', 'brown', 0.35, 0.25)}"/>
      <g clip-path="url(#${c.id('ball')})" fill="none" stroke-linecap="round">
        <path d="${stripe}" stroke="#FFF9EC" stroke-width="3.6"/>
        <path d="${xform('M11 50 C30 54 66 54 85 50', T)}" stroke="#331805" stroke-opacity=".35" stroke-width="1.2"/>
      </g>
      <path d="${seam}" stroke="#FFF9EC" stroke-width="2.4" stroke-linecap="round"/>
      <path d="${laces}" stroke="#FFF9EC" stroke-width="2.4" stroke-linecap="round"/>`;
  },
};
