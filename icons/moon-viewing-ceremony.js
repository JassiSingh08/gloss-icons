const body = 'M48 14 A35 35 0 1 1 47.99 14 Z';
module.exports = {
  id: 'moon-viewing-ceremony',
  name: 'Moon Viewing Ceremony',
  emoji: '🎑',
  group: 'Activities',
  subgroup: 'event',
  tags: ['tsukimi', 'full moon', 'autumn', 'dango', 'japan'],
  tone: 'navy',
  body,
  shine: [30, 28, -40],
  draw(c) {
    c.def(`<clipPath id="${c.id('win')}"><path d="${body}"/></clipPath>`);
    const sky = c.radial('a', 'navy', 0.4, 0.2);
    const grass = '#C9A86A';
    const plume = (x, y, deg) => `<path d="M${x} ${y} c-2 -6 -1 -12 2 -16 c1 5 1 11 -2 16 Z" fill="#FFF4D6" opacity=".9" transform="rotate(${deg} ${x} ${y})"/>`;
    const dango = (x, y) => `<circle cx="${x}" cy="${y}" r="5.4" fill="${c.radial('d' + x + y, 'white', 0.3, 0.25)}" stroke="#8C83AD" stroke-opacity=".5" stroke-width=".8"/>`;
    return `<path d="${body}" fill="${sky}"/>
      <g clip-path="url(#${c.id('win')})">
        <circle cx="58" cy="38" r="14" fill="${c.radial('moon', 'gold', 0.35, 0.3)}"/>
        <circle cx="54" cy="35" r="2.6" fill="#C98500" opacity=".25"/><circle cx="63" cy="44" r="2" fill="#C98500" opacity=".25"/>
        <path d="M13 70 C30 64 64 64 83 70 L83 90 L13 90 Z" fill="#141420" opacity=".75"/>
        <path d="M26 82 C26 66 24 52 18 40 M30 82 C31 64 34 52 40 42 M22 82 C20 70 14 62 10 58" fill="none" stroke="${grass}" stroke-width="1.6" stroke-linecap="round"/>
        ${plume(18, 40, -24)}${plume(40, 42, 28)}${plume(10, 58, -50)}
        <path d="M52 76 L80 76 L77 80 L55 80 Z" fill="${c.linear('tray', 'brown', [0, 0, 0, 1], 0, 2)}"/>
        ${dango(60, 71)}${dango(71, 71)}${dango(65.5, 62)}
      </g>`;
  },
};
