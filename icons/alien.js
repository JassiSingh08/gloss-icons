const body = 'M48 12 C68 12 81 26 81 43 C81 60 64 79 48 84 C32 79 15 60 15 43 C15 26 28 12 48 12 Z';
// One almond eye, slanting up and out; mirrored for the other.
const eye = (s) => `M${48 - s * 5} 52 C${48 - s * 6} 43 ${48 - s * 16} 37 ${48 - s * 26} 39 C${48 - s * 27} 48 ${48 - s * 16} 56 ${48 - s * 5} 52 Z`;
module.exports = {
  id: 'alien',
  name: 'Alien',
  emoji: '👽',
  group: 'Smileys & Emotion',
  subgroup: 'face-costume',
  tags: ['alien', 'ufo', 'extraterrestrial', 'space', 'sci-fi'],
  tone: 'grey',
  body,
  shine: [29, 27, -45],
  draw(c) {
    const skin = c.radial('a', 'grey', 0.32, 0.2);
    const glass = c.linear('glass', 'black', [0, 0, 0.3, 1], 1, 3);
    return `<path d="${body}" fill="${skin}"/>
      <path d="${eye(1)} ${eye(-1)}" fill="${glass}" stroke="#05050A" stroke-width="1.2"/>
      <path d="M30 42.5 Q34 41 38 43 M59 44 Q63 41.5 67 42" stroke="#fff" stroke-opacity=".6" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M43 69 Q49 70.5 54 67.5" stroke="#2E2E3A" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <path d="M45.5 60 L46 61 M50.5 60 L50 61" stroke="#2E2E3A" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>`;
  },
};
