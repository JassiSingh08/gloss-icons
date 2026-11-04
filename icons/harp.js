const outer = 'M15 84 L15 27 C15 14 26 9 34 15 C42 21 50 21 58 15 C66 9 78 8 83 15 C85 18 84.5 22 82.5 25 L49 84 Z';
const hole = 'M23 77 L42.5 77 L74 25 C70 19 64 19 59 23 C51 29.5 41 29.5 33 23 C28.5 19.5 23 21 23 28 Z';

module.exports = {
  id: 'harp',
  name: 'Harp',
  emoji: '🪉',
  group: 'Objects',
  subgroup: 'musical-instrument',
  tags: ['harp', 'strings', 'classical', 'angelic', 'music'],
  tone: 'gold',
  body: [outer, hole],
  shine: [18.5, 30, -80],
  shineSize: [5, 1.8],
  draw(c) {
    const frame = c.radial('a', 'gold', 0.3, 0.25);
    c.def(`<clipPath id="${c.id('h')}"><path d="${hole}"/></clipPath>`);
    let strings = '';
    let reds = '';
    for (let k = 0, x = 27; x < 72; x += 4.5, k++) {
      if (k % 4 === 1) reds += `M${x} 10 L${x} 84 `;
      else strings += `M${x} 10 L${x} 84 `;
    }
    return `<path d="${outer} ${hole}" fill="${frame}"/>
      <g clip-path="url(#${c.id('h')})">
        <path d="${strings}" stroke="#FFF9EC" stroke-opacity=".85" stroke-width=".9"/>
        <path d="${reds}" stroke="#FF7A62" stroke-width=".9"/>
      </g>
      <path d="M52 80 L79 32" stroke="#5E3A00" stroke-opacity=".4" stroke-width="1.2"/>
      <circle cx="19" cy="22" r="2.4" fill="#FFF3A6" opacity=".8"/>`;
  },
};
