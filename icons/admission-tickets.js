const ball = require('../src/parts/ball');
const star = require('../src/parts/star');

const TICKET = 'M18 30 L78 30 Q81 30 81 33 L81 41 A6 6 0 0 0 81 53 L81 61 Q81 64 78 64 L18 64 Q15 64 15 61 L15 53 A6 6 0 0 0 15 41 L15 33 Q15 30 18 30 Z';
const FRONT = { deg: -14, ox: 48, oy: 47, x: 48, y: 58 };
const BACK = { deg: 12, ox: 48, oy: 47, x: 48, y: 38 };
const body = ball.turn(TICKET, FRONT);

module.exports = {
  id: 'admission-tickets',
  name: 'Admission Tickets',
  emoji: '🎟️',
  group: 'Activities',
  subgroup: 'event',
  tags: ['tickets', 'event', 'concert', 'cinema', 'admission'],
  tone: 'red',
  body,
  shine: [...ball.turnPt([24, 35], FRONT), -14],
  shineSize: [6, 1.8],
  draw(c) {
    const perf = (T) => ball.turn('M64 33 L64 61', T);
    return `<path d="${ball.turn(TICKET, BACK)}" fill="${c.linear('back', 'gold', [0, 0, 1, 1], 0, 2)}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${perf(BACK)}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1.6" stroke-dasharray="2 2.4"/>
      <path d="${ball.turn('M24 38 L56 38 L56 56 L24 56 Z', BACK)}" fill="none" stroke="#5E3A00" stroke-opacity=".35" stroke-width="1.3"/>
      <path d="${body}" fill="${c.linear('a', 'red', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${perf(FRONT)}" stroke="#FFC4B8" stroke-opacity=".8" stroke-width="1.6" stroke-dasharray="2 2.4"/>
      <path d="${ball.turn('M23 37 L57 37 L57 57 L23 57 Z', FRONT)}" fill="none" stroke="#FFC4B8" stroke-opacity=".6" stroke-width="1.3"/>
      <g transform="rotate(-14 ${ball.turnPt([40, 47], FRONT).join(' ')})">${star.draw(c, ...ball.turnPt([40, 47], FRONT), 7.5, { palette: 'gold', name: 'st' })}</g>
      <path d="${ball.turn('M70 41 L74 41 M70 47 L75 47 M70 53 L74 53', FRONT)}" stroke="#FFC4B8" stroke-opacity=".7" stroke-width="1.8" stroke-linecap="round"/>`;
  },
};
