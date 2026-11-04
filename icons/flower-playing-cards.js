const ball = require('../src/parts/ball');

const CARD = 'M30 10 L64 10 Q68 10 68 14 L68 80 Q68 84 64 84 L30 84 Q26 84 26 80 L26 14 Q26 10 30 10 Z';
const FRONT = { deg: 10, ox: 47, oy: 47, x: 54, y: 48 };
const BACK = { deg: -12, ox: 47, oy: 47, x: 38, y: 47 };
const body = ball.turn(CARD, FRONT);

module.exports = {
  id: 'flower-playing-cards',
  name: 'Flower Playing Cards',
  emoji: '🎴',
  group: 'Activities',
  subgroup: 'game',
  tags: ['hanafuda', 'cards', 'japan', 'game', 'flowers'],
  tone: 'red',
  body,
  shine: [...ball.turnPt([31, 19], FRONT), -70],
  shineSize: [5, 1.8],
  draw(c) {
    c.def(`<clipPath id="${c.id('f')}"><path d="${body}"/></clipPath>`);
    const blossom = (x, y, r) => {
      let d = '';
      for (let i = 0; i < 5; i++) {
        const a = (i * 72 - 90) * Math.PI / 180;
        d += `<circle cx="${+(x + r * Math.cos(a)).toFixed(2)}" cy="${+(y + r * Math.sin(a)).toFixed(2)}" r="${r * 0.85}" fill="#FFFFFF"/>`;
      }
      return `<g>${d}<circle cx="${x}" cy="${y}" r="${r * 0.6}" fill="#FFD82E"/></g>`;
    };
    return `<path d="${ball.turn(CARD, BACK)}" fill="${c.linear('back', 'black', [0, 0, 1, 1], 0, 2)}" stroke="#05050A" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="${ball.turn('M30 14 L64 14 L64 80 L30 80 Z', BACK)}" fill="none" stroke="#8A0006" stroke-width="2"/>
      <path d="${body}" fill="${c.linear('a', 'red', [0, 0, 1, 1], 0, 2)}"/>
      <g clip-path="url(#${c.id('f')})" transform="rotate(10 54 48)">
        <circle cx="62" cy="29" r="10" fill="${c.radial('sun', 'gold', 0.35, 0.3)}"/>
        <path d="M26 70 C36 62 44 66 52 60 C60 54 70 58 82 52 L82 96 L26 96 Z" fill="#141420"/>
        <path d="M30 50 C38 46 42 40 50 38 M38 46 L36 38" fill="none" stroke="#141420" stroke-width="2.4" stroke-linecap="round"/>
        ${blossom(50, 38, 3.2)}${blossom(36, 37, 2.8)}${blossom(31, 50, 2.6)}
      </g>`;
  },
};
