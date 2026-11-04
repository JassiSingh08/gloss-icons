const p = require('../src/parts/paper');
const body = p.rr(18, 16, 60, 68, 6);
module.exports = {
  id: 'spiral-notepad',
  name: 'Spiral Notepad',
  emoji: '🗒️',
  group: 'Objects',
  subgroup: 'office',
  tags: ['notepad', 'notes', 'list', 'jot', 'memo'],
  tone: 'white',
  body,
  shine: [25, 22, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const w = c.ramp('white');
    return `<path d="${body}" fill="${c.linear('a', 'white', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M18.6 30 L77.4 30', '#E3120B', 1.2, 0.45)}
      ${p.line('M26 38 L70 38 M26 46 L70 46 M26 54 L70 54 M26 62 L70 62 M26 70 L56 70', '#3D4FD6', 1.4, 0.35)}
      ${p.spiral(c, 25, 71, 15, 8)}`;
  },
};
