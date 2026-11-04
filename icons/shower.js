const m = require('../src/parts/metal');
const body = 'M46 25 L62 25 Q64 25 65 27 L74 43 Q76 48 70 48 L38 48 Q32 48 34 43 L43 27 Q44 25 46 25 Z';
module.exports = {
  id: 'shower',
  name: 'Shower',
  emoji: '🚿',
  group: 'Objects',
  subgroup: 'household',
  tags: ['shower', 'wash', 'bathroom', 'clean', 'water'],
  tone: 'silver',
  body,
  shine: [46, 31, -60],
  shineSize: [4.5, 1.8],
  draw(c) {
    const chrome = m.band(c, 'a', 'steel', [34, 30], [74, 46]);
    const drop = c.radial('d', 'sky', 0.35, 0.3);
    const d = (x, y, s) => `<path d="M${x} ${y} C${x + 2.2 * s} ${y + 4 * s} ${x + 3 * s} ${y + 6 * s} ${x + 3 * s} ${y + 7.5 * s} A${3 * s} ${3 * s} 0 0 1 ${x - 3 * s} ${y + 7.5 * s} C${x - 3 * s} ${y + 6 * s} ${x - 2.2 * s} ${y + 4 * s} ${x} ${y} Z" fill="${drop}" stroke="#0A3A6B" stroke-opacity=".5" stroke-width="1"/>`;
    return `${m.tube(c, 'M18 84 L18 18 Q18 12 24 12 L48 12 Q54 12 54 18 L54 25', { width: 6, palette: 'silver', name: 'p' })}
      <path d="${body}" fill="${chrome}"/>
      <path d="M36 47 L72 47" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1.4"/>
      <path d="M41 46 L41.6 46 M47 46 L47.6 46 M53 46 L53.6 46 M59 46 L59.6 46 M65 46 L65.6 46" stroke="#3A3E52" stroke-width="1.6" stroke-linecap="round"/>
      ${d(38, 54, 1.1)}${d(54, 52, 1.2)}${d(68, 55, 1.1)}${d(46, 68, 1.15)}${d(62, 69, 1.15)}${d(38, 78, 0.8)}${d(72, 78, 0.8)}`;
  },
};
