const p = require('../src/parts/paper');
const AT = [17, 79];
const DEG = -45;
const P = (d) => p.place(d, AT, DEG);
const body = P('M4 -9 L44 -9 L58 -14 Q60 -14.6 60 -12 L60 12 Q60 14.6 58 14 L44 9 L4 9 Q0 9 0 5 L0 -5 Q0 -9 4 -9 Z');
module.exports = {
  id: 'flashlight',
  name: 'Flashlight',
  emoji: '🔦',
  group: 'Objects',
  subgroup: 'light & video',
  tags: ['torch', 'flashlight', 'light', 'dark', 'camping'],
  tone: 'red',
  body,
  shine: [...p.pt(22, -5, AT, DEG), -45],
  shineSize: [6, 1.8],
  draw(c) {
    const r = c.ramp('red');
    const beam = P('M60 -13 L84 -23 C88 -12 88 12 84 23 L60 13 Z');
    c.def(`<linearGradient id="${c.id('beam')}" gradientUnits="userSpaceOnUse" x1="${p.pt(60, 0, AT, DEG).join('" y1="')}" x2="${p.pt(87, 0, AT, DEG).join('" y2="')}"><stop offset="0" stop-color="#FFF7A8" stop-opacity=".85"/><stop offset="1" stop-color="#FFD82E" stop-opacity="0"/></linearGradient>`);
    return `<path d="${beam}" fill="url(#${c.id('beam')})"/>
      <path d="${body}" fill="${c.linear('a', 'red', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${P('M40 -9 L44 -9 L58 -14 Q60 -14.6 60 -12 L60 12 Q60 14.6 58 14 L44 9 L40 9 Z')}" fill="${c.linear('head', 'silver', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${P(p.ell(60, 0, 2.6, 12.4))}" fill="${c.radial('lens', 'yellow', 0.5, 0.5)}"/>
      ${p.line(P('M10 -9 L10 9 M14 -9 L14 9 M18 -9 L18 9'), r[3], 1.2, 0.5)}
      <path d="${P(p.rr(26, -5, 9, 5, 2))}" fill="${c.linear('btn', 'black', [0, 0, 0, 1], 0, 2)}"/>`;
  },
};
