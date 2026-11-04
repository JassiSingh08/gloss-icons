const m = require('../src/parts/metal');
const outline = 'M18 60 L44 44 L86 52 L86 58 L60 78 L18 68 Z';
// Drawn at a comfortable size, then scaled up about the board's centre to fill the tile.
const S = { at: [-14, -19], s: 1.28 };
module.exports = {
  id: 'mouse-trap',
  name: 'Mouse Trap',
  emoji: '🪤',
  group: 'Objects',
  subgroup: 'household',
  tags: ['mouse trap', 'trap', 'bait', 'catch', 'cheese'],
  tone: 'brown',
  body: m.frame(S).d(outline),
  shine: [26, 54, -30],
  shineSize: [5, 1.6],
  draw(c) {
    const top = c.linear('a', 'sand', [0, 0, 1, 1], 0, 2);
    const left = c.linear('l', 'brown', [0, 0, 0, 1], 1, 2);
    const right = c.linear('r', 'brown', [0, 0, 1, 1], 2, 3);
    const cheese = c.radial('c', 'yellow', 0.35, 0.3);
    return `<g transform="translate(${S.at[0]} ${S.at[1]}) scale(${S.s})"><path d="M18 60 L60 70 L60 78 L18 68 Z" fill="${left}"/>
      <path d="M60 70 L86 52 L86 58 L60 78 Z" fill="${right}"/>
      <path d="M18 60 L44 44 L86 52 L60 70 Z" fill="${top}"/>
      <path d="M18 60 L60 70 L86 52" stroke="#fff" stroke-opacity=".45" stroke-width="1.1" fill="none"/>
      ${m.tube(c, 'M33 58 L45 30 L68 35 L57 62', { width: 2.8, palette: 'silver', name: 'w' })}
      ${m.tube(c, 'M49 54 L58 52', { width: 3.2, palette: 'silver', name: 's' })}
      <circle cx="49" cy="55" r="2.6" fill="${c.ramp('silver')[1]}" stroke="#3A3E52" stroke-opacity=".6" stroke-width=".9"/>
      ${m.part('M64 54 L80 51 L76 44 Z', cheese, 'yellow')}
      ${m.part('M64 54 L80 51 L80 55 L64 58 Z', c.linear('cs', 'gold', [0, 0, 0, 1], 1, 2), 'yellow')}
      <circle cx="73" cy="49" r="1.4" fill="#D9A400"/><circle cx="70" cy="56.2" r="1" fill="#C98500"/></g>`;
  },
};
