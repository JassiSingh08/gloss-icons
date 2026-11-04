const body = 'M48 83 C40 70 15 58 15 37 C15 25 24 18 33.5 18 C40.5 18 45.5 22.5 48 28.5 C50.5 22.5 55.5 18 62.5 18 C72 18 81 25 81 37 C81 58 56 70 48 83 Z';
module.exports = {
  id: 'heart-suit',
  name: 'Heart Suit',
  emoji: '♥️',
  group: 'Activities',
  subgroup: 'game',
  tags: ['heart', 'cards', 'poker', 'suit', 'hearts'],
  tone: 'red',
  body,
  shine: [27, 30, -45],
  draw: (c) => `<path d="${body}" fill="${c.radial('a', 'red', 0.32, 0.22)}"/>`,
};
