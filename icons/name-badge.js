// A tulip-shaped name tag, the kind pinned on children's smocks, with a blank white label.
const body = 'M48 83 C66 83 79 71 79 53 L79 18 Q79 14 76 16.5 L63 29 L50.5 12.5 Q48 9.5 45.5 12.5 L33 29 L20 16.5 Q17 14 17 18 L17 53 C17 71 30 83 48 83 Z';
module.exports = {
  id: 'name-badge',
  name: 'Name Badge',
  emoji: '📛',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['name', 'badge', 'tag', 'school', 'label'],
  tone: 'ember',
  body,
  shine: [24, 30, -70],
  shineSize: [6, 2.6],
  draw(c) {
    const label = c.linear('lab', 'white', [0, 0, 0, 1], 0, 2);
    return `<path d="${body}" fill="${c.radial('a', 'ember', 0.3, 0.2)}"/>
      <rect x="25" y="43" width="46" height="22" rx="4" fill="#3D0700" opacity=".35" transform="translate(.6 1.4)"/>
      <rect x="25" y="43" width="46" height="22" rx="4" fill="${label}"/>`;
  },
};
