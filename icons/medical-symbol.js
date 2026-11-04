const g = require('../src/parts/glyph');

// The rod of Asclepius: a staff with one snake coiled round it. The snake is drawn in four
// pieces, each crossing the staff once, alternately behind and in front of it.
const body = 'M44.5 20 A5.5 5.5 0 1 1 51.5 20 L51.5 81 Q51.5 84 48 84 Q44.5 84 44.5 81 Z';
const behind = ['M64 80 C48 80 29 75 29 65', 'M67 48 C67 38 29 42 29 32'];
const front = ['M29 65 C29 55 67 58 67 48', 'M29 32 C29 22 43 19 55 20'];
module.exports = {
  id: 'medical-symbol',
  name: 'Medical Symbol',
  emoji: '⚕️',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['medicine', 'doctor', 'health', 'caduceus', 'hospital'],
  tone: 'silver',
  body,
  shine: [46.5, 30, -80],
  shineSize: [4, 1.3],
  draw(c) {
    const snake = (d, i) => g.tube(c, d, { width: 7.5, palette: 'green', name: `s${i}` });
    const head = c.radial('head', 'green', 0.35, 0.3);
    return behind.map(snake).join('') +
      `<path d="${body}" fill="${c.linear('rod', 'silver', [0, 0, 1, 0], 0, 3)}"/>` +
      front.map((d, i) => snake(d, i + 2)).join('') +
      `<ellipse cx="58" cy="20" rx="6.5" ry="4.6" fill="${head}" stroke="${c.ramp('green')[3]}" stroke-opacity=".7" stroke-width="1.3" transform="rotate(-8 58 20)"/>
      <circle cx="59.5" cy="18.6" r="1.3" fill="#053A1A"/>
      <path d="M64 20.5 L68 21.5 M68 21.5 L70 20 M68 21.5 L70 23" stroke="#E3120B" stroke-width="1" stroke-linecap="round" fill="none"/>`;
  },
};
