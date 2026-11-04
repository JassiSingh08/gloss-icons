const m = require('../src/parts/metal');
const body = 'M20 13 L76 13 Q83 13 83 20 L83 77 Q83 84 76 84 L20 84 Q13 84 13 77 L13 20 Q13 13 20 13 Z';
module.exports = {
  id: 'x-ray',
  name: 'X-Ray',
  emoji: '🩻',
  group: 'Objects',
  subgroup: 'medical',
  tags: ['x-ray', 'skeleton', 'bones', 'scan', 'hospital'],
  tone: 'navy',
  body,
  shine: [22, 20, -40],
  shineSize: [5.5, 2.2],
  draw(c) {
    const film = c.radial('a', 'navy', 0.3, 0.2);
    const glow = c.radial('g', 'sky', 0.5, 0.45);
    const rib = (y, s) => `M45 ${y} C${45 - 14 * s} ${y - 4} ${45 - 22 * s} ${y + 2} ${45 - 22 * s} ${y + 10} M51 ${y} C${51 + 14 * s} ${y - 4} ${51 + 22 * s} ${y + 2} ${51 + 22 * s} ${y + 10}`;
    const ribs = [28, 39, 50, 61].map((y, i) => rib(y, 1 - i * 0.05)).join(' ');
    const spine = [22, 30, 38, 46, 54, 62, 70].map((y) => `<rect x="44.5" y="${y}" width="7" height="6" rx="2.2" fill="#F4FBFF"/>`).join('');
    return `<path d="${body}" fill="${film}"/>
      <ellipse cx="48" cy="48" rx="30" ry="32" fill="${glow}" opacity=".35"/>
      <path d="${ribs}" stroke="#5BC2FF" stroke-opacity=".55" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="${ribs}" stroke="#F4FBFF" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      ${spine}
      <path d="M30 22 C36 19 42 20 45 22 M66 22 C60 19 54 20 51 22" stroke="#F4FBFF" stroke-width="3.4" fill="none" stroke-linecap="round"/>
      <path d="M17 17 L79 17" stroke="#9AA8FF" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
