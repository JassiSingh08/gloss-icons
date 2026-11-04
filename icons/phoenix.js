const k = require('../src/parts/critter');
// A phoenix rising front on: ember body, wings and tail of flame, a crest of fire, a cool sly look.
const body = 'M48 20 C54 20 58 25 57 32 C62 40 64 50 60 59 C57 65 53 69 50 71 L48 75 L46 71 C43 69 39 65 36 59 C32 50 34 40 39 32 C38 25 42 20 48 20 Z';
const wingL = 'M39 44 C28 47 17 41 11 27 C17 31 21 31 24 30 C19 24 17 17 18 10 C24 19 29 23 34 25 C33 20 33 15 35 11 C39 20 42 31 41 39 Z';
const mirror = (d) => d.replace(/(-?\d+\.?\d*) (-?\d+\.?\d*)/g, (m, x, y) => `${96 - x} ${y}`);
module.exports = {
  id: 'phoenix',
  name: 'Phoenix',
  emoji: '🐦‍🔥',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['phoenix', 'fire', 'rebirth', 'myth', 'rise'],
  tone: 'ember',
  body,
  shine: [42, 26, -40],
  shineSize: [4.5, 2.2],
  draw(c) {
    const wing = c.radial('wing', 'orange', 0.5, 0.95);
    const core = c.radial('core', 'flame', 0.5, 0.85);
    const ink = '#3D0700';
    return `${k.part(c, wingL, wing, 'orange')}${k.part(c, mirror(wingL), wing, 'orange')}
      ${k.part(c, 'M41 64 C37 72 35 78 37 86 C41 80 43 77 45.5 75 C45.5 79 46.5 83 48 86 C49.5 83 50.5 79 50.5 75 C53 77 55 80 59 86 C61 78 59 72 55 64 Z', wing, 'orange')}
      ${k.part(c, 'M44 22 C42 17 43 13 46 9 C46 13 47.5 15 48 18 C49 14 51 12 54 11 C53 15 52.5 18 51.5 21 Z', core, 'orange')}
      <path d="${body}" fill="${c.radial('a', 'ember', 0.35, 0.25)}"/>
      <path d="M48 42 C54 47 56 55 52 63 C50 67 46 67 44 63 C40 55 42 47 48 42 Z" fill="${core}"/>
      ${k.eye(43.5, 28, 2.2, ink)}${k.eye(52.5, 28, 2.2, ink)}
      ${k.lid(43.5, 28, 2.2, '#C02A08', 0.8)}${k.lid(52.5, 28, 2.2, '#C02A08', -0.8)}
      ${k.part(c, 'M45.5 31.5 L50.5 31.5 L48 37 Z', c.radial('beak', 'gold', 0.3, 0.2), 'gold')}`;
  },
};
