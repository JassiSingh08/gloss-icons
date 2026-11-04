const g = require('../src/parts/glass');
const body = 'M12 81 C24 70 33 52 40 32 Q42 26 47 26 L49 26 Q54 26 56 32 C63 52 72 70 84 81 Q85 84 81.5 84 L14.5 84 Q11 84 12 81 Z';
module.exports = {
  id: 'mount-fuji',
  name: 'Mount Fuji',
  emoji: '🗻',
  group: 'Travel & Places',
  subgroup: 'place-geographic',
  tags: ['fuji', 'mountain', 'japan', 'volcano', 'snow'],
  tone: 'navy',
  body,
  shine: [33, 54, -58],
  shineSize: [5, 1.8],
  draw(c) {
    const slope = c.radial('a', 'navy', 0.4, 0.15);
    const snow = c.radial('snow', 'white', 0.35, 0.2);
    const sun = c.radial('sun', 'red', 0.35, 0.3);
    const n = c.ramp('navy');
    return `<circle cx="70" cy="22" r="10" fill="${sun}" ${g.edge('#3D0003', 1.1, 0.5)}/>
      <path d="${body}" fill="${slope}"/>
      <path d="M49 26 Q54 26 56 32 C63 52 72 70 84 81 Q85 84 81.5 84 L70 84 C64 64 56 46 49 26 Z" fill="${n[2]}" opacity=".5"/>
      <path d="M40 32 Q42 26 47 26 L49 26 Q54 26 56 32 L59.5 41 C57.5 43 56 40 54.5 44 C53 49 51 48 50.5 44 C50 40 47.5 41 46 46 C45 50 42.5 49 42.5 45 C42.5 41 39.5 43 36.5 42 Z" fill="${snow}"/>
      <path d="M41.5 31 Q43.5 27.5 46 27.4" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>`;
  },
};
