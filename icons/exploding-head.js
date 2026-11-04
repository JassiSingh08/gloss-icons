const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

// The crown is blown open along a jagged line; the blast rises out of it, behind the head.
const RIM = 'M23.4 44 L28 38.5 L33 43.5 L38.5 37.5 L44 43 L49.5 37 L55 42.5 L60.5 37 L66 42.5 L72.6 44';
const body = `${RIM} A26 26 0 1 1 23.4 44 Z`;
const CLOUD = [[48, 36, 9], [36, 27, 10], [60, 27, 10], [48, 18, 11.5], [26, 18, 8], [70, 18, 8], [36, 11, 7.5], [60, 11, 7.5], [48, 30, 9]];
const CORE = [[48, 21, 7], [40, 24, 5], [56, 24, 5], [48, 31, 5]];
module.exports = {
  id: 'exploding-head',
  name: 'Exploding Head',
  emoji: '🤯',
  group: 'Smileys & Emotion',
  subgroup: 'face-unwell',
  tags: ['mind blown', 'shocked', 'explode', 'wow', 'boom'],
  tone: 'yellow',
  body,
  shine: [30.5, 53, -55],
  shineSize: [5, 2.2],
  draw(c) {
    const fire = b.glow(c, 'fire', 'orange', 38, 8, 38);
    const core = b.glow(c, 'core', 'flame', 46, 18, 15);
    return b.puffs(c, CLOUD, { paint: fire, edge: '#6B0F00', sw: 2.2 })
      + `<g fill="${core}">${CORE.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g>
      <path d="${body}" fill="${c.radial('a', 'yellow', 0.32, 0.2)}"/>
      <path d="${RIM} L71 48 Q48 42.5 25 48 Z" fill="#6B4A00" opacity=".5"/>`
      + f.brows.raised({ y: 50, dx: 10.5 }) + f.eyes.wide({ y: 59, dx: 10.5, r: 5.6, pupil: 2.6 })
      + f.mouth.o({ y: 74.5, rx: 4.6, ry: 5.4 });
  },
};
