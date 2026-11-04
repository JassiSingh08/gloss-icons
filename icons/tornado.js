const body = 'M14 19 C14 11 82 11 82 19 C82 27 71 31 66 38 C61 45 63 52 58 59 C54 65 52 73 50 81 Q48 85 46 81 C44 74 43 68 40 62 C36 54 30 46 26 38 C22 31 14 27 14 19 Z';
module.exports = {
  id: 'tornado',
  name: 'Tornado',
  emoji: '🌪️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['tornado', 'twister', 'storm', 'wind', 'weather'],
  tone: 'slate',
  body,
  shine: [24, 25, -25],
  shineSize: [6, 2.4],
  draw(c) {
    c.def(`<clipPath id="${c.id('clip')}"><path d="${body}"/></clipPath>`);
    // Bands of wind wrapping round the funnel: a light front edge over a darker crease.
    const bands = [[30, 34], [42, 26], [53, 19], [64, 13], [74, 8]].map(([y, w], i) => {
      const x = 48 + [0, -4, -2, 4, 2][i] * 0.6 + (i > 1 ? 4 - i : 0);
      return `<path d="M${x - w - 4} ${y - 3} Q${x} ${y + 6} ${x + w + 4} ${y - 4}" stroke="#1E2A3D" stroke-opacity=".3" stroke-width="2.4" fill="none"/>
        <path d="M${x - w - 4} ${y - 1.6} Q${x} ${y + 7.4} ${x + w + 4} ${y - 2.6}" stroke="#fff" stroke-opacity=".45" stroke-width="1.6" fill="none"/>`;
    }).join('');
    return `<path d="${body}" fill="${c.radial('a', 'slate', 0.3, 0.2)}"/>
      <g clip-path="url(#${c.id('clip')})">${bands}</g>
      <ellipse cx="48" cy="18" rx="30" ry="4.6" fill="#1E2A3D" opacity=".35"/>
      <path d="M20 19 Q48 26 76 19" stroke="#fff" stroke-opacity=".5" stroke-width="1.6" fill="none"/>`;
  },
};
