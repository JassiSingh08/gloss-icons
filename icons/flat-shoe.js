// Seen from above: drawn upright (heel at the top, toe at the bottom), then turned so the toe
// points down to the left. The sole is the same outline dropped a little lower.
const ROT = (55 * Math.PI) / 180;
const turn = (x, y) => [48 + (x - 48) * Math.cos(ROT) - (y - 48) * Math.sin(ROT), 48 + (x - 48) * Math.sin(ROT) + (y - 48) * Math.cos(ROT)];
const path = (d, ox = 0, oy = 0) => d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (_, x, y) => turn(+x, +y).map((v, i) => (v + (i ? oy : ox)).toFixed(2)).join(' '));
const SHOE = 'M48 9 C61 9 65 19 65 31 C65 45 63 55 63 66 C63 78 57 87 48 87 C39 87 33 78 33 66 C33 55 31 45 31 31 C31 19 35 9 48 9 Z';
const OPEN = 'M48 15 C57.5 15 60 23 60 33 C60 43 58.5 49 57 53 C52.5 56.5 43.5 56.5 39 53 C37.5 49 36 43 36 33 C36 23 38.5 15 48 15 Z';
const body = path(SHOE, 0, -3);

module.exports = {
  id: 'flat-shoe',
  name: 'Flat Shoe',
  emoji: '🥿',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['flat', 'ballet flat', 'loafer', 'shoe', 'comfy'],
  tone: 'blue',
  body,
  shine: [24, 60, -35],
  shineSize: [5, 2],
  draw(c) {
    const leather = c.radial('a', 'blue', 0.3, 0.2);
    const sole = c.linear('sole', 'navy', [0, 0, 0, 1], 2, 3);
    const lining = c.linear('lining', 'cream', [0, 0, 1, 1], 0, 2);
    const bow = c.radial('bow', 'gold', 0.35, 0.3);
    const b = c.ramp('blue');
    const [bx, by] = turn(48, 68).map((v, i) => v - (i ? 3 : 0));
    return `<path d="${path(SHOE, 0, 3)}" fill="${sole}"/>
      <path d="${body}" fill="${leather}"/>
      <path d="${path(OPEN, 0, -3)}" fill="${lining}" stroke="${b[3]}" stroke-opacity=".7" stroke-width="2.2"/>
      <path d="${path('M48 22 C54 22 55.5 28 55.5 35 C55.5 42 54 47 48 47 C42 47 40.5 42 40.5 35 C40.5 28 42 22 48 22 Z', 0, -3)}" fill="#C9814F" opacity=".25"/>
      <g transform="translate(${bx.toFixed(2)} ${by.toFixed(2)}) rotate(55)">
        <path d="M0 0 C-6 -5 -9 -1 -7 2.5 C-5 5.5 -1 3 0 0.5 Z M0 0 C6 -5 9 -1 7 2.5 C5 5.5 1 3 0 0.5 Z" fill="${bow}" stroke="#5E3A00" stroke-opacity=".5" stroke-width=".9"/>
        <circle cx="0" cy=".4" r="2" fill="${bow}" stroke="#5E3A00" stroke-opacity=".5" stroke-width=".8"/>
      </g>`;
  },
};
