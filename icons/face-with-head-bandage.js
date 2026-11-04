const f = require('../src/parts/face');

const BAND = 'M8 29 L88 19 L88 33 L8 43 Z';
module.exports = {
  ...f.spec(),
  shine: [31, 39, -45],
  id: 'face-with-head-bandage',
  name: 'Face With Head-Bandage',
  emoji: '🤕',
  group: 'Smileys & Emotion',
  subgroup: 'face-unwell',
  tags: ['bandage', 'hurt', 'injured', 'accident', 'clumsy'],
  draw(c) {
    const gauze = c.linear('gauze', 'white', [0, 0, 0.3, 1], 0, 2);
    const plaster = c.linear('plaster', 'cream', [0, 0, 0, 1], 1, 2);
    c.def(`<clipPath id="${c.id('head')}"><path d="${f.BODY}"/></clipPath>`);
    return f.head(c)
      + `<g clip-path="url(#${c.id('head')})"><path d="${BAND}" fill="${gauze}"/>
        <path d="M8 43 L88 33" stroke="#6E61A8" stroke-opacity=".45" stroke-width="1.4"/>
        <path d="M8 36 L88 26" stroke="#BDB2E8" stroke-width="1.2" stroke-dasharray="3 2.6"/></g>`
      + `<ellipse cx="37" cy="49" rx="3.6" ry="4.8" fill="${f.INK}"/>${f.glint(35.85, 47.2)}`
      + f.stroke('M54 48.5 L64 50.5', 3.6)
      + f.mouth.frown({ y: 67, w: 7.5 })
      + `<g transform="rotate(-30 64 63)"><rect x="56" y="59.6" width="16" height="6.8" rx="3.4" fill="${plaster}" stroke="#8A5A1E" stroke-opacity=".5" stroke-width="1"/>
        <rect x="61.5" y="59.8" width="5" height="6.4" fill="#E0B472" opacity=".7"/></g>`;
  },
};
