const s = require('../src/parts/skin');
const F = require('../src/parts/figure');

// Two bare footprints, left and right, a stride apart.
function foot(x, y, side, rot) {
  const t = (dx, dy) => [x + dx * side, y + dy];
  const sole = s.union([s.ellipse(...t(0.5, 12), 6.2, 7.5), s.ellipse(...t(-1, -3), 8.2, 10), s.capsule(t(0.5, 12), t(-1, -2), 10.5, 14)]);
  const toes = [[-6.5, -16.5, 3.6], [-0.5, -18.5, 2.9], [4.2, -17, 2.6], [7.8, -14.2, 2.3], [10.3, -10.5, 2]]
    .map(([dx, dy, r]) => `M${t(dx, dy)[0] + r} ${t(dx, dy)[1]} A${r} ${r * 1.15} 0 1 0 ${t(dx, dy)[0] + r - 0.01} ${t(dx, dy)[1]} Z`).join(' ');
  return `<g transform="rotate(${rot} ${x} ${y}) translate(${x} ${y}) scale(1.15) translate(${-x} ${-y})"><path d="${sole} ${toes}" fill="FILL" stroke="${s.EDGE}" stroke-opacity=".5" stroke-width="1.1"/></g>`;
}
module.exports = {
  id: 'footprints',
  name: 'Footprints',
  emoji: '👣',
  group: 'People & Body',
  subgroup: 'person-symbol',
  tags: ['footprints', 'steps', 'walk', 'barefoot', 'trail'],
  tone: 'yellow',
  shine: [26, 50, -70], shineSize: [4, 1.8],
  ...F.build((c) => ({ art: (foot(31, 60, 1, -12) + foot(63, 36, -1, 12)).replaceAll('FILL', s.fill(c)) })),
};
