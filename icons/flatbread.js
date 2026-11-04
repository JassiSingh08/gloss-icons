// A naan lying flat, wider at one end: the darker underside shows its thickness, the toasted
// patches and charred blisters say oven bread rather than a potato or a cookie.
const d = require('../src/parts/dish');
const ANGLE = -16;
const AT = [48, 50];
const S = 1.1;
const top = 'M-38 4 C-41 -6 -32 -15 -16 -18 C2 -22 26 -20 36 -10 C42 -4 40 6 32 11 C20 18 -4 19 -22 16 C-31 14 -36 10 -38 4 Z';
const slab = 'M-38 4 C-41 -6 -32 -15 -16 -18 C2 -22 26 -20 36 -10 C42 -4 40 6 40 8 C40 12 36 13 32 15 C20 22 -4 23 -22 20 C-31 18 -37 14 -38 8 Z';
module.exports = {
  id: 'flatbread',
  name: 'Flatbread',
  emoji: '🫓',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['flatbread', 'naan', 'pita', 'bread', 'arepa'],
  tone: 'sand',
  body: d.place(slab, ANGLE, AT, S),
  shine: [...d.placePt(-28, -9, ANGLE, AT, S), ANGLE - 25],
  draw(c) {
    const face = c.radial('a', 'sand', 0.32, 0.25);
    const patch = (x, y, rx, ry, a = 0) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#D3893A" opacity=".55" transform="rotate(${a} ${x} ${y})"/>`;
    const char = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.7}" fill="#6E3410"/>
      <ellipse cx="${x - r * 0.2}" cy="${y - r * 0.25}" rx="${r * 0.5}" ry="${r * 0.3}" fill="#2E1003" opacity=".6"/>`;
    const puff = (x, y, rx, ry) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#FFF8E6" opacity=".8"/>`;
    return `<path d="${d.place(slab, ANGLE, AT, S)}" fill="#A06A2E"/>
      <path d="${d.place(top, ANGLE, AT, S)}" fill="${face}"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE}) scale(${S})">
        ${patch(-18, -4, 9, 5.5, 15)}${patch(14, -8, 10, 5)}${patch(10, 8, 8, 4.5, -10)}${patch(-24, 8, 5, 3)}
        ${char(-16, -6, 3.2)}${char(16, -9, 2.8)}${char(11, 7, 2.6)}${char(-3, 6, 1.8)}${char(27, -1, 1.8)}
        ${puff(-6, -10, 3.5, 2)}${puff(2, -2, 2.6, 1.5)}${puff(-24, 3, 2.2, 1.3)}${puff(24, 5, 2.2, 1.3)}
      </g>`;
  },
};
