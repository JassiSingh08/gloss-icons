const h = require('../src/parts/hand');
const s = require('../src/parts/skin');

const phoneD = 'M38 8 L60 12 Q66 13 65 19 L58 59 Q57 65 51 64 L29 60 Q23 59 24 53 L31 13 Q32 7 38 8 Z';
const phoneP = [[38, 8], [60, 12], [65, 17], [58, 61], [51, 64], [29, 60], [24, 55], [31, 11]];
const screenD = 'M38.5 13 L58.5 16.6 Q60.6 17 60.2 19 L54 56.6 Q53.6 58.6 51.6 58.2 L31.6 54.6 Q29.6 54.2 30 52.2 L36.2 14.6 Q36.6 12.6 38.5 13 Z';
const GRIP = [12, 62, 40];
const pose = { at: [60, 66], scale: 0.82, roll: 72, arm: 12, armBend: 10, fingers: { index: GRIP, middle: GRIP, ring: GRIP, pinky: GRIP }, thumb: { out: 25, bend: [0, 5] } };
const whole = h.hand(pose);
const thumb = h.hand({ ...pose, hide: ['palm', 'index', 'middle', 'ring', 'pinky'], arm: 0 });
// The fingers go behind the phone; only their last joints come round its edge.
const tips = h.union(['index', 'middle', 'ring', 'pinky'].map((n) => {
  const g = whole.digits.find((d) => d.name === n);
  return g.caps[2];
}));
// A right hand holding a phone up screen-out for a selfie: palm behind it, thumb down one edge, fingertips round the other.
const a = whole;

module.exports = {
  id: 'selfie',
  name: 'Selfie',
  emoji: '🤳',
  group: 'People & Body',
  subgroup: 'hand-prop',
  tags: ['selfie', 'phone', 'camera', 'photo', 'me'],
  tone: 'yellow',
  body: h.union([...whole.polys, phoneP]),
  shine: [35, 20, -75],
  shineSize: [5, 2.4],
  draw(c) {
    const phone = `<path d="${phoneD}" fill="${c.linear('ph', 'navy', [0, 0, 1, 1], 0, 2)}"/><path d="${screenD}" fill="#1A1060"/>
      <circle cx="47.5" cy="16.2" r="1.4" fill="#080C3D"/>
      <circle cx="46" cy="31" r="5" fill="#5BC2FF"/><path d="M36.5 47 Q38 38.5 46 38.5 Q54 39.8 54.5 48.5 Z" fill="#5BC2FF"/>
      <path d="M62.5 21 L60.8 31" stroke="#fff" stroke-opacity=".35" stroke-width="1.2" stroke-linecap="round"/>`;
    return h.hand({ ...pose, hide: ['thumb'] }).draw(c) + phone + s.shape(c, tips, { paint: s.fill(c) }) + thumb.draw(c, { edge: true });
  },
};
