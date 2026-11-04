const g = require('../src/parts/garment');

const body = 'M20 18 L76 18 L83.5 73 Q84 76.5 80.5 77 L56.5 79.5 Q53 79.8 52.5 76.5 L48.6 52 L47.4 52 L43.5 76.5 Q43 79.8 39.5 79.5 L15.5 77 Q12 76.5 12.5 73 Z';

module.exports = {
  id: 'shorts',
  name: 'Shorts',
  emoji: '🩳',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['shorts', 'summer', 'swim', 'beach', 'board shorts'],
  tone: 'orange',
  body,
  shine: [23, 31, -80],
  shineSize: [6, 2.2],
  draw(c) {
    const cloth = c.radial('a', 'orange', 0.3, 0.2);
    const band = c.linear('band', 'orange', [0, 0, 0, 1], 1, 2);
    const o = c.ramp('orange');
    return `<path d="${body}" fill="${cloth}"/>
      <path d="M20 18 L76 18 L77 27 L19 27 Z" fill="${band}"/>
      ${g.fold('M23 21 L23 26 M29 21 L29 26 M35 21 L35 26 M61 21 L61 26 M67 21 L67 26 M73 21 L73 26', o[3], 0.4, 1.2)}
      <path d="M19 27 L77 27" stroke="${o[3]}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M18 30 L13 73 L17.5 73.5 L22.5 30 Z M78 30 L83 73 L78.5 73.5 L73.5 30 Z" fill="#fff" opacity=".85"/>
      ${g.fold('M48 27 L48 50', o[3], 0.5, 1.3)}
      ${g.tube(c, 'M45 22 Q41 32 38 36 M51 22 Q55 32 58 36', { width: 2, palette: 'white', name: 'cord', box: [38, 22, 58, 36] })}
      <circle cx="45" cy="22.5" r="1.4" fill="${o[3]}" opacity=".7"/><circle cx="51" cy="22.5" r="1.4" fill="${o[3]}" opacity=".7"/>
      ${g.fold('M30 50 Q33 60 30 70 M64 50 Q61 60 66 70', o[3], 0.3, 1.6)}`;
  },
};
