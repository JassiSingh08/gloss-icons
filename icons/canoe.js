const v = require('../src/parts/vehicle');
const body = 'M8 49 Q10 47 13 49.5 Q30 59 48 59 Q66 59 83 49.5 Q86 47 88 49 Q87 60 76 67 Q63 72 48 72 Q33 72 20 67 Q9 60 8 49 Z';
module.exports = {
  id: 'canoe',
  name: 'Canoe',
  emoji: '🛶',
  group: 'Travel & Places',
  subgroup: 'transport-water',
  tags: ['paddle', 'kayak', 'lake', 'river', 'outdoors'],
  tone: 'ember',
  body,
  shine: [17, 56, 25],
  shineSize: [5, 1.8],
  draw(c) {
    const paint = c.linear('a', 'ember', [0, 0, 0, 1], 0, 2);
    const inside = c.linear('in', 'brown', [0, 0, 0, 1], 0, 2);
    const wood = c.linear('wood', 'cream', [0, 0, 1, 1], 1, 3);
    const paddle = (x, y, deg) => `<g transform="translate(${x} ${y}) rotate(${deg})">
        <rect x="-1.6" y="-26" width="3.2" height="40" rx="1.6" fill="${wood}" stroke="#5C4420" stroke-opacity=".6" stroke-width="1"/>
        <path d="M0 -24 Q6 -24 6 -16 L6 -4 Q6 2 0 4 Q-6 2 -6 -4 L-6 -16 Q-6 -24 0 -24 Z" fill="${wood}" stroke="#5C4420" stroke-opacity=".6" stroke-width="1.2" transform="translate(0 -14)"/>
      </g>`;
    return `<path d="${body}" fill="${paint}"/>
      <path d="M13 49.5 Q30 59 48 59 Q66 59 83 49.5 Q66 63.5 48 63.5 Q30 63.5 13 49.5 Z" fill="${inside}"/>
      <path d="M32 56.5 L33 62 M64 56.5 L63 62" stroke="#E0B472" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M12 52 Q30 64 48 64 Q66 64 84 52" stroke="#FFF7A8" stroke-opacity=".7" stroke-width="1.6" fill="none"/>
      ${paddle(46, 52, 62)}
      ${v.water(c, 70)}`;
  },
};
