// Crescent = outer disc minus an offset disc, traced along both circles between their crossings.
const O = [46, 48, 34];
const I = [63, 37, 27];

function crescent() {
  const [x0, y0, r0] = O;
  const [x1, y1, r1] = I;
  const d = Math.hypot(x1 - x0, y1 - y0);
  const a = (r0 * r0 - r1 * r1 + d * d) / (2 * d);
  const h = Math.sqrt(r0 * r0 - a * a);
  const mx = x0 + (a * (x1 - x0)) / d, my = y0 + (a * (y1 - y0)) / d;
  const ux = -(y1 - y0) / d, uy = (x1 - x0) / d;
  const p = [mx + h * ux, my + h * uy];
  const q = [mx - h * ux, my - h * uy];
  const f = (v) => v.toFixed(2);
  // p lies on the lower-left side of the centre line, q on the upper-right.
  return `M${f(q[0])} ${f(q[1])} A${r0} ${r0} 0 1 0 ${f(p[0])} ${f(p[1])} A${r1} ${r1} 0 0 1 ${f(q[0])} ${f(q[1])} Z`;
}

const body = crescent();

module.exports = {
  id: 'moon',
  name: 'Moon',
  emoji: '🌙',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['night', 'moon', 'sleep', 'truth', 'dream', 'crescent'],
  tone: 'gold',
  body,
  shine: [25, 36, -55],
  draw(c) {
    const glow = c.radial('a', 'yellow', 0.25, 0.3);
    const crater = c.ramp('gold')[2];
    return `<path d="${body}" fill="${glow}"/>
      <circle cx="27" cy="56" r="4.2" fill="${crater}" opacity=".35"/>
      <circle cx="37.5" cy="71" r="2.8" fill="${crater}" opacity=".3"/>
      <circle cx="22" cy="44" r="2" fill="${crater}" opacity=".3"/>`;
  },
};
