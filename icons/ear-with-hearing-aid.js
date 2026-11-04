const h = require('../src/parts/heart');
const s = require('../src/parts/skin');
const ear = require('./ear');
// The ear, nudged left to make room for a hearing aid tucked behind it, its clear tube running
// over the top into the ear.
const T = { s: 0.94, ox: 48, oy: 48, x: 44, y: 49 };
const body = h.xform(ear.body, T);
module.exports = {
  id: 'ear-with-hearing-aid',
  name: 'Ear With Hearing Aid',
  emoji: '🦻',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['hearing aid', 'deaf', 'hard of hearing', 'ear', 'accessibility'],
  tone: 'amber',
  body,
  shine: h.at([34, 22], T).concat(-50),
  shineSize: [6, 2.6],
  draw(c) {
    const aid = 'M73 15 C81 13 88 21 87 33 C86.5 42 83 49 78.5 51.5 C76 47.5 78.5 39 77.5 31 C76.5 24 72 21.5 73 15 Z';
    return `<path d="${aid}" fill="${c.radial('aid', 'sand', 0.3, 0.25)}" stroke="#5C4420" stroke-opacity=".55" stroke-width="1.1"/>
      <path d="${body}" fill="${s.fill(c)}"/>
      <g transform="translate(${44 - 48 * 0.94} ${49 - 48 * 0.94}) scale(0.94)">${ear.detail(c)}</g>
      <path d="M75 16 C68 9 54 12 51 22 C49 29 50 36 49 41" stroke="#3A3E52" stroke-opacity=".45" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      <path d="M75 16 C68 9 54 12 51 22 C49 29 50 36 49 41" stroke="#DCE6F2" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <ellipse cx="48.5" cy="43" rx="3.6" ry="3" fill="${c.radial('tip', 'sand', 0.35, 0.3)}" stroke="#5C4420" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
