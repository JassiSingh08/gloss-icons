const B = require('../src/parts/building');

const T = [[12, 12, 46], [24, 14, 58], [38, 11, 36], [49, 15, 52], [64, 10, 42], [74, 12, 60]];
module.exports = {
  id: 'cityscape-at-dusk',
  name: 'Cityscape at Dusk',
  emoji: '🌆',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['dusk', 'evening', 'city', 'skyline', 'twilight'],
  tone: 'purple',
  body: B.TILE,
  shine: [24, 22, -40],
  draw(c) {
    const city = B.grad(c, 'city', ['#6A3FA0', '#3A1F72', '#1A0D40']);
    return `${B.tileSky(c, 'dusk')}
      <g clip-path="${B.clip(c)}">
        <path d="M18 34 Q24 30 30 33 Q36 31 40 34 Z M56 26 Q62 22 68 25 Q74 23 78 26 Z" fill="#FFB08A" opacity=".55"/>
        ${B.twinkle(66, 18, 2.2, '#FFE7C8')}
        <path d="${B.skyline(T, 86)}" fill="${city}"/>
        <path d="M43.5 36 L43.5 28" stroke="#3A1F72" stroke-width="1.4"/>
        <path d="${B.lights(T, 86)}" fill="${B.glow(c)}"/>
      </g>`;
  },
};
