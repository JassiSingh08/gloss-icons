const f = require('../src/parts/face');

// Dollar signs for eyes and a banknote for a tongue.
const dollar = (x, y) =>
  `M${x + 3.6} ${y - 4} Q${x + 2.8} ${y - 6} ${x} ${y - 6} Q${x - 3.8} ${y - 6} ${x - 3.8} ${y - 3} Q${x - 3.8} ${y - 0.6} ${x} ${y} Q${x + 3.9} ${y + 0.6} ${x + 3.9} ${y + 3.2} Q${x + 3.9} ${y + 6} ${x} ${y + 6} Q${x - 2.9} ${y + 6} ${x - 3.8} ${y + 3.8} M${x} ${y - 9} L${x} ${y + 9}`;
module.exports = {
  ...f.spec(),
  id: 'money-mouth-face',
  name: 'Money-Mouth Face',
  emoji: '🤑',
  group: 'Smileys & Emotion',
  subgroup: 'face-tongue',
  tags: ['money', 'rich', 'cash', 'dollar', 'greedy'],
  draw(c) {
    const green = c.ramp('green');
    const note = c.linear('note', 'green', [0, 0, 1, 1], 0, 2);
    const eye = (x) => `${f.stroke(dollar(x, 44), 5.6, green[3])}${f.stroke(dollar(x, 44), 3.4, c.linear('eye' + x, 'green', [0, 0, 1, 1], 1, 2))}`;
    return f.head(c) + eye(37) + eye(59)
      + f.mouth.grin(c, { y: 58, w: 17, depth: 13, teeth: true, tongue: false })
      + `<g transform="rotate(-6 48 72)"><rect x="38" y="64" width="20" height="16" rx="2.5" fill="${note}" stroke="${green[3]}" stroke-opacity=".7" stroke-width="1.2"/>
        <rect x="40.5" y="66.5" width="15" height="11" rx="1.5" fill="none" stroke="${green[0]}" stroke-opacity=".7" stroke-width="1"/>
        <circle cx="48" cy="72" r="3.2" fill="${green[0]}" opacity=".75"/></g>`;
  },
};
