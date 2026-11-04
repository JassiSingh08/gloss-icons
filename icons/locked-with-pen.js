const m = require('../src/parts/metal');
const L = { at: [-4.5, 13.3], s: 0.84 };
const P = m.frame({ at: [67, 45], deg: 26, s: 0.86 });
const pen = 'M-5 -34 Q-5 -40 0 -40 Q5 -40 5 -34 L5 8 L3.8 15 C4.5 21 2.5 27 0 31 C-2.5 27 -4.5 21 -3.8 15 L-5 8 Z';
module.exports = {
  id: 'locked-with-pen',
  name: 'Locked With Pen',
  emoji: '🔏',
  group: 'Objects',
  subgroup: 'lock',
  tags: ['locked', 'pen', 'signed', 'private', 'sealed'],
  tone: 'gold',
  body: m.padlockBody(L),
  shine: [19, 54, -28],
  shineSize: [6, 2.9],
  draw(c) {
    const lacquer = m.cyl(c, 'pb', 'black', P.p([0, -40]), P.p([0, 8]), 10 * P.s);
    const nib = m.cyl(c, 'pn', 'brass', P.p([0, 15]), P.p([0, 31]), 8 * P.s);
    const ring = m.cyl(c, 'pr', 'brass', P.p([0, -40]), P.p([0, 8]), 10 * P.s);
    const hole = P.p([0, 21]);
    return `${m.padlock(c, L).art}
      ${m.part(P.d(pen), lacquer, 'black')}
      <path d="${P.d('M-3.8 15 L3.8 15 C4.5 21 2.5 27 0 31 C-2.5 27 -4.5 21 -3.8 15 Z')}" fill="${nib}"/>
      <path d="${P.d('M0 22 L0 30')}" stroke="#5E3A00" stroke-width="0.9"/>
      <circle cx="${hole[0].toFixed(2)}" cy="${hole[1].toFixed(2)}" r="1.1" fill="#5E3A00"/>
      <path d="${P.d('M-5 -15 L5 -15 L5 -12 L-5 -12 Z M-5 5 L5 5 L5 8 L-5 8 Z')}" fill="${ring}"/>
      <path d="${P.d('M3.4 -36 L3.4 -18')}" stroke="${ring}" stroke-width="1.8" stroke-linecap="round"/>
      <path d="${P.d('M-2.6 -35 L-2.6 -17')}" stroke="#fff" stroke-opacity=".55" stroke-width="1.3" stroke-linecap="round"/>`;
  },
};
