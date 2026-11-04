const g = require('../src/parts/garment');

const body = 'M21 42 Q48 33 75 42 Q85 58 81 74 Q79 83.5 66 83.5 L30 83.5 Q17 83.5 15 74 Q11 58 21 42 Z';

module.exports = {
  id: 'purse',
  name: 'Purse',
  emoji: '👛',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['purse', 'coin purse', 'money', 'wallet', 'shopping'],
  tone: 'magenta',
  body,
  shine: [24, 51, -55],
  draw(c) {
    const leather = c.radial('a', 'magenta', 0.3, 0.2);
    const ball = c.radial('ball', 'gold', 0.3, 0.25);
    const m = c.ramp('magenta');
    const gd = c.ramp('gold');
    return g.tube(c, 'M34 38 Q32 20 48 18 Q64 20 62 38', { width: 2.6, palette: 'gold', name: 'chain', box: [32, 18, 64, 38] })
      + `<path d="${body}" fill="${leather}"/>
      ${g.fold('M30 82 Q36 66 34 50 M66 82 Q60 66 62 50', m[3], 0.35, 1.6)}
      ${g.stitch('M19 47 Q48 39 77 47', m[0], 0.5)}`
      + g.tube(c, 'M20 42.5 Q48 32.5 76 42.5', { width: 4.4, palette: 'gold', name: 'frame', box: [20, 32, 76, 44] })
      + `<path d="M45.5 37.5 L44.5 31 M50.5 37.5 L51.5 31" stroke="${gd[2]}" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="43.8" cy="29.5" r="3.6" fill="${ball}" stroke="${gd[3]}" stroke-opacity=".6" stroke-width="1"/>
      <circle cx="52.2" cy="29.5" r="3.6" fill="${ball}" stroke="${gd[3]}" stroke-opacity=".6" stroke-width="1"/>
      <circle cx="20.5" cy="43" r="2.4" fill="${ball}" stroke="${gd[3]}" stroke-opacity=".6" stroke-width=".8"/>
      <circle cx="75.5" cy="43" r="2.4" fill="${ball}" stroke="${gd[3]}" stroke-opacity=".6" stroke-width=".8"/>`;
  },
};
