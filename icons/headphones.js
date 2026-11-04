// The band ends exactly on the cups' top edges, so the three outline pieces meet without any of
// them showing through another.
const band = 'M15.5 52 A32.5 41 0 0 1 80.5 52 L73 52 A25 33.5 0 0 0 23 52 Z';
const left = 'M16 52 L23.5 52 Q30 52 30 60 L30 75 Q30 83.5 22 83.5 L19.5 83.5 Q11.5 83.5 11.5 75 L11.5 60 Q11.5 52 16 52 Z';
const right = 'M80 52 L72.5 52 Q66 52 66 60 L66 75 Q66 83.5 74 83.5 L76.5 83.5 Q84.5 83.5 84.5 75 L84.5 60 Q84.5 52 80 52 Z';

module.exports = {
  id: 'headphones',
  name: 'Headphones',
  emoji: '🎧',
  group: 'Objects',
  subgroup: 'music',
  tags: ['music', 'listen', 'audio', 'songs', 'playlist'],
  tone: 'magenta',
  body: [band, left, right],
  shine: [17, 61, -85],
  shineSize: [5, 2],
  draw(c) {
    const shell = c.radial('a', 'magenta', 0.3, 0.2);
    const cupFill = c.radial('cup', 'magenta', 0.3, 0.2);
    const pad = c.linear('pad', 'purple', [0, 0, 1, 0], 1, 2);
    const metal = c.linear('metal', 'silver', [0, 0, 1, 0], 0, 2);
    c.def(`<clipPath id="${c.id('band')}"><path d="${band}"/></clipPath>`);
    const m = c.ramp('magenta');
    const p = c.ramp('purple');
    return `<path d="M27 55 L32 55 Q36.5 55 36.5 60 L36.5 76 Q36.5 81 32 81 L27 81 Z" fill="${pad}" stroke="${p[3]}" stroke-opacity=".5" stroke-width="1"/>
      <path d="M69 55 L64 55 Q59.5 55 59.5 60 L59.5 76 Q59.5 81 64 81 L69 81 Z" fill="${pad}" stroke="${p[3]}" stroke-opacity=".5" stroke-width="1"/>
      <path d="${band}" fill="${shell}"/>
      <g clip-path="url(#${c.id('band')})"><rect x="10" y="44" width="76" height="9" fill="${metal}"/>
        <path d="M30 22 Q48 9 66 22" fill="none" stroke="${m[3]}" stroke-opacity=".35" stroke-width="2.4"/></g>
      <path d="${left}" fill="${cupFill}"/>
      <path d="${right}" fill="${cupFill}"/>
      <ellipse cx="20.75" cy="68" rx="4.2" ry="8" fill="${m[2]}" opacity=".4"/>
      <ellipse cx="75.25" cy="68" rx="4.2" ry="8" fill="${m[2]}" opacity=".4"/>`;
  },
};
