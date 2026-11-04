const p = require('../src/parts/paper');
const body = 'M17 46 L25 38 L83 38 L83 76 L77 84 L17 84 Z';
module.exports = {
  id: 'ballot-box-with-ballot',
  name: 'Ballot Box With Ballot',
  emoji: '🗳️',
  group: 'Objects',
  subgroup: 'mail',
  tags: ['vote', 'election', 'ballot', 'democracy', 'poll'],
  tone: 'blue',
  body,
  shine: [22, 52, -20],
  shineSize: [6, 2.4],
  draw(c) {
    const b = c.ramp('blue');
    const tick = 'M37 25 L42 30 L52 18';
    return `<path d="${body}" fill="${b[2]}"/>
      <path d="M17 46 L25 38 L83 38 L77 46 Z" fill="${c.linear('top', 'blue', [0, 0, 1, 0], 0, 1)}"/>
      <path d="M77 46 L83 38 L83 76 L77 84 Z" fill="${c.linear('side', 'blue', [0, 0, 1, 0], 2, 3)}"/>
      <path d="M36 43.6 L39 40.4 L65 40.4 L62 43.6 Z" fill="#001E4D"/>
      <path d="M38.6 43 L32 10 Q31.6 8 33.6 7.7 L59 4.8 Q61 4.6 61.4 6.6 L64 41.5 Z" fill="${c.linear('ballot', 'white', [0, 0, 1, 1], 0, 2)}" stroke="#6E61A8" stroke-opacity=".6" stroke-width="1.1"/>
      <path d="${tick}" stroke="${c.ramp('green')[2]}" stroke-width="4.2" ${p.ST}/>
      ${p.line('M38 36 L58 34.6', '#8C83AD', 1.6, 0.6)}
      <path d="M36 43.6 L62 43.6 L65 40.4 L66 40.4 L63 44.6 L35 44.6 Z" fill="${b[1]}"/>
      <path d="M17 46 L77 46 L77 84 L17 84 Z" fill="${c.linear('a', 'blue', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M17.6 46.5 L76.6 46.5', b[0], 1.2, 0.6)}
      <circle cx="47" cy="65" r="11" fill="#fff" opacity=".92"/>
      <path d="M41.5 65 L45.5 69 L53 60.5" stroke="${b[2]}" stroke-width="3.6" ${p.ST}/>`;
  },
};
