const body = 'M33 14 L41 12 L48 20 L55 12 L63 14 L84 31 L75 46 L67 40 L67 80 Q67 84 63 84 L33 84 Q29 84 29 80 L29 40 L21 46 L12 31 Z';
module.exports = {
  id: 'martial-arts-uniform',
  name: 'Martial Arts Uniform',
  emoji: '🥋',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['karate', 'judo', 'gi', 'black belt', 'dojo'],
  tone: 'white',
  body,
  shine: [26, 30, -38],
  shineSize: [6, 2.4],
  draw(c) {
    const cloth = c.linear('a', 'white', [0, 0, 1, 1], 0, 2);
    const belt = c.linear('belt', 'black', [0, 0, 0, 1], 0, 2);
    const fold = '#8C83AD';
    return `<path d="${body}" fill="${cloth}"/>
      <path d="M41 12 L48 20 L55 12 L52 11 L48 15 L44 11 Z" fill="#D8D2EE"/>
      <path d="M41 12 L58 58 L64 58 L46 12.5 Z" fill="#F4F1FF" stroke="${fold}" stroke-opacity=".6" stroke-width="1"/>
      <path d="M55 12 L38 58 L32 58 L50 12.5 Z" fill="#FFFFFF" stroke="${fold}" stroke-opacity=".6" stroke-width="1"/>
      <path d="M29 40 L29 54 M67 40 L67 54" stroke="${fold}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M29 56 L67 56 L67 64 L29 64 Z" fill="${belt}"/>
      <path d="M45 58 L36 80 L42 81 L48 63 L54 81 L60 80 L51 58 Z" fill="${belt}"/>
      <rect x="43" y="55" width="10" height="10" rx="2.5" fill="${c.linear('knot', 'black', [0, 0, 1, 1], 0, 1)}"/>
      <path d="M30 57.2 L66 57.2" stroke="#fff" stroke-opacity=".25" stroke-width="1"/>`;
  },
};
