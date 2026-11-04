const L = require('../src/parts/leaf');
// Mixed blooms and leaves in a paper cone tied with a pink ribbon.
const body = 'M14 41 C30 47 66 47 82 41 L56.5 81 C53 85.5 43 85.5 39.5 81 Z';
module.exports = {
  id: 'bouquet',
  name: 'Bouquet',
  emoji: '💐',
  group: 'Animals & Nature',
  subgroup: 'plant-flower',
  tags: ['bouquet', 'flowers', 'gift', 'romance', 'thank you'],
  tone: 'sky',
  body,
  shine: [28, 50, -20],
  shineSize: [6, 2.2],
  draw(c) {
    const k = L.kit(c);
    const paper = c.linear('a', 'sky', [0, 0, 1, 0.6], 0, 2);
    const inside = c.linear('in', 'sky', [0, 0, 0, 1], 1, 3);
    const pink = c.radial('pink', 'pink', 0.32, 0.25);
    const red = c.radial('red', 'red', 0.32, 0.25);
    const purple = c.radial('purple', 'purple', 0.32, 0.25);
    const gold = c.radial('gold', 'gold', 0.32, 0.25);
    const white = c.radial('white', 'white', 0.32, 0.25);
    const bow = c.radial('bow', 'magenta', 0.35, 0.3);
    const daisy = (x, y, s) => {
      const petals = [...Array(8)].map((_, i) => {
        const t = (i * Math.PI) / 4;
        return [x + 6.5 * s * Math.sin(t), y - 6.5 * s * Math.cos(t), 4 * s];
      });
      return `<path d="${L.blob([...petals, [x, y, 6 * s]], [x, y])}" fill="${white}" stroke="#6E61A8" stroke-opacity=".5" stroke-width="1.1"/><circle cx="${x}" cy="${y}" r="${4 * s}" fill="${gold}"/>`;
    };
    const bloom = (x, y, r, f, ink) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${ink}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M${x - r * 0.45} ${y} C${x - r * 0.45} ${y - r * 0.5} ${x + r * 0.45} ${y - r * 0.5} ${x + r * 0.45} ${y} C${x + r * 0.45} ${y + r * 0.3} ${x} ${y + r * 0.35} ${x - r * 0.1} ${y + r * 0.05}" stroke="${ink}" stroke-opacity=".45" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      ${L.glint(x - r * 0.45, y - r * 0.5, r * 0.25, r * 0.12)}`;
    return `<path d="M14 41 C30 35 66 35 82 41 C66 47 30 47 14 41 Z" fill="${inside}"/>
      ${k.leaf([30, 42], [10, 26], 0.3, -0.2)}${k.leaf([66, 42], [87, 27], 0.3, 0.2)}${k.leaf([46, 36], [40, 8], 0.26, -0.1)}
      ${bloom(31, 32, 11, pink, '#4A0016')}
      ${bloom(66, 30, 10.5, purple, '#1A0040')}
      ${daisy(49, 22, 1.15)}
      ${bloom(48, 39, 8.5, red, '#3D0003')}
      ${daisy(19.5, 42, 0.75)}${daisy(76, 42, 0.75)}
      <path d="${body}" fill="${paper}"/>
      <path d="M14 41 C30 47 66 47 82 41 L78 47 C64 52 32 52 18 47 Z" fill="#fff" opacity=".35"/>
      <path d="M33.5 64 C42 66.5 54 66.5 62.5 64 L61 68.5 C53 71 43 71 34.5 68.5 Z" fill="${bow}"/>
      <path d="M48 66.5 C40 58 31 58 32 64 C33 70 42 70 48 66.5 Z M48 66.5 C56 58 65 58 64 64 C63 70 54 70 48 66.5 Z M48 66.5 L42 80 M48 66.5 L55 80" fill="${bow}" stroke="#3D0033" stroke-opacity=".5" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="48" cy="66.5" r="2.8" fill="${bow}" stroke="#3D0033" stroke-opacity=".5" stroke-width="1.1"/>`;
  },
};
