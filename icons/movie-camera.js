const p = require('../src/parts/paper');
const body = 'M22 46 L62 46 Q68 46 68 52 L68 56 L84 49 Q86 48 86 50.5 L86 73.5 Q86 76 84 75 L68 68 L68 74 Q68 80 62 80 L22 80 Q16 80 16 74 L16 52 Q16 46 22 46 Z';
module.exports = {
  id: 'movie-camera',
  name: 'Movie Camera',
  emoji: '🎥',
  group: 'Objects',
  subgroup: 'light & video',
  tags: ['film', 'movie', 'camera', 'cinema', 'shoot'],
  tone: 'black',
  body,
  shine: [22, 52, -30],
  shineSize: [5.5, 2.4],
  draw(c) {
    const k = c.ramp('black');
    return `${p.reel(c, 31, 30, 14, 'r1')}${p.reel(c, 57, 31, 12.5, 'r2')}
      <path d="${body}" fill="${c.linear('a', 'black', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M68 56 L84 49 Q86 48 86 50.5 L86 73.5 Q86 76 84 75 L68 68 Z" fill="${c.linear('hood', 'black', [0, 0, 1, 0], 1, 3)}"/>
      ${p.line('M68 56 L68 68', k[0], 1.2, 0.6)}
      <path d="${p.rr(24, 54, 18, 10, 2)}" fill="${k[3]}" opacity=".7"/>
      <circle cx="56" cy="59" r="3" fill="#E3120B"/>
      <circle cx="55.2" cy="58.2" r="1" fill="#fff" opacity=".7"/>
      ${p.line('M24 71 L58 71', k[0], 1.6, 0.4)}`;
  },
};
