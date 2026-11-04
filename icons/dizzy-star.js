// A star trailing a curling, tapering tail.
const n = (v) => +v.toFixed(2);
const star = (cx, cy, R, r, rot) =>
  `M${Array.from({ length: 10 }, (_, i) => {
    const a = (i * Math.PI) / 5 - Math.PI / 2 + (rot * Math.PI) / 180;
    const rr = i % 2 ? r : R;
    return `${n(cx + rr * Math.cos(a))} ${n(cy + rr * Math.sin(a))}`;
  }).join(' L')} Z`;
// Tail: a cubic centreline offset either side by a width that thins to a point.
function tail(P, w0) {
  const N = 28;
  const pt = (t, k) => {
    const u = 1 - t;
    return u * u * u * P[0][k] + 3 * u * u * t * P[1][k] + 3 * u * t * t * P[2][k] + t * t * t * P[3][k];
  };
  const L = [], R = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const e = 0.001;
    const dx = pt(Math.min(t + e, 1), 0) - pt(Math.max(t - e, 0), 0);
    const dy = pt(Math.min(t + e, 1), 1) - pt(Math.max(t - e, 0), 1);
    const len = Math.hypot(dx, dy);
    const w = w0 * (1 - t) ** 0.8 + 0.6;
    const [x, y] = [pt(t, 0), pt(t, 1)];
    L.push(`${n(x - (dy / len) * w)} ${n(y + (dx / len) * w)}`);
    R.unshift(`${n(x + (dy / len) * w)} ${n(y - (dx / len) * w)}`);
  }
  return `M${L.join(' L')} L${R.join(' L')} Z`;
}
const body = star(62, 37, 22, 10, 12);
const TAIL = tail([[55, 49], [48, 84], [6, 84], [18, 55]], 7.5);
module.exports = {
  id: 'dizzy-star',
  name: 'Dizzy',
  emoji: '💫',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['dizzy', 'star', 'shooting star', 'magic', 'sparkle'],
  tone: 'gold',
  body,
  shine: [55, 31, -40],
  shineSize: [5, 2.2],
  draw(c) {
    return `<path d="${TAIL}" fill="${c.linear('tail', 'gold', [1, 0, 0, 1], 0, 2)}" stroke="#5E3A00" stroke-opacity=".45" stroke-width="1" stroke-linejoin="round"/>
      <path d="${body}" fill="${c.radial('a', 'gold', 0.35, 0.25)}" stroke-linejoin="round"/>`;
  },
};
