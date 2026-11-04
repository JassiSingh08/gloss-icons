const k = require('../src/parts/critter');
// A lobster from above: carapace and segmented tail as one body, big crusher claws raised, long feelers.
const body = 'M48 26 C54 26 58 31 58 38 C58 45 56 50 55 53 C57 55 57 58 55 60 C57 62 57 65 55 67 C56 69 56 71 54 73 L62 82 C57 85 52 85 48 83 C44 85 39 85 34 82 L42 73 C40 71 40 69 41 67 C39 65 39 62 41 60 C39 58 39 55 41 53 C40 50 38 45 38 38 C38 31 42 26 48 26 Z';
const clawL = 'M32 33 C25 33 18 30 14 23 C12 19 14 13 19 12 L22 18 L26 13 C31 15 34 20 35 26 Z';
const mirror = (d) => d.replace(/(-?\d+\.?\d*) (-?\d+\.?\d*)/g, (m, x, y) => `${k.n(96 - x)} ${y}`);
module.exports = {
  id: 'lobster',
  name: 'Lobster',
  emoji: '🦞',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['lobster', 'seafood', 'claws', 'ocean', 'shellfish'],
  tone: 'ember',
  body,
  shine: [43, 32, -60],
  shineSize: [5, 2.2],
  draw(c) {
    const claw = c.radial('claw', 'ember', 0.3, 0.2);
    const ink = '#3D0700';
    const legs = 'M40 46 L28 50 L24 58 M40 51 L30 57 L28 64 M56 46 L68 50 L72 58 M56 51 L66 57 L68 64';
    return `${k.legs('M44 28 C38 16 26 10 10 12 M52 28 C58 16 70 10 86 12', ink, 1.8)}
      ${k.legs(legs, ink, 4.6)}${k.legs(legs, '#B8260A', 2.8)}
      ${k.legs('M40 38 L33 30 M56 38 L63 30', ink, 6.4)}${k.legs('M40 38 L33 30 M56 38 L63 30', '#C83010', 4.4)}
      ${k.part(c, clawL, claw, 'ember')}${k.part(c, mirror(clawL), claw, 'ember')}
      <path d="${body}" fill="${c.radial('a', 'ember', 0.35, 0.2)}"/>
      ${k.line('M41 53 C45 55 51 55 55 53 M41 60 C45 62 51 62 55 60 M41 67 C45 69 51 69 54.5 67 M42 73 L54 73 M48 74 L48 83 M42 74 L38 82 M54 74 L58 82', ink, 1.3, 0.55)}
      ${k.eye(44, 30, 1.8, '#1F0500')}${k.eye(52, 30, 1.8, '#1F0500')}`;
  },
};
