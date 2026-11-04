const d = require('../src/parts/device');

const ANGLE = -40;
const AT = [48, 50];
const body = d.turn(d.HANDSET, ANGLE, AT, 0.98);

module.exports = {
  id: 'telephone-receiver',
  name: 'Telephone Receiver',
  emoji: '📞',
  group: 'Objects',
  subgroup: 'phone',
  tags: ['call', 'phone', 'handset', 'ring', 'call me'],
  tone: 'red',
  body,
  shine: [...d.pt(-28, -12, ANGLE, AT, 0.98), ANGLE - 8],
  shineSize: [6, 2.2],
  draw(c) {
    const shell = c.radial('a', 'red', 0.3, 0.2);
    return `<path d="${body}" fill="${shell}"/>
      <path d="${d.turn('M-40 -3 C-38 -12 -26 -14 0 -14', ANGLE, AT, 0.98)}" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="1.4" stroke-linecap="round"/>
      <path d="${d.turn('M-41 6 L-21 6 M21 6 L41 6', ANGLE, AT, 0.98)}" stroke="#3D0003" stroke-opacity=".4" stroke-width="2" stroke-linecap="round"/>`;
  },
};
