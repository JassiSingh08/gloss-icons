// A glass tube on a round bulb, mercury up to two-thirds.
const body = 'M39 20 A9 9 0 0 1 57 20 L57 56.9 A15.5 15.5 0 1 1 39 56.9 Z';
module.exports = {
  id: 'thermometer',
  name: 'Thermometer',
  emoji: '🌡️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['temperature', 'weather', 'hot', 'fever', 'heat'],
  tone: 'silver',
  body,
  shine: [43.5, 20, -70],
  shineSize: [4.5, 1.8],
  draw(c) {
    const glass = c.linear('a', 'white', [0, 0, 1, 0.3], 0, 2);
    const red = c.radial('bulb', 'red', 0.35, 0.3);
    const col = c.linear('col', 'red', [0, 0, 1, 0], 0, 2);
    const ticks = [22, 29, 36, 43, 50].map((y, i) => `M${i % 2 ? 60 : 58.5} ${y} L63 ${y}`).join(' ');
    return `<path d="${body}" fill="${glass}"/>
      <path d="M43.6 34 A4.4 4.4 0 0 1 52.4 34 L52.4 62 L43.6 62 Z" fill="${col}"/>
      <circle cx="48" cy="69" r="11.2" fill="${red}"/>
      <ellipse cx="43.5" cy="64.5" rx="3.6" ry="2.3" fill="#fff" opacity=".7" transform="rotate(-35 43.5 64.5)"/>
      <path d="${ticks}" stroke="#D9DCE8" stroke-width="2" stroke-linecap="round"/>`;
  },
};
