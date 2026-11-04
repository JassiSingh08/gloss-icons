const g = require('../src/parts/garment');

const body = 'M48 15 C62 15 68 27 68 42 L68 55 Q69.5 65 79.5 69.5 Q84.5 72 82.5 75.5 Q81 77.5 76 77.5 L20 77.5 Q15 77.5 13.5 75.5 Q11.5 72 16.5 69.5 Q26.5 65 28 55 L28 42 C28 27 34 15 48 15 Z';

module.exports = {
  id: 'bell',
  name: 'Bell',
  emoji: '🔔',
  group: 'Objects',
  subgroup: 'sound',
  tags: ['bell', 'notification', 'alert', 'ring', 'reminder'],
  tone: 'gold',
  body,
  shine: [36, 28, -65],
  shineSize: [6.5, 2.4],
  draw(c) {
    const brass = c.radial('a', 'gold', 0.3, 0.2);
    const clapper = c.radial('clap', 'gold', 0.35, 0.3);
    const lip = c.linear('lip', 'gold', [0, 0, 0, 1], 1, 2);
    const d = c.ramp('gold');
    return g.tube(c, 'M43.5 16 Q43.5 8.5 48 8.5 Q52.5 8.5 52.5 16', { width: 3.2, palette: 'gold', name: 'loop', box: [43, 8, 53, 16] })
      + `<circle cx="48" cy="80" r="5.2" fill="${clapper}" stroke="${d[3]}" stroke-opacity=".6" stroke-width="1.1"/>
      <path d="${body}" fill="${brass}"/>
      <path d="M13.4 74 Q48 70 82.6 74 Q83 76.5 79 77.3 L17 77.3 Q13 76.5 13.4 74 Z" fill="${lip}"/>
      <path d="M22 67 Q48 63 74 67" fill="none" stroke="${d[3]}" stroke-opacity=".45" stroke-width="1.4"/>
      <path d="M23.5 69.5 Q48 65.5 72.5 69.5" fill="none" stroke="${d[0]}" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
