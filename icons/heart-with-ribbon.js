const h = require('../src/parts/heart');
// Wrapped like a present: a gold band each way across the heart, the bow in the notch.
const O = { s: 0.9, x: 48, y: 55 };
const body = h.place(O);
module.exports = {
  id: 'heart-with-ribbon',
  name: 'Heart With Ribbon',
  emoji: '💝',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['gift', 'valentine', 'love', 'present', 'ribbon'],
  tone: 'pink',
  body,
  shine: h.shine(O),
  draw(c) {
    c.def(`<clipPath id="${c.id('in')}"><path d="${body}"/></clipPath>`);
    const ribbon = c.linear('ribbon', 'gold', [0, 0, 1, 0], 0, 2);
    const band = c.linear('band', 'gold', [0, 0, 0, 1], 0, 2);
    const bow = c.radial('bow', 'gold', 0.35, 0.25);
    const edge = 'stroke="#5E3A00" stroke-opacity=".55" stroke-width="1.2"';
    return `<path d="${body}" fill="${h.paint(c, 'a', 'pink')}"/>
      <g clip-path="url(#${c.id('in')})">
        <rect x="10" y="51" width="76" height="9" fill="${band}"/>
        <rect x="10" y="59.2" width="76" height="2.2" fill="#3D0003" opacity=".25"/>
        <rect x="43.5" y="20" width="9" height="66" fill="${ribbon}"/>
      </g>
      <path d="M47 35 C38 34 25 27 28 19 C31 12 42 18 47 33 Z" fill="${bow}" ${edge}/>
      <path d="M49 35 C58 34 71 27 68 19 C65 12 54 18 49 33 Z" fill="${bow}" ${edge}/>
      <path d="M45 31 C40 26 34 22 32.5 19.5 M51 31 C56 26 62 22 63.5 19.5" stroke="#C98500" stroke-width="1.3" stroke-linecap="round" fill="none"/>
      <rect x="43" y="29" width="10" height="9" rx="3.2" fill="${bow}" ${edge}/>`;
  },
};
