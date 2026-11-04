const g = require('../src/parts/glass');
const body = 'M12 81 L37 22 Q43 12 49 22 L58.5 38 L63 31 Q67.5 25 72 31 L84 81 Q84.5 84 81.5 84 L14.5 84 Q11.5 84 12 81 Z';
module.exports = {
  id: 'snow-capped-mountain',
  name: 'Snow-Capped Mountain',
  emoji: '🏔️',
  group: 'Travel & Places',
  subgroup: 'place-geographic',
  tags: ['mountain', 'snow', 'peak', 'alps', 'winter'],
  tone: 'slate',
  body,
  shine: [33, 34, -65],
  shineSize: [5, 1.8],
  draw(c) {
    const rock = c.radial('a', 'slate', 0.35, 0.05);
    const snow = c.radial('snow', 'white', 0.35, 0.2);
    const s = c.ramp('slate');
    return `<path d="${body}" fill="${rock}"/>
      <path d="M43 15 Q46 15 49 22 L58.5 38 L58 84 L50 84 C52 66 46 44 43 15 Z" fill="${s[3]}" opacity=".45"/>
      <path d="M67.5 26 Q70 26 72 31 L84 81 Q84.5 84 81.5 84 L76 84 C76 66 70 46 67.5 26 Z" fill="${s[3]}" opacity=".45"/>
      <path d="M37 22 Q43 12 49 22 L54.5 31.5 L51 29 L48 34 L44.5 29.5 L40.5 35 L37.5 30.5 L32.5 33.5 Z" fill="${snow}"/>
      <path d="M63 31 Q67.5 25 72 31 L74 39 L71 36.5 L68 40 L65.5 36 L61.5 38.5 Z" fill="${snow}"/>
      <path d="M38.5 22.5 Q41 18 43 17" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M12 81 C30 76 66 76 84 81 Q84.5 84 81.5 84 L14.5 84 Q11.5 84 12 81 Z" fill="${c.linear('ground', 'white', [0, 0, 1, 0], 0, 2)}"/>`;
  },
};
