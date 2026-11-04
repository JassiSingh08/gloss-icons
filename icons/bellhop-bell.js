const body = 'M21 69 C21 50 33 37 48 37 C63 37 75 50 75 69 L80 69 Q84 69 84 73 L84 78 Q84 82 80 82 L16 82 Q12 82 12 78 L12 73 Q12 69 16 69 Z';
module.exports = {
  id: 'bellhop-bell',
  name: 'Bellhop Bell',
  emoji: '🛎️',
  group: 'Travel & Places',
  subgroup: 'hotel',
  tags: ['bell', 'service', 'reception', 'hotel', 'ding'],
  tone: 'gold',
  body,
  shine: [34, 47, -40],
  draw(c) {
    const dome = c.radial('a', 'gold', 0.32, 0.22);
    const base = c.linear('base', 'brown', [0, 0, 0, 1], 1, 3);
    const chrome = c.linear('chrome', 'silver', [0, 0, 1, 0], 0, 2);
    return `<path d="M46 37 L46 28 L50 28 L50 37 Z" fill="${chrome}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1"/>
      <ellipse cx="48" cy="27" rx="7" ry="3.2" fill="${c.radial('btn', 'silver', 0.35, 0.3)}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1"/>
      <path d="${body}" fill="${dome}"/>
      <path d="M16 69 L80 69 Q84 69 84 73 L84 78 Q84 82 80 82 L16 82 Q12 82 12 78 L12 73 Q12 69 16 69 Z" fill="${base}"/>
      <path d="M19 66.5 Q48 71.5 77 66.5 L77.5 70 Q48 75 18.5 70 Z" fill="${c.linear('lip', 'gold', [0, 0, 1, 0], 0, 2)}"/>
      <path d="M16 74 L80 74" stroke="#fff" stroke-opacity=".18" stroke-width="1.2"/>`;
  },
};
