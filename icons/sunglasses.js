const g = require('../src/parts/garment');

// Aviator teardrop: flat brow, deep belly towards the outside.
const lens = (s) => {
  const x = (v) => (s < 0 ? v : 96 - v);
  return `M${x(44.5)} 45 L${x(19)} 43 Q${x(11.5)} 42.5 ${x(12.5)} 50 C${x(13.5)} 64 ${x(21)} 74 ${x(31)} 74 C${x(40)} 74 ${x(44.5)} 65 ${x(44.5)} 55 Z`;
};
const L = lens(-1);
const R = lens(1);
const inset = (d, cx, cy) => `<path d="${d}" transform="translate(${cx} ${cy}) scale(.84) translate(${-cx} ${-cy})"/>`;

module.exports = {
  id: 'sunglasses',
  name: 'Sunglasses',
  emoji: '🕶️',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['sunglasses', 'cool', 'summer', 'shades', 'beach'],
  tone: 'gold',
  body: [L, R],
  shine: [18, 47, -10],
  shineSize: [4, 1.6],
  draw(c) {
    const rim = c.radial('a', 'gold', 0.3, 0.2);
    c.def(`<linearGradient id="${c.id('lens')}" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="#0B0B1A"/><stop offset="0.5" stop-color="#241E66"/><stop offset="0.85" stop-color="#8E3FC9"/><stop offset="1" stop-color="#E879C8"/></linearGradient>`);
    c.def(`<clipPath id="${c.id('glass')}"><path d="${L} ${R}"/></clipPath>`);
    return g.tube(c, 'M13 46 L21 29.5 Q22.5 26.5 25.5 29', { width: 2.6, palette: 'gold', name: 'armL' })
      + g.tube(c, 'M83 46 L75 29.5 Q73.5 26.5 70.5 29', { width: 2.6, palette: 'gold', name: 'armR' })
      + `<path d="${L} ${R}" fill="${rim}"/>
      <g fill="url(#${c.id('lens')})">${inset(L, 28.5, 57)}${inset(R, 67.5, 57)}</g>
      <g clip-path="url(#${c.id('glass')})" fill="#fff"><path d="M15 64 L31 45 L37 45 L21 64 Z M54 64 L70 45 L76 45 L60 64 Z" opacity=".28"/>
        <path d="M18 48 L28 48 M57 48 L66 48" stroke="#fff" stroke-opacity=".6" stroke-width="1.3" stroke-linecap="round"/></g>`
      + g.tube(c, 'M41 44 L55 44', { width: 2.4, palette: 'gold', name: 'bar' })
      + g.tube(c, 'M44 50.5 Q48 47 52 50.5', { width: 2.4, palette: 'gold', name: 'bridge' });
  },
};
