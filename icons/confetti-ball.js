const ball = require('../src/parts/ball');

// The ball splits along a hinge at its top and each half swings out.
const half = 'M48 22 A22 22 0 0 0 48 66 Z';
const left = ball.turn(half, { deg: 11, ox: 48, oy: 22 });
const right = ball.turn('M48 22 A22 22 0 0 1 48 66 Z', { deg: -11, ox: 48, oy: 22 });
const body = [left, right];

module.exports = {
  id: 'confetti-ball',
  name: 'Confetti Ball',
  emoji: '🎊',
  group: 'Activities',
  subgroup: 'event',
  tags: ['confetti', 'celebrate', 'party', 'opening', 'congrats'],
  tone: 'gold',
  body,
  shine: [30, 32, -60],
  shineSize: [5, 2],
  draw(c) {
    const col = ['#FF5C8A', '#5BC2FF', '#9BE22E', '#9B5CFF', '#FFD82E', '#FF8C00'];
    const bits = [[44, 54, 0, 30], [52, 62, 1, -20], [40, 68, 2, 60], [56, 74, 3, 10], [47, 79, 5, -50], [36, 80, 1, 20], [60, 84, 0, 70], [51, 47, 4, 45], [30, 74, 3, -30], [66, 68, 2, 15]];
    const confetti = bits.map(([x, y, k, r]) => `<rect x="${x - 3}" y="${y - 1.6}" width="6" height="3.2" rx=".8" fill="${col[k]}" transform="rotate(${r} ${x} ${y})"/>`).join('');
    const streamers = `<path d="M46 40 C40 50 50 58 42 68 C36 76 42 82 38 86" stroke="#FF5C8A" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M50 40 C58 48 50 58 58 64 C64 69 60 76 64 82" stroke="#5BC2FF" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
    const inner = c.radial('in', 'red', 0.5, 0.5);
    return `<path d="M22 12 L74 12" stroke="#8A5A1E" stroke-width="4.4" stroke-linecap="round"/>
      <path d="M48 12 L48 22" stroke="#B8B8C7" stroke-width="1.4"/>
      ${streamers}${confetti}
      <path d="${left}" fill="${c.radial('a', 'gold', 0.3, 0.25)}"/>
      <path d="${right}" fill="${c.radial('b', 'gold', 0.3, 0.25)}"/>
      ${[11, -11].map((deg) => {
        const [mx, my] = ball.turnPt([48, 44], { deg, ox: 48, oy: 22 });
        return `<ellipse cx="${mx}" cy="${my}" rx="2.2" ry="21.5" transform="rotate(${deg} ${mx} ${my})" fill="${inner}" stroke="${c.ramp('gold')[3]}" stroke-opacity=".5" stroke-width="1"/>`;
      }).join('')}
      <circle cx="48" cy="22" r="3" fill="${c.radial('knob', 'red', 0.3, 0.25)}"/>`;
  },
};
