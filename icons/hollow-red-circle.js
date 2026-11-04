// A ring: the hole is a second subpath wound the other way, so the clip and fill leave it open.
const R = 34;
const r = 21;
const body = `M48 ${47 - R} A${R} ${R} 0 1 1 47.99 ${47 - R} Z M48 ${47 - r} A${r} ${r} 0 1 0 48.01 ${47 - r} Z`;
module.exports = {
  id: 'hollow-red-circle',
  name: 'Hollow Red Circle',
  emoji: '⭕',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['circle', 'ring', 'correct', 'yes', 'o'],
  tone: 'red',
  body,
  shine: [27, 30, -50],
  shineSize: [6, 2.6],
  draw(c) {
    const ring = c.radial('a', 'red', 0.3, 0.22);
    // The hole's own rim: shaded on its upper-left lip, lit on the lower-right one.
    const lip = c.linear('lip', 'red', [0, 0, 1, 1], 3, 0);
    return `<path d="${body}" fill="${ring}" fill-rule="evenodd"/>
      <circle cx="48" cy="47" r="${r + 1.6}" fill="none" stroke="${lip}" stroke-width="3.2" opacity=".55"/>`;
  },
};
