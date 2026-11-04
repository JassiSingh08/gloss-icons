// The union of three lobes, a centre and a flared stem, traced round from the middle so it is one
// outline (overlapping circles would leave the engine's edge line inside the shape).
const LOBES = [[48, 29, 16], [30.5, 52, 16], [65.5, 52, 16], [48, 46, 10]];
function inside(x, y) {
  if (LOBES.some(([cx, cy, r]) => (x - cx) ** 2 + (y - cy) ** 2 <= r * r)) return true;
  if (y < 52 || y > 84) return false;
  const t = (y - 52) / 32;
  const half = 3 + 11 * t ** 2.4;
  return Math.abs(x - 48) <= half;
}
function trace() {
  const pts = [];
  for (let i = 0; i < 200; i++) {
    const a = (i / 200) * Math.PI * 2;
    let far = 0;
    for (let d = 0; d < 48; d += 0.08) if (inside(48 + d * Math.cos(a), 48 + d * Math.sin(a))) far = d;
    pts.push(`${(48 + far * Math.cos(a)).toFixed(1)} ${(48 + far * Math.sin(a)).toFixed(1)}`);
  }
  return `M${pts.join(' L')} Z`;
}
const body = trace();

module.exports = {
  id: 'club-suit',
  name: 'Club Suit',
  emoji: '♣️',
  group: 'Activities',
  subgroup: 'game',
  tags: ['club', 'cards', 'poker', 'suit', 'clubs'],
  tone: 'black',
  body,
  shine: [41, 21, -40],
  shineSize: [5.5, 2.6],
  draw: (c) => `<path d="${body}" fill="${c.radial('a', 'black', 0.32, 0.22)}"/>
    <ellipse cx="24" cy="45" rx="4.5" ry="2.2" fill="#fff" opacity=".55" transform="rotate(-40 24 45)"/>
    <ellipse cx="59" cy="45" rx="4" ry="2" fill="#fff" opacity=".35" transform="rotate(-40 59 45)"/>`,
};
