const v = require('../src/parts/vehicle');
const body = 'M15 74 Q11 74 11 70 L11 27 Q11 21 17 21 L55 21 Q59 21 59 25 L59 33 L67 33 Q71 33 73 37 L79.5 47.5 Q84 49.5 84 55 L84 70 Q84 74 80 74 Z';
module.exports = {
  id: 'ambulance',
  name: 'Ambulance',
  emoji: '🚑',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['emergency', 'hospital', 'medical', 'siren', 'rescue'],
  tone: 'white',
  body,
  shine: [17, 27, -35],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'white', [0, 0, 0.5, 1], 0, 2);
    const cross = c.radial('cross', 'red', 0.35, 0.3);
    const dome = c.radial('dome', 'blue', 0.35, 0.3);
    const r = c.ramp('white');
    return `<path d="M49 21 L49 17 Q49 13.5 53 13.5 Q57 13.5 57 17 L57 21 Z" fill="${dome}" stroke="#001E4D" stroke-opacity=".5" stroke-width="1.1"/>
      <ellipse cx="51.5" cy="16.5" rx="1.4" ry="2" fill="#fff" opacity=".8"/>
      <path d="${body}" fill="${paint}"/>
      <path d="M11.5 54 L84 54 L84 59 L11.5 59 Z" fill="#E3120B"/>
      <path d="M31 28 L37 28 L37 34 L43 34 L43 40 L37 40 L37 46 L31 46 L31 40 L25 40 L25 34 L31 34 Z" fill="${cross}" stroke="#3D0003" stroke-opacity=".4" stroke-width="1"/>
      <path d="M62.5 37 L68 37 Q70 37 71.2 39 L77 48.5 L62.5 48.5 Z" fill="${v.glass(c)}"/>
      ${v.win(c, 47, 30, 8, 15, 1.5)}
      <path d="M59 33 L59 70" stroke="${r[3]}" stroke-opacity=".45" stroke-width="1.3"/>
      <path d="M83.8 61 L80 61 Q78.5 61 78.5 62.5 L78.5 65 Q78.5 66.5 80 66.5 L83.8 66.5 Z" fill="#FFF7A8"/>
      <path d="M11.3 61 L13.5 61 Q15 61 15 62.5 L15 65 Q15 66.5 13.5 66.5 L11.3 66.5 Z" fill="#FF3B30"/>
      ${v.wheel(c, 26, 74.5)}${v.wheel(c, 69, 74.5)}`;
  },
};
