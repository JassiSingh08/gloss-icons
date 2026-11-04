const g = require('../src/parts/glass');
// Drawn upright around the middle of its base and tipped a little; place() gives the outline the same turn.
const ANGLE = 10;
const AT = [43, 83];
const bottle = 'M-12 0 Q-15 0 -15 -3 L-15 -46 L-17 -47 L-17 -56 Q-17 -58 -15 -58 L-9 -58 C-8 -61 -5 -62 -5 -64 C-7.5 -66 -7.5 -74 0 -74 C7.5 -74 7.5 -66 5 -64 C5 -62 8 -61 9 -58 L15 -58 Q17 -58 17 -56 L17 -47 L15 -46 L15 -3 Q15 0 12 0 Z';
module.exports = {
  id: 'baby-bottle',
  name: 'Baby Bottle',
  emoji: '🍼',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['baby', 'bottle', 'milk', 'feeding', 'newborn'],
  tone: 'sky',
  body: g.place(bottle, ANGLE, AT),
  shine: [...g.placePt(-10, -40, ANGLE, AT), ANGLE - 80],
  shineSize: [5, 2],
  draw(c) {
    const milk = c.radial('milk', 'white', 0.35, 0.2);
    const collar = c.linear('collar', 'pink', [0, 0, 1, 0], 0, 2);
    const teat = c.radial('teat', 'amber', 0.35, 0.25);
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        <path d="M-5 -64 C-7.5 -66 -7.5 -74 0 -74 C7.5 -74 7.5 -66 5 -64 C5 -62 8 -61 9 -58 L-9 -58 C-8 -61 -5 -62 -5 -64 Z" fill="${teat}" fill-opacity=".9"/>
        <path d="M-15 -34 C-8 -32.5 8 -32.5 15 -34 L15 -3 Q15 0 12 0 L-12 0 Q-15 0 -15 -3 Z" fill="${milk}"/>
        ${g.pane(c, 'M-15 -46 L15 -46 L15 -3 Q15 0 12 0 L-12 0 Q-15 0 -15 -3 Z', 0.4)}
        <path d="M-15 -34 C-8 -32.5 8 -32.5 15 -34" fill="none" stroke="#fff" stroke-width="1.2"/>
        <path d="M-17 -56 Q-17 -58 -15 -58 L15 -58 Q17 -58 17 -56 L17 -47 L15 -46 L-15 -46 L-17 -47 Z" fill="${collar}"/>
        <path d="M-17 -52 L17 -52" stroke="#9E0030" stroke-opacity=".4" stroke-width="1"/>
        <g stroke="#1F7FD1" stroke-opacity=".8" stroke-width="1.4" stroke-linecap="round"><path d="M7 -40 L13 -40 M9 -32 L13 -32 M7 -24 L13 -24 M9 -16 L13 -16 M7 -8 L13 -8"/></g>
        ${g.gleam(['M-10.5 -42 L-10.5 -6'], 1.8, 0.75)}
        <ellipse cx="-2.5" cy="-69" rx="1.3" ry="2.2" fill="#fff" opacity=".7"/>
      </g>`;
  },
};
