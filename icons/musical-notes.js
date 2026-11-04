const d = require('../src/parts/device');

// Two quavers under one beam, traced as a single outline: up the first stem, along the beam,
// down the second stem and round its head, back under the beam, round the first head.
const a = d.noteHead(26, 72, 11.5, 8.5, -22, 5.5);
const b = d.noteHead(63, 63, 11.5, 8.5, -22, 5.5);
const T1 = 22;
const T2 = 13;
const W = 9;
const m = (T2 - T1) / (b.right[0] - a.left[0]);
const top = (x) => d.n(T1 + m * (x - a.left[0]));
const bot = (x) => d.n(top(x) + W);
const body = `M${a.left.join(' ')} L${a.left[0]} ${top(a.left[0])} L${b.right[0]} ${top(b.right[0])} L${b.right.join(' ')} ${b.arc} L${b.left[0]} ${bot(b.left[0])} L${a.right[0]} ${bot(a.right[0])} L${a.right.join(' ')} ${a.arc} Z`;

module.exports = {
  id: 'musical-notes',
  name: 'Musical Notes',
  emoji: '🎶',
  group: 'Objects',
  subgroup: 'music',
  tags: ['music', 'notes', 'song', 'singing', 'melody'],
  tone: 'purple',
  body,
  shine: [19, 68, -30],
  shineSize: [5, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'purple', 0.3, 0.2)}"/>
      <ellipse cx="57" cy="60.5" rx="4" ry="1.8" fill="#fff" opacity=".6" transform="rotate(-30 57 60.5)"/>
      <path d="M${a.left[0] + 3} ${top(a.left[0] + 3) + 2} L${b.right[0] - 3} ${top(b.right[0] - 3) + 2}" stroke="#fff" stroke-opacity=".35" stroke-width="1.4" stroke-linecap="round"/>`;
  },
};
