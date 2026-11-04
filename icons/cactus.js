const L = require('../src/parts/leaf');
// A saguaro with two raised arms, ribbed and pricked with pale spines, one pink bloom on top.
const body = 'M39 84 L39 64 L29 64 C21 64 16.5 59 16.5 51 L16.5 35 C16.5 29.5 25.5 29.5 25.5 35 L25.5 50 C25.5 53.5 27 55 30.5 55 L39 55 L39 22 C39 12 57 12 57 22 L57 47 L65.5 47 C69 47 70.5 45.5 70.5 42 L70.5 29 C70.5 23.5 79.5 23.5 79.5 29 L79.5 44 C79.5 52 75 56 67 56 L57 56 L57 84 Z';
module.exports = {
  id: 'cactus',
  name: 'Cactus',
  emoji: '🌵',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['cactus', 'desert', 'succulent', 'prickly', 'dry'],
  tone: 'green',
  body,
  shine: [43, 22, -70],
  shineSize: [5, 2],
  draw(c) {
    const skin = c.radial('a', 'green', 0.3, 0.2);
    const sand = c.radial('sand', 'sand', 0.4, 0.2);
    const pink = c.radial('pink', 'pink', 0.35, 0.3);
    const g = c.ramp('green');
    const spines = [[42, 30], [53, 36], [42, 46], [53, 58], [42, 66], [53, 74], [20, 40], [21, 50], [75, 33], [75, 42], [62, 51], [34, 59]]
      .map(([x, y]) => `M${x} ${y} l-1.8 -1.8 M${x} ${y} l1.8 -1.8`).join(' ');
    return `<path d="${body}" fill="${skin}"/>
      <g stroke="${g[3]}" stroke-opacity=".35" stroke-width="1.6" stroke-linecap="round" fill="none"><path d="M48 18 L48 84"/><path d="M43.5 16 C42.5 30 42.5 60 43.5 84 M52.5 16 C53.5 30 53.5 60 52.5 84"/><path d="M21 34 L21 52 M75 28 L75 46"/></g>
      <path d="${spines}" stroke="#FFFBE0" stroke-opacity=".85" stroke-width="1.1" stroke-linecap="round"/>
      <path d="M22 84.5 C25 79 35 77 48 77 C61 77 71 79 74 84.5 Z" fill="${sand}" stroke="#5C4420" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="${L.star(48, 13.5, 6, 3, 5)}" fill="${pink}" stroke="#9E0030" stroke-opacity=".5" stroke-width="1" stroke-linejoin="round"/>
      <circle cx="48" cy="13.8" r="1.6" fill="#FFF3A6"/>`;
  },
};
