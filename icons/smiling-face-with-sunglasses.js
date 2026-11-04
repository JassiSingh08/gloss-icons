const f = require('../src/parts/face');

const LENS = (x, s) => `M${x - s * 13} 39.5 L${x + s * 10} 39.5 Q${x + s * 12} 39.5 ${x + s * 11} 43 Q${x + s * 9.5} 53.5 ${x} 53.5 Q${x - s * 10} 53.5 ${x - s * 12.5} 44 Q${x - s * 14} 39.5 ${x - s * 13} 39.5 Z`;
module.exports = {
  ...f.spec(),
  id: 'smiling-face-with-sunglasses',
  name: 'Smiling Face With Sunglasses',
  emoji: '😎',
  group: 'Smileys & Emotion',
  subgroup: 'face-glasses',
  tags: ['cool', 'sunglasses', 'confident', 'chill', 'summer'],
  draw(c) {
    const glass = c.linear('glass', 'black', [0, 0, 0.4, 1], 0, 3);
    const lenses = LENS(35.5, -1) + ' ' + LENS(60.5, 1);
    c.def(`<clipPath id="${c.id('lens')}"><path d="${lenses}"/></clipPath>`);
    return f.head(c)
      + `<path d="M22 41 L18.5 39 M74 41 L77.5 39" stroke="#141420" stroke-width="3" stroke-linecap="round"/>
      <path d="M44 41.5 Q48 39.5 52 41.5" stroke="#141420" stroke-width="3.4" fill="none" stroke-linecap="round"/>
      <path d="${lenses}" fill="${glass}" stroke="#05050A" stroke-width="1.6" stroke-linejoin="round"/>
      <g clip-path="url(#${c.id('lens')})"><path d="M20 52 L34 38 L38 38 L24 52 Z M45 52 L59 38 L66 38 L52 52 Z" fill="#fff" opacity=".22"/></g>
      <path d="M25 41.5 L34 41.5 M50 41.5 L58 41.5" stroke="#fff" stroke-opacity=".5" stroke-width="1.3" stroke-linecap="round"/>`
      + f.mouth.smirk({ y: 66 });
  },
};
