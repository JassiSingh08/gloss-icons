const sky = require('../src/parts/sky');

// A cloud with a face in profile, cheeks puffed, blowing gusts to the right.
const C = [[24, 58, 13], [27, 42, 14], [42, 33, 15], [55, 44, 13], [52, 58, 13]];
const body = sky.cloudPath(C);
const GUSTS = [
  'M66 47 C72 44 79 45 81 39 C82 35 77.5 33 75.5 36',
  'M66 55 C73 55 80 55 86 54',
  'M66 63 C72 65 77 68 79 73 C80 77 76 79 74 76',
];
module.exports = {
  id: 'wind-face',
  name: 'Wind Face',
  emoji: '🌬️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['wind', 'blow', 'breeze', 'gust', 'weather', 'cold'],
  tone: 'silver',
  body,
  shine: sky.shineOn(C[2]),
  shineSize: [5, 2.3],
  draw(c) {
    const ink = '#1A2350';
    const gust = GUSTS.map((d) => `<path d="${d}" stroke="#4E6FA8" stroke-width="5.4" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#E4F2FF" stroke-width="3.2" fill="none" stroke-linecap="round"/>`).join('');
    return `${sky.paintCloud(c, C)}
      <path d="M33 43 Q37 46.5 41 43" stroke="${ink}" stroke-width="2.8" fill="none" stroke-linecap="round"/>
      <path d="M46 41 Q50 44.5 54 41" stroke="${ink}" stroke-width="2.8" fill="none" stroke-linecap="round"/>
      <path d="M32 37 Q36 34.5 40 36 M46 35 Q50 32.5 54 34" stroke="${ink}" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".8"/>
      <ellipse cx="57.5" cy="54" rx="3.4" ry="4" fill="${ink}"/>
      ${gust}`;
  },
};
