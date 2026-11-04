const m = require('../src/parts/metal');
const T = m.frame({ at: [50, 38], deg: -30, s: 1 });
const tube = 'M-30 -5.5 L22 -9.5 L22 9.5 L-30 5.5 Z';
module.exports = {
  id: 'telescope',
  name: 'Telescope',
  emoji: '🔭',
  group: 'Objects',
  subgroup: 'science',
  tags: ['telescope', 'stars', 'astronomy', 'space', 'discover'],
  tone: 'navy',
  body: T.d(tube),
  shine: [36, 39, -30],
  shineSize: [6, 1.8],
  draw(c) {
    const paint = m.cyl(c, 'a', 'navy', T.p([-30, 0]), T.p([22, 0]), 19);
    const gold = m.cyl(c, 'g', 'brass', T.p([-30, 0]), T.p([22, 0]), 22);
    const eye = m.cyl(c, 'e', 'brass', T.p([-38, 0]), T.p([-30, 0]), 8);
    const leg = (x) => m.part(m.bar([50, 50], [x, 84], 4.2, 1.5), m.cyl(c, `l${x}`, 'wood', [50, 50], [x, 84], 4.2), 'wood');
    const lens = T.p([27, 0]);
    return `${leg(28)}${leg(72)}${leg(52)}
      ${m.part(T.d(m.round([[-38, -3], [-29, -3.5], [-29, 3.5], [-38, 3]], 1)), eye, 'brass')}
      <path d="${T.d(tube)}" fill="${paint}"/>
      ${m.part(T.d(m.round([[20, -11.5], [30, -12], [30, 12], [20, 11.5]], 2)), gold, 'brass')}
      <ellipse cx="${lens[0].toFixed(2)}" cy="${lens[1].toFixed(2)}" rx="3.2" ry="10" transform="rotate(-30 ${lens[0].toFixed(2)} ${lens[1].toFixed(2)})" fill="#C9ECFF" opacity=".55"/>
      ${m.part(T.d(m.round([[-12, -7.5], [-6, -8], [-6, 8], [-12, 7.5]], 1)), gold, 'brass')}
      ${m.part(m.round([[45, 46], [55, 46], [55, 53], [45, 53]], 2), c.radial('m', 'black', 0.3, 0.3), 'black')}`;
  },
};
