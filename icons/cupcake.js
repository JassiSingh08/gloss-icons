const g = require('../src/parts/glass');
const frost = 'C17 57 16 48 23 45 C20 38 26 32 33 33 C33 25 41 22 48 23 C55 22 63 25 63 33 C70 32 76 38 73 45 C80 48 79 57 71 58';
const body = `M33 82 L25 58 ${frost} L63.5 82 Q63 84 61 84 L35 84 Q33.5 84 33 82 Z`;
module.exports = {
  id: 'cupcake',
  name: 'Cupcake',
  emoji: '🧁',
  group: 'Food & Drink',
  subgroup: 'food-sweet',
  tags: ['cupcake', 'muffin', 'frosting', 'baking', 'treat'],
  tone: 'pink',
  body,
  shine: [25, 48, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const wrap = c.linear('wrap', 'teal', [0, 0, 1, 0], 0, 2);
    const icing = c.radial('a', 'pink', 0.35, 0.2);
    const cherry = c.radial('cherry', 'red', 0.35, 0.3);
    const pleats = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
      const xt = 25 + (i * 46) / 7;
      const xb = 33 + (i * 30) / 7;
      return `M${g.n(xt)} 58 L${g.n(xb)} 84`;
    }).join(' ');
    const sp = [[30, 50, 30, '#FFF3A6'], [40, 46, -40, '#8CD8FF'], [56, 46, 60, '#fff'], [66, 52, -20, '#A6F07A'], [48, 52, 10, '#FFF3A6'], [38, 36, 70, '#fff'], [57, 34, -30, '#A6F07A'], [24, 53, -60, '#8CD8FF'], [70, 44, 45, '#FFF3A6']];
    const sprinkles = sp.map(([x, y, a, col]) => {
      const r = (a * Math.PI) / 180;
      const dx = g.n(Math.cos(r) * 1.7);
      const dy = g.n(Math.sin(r) * 1.7);
      return `<path d="M${x - dx} ${y - dy} L${x + dx} ${y + dy}" stroke="${col}"/>`;
    }).join('');
    return `<path d="M25 57 L71 57 L63.5 82 Q63 84 61 84 L35 84 Q33.5 84 33 82 Z" fill="${wrap}"/>
      <path d="${pleats}" stroke="#003A33" stroke-opacity=".35" stroke-width="1.3"/>
      <path d="M25 58 ${frost} C60 61.5 36 61.5 25 58 Z" fill="${icing}"/>
      <g fill="none" stroke="#9E0030" stroke-opacity=".45" stroke-width="1.6" stroke-linecap="round"><path d="M23 45 C32 50 64 50 73 45"/><path d="M33 33 C38 38 58 38 63 33"/></g>
      <g stroke-width="2.1" stroke-linecap="round">${sprinkles}</g>
      <path d="M49 18 C50 13 53 10 57 8" fill="none" stroke="#2FB85A" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="48" cy="20" r="5.6" fill="${cherry}" ${g.edge('#3D0003', 1.1, 0.55)}/>
      <ellipse cx="46.2" cy="18" rx="1.6" ry="1" fill="#fff" opacity=".8" transform="rotate(-35 46.2 18)"/>`;
  },
};
