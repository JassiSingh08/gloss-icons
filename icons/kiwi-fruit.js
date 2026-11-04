const L = require('../src/parts/leaf');
// A slice in front of a fuzzy brown whole: the green flesh, ring of seeds and pale heart read at any size.
const body = L.circle(40, 61, 23);
module.exports = {
  id: 'kiwi-fruit',
  name: 'Kiwi Fruit',
  emoji: '🥝',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['kiwi', 'fruit', 'green', 'tropical', 'healthy'],
  tone: 'lime',
  body,
  shine: [28, 50, -45],
  shineSize: [5, 2.2],
  draw(c) {
    const whole = c.radial('whole', 'brown', 0.32, 0.25);
    c.def(`<radialGradient id="${c.id('a')}" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stop-color="#E6FF9E"/><stop offset="0.45" stop-color="#8CD034"/><stop offset="0.85" stop-color="#3E9010"/><stop offset="1" stop-color="#2A6A08"/></radialGradient>`);
    const b = c.ramp('brown');
    let seeds = '';
    let rays = '';
    for (let i = 0; i < 16; i++) {
      const a = (i * 360) / 16;
      const t = (a * Math.PI) / 180;
      const x = 40 + 10 * Math.cos(t);
      const y = 61 + 10 * Math.sin(t);
      seeds += `<ellipse cx="${L.n(x)}" cy="${L.n(y)}" rx="1.9" ry="1" transform="rotate(${a} ${L.n(x)} ${L.n(y)})"/>`;
      rays += `M${L.n(40 + 6 * Math.cos(t + 0.2))} ${L.n(61 + 6 * Math.sin(t + 0.2))} L${L.n(40 + 17 * Math.cos(t + 0.2))} ${L.n(61 + 17 * Math.sin(t + 0.2))} `;
    }
    return `<path d="${L.ellipse(61, 41, 23, 18, -35)}" fill="${whole}" stroke="${b[3]}" stroke-opacity=".5" stroke-width="1.3"/>
      <g stroke="#E8B98A" stroke-opacity=".45" stroke-width="1" stroke-linecap="round"><path d="M50 32 l2 -1.5 M58 28 l2 -1.5 M66 30 l2 -1.5 M54 40 l2 -1.5 M70 38 l2 -1.5 M62 47 l2 -1.5 M74 46 l2 -1.5"/></g>
      ${L.glint(52, 30, 4.5, 2, -40)}
      <circle cx="78" cy="30" r="2" fill="#331805"/>
      <path d="${body}" fill="#7A4A1E"/>
      <circle cx="40" cy="61" r="20.5" fill="url(#${c.id('a')})"/>
      <path d="${rays}" stroke="#F0FFC8" stroke-opacity=".45" stroke-width="1"/>
      <ellipse cx="40" cy="61" rx="6" ry="4.8" fill="#FBFFE6"/>
      <g fill="#1A1405">${seeds}</g>`;
  },
};
