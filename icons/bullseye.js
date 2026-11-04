const body = 'M45 20 A32 32 0 1 1 44.99 20 Z';
module.exports = {
  id: 'bullseye',
  name: 'Bullseye',
  emoji: '🎯',
  group: 'Activities',
  subgroup: 'game',
  tags: ['target', 'bullseye', 'goal', 'darts', 'aim', 'focus'],
  tone: 'red',
  body,
  shine: [29, 32, -40],
  draw(c) {
    const red = c.radial('a', 'red', 0.32, 0.25);
    const white = c.radial('w', 'white', 0.32, 0.25);
    const ring = (r, fill) => `<circle cx="45" cy="52" r="${r}" fill="${fill}"/>`;
    return `${ring(32, red)}${ring(25, white)}${ring(18, red)}${ring(11, white)}${ring(4.6, red)}
      <ellipse cx="46.5" cy="53.5" rx="3.6" ry="2" fill="#000" opacity=".3"/>
      <path d="M45 52 L74 23" stroke="#3A3E52" stroke-width="3.6" stroke-linecap="round"/>
      <path d="M45 52 L74 23" stroke="${c.linear('shaft', 'silver', [0, 0, 1, 1], 0, 2)}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M45 52 L50 47" stroke="#3A3E52" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M70 27 L70 13 L76 19 Z M70 27 L84 27 L78 21 Z" fill="${c.linear('flight', 'sky', [0, 0, 1, 1], 0, 2)}" stroke="#0A3A6B" stroke-opacity=".5" stroke-width="1" stroke-linejoin="round"/>`;
  },
};
