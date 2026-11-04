const v = require('../src/parts/vehicle');
const DEG = -17;
const AT = [50, 56];
const P = (d) => v.place(d, DEG, AT);
const car = v.rr(-28, -26, 54, 32, [7, 7, 3, 3]);
const body = P(car);
module.exports = {
  id: 'mountain-railway',
  name: 'Mountain Railway',
  emoji: '🚞',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['alps', 'cog railway', 'scenic', 'hiking', 'mountains'],
  tone: 'red',
  body,
  shine: (() => { const [x, y] = v.point(-22, -20, DEG, AT); return [x, y, DEG - 30]; })(),
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'red', [0, 0, 0.3, 1], 0, 2);
    const rock = c.linear('rock', 'slate', [0, 0, 1, 1], 0, 2);
    const grass = c.linear('grass', 'green', [0, 0, 0, 1], 1, 3);
    const teeth = Array.from({ length: 11 }, (_, i) => `M${-41 + i * 8} 15 L${-39 + i * 8} 12 L${-36 + i * 8} 12 L${-34 + i * 8} 15`).join(' ');
    const [x1, y1] = v.point(-42, 16, DEG, AT);
    const [x2, y2] = v.point(44, 16, DEG, AT);
    const hill = `M${x1} ${y1} L${x2} ${y2} Q${x2 + 2} ${y2 + 1} ${x2 + 2} ${y2 + 4} L${x2 + 2} 80 Q${x2 + 2} 84 ${x2 - 2} 84 L${x1 + 4} 84 Q${x1} 84 ${x1} 80 Z`;
    return `<path d="M10 70 L30 30 L40 44 L56 17 L88 66 Z" fill="${rock}" opacity=".9"/>
      <path d="M50 26.5 L56 17 L62 26 L58.5 24.5 L55.5 28 L52.5 25 Z M26 38 L30 30 L34 36 L31 35 L29 38 Z" fill="#F7F5FF"/>
      <path d="${hill}" fill="${grass}" stroke="#053A1A" stroke-opacity=".5" stroke-width="1.2"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${DEG})">
        <path d="${teeth}" fill="#3A3E52"/>
        <rect x="-42" y="13.5" width="86" height="2.6" rx="1" fill="#8E93AD" stroke="#2E2E3A" stroke-opacity=".6" stroke-width=".8"/>
        <path d="${car}" fill="${paint}"/>
        <rect x="-27.5" y="-12" width="53" height="3.5" fill="#FFF7A8" opacity=".9"/>
        ${v.win(c, -23, -21, 11, 8, 1.6)}${v.win(c, -8, -21, 11, 8, 1.6)}${v.win(c, 7, -21, 14, 8, 1.6)}
        <path d="M-27 0 L25.5 0" stroke="#3D0003" stroke-opacity=".4" stroke-width="1.3"/>
        ${v.lamp(23.5, -3, 1.8, 1.8)}
        <rect x="-24" y="5" width="46" height="4" rx="1.5" fill="#1E1E2A"/>
        ${v.wheel(c, -16, 9.5, 4.5)}${v.wheel(c, 14, 9.5, 4.5)}
      </g>`;
  },
};
