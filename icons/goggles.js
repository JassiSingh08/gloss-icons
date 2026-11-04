const g = require('../src/parts/garment');

const body = 'M14 47 C14 39 22 37 48 37 C74 37 82 39 82 47 L82 62 C82 70 76 73 66 73 C58 73 55 65 48 65 C41 65 38 73 30 73 C20 73 14 70 14 62 Z';
const lens = 'M19 48 C19 43 25 42 48 42 C71 42 77 43 77 48 L77 61 C77 66 73 68 66 68 C59 68 56 60 48 60 C40 60 37 68 30 68 C23 68 19 66 19 61 Z';

module.exports = {
  id: 'goggles',
  name: 'Goggles',
  emoji: '🥽',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['goggles', 'ski', 'safety', 'swim', 'snow'],
  tone: 'teal',
  body,
  shine: [22, 41, -12],
  shineSize: [5, 1.8],
  draw(c) {
    const frame = c.radial('a', 'teal', 0.3, 0.2);
    c.def(`<linearGradient id="${c.id('lens')}" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stop-color="#FFF07A"/><stop offset="0.35" stop-color="#FF8C00"/><stop offset="0.7" stop-color="#E21FC4"/><stop offset="1" stop-color="#40008F"/></linearGradient>`);
    c.def(`<clipPath id="${c.id('glass')}"><path d="${lens}"/></clipPath>`);
    const t = c.ramp('teal');
    const strap = 'M15 51 C12 32 30 23 48 23 C66 23 84 32 81 51';
    return g.tube(c, strap, { width: 6.5, palette: 'black', name: 'strap' })
      + g.stitch(strap, '#fff', 0.35)
      + `<path d="${body}" fill="${frame}"/>
      <path d="${lens}" fill="url(#${c.id('lens')})" stroke="${t[3]}" stroke-opacity=".6" stroke-width="1.2"/>
      <g clip-path="url(#${c.id('glass')})" fill="#fff"><path d="M18 66 L40 41 L48 41 L26 66 Z" opacity=".35"/><path d="M52 66 L74 41 L77 41 L55 66 Z" opacity=".25"/></g>
      ${g.stitch('M17 46 C17 41 24 39.5 48 39.5 C72 39.5 79 41 79 46', '#fff', 0.45)}`;
  },
};
