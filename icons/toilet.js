// Side view: cistern at the back, bowl and seat to the right, on a narrow pedestal.
const body = 'M21 14 L39 14 Q43 14 43 18 L43 45 L77 45 Q83 45 83 50.5 Q83 55 79 57 C75 64 67 68 61 70 L64 84 L35 84 L38 71 C31 67 27 62 26 56 L22 56 Q17 56 17 51 L17 18 Q17 14 21 14 Z';
module.exports = {
  id: 'toilet',
  name: 'Toilet',
  emoji: '🚽',
  group: 'Objects',
  subgroup: 'household',
  tags: ['toilet', 'bathroom', 'restroom', 'loo', 'wc'],
  tone: 'white',
  body,
  shine: [24, 22, -60],
  shineSize: [5, 2],
  draw(c) {
    const china = c.radial('a', 'white', 0.3, 0.2);
    const tank = c.linear('t', 'white', [0, 0, 1, 1], 0, 2);
    const seat = c.linear('s', 'sky', [0, 0, 0, 1], 0, 2);
    const lever = c.linear('l', 'silver', [0, 0, 0, 1], 0, 2);
    return `<path d="${body}" fill="${china}"/>
      <path d="M21 14 L39 14 Q43 14 43 18 L43 52 L17 52 L17 18 Q17 14 21 14 Z" fill="${tank}"/>
      <path d="M16 20.5 L44 20.5" stroke="#8C83AD" stroke-opacity=".55" stroke-width="1.3"/>
      <path d="M18 17.4 L42 17.4" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>
      <rect x="20" y="25" width="9" height="3.6" rx="1.8" fill="${lever}" stroke="#3A3E52" stroke-opacity=".5" stroke-width=".8"/>
      <path d="M42 45 L78 45 Q83 45 83 49.5 Q83 52 79 52 L42 52 Z" fill="${seat}" stroke="#0A3A6B" stroke-opacity=".45" stroke-width="1.1"/>
      <path d="M46 47.4 L77 47.4" stroke="#fff" stroke-opacity=".8" stroke-width="1.1" stroke-linecap="round"/>
      <path d="M38 71 L61 70" stroke="#8C83AD" stroke-opacity=".45" stroke-width="1.2"/>`;
  },
};
