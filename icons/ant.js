const k = require('../src/parts/critter');
// A red ant in profile facing left: head, thorax and gaster are separate lobes; six thin legs to the ground.
const body = [k.ellipse(24, 46, 9, 8, -15), k.ellipse(43, 51, 9, 6, 10), k.ellipse(68, 53, 16, 12, 12)];
module.exports = {
  id: 'ant',
  name: 'Ant',
  emoji: '🐜',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['ant', 'insect', 'colony', 'hardworking', 'tiny'],
  tone: 'ember',
  body,
  shine: [62, 46, -25],
  shineSize: [6, 2.4],
  draw(c) {
    const ink = '#2A0500';
    const fill = c.radial('a', 'ember', 0.35, 0.25);
    return `${k.legs('M32 49 L36 51 M51 53 L54 54', ink, 4)}
      ${k.legs('M40 54 L30 66 L22 84 M44 56 L44 70 L40 85 M48 55 L58 68 L64 84', '#8A1200', 3)}
      ${k.legs('M22 39 L18 28 L8 26 M26 38 L28 28 L20 22', '#8A1200', 2.4)}
      ${body.map((d) => `<path d="${d}" fill="${fill}"/>`).join('')}
      ${k.glint(20.5, 41.5, 3, 1.4, -40, 0.85)}${k.glint(40, 47.5, 3, 1.3, -20, 0.8)}
      ${k.legs('M16 50 L12 53 M17 52 L14 56', ink, 2.2)}
      ${k.eye(21, 45, 2.4, ink)}`;
  },
};
