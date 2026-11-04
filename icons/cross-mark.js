// One outline for both bars: each arm ends in a round cap, and the arms meet at four inner
// corners, so the outline never crosses the middle.
const CX = 48;
const CY = 47;
const L = 29; // centre to cap centre
const H = 8; // half the bar width
const f = (v) => +v.toFixed(2);

function cross() {
  let d = '';
  for (let k = 0; k < 4; k++) {
    const t = ((45 + 90 * k) * Math.PI) / 180;
    const u = [Math.cos(t), Math.sin(t)];
    const p = [-u[1], u[0]];
    const inner = ((90 * (k + 1)) * Math.PI) / 180;
    const a = [CX + L * u[0] - H * p[0], CY + L * u[1] - H * p[1]];
    const b = [CX + L * u[0] + H * p[0], CY + L * u[1] + H * p[1]];
    const m = [CX + H * Math.SQRT2 * Math.cos(inner), CY + H * Math.SQRT2 * Math.sin(inner)];
    d += `${k ? 'L' : 'M'}${f(a[0])} ${f(a[1])} A${H} ${H} 0 0 1 ${f(b[0])} ${f(b[1])} L${f(m[0])} ${f(m[1])} `;
  }
  return d + 'Z';
}

const body = cross();
module.exports = {
  id: 'cross-mark',
  name: 'Cross Mark',
  emoji: '❌',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['cross', 'x', 'no', 'wrong', 'cancel', 'delete'],
  tone: 'red',
  body,
  shine: [24, 22, 45],
  shineSize: [5.5, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'red', 0.3, 0.22)}"/>`;
  },
};
