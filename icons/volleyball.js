const ball = require('../src/parts/ball');

const b = ball.make(48, 51, 32, { x: 28, y: -38, z: 8 });

// A cube blown up into a sphere: each face carries three strips, turned a quarter from its
// neighbours', the way the panels of a volleyball are laid.
function panels() {
  const out = { blue: '', gold: '', white: '' };
  let seams = '';
  const cuts = [-1, -1 / 3, 1 / 3, 1];
  const colour = ['blue', 'white', 'gold'];
  // [axis of the face, axis the strips are cut across, axis they run along]
  const faces = [[2, 1, 0], [0, 2, 1], [1, 0, 2]];
  const edge = (fix, s, cross, run, p0, p1, steps = 6) =>
    Array.from({ length: steps + 1 }, (_, i) => {
      const p = [0, 0, 0];
      p[fix] = s;
      p[cross] = p0[0] + ((p1[0] - p0[0]) * i) / steps;
      p[run] = p0[1] + ((p1[1] - p0[1]) * i) / steps;
      return ball.norm(p);
    });
  for (const [fix, cross, run] of faces) {
    for (const s of [-1, 1]) {
      for (let k = 0; k < 3; k++) {
        const a = cuts[k], z = cuts[k + 1];
        const ring = [
          ...edge(fix, s, cross, run, [a, -1], [a, 1]),
          ...edge(fix, s, cross, run, [a, 1], [z, 1]),
          ...edge(fix, s, cross, run, [z, 1], [z, -1]),
          ...edge(fix, s, cross, run, [z, -1], [a, -1]),
        ];
        const zs = ring.map((q) => b.rot(q)[2]);
        // A panel wholly behind the ball, or wrapped round its far pole, would smear over the rim.
        if (Math.max(...zs) > 0 && zs.reduce((x, y) => x + y) / zs.length > -0.35) out[colour[s > 0 ? k : 2 - k]] += b.poly(ring) + ' ';
        seams += b.line(edge(fix, s, cross, run, [a, -1], [a, 1], 10)) + ' ';
      }
      seams += b.line(edge(fix, s, cross, run, [1, -1], [1, 1], 10)) + ' ';
      seams += b.line(edge(fix, s, cross, run, [-1, -1], [1, -1], 10)) + ' ';
      seams += b.line(edge(fix, s, cross, run, [-1, 1], [1, 1], 10)) + ' ';
    }
  }
  return { ...out, seams };
}

module.exports = {
  id: 'volleyball',
  name: 'Volleyball',
  emoji: '🏐',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['volleyball', 'beach', 'ball', 'spike', 'sport'],
  tone: 'blue',
  body: b.body,
  shine: [34, 32, -40],
  draw(c) {
    const p = panels();
    return `<path d="${b.body}" fill="${b.fill(c, 'a', 'white')}"/>
      <g ${b.clip(c)}>
        <path d="${p.gold}" fill="${b.fill(c, 'gold', 'gold')}"/>
        <path d="${p.blue}" fill="${b.fill(c, 'blue', 'blue')}"/>
        <path d="${p.seams}" fill="none" stroke="#001E4D" stroke-opacity=".7" stroke-width="1.4" stroke-linecap="round"/>
        ${b.shade(c, 0.3)}
      </g>`;
  },
};
