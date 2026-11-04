const g = require('../src/parts/glass');
const body = 'M33.5 12 Q33.5 10 36 10 L44 10 Q46.5 10 46.5 12 C46.5 14 44 15 44 17 L44 25 C44 35 60 45 60 63 C60 73 56 79 53 84 L27 84 C24 79 20 73 20 63 C20 45 36 35 36 25 L36 17 C36 15 33.5 14 33.5 12 Z';
module.exports = {
  id: 'sake',
  name: 'Sake',
  emoji: '🍶',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['sake', 'rice wine', 'japanese', 'bottle', 'cup'],
  tone: 'white',
  body,
  shine: [27, 54, -60],
  shineSize: [6, 2.4],
  draw(c) {
    const jug = c.radial('a', 'white', 0.3, 0.3);
    const band = c.linear('band', 'navy', [0, 0, 1, 0], 0, 2);
    const cup = c.linear('cup', 'white', [0, 0, 1, 0], 0, 3);
    const sake = c.radial('sake', 'cream', 0.4, 0.3);
    return `<path d="${body}" fill="${jug}"/>
      <path d="M30.5 41 C36 43.5 44 43.5 49.5 41 C52 43 54 45 55.2 47 C46 51 34 51 24.8 47 C26 45 28 43 30.5 41 Z" fill="${band}"/>
      <path d="M35 10.5 L45 10.5" stroke="#fff" stroke-width="1.2"/>
      <path d="M58 68 L82 68 L78.5 82 Q78 84 75.5 84 L64.5 84 Q62 84 61.5 82 Z" fill="${cup}" ${g.edge('#6E61A8', 1.2, 0.55)}/>
      <path d="${g.ellipse(70, 68, 12, 3)}" fill="#F7F5FF" ${g.edge('#6E61A8', 1, 0.5)}/>
      <path d="${g.ellipse(70, 68.5, 10, 2.2)}" fill="${sake}"/>
      <path d="M60.5 74 L62.5 81" stroke="${c.ramp('navy')[1]}" stroke-width="1.6" stroke-linecap="round"/>`;
  },
};
