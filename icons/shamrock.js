const L = require('../src/parts/leaf');
// Three heart-shaped leaflets with their tips meeting at the stem.
const HEART = 'M0 -1.5 C-3 -6 -15 -11 -15 -20 C-15 -26.5 -9.5 -29.5 -5 -28.5 C-2 -28 -0.5 -25.5 0 -23 C0.5 -25.5 2 -28 5 -28.5 C9.5 -29.5 15 -26.5 15 -20 C15 -11 3 -6 0 -1.5 Z';
const CX = 48;
const CY = 44;
const leaflets = [0, 120, 240].map((a) => L.xform(HEART, { cx: 0, cy: 0, rotate: a, scale: 1.18, dx: CX, dy: CY }));
module.exports = {
  id: 'shamrock',
  name: 'Shamrock',
  emoji: '☘️',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['shamrock', 'irish', 'st patrick', 'clover', 'luck'],
  tone: 'green',
  body: leaflets,
  shine: [36, 16, -25],
  shineSize: [5, 2.2],
  draw(c) {
    const k = L.kit(c);
    const leaf = c.radial('a', 'green', 0.3, 0.2);
    const veins = [0, 120, 240].map((a) => L.xform('M0 -3 L0 -24', { cx: 0, cy: 0, rotate: a, scale: 1.18, dx: CX, dy: CY })).join(' ');
    return `${k.stem('M48 46 C49 58 47 72 41 84', 3.6)}
      ${leaflets.map((d) => `<path d="${d}" fill="${leaf}"/>`).join('')}
      <path d="${veins}" stroke="${k.light}" stroke-opacity=".6" stroke-width="1.2" stroke-linecap="round"/>`;
  },
};
