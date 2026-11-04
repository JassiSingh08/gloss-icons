const ball = require('../src/parts/ball');

const stalk = ball.curve([[36, 85], [38, 60], [44, 32], [54, 9]], 20);
const body = ball.band(stalk, (t) => 8 - t * 3);

module.exports = {
  id: 'tanabata-tree',
  name: 'Tanabata Tree',
  emoji: '🎋',
  group: 'Activities',
  subgroup: 'event',
  tags: ['tanabata', 'bamboo', 'wish', 'star festival', 'japan'],
  tone: 'green',
  body,
  shine: [37, 62, -84],
  shineSize: [5, 1.4],
  draw(c) {
    const leaf = c.linear('leaf', 'green', [0, 0, 1, 1], 0, 2);
    const leafD = (x, y, len, deg) => ball.turn(`M${x} ${y} C${x + len * 0.3} ${y - 4} ${x + len * 0.7} ${y - 3.5} ${x + len} ${y} C${x + len * 0.7} ${y + 3.5} ${x + len * 0.3} ${y + 4} ${x} ${y} Z`, { deg, ox: x, oy: y });
    const leaves = [[45, 30, 22, -20], [45, 30, 20, 15], [42, 44, 20, 200], [42, 44, 18, 160], [49, 20, 18, -50], [50, 18, 16, 230], [40, 56, 18, 18]].map((a) => leafD(...a)).join(' ');
    const twig = 'M45 30 L64 22 M42 44 L24 40 M40 56 L56 61';
    const slip = (x, y, fill, deg) => `<g transform="rotate(${deg} ${x} ${y})"><path d="M${x} ${y - 4} L${x} ${y}" stroke="#B8B8C7" stroke-width=".9"/><rect x="${x - 3.5}" y="${y}" width="7" height="17" rx="1" fill="${fill}"/><rect x="${x - 3.5}" y="${y}" width="2.4" height="17" fill="#fff" opacity=".35"/></g>`;
    const nodes = [0.25, 0.5, 0.75].map((t) => {
      const [x, y] = stalk[Math.round(t * (stalk.length - 1))];
      return `M${x - 4.5} ${y + 1} L${x + 4} ${y - 0.6}`;
    }).join(' ');
    return `<path d="${twig}" stroke="#4E8E00" stroke-width="1.6" stroke-linecap="round"/>
      ${slip(66, 26, '#FF5C8A', 4)}${slip(22, 44, '#FFD82E', -4)}${slip(58, 63, '#5BC2FF', 3)}${slip(76, 46, '#9B5CFF', 2)}
      <path d="${body}" fill="${c.linear('a', 'green', [0, 0, 1, 0], 0, 2)}"/>
      <path d="${nodes}" stroke="#053A1A" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round"/>
      <path d="${leaves}" fill="${leaf}" stroke="#053A1A" stroke-opacity=".45" stroke-width=".9"/>
      ${slip(30, 62, '#FF8C00', -3)}
      <path d="M64 22 L76 30 L76 44" fill="none" stroke="#B8B8C7" stroke-width=".9"/>`;
  },
};
