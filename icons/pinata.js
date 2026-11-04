// A donkey piñata standing side on, facing left: legs, body, neck and head in one silhouette.
const { turn } = require('../src/parts/ball');

const body = turn('M18 40 C14 38 12 33 15 30 C17 27 22 28 24 30 L25 22 C25.5 18 30 18 30.5 22 L31 30 C34 30 37 32 38 36 L40 46 L74 46 C80 46 84 50 84 56 L84 64 C84 66 82 67 80 67 L80 82 Q80 84 78 84 L72 84 Q70 84 70 82 L70 68 L56 68 L56 82 Q56 84 54 84 L48 84 Q46 84 46 82 L46 68 L40 68 L40 82 Q40 84 38 84 L32 84 Q30 84 30 82 L30 60 C30 54 32 50 30 47 L26 42 C23 42 20 41 18 40 Z', { s: 1.06, ox: 48, oy: 84 });
module.exports = {
  id: 'pinata',
  name: 'Piñata',
  emoji: '🪅',
  group: 'Activities',
  subgroup: 'game',
  tags: ['pinata', 'party', 'birthday', 'fiesta', 'candy'],
  tone: 'magenta',
  body,
  shine: [18, 32, -40],
  shineSize: [4, 1.8],
  draw(c) {
    c.def(`<clipPath id="${c.id('p')}"><path d="${body}"/></clipPath>`);
    // Paper bands in many colours, so the light is laid over them rather than through a palette.
    c.def(`<linearGradient id="${c.id('sh')}" gradientUnits="userSpaceOnUse" x1="14" y1="20" x2="84" y2="84"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".4" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#3D0033" stop-opacity=".45"/></linearGradient>`);
    const bands = ['#FF5C8A', '#FFD82E', '#5BC2FF', '#9BE22E', '#FF8C00', '#9B5CFF', '#FF5C8A', '#FFD82E', '#5BC2FF'];
    const stripes = bands.map((col, i) => `<rect x="0" y="${16 + i * 7.6}" width="96" height="7.6" fill="${col}"/>`).join('');
    const fringe = bands.map((_, i) => `M0 ${22.6 + i * 7.6} L96 ${22.6 + i * 7.6}`).join(' ');
    return `<path d="M60 46 L60 8" stroke="#B8B8C7" stroke-width="1.4"/>
      <path d="${body}" fill="#E21FC4"/>
      <g clip-path="url(#${c.id('p')})">
        ${stripes}
        <path d="${fringe}" fill="none" stroke="#000" stroke-opacity=".2" stroke-width="2" stroke-dasharray="1.2 1.6"/>
        <rect x="0" y="0" width="96" height="96" fill="url(#${c.id('sh')})"/>
      </g>
      <circle cx="20" cy="33.6" r="1.9" fill="#12002E"/>
      <path d="M86 51 C90 52 91 58 89 64" fill="none" stroke="#FF5C8A" stroke-width="2.6" stroke-linecap="round"/>`;
  },
};
