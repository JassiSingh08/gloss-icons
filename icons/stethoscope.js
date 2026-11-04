const m = require('../src/parts/metal');
const body = 'M69 44 A13 13 0 1 1 68.99 44 Z';
module.exports = {
  id: 'stethoscope',
  name: 'Stethoscope',
  emoji: '🩺',
  group: 'Objects',
  subgroup: 'medical',
  tags: ['stethoscope', 'doctor', 'health', 'checkup', 'heartbeat'],
  tone: 'silver',
  body,
  shine: [63, 49, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const disc = c.radial('a', 'silver', 0.3, 0.25);
    const face = c.radial('f', 'slate', 0.65, 0.7);
    const tip = c.radial('t', 'black', 0.3, 0.3);
    return `${m.tube(c, 'M26 14 C22 30 24 40 36 46 M50 14 C54 30 52 40 40 46', { width: 3.6, palette: 'silver', name: 'y' })}
      ${m.tube(c, 'M38 46 C38 66 28 82 44 82 C58 82 64 76 66 70', { width: 6.4, palette: 'navy', name: 't' })}
      <circle cx="26.5" cy="12.5" r="4" fill="${tip}"/><circle cx="49.5" cy="12.5" r="4" fill="${tip}"/>
      <path d="${body}" fill="${disc}"/>
      <circle cx="69" cy="57" r="8.4" fill="${face}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M64 53 A6 6 0 0 1 69.5 50.6" stroke="#fff" stroke-opacity=".6" stroke-width="1.3" fill="none" stroke-linecap="round"/>`;
  },
};
