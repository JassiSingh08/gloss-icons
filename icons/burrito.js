// Half wrapped in foil, the open end showing the filling: a burrito, not a tamale or a spring roll.
const d = require('../src/parts/dish');
const ANGLE = -38;
const AT = [47, 51];
const wrap = 'M-37 0 C-37 -10 -33 -16 -25 -16 L30 -16 C34 -16 37 -8 37 0 C37 8 34 16 30 16 L-25 16 C-33 16 -37 10 -37 0 Z';
module.exports = {
  id: 'burrito',
  name: 'Burrito',
  emoji: '🌯',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['burrito', 'wrap', 'mexican', 'lunch', 'takeaway'],
  tone: 'sand',
  body: d.place(wrap, ANGLE, AT),
  shine: [...d.placePt(8, -11, ANGLE, AT), ANGLE - 5],
  draw(c) {
    const tortilla = c.radial('a', 'sand', 0.45, 0.2);
    const foil = c.linear('foil', 'silver', [0, 0, 1, 1], 0, 2);
    const inner = c.radial('inner', 'brown', 0.4, 0.4);
    const spot = (x, y, rx) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${rx * 0.6}" fill="#B07A3A" opacity=".6"/>`;
    return `<path d="${d.place(wrap, ANGLE, AT)}" fill="${tortilla}"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        ${spot(6, -8, 2.4)}${spot(18, 6, 2)}${spot(-1, 9, 1.6)}${spot(12, -2, 1.4)}
        <path d="M-2 -16 L-25 -16 C-33 -16 -37 -10 -37 0 C-37 10 -33 16 -25 16 L-2 16 L1 12 L-3 8 L1 4 L-3 0 L1 -4 L-3 -8 L1 -12 Z" fill="${foil}"/>
        <path d="M-30 -10 L-24 -4 L-28 4 L-20 10 M-16 -14 L-12 -6 L-18 2 L-12 12 M-8 -12 L-6 -2" stroke="#8E93AD" stroke-width="1.1" stroke-linejoin="round" fill="none"/>
        <path d="M-28 -13 L-6 -13" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>
        <ellipse cx="30" cy="0" rx="7" ry="16" fill="#F4DCA6" stroke="#8A6A30" stroke-opacity=".6" stroke-width="1.1"/>
        <ellipse cx="30.5" cy="0" rx="5" ry="13" fill="${inner}"/>
        <circle cx="31" cy="-7" r="2.6" fill="#7FCB3A"/><circle cx="29" cy="1" r="2.2" fill="#E3120B"/><circle cx="32" cy="6" r="2.2" fill="#FFF4D6"/><circle cx="30" cy="-2" r="1.6" fill="#FFF4D6"/><circle cx="29.5" cy="9" r="1.8" fill="#4E2A10"/>
      </g>`;
  },
};
