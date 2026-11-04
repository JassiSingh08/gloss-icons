const a = require('../src/parts/animal');

// The coat of spines is the silhouette: points fanned over a dome.
const spines = [];
for (let i = 0; i <= 22; i++) {
  const t = Math.PI * (1.04 + (i / 22) * 0.98);
  const r = i % 2 ? 0.87 : 1;
  spines.push([55 + 31 * r * Math.cos(t), 76 + 40 * r * Math.sin(t), i % 2 ? 0 : 1]);
}
const body = a.spline([...spines, [84, 80], [72, 82], [52, 82], [36, 81], [26, 76]]);
module.exports = {
  id: 'hedgehog',
  name: 'Hedgehog',
  emoji: '🦔',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['hedgehog', 'spiky', 'prickly', 'garden', 'hibernate'],
  tone: 'brown',
  body,
  shine: [38, 46, -40],
  draw(c) {
    const ink = '#1F0E04';
    const face = a.spline([[34, 54], [26, 58], [16, 66], [9, 71], [8, 75], [13, 78], [24, 80], [34, 80.5], [40, 72]]);
    const quills = spines.filter((p) => p[2]).slice(1, -1).map(([x, y]) => a.taper(55 + (x - 55) * 0.55, 76 + (y - 76) * 0.55, 55 + (x - 55) * 0.92, 76 + (y - 76) * 0.92, 1.3)).join(' ');
    return `<ellipse cx="40" cy="82.5" rx="4" ry="2" fill="#5C4420"/><ellipse cx="66" cy="82.5" rx="4" ry="2" fill="#5C4420"/>
      <path d="${body}" fill="${c.radial('a', 'brown', 0.3, 0.2)}"/>
      ${a.clip(c, 'q', body, `<path d="${quills}" fill="#FFE7B8" opacity=".55"/>`)}
      ${a.part(c, 'face', face, 'cream', { cx: 0.3, cy: 0.25 })}
      <ellipse cx="9.2" cy="73" rx="2.2" ry="1.9" fill="${ink}"/>
      ${a.sideEye(21.5, 68, { r: 2.1, ink })}
      ${a.line('M11 77 Q14 78.5 17 77.5', ink, 1.2, ' opacity=".55"')}
      <ellipse cx="28" cy="71" rx="3" ry="2" fill="${a.ROSE[1]}" opacity=".45"/>`;
  },
};
