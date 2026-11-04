const B = require('../src/parts/building');

module.exports = {
  id: 'bridge-at-night',
  name: 'Bridge at Night',
  emoji: '🌉',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['bridge', 'night', 'city', 'lights', 'river'],
  tone: 'navy',
  body: B.TILE,
  shine: [24, 22, -40],
  draw(c) {
    const steel = B.grad(c, 'steel', ['#7E86D8', '#3D4FD6', '#1A238A'], [0, 0, 1, 0]);
    const water = B.grad(c, 'water', ['#1F2A7A', '#101650', '#070A30']);
    const lamp = '#FFD24A';
    let lamps = '';
    for (let x = 16; x < 84; x += 7) lamps += `<circle cx="${x}" cy="57.5" r="1.3" fill="${lamp}"/>`;
    return `${B.tileSky(c, 'night')}
      <g clip-path="${B.clip(c)}">
        ${B.twinkle(24, 25, 3.2)}${B.twinkle(70, 20, 2.6)}${B.twinkle(50, 30, 1.8)}
        <path d="M10 62 L86 62 L86 86 L10 86 Z" fill="${water}"/>
        <path d="M30 32 Q48 58 66 32 M30 32 Q20 50 8 56 M66 32 Q76 50 88 56" fill="none" stroke="#9AA8FF" stroke-width="1.6"/>
        <path d="M36 44 L36 58 M42 51 L42 58 M48 54 L48 58 M54 51 L54 58 M60 44 L60 58 M22 47 L22 58 M74 47 L74 58" stroke="#9AA8FF" stroke-opacity=".7" stroke-width="1"/>
        <path d="M27.5 70 L27.5 30 Q27.5 28 29.5 28 L30.5 28 Q32.5 28 32.5 30 L32.5 70 Z M63.5 70 L63.5 30 Q63.5 28 65.5 28 L66.5 28 Q68.5 28 68.5 30 L68.5 70 Z" fill="${steel}"/>
        <path d="M10 56 L86 56 L86 60 L10 60 Z" fill="${steel}"/>
        ${lamps}
        <circle cx="30" cy="31" r="1.6" fill="#FF5C5C"/><circle cx="66" cy="31" r="1.6" fill="#FF5C5C"/>
        <path d="M18 66 L24 66 M32 70 L42 70 M52 67 L60 67 M66 74 L76 74 M22 78 L30 78 M44 80 L50 80" stroke="${lamp}" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>
      </g>`;
  },
};
