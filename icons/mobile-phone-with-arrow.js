const d = require('../src/parts/device');

const DX = 13;
const arrow = 'M14 42 L41 42 L41 34.5 Q41 31.5 43.5 33.3 L58.5 45.3 Q60.5 47 58.5 48.7 L43.5 60.7 Q41 62.5 41 59.5 L41 52 L14 52 Q12 52 12 50 L12 44 Q12 42 14 42 Z';

module.exports = {
  id: 'mobile-phone-with-arrow',
  name: 'Mobile Phone With Arrow',
  emoji: '📲',
  group: 'Objects',
  subgroup: 'phone',
  tags: ['incoming', 'send', 'download', 'phone', 'call me'],
  tone: 'navy',
  body: d.phoneBody(DX),
  shine: [31.5 + DX, 24, -80],
  shineSize: [5.5, 2],
  draw(c) {
    const tip = c.linear('tip', 'teal', [0, 0, 0.4, 1], 0, 2);
    return `${d.phone(c, DX)}
      <circle cx="${48 + DX}" cy="47" r="10" fill="none" stroke="#3D4FD6" stroke-opacity=".6" stroke-width="3"/>
      <path d="M${48 + DX} 37 A10 10 0 0 1 ${58 + DX} 47" fill="none" stroke="#9BF5E6" stroke-width="3" stroke-linecap="round"/>
      <path d="M${38 + DX} 67 L${58 + DX} 67" stroke="#9AA8FF" stroke-opacity=".45" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M${41.5 + DX} 72.5 L${54.5 + DX} 72.5" stroke="#9AA8FF" stroke-opacity=".3" stroke-width="2.4" stroke-linecap="round"/>
      <path d="${arrow}" fill="${tip}" stroke="#003A33" stroke-opacity=".7" stroke-width="1.3"/>
      <path d="M16 44.5 L39 44.5" stroke="#fff" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round"/>`;
  },
};
