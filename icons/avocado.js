const L = require('../src/parts/leaf');
// A cut half: dark skin, buttery flesh fading to green at the rim, and the glossy stone.
const shape = 'M48 13 C58 13 63 21 64 31 C65 41 77 49 78 62 C79 76 66 84 48 84 C30 84 17 76 18 62 C19 49 31 41 32 31 C33 21 38 13 48 13 Z';
const body = L.xform(shape, { rotate: 14, cx: 48, cy: 60 });
module.exports = {
  id: 'avocado',
  name: 'Avocado',
  emoji: '🥑',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['avocado', 'guacamole', 'toast', 'healthy', 'brunch'],
  tone: 'green',
  body,
  shine: [36, 30, -65],
  shineSize: [6, 2.6],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.25" r="0.95"><stop offset="0" stop-color="#8ED45A"/><stop offset="0.35" stop-color="#2E7A22"/><stop offset="0.75" stop-color="#15461A"/><stop offset="1" stop-color="#06200A"/></radialGradient>`);
    c.def(`<radialGradient id="${c.id('flesh')}" cx="0.45" cy="0.6" r="0.6"><stop offset="0" stop-color="#FFFBC8"/><stop offset="0.6" stop-color="#E2F08A"/><stop offset="1" stop-color="#8FC83A"/></radialGradient>`);
    const pit = c.radial('pit', 'brown', 0.32, 0.25);
    const flesh = L.xform(shape, { rotate: 14, cx: 48, cy: 60, scale: 0.86 });
    return `<path d="${body}" fill="url(#${c.id('a')})"/>
      <path d="${flesh}" fill="url(#${c.id('flesh')})"/>
      <circle cx="45" cy="62" r="13" fill="${pit}" stroke="#331805" stroke-opacity=".5" stroke-width="1.2"/>
      ${L.glint(40, 56, 4, 2, -40)}`;
  },
};
