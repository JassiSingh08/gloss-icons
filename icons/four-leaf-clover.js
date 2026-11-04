const L = require('../src/parts/leaf');
// Four rounder heart leaflets, brighter green, each with the pale chevron real clover has.
const HEART = 'M0 -1.5 C-2.5 -6 -14.5 -10.5 -14.5 -19.5 C-14.5 -26 -9.5 -29 -5 -28 C-2 -27.5 -0.5 -25 0 -22.5 C0.5 -25 2 -27.5 5 -28 C9.5 -29 14.5 -26 14.5 -19.5 C14.5 -10.5 2.5 -6 0 -1.5 Z';
const CHEVRON = 'M-9 -18 Q-4 -15 0 -11 Q4 -15 9 -18';
const CX = 48;
const CY = 43;
const at = (d, a) => L.xform(d, { cx: 0, cy: 0, rotate: a, scale: 1.12, dx: CX, dy: CY });
const ANGLES = [45, 135, 225, 315];
module.exports = {
  id: 'four-leaf-clover',
  name: 'Four Leaf Clover',
  emoji: '🍀',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['clover', 'luck', 'lucky', 'irish', 'fortune'],
  tone: 'green',
  body: ANGLES.map((a) => at(HEART, a)),
  shine: [24, 24, -45],
  shineSize: [5, 2.2],
  draw(c) {
    const k = L.kit(c);
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.2" r="0.95"><stop offset="0" stop-color="#C8F78A"/><stop offset="0.35" stop-color="#3CC24A"/><stop offset="0.75" stop-color="#127A30"/><stop offset="1" stop-color="#053A1A"/></radialGradient>`);
    return `${k.stem('M48 45 C51 58 54 70 60 84', 3.6)}
      ${ANGLES.map((a) => `<path d="${at(HEART, a)}" fill="url(#${c.id('a')})"/>`).join('')}
      <path d="${ANGLES.map((a) => at(CHEVRON, a)).join(' ')}" stroke="#E8FFC8" stroke-opacity=".4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
  },
};
