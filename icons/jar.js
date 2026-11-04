const g = require('../src/parts/glass');
const body = 'M30 27 L66 27 L66 33 C74 35 77 41 77 47 L77 76 Q77 84 69 84 L27 84 Q19 84 19 76 L19 47 C19 41 22 35 30 33 Z';
module.exports = {
  id: 'jar',
  name: 'Jar',
  emoji: '🫙',
  group: 'Food & Drink',
  subgroup: 'dishware',
  tags: ['jar', 'mason jar', 'empty', 'storage', 'pantry'],
  tone: 'sky',
  body,
  shine: [24, 48, -85],
  shineSize: [6, 2],
  draw(c) {
    const lid = c.linear('lid', 'gold', [0, 0, 1, 0], 0, 2);
    return `${g.pane(c, body, 0.45)}
      ${g.solid('M19 74 L77 74 L77 76 Q77 84 69 84 L27 84 Q19 84 19 76 Z', 0.5)}
      <path d="M30 33 C38 35 58 35 66 33" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.3"/>
      <path d="${g.cylinder(48, 18, 28, 19.5, 3.4)}" fill="${lid}" ${g.edge('#5E3A00', 1.2, 0.55)}/>
      <path d="${g.ellipse(48, 18, 19.5, 3.4)}" fill="#FFF3A6"/>
      <g stroke="#C98500" stroke-opacity=".6" stroke-width="1.2"><path d="M33 22 L33 30 M39 22.6 L39 31 M45 23 L45 31.4 M51 23 L51 31.4 M57 22.6 L57 31 M63 22 L63 30"/></g>
      ${g.gleam(['M24 46 L24 72', 'M29 42 L29 50', 'M72 50 L72 60'], 2, 0.7)}`;
  },
};
