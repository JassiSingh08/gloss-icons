const L = require('../src/parts/leaf');
// Sakura: five pale, deeply notched petals, a deep pink heart with stamens, on a bare twig.
// Each petal runs valley, shoulder, notch, shoulder, valley; neighbours share their valleys.
const CX = 48;
const CY = 45;
const PETAL = 'C-13 -11 -20 -22 -13 -29 C-8 -33.5 -3 -31.5 0 -25.5 C3 -31.5 8 -33.5 13 -29 C20 -22 13 -11 4.11 -5.66';
const at = (d, k) => L.xform(d, { cx: 0, cy: 0, rotate: k * 72, scale: 1.08, dx: CX, dy: CY });
const body = `${at('M-4.11 -5.66', 0)} ${[0, 1, 2, 3, 4].map((k) => at(PETAL, k)).join(' ')} Z`;
module.exports = {
  id: 'cherry-blossom',
  name: 'Cherry Blossom',
  emoji: '🌸',
  group: 'Animals & Nature',
  subgroup: 'plant-flower',
  tags: ['sakura', 'spring', 'flower', 'japan', 'pink'],
  tone: 'pink',
  body,
  shine: [30, 31, -50],
  shineSize: [5.5, 2.4],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.5" cy="0.5" r="0.6"><stop offset="0" stop-color="#F06A9A"/><stop offset="0.3" stop-color="#FFC4D8"/><stop offset="0.75" stop-color="#FFE8F0"/><stop offset="1" stop-color="#F7A8C4"/></radialGradient>`);
    c.def(`<radialGradient id="${c.id('lit')}" cx="0.3" cy="0.25" r="0.9"><stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#8A1A48" stop-opacity=".35"/></radialGradient>`);
    const bud = c.radial('bud', 'pink', 0.35, 0.3);
    let stamens = '';
    let dots = '';
    for (let i = 0; i < 10; i++) {
      const t = ((i * 36 + 18) * Math.PI) / 180;
      const r = i % 2 ? 10 : 12.5;
      const x = L.n(CX + r * Math.sin(t));
      const y = L.n(CY - r * Math.cos(t));
      stamens += `M${CX} ${CY} L${x} ${y} `;
      dots += `<circle cx="${x}" cy="${y}" r="1.5"/>`;
    }
    const veins = [0, 1, 2, 3, 4].map((k) => at('M0 -6 L0 -20', k)).join(' ');
    return `${L.twig('M10 84 C22 76 30 70 40 58 M24 74 C30 74 38 78 44 80', 3.2)}
      <path d="M44 80 C48 72 56 70 60 74 C58 80 50 84 44 80 Z" fill="${bud}" stroke="#4A0016" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="${body}" fill="url(#${c.id('a')})"/>
      <path d="${body}" fill="url(#${c.id('lit')})"/>
      <path d="${veins}" stroke="#E8467F" stroke-opacity=".35" stroke-width="1.3" stroke-linecap="round"/>
      <circle cx="${CX}" cy="${CY}" r="5" fill="#C2185B"/>
      <path d="${stamens}" stroke="#C2185B" stroke-width="1.1"/>
      <g fill="#FFD84A" stroke="#9E5A00" stroke-opacity=".5" stroke-width=".5">${dots}</g>`;
  },
};
