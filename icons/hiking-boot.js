const g = require('../src/parts/garment');

const body = 'M10 72 Q10 62 22 59 L35 54.5 Q41 51 41 43 L41 19 Q41 14 46 14 L76 14 Q81 14 81.5 19 L84 44 Q86 52 86 60 L86 80 Q86 84 82 84 L14 84 Q10 84 10 80 Z';

module.exports = {
  id: 'hiking-boot',
  name: 'Hiking Boot',
  emoji: '🥾',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['boot', 'hiking', 'trail', 'outdoors', 'camping'],
  tone: 'olive',
  body,
  shine: [20, 63, -20],
  shineSize: [5.5, 2],
  draw(c) {
    const leather = c.radial('a', 'olive', 0.3, 0.2);
    const collar = c.linear('collar', 'ember', [0, 0, 0, 1], 0, 2);
    const sole = c.linear('sole', 'black', [0, 0, 0, 1], 0, 2);
    const hook = c.linear('hook', 'gold', [0, 0, 1, 1], 0, 2);
    const o = c.ramp('olive');
    const lugs = [16, 26, 36, 46, 56, 66, 76].map((x) => `<path d="M${x} 84 L${x + 2} 80.5 L${x + 6} 80.5 L${x + 8} 84 Z" fill="#05050A" opacity=".55"/>`).join('');
    return `<path d="${body}" fill="${leather}"/>
      <path d="M41 19 Q41 14 46 14 L76 14 Q81 14 81.5 19 L81.8 22 L41 22 Z" fill="${collar}"/>
      <path d="M10 71 L86 71 L86 80 Q86 84 82 84 L14 84 Q10 84 10 80 Z" fill="${sole}"/>
      ${lugs}
      <path d="M10 71 L86 71" stroke="#E3EFA0" stroke-opacity=".4" stroke-width="1.2"/>
      <path d="M12 66 Q16 60 26 58 L40 56 Q60 54 84 52" fill="none" stroke="${o[3]}" stroke-opacity=".5" stroke-width="1.4"/>
      ${g.stitch('M13 68.5 L85 68.5', o[0], 0.5)}
      <path d="M41.5 22 L52 22 L52 54 L41 54 Z" fill="${o[2]}" opacity=".45"/>
      <path d="M50.5 26 L42.5 30 L50.5 34 L42.5 38 L50.5 42 L42.5 46 L50 50" fill="none" stroke="#F2E6C8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      ${[26, 34, 42].map((y) => `<circle cx="50.5" cy="${y}" r="1.8" fill="${hook}"/>`).join('')}
      ${g.fold('M62 24 L64 50', o[3], 0.4, 1.4)}`;
  },
};
