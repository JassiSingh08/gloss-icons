// Eye holes run the opposite way round to the outline so they stay open under the default
// nonzero fill rule the engine's clip path uses.
const body = [
  'M12 37 C21 29 37 28 48 38.5 C59 28 75 29 84 37 C83 49 74 61 61 61 C54.5 61 51 56 48 53 C45 56 41.5 61 35 61 C22 61 13 49 12 37 Z',
  'M23 43 C27 51 38 52 42.5 47 C38 41 28 39 23 43 Z',
  'M73 43 C68 39 58 41 53.5 47 C58 52 69 51 73 43 Z',
];

module.exports = {
  id: 'mask',
  name: 'Masquerade Mask',
  tags: ['mystery', 'masquerade', 'after dark', 'secret', 'party', 'disguise'],
  tone: 'purple',
  body,
  shine: [22, 37, -22],
  shineSize: [6, 2.6],
  draw(c) {
    const face = c.radial('a', 'purple', 0.3, 0.2);
    const gold = c.linear('gold', 'gold', [0, 0, 0, 1], 0, 2);
    const stick = c.linear('stick', 'gold', [0, 0, 1, 0], 1, 3);
    const plume = c.radial('plume', 'magenta', 0.3, 0.2);
    const plume2 = c.radial('plume2', 'pink', 0.3, 0.2);
    const deep = c.ramp('magenta')[3];
    return `<path d="M66 33 C64 22 70 13 81 9 C82 18 78 29 70 34 Z" fill="${plume}" stroke="${deep}" stroke-opacity=".5" stroke-width="1"/>
      <path d="M68.5 32 C74 24 75 16 81 9" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1"/>
      <path d="M59 32 C54 22 56 14 63 10 C67 18 66 26 63 32.5 Z" fill="${plume2}" stroke="${deep}" stroke-opacity=".5" stroke-width="1"/>
      <path d="M61 32 C60.5 25 61 17 63 10" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1"/>
      <path d="M22.5 56 L26 56 L33 84 L29.5 84 Z" fill="${stick}"/>
      <path d="${body.join(' ')}" fill="${face}"/>
      <path d="${body[1]}" fill="none" stroke="${gold}" stroke-width="2.2"/>
      <path d="${body[2]}" fill="none" stroke="${gold}" stroke-width="2.2"/>
      <path d="M48 41.5 L50.5 44.5 L48 47.5 L45.5 44.5 Z" fill="${gold}"/>
      <path d="M17 41 C21 52 28 57 35 57.5 M79 41 C75 52 68 57 61 57.5" fill="none" stroke="${gold}" stroke-width="1.3" stroke-opacity=".8" stroke-linecap="round"/>
      <circle cx="64" cy="34" r="3.2" fill="${gold}"/>`;
  },
};
