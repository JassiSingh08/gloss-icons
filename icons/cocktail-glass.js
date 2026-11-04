const g = require('../src/parts/glass');
const body = 'M14 17 L82 17 L50.5 50 L50.5 78 C57 79 64 80 64 82 C64 84 57 84.6 48 84.6 C39 84.6 32 84 32 82 C32 80 39 79 45.5 78 L45.5 50 Z';
module.exports = {
  id: 'cocktail-glass',
  name: 'Cocktail Glass',
  emoji: '🍸',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['cocktail', 'martini', 'bar', 'drinks', 'olive'],
  tone: 'sky',
  body,
  shine: [26, 22, -15],
  shineSize: [5, 1.6],
  draw(c) {
    const drink = c.radial('drink', 'sky', 0.4, 0.2);
    const olive = c.radial('olive', 'olive', 0.35, 0.25);
    return `${g.pane(c, body)}
      <path d="M18.5 23 C36 25.5 60 25.5 77.5 23 L50 49.5 L46 49.5 Z" fill="${drink}" fill-opacity=".85"/>
      <path d="${g.ellipse(48, 23, 29.5, 2.6)}" fill="#E6F6FF" fill-opacity=".8"/>
      ${g.solid('M45.5 50 L50.5 50 L50.5 78 C57 79 64 80 64 82 C64 84 57 84.6 48 84.6 C39 84.6 32 84 32 82 C32 80 39 79 45.5 78 Z')}
      <path d="M63 7 L39 41" stroke="#8A4A14" stroke-width="1.8" stroke-linecap="round"/>
      <ellipse cx="45" cy="32.5" rx="5.4" ry="4.6" fill="${olive}" ${g.edge('#273005', 1, 0.55)} transform="rotate(-55 45 32.5)"/>
      <circle cx="47" cy="30" r="1.8" fill="#E3120B"/>
      <path d="M14 17 L82 17" stroke="#fff" stroke-opacity=".8" stroke-width="1.4"/>
      ${g.gleam(['M21 21 L40 41'], 1.7)}`;
  },
};
