const F = require('../src/parts/figure');

// Sunk to the chin in a claw-foot tub, foam heaped on top, one foot propped on the rim.
const TUB = 'M8 52 L88 52 L86 60 C85 74 76 80 64 80 L32 80 C20 80 11 74 10 60 Z';
module.exports = {
  id: 'person-taking-bath',
  name: 'Person Taking Bath',
  emoji: '🛀',
  group: 'People & Body',
  subgroup: 'person-resting',
  tags: ['bath', 'bathtub', 'relax', 'soak', 'bubbles'],
  tone: 'white',
  shine: [20, 60, -20], shineSize: [6, 2.4],
  ...F.build((c) => {
    const tub = c.linear('tub', 'white', [0, 0, 0, 1], 0, 3);
    const foam = c.radial('foam', 'white', 0.3, 0.2);
    const H = F.head(c, { at: [32, 38], r: 13, hair: 'short', color: 'auburn', face: F.face.closed() });
    const bubbles = [[44, 50, 7], [54, 48, 6], [63, 50, 6.5], [73, 50, 5.5], [20, 50, 5], [50, 44, 3.5], [58, 42, 2.8]]
      .map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${foam}" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1"/>`).join('');
    const feet = [[26, 80, 22, 86], [70, 80, 74, 86]].map(([a, b, x, y]) => `<path d="M${a} ${b} L${x} ${y}" stroke="#C98500" stroke-width="4" stroke-linecap="round"/>`).join('');
    return {
      art: feet + H.back + H.front
        + F.limb(c, [[62, 54], [69, 31], [79, 43]], 8.4, 'bare', 7) + `<ellipse cx="82" cy="46" rx="6.2" ry="3.6" transform="rotate(50 82 46)" fill="${require('../src/parts/skin').fill(c)}" stroke="#7A4E00" stroke-opacity=".5" stroke-width="1.1"/>`
        + bubbles + `<path d="${TUB}" fill="${tub}"/><rect x="6" y="50" width="84" height="5" rx="2.5" fill="#F7F5FF" stroke="#8C83AD" stroke-width="1.2"/>`,
      extra: `<circle cx="40" cy="22" r="2.6" fill="none" stroke="#C9ECFF" stroke-width="1.3"/><circle cx="48" cy="16" r="1.8" fill="none" stroke="#C9ECFF" stroke-width="1.2"/>`,
    };
  }),
};
