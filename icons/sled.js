const glyph = require('../src/parts/glyph');

const body = 'M13 49 Q11 46 14 45 L60 34 Q63 33.3 65 35 L84 49 Q86 51 83 52 L37 63 Q34 63.7 32 62 Z';
module.exports = {
  id: 'sled',
  name: 'Sled',
  emoji: '🛷',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['sledge', 'toboggan', 'snow', 'winter', 'hill'],
  tone: 'brown',
  body,
  shine: [24, 46, -14],
  shineSize: [6, 1.8],
  draw(c) {
    const runner = 'M16 60 L38 76 Q41 78 45 77 L80 68 Q88 66 86 58 Q85 54 81 54';
    return `${glyph.tube(c, 'M24 56 L24 66 M40 61 L40 73 M54 47 L54 64 M74 52 L74 63', { width: 3.4, palette: 'silver', name: 'strut' })}
      ${glyph.tube(c, runner, { width: 4.4, palette: 'red', name: 'run' })}
      <path d="${body}" fill="${c.linear('a', 'brown', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M13 51 L36 66 L84 52.5 L84 49 L37 63 Q34 63.7 32 62 L13 49 Z" fill="#331805" opacity=".4"/>
      <path d="M21 46.5 L40 60 M33 43.6 L52 57 M45 40.8 L64 54.2 M57 38 L75 51" stroke="#331805" stroke-opacity=".45" stroke-width="1.4"/>
      <path d="M22.5 46 L41.5 59.4 M34.5 43.2 L53.5 56.6 M46.5 40.4 L65.5 53.8 M58.5 37.6 L76.5 50.6" stroke="#E8B98A" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
