const L = require('../src/parts/leaf');
// A dense spike of violet star-florets on a fleshy stem between two strap leaves.
const F = [];
[[15, [41.5, 54.5]], [25.5, [35, 48, 61]], [36, [41.5, 54.5, 28.5, 67.5]], [46.5, [35, 48, 61]], [57, [41.5, 54.5]]].forEach(([y, xs]) =>
  xs.forEach((x) => F.push([x, y, x < 30 || x > 66 ? 6.6 : 7.6])),
);
const body = L.blob(F, [48, 36]);
module.exports = {
  id: 'hyacinth',
  name: 'Hyacinth',
  emoji: '🪻',
  group: 'Animals & Nature',
  subgroup: 'plant-flower',
  tags: ['hyacinth', 'lavender', 'spring', 'flower', 'purple'],
  tone: 'purple',
  body,
  shine: [33, 21, -50],
  shineSize: [4.5, 2],
  draw(c) {
    const k = L.kit(c);
    c.def(`<radialGradient id="${c.id('a')}" cx="0.32" cy="0.25" r="0.95"><stop offset="0" stop-color="#E2C4FF"/><stop offset="0.35" stop-color="#9A5AF0"/><stop offset="0.75" stop-color="#5A1FB0"/><stop offset="1" stop-color="#22004F"/></radialGradient>`);
    const fl = `url(#${c.id('a')})`;
    const florets = F.map(([x, y, r]) => `<path d="${L.circle(x, y, r)}" fill="${fl}" stroke="#1A0040" stroke-opacity=".45" stroke-width="1.1"/><path d="${L.star(x + 0.6, y + 0.6, r * 0.62, r * 0.28, 6)}" fill="#F0E2FF" opacity=".55"/><circle cx="${x + 0.6}" cy="${y + 0.6}" r="${r * 0.18}" fill="#40008F"/>`).join('');
    return `${k.stem('M48 60 L48 84', 4.4)}
      ${k.paint('M46 84.5 C36 78 28 66 26 52 C34 58 42 68 47 78 Z')}
      ${k.paint('M50 84.5 C60 78 68 66 70 52 C62 58 54 68 49 78 Z')}
      <path d="${body}" fill="${fl}"/>
      ${florets}`;
  },
};
