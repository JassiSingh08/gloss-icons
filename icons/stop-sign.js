const g = require('../src/parts/glyph');
const oct = (R, cx = 48, cy = 46) => 'M' + Array.from({ length: 8 }, (_, i) => {
  const t = ((22.5 + i * 45) * Math.PI) / 180;
  return `${(cx + R * Math.cos(t)).toFixed(2)} ${(cy + R * Math.sin(t)).toFixed(2)}`;
}).join(' L') + ' Z';
const body = oct(37);
module.exports = {
  id: 'stop-sign',
  name: 'Stop Sign',
  emoji: '🛑',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['stop', 'halt', 'warning', 'road sign', 'wait'],
  tone: 'red',
  body,
  shine: [28, 24, -45],
  shineSize: [6, 2.6],
  draw(c) {
    const paint = c.radial('a', 'red', 0.32, 0.25);
    const pole = c.linear('pole', 'silver', [0, 0, 1, 0], 0, 3);
    return `<rect x="44.5" y="78" width="7" height="7" fill="${pole}"/>
      <path d="${body}" fill="${paint}"/>
      <path d="${oct(32)}" fill="none" stroke="#fff" stroke-width="2.8" stroke-linejoin="round"/>
      ${g.draw('STOP', { x: 48, y: 46, size: 17, maxWidth: 50, color: '#fff', shadow: '#3D0003' })}`;
  },
};
