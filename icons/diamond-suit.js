const body = 'M48 10 C54 23 64 36 77 47 C64 58 54 71 48 84 C42 71 32 58 19 47 C32 36 42 23 48 10 Z';
module.exports = {
  id: 'diamond-suit',
  name: 'Diamond Suit',
  emoji: '♦️',
  group: 'Activities',
  subgroup: 'game',
  tags: ['diamond', 'cards', 'poker', 'suit', 'diamonds'],
  tone: 'red',
  body,
  shine: [37, 33, -52],
  shineSize: [6, 2.6],
  draw: (c) => `<path d="${body}" fill="${c.radial('a', 'red', 0.4, 0.25)}"/>
    <path d="M48 10 C54 23 64 36 77 47 L48 47 Z" fill="#fff" opacity=".12"/>
    <path d="M48 84 C42 71 32 58 19 47 L48 47 Z" fill="#3D0003" opacity=".18"/>`,
};
