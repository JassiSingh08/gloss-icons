const body = 'M22 46 C20 26 34 13 53 13 C72 13 84 26 82 45 C81 56 75 63 67 66 L67 76 Q67 84 59 84 L35 84 Q27 84 27 76 L27 64 C24 59 22.5 53 22 46 Z';
module.exports = {
  id: 'boxing-glove',
  name: 'Boxing Glove',
  emoji: '🥊',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['boxing', 'fight', 'punch', 'knockout', 'sport'],
  tone: 'red',
  body,
  shine: [35, 25, -40],
  draw(c) {
    const glove = c.radial('a', 'red', 0.35, 0.2);
    const cuff = c.linear('cuff', 'white', [0, 0, 1, 0], 0, 2);
    return `<path d="${body}" fill="${glove}"/>
      <path d="M27 66 L67 66 L67 76 Q67 84 59 84 L35 84 Q27 84 27 76 Z" fill="${cuff}"/>
      <path d="M27 66 L67 66" stroke="#3D0003" stroke-opacity=".45" stroke-width="2"/>
      <path d="M41 70 L53 80 M53 70 L41 80" stroke="#8C83AD" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M24 60 C28 47 38 41 49 44 C57 46.5 58 55 51 59 C46 62 40 62 35 60" fill="none" stroke="#3D0003" stroke-opacity=".5" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M27 55 C31 47 39 44 47 46" fill="none" stroke="#FFB3A6" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M50 24 C60 22 70 26 74 34" fill="none" stroke="#3D0003" stroke-opacity=".25" stroke-width="1.6" stroke-linecap="round"/>`;
  },
};
