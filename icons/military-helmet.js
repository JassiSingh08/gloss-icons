const g = require('../src/parts/garment');

const body = 'M15 64 C15 37 29 20 48 20 C67 20 81 37 81 64 L85 66.5 Q88.5 72 83 73 L13 73 Q7.5 72 11 66.5 Z';

module.exports = {
  id: 'military-helmet',
  name: 'Military Helmet',
  emoji: '🪖',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['helmet', 'army', 'soldier', 'military', 'war'],
  tone: 'olive',
  body,
  shine: [28, 33, -45],
  draw(c) {
    const shell = c.radial('a', 'olive', 0.3, 0.2);
    const rim = c.linear('rim', 'olive', [0, 0, 0, 1], 1, 3);
    const o = c.ramp('olive');
    return g.tube(c, 'M22 72 Q24 86 48 86 Q72 86 74 72', { width: 3, palette: 'brown', name: 'strap', box: [22, 72, 74, 86] })
      + `<path d="${body}" fill="${shell}"/>
      <path d="M15 64 Q48 70 81 64 L85 66.5 Q88.5 72 83 73 L13 73 Q7.5 72 11 66.5 Z" fill="${rim}"/>
      <path d="M15 64 Q48 70 81 64" fill="none" stroke="${o[3]}" stroke-opacity=".55" stroke-width="1.4"/>
      <path d="M14 69.5 Q48 74 82 69.5" fill="none" stroke="${o[0]}" stroke-opacity=".4" stroke-width="1"/>
      <ellipse cx="62" cy="40" rx="6" ry="4" fill="${o[2]}" opacity=".35" transform="rotate(-20 62 40)"/>
      <ellipse cx="38" cy="54" rx="7" ry="4" fill="${o[2]}" opacity=".3" transform="rotate(15 38 54)"/>
      <ellipse cx="66" cy="57" rx="5" ry="3" fill="#6E3A14" opacity=".3"/>`;
  },
};
