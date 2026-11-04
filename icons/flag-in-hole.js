const body = 'M9 73 C9 64 28 60 48 60 C68 60 87 64 87 73 C87 80 68 84 48 84 C28 84 9 80 9 73 Z';
module.exports = {
  id: 'flag-in-hole',
  name: 'Flag in Hole',
  emoji: '⛳',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['golf', 'hole', 'green', 'putt', 'flag'],
  tone: 'green',
  body,
  shine: [24, 66, -10],
  shineSize: [6, 1.8],
  draw(c) {
    const flag = c.linear('flag', 'red', [0, 0, 1, 1], 0, 2);
    const pole = c.linear('pole', 'silver', [0, 0, 1, 0], 0, 3);
    return `<path d="${body}" fill="${c.radial('a', 'green', 0.35, 0.15)}"/>
      <ellipse cx="57" cy="72" rx="7.5" ry="2.8" fill="#053A1A"/>
      <path d="M54 10 L57.5 10 L57.5 72.5 Q55.75 73.5 54 72.5 Z" fill="${pole}"/>
      <path d="M57.5 11 C64 9 70 15 82 13 L80 20 L82 27 C70 29 64 23 57.5 25 Z" fill="${flag}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M59 13.5 C64 12 69 16.5 78 15.6" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="33" cy="69" r="5" fill="${c.radial('ball', 'white', 0.3, 0.25)}" stroke="#8C83AD" stroke-opacity=".6" stroke-width=".9"/>
      <ellipse cx="31.4" cy="67.3" rx="1.6" ry=".9" fill="#fff" transform="rotate(-40 31.4 67.3)"/>`;
  },
};
