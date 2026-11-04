const k = require('../src/parts/critter');
// A jellyfish drifting: domed bell with a scalloped hem, frilly oral arms and trailing tentacles.
const body = 'M18 46 C18 28 32 16 48 16 C64 16 78 28 78 46 C78 50 76 52 72 50 C70 54 66 54 64 50 C60 54 56 54 54 50 C50 54 46 54 42 50 C38 54 34 54 32 50 C28 54 24 54 22 50 C20 52 18 50 18 46 Z';
module.exports = {
  id: 'jellyfish',
  name: 'Jellyfish',
  emoji: '🪼',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['jellyfish', 'sting', 'ocean', 'drift', 'glow'],
  tone: 'sky',
  body,
  shine: [32, 26, -40],
  draw(c) {
    const arm = c.linear('arm', 'magenta', [0, 0, 0, 1], 0, 2);
    return `${k.legs('M24 50 C22 60 28 66 24 76 M34 52 C34 62 30 70 32 82 M62 52 C62 62 66 70 64 82 M72 50 C74 60 68 66 72 76', '#1F7FD1', 2.2)}
      <path d="M42 50 C38 58 44 64 40 72 C38 78 42 82 44 84 C46 78 48 72 46 64 C45 58 47 54 46 50 Z M54 50 C58 58 52 64 56 72 C58 78 54 82 52 84 C50 78 48 72 50 64 C51 58 49 54 50 50 Z" fill="${arm}" stroke="#8E0078" stroke-opacity=".5" stroke-width="1"/>
      <path d="${body}" fill="${c.radial('a', 'sky', 0.35, 0.25)}"/>
      <path d="M30 44 C30 34 38 28 48 28 C58 28 66 34 66 44 C60 40 54 38 48 38 C42 38 36 40 30 44 Z" fill="#E21FC4" opacity=".3"/>`;
  },
};
