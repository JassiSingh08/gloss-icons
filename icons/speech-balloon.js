const body = 'M30 14 L66 14 C77 14 84 21 84 32 L84 46 C84 57 77 64 66 64 L43 64 L25.5 79.5 C23 81.5 21.5 80.5 22.5 77.5 L27 64 C18 63 12 56 12 46 L12 32 C12 21 19 14 30 14 Z';
module.exports = {
  id: 'speech-balloon',
  name: 'Speech Balloon',
  emoji: '💬',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['chat', 'message', 'talk', 'comment', 'typing'],
  tone: 'sky',
  body,
  shine: [24, 22, -35],
  shineSize: [6, 2.6],
  draw(c) {
    const dot = (x) => `<circle cx="${x}" cy="39.5" r="5" fill="#0A3A6B" opacity=".35" transform="translate(.6 1.2)"/><circle cx="${x}" cy="39.5" r="5" fill="#fff"/>`;
    return `<path d="${body}" fill="${c.radial('a', 'sky', 0.3, 0.2)}"/>
      ${dot(32)}${dot(48)}${dot(64)}`;
  },
};
