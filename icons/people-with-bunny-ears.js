const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// Two friends in matching bunny-ear headbands, cheek to cheek, mid-pose.
const A = p.pose({ cx: 29, cy: 48, r: 16, sw: 21, sy: 68, base: 84, hair: 'bob' });
const B = p.pose({ cx: 67, cy: 48, r: 16, sw: 21, sy: 68, base: 84, hair: 'long' });
const EARS = (c) => {
  const black = c.linear('ear', 'black', [0, 0, 1, 1], 0, 2);
  const inner = c.ramp('pink')[1];
  const ear = (x, rot) => `<g transform="rotate(${rot} ${x} 24)"><path d="M${x - 9} 24 C${x - 12} 4 ${x - 8} -24 ${x} -26 C${x + 8} -24 ${x + 12} 4 ${x + 9} 24 Z" fill="${black}" stroke="#05050A" stroke-width="2"/><path d="M${x - 4} 18 C${x - 6} 4 ${x - 4} -14 ${x} -16 C${x + 4} -14 ${x + 6} 4 ${x + 4} 18 Z" fill="${inner}"/></g>`;
  return ear(34, -14) + ear(62, 14) + '<path d="M18 36 C26 20 70 20 78 36" stroke="#141420" stroke-width="4" fill="none"/>';
};
module.exports = {
  id: 'people-with-bunny-ears',
  name: 'People With Bunny Ears',
  emoji: '👯',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['bunny ears', 'party', 'friends', 'twins', 'dance'],
  tone: 'purple',
  shine: [20, 42, -45], shineSize: [3.6, 1.6],
  ...F.build((c) => {
    const face = (dx) => `<g transform="translate(${dx} 0)">${f.brows.raised({ y: 37, sw: 4 })}${f.eyes.wink({ y: 50, side: dx > 0 ? 1 : -1 })}${f.mouth.smile({ y: 67, sw: 4.2 })}</g>`;
    return {
      art: F.bust(c, A, { garment: 'purple', neck: 'v', hair: 'bob', color: 'dark', face: face(3), name: 'a', over: A.at(EARS(c)) })
        + F.bust(c, B, { garment: 'magenta', neck: 'v', hair: 'long', color: 'blond', face: face(-3), name: 'b', over: B.at(EARS(c)) }),
    };
  }),
};
