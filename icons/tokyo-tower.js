const body = 'M18 84 C28 73 35 64 37.5 56 L33 56 L33 47 L41 47 L44 31 L41.5 31 L41.5 25 L46.3 25 L47 9 L49 9 L49.7 25 L54.5 25 L54.5 31 L52 31 L55 47 L63 47 L63 56 L58.5 56 C61 64 68 73 78 84 L68 84 C61 75 55 70 48 70 C41 70 35 75 28 84 Z';
module.exports = {
  id: 'tokyo-tower',
  name: 'Tokyo Tower',
  emoji: '🗼',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['tokyo', 'japan', 'landmark', 'tower', 'city'],
  tone: 'red',
  body,
  shine: [40, 50.5, -5],
  shineSize: [4.5, 1.6],
  draw(c) {
    const steel = c.linear('a', 'ember', [0, 0, 1, 0.3], 0, 2);
    const white = c.linear('white', 'white', [0, 0, 1, 0], 0, 2);
    const deck = c.linear('deck', 'white', [0, 0, 0, 1], 0, 2);
    const glass = c.linear('glass', 'sky', [0, 0, 1, 0], 0, 2);
    const k = c.id('clip');
    return `<path d="${body}" fill="${steel}"/>
      <g clip-path="url(#${k})" fill="${white}">
        <rect x="10" y="64" width="76" height="5"/><rect x="10" y="38" width="76" height="4"/><rect x="10" y="17" width="76" height="3.5"/>
      </g>
      <path d="M24 79 L43 63 M72 79 L53 63 M30 74 L48 70 L66 74 M39 58 L48 64 L57 58 M42.5 45 L53 35 M53.5 45 L43 35" fill="none" stroke="#3D0003" stroke-opacity=".4" stroke-width="1.1"/>
      <rect x="33" y="47" width="30" height="9" rx="1.5" fill="${deck}"/>
      <rect x="35" y="49.2" width="26" height="4" rx="1" fill="${glass}"/>
      <rect x="41.5" y="25" width="13" height="6" rx="1.2" fill="${deck}"/>
      <rect x="43" y="26.7" width="10" height="2.6" rx=".8" fill="${glass}"/>`;
  },
};
