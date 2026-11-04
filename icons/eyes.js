// Two eyes glancing to the side.
const eye = (cx) => `M${cx} 26 C${cx + 21.5} 26 ${cx + 21.5} 74 ${cx} 74 C${cx - 21.5} 74 ${cx - 21.5} 26 ${cx} 26 Z`;
const body = [eye(31.5), eye(64.5)];
module.exports = {
  id: 'eyes',
  name: 'Eyes',
  emoji: '👀',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['look', 'side eye', 'watching', 'eyes', 'awkward'],
  tone: 'white',
  body,
  shine: [24, 36, -60],
  shineSize: [5.5, 2.4],
  draw(c) {
    const ink = '#12002E';
    const pupil = (x) => `<ellipse cx="${x}" cy="52" rx="7.5" ry="9.5" fill="${ink}"/><circle cx="${x - 2.4}" cy="48.5" r="2.4" fill="#fff"/>`;
    return `<path d="${body[0]}" fill="${c.radial('a', 'white', 0.3, 0.2)}"/>
      <path d="${body[1]}" fill="${c.radial('b', 'white', 0.3, 0.2)}"/>
      ${pupil(23)}${pupil(56)}
      <ellipse cx="57" cy="36" rx="5" ry="2.2" fill="#fff" opacity=".85" transform="rotate(-60 57 36)"/>`;
  },
};
