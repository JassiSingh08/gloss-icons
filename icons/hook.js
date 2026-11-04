const m = require('../src/parts/metal');
const F = m.frame({ at: [-6.5, -4], s: 1.15 });
const local = 'M45 26 L45 57 A10 10 0 0 1 25 57 L25 50 L18.5 40.5 L15 52 L15 57 A20 20 0 0 0 55 57 L55 25.6 A9.5 9.5 0 1 0 45 25.6 Z M50 13 A4.6 4.6 0 0 1 50 22.2 A4.6 4.6 0 0 1 50 13 Z';
const body = F.d(local);
module.exports = {
  id: 'hook',
  name: 'Hook',
  emoji: '🪝',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['hook', 'catch', 'hang', 'crane', 'lure'],
  tone: 'silver',
  body,
  shine: [17.5, 68, -75],
  shineSize: [4.5, 1.8],
  draw(c) {
    const steel = c.radial('a', 'silver', 0.3, 0.3);
    return `<path d="${body}" fill="${steel}" fill-rule="evenodd"/>
      <path d="${F.d('M52 30 L52 57 A17 17 0 0 1 18.2 59')}" stroke="#3A3E52" stroke-opacity=".3" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <circle cx="${F.p([50, 17.6])[0]}" cy="${F.p([50, 17.6])[1]}" r="7.2" fill="none" stroke="#3A3E52" stroke-opacity=".35" stroke-width="1.4"/>
      <path d="${F.d('M48 30 L48 52')}" stroke="#fff" stroke-opacity=".7" stroke-width="1.5" stroke-linecap="round"/>`;
  },
};
