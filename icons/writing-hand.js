const h = require('../src/parts/hand');

const pen = (c) => {
  const blue = c.linear('pen', 'navy', [0, 0, 1, 0.3], 0, 2);
  return `<path d="M78 10 L33 70" stroke="#080C3D" stroke-width="8.6" stroke-linecap="round"/><path d="M78 10 L33 70" stroke="${blue}" stroke-width="7" stroke-linecap="round"/>
    <path d="M75.5 12 L46 51" stroke="#fff" stroke-opacity=".5" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M34 69 L26 81 L37 73 Z" fill="${c.radial('nib', 'gold', 0.3, 0.2)}" stroke="#5E3A00" stroke-width="1" stroke-linejoin="round"/>
    <path d="M10 84 Q13 78 16 83 T22 83 T28 82" stroke="#1A238A" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
};
// A right hand gripping a pen, nib down, mid-word.
const a = h.hand({ at: [55, 34], scale: 0.85, yaw: 160, roll: 150, fingers: { index: { curl: [30, 25, 10] }, middle: { curl: [50, 60, 40] }, ring: h.CURL, pinky: h.CURL }, thumb: { out: 40, across: 30, bend: [10, 10] } });

module.exports = {
  id: 'writing-hand',
  name: 'Writing Hand',
  emoji: '✍️',
  group: 'People & Body',
  subgroup: 'hand-prop',
  tags: ['write', 'sign', 'pen', 'signature', 'author'],
  tone: 'yellow',
  body: a.body,
  shine: [58, 22, -30],
  shineSize: [5, 2.4],
  draw(c) {
    return pen(c) + a.draw(c);
  },
};
