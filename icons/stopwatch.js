const clock = require('../src/parts/clock');

const body = 'M48 24 A29 29 0 1 1 47.99 24 Z';
module.exports = {
  id: 'stopwatch',
  name: 'Stopwatch',
  emoji: '⏱️',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['stopwatch', 'timer', 'race', 'speed', 'lap'],
  tone: 'silver',
  body,
  shine: [32, 33, -40],
  draw(c) {
    const steel = c.linear('steel', 'silver', [0, 0, 1, 0], 0, 2);
    const edge = 'stroke="#3A3E52" stroke-opacity=".6" stroke-width="1.1"';
    const hand = clock.hand(48, 53, 64, 19, 3.2);
    return `<rect x="44" y="16" width="8" height="10" fill="${steel}" ${edge}/>
      <rect x="39" y="9.5" width="18" height="7.5" rx="3" fill="${c.linear('btn', 'red', [0, 0, 0, 1], 0, 2)}" stroke="#3D0003" stroke-opacity=".6" stroke-width="1.1"/>
      <rect x="69" y="23" width="7" height="9" rx="2" fill="${steel}" ${edge} transform="rotate(45 72.5 27.5)"/>
      <path d="${body}" fill="${c.radial('a', 'silver', 0.3, 0.22)}"/>
      ${clock.dial(c, { cx: 48, cy: 53, r: 23.5, showHands: false })}
      <path d="${hand}" fill="#E3120B"/>
      <circle cx="48" cy="53" r="2.8" fill="${c.radial('pin', 'red', 0.35, 0.3)}" stroke="#3D0003" stroke-opacity=".6" stroke-width=".8"/>`;
  },
};
