// A spiral band widening as it unwinds from the eye; outer edge out, round cap, inner edge back.
const CX = 48;
const CY = 49;
const T = 4.3 * Math.PI;
const f = (v) => v.toFixed(2);
const rad = (t) => 2.5 + (6.6 * t) / Math.PI;
const half = (t) => 1.4 + (3.6 * t) / T;
const pt = (t, r) => `${f(CX + r * Math.cos(t - 0.6))} ${f(CY + r * Math.sin(t - 0.6))}`;

function spiral() {
  const N = 90;
  const outer = [];
  const inner = [];
  for (let i = 0; i <= N; i++) {
    const t = (i / N) * T;
    outer.push(pt(t, rad(t) + half(t)));
    inner.push(pt(t, rad(t) - half(t)));
  }
  inner.reverse();
  return `M${outer.join(' L')} A${f(half(T))} ${f(half(T))} 0 0 1 ${inner[0]} L${inner.slice(1).join(' L')} A${f(half(0))} ${f(half(0))} 0 0 1 ${outer[0]} Z`;
}

const body = spiral();
module.exports = {
  id: 'cyclone',
  name: 'Cyclone',
  emoji: '🌀',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['cyclone', 'hurricane', 'spiral', 'dizzy', 'storm'],
  tone: 'blue',
  body,
  shine: [24, 34, -65],
  shineSize: [4.5, 2],
  draw: (c) => `<path d="${body}" fill="${c.radial('a', 'blue', 0.32, 0.25)}"/>`,
};
