const g = require('../src/parts/glass');
// Two mugs drawn upright around the middle of their bases and tipped toward each other, like cheers.
const mug = 'M-13 -4 L-13 -44 C-17 -46 -16 -53 -11 -53 C-10 -59 -2 -60 1 -56 C4 -60 12 -59 12 -53 C17 -53 17 -46 13 -44 L13 -4 Q13 0 9 0 L-9 0 Q-13 0 -13 -4 Z';
const glassD = 'M-13 -44 L13 -44 L13 -4 Q13 0 9 0 L-9 0 Q-13 0 -13 -4 Z';
const foamD = 'M-13 -44 C-17 -46 -16 -53 -11 -53 C-10 -59 -2 -60 1 -56 C4 -60 12 -59 12 -53 C17 -53 17 -46 13 -44 L13 -42 C11 -40 9 -42 8 -38 C7 -35 4 -35 4 -38 C4 -41 1 -41 -2 -40 C-5 -39 -5 -35 -8 -35 C-11 -35 -10 -40 -13 -40 Z';
const L = [31, 84, 3];
const R = [65, 84, -3];
const S = 0.9;
module.exports = {
  id: 'clinking-beer-mugs',
  name: 'Clinking Beer Mugs',
  emoji: '🍻',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['beer', 'cheers', 'pub', 'friends', 'toast'],
  tone: 'gold',
  body: [g.place(mug, L[2], [L[0], L[1]], S), g.place(mug, R[2], [R[0], R[1]], S)],
  shine: [...g.placePt(-9, -30, L[2], [L[0], L[1]], S), -85],
  shineSize: [5, 1.8],
  draw(c) {
    const beer = c.linear('beer', 'gold', [0, 0, 1, 0], 1, 2);
    const foam = c.radial('foam', 'cream', 0.35, 0.25);
    const one = ([x, y, deg], flip) => `<g transform="translate(${x} ${y}) rotate(${deg}) scale(${flip * S} ${S})">
        <path d="M12 -36 C25 -36 25 -12 12 -12" fill="none" stroke="#0A3A6B" stroke-opacity=".5" stroke-width="7.6" stroke-linecap="round"/>
        <path d="M12 -36 C25 -36 25 -12 12 -12" fill="none" stroke="#C9ECFF" stroke-opacity=".75" stroke-width="5.4" stroke-linecap="round"/>
        ${g.pane(c, glassD)}
        <path d="M-11.5 -43 L11.5 -43 L11.5 -5 L-11.5 -5 Z" fill="${beer}"/>
        <g fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2.4" stroke-linecap="round"><path d="M-6 -30 L-6 -9"/><path d="M2 -30 L2 -9"/></g>
        ${g.bubbles([[-1, -14, 1], [6, -20, 1.2], [-4, -24, 0.9]])}
        <path d="${foamD}" fill="${foam}"/>
      </g>`;
    return `${one(L, -1)}${one(R, 1)}
      <g transform="translate(0 9)"><path d="M44 21 C42 17 45 13 48 15 C50 11 55 13 53 17 C56 19 53 23 50 21 C48 24 45 24 44 21 Z" fill="#FFFBEA"/>
      <circle cx="41" cy="12" r="1.5" fill="#FFFBEA"/><circle cx="57" cy="11" r="1.3" fill="#FFFBEA"/><circle cx="49" cy="8" r="1.1" fill="#FFFBEA"/></g>
      ${g.spark(35, 22, 3)}${g.spark(62, 20, 3.4)}`;
  },
};
