const clock = require('../src/parts/clock');

const body = 'M48 25 A28 28 0 1 1 47.99 25 Z';
// A bell dome, crown up, centred on (x, y) and tilted outward.
const bell = (x, y, rot) => `M${x - 11} ${y + 4} C${x - 11} ${y - 7} ${x - 5} ${y - 11} ${x} ${y - 11} C${x + 5} ${y - 11} ${x + 11} ${y - 7} ${x + 11} ${y + 4} Z" transform="rotate(${rot} ${x} ${y})`;
module.exports = {
  id: 'alarm-clock',
  name: 'Alarm Clock',
  emoji: '⏰',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['alarm', 'clock', 'wake up', 'morning', 'time'],
  tone: 'red',
  body,
  shine: [32, 34, -40],
  draw(c) {
    const brass = c.radial('bell', 'gold', 0.35, 0.25);
    const edge = 'stroke="#5E3A00" stroke-opacity=".55" stroke-width="1.1"';
    const leg = c.linear('leg', 'gold', [0, 0, 1, 0], 1, 3);
    return `<path d="M38 18 L48 13 L58 18" stroke="#5E3A00" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="48" cy="12.5" r="3.4" fill="${brass}" ${edge}/>
      <path d="${bell(25, 23, -38)}" fill="${brass}" ${edge}/>
      <path d="${bell(71, 23, 38)}" fill="${brass}" ${edge}/>
      <path d="M31 74 L24 84 M65 74 L72 84" stroke="#5E3A00" stroke-width="6.4" stroke-linecap="round"/>
      <path d="M31 74 L24 84 M65 74 L72 84" stroke="${leg}" stroke-width="4.4" stroke-linecap="round"/>
      <path d="${body}" fill="${c.radial('a', 'red', 0.3, 0.22)}"/>
      ${clock.dial(c, { cx: 48, cy: 53, r: 21.5, h: 7, m: 0 })}`;
  },
};
