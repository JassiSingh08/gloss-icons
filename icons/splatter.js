// A paint splat: a round blob pushed out into uneven arms, smoothed with a closed Catmull-Rom
// curve, and a few loose drops thrown clear of it.
const C = [48, 49];
const ARMS = [[-100, 12, 0.16], [-40, 9, 0.18], [10, 14, 0.15], [70, 7, 0.2], [125, 13, 0.16], [185, 10, 0.18], [232, 7, 0.22]];
const f = (v) => +v.toFixed(2);

function radius(t) {
  let r = 23.5;
  for (const [deg, len, w] of ARMS) {
    let d = t - (deg * Math.PI) / 180;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    r += len * Math.exp(-((d / w) ** 2));
  }
  return r;
}

function blob() {
  const N = 72;
  const pts = Array.from({ length: N }, (_, i) => {
    const t = (i / N) * 2 * Math.PI;
    const r = radius(t);
    return [C[0] + r * Math.cos(t), C[1] + r * Math.sin(t) * 0.94];
  });
  let d = `M${f(pts[0][0])} ${f(pts[0][1])} `;
  for (let i = 0; i < N; i++) {
    const p0 = pts[(i - 1 + N) % N], p1 = pts[i], p2 = pts[(i + 1) % N], p3 = pts[(i + 2) % N];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])} `;
  }
  return d + 'Z';
}

const body = blob();
const DROPS = [[14, 30, 3.8], [82, 69, 4.2], [20, 76, 3], [78, 20, 2.8]];
module.exports = {
  id: 'splatter',
  name: 'Splatter',
  emoji: '🫟',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['splat', 'paint', 'spill', 'mess', 'ink'],
  tone: 'magenta',
  body,
  shine: [36, 37, -45],
  shineSize: [6, 2.6],
  draw(c) {
    const drop = c.radial('drop', 'magenta', 0.35, 0.3);
    const drops = DROPS.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${drop}" stroke="${c.ramp('magenta')[3]}" stroke-opacity=".5" stroke-width="1"/>
      <circle cx="${f(x - r * 0.35)}" cy="${f(y - r * 0.4)}" r="${f(r * 0.28)}" fill="#fff" opacity=".8"/>`).join('');
    return `${drops}<path d="${body}" fill="${c.radial('a', 'magenta', 0.35, 0.28)}"/>`;
  },
};
