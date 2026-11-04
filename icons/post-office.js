const B = require('../src/parts/building');

const body = 'M20 84 Q16 84 16 80 L16 34 L13 34 Q11 33 12.5 30.5 L18 22 Q19.5 20 22 20 L74 20 Q76.5 20 78 22 L83.5 30.5 Q85 33 83 34 L80 34 L80 80 Q80 84 76 84 Z';
module.exports = {
  id: 'post-office',
  name: 'Post Office',
  emoji: '🏤',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['post', 'mail', 'letters', 'parcel', 'stamps'],
  tone: 'cream',
  body,
  shine: [24, 42, -20],
  draw(c) {
    const badge = c.radial('badge', 'gold', 0.35, 0.25);
    const ink = '#3D1A00';
    return `<path d="${body}" fill="${B.wall(c)}"/>
      <path d="M22 20 L74 20 Q76.5 20 78 22 L83.5 30.5 Q85 33 83 34 L13 34 Q11 33 12.5 30.5 L18 22 Q19.5 20 22 20 Z" fill="${B.roof(c)}"/>
      ${B.eave(16, 34, 64)}
      <circle cx="48" cy="49" r="11" fill="${badge}" stroke="#5E3A00" stroke-opacity=".6" stroke-width="1.2"/>
      <circle cx="44" cy="47.5" r="3.8" fill="none" stroke="${ink}" stroke-width="2.2"/>
      <path d="M44 51.3 L50.5 51.3 M44 43.7 L39 45.5" fill="none" stroke="${ink}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M50 49.8 L55.5 46.5 L55.5 56.5 L50 52.8 Z" fill="${ink}" stroke="${ink}" stroke-width="1" stroke-linejoin="round"/>
      ${B.win(c, 21, 41, 12, 13, { arch: true })}${B.win(c, 63, 41, 12, 13, { arch: true })}
      ${B.win(c, 21, 63, 12, 13, { arch: true })}${B.win(c, 63, 63, 12, 13, { arch: true })}
      ${B.door(c, 41, 63, 14, 21)}
      <path d="M48 64 L48 84" stroke="#331805" stroke-opacity=".45" stroke-width="1.1"/>`;
  },
};
