const body = 'M48 10 C56 27 74 44 74 60 C74 75 62.5 85 48 85 C33.5 85 22 75 22 60 C22 44 40 27 48 10 Z';
module.exports = {
  id: 'drop-of-blood',
  name: 'Drop Of Blood',
  emoji: '🩸',
  group: 'Objects',
  subgroup: 'medical',
  tags: ['blood', 'drop', 'donate', 'period', 'medical'],
  tone: 'red',
  body,
  shine: [35, 50, -60],
  draw: (c) => `<path d="${body}" fill="${c.radial('a', 'red', 0.35, 0.35)}"/>
    <path d="M60 66 C62 72 58 77 53 78" stroke="#FF7A62" stroke-opacity=".7" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
};
