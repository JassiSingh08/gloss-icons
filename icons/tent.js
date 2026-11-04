const body = 'M14.5 81 L42 22 Q44 18.5 47 19.5 L77 25.5 Q79.5 26 80 28.5 L84 76 Q84.5 79.5 81 80 L60 83.5 L16.5 84 Q13.5 84 14.5 81 Z';
module.exports = {
  id: 'tent',
  name: 'Tent',
  emoji: '⛺',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['camping', 'outdoors', 'festival', 'hike', 'adventure'],
  tone: 'orange',
  body,
  shine: [32, 44, -64],
  shineSize: [7, 2.4],
  draw(c) {
    const front = c.linear('a', 'orange', [0, 0, 1, 1], 0, 2);
    const side = c.linear('side', 'ember', [0, 0, 1, 1], 1, 2);
    const inside = c.radial('in', 'black', 0.5, 0.3);
    const flap = c.linear('flap', 'orange', [0, 0, 1, 0], 1, 3);
    return `<path d="M44 20 L44 13" stroke="#6E3A14" stroke-width="2" stroke-linecap="round"/>
      <path d="M44 13 L52 15.5 L44 18 Z" fill="${c.linear('pen', 'teal', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${body}" fill="${front}"/>
      <path d="M44.5 19.5 L77 25.5 Q79.5 26 80 28.5 L84 76 Q84.5 79.5 81 80 L60 83.5 Z" fill="${side}"/>
      <path d="M44.5 19.5 L60 83.5" stroke="#6B0F00" stroke-opacity=".5" stroke-width="1.3"/>
      <path d="M40 44 L28 84 L52 84 Z" fill="${inside}"/>
      <path d="M40 44 L28 84 L23 84 Q30 62 40 44 Z M40 44 Q47 62 52 84 L57 84 Z" fill="${flap}"/>
      <path d="M14.5 82 L6 84 M83 78 L90 80" stroke="#6E3A14" stroke-width="1.2" stroke-linecap="round"/>`;
  },
};
