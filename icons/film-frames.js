const p = require('../src/parts/paper');
const T = (d) => p.turn(d, -18, 48, 48);
const body = T('M6 33 L90 33 L90 63 L6 63 Z');
module.exports = {
  id: 'film-frames',
  name: 'Film Frames',
  emoji: '🎞️',
  group: 'Objects',
  subgroup: 'light & video',
  tags: ['film', 'movie', 'negative', 'cinema', 'photo'],
  tone: 'black',
  body,
  shine: [...p.turn('13 38', -18, 48, 48).split(' ').map(Number), -18],
  shineSize: [5, 1.6],
  draw(c) {
    let holes = '';
    for (let x = 9; x < 88; x += 7) holes += p.rr(x, 35.2, 3.6, 3.2, 0.8) + ' ' + p.rr(x, 57.6, 3.6, 3.2, 0.8) + ' ';
    const frame = (x, i) => `<path d="${T(p.rr(x, 41, 24, 14, 1.5))}" fill="${c.linear(`f${i}`, ['sky', 'orange', 'teal'][i], [0, 0, 0, 1], 0, 2)}"/>
      <path d="${T(`M${x} 55 L${x} 50 L${x + 8} 45 L${x + 14} 50 L${x + 18} 47 L${x + 24} 52 L${x + 24} 55 Z`)}" fill="${c.ramp(['blue', 'ember', 'green'][i])[2]}" opacity=".85"/>
      <path d="${T(p.ell(x + 18, 45.5, 2.2, 2.2))}" fill="#FFF7A8"/>`;
    return `<path d="${body}" fill="${c.linear('a', 'black', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${T(holes)}" fill="#E9E4FF" opacity=".85"/>
      ${frame(8, 0)}${frame(36, 1)}${frame(64, 2)}`;
  },
};
