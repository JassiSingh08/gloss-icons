const B = require('../src/parts/building');

const body = 'M14 58 Q14 55 17 55 L79 55 Q82 55 82 58 C82 72 68 82 48 82 C28 82 14 72 14 58 Z';
// A rising wisp: a band that sways side to side and thins towards the top.
const wisp = (x) => {
  const pts = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    pts.push([x + 4.2 * Math.sin(t * Math.PI * 2.1 + 0.4), 50 - t * 38]);
  }
  return B.ribbon(pts, [7, 3]);
};
module.exports = {
  id: 'hot-springs',
  name: 'Hot Springs',
  emoji: '♨️',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['onsen', 'spa', 'steam', 'bath', 'relax'],
  tone: 'red',
  body,
  shine: [24, 62, -15],
  shineSize: [6, 2.4],
  draw(c) {
    const bowl = c.radial('a', 'red', 0.3, 0.1);
    const steam = c.linear('steam', 'red', [0, 0, 0, 1], 0, 1);
    const water = c.linear('water', 'red', [0, 0, 1, 0], 1, 2);
    return `<path d="${wisp(30)} ${wisp(48)} ${wisp(66)}" fill="${steam}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="${body}" fill="${bowl}"/>
      <path d="M17 55 L79 55 Q82 55 82 58 Q48 64 14 58 Q14 55 17 55 Z" fill="${water}"/>
      <path d="M17 55 L79 55" stroke="#FFB3A6" stroke-width="1.4" stroke-linecap="round"/>`;
  },
};
