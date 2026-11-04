const head = 'M48 15 A15 15 0 1 1 47.99 15 Z';
const torso = 'M48 50 C66 50 79 61 79 76 Q79 83 72 83 L24 83 Q17 83 17 76 C17 61 30 50 48 50 Z';
module.exports = {
  id: 'person',
  name: 'Person',
  emoji: '👤',
  group: 'People & Body',
  subgroup: 'person-symbol',
  tags: ['person', 'solo', 'single player', 'user', 'me'],
  tone: 'blue',
  body: [head, torso],
  shine: [40, 22, -35],
  shineSize: [5.5, 2.8],
  draw(c) {
    const fill = c.radial('a', 'blue', 0.32, 0.2);
    const top = c.radial('b', 'blue', 0.34, 0.22);
    return `<path d="${torso}" fill="${fill}"/>
      <ellipse cx="30" cy="62" rx="6" ry="3" fill="#fff" opacity=".7" transform="rotate(-38 30 62)"/>
      <path d="${head}" fill="${top}"/>`;
  },
};
