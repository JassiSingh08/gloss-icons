const h = require('../src/parts/hand');

const glass = 'M63 62 Q63 56 69 56 L81 56 Q87 56 87 62 L87 78 Q87 84 81 84 L69 84 Q63 84 63 78 Z';
const bottle = (c) => `<path d="${glass}" fill="${c.radial('glass', 'pink', 0.3, 0.2)}"/>
  <rect x="69" y="38" width="12" height="19" rx="2.5" fill="${c.linear('cap', 'black', [0, 0, 1, 0], 0, 2)}"/>
  <path d="M72 41 L72 54" stroke="#fff" stroke-opacity=".35" stroke-width="1.6" stroke-linecap="round"/>
  <ellipse cx="68.5" cy="63" rx="3" ry="1.6" fill="#fff" opacity=".8" transform="rotate(-50 68.5 63)"/>`;
const hand = h.hand({ at: [40, 54], scale: 0.86, yaw: 180, roll: 25, polish: ['#F0124F', '#4A0016'], nailW: 1.25, nailL: 1.5, fingers: { index: { spread: 9, curl: [5, 10, 5] }, middle: { spread: 2, curl: [5, 10, 5] }, ring: { spread: -5, curl: [8, 12, 5] }, pinky: { spread: -12, curl: [10, 14, 8] } }, thumb: { out: 45 } });
const box = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
// The back of a hand, fingers fanned to dry freshly painted nails, the bottle beside it.
const a = hand;

module.exports = {
  id: 'nail-polish',
  name: 'Nail Polish',
  emoji: '💅',
  group: 'People & Body',
  subgroup: 'hand-prop',
  tags: ['manicure', 'nails', 'nail polish', 'beauty', 'unbothered'],
  tone: 'yellow',
  body: h.union([...hand.polys, box(63, 56, 87, 84), box(69, 38, 81, 57)]),
  shine: [40, 58, -40],
  shineSize: [5, 2.4],
  draw(c) {
    return a.draw(c) + bottle(c);
  },
};
