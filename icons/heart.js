const body = 'M48 80 C22 62 12 47 15 33 C18 20 35 15 48 28 C61 15 78 20 81 33 C84 47 74 62 48 80 Z';
module.exports = {
  id: 'heart',
  name: 'Heart',
  emoji: '❤️',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['love', 'romance', 'couple', 'like'],
  tone: 'pink',
  body,
  shine: [29, 31, -40],
  draw: (c) => `<path d="${body}" fill="${c.radial('a', 'pink', 0.32, 0.22)}"/>`,
};
