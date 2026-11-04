const body = 'M48 11 C57 25 80 35 80 53 C80 64 70 70 61 67 C57.5 66 54.5 63.5 52.5 60.5 C53.5 69 56.5 76 62.5 82 Q63.5 84 61.5 84 L34.5 84 Q32.5 84 33.5 82 C39.5 76 42.5 69 43.5 60.5 C41.5 63.5 38.5 66 35 67 C26 70 16 64 16 53 C16 35 39 25 48 11 Z';
module.exports = {
  id: 'spade-suit',
  name: 'Spade Suit',
  emoji: '♠️',
  group: 'Activities',
  subgroup: 'game',
  tags: ['spade', 'cards', 'poker', 'suit', 'ace'],
  tone: 'black',
  body,
  shine: [30, 42, -48],
  draw: (c) => `<path d="${body}" fill="${c.radial('a', 'black', 0.32, 0.22)}"/>`,
};
