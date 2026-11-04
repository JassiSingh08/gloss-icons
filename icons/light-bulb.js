const p = require('../src/parts/paper');
const body = 'M48 10 C64 10 75 22 75 37 C75 48 68 54 64 60 C61.5 64 61 66 61 69 L35 69 C35 66 34.5 64 32 60 C28 54 21 48 21 37 C21 22 32 10 48 10 Z';
module.exports = {
  id: 'light-bulb',
  name: 'Light Bulb',
  emoji: '💡',
  group: 'Objects',
  subgroup: 'light & video',
  tags: ['idea', 'light', 'bright', 'think', 'eureka'],
  tone: 'yellow',
  body,
  shine: [32, 22, -45],
  draw(c) {
    const y = c.ramp('yellow');
    const s = c.ramp('silver');
    return `<circle cx="48" cy="38" r="26" fill="#FFD82E" opacity=".35" filter="url(#${c.id('b5')})"/>
      <path d="M36 69 L60 69 L60 79 Q60 81 58 81 L38 81 Q36 81 36 79 Z" fill="${c.linear('base', 'silver', [0, 0, 1, 0], 0, 2)}" stroke="${s[3]}" stroke-opacity=".6" stroke-width="1.1"/>
      ${p.line('M36.5 72.5 L59.5 71 M36.5 76.5 L59.5 75', s[3], 1.3, 0.55)}
      <path d="M42 81 L54 81 Q53 86 48 86 Q43 86 42 81 Z" fill="#3A3E52"/>
      <path d="${body}" fill="${c.radial('a', 'yellow', 0.38, 0.3)}"/>
      <path d="M43 68 L42 50 L39 44 M53 68 L54 50 L57 44" stroke="${y[3]}" stroke-opacity=".55" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="M39 44 L42 40 L45 44 L48 40 L51 44 L54 40 L57 44" stroke="#E02A00" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M39 44 L42 40 L45 44 L48 40 L51 44 L54 40 L57 44" stroke="#FFF7A8" stroke-width=".8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  },
};
