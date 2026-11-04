const body = 'M48 38 C42 28 30 18 20 21 C11 24 11 38 16 45 C21 52 34 52 44 47 C46 48 50 48 52 47 C62 52 75 52 80 45 C85 38 85 24 76 21 C66 18 54 28 48 38 Z';
module.exports = {
  id: 'ribbon',
  name: 'Ribbon',
  emoji: '🎀',
  group: 'Activities',
  subgroup: 'event',
  tags: ['bow', 'ribbon', 'cute', 'gift', 'pretty'],
  tone: 'pink',
  body,
  shine: [21, 28, -50],
  shineSize: [5, 2.2],
  draw(c) {
    const satin = c.radial('a', 'pink', 0.3, 0.2);
    const tail = c.linear('tail', 'pink', [0, 0, 1, 1], 1, 3);
    const deep = c.ramp('pink')[3];
    return `<path d="M44 46 L30 78 L37 75 L40 83 L50 50 Z" fill="${tail}" stroke="${deep}" stroke-opacity=".5" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M52 46 L66 78 L59 75 L56 83 L46 50 Z" fill="${tail}" stroke="${deep}" stroke-opacity=".5" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="${body}" fill="${satin}"/>
      <path d="M44 40 C36 34 28 30 22 31 M52 40 C60 34 68 30 74 31" fill="none" stroke="${deep}" stroke-opacity=".35" stroke-width="1.6" stroke-linecap="round"/>
      <rect x="41.5" y="34" width="13" height="15" rx="5" fill="${c.radial('knot', 'pink', 0.3, 0.2)}" stroke="${deep}" stroke-opacity=".55" stroke-width="1.2"/>`;
  },
};
