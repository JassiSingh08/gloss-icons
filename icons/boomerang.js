const body = 'M76 23.5 C60 21 38 15.5 25 19.5 C17 22 14.5 29 16.5 36 C21 52 29 68 36.5 80 Q43 87.5 50.5 78 C45.5 65 40 51 36.5 40.5 C50 39.5 64 40 77 39 Q85.5 31 76 23.5 Z';
module.exports = {
  id: 'boomerang',
  name: 'Boomerang',
  emoji: '🪃',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['boomerang', 'return', 'throw', 'comeback', 'australia'],
  tone: 'brown',
  body,
  shine: [25, 27, -40],
  draw(c) {
    const wood = c.radial('a', 'brown', 0.3, 0.25);
    const band = '#FFF4D6';
    return `<path d="${body}" fill="${wood}"/>
      <path d="M68 23 C70 28 70.5 34 69 39.5 M62 22.2 C64 27 64.5 34 63.5 39.6" stroke="${band}" stroke-width="2.6" stroke-opacity=".85"/>
      <path d="M29.5 62 C34 60 38 58.5 42 58.5 M33 69 C37 67 41 66 45 66" stroke="${band}" stroke-width="2.6" stroke-opacity=".85"/>
      <circle cx="27.5" cy="32" r="2.3" fill="${band}" opacity=".9"/><circle cx="34" cy="28.5" r="1.6" fill="${band}" opacity=".9"/><circle cx="25.5" cy="40" r="1.6" fill="${band}" opacity=".9"/>
      <path d="M36.5 40.5 C50 39.5 64 40 77 39" stroke="#331805" stroke-opacity=".35" stroke-width="1.6" fill="none"/>`;
  },
};
