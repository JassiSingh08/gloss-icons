const B = require('../src/parts/building');

// Left half, bottom to top; the right half mirrors it.
const L = [[14, 84], [19, 70], [23, 70], [23, 59], [13, 59], [9, 54.5], [10, 53.5], [31, 48], [31, 42], [21, 42], [17.5, 38], [18.5, 37], [39, 32], [39, 27], [29, 27], [26, 23.5], [27, 22.5], [40, 14]];
const pts = [...L, ...L.slice().reverse().map(([x, y]) => [96 - x, y])];
const body = `${B.poly(pts)} Z`;
const roof = (r) => `${B.poly([...r, ...r.slice().reverse().map(([x, y]) => [96 - x, y])])} Z`;
module.exports = {
  id: 'japanese-castle',
  name: 'Japanese Castle',
  emoji: '🏯',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['castle', 'japan', 'samurai', 'history', 'landmark'],
  tone: 'slate',
  body,
  shine: [28, 21, -32],
  shineSize: [5, 1.8],
  draw(c) {
    const wall = c.linear('a', 'white', [0, 0, 1, 1], 0, 2);
    const tile = B.grad(c, 'tile', ['#A9B8CC', '#4D5F7A', '#1E2A3D'], [0, 0, 0.4, 1]);
    const base = B.stone(c);
    const gold = c.linear('gold', 'gold', [0, 0, 1, 1], 0, 2);
    const ink = '#1E2A3D';
    const wins = (y, xs) => xs.map((x) => `<rect x="${x}" y="${y}" width="5" height="4.5" rx="1" fill="${ink}" opacity=".85"/>`).join('');
    return `<path d="${body}" fill="${wall}"/>
      <path d="M14 84 L19 70 L77 70 L82 84 Z" fill="${base}"/>
      <path d="M17 77 L79 77 M30 70 L28 77 M48 70 L48 77 M66 70 L68 77 M38 77 L37 84 M58 77 L59 84" stroke="#5E554A" stroke-opacity=".45" stroke-width="1.1"/>
      ${wins(62, [28, 39, 52, 63])}${wins(43, [35, 45.5, 56])}${wins(28, [42, 49])}
      <path d="${roof([[13, 59], [9, 54.5], [10, 53.5], [31, 48]])}" fill="${tile}"/>
      <path d="M38 52 L48 44.5 L58 52 Z" fill="${tile}" stroke="#fff" stroke-opacity=".5" stroke-width="1"/>
      <path d="M42 51 L48 46.5 L54 51 Z" fill="#F4F0FF"/>
      <path d="${roof([[21, 42], [17.5, 38], [18.5, 37], [39, 32]])}" fill="${tile}"/>
      <path d="${roof([[29, 27], [26, 23.5], [27, 22.5], [40, 14]])}" fill="${tile}"/>
      <path d="M10 53.5 L31 48 L65 48 L86 53.5 M18.5 37 L39 32 L57 32 L77.5 37 M27 22.5 L40 14 L56 14 L69 22.5" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="1"/>
      <path d="M39.5 14 Q37 10 39.5 8.5 Q41 11 42 13.5 Z M56.5 14 Q59 10 56.5 8.5 Q55 11 54 13.5 Z" fill="${gold}"/>`;
  },
};
