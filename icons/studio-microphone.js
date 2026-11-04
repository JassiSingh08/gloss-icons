const d = require('../src/parts/device');

const body = d.rr(32, 9, 32, 49, 16);

module.exports = {
  id: 'studio-microphone',
  name: 'Studio Microphone',
  emoji: '🎙️',
  group: 'Objects',
  subgroup: 'music',
  tags: ['podcast', 'recording', 'studio', 'microphone', 'broadcast'],
  tone: 'silver',
  body,
  shine: [37.5, 20, -60],
  shineSize: [5, 2.2],
  draw(c) {
    const cap = c.radial('a', 'silver', 0.3, 0.2);
    const band = c.linear('band', 'gold', [0, 0, 1, 0], 0, 2);
    const arm = c.linear('arm', 'slate', [0, 0, 1, 0], 1, 3);
    const foot = c.linear('foot', 'slate', [0, 0, 0, 1], 0, 2);
    c.def(`<clipPath id="${c.id('cap')}"><path d="${body}"/></clipPath>`);
    let slots = '';
    for (let y = 15; y < 56; y += 4) if (y < 31 || y > 39) slots += `M30 ${y} L66 ${y} `;
    return `<path d="M48 58 L48 76" stroke="#1E2A3D" stroke-width="6" stroke-linecap="round"/>
      <path d="M48 58 L48 76" stroke="${arm}" stroke-width="4" stroke-linecap="round"/>
      <path d="M26 29 L26 43 C26 63 70 63 70 43 L70 29" fill="none" stroke="#1E2A3D" stroke-width="6" stroke-linecap="round"/>
      <path d="M26 29 L26 43 C26 63 70 63 70 43 L70 29" fill="none" stroke="${arm}" stroke-width="4" stroke-linecap="round"/>
      <path d="M28 76 Q28 74 31 74 L65 74 Q68 74 68 76 L68 79 Q68 83 64 83 L32 83 Q28 83 28 79 Z" fill="${foot}" stroke="#1E2A3D" stroke-opacity=".6" stroke-width="1"/>
      <path d="${body}" fill="${cap}"/>
      <g clip-path="url(#${c.id('cap')})">
        <path d="${slots}" stroke="#3A3E52" stroke-opacity=".45" stroke-width="1.7"/>
        <rect x="30" y="31.5" width="36" height="7" fill="${band}"/>
        <path d="M30 31.5 L66 31.5 M30 38.5 L66 38.5" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1"/>
      </g>
      <circle cx="26" cy="35" r="3.4" fill="${arm}" stroke="#1E2A3D" stroke-width="1"/>
      <circle cx="70" cy="35" r="3.4" fill="${arm}" stroke="#1E2A3D" stroke-width="1"/>`;
  },
};
