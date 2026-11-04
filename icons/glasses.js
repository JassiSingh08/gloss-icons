const g = require('../src/parts/garment');

const L = g.rr(12.5, 46, 32, 27, 11);
const R = g.rr(51.5, 46, 32, 27, 11);

module.exports = {
  id: 'glasses',
  name: 'Glasses',
  emoji: '👓',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['glasses', 'eyewear', 'reading', 'nerd', 'study'],
  tone: 'brown',
  body: [L, R],
  shine: [19, 51, -40],
  shineSize: [4.5, 1.8],
  draw(c) {
    const frame = c.radial('a', 'brown', 0.3, 0.2);
    c.def(`<linearGradient id="${c.id('lens')}" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0" stop-color="#F4FBFF"/><stop offset="0.5" stop-color="#BFE6FF"/><stop offset="1" stop-color="#6FB6E8"/></linearGradient>`);
    const lens = `url(#${c.id('lens')})`;
    const b = c.ramp('brown');
    return g.tube(c, 'M14 51 L22.5 31 Q24 28 27 30.5', { width: 3.4, palette: 'brown', name: 'armL' })
      + g.tube(c, 'M82 51 L73.5 31 Q72 28 69 30.5', { width: 3.4, palette: 'brown', name: 'armR' })
      + `<path d="${L} ${R}" fill="${frame}"/>
      <path d="${g.rr(16.5, 50, 24, 19, 8)} ${g.rr(55.5, 50, 24, 19, 8)}" fill="${lens}" stroke="${b[3]}" stroke-opacity=".5" stroke-width="1"/>
      <path d="M19 66 L33 51 L38 51 L24 66 Z M58 66 L72 51 L77 51 L63 66 Z" fill="#fff" opacity=".55"/>`
      + g.tube(c, 'M44 55 Q48 50.5 52 55', { width: 3.6, palette: 'brown', name: 'bridge' })
      + `<path d="M15 50 L18 47.5 M81 50 L78 47.5" stroke="${b[0]}" stroke-opacity=".6" stroke-width="1.2" stroke-linecap="round"/>`;
  },
};
