const g = require('../src/parts/glass');
// A wedge with its point toward the viewer's left: the top and the cut face show.
const T = [14, 56];
const B = [83, 42];
const H = 26;
const body = 'M14 56 L56 30 C66 31 77 35 83 42 L83 66 Q83 68 81 68.4 L16 82 Q14 82.4 14 80 Z';
const band = (f0, f1) => `M${T[0]} ${T[1] + f0 * H} L${B[0]} ${B[1] + f0 * H} L${B[0]} ${B[1] + f1 * H} L${T[0]} ${T[1] + f1 * H} Z`;
module.exports = {
  id: 'shortcake',
  name: 'Shortcake',
  emoji: '🍰',
  group: 'Food & Drink',
  subgroup: 'food-sweet',
  tags: ['cake', 'slice', 'strawberry', 'dessert', 'treat'],
  tone: 'cream',
  body,
  shine: [26, 64, -12],
  shineSize: [5, 2],
  draw(c) {
    const sponge = c.linear('a', 'cream', [0, 0, 1, 0], 1, 2);
    const cream = c.linear('cream', 'white', [0, 0, 1, 0], 0, 2);
    const top = c.radial('top', 'white', 0.3, 0.2);
    const berry = c.radial('berry', 'red', 0.35, 0.25);
    const leaf = c.radial('leaf', 'green', 0.35, 0.25);
    // strawberry cross-sections along the middle layer
    const slice = (f) => {
      const x = T[0] + f * (B[0] - T[0]);
      const y = T[1] + f * (B[1] - T[1]) + 0.36 * H;
      return `<path d="M${x - 5} ${y + 1} C${x - 5} ${y - 4} ${x + 5} ${y - 6} ${x + 5} ${y - 1} C${x + 5} ${y + 3} ${x} ${y + 6} ${x - 5} ${y + 1} Z" fill="${berry}"/>
        <path d="M${x - 2.4} ${y} C${x - 1} ${y - 2} ${x + 2} ${y - 3} ${x + 2.4} ${y - 1.4}" fill="none" stroke="#FFC2B5" stroke-width="1.2"/>`;
    };
    return `<path d="${body}" fill="${sponge}"/>
      <path d="${band(0, 0.14)}" fill="${cream}"/>
      <path d="${band(0.24, 0.48)}" fill="${cream}"/>
      <path d="${band(0.6, 0.7)}" fill="${cream}"/>
      ${slice(0.2)}${slice(0.45)}${slice(0.7)}
      <path d="M14 56 L56 30 C66 31 77 35 83 42 Z" fill="${top}"/>
      <path d="M18 54 L52 33" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M44 45 C40 45 39 40 43 38.5 C42 34 48 32 50 35 C53 32 59 34 57 39 C61 40 60 45 56 45 Z" fill="${top}" ${g.edge('#8C83AD', 1, 0.5)}/>
      <path d="M50 37 C42 37 40 30 41 24 C42 18 46 15 50 15 C54 15 58 18 59 24 C60 30 58 37 50 37 Z" fill="${berry}" ${g.edge('#3D0003', 1.1, 0.55)}/>
      <g fill="#FFE07A" opacity=".85"><ellipse cx="46" cy="23" rx=".7" ry="1.1"/><ellipse cx="53" cy="22" rx=".7" ry="1.1"/><ellipse cx="45" cy="30" rx=".7" ry="1.1"/><ellipse cx="51" cy="29" rx=".7" ry="1.1"/><ellipse cx="56" cy="29" rx=".7" ry="1.1"/></g>
      <path d="M50 16 C46 12 42 13 41 15 C44 15 46 16 47 17 C45 18 44 20 45 21 C47 19 49 18 50 18 C51 18 53 19 55 21 C56 20 55 18 53 17 C54 16 56 15 59 15 C58 13 54 12 50 16 Z" fill="${leaf}"/>
      <ellipse cx="45" cy="21.5" rx="1.6" ry="2.6" fill="#fff" opacity=".7" transform="rotate(20 45 21.5)"/>`;
  },
};
