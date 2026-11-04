const f = require('../src/parts/face');

// An oni mask: wide jaw, horns, gold eyes and tusks.
const body = 'M48 20 C68 20 80 32 80 49 C80 62 76 73 66 80 Q48 87 30 80 C20 73 16 62 16 49 C16 32 28 20 48 20 Z';
module.exports = {
  id: 'ogre',
  name: 'Ogre',
  emoji: '👹',
  group: 'Smileys & Emotion',
  subgroup: 'face-costume',
  tags: ['ogre', 'oni', 'monster', 'demon', 'japanese'],
  tone: 'red',
  body,
  shine: [31, 31, -45],
  shineSize: [5.5, 2.4],
  draw(c) {
    const ink = '#3D0003';
    const horn = c.radial('horn', 'gold', 0.3, 0.2);
    const eye = c.radial('eye', 'gold', 0.4, 0.3);
    const fang = c.linear('fang', 'ivory', [0, 0, 0, 1], 0, 2);
    const nose = c.radial('nose', 'red', 0.4, 0.2);
    c.def(`<clipPath id="${c.id('mouth')}"><path d="M28 62 Q48 58 68 62 Q66 78 48 79 Q30 78 28 62 Z"/></clipPath>`);
    return `<path d="M27 30 C21 24 20 14 24 6 C28 13 34 18 40 22 Z M69 30 C75 24 76 14 72 6 C68 13 62 18 56 22 Z" fill="${horn}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="${body}" fill="${c.radial('a', 'red', 0.32, 0.22)}"/>
      <path d="M26 34 Q30 28 37 32 Q41 34 45 39 M70 34 Q66 28 59 32 Q55 34 51 39" stroke="#1A0002" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M27 43 L44 46 Q43 52.5 36 52.5 Q28.5 52.5 27 43 Z M69 43 L52 46 Q53 52.5 60 52.5 Q67.5 52.5 69 43 Z" fill="${eye}" stroke="${ink}" stroke-width="1.6"/>
      <ellipse cx="37" cy="48.5" rx="1.6" ry="3" fill="${ink}"/><ellipse cx="59" cy="48.5" rx="1.6" ry="3" fill="${ink}"/>${f.glint(34.4, 47.2, 0.8)}${f.glint(56.4, 47.2, 0.8)}
      <path d="M41 55 Q48 51.5 55 55 Q56 59.5 52 60 L44 60 Q40 59.5 41 55 Z" fill="${nose}" stroke="${ink}" stroke-opacity=".6" stroke-width="1.1"/>
      <path d="M28 62 Q48 58 68 62 Q66 78 48 79 Q30 78 28 62 Z" fill="#3A0008"/>
      <g clip-path="url(#${c.id('mouth')})"><path d="M26 59 Q48 56 70 59 L70 65.5 Q48 63 26 65.5 Z" fill="#FFF8EC"/>
        <path d="M30 65 L34 65 M38 64.2 L38 60 M44 63.6 L44 59.5 M52 63.6 L52 59.5 M58 64.2 L58 60" stroke="#8E93AD" stroke-width="1"/></g>
      <path d="M32 77 L33.5 64 L38.5 76.5 Z M64 77 L62.5 64 L57.5 76.5 Z" fill="${fang}" stroke="#6E61A8" stroke-opacity=".6" stroke-width="1" stroke-linejoin="round"/>`;
  },
};
