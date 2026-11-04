const g = require('../src/parts/glass');
const body = 'M12 81 C17 67 30 57 44 58 C54 59 60 66 67 64 C74 62 80 70 84 81 Q84.5 84 81.5 84 L14.5 84 Q11.5 84 12 81 Z';
module.exports = {
  id: 'desert',
  name: 'Desert',
  emoji: '🏜️',
  group: 'Travel & Places',
  subgroup: 'place-geographic',
  tags: ['desert', 'dunes', 'cactus', 'hot', 'sahara'],
  tone: 'amber',
  body,
  shine: [25, 66, -35],
  shineSize: [5, 1.8],
  draw(c) {
    const dune = c.radial('a', 'amber', 0.35, 0.1);
    const cactus = c.linear('cactus', 'green', [0, 0, 1, 0], 0, 2);
    const sun = c.radial('sun', 'orange', 0.4, 0.35);
    const ink = c.ramp('green')[3];
    const cac = 'M33 60 L33 26 Q33 21 37.5 21 Q42 21 42 26 L42 42 L46 42 L46 33 Q46 30 49 30 Q52 30 52 33 L52 44 Q52 49 47 49 L42 49 L42 60 Z M33 50 L28 50 Q23 50 23 45 L23 37 Q23 34 26 34 Q29 34 29 37 L29 44 L33 44 Z';
    return `<circle cx="68" cy="27" r="11" fill="${sun}" ${g.edge('#6B0F00', 1.1, 0.5)}/>
      <path d="${cac}" fill="${cactus}" ${g.edge(ink, 1.2, 0.55)}/>
      <path d="M35.5 26 L35.5 56 M48.5 34 L48.5 45 M25.5 38 L25.5 46" stroke="#A6F07A" stroke-opacity=".75" stroke-width="1.3" stroke-linecap="round"/>
      <path d="${body}" fill="${dune}"/>
      <path d="M44 58 C54 59 60 66 67 64 C62 72 54 78 46 84 L80 84 C70 76 52 72 44 58 Z" fill="#B85F00" opacity=".35"/>
      <path d="M20 72 C26 66 32 63 38 62" fill="none" stroke="#FFF7DA" stroke-opacity=".7" stroke-width="1.5" stroke-linecap="round"/>`;
  },
};
