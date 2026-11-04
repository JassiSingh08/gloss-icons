const v = require('../src/parts/vehicle');
const body = 'M12 67 L12 28 L10.5 28 Q9 28 9.6 26.5 L11 23 Q11.6 21.5 13 21.5 L37.5 21.5 Q39 21.5 39.6 23 L41 26.5 Q41.6 28 40 28 L38.5 28 L38.5 40 L61 40 L61 28.5 L59.6 25.5 Q59 23.5 61 23.5 L71 23.5 Q73 23.5 72.4 25.5 L71 28.5 L71 40 L74 40 Q81 40 81 52 Q81 61 77 63 L82 63 Q84 63 84 65 L84 67 Z';
module.exports = {
  id: 'locomotive',
  name: 'Locomotive',
  emoji: '🚂',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['steam', 'train', 'railway', 'vintage', 'choo choo'],
  tone: 'green',
  body,
  shine: [16, 32, -60],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'green', [0, 0, 0.6, 1], 0, 2);
    const boiler = c.linear('boiler', 'green', [0, 0, 0, 1], 0, 3);
    const dark = c.linear('dark', 'black', [0, 0, 1, 0], 0, 2);
    const brass = c.linear('brass', 'gold', [0, 0, 1, 0], 0, 2);
    const beam = c.linear('beam', 'red', [0, 0, 0, 1], 0, 2);
    const steam = c.radial('steam', 'white', 0.35, 0.3);
    const g = c.ramp('green');
    return `<circle cx="58" cy="15" r="6" fill="${steam}"/><circle cx="48" cy="11" r="4.6" fill="${steam}" opacity=".85"/><circle cx="40" cy="8.5" r="3.2" fill="${steam}" opacity=".65"/>
      <path d="M76 66 L87 66 Q88 66 87.5 67.5 L83 79 L76 79 Z" fill="${beam}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${body}" fill="${paint}"/>
      <path d="M38.5 40 L74 40 Q81 40 81 52 Q81 61 77 63 L38.5 63 Z" fill="${boiler}"/>
      <path d="M61 28.5 L59.6 25.5 Q59 23.5 61 23.5 L71 23.5 Q73 23.5 72.4 25.5 L71 28.5 L71 40 L61 40 Z" fill="${dark}"/>
      <path d="M10.5 28 Q9 28 9.6 26.5 L11 23 Q11.6 21.5 13 21.5 L37.5 21.5 Q39 21.5 39.6 23 L41 26.5 Q41.6 28 40 28 Z" fill="${dark}"/>
      <path d="M47 40 Q47 34.5 51 34.5 Q55 34.5 55 40 Z" fill="${brass}"/>
      <path d="M45 40.5 L45 62.5 M66 40.5 L66 62.5" stroke="${brass}" stroke-width="2.2"/>
      ${v.win(c, 17, 32, 15, 13, 2)}
      <ellipse cx="80.5" cy="51.5" rx="2" ry="5" fill="#141420" opacity=".55"/>
      ${v.lamp(78, 44, 2.6, 2.6)}
      <path d="M12 63 L84 63 L84 67 L12 67 Z" fill="#141420" opacity=".8"/>
      <path d="M12.5 50 L38 50" stroke="${g[3]}" stroke-opacity=".4" stroke-width="1.3"/>
      ${v.rail(8, 88)}
      ${v.wheel(c, 25, 73.5, 9.5)}${v.wheel(c, 47, 73.5, 9.5)}${v.wheel(c, 68, 77, 6)}
      <path d="M25 70 L47 70" stroke="#D9DCE8" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M25 70 L47 70" stroke="#3A3E52" stroke-width="1" stroke-linecap="round" stroke-opacity=".6"/>`;
  },
};
