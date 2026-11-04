const ball = require('../src/parts/ball');

const b = ball.make(48, 51, 32, { x: 40, y: -12, z: 6 });

// A truncated icosahedron: the twelve dark patches sit on an icosahedron's corners, the seams
// between the white hexagons cross its edges a third of the way along.
function patches() {
  const P = (1 + Math.sqrt(5)) / 2;
  const v = [];
  for (const s of [-1, 1]) for (const t of [-1, 1]) v.push([0, s, t * P], [s, t * P, 0], [t * P, 0, s]);
  const near = (a) => v.filter((w) => w !== a && Math.abs(Math.hypot(w[0] - a[0], w[1] - a[1], w[2] - a[2]) - 2) < 1e-6);
  const third = (a, w, k) => a.map((x, i) => x + ((w[i] - x) * k) / 3);
  let dark = '';
  let seams = '';
  const done = new Set();
  for (const a of v) {
    const nb = near(a);
    const na = ball.norm(a);
    const u = ball.norm(ball.cross(na, Math.abs(na[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0]));
    const w2 = ball.cross(na, u);
    const corners = nb
      .map((w) => third(a, w, 1))
      .sort((p, q) => Math.atan2(ball.dot(p, w2), ball.dot(p, u)) - Math.atan2(ball.dot(q, w2), ball.dot(q, u)));
    if (b.rot(na)[2] > -0.45) {
      const pts = corners.flatMap((p, i) => ball.arc(p, corners[(i + 1) % 5], 5).slice(0, -1));
      dark += b.poly(pts) + ' ';
    }
    for (const w of nb) {
      const key = [v.indexOf(a), v.indexOf(w)].sort().join();
      if (done.has(key)) continue;
      done.add(key);
      seams += b.line(ball.arc(third(a, w, 1), third(a, w, 2), 6)) + ' ';
    }
  }
  return { dark, seams };
}

module.exports = {
  id: 'soccer-ball',
  name: 'Soccer Ball',
  emoji: '⚽',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['football', 'soccer', 'goal', 'match', 'sport'],
  tone: 'white',
  body: b.body,
  shine: [34, 32, -40],
  draw(c) {
    const { dark, seams } = patches();
    return `<path d="${b.body}" fill="${b.fill(c, 'a', 'white')}"/>
      <g ${b.clip(c)}>
        <path d="${seams}" fill="none" stroke="#8C83AD" stroke-width="1.3" stroke-linecap="round"/>
        <path d="${dark}" fill="${b.fill(c, 'patch', 'black')}" stroke="#05050A" stroke-opacity=".5" stroke-width="1" stroke-linejoin="round"/>
        ${b.shade(c, 0.3)}
      </g>`;
  },
};
