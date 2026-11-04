const B = require('../src/parts/building');

const body = 'M18 84 Q14 84 14 80 L14 35 Q14 31 18 31 L33 31 L33 18 Q33 14 37 14 L59 14 Q63 14 63 18 L63 31 L78 31 Q82 31 82 35 L82 80 Q82 84 78 84 Z';
module.exports = {
  id: 'japanese-post-office',
  name: 'Japanese Post Office',
  emoji: '🏣',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['post', 'mail', 'japan', 'letters', 'yubin'],
  tone: 'cream',
  body,
  shine: [22, 41, -20],
  draw(c) {
    const sign = c.linear('sign', 'red', [0, 0, 1, 1], 0, 2);
    const trim = c.linear('trim', 'red', [0, 0, 0, 1], 1, 2);
    return `<path d="${body}" fill="${B.wall(c)}"/>
      <path d="M18 31 L78 31 Q82 31 82 35 L82 38 L14 38 L14 35 Q14 31 18 31 Z" fill="${trim}"/>
      ${B.eave(14, 38, 68)}
      <path d="M37 14 L59 14 Q63 14 63 18 L63 31 L33 31 L33 18 Q33 14 37 14 Z" fill="${sign}"/>
      <path d="M40 19.5 L56 19.5 M40 24.5 L56 24.5 M48 24.5 L48 31" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>
      ${B.win(c, 19, 46, 13, 12)}${B.win(c, 64, 46, 13, 12)}
      ${B.win(c, 19, 65, 13, 12)}${B.win(c, 64, 65, 13, 12)}
      <path d="M37 84 L37 50 Q37 47 40 47 L56 47 Q59 47 59 50 L59 84 Z" fill="${B.glass(c)}" stroke="#8A5A1E" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M48 47 L48 84" stroke="#E0B472" stroke-width="2"/>
      <path d="M34 45 L62 45" stroke="${c.ramp('red')[2]}" stroke-width="3" stroke-linecap="round"/>`;
  },
};
