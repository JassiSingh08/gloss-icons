const B = require('../src/parts/building');

module.exports = {
  id: 'sunrise',
  name: 'Sunrise',
  emoji: '🌅',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['sunrise', 'morning', 'sea', 'dawn', 'new day'],
  tone: 'orange',
  body: B.TILE,
  shine: [24, 22, -40],
  draw(c) {
    const sun = c.radial('sun', 'gold', 0.4, 0.3);
    const sea = B.grad(c, 'sea', ['#5BA8E8', '#2A5FB8', '#16307A']);
    const gold = '#FFE07A';
    return `${B.tileSky(c, 'dawn')}
      <g clip-path="${B.clip(c)}">
        <circle cx="48" cy="61" r="22" fill="#FFF3A6" opacity=".35"/>
        <circle cx="48" cy="61" r="15" fill="${sun}"/>
        <path d="M18 34 Q26 29 34 33 Q40 30 46 34 Z M58 26 Q65 22 72 26 Q77 24 82 27 Z" fill="#FFF3E0" opacity=".7"/>
        <path d="M10 61 L86 61 L86 86 L10 86 Z" fill="${sea}"/>
        <path d="M33 66 L63 66 M37 71 L59 71 M41 76 L55 76 M44 80.5 L52 80.5" stroke="${gold}" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M16 69 L24 69 M70 73 L80 73 M18 79 L26 79" stroke="#9AD0FF" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>
      </g>`;
  },
};
