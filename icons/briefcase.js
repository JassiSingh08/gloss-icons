const body = 'M22 29 L74 29 Q82 29 82 37 L82 75 Q82 83 74 83 L22 83 Q14 83 14 75 L14 37 Q14 29 22 29 Z';
const handle = 'M36 30 L36 22.5 Q36 16 42.5 16 L53.5 16 Q60 16 60 22.5 L60 30 L54.5 30 L54.5 23.5 Q54.5 21.5 52.5 21.5 L43.5 21.5 Q41.5 21.5 41.5 23.5 L41.5 30 Z';

module.exports = {
  id: 'briefcase',
  name: 'Briefcase',
  tags: ['work', 'office', 'business', 'job', 'career'],
  tone: 'brown',
  body,
  shine: [23, 36, -25],
  draw(c) {
    const leather = c.radial('a', 'brown', 0.32, 0.2);
    const strap = c.linear('handle', 'brown', [0, 0, 0, 1], 1, 3);
    const gold = c.linear('gold', 'gold', [0, 0, 0, 1], 0, 2);
    const b = c.ramp('brown');
    return `<path d="${handle}" fill="${strap}" stroke="${b[3]}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${body}" fill="${leather}"/>
      <path d="M14.6 49 Q48 53 81.4 49" fill="none" stroke="${b[3]}" stroke-opacity=".45" stroke-width="1.6"/>
      <path d="M14.6 51.5 Q48 55.5 81.4 51.5" fill="none" stroke="${b[0]}" stroke-opacity=".35" stroke-width="1"/>
      <path d="M18 33 L78 33 M18 79 L78 79" fill="none" stroke="${b[0]}" stroke-opacity=".35" stroke-width="1" stroke-dasharray="2.2 2"/>
      <rect x="25" y="46" width="9" height="11" rx="2" fill="${gold}" stroke="${c.ramp('gold')[3]}" stroke-opacity=".5" stroke-width="1"/>
      <rect x="62" y="46" width="9" height="11" rx="2" fill="${gold}" stroke="${c.ramp('gold')[3]}" stroke-opacity=".5" stroke-width="1"/>
      <rect x="28" y="51" width="3" height="3.4" rx=".8" fill="${b[3]}" opacity=".6"/>
      <rect x="65" y="51" width="3" height="3.4" rx=".8" fill="${b[3]}" opacity=".6"/>`;
  },
};
