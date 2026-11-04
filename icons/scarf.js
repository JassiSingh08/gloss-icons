const g = require('../src/parts/garment');

// The loop is the body; its neck hole runs the other way round so it stays open. The two tails
// hang from under the front of the loop.
const loop = 'M48 15 C66 15 79 22 79 31 C79 40 66 47 48 47 C30 47 17 40 17 31 C17 22 30 15 48 15 Z';
const hole = 'M48 24 C37 24 29 27 29 30.5 C29 34 37 37 48 37 C59 37 67 34 67 30.5 C67 27 59 24 48 24 Z';

module.exports = {
  id: 'scarf',
  name: 'Scarf',
  emoji: '🧣',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['scarf', 'winter', 'cold', 'cozy', 'knit'],
  tone: 'red',
  body: [loop, hole],
  shine: [26, 23, -25],
  shineSize: [6, 2],
  draw(c) {
    const wool = c.radial('a', 'red', 0.3, 0.2);
    const tailA = c.linear('ta', 'red', [0, 0, 1, 1], 0, 2);
    const tailB = c.linear('tb', 'red', [0, 0, 1, 1], 1, 3);
    const r = c.ramp('red');
    const stripe = '#FFF0E0';
    const tail = (d, fill) => `<path d="${d}" fill="${fill}" stroke="${r[3]}" stroke-opacity=".55" stroke-width="1.2" stroke-linejoin="round"/>`;
    return tail('M52 40 L66 38 Q70 58 70 76 L56 77 Q56 60 52 40 Z', tailB)
      + `<path d="M56.6 66 L69.8 65.5 L69.9 70 L56.8 70.5 Z" fill="${stripe}" opacity=".85"/>`
      + g.fold('M57 77 L56.5 82 M60 77 L60 82.5 M63 76.8 L63.5 82.3 M66 76.6 L66.8 82', r[2], 1, 1.6)
      + tail('M38 40 L52 41 Q46 60 38 78 L25 74 Q33 58 38 40 Z', tailA)
      + `<path d="M31.5 63 L43.6 67 L41.8 71 L29.6 67 Z" fill="${stripe}" opacity=".9"/>`
      + g.fold('M25.5 74.5 L23.5 79.5 M28.8 75.5 L27 80.5 M32 76.5 L30.6 81.6 M35.2 77.4 L34.2 82.6', r[2], 1, 1.6)
      + `<path d="M28 63 Q35 52 38 44" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="1.4" stroke-linecap="round"/>
      <path d="${loop} ${hole}" fill="${wool}"/>
      <path d="${hole}" fill="${r[3]}" opacity=".85"/>
      <path d="M30 32.5 C33 35.5 40 37 48 37" fill="none" stroke="${r[2]}" stroke-width="1.4"/>
      ${g.fold('M22 36 C30 42 40 44.5 48 44.5 M62 18 C70 20 75 24 76 29', r[3], 0.45, 1.4)}
      <path d="M36 42 Q38 44.5 46 46" fill="none" stroke="${r[3]}" stroke-opacity=".5" stroke-width="1.2"/>`;
  },
};
