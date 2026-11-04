// The outline is one polygon: six arms, each with a pair of side branches, joined at the valleys
// between neighbouring arms, then every corner rounded. One path keeps the outline free of
// internal seams.
const C = [48, 46.5];
const W = 5; // half-width of an arm
const ARM = [
  [-W, W * Math.sqrt(3)],
  [-W, 17.2],
  [-13.9, 24.7],
  [-9.1, 30.6],
  [-W, 27.2],
  [-W, 36],
  [W, 36],
  [W, 27.2],
  [9.1, 30.6],
  [13.9, 24.7],
  [W, 17.2],
];
const R = [1.2, 1.4, 2.4, 2.4, 1.4, 3, 3, 1.4, 2.4, 2.4, 1.4];

function points() {
  const pts = [];
  for (let k = 0; k < 6; k++) {
    const phi = (k * Math.PI) / 3;
    const a = [Math.sin(phi), -Math.cos(phi)];
    const p = [Math.cos(phi), Math.sin(phi)];
    ARM.forEach(([x, r], i) => pts.push({ x: C[0] + x * p[0] + r * a[0], y: C[1] + x * p[1] + r * a[1], r: R[i] }));
  }
  return pts;
}

function rounded(pts) {
  const n = pts.length;
  const f = (v) => v.toFixed(2);
  let d = '';
  pts.forEach((v, i) => {
    const prev = pts[(i - 1 + n) % n];
    const next = pts[(i + 1) % n];
    const cut = (o) => {
      const dx = o.x - v.x, dy = o.y - v.y, len = Math.hypot(dx, dy);
      const t = Math.min(v.r, len / 2) / len;
      return [v.x + dx * t, v.y + dy * t];
    };
    const [ax, ay] = cut(prev);
    const [bx, by] = cut(next);
    d += `${i ? 'L' : 'M'}${f(ax)} ${f(ay)} Q${f(v.x)} ${f(v.y)} ${f(bx)} ${f(by)} `;
  });
  return d + 'Z';
}

const body = rounded(points());

module.exports = {
  id: 'snowflake',
  name: 'Snowflake',
  emoji: '❄️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['snow', 'winter', 'cold', 'ice', 'frozen', 'christmas'],
  tone: 'sky',
  body,
  shine: [29.5, 35.5, 30],
  shineSize: [6, 2.4],
  draw(c) {
    const ice = c.radial('a', 'sky', 0.35, 0.25);
    let ridges = '';
    for (let k = 0; k < 6; k++) {
      const deg = k * 60;
      ridges += `<path d="M48 39.5 L48 16" transform="rotate(${deg} ${C[0]} ${C[1]})"/>`;
    }
    const hex = Array.from({ length: 6 }, (_, k) => {
      const t = (k * Math.PI) / 3;
      return `${(C[0] + 6.5 * Math.sin(t)).toFixed(2)} ${(C[1] - 6.5 * Math.cos(t)).toFixed(2)}`;
    }).join(' L');
    return `<path d="${body}" fill="${ice}"/>
      <g stroke="#fff" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round" fill="none">${ridges}</g>
      <path d="M${hex} Z" fill="#fff" fill-opacity=".45" stroke="#fff" stroke-opacity=".7" stroke-width="1.2" stroke-linejoin="round"/>`;
  },
};
