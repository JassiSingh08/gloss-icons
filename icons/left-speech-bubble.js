const body = 'M50 17 C69 17 84 28.5 84 43.5 C84 58.5 69 70 50 70 C44.5 70 39.5 69 35 67.5 L16.5 79.5 C13.5 81.5 12.5 80 14 77.5 L23.5 61.5 C18.5 56.5 16 50.5 16 43.5 C16 28.5 31 17 50 17 Z';
module.exports = {
  id: 'left-speech-bubble',
  name: 'Left Speech Bubble',
  emoji: '🗨️',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['speech', 'bubble', 'talk', 'say', 'dialog'],
  tone: 'white',
  body,
  shine: [29, 28, -38],
  shineSize: [6.5, 2.8],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'white', 0.3, 0.2)}"/>`;
  },
};
