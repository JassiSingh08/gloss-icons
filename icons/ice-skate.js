const body = 'M27 12 L50 12 Q54 12 54.5 16 L56 44 Q60 49 72 51 Q84 53.5 84 63 L84 67 Q84 70 81 70 L24 70 Q21 70 21 67 L22.5 17 Q23 12 27 12 Z';
module.exports = {
  id: 'ice-skate',
  name: 'Ice Skate',
  emoji: '⛸️',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['skating', 'ice', 'rink', 'winter', 'figure skating'],
  tone: 'white',
  body,
  shine: [28, 24, -80],
  shineSize: [6, 2.2],
  draw(c) {
    const boot = c.linear('a', 'white', [0, 0, 1, 1], 0, 2);
    const blade = c.linear('blade', 'silver', [0, 0, 0, 1], 0, 3);
    const lace = '#5BC2FF';
    return `<path d="M30 70 L30 76 M46 70 L46 76 M72 70 L72 76" stroke="${c.ramp('silver')[2]}" stroke-width="4"/>
      <path d="M16 75 L80 75 C87 75 90 78 89 81 C88 83.5 85 84 82 84 L16 84 Q14 84 14 82 L14 77 Q14 75 16 75 Z" fill="${blade}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1"/>
      <path d="${body}" fill="${boot}"/>
      <path d="M21 64 L84 64 L84 67 Q84 70 81 70 L24 70 Q21 70 21 67 Z" fill="#D8D2EE"/>
      <path d="M22.6 12.5 Q23 12 27 12 L50 12 Q54 12 54.3 16 L54.4 18 L22.6 18 Z" fill="#D8D2EE"/>
      <path d="M50 20 L58 24 M50 27 L58 31 M50 34 L58 38 M50 41 L60 45 M58 20 L50 24 M58 27 L50 31 M58 34 L50 38 M60 41 L52 45" stroke="${lace}" stroke-width="1.8" stroke-linecap="round"/>`;
  },
};
