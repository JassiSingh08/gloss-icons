const g = require('../src/parts/glass');
// Drawn upright with the bottom of the handle at (0,0), then splayed into a V.
const fork = 'M-3.8 -3 Q-3.8 1 0 1 Q3.8 1 3.8 -3 L3 -40 C3 -43 8.4 -45 8.4 -50.6 L8.4 -70 Q8.4 -72 6.9 -72 Q5.4 -72 5.4 -70 L5.4 -55 L3.6 -55 L3.6 -70 Q3.6 -72 2.1 -72 Q0.6 -72 0.6 -70 L0.6 -55 L-0.6 -55 L-0.6 -70 Q-0.6 -72 -2.1 -72 Q-3.6 -72 -3.6 -70 L-3.6 -55 L-5.4 -55 L-5.4 -70 Q-5.4 -72 -6.9 -72 Q-8.4 -72 -8.4 -70 L-8.4 -50.6 C-8.4 -45 -3 -43 -3 -40 Z';
const knife = 'M-3.8 -3 Q-3.8 1 0 1 Q3.8 1 3.8 -3 L3.6 -36 L5 -37.5 C7 -52 6 -64 -0.6 -73 Q-3.6 -75 -3.6 -71.6 L-3.6 -37.5 L-3.8 -36 Z';
const F = [37, 83, -13];
const N = [59, 83, 13];
module.exports = {
  id: 'fork-and-knife',
  name: 'Fork And Knife',
  emoji: '🍴',
  group: 'Food & Drink',
  subgroup: 'dishware',
  tags: ['cutlery', 'restaurant', 'dinner', 'eat', 'food'],
  tone: 'silver',
  body: [g.place(fork, F[2], [F[0], F[1]]), g.place(knife, N[2], [N[0], N[1]])],
  shine: [...g.placePt(-1.5, -26, F[2], [F[0], F[1]]), F[2] - 90],
  shineSize: [6, 1.4],
  draw(c) {
    const steel = c.linear('a', 'silver', [0, 0, 1, 0], 0, 2);
    const one = ([x, y, a], d, extra) => `<g transform="translate(${x} ${y}) rotate(${a})"><path d="${d}" fill="${steel}"/>${extra}</g>`;
    return `${one(F, fork, '<path d="M-1.6 -6 L-1.4 -36" stroke="#fff" stroke-opacity=".8" stroke-width="1.3" stroke-linecap="round"/>')}
      ${one(N, knife, '<path d="M-1.6 -6 L-1.6 -34 M-1.6 -42 L-1.6 -66" stroke="#fff" stroke-opacity=".8" stroke-width="1.3" stroke-linecap="round"/><path d="M-3.6 -37 L3.6 -37" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1.2"/>')}`;
  },
};
