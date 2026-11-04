const av = require('../src/parts/av');
// Skull and crossbones, drawn round (0, 0) and set in the middle of the cloth.
const BONES = 'M-12 -1 L12 13 M12 -1 L-12 13';
function skull(c) {
  const bone = c.linear('bone', 'white', [0, 0, 1, 1], 0, 2);
  const ends = [[-12, -1], [12, 13], [12, -1], [-12, 13]]
    .map(([x, y]) => { const sx = Math.sign(x); const sy = y < 6 ? -1 : 1; return `<circle cx="${x - sx * 0.6}" cy="${y - sy * 2.2}" r="2.5"/><circle cx="${x + sx * 1.6}" cy="${y + sy * 0.6}" r="2.5"/>`; }).join('');
  return `<path d="${BONES}" stroke="${bone}" stroke-width="3.8" stroke-linecap="round"/>
    <g fill="${bone}">${ends}</g>
    <path d="M0 -15 C7 -15 10.5 -10.5 10.5 -5 C10.5 -1 8.6 1.4 6.4 2.6 L6.4 6.2 Q6.4 8 4.6 8 L-4.6 8 Q-6.4 8 -6.4 6.2 L-6.4 2.6 C-8.6 1.4 -10.5 -1 -10.5 -5 C-10.5 -10.5 -7 -15 0 -15 Z" fill="${bone}" stroke="#05050A" stroke-opacity=".35" stroke-width=".8"/>
    <ellipse cx="-4.2" cy="-4.6" rx="3.1" ry="3.4" fill="#141420"/><ellipse cx="4.2" cy="-4.6" rx="3.1" ry="3.4" fill="#141420"/>
    <path d="M0 -0.6 L1.6 2.4 L-1.6 2.4 Z" fill="#141420" stroke="#141420" stroke-width=".8" stroke-linejoin="round"/>
    <path d="M-2.2 5 L-2.2 8 M2.2 5 L2.2 8" stroke="#141420" stroke-opacity=".7" stroke-width="1.1" stroke-linecap="round"/>`;
}

module.exports = av.flag({
  id: 'pirate-flag',
  name: 'Pirate Flag',
  emoji: '🏴‍☠️',
  group: 'Flags',
  subgroup: 'flag',
  tags: ['pirate', 'skull', 'crossbones', 'jolly roger', 'flag'],
}, {
  tone: 'black',
  paint: (c, F, cloth) => {
    const [x, y] = F.p(av.at(0.48, 0.47));
    return `<path d="${cloth}" fill="${c.linear('cloth', 'black', [0, 0, 1, 1], 0, 2)}"/>
      <g transform="translate(${av.n(x)} ${av.n(y)}) rotate(4) scale(1.2)">${skull(c)}</g>`;
  },
});
