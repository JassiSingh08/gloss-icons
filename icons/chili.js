const body = 'M63 27 C77 33 79 51 69 64 C59 77 42 84 25 83 C19 82.5 19 78 24.5 76.5 C39 72.5 48 62 50.5 49 C52.5 39 52 31 63 27 Z';
module.exports = {
  id: 'chili',
  name: 'Chili',
  tags: ['spicy', 'hot', 'food', 'pepper', 'flirty'],
  tone: 'red',
  body,
  shine: [62, 34, -55],
  draw(c) {
    const stem = c.radial('stem', 'green', 0.3, 0.2);
    return `<path d="${body}" fill="${c.radial('a', 'red', 0.38, 0.22)}"/>
      <path d="M56.5 30.5 C56 22 60 15.5 68 13 C70 12.5 71.5 15 69.5 17 C64.5 19.5 63 24 64 30 Z" fill="${stem}"/>
      <path d="M53 31 C57 24.5 67 22.5 71.5 28.5 C67 32.5 59 34.5 53 31 Z" fill="${stem}"/>`;
  },
};
