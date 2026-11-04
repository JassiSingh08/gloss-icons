const a = require('../src/parts/animal');
const { bovine } = require('./cow');

// A bison carries its weight in front: a tall shoulder hump, head hung low, a slim rump.
const OUTLINE = [
  [20, 34], [26, 27], [34, 21.5], [44, 23], [54, 31], [66, 36], [77, 39.5], [81.5, 46], [81.5, 56], [77.5, 63.5],
  [68, 66.5], [52, 68.5], [38, 68], [29, 66], [24, 60], [18, 58], [12.5, 56], [9.5, 50], [11, 42], [15, 37],
];
module.exports = bovine({
  id: 'bison',
  name: 'Bison',
  emoji: '🦬',
  tags: ['bison', 'buffalo', 'prairie', 'herd', 'wild'],
  coat: 'brown',
  outline: OUTLINE,
  ink: '#140802',
  hoof: '#1A0C04',
  horn: a.spline([[17, 37], [14, 33], [14.5, 28, 1], [17.5, 32], [21, 35]]),
  hornPal: 'black',
  ear: [[20, 41], [26, 38.5], [30, 40], [26, 43], [21, 43.5]],
  tailPal: 'brown',
  // The shaggy cape over head, shoulders and forelegs.
  overlay: (c, body) => a.clip(c, 'cape', body, `<path d="${a.spline([[8, 30], [22, 22], [36, 17], [48, 26], [52, 40], [50, 54], [46, 64], [40, 72], [28, 74], [18, 66], [8, 60]])}" fill="${a.custom(c, 'cape', ['#7A4A26', '#4A220A', '#2A1205', '#140802'], 0.3, 0.2)}"/>
    <path d="${a.taper(42, 30, 46, 46, 2, 1)} ${a.taper(36, 40, 40, 56, 2, 1)} ${a.taper(28, 46, 30, 62, 1.8, 1)} ${a.taper(46, 46, 46, 62, 1.8, 1)}" fill="#1A0A02" opacity=".35"/>`),
  legsAt: [
    { x: 33, top: 62, w: 5.5, wf: 3.6, far: true },
    { x: 67, top: 60, w: 6, wf: 3.4, far: true, fx: 68, knee: [74, 2, 3.6] },
    { x: 39, top: 63, w: 6, wf: 3.8, fx: 38.5 },
    { x: 74, top: 60, w: 6.5, wf: 3.6, fx: 75, knee: [74, 2.5, 3.8] },
  ],
});
