const F = require('../src/parts/figure');

// Front crawl: capped head turned to breathe, one arm swinging over, the water a glossy band.
const WATER = 'M8 84 L8 58 Q16 52 24 58 T40 58 T56 58 T72 58 T88 58 L88 84 Z';
const CAP = `<path d="M17 52 C14 26 30 12 48 12 C66 12 82 26 79 52 C70 46 60 44 48 44 C36 44 26 46 17 52 Z" fill="url(#C)" stroke="#3D0003" stroke-width="2.4"/>
  <path d="M28 20 Q36 14 46 14" stroke="#fff" stroke-opacity=".45" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M20 52 L76 52" stroke="#12002E" stroke-width="2.6"/>
  <ellipse cx="38" cy="53" rx="8" ry="6.5" fill="#5BC2FF" stroke="#12002E" stroke-width="2.6"/><ellipse cx="60" cy="53" rx="8" ry="6.5" fill="#5BC2FF" stroke="#12002E" stroke-width="2.6"/>
  <ellipse cx="36" cy="51" rx="3" ry="1.6" fill="#fff" opacity=".7"/><ellipse cx="58" cy="51" rx="3" ry="1.6" fill="#fff" opacity=".7"/>`;
module.exports = {
  id: 'person-swimming',
  name: 'Person Swimming',
  emoji: '🏊',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['swim', 'swimming', 'pool', 'crawl', 'water'],
  tone: 'blue',
  ...F.shineOf(36, 44, 13),
  ...F.build((c) => {
    const water = c.linear('water', 'blue', [0, 0, 0, 1], 0, 2);
    const head = F.head(c, { at: [36, 46], r: 13, face: F.face.calm({ dx: 2 }).replace(/<ellipse[^>]*>/g, ''), hat: CAP.replace('url(#C)', c.radial('cap', 'red', 0.3, 0.2)) });
    return {
      art: head.back + head.front
        + F.limb(c, [[50, 60], [58, 40], [70, 31], [79, 40]], 9, 'bare', 7.4) + F.hand(c, 79, 41, { dir: 80, thumb: -1 })
        + `<path d="${WATER}" fill="${water}"/>
          <path d="M14 64 Q22 60 30 64 M54 68 Q62 64 70 68 M24 76 Q32 72 40 76" stroke="#C9ECFF" stroke-opacity=".6" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
      extra: `<circle cx="84" cy="52" r="1.8" fill="#C9ECFF"/><circle cx="88" cy="46" r="1.3" fill="#C9ECFF"/><circle cx="22" cy="50" r="1.6" fill="#C9ECFF"/>`,
    };
  }),
};
