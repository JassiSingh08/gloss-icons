// Three Zs drifting up to the right, smallest last.
const n = (v) => +v.toFixed(2);
function z(x, y, w, h, t, rot) {
  const k = t * 1.35;
  const P = [[0, 0], [w, 0], [w, t], [k, h - t], [w, h - t], [w, h], [0, h], [0, h - t], [w - k, t], [0, t]];
  const a = (rot * Math.PI) / 180;
  const [cx, cy] = [w / 2, h / 2];
  return `M${P.map(([px, py]) => {
    const dx = px - cx, dy = py - cy;
    return `${n(x + dx * Math.cos(a) - dy * Math.sin(a))} ${n(y + dx * Math.sin(a) + dy * Math.cos(a))}`;
  }).join(' L')} Z`;
}
const Z = [z(31, 64, 34, 34, 8.5, -8), z(62, 36, 22, 22, 6, -8), z(79, 17, 13, 13, 4, -8)];
module.exports = {
  id: 'zzz',
  name: 'ZZZ',
  emoji: '💤',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['sleep', 'tired', 'snore', 'bored', 'night'],
  tone: 'blue',
  body: Z,
  shine: [22, 50.5, -8],
  shineSize: [6, 1.8],
  draw(c) {
    return Z.map((d, i) => `<path d="${d}" fill="${c.linear(`z${i}`, 'blue', [0, 0, 1, 1], 0, 2)}"/>`).join('');
  },
};
