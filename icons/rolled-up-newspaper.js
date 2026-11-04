const p = require('../src/parts/paper');
const AT = [46, 50];
const DEG = -32;
const P = (d) => p.place(d, AT, DEG, 1.12);
const body = P('M-30 -14 L30 -14 C36 -14 38 -7 38 0 C38 7 36 14 30 14 L-30 14 C-36 14 -38 7 -38 0 C-38 -7 -36 -14 -30 -14 Z');
module.exports = {
  id: 'rolled-up-newspaper',
  name: 'Rolled-up Newspaper',
  emoji: '🗞️',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['news', 'paper', 'delivery', 'morning', 'press'],
  tone: 'white',
  body,
  shine: [17, 59, -32],
  shineSize: [6, 2.2],
  draw(c) {
    const w = c.ramp('white');
    const roll = c.linear('a', 'white', [0, 0, 0.4, 1], 0, 2);
    c.def(`<linearGradient id="${c.id('cyl')}" gradientUnits="userSpaceOnUse" x1="${p.pt(0, -15.7, AT, DEG).join('" y1="')}" x2="${p.pt(0, 15.7, AT, DEG).join('" y2="')}"><stop offset="0" stop-color="${w[0]}"/><stop offset=".3" stop-color="${w[1]}"/><stop offset="1" stop-color="${w[2]}"/></linearGradient>`);
    return `<path d="${body}" fill="url(#${c.id('cyl')})"/>
      <path d="${P('M-26 -9 L-6 -9 L-6 -3 L-26 -3 Z')}" fill="#2E2E3D"/>
      ${p.line(P('M-26 2 L-8 2 M-26 7 L-12 7 M12 -9 L26 -9 M12 -4 L26 -4 M12 1 L26 1 M12 6 L22 6'), w[3], 1.8, 0.6)}
      <path d="${P('M-3 -14.2 L4 -14.2 L4 14.2 L-3 14.2 Z')}" fill="${c.linear('band', 'red', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${P(p.ell(31, 0, 7, 14))}" fill="${roll}"/>
      <path d="${P(p.ell(31, 0, 7, 14))}" fill="none" stroke="${w[3]}" stroke-opacity=".5" stroke-width="1"/>
      <path d="${P('M31 -1 C33 -1 33.5 2.5 31.5 3.4 C29 4.4 27.5 1 28.4 -1.8 C29.6 -5 33.8 -5 35 -1.4 C36.2 2.4 34.6 7.4 30.6 7.8')}" stroke="${w[3]}" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-opacity=".8"/>`;
  },
};
