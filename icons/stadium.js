const B = require('../src/parts/building');

const n = B.n;
const body = 'M12 40 A36 15 0 0 1 84 40 L84 63 A36 14 0 0 1 12 63 Z';
// Arches run round the front of the bowl, narrowing as the wall turns away.
function arches() {
  let d = '';
  for (let k = -3; k <= 3; k++) {
    const t = (k / 3.6) * (Math.PI / 2);
    const x = 48 + 36 * Math.sin(t);
    const w = 6.2 * Math.cos(t);
    const top = 40 + 15 * Math.cos(t) + 4;
    const bot = 63 + 14 * Math.cos(t) - 3;
    d += `M${n(x - w / 2)} ${n(bot)} L${n(x - w / 2)} ${n(top + w / 2)} A${n(w / 2)} ${n(w / 2)} 0 0 1 ${n(x + w / 2)} ${n(top + w / 2)} L${n(x + w / 2)} ${n(bot)} Z `;
  }
  return d;
}
module.exports = {
  id: 'stadium',
  name: 'Stadium',
  emoji: '🏟️',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['arena', 'sport', 'match', 'concert', 'crowd'],
  tone: 'silver',
  body,
  shine: [22, 52, -30],
  draw(c) {
    const wall = c.linear('a', 'silver', [0, 0, 1, 0.4], 0, 2);
    const seats = c.radial('seats', 'red', 0.3, 0.2);
    const pitch = c.linear('pitch', 'green', [0, 0, 1, 1], 0, 2);
    const mast = (x) => `<path d="M${x} 40 L${x} 15" stroke="#3A3E52" stroke-width="2.2"/>
      <rect x="${x - 6}" y="9" width="12" height="7" rx="1.6" fill="${c.linear(`lamp${x}`, 'silver', [0, 0, 0, 1], 0, 2)}" stroke="#3A3E52" stroke-opacity=".7" stroke-width="1"/>
      <path d="M${x - 3} 11 L${x - 3} 14 M${x} 11 L${x} 14 M${x + 3} 11 L${x + 3} 14" stroke="#FFF7A8" stroke-width="1.6"/>`;
    return `${mast(17)}${mast(79)}
      <path d="${body}" fill="${wall}"/>
      <ellipse cx="48" cy="40" rx="36" ry="15" fill="${seats}"/>
      <ellipse cx="48" cy="40" rx="36" ry="15" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.2"/>
      <ellipse cx="48" cy="41" rx="29" ry="11" fill="none" stroke="#3D0003" stroke-opacity=".35" stroke-width="1.2"/>
      <ellipse cx="48" cy="42" rx="22" ry="7.6" fill="${pitch}" stroke="#053A1A" stroke-opacity=".5" stroke-width="1"/>
      <path d="M48 34.6 L48 49.4" stroke="#fff" stroke-opacity=".85" stroke-width="1.1"/>
      <ellipse cx="48" cy="42" rx="4.5" ry="2" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="1.1"/>
      <path d="${arches()}" fill="${c.linear('arch', 'slate', [0, 0, 0, 1], 2, 3)}"/>
      <path d="M12 63 A36 14 0 0 0 84 63" fill="none" stroke="#3A3E52" stroke-opacity=".25" stroke-width="2"/>`;
  },
};
