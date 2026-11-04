const ball = require('../src/parts/ball');
const star = require('../src/parts/star');

const T = { deg: -8, ox: 48, oy: 48, x: 48, y: 48 };
const body = ball.turn('M27 10 L69 10 Q75 10 75 16 L75 80 Q75 86 69 86 L27 86 Q21 86 21 80 L21 16 Q21 10 27 10 Z', T);

module.exports = {
  id: 'joker',
  name: 'Joker',
  emoji: '🃏',
  group: 'Activities',
  subgroup: 'game',
  tags: ['joker', 'cards', 'wild card', 'jester', 'prank'],
  tone: 'white',
  body,
  shine: [...ball.turnPt([28, 18], T), -60],
  shineSize: [5, 2],
  draw(c) {
    const ink = '#12002E';
    const bell = (x, y) => `<circle cx="${x}" cy="${y}" r="3" fill="${c.radial('bell' + x, 'gold', 0.3, 0.25)}"/>`;
    return `<path d="${body}" fill="${c.linear('a', 'white', [0, 0, 1, 1], 0, 2)}"/>
      <g transform="rotate(-8 48 48)">
        <path d="M24 13 L72 13 L72 83 L24 83 Z" fill="none" stroke="#BDB2E8" stroke-width="1"/>
        <path d="M34 46 C30 36 22 32 22.5 25 C30 26 36 32 40 40 Z" fill="${c.linear('h1', 'red', [0, 0, 1, 1], 0, 2)}"/>
        <path d="M62 46 C66 36 74 32 73.5 25 C66 26 60 32 56 40 Z" fill="${c.linear('h3', 'gold', [0, 0, 1, 1], 0, 2)}"/>
        <path d="M36 46 C36 34 42 24 48 18 C54 24 60 34 60 46 Z" fill="${c.linear('h2', 'purple', [0, 0, 1, 1], 0, 2)}"/>
        ${bell(22.5, 25)}${bell(48, 18)}${bell(73.5, 25)}
        <path d="M33 45 L63 45 L63 49 L33 49 Z" fill="${c.linear('band', 'gold', [0, 0, 0, 1], 0, 2)}"/>
        <path d="M35 49 L61 49 C61 62 56 70 48 70 C40 70 35 62 35 49 Z" fill="${c.radial('face', 'ivory', 0.4, 0.3)}"/>
        <path d="M38.5 54 L41.5 51.5 L44.5 54 L41.5 56.5 Z M51.5 54 L54.5 51.5 L57.5 54 L54.5 56.5 Z" fill="${ink}"/>
        <path d="M39 61 Q48 68 57 60" fill="none" stroke="#E3120B" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M35 70 L39 76 L44 71 L48 77 L52 71 L57 76 L61 70" fill="none" stroke="${c.ramp('red')[1]}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
        ${star.draw(c, 29, 76, 4.5, { palette: 'gold', name: 's1' })}${star.draw(c, 67, 20, 4, { palette: 'gold', name: 's2' })}
      </g>`;
  },
};
