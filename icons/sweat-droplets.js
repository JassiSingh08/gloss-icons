const h = require('../src/parts/heart');
// Three drops flung out to the right, their tips trailing back toward the upper left.
const DROP = 'M0 -14 C3 -8 9 -3 9 4 C9 9 5 13 0 13 C-5 13 -9 9 -9 4 C-9 -3 -3 -8 0 -14 Z';
const D = [
  { s: 1.75, rot: -38, x: 36, y: 58, ox: 0, oy: 0 },
  { s: 1.25, rot: -38, x: 70, y: 64, ox: 0, oy: 0 },
  { s: 0.95, rot: -38, x: 69, y: 28, ox: 0, oy: 0 },
];
const body = D.map((o) => h.xform(DROP, o));
module.exports = {
  id: 'sweat-droplets',
  name: 'Sweat Droplets',
  emoji: '💦',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['sweat', 'splash', 'water', 'workout', 'nervous'],
  tone: 'sky',
  body,
  shine: h.at([-3, 3], D[0]).concat(-60),
  shineSize: [6, 2.8],
  draw(c) {
    return body.map((d, i) => {
      const glint = i ? (() => { const [x, y] = h.at([-3, 3], D[i]); return `<ellipse cx="${x}" cy="${y}" rx="${n(5.5 * D[i].s / 1.75)}" ry="${n(2.5 * D[i].s / 1.75)}" fill="#fff" opacity=".85" transform="rotate(-60 ${x} ${y})"/>`; })() : '';
      return `<path d="${d}" fill="${c.radial(`d${i}`, 'sky', 0.3, 0.3)}"/>${glint}`;
    }).join('') + body.slice(1).map((d) => `<path d="${d}" fill="none" stroke="#0A3A6B" stroke-opacity=".5" stroke-width="1.2"/>`).join('');
  },
};
const n = (v) => +v.toFixed(2);
