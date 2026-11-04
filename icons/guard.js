const p = require('../src/parts/person');
const f = require('../src/parts/face');

// The bearskin: tall, round-shouldered and a little shaggy at the edge.
const HAT = 'M17 52 C12 40 10 24 13 10 C15 -2 24 -13 36 -16 C42 -18 48 -18 54 -17 C68 -15 79 -4 83 10 C86 24 84 40 79 52';
const P = p.pose({ cy: 52, r: 19, sw: 32, sy: 68, crown: HAT });
module.exports = {
  id: 'guard',
  name: 'Guard',
  emoji: '💂',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['guard', 'soldier', 'palace', 'bearskin', 'sentry'],
  tone: 'red',
  body: P.body,
  shine: [...P.pt(26, 0), -60],
  shineSize: [5, 2],
  draw(c) {
    const fur = c.radial('fur', 'black', 0.3, 0.15);
    const brass = c.radial('brass', 'gold', 0.4, 0.3);
    const hat = P.at(`<path d="${HAT} C70 42 58 38 48 38 C38 38 26 42 17 52 Z" fill="${fur}" stroke="#05050A" stroke-width="1.8"/>
      <path d="M26 2 C28 14 28 26 26 36 M40 -12 C42 4 42 20 40 36 M58 -12 C58 4 58 20 60 36 M72 2 C70 14 70 26 72 38" stroke="#6E6E85" stroke-opacity=".35" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M18 52 C22 72 36 84 48 84 C60 84 74 72 78 52" stroke="#C98500" stroke-width="3" fill="none"/>`);
    const tunic = `<path d="M33 61 Q48 68 63 61 L63 66 Q48 73 33 66 Z" fill="#FFC21A" opacity=".9"/>
      ${[0, 1, 2].map((i) => `<circle cx="48" cy="${73 + i * 5}" r="1.9" fill="${brass}"/>`).join('')}
      <path d="M22 70 L32 70 M64 70 L74 70" stroke="#FFC21A" stroke-width="2"/>`;
    return p.bust(c, P, { garment: 'red', neck: 'none', under: tunic, face: f.brows.flat({ y: 42, sw: 3.6 }) + f.eyes.oval({ y: 51 }) + f.mouth.flat({ y: 68, w: 8 }), over: hat });
  },
};
