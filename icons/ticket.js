const ball = require('../src/parts/ball');
const glyph = require('../src/parts/glyph');

const T = { deg: -10, ox: 48, oy: 48, x: 48, y: 50 };
const body = ball.turn('M17 26 L79 26 Q83 26 83 30 L83 41 A7 7 0 0 0 83 55 L83 66 Q83 70 79 70 L17 70 Q13 70 13 66 L13 55 A7 7 0 0 0 13 41 L13 30 Q13 26 17 26 Z', T);

module.exports = {
  id: 'ticket',
  name: 'Ticket',
  emoji: '🎫',
  group: 'Activities',
  subgroup: 'event',
  tags: ['ticket', 'pass', 'entry', 'show', 'admit one'],
  tone: 'teal',
  body,
  shine: [...ball.turnPt([22, 31], T), -10],
  shineSize: [6, 1.8],
  draw(c) {
    const word = glyph.path('ADMIT', { x: 41, y: 41.5, size: 9.5, weight: 2.2 });
    const one = glyph.path('1', { x: 41, y: 56, size: 12, weight: 2.8 });
    const s = 'fill="none" stroke-linecap="round" stroke-linejoin="round"';
    return `<path d="${body}" fill="${c.linear('a', 'teal', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${ball.turn('M66 30 L66 66', T)}" stroke="#003A33" stroke-opacity=".45" stroke-width="1.8" stroke-dasharray="2.2 2.6"/>
      <path d="${ball.turn('M20 32 L60 32 L60 64 L20 64 Z', T)}" fill="none" stroke="#9BF5E6" stroke-opacity=".7" stroke-width="1.3"/>
      <g transform="translate(0 2) rotate(-10 48 48)">
        <path d="${word.d}" stroke="#003A33" stroke-width="${word.weight}" ${s}/>
        <path d="${one.d}" stroke="#FFF9EC" stroke-width="${one.weight}" ${s}/>
        <circle cx="75" cy="48" r="4.6" fill="${c.radial('dot', 'gold', 0.3, 0.25)}"/>
      </g>`;
  },
};
