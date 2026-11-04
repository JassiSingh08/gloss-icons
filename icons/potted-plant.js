const L = require('../src/parts/leaf');
// Glossy terracotta pot with a lip, sprouting a fan of broad leaves.
const body = 'M21 47 C21 45.3 22.3 44 24 44 L72 44 C73.7 44 75 45.3 75 47 L75 54 C75 55.7 73.7 57 72 57 L69.5 57 L65 81 C64.6 83 63 84 61 84 L35 84 C33 84 31.4 83 31 81 L26.5 57 L24 57 C22.3 57 21 55.7 21 54 Z';
module.exports = {
  id: 'potted-plant',
  name: 'Potted Plant',
  emoji: '🪴',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['plant', 'houseplant', 'pot', 'green', 'home'],
  tone: 'ember',
  body,
  shine: [28, 64, -70],
  shineSize: [6, 2.4],
  draw(c) {
    c.def(`<linearGradient id="${c.id('a')}" x1="0" y1="0" x2="1" y2="0.4"><stop offset="0" stop-color="#FFB894"/><stop offset=".45" stop-color="#D9622E"/><stop offset="1" stop-color="#7A2A0C"/></linearGradient>`);
    const rim = c.linear('rim', 'ember', [0, 0, 1, 0], 0, 1);
    const k = L.kit(c);
    return `<ellipse cx="48" cy="45" rx="25" ry="3.5" fill="#331805"/>
      ${k.leaf([45, 44], [12, 30], 0.27, -0.25)}
      ${k.leaf([51, 44], [84, 30], 0.27, 0.25)}
      ${k.leaf([46, 43], [22, 11], 0.28, -0.2)}
      ${k.leaf([50, 43], [74, 11], 0.28, 0.2)}
      ${k.leaf([48, 44], [49, 6], 0.26, 0.1)}
      <path d="${body}" fill="url(#${c.id('a')})"/>
      <path d="M21 47 C21 45.3 22.3 44 24 44 L72 44 C73.7 44 75 45.3 75 47 L75 54 C75 55.7 73.7 57 72 57 L24 57 C22.3 57 21 55.7 21 54 Z" fill="${rim}"/>
      <path d="M26.5 57 L69.5 57 L69 59.5 L27 59.5 Z" fill="#3D1205" opacity=".35"/>`;
  },
};
