const m = require('../src/parts/metal');
// The limb is a crescent bowed towards the top right; the string runs across the bottom left.
const body = 'M17 31 Q15 26 20 24 C40 8 74 12 82 40 C88 60 76 78 66 82 Q61 84 61 79 C72 72 78 58 73 42 C66 20 40 18 24 31 Q20 34 17 31 Z';
module.exports = {
  id: 'bow-and-arrow',
  name: 'Bow and Arrow',
  emoji: '🏹',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['archery', 'bow', 'arrow', 'aim', 'target'],
  tone: 'brown',
  body,
  shine: [36, 18, -25],
  shineSize: [6, 2],
  draw(c) {
    const wood = c.radial('a', 'brown', 0.3, 0.2);
    const head = m.band(c, 'h', 'steel', [72, 14], [80, 24]);
    const feather = c.radial('f', 'red', 0.3, 0.3);
    return `<path d="M20 29 L63.5 80" stroke="#F4F0FF" stroke-width="1.4" stroke-opacity=".9"/>
      <path d="${body}" fill="${wood}"/>
      <path d="M72.5 42 C70 32 64 25 56 21" stroke="#331805" stroke-opacity=".3" stroke-width="1.4" fill="none"/>
      <path d="M74 38 Q80 40 82 46 L80 54 Q74 52 73 46 Z" fill="#3D1A00" opacity=".75"/>
      ${m.tube(c, 'M22 75 L70 23', { width: 3.2, palette: 'sand', name: 's' })}
      ${m.part('M66 19 L82 11 L77 28 L72 25.5 L69.5 23 Z', head, 'steel')}
      ${m.part('M23 72 L14 72 L18 68 L27 67 Z', feather, 'red')}
      ${m.part('M25 74 L25 83 L29 79 L30 70 Z', feather, 'red')}`;
  },
};
