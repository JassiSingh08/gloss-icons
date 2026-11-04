const B = require('../src/parts/building');

module.exports = {
  id: 'foggy',
  name: 'Foggy',
  emoji: '🌁',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['fog', 'mist', 'bridge', 'haze', 'grey day'],
  tone: 'slate',
  body: B.TILE,
  shine: [24, 22, -40],
  draw(c) {
    const red = c.linear('red', 'ember', [0, 0, 1, 0], 1, 2);
    const sea = c.linear('sea', 'slate', [0, 0, 0, 1], 1, 2);
    c.def(`<linearGradient id="${c.id('mist')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#E4EAF4" stop-opacity=".9"/></linearGradient>`);
    const mist = `url(#${c.id('mist')})`;
    return `${B.tileSky(c, 'fog')}
      <g clip-path="${B.clip(c)}">
        <path d="M10 70 L86 70 L86 86 L10 86 Z" fill="${sea}"/>
        <path d="M40 24 Q58 50 86 56 M40 24 Q26 44 10 50" fill="none" stroke="#8A1200" stroke-width="1.6"/>
        <path d="M33 86 L33 20 L36.5 20 L36.5 86 Z M43.5 86 L43.5 20 L47 20 L47 86 Z M33 28 L47 28 L47 31 L33 31 Z M33 40 L47 40 L47 43 L33 43 Z" fill="${red}"/>
        <path d="M10 58 L86 58 L86 62 L10 62 Z" fill="${red}"/>
        <path d="M54 58 L54 49 M64 58 L64 53 M74 58 L74 55.5 M26 58 L26 47 M18 58 L18 50" stroke="#8A1200" stroke-width="1"/>
        <path d="${B.rr(4, 48, 40, 9, 4.5)} ${B.rr(50, 40, 44, 9, 4.5)}" fill="${mist}" opacity=".8"/>
        <path d="${B.rr(18, 62, 52, 10, 5)} ${B.rr(-4, 74, 46, 10, 5)} ${B.rr(52, 74, 46, 10, 5)}" fill="${mist}"/>
      </g>`;
  },
};
