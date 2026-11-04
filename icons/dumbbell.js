function rounded(pts) {
  const n = pts.length;
  const f = (v) => +v.toFixed(2);
  return (
    pts
      .map(([x, y, r], i) => {
        const [px, py] = pts[(i - 1 + n) % n];
        const [nx, ny] = pts[(i + 1) % n];
        const cut = (ox, oy) => {
          const len = Math.hypot(ox - x, oy - y);
          const t = Math.min(r, len / 2) / len;
          return [f(x + (ox - x) * t), f(y + (oy - y) * t)];
        };
        const a = cut(px, py);
        const b = cut(nx, ny);
        return `${i ? 'L' : 'M'}${a[0]} ${a[1]} Q${x} ${y} ${b[0]} ${b[1]}`;
      })
      .join(' ') + ' Z'
  );
}

const body = rounded([
  [19, 28, 5.5], [34, 28, 5.5], [34, 50.5, 1.2], [62, 50.5, 1.2], [62, 28, 5.5], [77, 28, 5.5], [77, 40, 1.2],
  [84, 40, 2.5], [84, 72, 2.5], [77, 72, 1.2], [77, 84, 5.5], [62, 84, 5.5], [62, 61.5, 1.2], [34, 61.5, 1.2],
  [34, 84, 5.5], [19, 84, 5.5], [19, 72, 1.2], [12, 72, 2.5], [12, 40, 2.5], [19, 40, 1.2],
]);

module.exports = {
  id: 'dumbbell',
  name: 'Dumbbell',
  tags: ['fitness', 'gym', 'workout', 'strong', 'exercise', 'weights'],
  tone: 'teal',
  body,
  shine: [25, 40, -80],
  shineSize: [6, 2.6],
  draw(c) {
    const plate = c.radial('a', 'teal', 0.3, 0.2);
    const bar = c.linear('bar', 'silver', [0, 0, 0, 1], 0, 3);
    const cap = c.linear('cap', 'silver', [0, 0, 0, 1], 0, 3);
    c.def(`<clipPath id="${c.id('db')}"><path d="${body}"/></clipPath>`);
    const deep = c.ramp('teal')[3];
    return `<path d="${body}" fill="${plate}"/>
      <g clip-path="url(#${c.id('db')})">
        <rect x="33" y="49.5" width="30" height="13" fill="${bar}"/>
        <rect x="9" y="39" width="10.4" height="34" fill="${cap}"/>
        <rect x="76.6" y="39" width="10.4" height="34" fill="${cap}"/>
        <rect x="32.4" y="26" width="1.6" height="60" fill="${deep}" opacity=".35"/>
        <rect x="62" y="26" width="1.6" height="60" fill="${deep}" opacity=".35"/>
        <path d="M23 33 L23 79 M67 33 L67 79" stroke="#fff" stroke-opacity=".28" stroke-width="2" stroke-linecap="round"/>
      </g>`;
  },
};
