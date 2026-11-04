const body = 'M19 11 L77 11 Q83 11 83 17 L83 84 L13 84 L13 17 Q13 11 19 11 Z';
module.exports = {
  id: 'elevator',
  name: 'Elevator',
  emoji: '🛗',
  group: 'Objects',
  subgroup: 'household',
  tags: ['elevator', 'lift', 'floor', 'up', 'down'],
  tone: 'slate',
  body,
  shine: [20, 17, -35],
  shineSize: [5, 2],
  draw(c) {
    const frame = c.linear('a', 'slate', [0, 0, 1, 1], 0, 2);
    const door = c.linear('d', 'silver', [0, 0, 1, 0], 0, 2);
    const lit = c.radial('l', 'gold', 0.4, 0.4);
    return `<path d="${body}" fill="${frame}"/>
      <rect x="31" y="15" width="34" height="13" rx="4" fill="#1E2A3D"/>
      <path d="M40.5 25 L44.5 18.5 L48.5 25 Z" fill="${lit}"/>
      <path d="M51.5 18.5 L59.5 18.5 L55.5 25 Z" fill="#8DA0BA" opacity=".6"/>
      <rect x="20" y="33" width="56" height="51" fill="#1E2A3D"/>
      <rect x="22" y="35" width="25.4" height="49" fill="${door}"/>
      <rect x="48.6" y="35" width="25.4" height="49" fill="${door}"/>
      <path d="M26 39 L26 80 M52.6 39 L52.6 80" stroke="#fff" stroke-opacity=".7" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M47.4 35 L47.4 84 M48.6 35 L48.6 84" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1"/>`;
  },
};
