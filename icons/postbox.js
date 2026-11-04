const p = require('../src/parts/paper');
const body = 'M20 31 C20 20 32 12 48 12 C64 12 76 20 76 31 L76 34 L72 34 L72 76 L76 76 L76 84 L20 84 L20 76 L24 76 L24 34 L20 34 Z';
module.exports = {
  id: 'postbox',
  name: 'Postbox',
  emoji: '📮',
  group: 'Objects',
  subgroup: 'mail',
  tags: ['postbox', 'mail', 'post', 'letters', 'send'],
  tone: 'red',
  body,
  shine: [30, 22, -35],
  draw(c) {
    const r = c.ramp('red');
    c.def(`<linearGradient id="${c.id('cyl')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${r[2]}"/><stop offset=".25" stop-color="${r[0]}"/><stop offset=".55" stop-color="${r[1]}"/><stop offset="1" stop-color="${r[3]}"/></linearGradient>`);
    const cyl = `url(#${c.id('cyl')})`;
    return `<path d="${body}" fill="${cyl}"/>
      <path d="M20 31 C20 20 32 12 48 12 C64 12 76 20 76 31 L76 34 L20 34 Z" fill="${c.radial('cap', 'red', 0.3, 0.2)}"/>
      <path d="M20 76 L76 76 L76 84 L20 84 Z" fill="${cyl}"/>
      ${p.line('M20.5 34 L75.5 34 M20.5 76 L75.5 76', r[3], 1.4, 0.6)}
      <path d="${p.rr(33, 41, 30, 7, 2)}" fill="${r[3]}" opacity=".7"/>
      <path d="${p.rr(35, 43, 26, 3, 1.5)}" fill="#1A0002"/>
      ${p.line('M33 40 L63 40', r[0], 1.4, 0.6)}
      <path d="${p.rr(37, 55, 22, 13, 2)}" fill="${c.linear('plate', 'ivory', [0, 0, 0, 1], 0, 2)}" stroke="${r[3]}" stroke-opacity=".5" stroke-width="1"/>
      ${p.line('M41 59.5 L55 59.5 M41 63.5 L51 63.5', '#3D0003', 1.4, 0.55)}
      <circle cx="48" cy="12.5" r="2.6" fill="${c.radial('knob', 'red', 0.3, 0.2)}" stroke="${r[3]}" stroke-opacity=".6"/>`;
  },
};
