// The wakaba mark: a V-notched shield, yellow on the left and green on the right.
const body = 'M48 31 L71.5 15.5 Q76 12.6 76 18 L76 55 Q76 60 72.5 63.2 L51.5 81.6 Q48 84.6 44.5 81.6 L23.5 63.2 Q20 60 20 55 L20 18 Q20 12.6 24.5 15.5 Z';
const right = 'M48 31 L71.5 15.5 Q76 12.6 76 18 L76 55 Q76 60 72.5 63.2 L51.5 81.6 Q49.8 83.1 48 83.2 Z';
module.exports = {
  id: 'japanese-symbol-for-beginner',
  name: 'Japanese Symbol for Beginner',
  emoji: '🔰',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['beginner', 'new driver', 'wakaba', 'japan', 'learner'],
  tone: 'green',
  body,
  shine: [26, 26, -80],
  shineSize: [5.5, 2.2],
  draw(c) {
    return `<path d="${body}" fill="${c.linear('y', 'yellow', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${right}" fill="${c.linear('g', 'green', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M48 31.5 L48 83" stroke="#fff" stroke-opacity=".55" stroke-width="1.2"/>`;
  },
};
