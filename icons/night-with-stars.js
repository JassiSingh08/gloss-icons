const B = require('../src/parts/building');

const T = [[12, 14, 52], [25, 12, 40], [36, 13, 58], [48, 12, 34], [59, 13, 48], [71, 9, 40], [79, 7, 56]];
module.exports = {
  id: 'night-with-stars',
  name: 'Night with Stars',
  emoji: '🌃',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['night', 'city', 'stars', 'late', 'skyline'],
  tone: 'navy',
  body: B.TILE,
  shine: [24, 22, -40],
  draw(c) {
    const city = B.grad(c, 'city', ['#3B3F8E', '#1E2260', '#0C0F38']);
    return `${B.tileSky(c, 'night')}
      <g clip-path="${B.clip(c)}">
        ${B.twinkle(28, 26, 4)}${B.twinkle(63, 21, 3)}${B.twinkle(76, 33, 2.4)}${B.twinkle(44, 18, 2)}
        <circle cx="20" cy="40" r="1" fill="#FFF3B0"/><circle cx="54" cy="29" r="1" fill="#FFF3B0"/><circle cx="38" cy="33" r=".9" fill="#FFF3B0"/>
        <path d="${B.skyline(T, 86)}" fill="${city}"/>
        <path d="M53.5 34 L53.5 27" stroke="#3B3F8E" stroke-width="1.4"/>
        <path d="${B.lights(T, 86)}" fill="${B.glow(c)}"/>
      </g>`;
  },
};
