const left = 'M32 51 A15 15 0 1 1 31.99 51 Z';
const right = 'M64 53 A15 15 0 1 1 63.99 53 Z';
module.exports = {
  id: 'cherries',
  name: 'Cherries',
  tags: ['fruit', 'pair', 'couple', 'sweet', 'flirty'],
  tone: 'red',
  body: [left, right],
  shine: [24.5, 59, -40],
  draw(c) {
    const fruit = c.radial('a', 'red', 0.32, 0.25);
    const stem = c.linear('stem', 'green', [0, 0, 1, 1], 1, 2);
    const leaf = c.radial('leaf', 'green', 0.3, 0.2);
    return `<path d="M33 53 C34 38 44 24 54 16 M63 55 C61 40 58 28 54 16" stroke="${stem}" stroke-width="3.2" stroke-linecap="round" fill="none"/>
      <path d="${left}" fill="${fruit}"/>
      <path d="${right}" fill="${fruit}"/>
      <path d="M29.5 53.5 Q33 51.5 36.5 53.5 M60.5 55.5 Q64 53.5 67.5 55.5" stroke="#3D0003" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round" fill="none"/>
      <ellipse cx="56.5" cy="61" rx="5.6" ry="2.8" fill="#fff" opacity=".85" transform="rotate(-40 56.5 61)"/>
      <path d="M54 16 C58 9 70 7 79 12 C74 19 62 21 54 16 Z" fill="${leaf}" stroke="#053A1A" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="M55.5 15.5 C62 13 70 12 76 12.5" stroke="#A6F07A" stroke-opacity=".7" stroke-width="1" fill="none"/>`;
  },
};
