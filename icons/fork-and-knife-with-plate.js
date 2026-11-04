const g = require('../src/parts/glass');
const body = g.ellipse(48, 57, 26, 25);
// Fork and knife drawn upright, bottom of the handle at (0,0).
const tines = [-4.2, -1.4, 1.4, 4.2];
const fork = `M-2.6 -2 Q-2.6 1 0 1 Q2.6 1 2.6 -2 L2 -36 C2 -38 5.6 -40 5.6 -44 L5.6 -60 Q5.6 -61.4 4.6 -61.4 Q3.6 -61.4 3.6 -60 L3.6 -48 L2.4 -48 L2.4 -60 Q2.4 -61.4 1.4 -61.4 Q0.4 -61.4 0.4 -60 L0.4 -48 L-0.4 -48 L-0.4 -60 Q-0.4 -61.4 -1.4 -61.4 Q-2.4 -61.4 -2.4 -60 L-2.4 -48 L-3.6 -48 L-3.6 -60 Q-3.6 -61.4 -4.6 -61.4 Q-5.6 -61.4 -5.6 -60 L-5.6 -44 C-5.6 -40 -2 -38 -2 -36 Z`;
const knife = 'M-2.6 -2 Q-2.6 1 0 1 Q2.6 1 2.6 -2 L2.4 -30 L3.4 -31 C4.6 -44 4 -54 -0.6 -62 Q-2.4 -63.4 -2.4 -61 L-2.4 -31 L-2.6 -30 Z';
module.exports = {
  id: 'fork-and-knife-with-plate',
  name: 'Fork And Knife With Plate',
  emoji: '🍽️',
  group: 'Food & Drink',
  subgroup: 'dishware',
  tags: ['dinner', 'plate', 'restaurant', 'meal', 'cutlery'],
  tone: 'white',
  body,
  shine: [32, 41, -45],
  draw(c) {
    const plate = c.radial('a', 'white', 0.35, 0.25);
    const well = c.radial('well', 'white', 0.65, 0.75);
    const steel = c.linear('steel', 'silver', [0, 0, 1, 0], 0, 2);
    const ink = '#3A3E52';
    void tines;
    return `<g transform="translate(15 83)"><path d="${fork}" fill="${steel}" ${g.edge(ink, 1, 0.55)}/></g>
      <g transform="translate(81 83)"><path d="${knife}" fill="${steel}" ${g.edge(ink, 1, 0.55)}/></g>
      <path d="${body}" fill="${plate}"/>
      <path d="${g.ellipse(48, 57.5, 18, 17.2)}" fill="${well}" stroke="#D8D2EE" stroke-width="1.2"/>
      <path d="M33 47 C36 42 41 39.5 46 39" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>`;
  },
};
