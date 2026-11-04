const B = require('../src/parts/building');

const body = 'M16 37.5 L27 26.5 Q28 25.5 29.5 25.5 L80 25.5 Q82 25.5 82 27.5 L82 68.5 Q82 69.5 81 70.5 L70 81.5 Q69 82.5 67.5 82.5 L16 82.5 Q14 82.5 14 80.5 L14 40 Q14 38.5 16 37.5 Z';
module.exports = {
  id: 'brick',
  name: 'Brick',
  emoji: '🧱',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['wall', 'build', 'masonry', 'construction', 'solid'],
  tone: 'ember',
  body,
  shine: [24, 33, -45],
  shineSize: [6, 2.4],
  draw(c) {
    const mortar = c.linear('mortar', 'sand', [0, 0, 1, 1], 0, 2);
    const a = c.linear('a', 'ember', [0, 0, 1, 1], 0, 2);
    const b = c.linear('b', 'ember', [0, 0, 1, 1], 1, 2);
    const top = c.linear('top', 'ember', [0, 0, 1, 1], 0, 1);
    const side = c.linear('side', 'ember', [0, 0, 1, 1], 2, 3);
    // Front face 14..68 wide, four courses of 11; alternate courses start half a brick in.
    let front = '';
    for (let r = 0; r < 4; r++) {
      const y = 39 + r * 11;
      const xs = r % 2 ? [14, 26, 44, 62] : [14, 32, 50];
      xs.forEach((x0, i) => {
        const x1 = (xs[i + 1] ?? 68.5) - 1.6;
        front += `<path d="${B.rr(x0 + (x0 === 14 ? 0.8 : 0), y + 0.6, x1 - x0 - (x0 === 14 ? 0.8 : 0), 9.4, 1.6)}" fill="${(r + i) % 2 ? b : a}"/>`;
      });
    }
    // Top face: bricks lying back towards the upper right.
    const tb = (x, w) => `<path d="M${x} 38 L${x + w} 38 L${x + w + 11} 27 L${x + 11} 27 Z" fill="${top}"/>`;
    const sideRows = [0, 1, 2, 3].map((r) => `<path d="M69.5 ${39.6 + r * 11} L81 ${28.6 + r * 11} L81 ${37.4 + r * 11} L69.5 ${48.4 + r * 11} Z" fill="${side}"/>`).join('');
    return `<path d="${body}" fill="${mortar}"/>
      ${tb(16.5, 16)}${tb(34.5, 16)}${tb(52.5, 14.5)}
      ${front}${sideRows}`;
  },
};
