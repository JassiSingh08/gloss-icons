const h = require('../src/parts/heart');
// Two hearts circling each other on a tilted orbit; the far side of the orbit passes behind.
const BIG = { s: 0.66, rot: -12, x: 38, y: 60 };
const SMALL = { s: 0.44, rot: 16, x: 67, y: 27 };
const body = h.place(BIG);
const orbit = (half) => {
  const pts = [];
  for (let i = 0; i <= 24; i++) {
    const t = (half + i / 24) * Math.PI;
    const [x, y] = [Math.cos(t) * 39, Math.sin(t) * 14];
    const a = (-28 * Math.PI) / 180;
    pts.push(`${(52 + x * Math.cos(a) - y * Math.sin(a)).toFixed(2)} ${(46 + x * Math.sin(a) + y * Math.cos(a)).toFixed(2)}`);
  }
  return `M${pts.join(' L')}`;
};
module.exports = {
  id: 'revolving-hearts',
  name: 'Revolving Hearts',
  emoji: '💞',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['love', 'couple', 'together', 'romance', 'spinning'],
  tone: 'pink',
  body,
  shine: h.shine(BIG),
  shineSize: [5, 2.4],
  draw(c) {
    const path = (d, o) => `<path d="${d}" stroke="#4A0016" stroke-opacity="${o * 0.5}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#FF8FA9" stroke-opacity="${o}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
    return `${path(orbit(1), 0.55)}
      ${h.extra(c, 'b', SMALL, 'pink')}
      <path d="${body}" fill="${h.paint(c, 'a', 'pink')}"/>
      ${path(orbit(0), 1)}`;
  },
};
