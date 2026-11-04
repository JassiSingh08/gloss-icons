// The flexed arm again, built from metal: plated upper arm and forearm, a bolted elbow, a ringed
// wrist and a jointed fist.
const { body } = require('./flexed-biceps');
module.exports = {
  id: 'mechanical-arm',
  name: 'Mechanical Arm',
  emoji: '🦾',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['prosthetic', 'robot', 'bionic', 'strong', 'accessibility'],
  tone: 'silver',
  body,
  shine: [25, 54, -40],
  shineSize: [6.5, 2.8],
  draw(c) {
    c.def(`<clipPath id="${c.id('in')}"><path d="${body}"/></clipPath>`);
    const ink = '#3A3E52';
    const seam = (d, w = 1.6) => `<path d="${d}" stroke="${ink}" stroke-opacity=".55" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;
    return `<path d="${body}" fill="${c.radial('a', 'silver', 0.3, 0.25)}"/>
      <g clip-path="url(#${c.id('in')})">
        <path d="M54 39 L88 35 L88 44 L54 48 Z" fill="${c.linear('band', 'slate', [0, 0, 0, 1], 1, 3)}"/>
        <path d="M54 39 L88 35" stroke="#fff" stroke-opacity=".5" stroke-width="1"/>
      </g>
      ${seam('M54.5 20.5 L62.5 21 M53.5 26.5 L62 27 M55 32.5 L62.5 33')}
      ${seam('M62.5 20 C68.5 21.5 72.5 25.5 73.5 31')}
      ${seam('M24 70 C34 63.5 47 60.5 61 62', 1.8)}
      ${seam('M30 52 C34 55 36 60 35 66 M46 44 C49 48 50 54 49 61.5')}
      <circle cx="70.5" cy="70" r="7.5" fill="${c.radial('joint', 'slate', 0.35, 0.3)}" stroke="${ink}" stroke-opacity=".6" stroke-width="1.1"/>
      <circle cx="70.5" cy="70" r="2.6" fill="${ink}" opacity=".7"/>
      <circle cx="69.5" cy="69" r="1" fill="#fff" opacity=".8"/>`;
  },
};
