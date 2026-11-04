const body = 'M53 9 L70 9 Q72.5 9 71.3 11.3 L59 34 L73 34 Q76 34 74 36.5 L37.5 82.5 Q35 85 35.8 81.7 L43.5 53 L26 53 Q23 53 24.6 50.5 L50.6 10.6 Q51.6 9 53 9 Z';
module.exports = {
  id: 'lightning',
  name: 'Lightning',
  emoji: '⚡',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['energy', 'fast', 'electric', 'spark', 'chemistry', 'power'],
  tone: 'yellow',
  body,
  shine: [52, 18, -57],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'yellow', 0.35, 0.2)}"/>
      <path d="M59 34 L73 34 Q76 34 74 36.5 L37.5 82.5 Q35 85 35.8 81.7 L43.5 53 L48 53 Z" fill="#D9A400" opacity=".35"/>`;
  },
};
