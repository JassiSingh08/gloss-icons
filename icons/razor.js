const m = require('../src/parts/metal');
// An open straight razor: blade up and to the right, handle swung down to the left.
const B = m.frame({ at: [37, 58], deg: -38, s: 1.16 });
const blade = 'M0 -6 L38 -9 Q44 -9 44 -3 L44 3 Q44 10 37 10 C25 9 11 7 0 5 Z';
const H = m.frame({ at: [37, 58], deg: 118, s: 1.1 });
const grip = 'M-4 -6 L30 -5.5 Q34 -5.5 34 -1.5 L34 1.5 Q34 5.5 30 5.5 L-4 6 Q-8 6 -8 0 Q-8 -6 -4 -6 Z';
module.exports = {
  id: 'razor',
  name: 'Razor',
  emoji: '🪒',
  group: 'Objects',
  subgroup: 'household',
  tags: ['razor', 'shave', 'barber', 'grooming', 'sharp'],
  tone: 'silver',
  body: B.d(blade),
  shine: [53, 40, -38],
  shineSize: [5, 1.6],
  draw(c) {
    const steel = m.band(c, 'a', 'steel', B.p([20, -10]), B.p([20, 10]));
    const ebony = m.cyl(c, 'h', 'black', H.p([0, 0]), H.p([34, 0]), 13);
    const pin = B.p([0, 0]);
    return `${m.part(H.d(grip), ebony, 'black')}
      <path d="${H.d('M2 -3 L28 -3')}" stroke="#fff" stroke-opacity=".35" stroke-width="1.2" stroke-linecap="round"/>
      <path d="${B.d(blade)}" fill="${steel}"/>
      <path d="${B.d('M4 6.5 C14 8 26 9.3 37 9.6')}" stroke="#fff" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="${B.d('M4 -2.6 L38 -5')}" stroke="#3A3E52" stroke-opacity=".35" stroke-width="1.2"/>
      <circle cx="${pin[0].toFixed(2)}" cy="${pin[1].toFixed(2)}" r="2.6" fill="${c.radial('p', 'gold', 0.3, 0.3)}" stroke="#5E3A00" stroke-opacity=".6" stroke-width=".8"/>`;
  },
};
