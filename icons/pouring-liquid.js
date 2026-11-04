const g = require('../src/parts/glass');
// A tumbler drawn upright around the middle of its base, then tipped until it pours.
const ANGLE = -122;
const AT = [77, 24];
const cup = 'M-11 0 Q-14 0 -14.3 -3 L-17 -44 L17 -44 L14.3 -3 Q14 0 11 0 Z';
module.exports = {
  id: 'pouring-liquid',
  name: 'Pouring Liquid',
  emoji: '🫗',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['pour', 'spill', 'empty', 'glass', 'liquid'],
  tone: 'sky',
  body: g.place(cup, ANGLE, AT),
  shine: [...g.placePt(-12, -28, ANGLE, AT), ANGLE + 90],
  shineSize: [5, 1.8],
  draw(c) {
    const water = c.linear('water', 'blue', [0, 0, 1, 1], 0, 1);
    const pool = c.radial('pool', 'blue', 0.4, 0.3);
    const lip = g.placePt(-17, -44, ANGLE, AT);
    return `<path d="${g.ellipse(33, 79.5, 20, 4.6)}" fill="${pool}" ${g.edge('#001E4D', 1.2, 0.5)}/>
      <path d="M${lip[0] + 3} ${lip[1] - 4} C${lip[0] - 6} ${lip[1] + 4} 38 56 38 80 L29 80 C29 58 ${lip[0] - 14} ${lip[1] + 6} ${lip[0] - 4} ${lip[1] - 4} Z" fill="${water}"/>
      <path d="M34.5 54 C33.8 63 33.6 70 33.8 76" stroke="#fff" stroke-opacity=".7" stroke-width="1.3" stroke-linecap="round" fill="none"/>
      <path d="M20 77 C24 75.5 30 75 36 75.4" stroke="#fff" stroke-opacity=".7" stroke-width="1.3" stroke-linecap="round" fill="none"/>
      <circle cx="50" cy="74" r="1.8" fill="${water}"/><circle cx="15.5" cy="73" r="1.4" fill="${water}"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        <path d="M-16.8 -44 L-15.4 -24 C-6 -25 4 -32 8 -44 Z" fill="${water}"/>
        ${g.pane(c, cup)}
        ${g.solid('M-14.5 -6 L14.5 -6 L14.3 -3 Q14 0 11 0 L-11 0 Q-14 0 -14.3 -3 Z', 0.6)}
        <path d="M-17 -44 L17 -44" stroke="#fff" stroke-opacity=".8" stroke-width="1.4"/>
        ${g.gleam(['M-11.5 -38 L-10 -10'], 1.7)}
      </g>`;
  },
};
