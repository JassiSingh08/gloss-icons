// One five-point star for star, glowing star, shooting star, milky way and anything else that
// needs a star. Rounded tips, and bevelled: each arm is split down its ridge, the half facing the
// top-left light brighter than the other, so it reads as a carved solid, not a sticker.
//
//   const star = require('../src/parts/star');
//   star.path(cx, cy, R)                 the silhouette, for a body
//   star.draw(c, cx, cy, R, { rot })     the painted, bevelled star
//   star.sparkle(x, y, s)                a four-point twinkle, for decoration around it

const n = (v) => +v.toFixed(2);
const INNER = 0.5;

function points(cx, cy, R, rot = 0) {
  return Array.from({ length: 10 }, (_, i) => {
    const a = ((i * 36 + rot) * Math.PI) / 180 - Math.PI / 2;
    const r = i % 2 ? R * INNER : R;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });
}

// Each corner is cut back and joined with a curve: tips by `tip`, valleys by a little less.
function path(cx, cy, R, rot = 0, tip = R * 0.09) {
  const pts = points(cx, cy, R, rot);
  let d = '';
  pts.forEach((v, i) => {
    const prev = pts[(i + 9) % 10];
    const next = pts[(i + 1) % 10];
    const r = i % 2 ? tip * 0.5 : tip;
    const cut = (o) => {
      const dx = o[0] - v[0], dy = o[1] - v[1], len = Math.hypot(dx, dy);
      return [n(v[0] + (dx * r) / len), n(v[1] + (dy * r) / len)];
    };
    const a = cut(prev);
    const b = cut(next);
    d += `${i ? 'L' : 'M'}${a[0]} ${a[1]} Q${n(v[0])} ${n(v[1])} ${b[0]} ${b[1]} `;
  });
  return `${d}Z`;
}

// Ten facets, centre to tip to valley; light comes from the upper left.
function facets(cx, cy, R, rot = 0) {
  const pts = points(cx, cy, R, rot);
  const L = [-0.62, -0.78];
  let lit = '';
  let dark = '';
  for (let i = 0; i < 10; i++) {
    const p = pts[i];
    const q = pts[(i + 1) % 10];
    const mx = (p[0] + q[0]) / 2 - cx, my = (p[1] + q[1]) / 2 - cy;
    const len = Math.hypot(mx, my);
    const b = (mx * L[0] + my * L[1]) / len;
    const d = `M${n(cx)} ${n(cy)} L${n(p[0])} ${n(p[1])} L${n(q[0])} ${n(q[1])} Z`;
    if (b > 0.25) lit += d;
    else if (b < -0.25) dark += d;
  }
  return { lit, dark };
}

function draw(c, cx, cy, R, { rot = 0, palette = 'gold', name = 'star', edge = false } = {}) {
  const body = path(cx, cy, R, rot);
  const { lit, dark } = facets(cx, cy, R, rot);
  const clip = c.id(`${name}-clip`);
  c.def(`<clipPath id="${clip}"><path d="${body}"/></clipPath>`);
  const deep = c.ramp(palette)[3];
  return `<path d="${body}" fill="${c.radial(name, palette, 0.4, 0.3)}"${edge ? ` stroke="${deep}" stroke-opacity=".55" stroke-width="1.1" stroke-linejoin="round"` : ''}/>
    <g clip-path="url(#${clip})"><path d="${lit}" fill="#fff" opacity=".22"/><path d="${dark}" fill="${deep}" opacity=".2"/></g>`;
}

// A four-point twinkle with concave sides.
function sparkle(x, y, s, fill = '#fff', opacity = 1) {
  const k = s * 0.22;
  return `<path d="M${n(x)} ${n(y - s)} Q${n(x + k)} ${n(y - k)} ${n(x + s)} ${n(y)} Q${n(x + k)} ${n(y + k)} ${n(x)} ${n(y + s)} Q${n(x - k)} ${n(y + k)} ${n(x - s)} ${n(y)} Q${n(x - k)} ${n(y - k)} ${n(x)} ${n(y - s)} Z" fill="${fill}" opacity="${opacity}"/>`;
}

module.exports = { points, path, facets, draw, sparkle };
