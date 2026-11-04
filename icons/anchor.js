// Traced point by point around the right half and mirrored, so ring, stock, shank, arms and
// flukes are one outline with the ring's eye cut out.
const f = (n) => +n.toFixed(2);
const C = [48, 50];
const at = (r, deg) => [C[0] + r * Math.cos((deg * Math.PI) / 180), C[1] + r * Math.sin((deg * Math.PI) / 180)];
const TIP = 22;
function fluke(side) {
  const a = side > 0 ? TIP : 180 - TIP;
  const t = (a * Math.PI) / 180;
  const u = side > 0 ? [Math.sin(t), -Math.cos(t)] : [-Math.sin(t), Math.cos(t)];
  const n = [Math.cos(t), Math.sin(t)];
  const m = at(27.5, a);
  const tip = [m[0] + 13 * u[0], m[1] + 13 * u[1]];
  const outer = [m[0] - 2 * u[0] + 10 * n[0], m[1] - 2 * u[1] + 10 * n[1]];
  const inner = [m[0] - 2 * u[0] - 10 * n[0], m[1] - 2 * u[1] - 10 * n[1]];
  return { a, tip, outer, inner };
}
const R = fluke(1);
const L = fluke(-1);
const p = ([x, y]) => `${f(x)} ${f(y)}`;
const joint = f(17 + Math.sqrt(64 - 20.25));
const shankFoot = f(C[1] + Math.sqrt(529 - 20.25));
const body = [
  `M48 9 A8 8 0 0 1 52.5 ${joint} L52.5 27 L65 27 Q69.5 27 69.5 31.5 Q69.5 36 65 36 L52.5 36 L52.5 ${shankFoot}`,
  `A23 23 0 0 0 ${p(at(23, R.a))} L${p(R.inner)} L${p(R.tip)} L${p(R.outer)} L${p(at(32, R.a))}`,
  `A32 32 0 0 1 48 82 A32 32 0 0 1 ${p(at(32, L.a))} L${p(L.outer)} L${p(L.tip)} L${p(L.inner)} L${p(at(23, L.a))}`,
  `A23 23 0 0 0 43.5 ${shankFoot} L43.5 36 L31 36 Q26.5 36 26.5 31.5 Q26.5 27 31 27 L43.5 27 L43.5 ${joint} A8 8 0 0 1 48 9 Z`,
  'M48 13.4 A3.6 3.6 0 1 0 48 20.6 A3.6 3.6 0 1 0 48 13.4 Z',
].join(' ');
module.exports = {
  id: 'anchor',
  name: 'Anchor',
  emoji: '⚓',
  group: 'Travel & Places',
  subgroup: 'transport-water',
  tags: ['nautical', 'harbour', 'sailor', 'steady', 'sea'],
  tone: 'blue',
  body,
  shine: [33, 30, 0],
  shineSize: [3.6, 1.4],
  draw(c) {
    const paint = c.radial('a', 'blue', 0.3, 0.2);
    return `<path d="${body}" fill="${paint}" fill-rule="evenodd"/>
      <path d="M46 38 L46 70" stroke="#fff" stroke-opacity=".35" stroke-width="1.6" stroke-linecap="round"/>`;
  },
};
