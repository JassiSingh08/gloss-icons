const star = require('../src/parts/star');

const body = star.path(48, 63, 24);
module.exports = {
  id: 'military-medal',
  name: 'Military Medal',
  emoji: '🎖️',
  group: 'Activities',
  subgroup: 'award-medal',
  tags: ['medal', 'honour', 'service', 'valour', 'veteran'],
  tone: 'gold',
  body,
  shine: [41, 51, -30],
  shineSize: [4.5, 2],
  draw(c) {
    const stripe = (x, w, fill) => `<rect x="${x}" y="9" width="${w}" height="34" fill="${fill}"/>`;
    c.def(`<clipPath id="${c.id('rib')}"><path d="M30 9 L66 9 L66 39 L48 45 L30 39 Z"/></clipPath>`);
    return `<g clip-path="url(#${c.id('rib')})">
        ${stripe(30, 36, c.linear('ribbon', 'red', [0, 0, 1, 0], 1, 2))}
        ${stripe(37, 4, '#FFF9EC')}${stripe(55, 4, '#FFF9EC')}${stripe(44, 8, c.ramp('navy')[1])}
        <path d="M30 9 L66 9 L66 14 L30 14 Z" fill="#fff" opacity=".2"/>
        <path d="M30 36 L48 42 L66 36 L66 45 L30 45 Z" fill="#000" opacity=".25"/>
      </g>
      <path d="M30 9 L66 9 L66 39 L48 45 L30 39 Z" fill="none" stroke="#3D0003" stroke-opacity=".45" stroke-width="1.1"/>
      <rect x="44.5" y="38" width="7" height="6" rx="2" fill="${c.linear('loop', 'gold', [0, 0, 1, 0], 0, 2)}"/>
      ${star.draw(c, 48, 63, 24, { palette: 'gold', name: 'st' })}
      <circle cx="48" cy="64" r="6.5" fill="${c.radial('boss', 'gold', 0.7, 0.75)}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
