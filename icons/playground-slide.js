const B = require('../src/parts/building');

const track = B.bez([35, 30], [54, 30], [58, 77], [84, 76], 20);
const body = B.ribbon(track, 9);
module.exports = {
  id: 'playground-slide',
  name: 'Playground Slide',
  emoji: '🛝',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['playground', 'slide', 'park', 'kids', 'play'],
  tone: 'yellow',
  body,
  shine: [44, 29, 8],
  shineSize: [5, 1.8],
  draw(c) {
    const chute = c.linear('a', 'yellow', [0, 0, 1, 1], 0, 2);
    const frame = c.linear('frame', 'blue', [0, 0, 1, 0], 0, 2);
    const roof = c.radial('roof', 'red', 0.35, 0.2);
    const lip = B.poly(track.map(([x, y], i) => [x + (i < 10 ? -0.5 : -2.4), y - 3.4]));
    const edge = 'stroke="#001E4D" stroke-opacity=".55" stroke-width="1"';
    let rungs = '';
    for (let y = 40; y < 82; y += 8) rungs += `M17 ${y} L31 ${y} `;
    return `<path d="M17 84 L17 20 M31 84 L31 20 M38 84 L38 34" stroke="#001E4D" stroke-opacity=".55" stroke-width="5" stroke-linecap="round"/>
      <path d="M17 84 L17 20 M31 84 L31 20 M38 84 L38 34" stroke="${frame}" stroke-width="3" stroke-linecap="round"/>
      <path d="${rungs}" stroke="${c.ramp('blue')[2]}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M12 21 L24 10 L36 21 Z" fill="${roof}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1.1" stroke-linejoin="round"/>
      <rect x="14" y="30" width="26" height="4" rx="1.2" fill="${frame}" ${edge}/>
      <path d="${body}" fill="${chute}"/>
      <path d="${lip}" fill="none" stroke="#FFF7A8" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M58 72 L58 84 M72 76 L72 84" stroke="${frame}" stroke-width="2.6" stroke-linecap="round"/>`;
  },
};
