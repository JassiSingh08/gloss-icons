const f = require('../src/parts/face');

// The head is sliced into three bands and the bands slip sideways, like a glitching screen.
const BANDS = [[0, 41, 0], [41, 57, 5.5], [57, 96, -3.5]];
const n = (v) => +v.toFixed(2);
const shift = (y) => BANDS.find(([a, z]) => y >= a && y < z)[2];
// The outline follows the head round each band, stepping across at the cuts.
function outline() {
  const right = [], left = [];
  for (const [a, z, dx] of BANDS) {
    const y0 = Math.max(a, 22), y1 = Math.min(z, 82);
    for (let k = 0; k <= 12; k++) {
      const y = y0 + ((y1 - y0) * k) / 12;
      const half = Math.sqrt(Math.max(0, 900 - (y - 52) ** 2));
      right.push([n(48 + half + dx), n(y)]);
      left.push([n(48 - half + dx), n(y)]);
    }
  }
  return `M${right.map((p) => p.join(' ')).join(' L')} L${left.reverse().map((p) => p.join(' ')).join(' L')} Z`;
}
const body = outline();
module.exports = {
  ...f.spec(),
  body,
  id: 'distorted-face',
  name: 'Distorted Face',
  emoji: '🫪',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['distorted', 'warped', 'glitch', 'unreal', 'overwhelmed'],
  draw(c) {
    const face = f.head(c) + f.stroke('M31 36 L42 37.5', 3.2) + f.stroke('M54 37.5 Q60 34.5 65 37', 3.2)
      + f.eyes.oval({ y: 47 }) + f.mouth.wavy({ y: 67, w: 11 });
    return BANDS.map(([a, z, dx], i) => {
      c.def(`<clipPath id="${c.id(`band${i}`)}"><rect x="0" y="${a}" width="96" height="${z - a}"/></clipPath>`);
      return `<g clip-path="url(#${c.id(`band${i}`)})"><g transform="translate(${dx} 0)">${face}</g></g>`;
    }).join('') + `<path d="M${n(18 + 5.5)} 41 L${n(78 + 5.5)} 41 M15 57 L80 57" stroke="#6B4A00" stroke-opacity=".35" stroke-width="1"/>`;
  },
};
