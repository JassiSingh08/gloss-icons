const g = require('../src/parts/glass');
// Drawn upright around its middle and tipped; place() gives the outline the same turn.
const ANGLE = 25;
const AT = [48, 48];
const bar = 'M-14 -32 L14 -32 Q17 -32 17 -29 L17 29 Q17 32 14 32 L-14 32 Q-17 32 -17 29 L-17 -29 Q-17 -32 -14 -32 Z';
module.exports = {
  id: 'chocolate-bar',
  name: 'Chocolate Bar',
  emoji: '🍫',
  group: 'Food & Drink',
  subgroup: 'food-sweet',
  tags: ['chocolate', 'bar', 'sweet', 'snack', 'cocoa'],
  tone: 'brown',
  body: g.place(bar, ANGLE, AT),
  shine: [...g.placePt(-12, -26, ANGLE, AT), ANGLE - 70],
  shineSize: [5, 2.2],
  draw(c) {
    c.def(`<linearGradient id="${c.id('a')}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8A5530"/><stop offset="1" stop-color="#2E1405"/></linearGradient>`);
    c.def(`<linearGradient id="${c.id('sq')}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#B07A4E"/><stop offset="0.5" stop-color="#6E3A14"/><stop offset="1" stop-color="#3D1C06"/></linearGradient>`);
    const wrap = c.linear('wrap', 'purple', [0, 0, 1, 0], 0, 2);
    const foil = c.linear('foil', 'silver', [0, 0, 1, 1], 0, 2);
    const band = c.linear('band', 'gold', [0, 0, 1, 0], 0, 2);
    const sq = (x, y) => `<rect x="${x}" y="${y}" width="13" height="12" rx="1.5" fill="url(#${c.id('sq')})"/>
      <path d="M${x + 1.5} ${y + 10} L${x + 1.5} ${y + 1.5} L${x + 11} ${y + 1.5}" fill="none" stroke="#D9A57A" stroke-opacity=".7" stroke-width="1.2" stroke-linecap="round"/>`;
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        <path d="${bar}" fill="url(#${c.id('a')})"/>
        ${sq(-15, -30)}${sq(2, -30)}${sq(-15, -16)}${sq(2, -16)}
        <path d="M-17 2 L-17 -3 L-13 -6.5 L-9 -2.5 L-5 -6.5 L-1 -2.5 L3 -6.5 L7 -2.5 L11 -6.5 L15 -2.5 L17 -4.5 L17 2 Z" fill="${foil}"/>
        <path d="M-17 1 L17 1 L17 29 Q17 32 14 32 L-14 32 Q-17 32 -17 29 Z" fill="${wrap}"/>
        <path d="M-17 13 L17 13 L17 20 L-17 20 Z" fill="${band}"/>
        <path d="M-17 1 L17 1" stroke="#1A0040" stroke-opacity=".5" stroke-width="1.2"/>
        <path d="M-13.5 6 L-13.5 27" stroke="#fff" stroke-opacity=".45" stroke-width="1.6" stroke-linecap="round"/>
      </g>`;
  },
};
