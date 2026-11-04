const star = require('../src/parts/star');

const body = 'M26 12 L70 12 Q84 12 84 26 L84 70 Q84 84 70 84 L26 84 Q12 84 12 70 L12 26 Q12 12 26 12 Z';
// Scattered pinprick stars: x, y, r.
const DOTS = [[22, 22, 1.2], [33, 34, 0.9], [71, 23, 1.3], [62, 40, 0.9], [20, 56, 1], [76, 50, 1.1], [44, 22, 0.8], [56, 62, 0.9], [30, 70, 0.8], [80, 34, 0.8]];
module.exports = {
  id: 'milky-way',
  name: 'Milky Way',
  emoji: '🌌',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['galaxy', 'space', 'night sky', 'stars', 'universe'],
  tone: 'navy',
  body,
  shine: [24, 20, -30],
  shineSize: [6, 2.2],
  draw(c) {
    c.def(`<clipPath id="${c.id('tile')}"><path d="${body}"/></clipPath>`);
    c.def(`<radialGradient id="${c.id('sky')}" cx="0.3" cy="0.2" r="1"><stop offset="0" stop-color="#3D4FD6"/><stop offset="0.45" stop-color="#22156B"/><stop offset="1" stop-color="#0A0626"/></radialGradient>`);
    c.def(`<radialGradient id="${c.id('band')}" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.25" stop-color="#FFC9F0" stop-opacity=".9"/><stop offset="0.6" stop-color="#C58BFF" stop-opacity=".45"/><stop offset="1" stop-color="#7A1FE0" stop-opacity="0"/></radialGradient>`);
    c.def(`<linearGradient id="${c.id('hill')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1A1240"/><stop offset="1" stop-color="#05030F"/></linearGradient>`);
    const dots = DOTS.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity=".85"/>`).join('');
    return `<path d="${body}" fill="url(#${c.id('sky')})"/>
      <g clip-path="url(#${c.id('tile')})">
        <ellipse cx="50" cy="47" rx="46" ry="15" fill="url(#${c.id('band')})" transform="rotate(-38 50 47)"/>
        <ellipse cx="51" cy="46" rx="24" ry="4.5" fill="#fff" opacity=".55" transform="rotate(-38 51 46)"/>
        ${dots}
        <path d="M8 76 C20 68 30 66 40 70 C50 74 58 64 70 63 C78 62 84 66 90 68 L90 90 L8 90 Z" fill="url(#${c.id('hill')})"/>
      </g>
      ${star.sparkle(68, 30, 4.2)}${star.sparkle(28, 50, 3.2, '#FFF3A6')}`;
  },
};
