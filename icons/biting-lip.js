// Full lips with the top teeth pressed into the lower one.
const body = 'M14 45 C22 37 30 29.5 39 29.5 C43 29.5 46 31.5 48 33.5 C50 31.5 53 29.5 57 29.5 C66 29.5 74 37 82 45 C80 62 66 80 48 80 C30 80 16 62 14 45 Z';
const upper = 'M14 45 C22 37 30 29.5 39 29.5 C43 29.5 46 31.5 48 33.5 C50 31.5 53 29.5 57 29.5 C66 29.5 74 37 82 45 C72 46.5 62 46 48 47 C34 46 24 46.5 14 45 Z';
module.exports = {
  id: 'biting-lip',
  name: 'Biting Lip',
  emoji: '🫦',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['flirt', 'nervous', 'desire', 'lip bite', 'sexy'],
  tone: 'red',
  body,
  shine: [30, 41, -38],
  shineSize: [5.5, 2.4],
  draw(c) {
    const teeth = 'M35 46.5 C41 47 55 47 61 46.5 L60.5 51.5 Q60 54 57.5 54 L38.5 54 Q36 54 35.5 51.5 Z';
    return `<path d="${body}" fill="${c.radial('a', 'red', 0.45, 0.3)}"/>
      <path d="M24 47.5 C34 50 62 50 72 47.5 C66 56 30 56 24 47.5 Z" fill="#FF7A62" opacity=".45"/>
      <path d="M35 53 C42 57.5 54 57.5 61 53 L61 55.5 C54 60 42 60 35 55.5 Z" fill="#3D0003" opacity=".3"/>
      <path d="M14.5 45.5 C20 47.5 26 47 31.5 47 M81.5 45.5 C76 47.5 70 47 64.5 47" stroke="#3D0003" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="${teeth}" fill="${c.linear('teeth', 'cream', [0, 0, 0, 1], 0, 1)}" stroke="#8A5A1E" stroke-opacity=".45" stroke-width="1"/>
      <path d="M41.5 47.2 L41.5 54 M48 47.4 L48 54 M54.5 47.2 L54.5 54" stroke="#8A5A1E" stroke-opacity=".35" stroke-width="1.1"/>
      <path d="${upper}" fill="${c.radial('up', 'red', 0.4, 0.15)}"/>
      <path d="${upper}" fill="#3D0003" opacity=".15"/>
      <ellipse cx="54" cy="70" rx="9" ry="3" fill="#fff" opacity=".7" transform="rotate(-4 54 70)"/>
      <path d="M44 34.5 Q48 37.5 52 34.5" stroke="#3D0003" stroke-opacity=".35" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
  },
};
