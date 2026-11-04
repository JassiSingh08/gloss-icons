const g = require('../src/parts/garment');

const body = 'M39 16 Q39 12 43 12 L76 12 Q80 12 80 16 L80.5 60 Q81.5 66 80.5 71 L78.5 84 L70.5 84 L68.5 71 Q60 74 52 78 Q42 83.5 28 84 L16 84 Q10 84 10 79 Q10 73 18 71 Q32 67 39 58 Z';

module.exports = {
  id: 'womans-boot',
  name: 'Woman’s Boot',
  emoji: '👢',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['boot', 'knee high', 'fashion', 'autumn', 'shoe'],
  tone: 'amber',
  body,
  shine: [44, 30, -85],
  shineSize: [8, 2.4],
  draw(c) {
    const suede = c.radial('a', 'amber', 0.3, 0.2);
    const cuff = c.linear('cuff', 'amber', [0, 0, 0, 1], 1, 2);
    const heel = c.linear('heel', 'brown', [0, 0, 1, 0], 1, 3);
    const zip = c.linear('zip', 'silver', [0, 0, 0, 1], 0, 2);
    const a = c.ramp('amber');
    return `<path d="${body}" fill="${suede}"/>
      <path d="M39 16 Q39 12 43 12 L76 12 Q80 12 80 16 L80.1 21 Q60 24 39 21 Z" fill="${cuff}"/>
      <path d="M39 21 Q60 24 80.1 21" fill="none" stroke="${a[3]}" stroke-opacity=".5" stroke-width="1.3"/>
      <path d="M70.5 84 L68.5 71 L80.5 71 L78.5 84 Z" fill="${heel}"/>
      <path d="M10.5 80.5 Q28 81.5 42 78.5 Q56 74 68.5 71" fill="none" stroke="${a[3]}" stroke-opacity=".6" stroke-width="1.6"/>
      <path d="M74 25 L74 64" stroke="${zip}" stroke-width="1.6"/>
      <path d="M74 25 L74 64" stroke="${a[3]}" stroke-opacity=".5" stroke-width=".6" stroke-dasharray="1 1"/>
      <rect x="72.4" y="24" width="3.2" height="5" rx="1" fill="${zip}"/>
      ${g.fold('M47 30 Q45 44 47 56 M60 52 Q56 60 50 64', a[3], 0.35, 1.5)}`;
  },
};
