const star = require('../src/parts/star');

const [X, Y, R] = [62, 32, 21];
const body = star.path(X, Y, R, 16);
// Three tapering trails run back from the star to the lower left, fading as they go.
const TRAILS = [
  { to: [12, 76], w: 9, color: '#FFC21A' },
  { to: [24, 84], w: 5, color: '#FF8FA9' },
  { to: [10, 60], w: 4.5, color: '#8CD8FF' },
];
module.exports = {
  id: 'shooting-star',
  name: 'Shooting Star',
  emoji: '🌠',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['shooting star', 'wish', 'night', 'falling star', 'space'],
  tone: 'gold',
  body,
  shine: [56, 25, -20],
  shineSize: [4.5, 2],
  draw(c) {
    const trails = TRAILS.map(({ to, w, color }, i) => {
      const [tx, ty] = to;
      const dx = tx - X, dy = ty - Y, len = Math.hypot(dx, dy);
      const nx = -dy / len, ny = dx / len;
      const f = (v) => v.toFixed(2);
      c.def(`<linearGradient id="${c.id(`t${i}`)}" gradientUnits="userSpaceOnUse" x1="${X}" y1="${Y}" x2="${tx}" y2="${ty}"><stop offset="0.2" stop-color="${color}" stop-opacity=".95"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></linearGradient>`);
      return `<path d="M${f(X + nx * w)} ${f(Y + ny * w)} L${tx} ${ty} L${f(X - nx * w)} ${f(Y - ny * w)} Z" fill="url(#${c.id(`t${i}`)})"/>`;
    }).join('');
    return `${trails}${star.draw(c, X, Y, R, { rot: 16, name: 'a' })}${star.sparkle(34, 22, 4)}${star.sparkle(80, 62, 3.4, '#FFF3A6')}`;
  },
};
