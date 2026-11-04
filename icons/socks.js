const sock = 'M33 13 L55 13 L55 54 Q55 61 50 66 L41 76 Q34 84 25 84 L19 84 Q12 84 12 77.5 Q12 71 18.5 67.5 L33 56 Z';

module.exports = {
  id: 'socks',
  name: 'Socks',
  emoji: '🧦',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['socks', 'cozy', 'winter', 'feet', 'laundry'],
  tone: 'red',
  body: sock,
  shine: [37, 30, -85],
  shineSize: [6, 2],
  draw(c) {
    const knit = c.radial('a', 'red', 0.3, 0.2);
    const knitB = c.linear('b', 'red', [0, 0, 1, 1], 1, 3);
    const cuff = c.linear('cuff', 'white', [0, 0, 1, 1], 0, 2);
    const r = c.ramp('red');
    const w = c.ramp('white');
    c.def(`<clipPath id="${c.id('cl')}"><path d="${sock}"/></clipPath>`);
    const art = (fill, patch) => `<path d="${sock}" fill="${fill}"/>
      <g clip-path="url(#${c.id('cl')})">
        <path d="M30 13 L58 13 L58 25 L30 25 Z" fill="${cuff}"/>
        <path d="M37 14 L37 24.5 M41.5 14 L41.5 24.5 M46 14 L46 24.5 M50.5 14 L50.5 24.5" stroke="${w[3]}" stroke-opacity=".45" stroke-width="1.2"/>
        <path d="M30 25 L58 25" stroke="${r[3]}" stroke-opacity=".5" stroke-width="1.2"/>
        <path d="M30 32 L58 32 L58 37 L30 37 Z M30 42 L58 42 L58 47 L30 47 Z" fill="${patch}"/>
        <circle cx="57" cy="64" r="10" fill="${patch}"/>
        <circle cx="12" cy="81" r="11" fill="${patch}"/>
      </g>`;
    return `<g transform="translate(17 -5)">${art(knitB, w[2])}<path d="${sock}" fill="none" stroke="${r[3]}" stroke-opacity=".6" stroke-width="1.2"/></g>
      ${art(knit, '#FFF6F2')}`;
  },
};
