const g = require('../src/parts/garment');

// The coil is a ring (inner circle drawn the other way round so it stays open); the bell flares
// out from its right side.
const ring = 'M40 25 A25 25 0 1 1 39.99 25 Z M40 33 A17 17 0 1 0 40.01 33 Z';
const bell = 'M64.8 45 Q74 44 81.5 31 Q85.5 50 81.5 69 Q74 56 64.8 55 Z';

module.exports = {
  id: 'postal-horn',
  name: 'Postal Horn',
  emoji: '📯',
  group: 'Objects',
  subgroup: 'sound',
  tags: ['horn', 'post', 'brass', 'fanfare', 'announce'],
  tone: 'gold',
  body: [ring, bell],
  shine: [25, 36, -45],
  shineSize: [5.5, 2],
  draw(c) {
    const brass = c.radial('a', 'gold', 0.3, 0.2);
    const flare = c.linear('flare', 'gold', [0, 0, 1, 1], 0, 2);
    const inside = c.linear('in', 'gold', [0, 0, 1, 0], 2, 3);
    const d = c.ramp('gold');
    return g.tube(c, 'M24 70 L15 80', { width: 4, palette: 'gold', name: 'mp', box: [14, 70, 25, 81] })
      + `<ellipse cx="14.5" cy="80.5" rx="3.6" ry="2.4" fill="${d[2]}" transform="rotate(-48 14.5 80.5)"/>
      <path d="${ring} ${bell}" fill="${brass}"/>
      <path d="${bell}" fill="${flare}"/>
      <ellipse cx="81.5" cy="50" rx="3.4" ry="18.5" fill="${inside}" stroke="${d[3]}" stroke-opacity=".5" stroke-width="1"/>
      <path d="M40 33 A17 17 0 0 0 26 59" fill="none" stroke="${d[3]}" stroke-opacity=".45" stroke-width="1.6"/>
      <rect x="62.5" y="43.5" width="4.6" height="13" rx="1.6" fill="${d[2]}" stroke="${d[3]}" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
