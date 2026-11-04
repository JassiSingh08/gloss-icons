const F = require('../src/parts/figure');

// Two silhouettes (as in person, 👤) leaning together, each with an arm round the other.
module.exports = {
  id: 'people-hugging',
  name: 'People Hugging',
  emoji: '🫂',
  group: 'People & Body',
  subgroup: 'person-symbol',
  tags: ['hug', 'embrace', 'comfort', 'support', 'care'],
  tone: 'blue',
  shine: [30, 34, -35], shineSize: [4, 2],
  ...F.build((c) => {
    const arm = (pts, pal, name) => {
      const r = c.ramp(pal);
      return `<path d="${F.limbPath(pts, 9, 8)}" fill="${c.radial(name, pal, 0.3, 0.2)}" stroke="${r[3]}" stroke-opacity=".6" stroke-width="1.2"/>`;
    };
    return {
      art: `<g transform="rotate(-8 66 83)">${F.silhouette(c, 66, 0.88, 'navy', 'b')}</g>`
        + arm([[42, 66], [28, 63], [20, 57]], 'navy', 'arm-b')
        + `<g transform="rotate(8 30 83)">${F.silhouette(c, 30, 0.88, 'blue', 'a')}</g>`
        + arm([[42, 63], [58, 56], [74, 55]], 'blue', 'arm-a'),
    };
  }),
};
