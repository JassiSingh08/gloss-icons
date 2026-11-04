const B = require('../src/parts/building');

module.exports = {
  id: 'sunrise-over-mountains',
  name: 'Sunrise over Mountains',
  emoji: '🌄',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['sunrise', 'mountains', 'morning', 'hike', 'dawn'],
  tone: 'purple',
  body: B.TILE,
  shine: [24, 22, -40],
  draw(c) {
    const sun = c.radial('sun', 'gold', 0.4, 0.3);
    const back = B.grad(c, 'back', ['#B07ACC', '#6A3F9E', '#3A1F6E'], [0, 0, 1, 1]);
    const front = B.grad(c, 'front', ['#4FBF8A', '#1F7A5A', '#0A3D33'], [0, 0, 1, 1]);
    return `${B.tileSky(c, 'dawn')}
      <g clip-path="${B.clip(c)}">
        <circle cx="49" cy="52" r="20" fill="#FFF3A6" opacity=".35"/>
        <circle cx="49" cy="52" r="13" fill="${sun}"/>
        <path d="M8 66 L29 33 Q31 30.5 33 33 L49 58 L64 38 Q66 35.5 68 38 L90 66 L90 90 L8 90 Z" fill="${back}"/>
        <path d="M24.5 40 L29 33 Q31 30.5 33 33 L37.5 40 L34 38.5 L31 41 L28 38.5 Z M60 43.5 L64 38 Q66 35.5 68 38 L72.3 43.5 L69 42 L66 44.5 L63 42 Z" fill="#F4F0FF"/>
        <path d="M8 74 Q24 60 40 70 Q56 62 72 68 Q82 64 90 66 L90 90 L8 90 Z" fill="${front}"/>
      </g>`;
  },
};
