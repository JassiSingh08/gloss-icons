const m = require('../src/parts/metal');
const lock = require('./lock');
const L = { at: [-4.5, 13.3], s: 0.84 };
// The key stands upright beside the lock, bow at the top, so the lock keeps its full shape.
const K = m.frame({ at: [69, 31], deg: 0 });
const bow = 'M0 -13 C7.2 -13 11 -8.5 11 -2.5 C11 3 7.5 6.5 3.4 7.6 L3.4 9 L-3.4 9 L-3.4 7.6 C-7.5 6.5 -11 3 -11 -2.5 C-11 -8.5 -7.2 -13 0 -13 Z';
const shaft = 'M-3.4 9 L3.4 9 L3.4 40 L10.5 40 L10.5 45 L6.5 45 L6.5 48.5 L10.5 48.5 L10.5 52 Q10.5 54 8.5 54 L1.5 54 L-3.4 50 Z';
module.exports = {
  id: 'locked-with-key',
  name: 'Locked With Key',
  emoji: '🔐',
  group: 'Objects',
  subgroup: 'lock',
  tags: ['locked', 'key', 'secure', 'closed', 'private'],
  tone: 'gold',
  body: m.padlockBody(L),
  shine: [19, 54, -28],
  shineSize: [6, 2.9],
  draw(c) {
    const steel = c.radial('k', 'silver', 0.3, 0.2);
    const blade = m.band(c, 'kb', 'steel', K.p([-3.4, 0]), K.p([3.4, 0]));
    return `${m.padlock(c, L).art}
      ${m.part(K.d(shaft), blade, 'steel')}
      ${m.part(K.d(bow), steel, 'steel')}
      <circle cx="${K.p([0, -3])[0]}" cy="${K.p([0, -3])[1]}" r="4.2" fill="#3A3E52"/>
      <path d="${K.d('M-7.5 -6 C-6.5 -9.5 -3.5 -11 0 -11')}" stroke="#fff" stroke-width="1.6" stroke-linecap="round" fill="none" opacity=".85"/>
      <path d="${K.d('M-1.4 12 L-1.4 38')}" stroke="#fff" stroke-opacity=".75" stroke-width="1.2" stroke-linecap="round"/>`;
  },
};
