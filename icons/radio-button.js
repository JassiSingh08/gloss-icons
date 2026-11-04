const av = require('../src/parts/av');
// A silver bezel round a pale recessed well holding a glossy black dot.
const body = av.disc(48, 47, 34);

module.exports = {
  ...av.geo({
  id: 'radio-button',
  name: 'Radio Button',
  emoji: '🔘',
  group: 'Symbols',
  subgroup: 'geometric',
  tags: ['radio', 'button', 'select', 'option', 'circle'],
}, 'white'),
  tone: 'silver',
  body,
  shine: [29, 28, -45],
  shineSize: [7, 3],
  draw: (c) => `<path d="${body}" fill="${c.radial('a', 'silver', 0.32, 0.24)}"/>
    ${av.rim(c, av.disc(48, 47, 32.6), 'white')}
    <circle cx="48" cy="47" r="23" fill="${c.linear('well', 'white', [0, 0, 1, 1], 3, 0)}"/>
    <circle cx="48" cy="47" r="23" fill="none" stroke="#3A3E52" stroke-opacity=".55" stroke-width="1.2"/>
    <circle cx="48" cy="47" r="13" fill="${c.radial('dot', 'black', 0.32, 0.25)}" stroke="#05050A" stroke-opacity=".6" stroke-width="1.1"/>
    <ellipse cx="43.8" cy="42" rx="3.6" ry="1.7" fill="#fff" opacity=".75" transform="rotate(-42 43.8 42)"/>`,
};
