const f = require('../src/parts/face');
const p = require('../src/parts/person');

// A deep bow seen from the front: the back rises behind a lowered head, arms down to the floor.
const body = 'M14 79 C14 52 28 34 48 34 C68 34 82 52 82 79 Q82 84 77 84 L19 84 Q14 84 14 79 Z';
const P = p.pose({ cy: 56, r: 23 });
module.exports = {
  id: 'person-bowing',
  name: 'Person Bowing',
  emoji: '🙇',
  group: 'People & Body',
  subgroup: 'person-gesture',
  tags: ['bow', 'sorry', 'respect', 'apology', 'thank you'],
  tone: 'navy',
  body,
  shine: [26, 50, -55],
  draw(c) {
    P.garment = 'navy';
    const { fill, edge } = p.hairPaint(c, 'brown');
    return `<path d="${body}" fill="${p.cloth(c, 'navy')}"/>
      ${p.sleeve(c, P, [[26, 46], [20, 78]], 10)}${p.sleeve(c, P, [[70, 46], [76, 78]], 10)}
      ${p.head(c, P)}
      ${P.at(`<path d="M17 62 C12 30 30 13 48 13 C66 13 84 30 79 62 C72 56 60 53 48 53 C36 53 24 56 17 62 Z" fill="${fill}" stroke="${edge}" stroke-opacity=".55" stroke-width="1.8"/>
        <path d="M34 22 Q40 34 38 50 M58 20 Q62 34 60 50" stroke="#fff" stroke-opacity=".12" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        ${f.eyes.closed({ y: 64, w: 5, h: 2.5 })}${f.mouth.flat({ y: 75, w: 4 })}`)}
      ${p.hand(c, 24, 79, { rot: 90, pose: 'flat', s: 0.95 })}${p.hand(c, 72, 79, { rot: -90, pose: 'flat', s: 0.95, flip: true })}`;
  },
};
