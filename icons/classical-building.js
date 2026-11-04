const body = 'M16 84 Q12 84 12 82 L12 78 L15 78 L15 74 L18 74 L18 41 L15 41 L15 34 L13 34 Q10.5 33 13 31 L45.5 15.2 Q48 14 50.5 15.2 L83 31 Q85.5 33 83 34 L81 34 L81 41 L78 41 L78 74 L81 74 L81 78 L84 78 L84 82 Q84 84 80 84 Z';
module.exports = {
  id: 'classical-building',
  name: 'Classical Building',
  emoji: '🏛️',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['museum', 'temple', 'columns', 'ancient', 'marble'],
  tone: 'white',
  body,
  shine: [27, 27, -26],
  draw(c) {
    const marble = c.linear('a', 'white', [0, 0, 1, 1], 0, 2);
    const ped = c.linear('ped', 'white', [0, 0, 0, 1], 0, 1);
    const col = c.linear('col', 'white', [0, 0, 1, 0], 0, 3);
    const shade = c.linear('shade', 'ivory', [0, 0, 0, 1], 2, 3);
    const cols = [0, 1, 2, 3, 4].map((i) => {
      const x = 20.5 + i * 12;
      return `<path d="M${x} 44 L${x + 7} 44 L${x + 7} 72 L${x} 72 Z" fill="${col}"/>
        <path d="M${x + 2.4} 46 L${x + 2.4} 70 M${x + 4.8} 46 L${x + 4.8} 70" stroke="#8C83AD" stroke-opacity=".45" stroke-width=".9"/>
        <rect x="${x - 1.5}" y="41" width="10" height="3.4" rx="1" fill="#F7F5FF"/>
        <rect x="${x - 1.2}" y="71" width="9.4" height="3" rx=".8" fill="#E8E4F7"/>`;
    }).join('');
    return `<path d="${body}" fill="${marble}"/>
      <path d="M18 41 L78 41 L78 74 L18 74 Z" fill="${shade}" opacity=".85"/>
      <path d="M15 34 L81 34 L81 41 L15 41 Z" fill="${c.linear('ent', 'white', [0, 0, 0, 1], 1, 2)}"/>
      <path d="M13 31 L45.5 15.2 Q48 14 50.5 15.2 L83 31 Q85.5 33 83 34 L13 34 Q10.5 33 13 31 Z" fill="${ped}"/>
      <path d="M22 31 L48 18.5 L74 31 Z" fill="#D8D2EE" opacity=".8"/>
      <path d="M15 37.5 L81 37.5" stroke="#8C83AD" stroke-opacity=".45" stroke-width="1"/>
      ${cols}
      <path d="M15 74 L81 74 L81 78 L15 78 Z" fill="#E8E4F7"/>
      <path d="M12 78 L84 78" stroke="#8C83AD" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
