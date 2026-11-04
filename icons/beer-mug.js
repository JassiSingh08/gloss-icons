const g = require('../src/parts/glass');
const body = 'M20 34 C15 32 14 25 19 22 C19 16 26 13 31 16 C34 11 42 10 46 14 C50 10 58 11 60 16 C66 15 70 21 67 26 C69 30 67 33 64 34 L64 78 Q64 84 58 84 L26 84 Q20 84 20 78 Z';
module.exports = {
  id: 'beer-mug',
  name: 'Beer Mug',
  emoji: '🍺',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['beer', 'pint', 'pub', 'cheers', 'drinks'],
  tone: 'gold',
  body,
  shine: [25, 46, -80],
  shineSize: [6, 2],
  draw(c) {
    const beer = c.linear('beer', 'gold', [0, 0, 1, 0], 1, 2);
    const foam = c.radial('foam', 'cream', 0.35, 0.25);
    return `<g fill="none" stroke-linecap="round">
        <path d="M63 40 C84 38 84 70 63 70" stroke="#0A3A6B" stroke-opacity=".5" stroke-width="9.6"/>
        <path d="M63 40 C84 38 84 70 63 70" stroke="#C9ECFF" stroke-opacity=".75" stroke-width="7"/>
        <path d="M66 43 C77 43 78 62 69 66" stroke="#fff" stroke-opacity=".6" stroke-width="1.6"/>
      </g>
      ${g.pane(c, 'M20 34 L64 34 L64 78 Q64 84 58 84 L26 84 Q20 84 20 78 Z')}
      <path d="M22 36 L62 36 L62 75 L22 75 Z" fill="${beer}"/>
      ${g.solid('M20 76 L64 76 L64 78 Q64 84 58 84 L26 84 Q20 84 20 78 Z', 0.45)}
      <g fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="3" stroke-linecap="round"><path d="M31 42 L31 68"/><path d="M42 42 L42 68"/><path d="M53 42 L53 68"/></g>
      ${g.bubbles([[36, 60, 1.3], [47, 66, 1], [57, 55, 1.4], [38, 48, 0.9], [50, 51, 1.1]])}
      <path d="M20 34 C15 32 14 25 19 22 C19 16 26 13 31 16 C34 11 42 10 46 14 C50 10 58 11 60 16 C66 15 70 21 67 26 C69 30 67 33 64 34 L64 36 C62 38 60 37 59 40 C58 44 54 44 54 40 C54 37 50 37 47 38 C44 39 44 46 40 46 C36 46 37 39 33 38 C29 37 28 41 25 40 C22 39 22 36 20 36 Z" fill="${foam}"/>
      <path d="M22 22 C24 18 28 17 31 18.5" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>`;
  },
};
