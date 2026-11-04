const k = require('../src/parts/critter');
// A nautilus: the outer whorl of a log spiral is the silhouette, tiger stripes run across it to the
// suture, and the open mouth sits at the lower right.
const CX = 50, CY = 52, R = 38, T = 0.1, A0 = (40 * Math.PI) / 180;
const at = (t, s = 1) => {
  const r = R * Math.exp(-T * t) * s;
  return [CX + r * Math.cos(A0 - t), CY + r * Math.sin(A0 - t)];
};
const pt = ([x, y]) => `${k.n(x)} ${k.n(y)}`;
const curve = (t0, t1, s = 1, steps = 48) => Array.from({ length: steps + 1 }, (_, i) => at(t0 + ((t1 - t0) * i) / steps, s));
const outer = curve(0, Math.PI * 2);
const [ex, ey] = outer[outer.length - 1];
const body = `M${pt(outer[0])} ${outer.slice(1).map((p) => `L${pt(p)}`).join(' ')} C${k.n(ex + 10)} ${k.n(ey + 2)} ${k.n(outer[0][0] + 6)} ${k.n(outer[0][1] - 6)} ${pt(outer[0])} Z`;
module.exports = {
  id: 'spiral-shell',
  name: 'Spiral Shell',
  emoji: '🐚',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['shell', 'beach', 'sea', 'nautilus', 'spiral'],
  tone: 'cream',
  body,
  shine: [36, 30, -40],
  draw(c) {
    c.def(`<clipPath id="${c.id('in')}"><path d="${body}"/></clipPath>`);
    const stripe = c.ramp('brown')[1];
    const stripes = [];
    for (let t = 1.2; t < 5.6; t += 0.42) {
      const a = at(t, 1.02), m = at(t + 0.25, 0.8), b = at(t + Math.PI * 2 + 0.3);
      stripes.push(`M${pt(a)} Q${pt(m)} ${pt(b)}`);
    }
    const suture = curve(Math.PI * 2, Math.PI * 5.2, 1, 90);
    return `<path d="${body}" fill="${c.radial('a', 'cream', 0.35, 0.25)}"/>
      <g clip-path="url(#${c.id('in')})">
        <path d="${stripes.join(' ')}" stroke="${stripe}" stroke-width="3.6" fill="none" stroke-linecap="round" opacity=".8"/>
      </g>
      ${k.line(`M${pt(suture[0])} ${suture.slice(1).map((p) => `L${pt(p)}`).join(' ')}`, '#8A5A1E', 2.2, 0.75)}
      <path d="M${pt(outer[0])} C${k.n(outer[0][0] + 4)} ${k.n(outer[0][1] - 8)} ${k.n(ex + 8)} ${k.n(ey)} ${pt([ex, ey])} C${k.n(ex - 2)} ${k.n(ey + 8)} ${k.n(outer[0][0] - 8)} ${k.n(outer[0][1] + 2)} ${pt(outer[0])} Z" fill="${c.radial('lip', 'pink', 0.3, 0.3)}"/>`;
  },
};
