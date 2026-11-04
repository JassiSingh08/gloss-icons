const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

const ink = b.INKS.blue;
const FROST = 'M10 10 L86 10 L86 33 Q82 36 79 32 Q76 39 72 33 Q67 37 63 31.5 Q58 36 53 30.5 Q48 34 43 30 Q38 35 33 31 Q29 37 25 32.5 Q20 36 17 31 L10 33 Z';
module.exports = {
  ...f.spec('blue'),
  id: 'cold-face',
  name: 'Cold Face',
  emoji: '🥶',
  group: 'Smileys & Emotion',
  subgroup: 'face-unwell',
  tags: ['cold', 'freezing', 'frozen', 'winter', 'ice'],
  draw(c) {
    const frost = c.linear('frost', 'white', [0, 0, 0, 1], 0, 2);
    const ice = c.linear('ice', 'sky', [0, 0, 0, 1], 0, 1);
    c.def(`<clipPath id="${c.id('head')}"><path d="${f.BODY}"/></clipPath>`);
    return f.head(c, 'blue')
      + `<g clip-path="url(#${c.id('head')})"><path d="${FROST}" fill="${frost}" opacity=".92"/></g>`
      + b.worried({ ink, y: 38, slant: 5 }) + f.eyes.oval({ ink, y: 47, ry: 4.8 })
      + f.mouth.teeth({ ink, y: 66, w: 13, h: 9 })
      + `<path d="M37 79.5 L39.5 88 L42 81 Z M53 81 L55.5 89 L58 79.8 Z M45.5 81.6 L47 85.5 L48.5 81.8 Z" fill="${ice}" stroke="#0A3A6B" stroke-opacity=".45" stroke-width="1" stroke-linejoin="round"/>`;
  },
};
