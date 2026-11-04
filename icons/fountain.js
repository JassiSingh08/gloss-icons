const B = require('../src/parts/building');

const body = 'M30 84 Q28 84 28 82 L28 80 L22 80 C18 76 15 71 14 66 L13 66 Q11 66 11 64 L11 62 Q11 60 13 60 L44 60 L44 52 L42 52 C37 50.5 33 48.5 31 46 L30.5 46 Q29 46 29 44.5 L29 43.5 Q29 42 30.5 42 L65.5 42 Q67 42 67 43.5 L67 44.5 Q67 46 65.5 46 L65 46 C63 48.5 59 50.5 54 52 L52 52 L52 60 L83 60 Q85 60 85 62 L85 64 Q85 66 83 66 L82 66 C81 71 78 76 74 80 L68 80 L68 82 Q68 84 66 84 Z';
module.exports = {
  id: 'fountain',
  name: 'Fountain',
  emoji: '⛲',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['park', 'water', 'plaza', 'splash', 'garden'],
  tone: 'grey',
  body,
  shine: [21, 69, -15],
  shineSize: [5, 2],
  draw(c) {
    const stone = B.stone(c);
    const rim = B.grad(c, 'rim', B.STONE.slice(0, 2));
    const pool = c.linear('pool', 'sky', [0, 0, 1, 0], 1, 2);
    const jet = (d) => `<path d="${d}" fill="none" stroke="#1F7FD1" stroke-width="4.4" stroke-linecap="round"/><path d="${d}" fill="none" stroke="#9BDBFF" stroke-width="2.4" stroke-linecap="round"/>`;
    return `<path d="${body}" fill="${stone}"/>
      <path d="M13 60 L83 60 Q85 60 85 62 L85 64 Q85 66 83 66 L13 66 Q11 66 11 64 L11 62 Q11 60 13 60 Z M30.5 42 L65.5 42 Q67 42 67 43.5 L67 44.5 Q67 46 65.5 46 L30.5 46 Q29 46 29 44.5 L29 43.5 Q29 42 30.5 42 Z" fill="${rim}"/>
      <path d="M14 60.5 Q48 55 82 60.5 Z M31 42.5 Q48 39 65 42.5 Z" fill="${pool}"/>
      <path d="M22 80 L74 80 M28 80 L68 80" stroke="#5E554A" stroke-opacity=".35" stroke-width="1.2"/>
      ${jet('M48 41 L48 19 M48 19 C41 14 34 22 32 38 M48 19 C55 14 62 22 64 38')}
      ${jet('M30 47 C26 50 24 54 23 58 M66 47 C70 50 72 54 73 58')}
      <circle cx="48" cy="16" r="2.2" fill="#9BDBFF" stroke="#1F7FD1" stroke-width="1"/>
      <circle cx="27" cy="27" r="1.4" fill="#9BDBFF"/><circle cx="69" cy="27" r="1.4" fill="#9BDBFF"/><circle cx="19" cy="55" r="1.2" fill="#9BDBFF"/><circle cx="77" cy="55" r="1.2" fill="#9BDBFF"/>`;
  },
};
