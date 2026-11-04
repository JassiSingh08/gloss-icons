const F = require('../src/parts/figure');

// Up out of the water to shoot, the ball held high; a polo cap with ear guards.
const WATER = 'M8 84 L8 64 Q16 58 24 64 T40 64 T56 64 T72 64 T88 64 L88 84 Z';
const CAP = `<path d="M17 52 C14 26 30 12 48 12 C66 12 82 26 79 52 C70 46 60 44 48 44 C36 44 26 46 17 52 Z" fill="url(#C)" stroke="#080C3D" stroke-width="2.4"/>
  <circle cx="18" cy="56" r="8" fill="url(#C)" stroke="#080C3D" stroke-width="2.2"/><circle cx="18" cy="56" r="3.5" fill="#1A238A"/>
  <circle cx="78" cy="56" r="8" fill="url(#C)" stroke="#080C3D" stroke-width="2.2"/><circle cx="78" cy="56" r="3.5" fill="#1A238A"/>
  <path d="M28 20 Q36 14 46 14" stroke="#fff" stroke-opacity=".45" stroke-width="3" fill="none" stroke-linecap="round"/>`;
module.exports = {
  id: 'person-playing-water-polo',
  name: 'Person Playing Water Polo',
  emoji: '🤽',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['water polo', 'pool', 'ball', 'swim', 'team'],
  tone: 'blue',
  ...F.shineOf(40, 42, 13),
  ...F.build((c) => {
    const water = c.linear('water', 'blue', [0, 0, 0, 1], 0, 2);
    const ball = c.radial('ball', 'gold', 0.35, 0.3);
    const head = F.head(c, { at: [40, 42], r: 13, face: F.face.focus({ dx: 3 }), hat: CAP.replaceAll('url(#C)', c.radial('cap', 'navy', 0.3, 0.2)) });
    return {
      art: `<path d="M22 70 C22 60 30 56 40 56 C50 56 58 60 58 70 Z" fill="${F.cloth(c, 'red')}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1.1"/>`
        + head.back + head.front
        + F.limb(c, [[54, 62], [62, 48], [64, 34]], 8.4, 'bare', 7) + F.hand(c, 64, 30, { dir: -90, thumb: -1 })
        + `<circle cx="66" cy="20" r="9.5" fill="${ball}" stroke="#5E3A00" stroke-width="1.3"/>
          <path d="M57 18 C62 22 70 22 75 18 M60 12 C64 18 64 24 60 28 M72 12 C68 18 68 24 72 28" stroke="#0049A8" stroke-opacity=".75" stroke-width="1.6" fill="none"/>
          <path d="${WATER}" fill="${water}"/>
          <path d="M14 66 Q22 62 30 66 M56 70 Q64 66 72 70 M26 78 Q34 74 42 78" stroke="#C9ECFF" stroke-opacity=".6" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
    };
  }),
};
