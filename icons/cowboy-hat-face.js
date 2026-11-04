const f = require('../src/parts/face');

const CROWN = 'M31 33 Q29 17 37 11.5 Q43 15 48 13 Q53 15 59 11.5 Q67 17 65 33 Z';
const BRIM = 'M7 25 Q11 35 25 33 Q48 29.5 71 33 Q85 35 89 25 Q88 39 73 41.5 Q48 37 23 41.5 Q8 39 7 25 Z';
module.exports = {
  ...f.spec(),
  shine: [26.5, 50, -60],
  id: 'cowboy-hat-face',
  name: 'Cowboy Hat Face',
  emoji: '🤠',
  group: 'Smileys & Emotion',
  subgroup: 'face-hat',
  tags: ['cowboy', 'cowgirl', 'western', 'howdy', 'rodeo'],
  draw(c) {
    const felt = c.radial('felt', 'brown', 0.3, 0.2);
    const brim = c.linear('brim', 'brown', [0, 0, 0, 1], 0, 2);
    const edge = 'stroke="#331805" stroke-opacity=".6" stroke-width="1.2" stroke-linejoin="round"';
    return f.head(c)
      + `<path d="${CROWN}" fill="${felt}" ${edge}/>
      <path d="M31.2 27 Q48 24 64.8 27 L65 32 Q48 29.5 31 32 Z" fill="#6E3A14"/>
      <path d="M44 15.5 Q46 22 45 28" stroke="#331805" stroke-opacity=".35" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="${BRIM}" fill="${brim}" ${edge}/>
      <path d="M12 30 Q16 34.5 26 34" stroke="#fff" stroke-opacity=".45" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <ellipse cx="38" cy="18" rx="3" ry="1.4" fill="#fff" opacity=".5" transform="rotate(-55 38 18)"/>`
      + f.eyes.oval({ y: 49 }) + f.mouth.grin(c, { y: 60, w: 15, depth: 14 });
  },
};
