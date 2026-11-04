const clock = require('../src/parts/clock');

const body = 'M48 22 A30 30 0 1 1 47.99 22 Z';
module.exports = {
  id: 'timer-clock',
  name: 'Timer Clock',
  emoji: '⏲️',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['timer', 'kitchen', 'countdown', 'cooking', 'time'],
  tone: 'teal',
  body,
  shine: [32, 31, -40],
  draw(c) {
    const r = 23;
    const [ex, ey] = clock.at(48, 52, 110, r - 1);
    return `<rect x="41" y="13" width="14" height="11" rx="3.5" fill="${c.linear('knob', 'teal', [0, 0, 1, 0], 0, 2)}" stroke="#003A33" stroke-opacity=".6" stroke-width="1.1"/>
      <path d="${body}" fill="${c.radial('a', 'teal', 0.3, 0.22)}"/>
      ${clock.face(c, 48, 52, r)}
      <path d="M48 52 L48 ${52 - r + 1} A${r - 1} ${r - 1} 0 0 1 ${ex} ${ey} Z" fill="#FF7A62" opacity=".55"/>
      ${clock.ticks(48, 52, r)}
      <path d="${clock.hand(48, 52, 110, r * 0.78, 3.6)}" fill="${clock.INK}"/>
      <circle cx="48" cy="52" r="2.8" fill="${c.radial('pin', 'gold', 0.35, 0.3)}" stroke="#5E3A00" stroke-opacity=".6" stroke-width=".8"/>`;
  },
};
