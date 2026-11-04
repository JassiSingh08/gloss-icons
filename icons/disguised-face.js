const f = require('../src/parts/face');

const STACHE = 'M48 61.5 C44 58.5 38 59 34.5 62 C31.5 64.5 28 64.5 26 62.5 C27 68 33 70.5 39 68.5 C43 67 46 65.5 48 64.5 C50 65.5 53 67 57 68.5 C63 70.5 69 68 70 62.5 C68 64.5 64.5 64.5 61.5 62 C58 59 52 58.5 48 61.5 Z';
module.exports = {
  ...f.spec(),
  id: 'disguised-face',
  name: 'Disguised Face',
  emoji: '🥸',
  group: 'Smileys & Emotion',
  subgroup: 'face-hat',
  tags: ['disguise', 'incognito', 'undercover', 'spy', 'glasses'],
  draw(c) {
    const ink = '#1E1210';
    const nose = c.radial('nose', 'skin', 0.35, 0.25);
    const hair = c.linear('hair', 'brown', [0, 0, 0, 1], 2, 3);
    const lens = 'fill="#fff" fill-opacity=".18" stroke="' + ink + '" stroke-width="3.2"';
    return f.head(c)
      + `<path d="M28 36 Q34 29.5 44 34" stroke="${hair}" stroke-width="5.5" fill="none" stroke-linecap="round"/>
      <path d="M68 36 Q62 29.5 52 34" stroke="${hair}" stroke-width="5.5" fill="none" stroke-linecap="round"/>`
      + f.eyes.lidded({ y: 46, tilt: 3 })
      + `<circle cx="36.5" cy="46" r="8.5" ${lens}/><circle cx="59.5" cy="46" r="8.5" ${lens}/>
      <path d="M45 45 Q48 43 51 45 M28 45 L19 42.5 M68 45 L77 42.5" stroke="${ink}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <ellipse cx="48" cy="55" rx="6.5" ry="7.5" fill="${nose}" stroke="#6B3A1C" stroke-opacity=".5" stroke-width="1"/>
      <ellipse cx="45.8" cy="52" rx="1.8" ry="2.6" fill="#fff" opacity=".7" transform="rotate(-25 45.8 52)"/>
      <path d="${STACHE}" fill="${hair}"/>`
      + f.mouth.smile({ y: 73, w: 7, lift: 2.5, sw: 3.2 });
  },
};
