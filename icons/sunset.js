const B = require('../src/parts/building');

const T = [[10, 14, 54], [24, 10, 62], [34, 9, 70], [61, 9, 66], [70, 10, 56], [80, 8, 64]];
module.exports = {
  id: 'sunset',
  name: 'Sunset',
  emoji: '🌇',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['sunset', 'evening', 'city', 'golden hour', 'dusk'],
  tone: 'orange',
  body: B.TILE,
  shine: [24, 22, -40],
  draw(c) {
    const sun = c.radial('sun', 'gold', 0.4, 0.3);
    const city = B.grad(c, 'city', ['#8A2A3A', '#5A1430', '#2A0618']);
    return `${B.tileSky(c, 'sunset')}
      <g clip-path="${B.clip(c)}">
        <circle cx="48" cy="60" r="20" fill="#FFF3A6" opacity=".35"/>
        <circle cx="48" cy="60" r="15" fill="${sun}"/>
        <path d="M14 30 Q22 26 30 29 Q36 27 42 30 Z M58 22 Q64 19 70 22 Q76 20 80 23 Z" fill="#FFF0C8" opacity=".6"/>
        <path d="M10 76 L86 76 L86 86 L10 86 Z" fill="${city}"/>
        <path d="${B.skyline(T, 86)}" fill="${city}"/>
        <path d="${B.lights(T, 86, { step: 6 })}" fill="#FFD27A" opacity=".85"/>
      </g>`;
  },
};
