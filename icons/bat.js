const a = require('../src/parts/animal');

// Wings spread, seen from the front: one outline from wing tip to wing tip, scalloped between
// the finger bones.
const body = a.mirror([
  [48, 37], [45, 36.5], [42, 29, 1], [39.5, 37], [36, 42], [29, 36], [21, 30, 1], [13, 32], [6, 38, 1],
  [10, 46], [11, 55, 1], [17, 51], [22, 61, 1], [28, 56], [34, 66, 1], [39, 62], [43, 70], [48, 72],
]);
const BAT = ['#8A7AA8', '#4A3A66', '#24183A', '#0C0616'];
module.exports = {
  id: 'bat',
  name: 'Bat',
  emoji: '🦇',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['bat', 'halloween', 'night', 'vampire', 'spooky'],
  tone: 'purple',
  body,
  shine: [16, 37, -20],
  shineSize: [5, 2.2],
  draw(c) {
    const ink = '#0C0616';
    const bones = 'M36 43 L21 30 L6 38 M21 30 L11 55 M21 30 L22 61 M29 42 L34 66';
    const mirrored = bones.replace(/(\d+(?:\.\d+)?) (\d+(?:\.\d+)?)/g, (_, x, y) => `${96 - x} ${y}`);
    return `<path d="${body}" fill="${a.custom(c, 'a', BAT, 0.35, 0.3)}"/>
      ${a.line(`${bones} ${mirrored}`, '#0C0616', 1.3, ' opacity=".55"')}
      <path d="${a.spline([[48, 40], [55, 42], [57, 52], [54, 64], [48, 70], [42, 64], [39, 52], [41, 42]])}" fill="${a.custom(c, 'torso', ['#A898C0', '#5E4E7A', '#2E2046', '#100820'], 0.4, 0.2)}"/>
      ${a.eyes(45.5, 4, { rx: 1.9, ry: 2, lid: 0.35, tilt: 0.6, ink: '#FFC21A', glint: false })}
      <circle cx="44" cy="45.6" r=".8" fill="${ink}"/><circle cx="52" cy="45.6" r=".8" fill="${ink}"/>
      <path d="M45.5 51 L46.5 54 L47.3 51 Z M48.7 51 L49.5 54 L50.5 51 Z" fill="#fff"/>
      ${a.line('M44.5 50.5 Q48 52 51.5 50.5', ink, 1.1)}`;
  },
};
