const body = 'M48 22 A30 30 0 1 1 47.99 22 Z';
// Archimedean spiral as a polyline, unwinding outward from the centre.
function spiral(cx, cy, turns, r, dir) {
  const pts = [];
  const n = Math.round(turns * 28);
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const a = dir * t * turns * Math.PI * 2;
    pts.push(`${(cx + Math.cos(a) * r * t).toFixed(2)} ${(cy + Math.sin(a) * r * t).toFixed(2)}`);
  }
  return `M${pts.join(' L')}`;
}
module.exports = {
  id: 'dizzy',
  name: 'Dizzy',
  emoji: '😵‍💫',
  group: 'Smileys & Emotion',
  subgroup: 'face-unwell',
  tags: ['dizzy', 'confused', 'spinning', 'drunk', 'woozy'],
  tone: 'yellow',
  body,
  shine: [36, 35, -35],
  draw(c) {
    const ink = '#3D1A00';
    const star = (x, y, s) => `<path d="M${x} ${y - s} L${x + s * 0.28} ${y - s * 0.28} L${x + s} ${y} L${x + s * 0.28} ${y + s * 0.28} L${x} ${y + s} L${x - s * 0.28} ${y + s * 0.28} L${x - s} ${y} L${x - s * 0.28} ${y - s * 0.28} Z" fill="${c.radial('star', 'gold', 0.4, 0.3)}"/>`;
    return `<path d="${body}" fill="${c.radial('a', 'yellow', 0.32, 0.25)}"/>
      <path d="${spiral(36.5, 45, 2.3, 8.5, 1)}" stroke="${ink}" stroke-width="2.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${spiral(59.5, 45, 2.3, 8.5, -1)}" stroke="${ink}" stroke-width="2.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <ellipse cx="50" cy="66" rx="5" ry="6.5" fill="${ink}" transform="rotate(-14 50 66)"/>
      <ellipse cx="50.6" cy="69" rx="3" ry="2.4" fill="#C2304A" transform="rotate(-14 50.6 69)"/>
      ${star(23, 25, 6.5)}${star(74, 19, 5)}`;
  },
};
