const s = require('../src/parts/sign');
// The S is the body; the bar runs behind it and shows above, below and through the counters.
const top = s.arc(48, 38.5, 13.5, -28, -270, 14, 11.5);
const bot = s.arc(48, 61.5, 13.5, -90, 152, 14, 11.5);
const body = s.tube(s.join(top, bot), 5.6);
module.exports = {
  id: 'heavy-dollar-sign',
  name: 'Heavy Dollar Sign',
  emoji: '💲',
  group: 'Symbols',
  subgroup: 'currency',
  tags: ['dollar', 'money', 'price', 'currency', 'cash'],
  tone: 'green',
  body,
  shine: [37, 31, -50],
  shineSize: [5, 2.2],
  draw(c) {
    const bar = c.linear('bar', 'green', [0, 0, 1, 0], 1, 2);
    return `<rect x="44.8" y="15" width="6.4" height="70" rx="2.4" fill="${bar}" stroke="#053A1A" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${body}" fill="${c.radial('a', 'green', 0.3, 0.22)}"/>`;
  },
};
