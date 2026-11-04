const v = require('../src/parts/vehicle');
const body = v.rr(10, 16, 76, 68, 13);
module.exports = {
  id: 'railway-track',
  name: 'Railway Track',
  emoji: '🛤️',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['rail', 'tracks', 'train', 'journey', 'distance'],
  tone: 'green',
  body,
  shine: [19, 23, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const sky = c.linear('sky', 'sky', [0, 0, 0, 1], 0, 1);
    const grass = c.linear('a', 'olive', [0, 0, 0, 1], 0, 2);
    const hill = c.linear('hill', 'teal', [0, 0, 0, 1], 1, 2);
    const bed = c.linear('bed', 'sand', [0, 0, 0, 1], 1, 3);
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    const x = (side, y) => 48 + side * (1.2 + (y - 40) * 0.42);
    const ties = [43, 47, 52.5, 59.5, 68.5, 80].map((y) => {
      const h = 0.8 + (y - 40) * 0.09;
      const w = 4 + (y - 40) * 0.55;
      return `<rect x="${(48 - w).toFixed(1)}" y="${(y - h / 2).toFixed(1)}" width="${(2 * w).toFixed(1)}" height="${h.toFixed(1)}" rx="${(h / 3).toFixed(1)}" fill="#6E3A14"/>`;
    }).join('');
    const rail = (side) => `M${x(side, 40).toFixed(1)} 40 L${x(side, 90).toFixed(1)} 90`;
    return `<path d="${body}" fill="${grass}"/>
      <g clip-path="url(#${c.id('k')})">
        <rect x="0" y="0" width="96" height="41" fill="${sky}"/>
        <path d="M6 41 Q20 30 36 37 Q54 24 72 35 Q82 30 92 37 L92 42 L6 42 Z" fill="${hill}"/>
        <path d="M10 90 L45 40 L51 40 L86 90 Z" fill="${bed}"/>
        ${ties}
        <path d="${rail(-1)} ${rail(1)}" stroke="#3A3E52" stroke-width="3.2"/>
        <path d="${rail(-1)} ${rail(1)}" stroke="#D9DCE8" stroke-width="1.6"/>
      </g>`;
  },
};
