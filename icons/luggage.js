const B = require('../src/parts/building');

const body = B.rr(22, 29, 52, 50, 8);
module.exports = {
  id: 'luggage',
  name: 'Luggage',
  emoji: '🧳',
  group: 'Travel & Places',
  subgroup: 'hotel',
  tags: ['suitcase', 'travel', 'holiday', 'trip', 'packing'],
  tone: 'blue',
  body,
  shine: [30, 37, -40],
  draw(c) {
    const shell = c.linear('a', 'blue', [0, 0, 1, 1], 0, 2);
    const rod = c.linear('rod', 'silver', [0, 0, 1, 0], 0, 2);
    const grip = c.linear('grip', 'black', [0, 0, 0, 1], 0, 2);
    const wheel = c.radial('wheel', 'black', 0.35, 0.3);
    return `<path d="M37 30 L37 16 M59 30 L59 16" stroke="#3A3E52" stroke-width="4.4"/>
      <path d="M37 30 L37 16 M59 30 L59 16" stroke="${rod}" stroke-width="2.6"/>
      <rect x="33" y="11" width="30" height="7" rx="3.5" fill="${grip}" stroke="#05050A" stroke-opacity=".5" stroke-width="1"/>
      <circle cx="31" cy="81" r="3.6" fill="${wheel}"/><circle cx="65" cy="81" r="3.6" fill="${wheel}"/>
      <path d="${body}" fill="${shell}"/>
      <path d="M35 31 L35 77 M48 31 L48 77 M61 31 L61 77" stroke="#001E4D" stroke-opacity=".3" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M36 31 L36 77 M49 31 L49 77 M62 31 L62 77" stroke="#fff" stroke-opacity=".3" stroke-width="1"/>
      <path d="M22 37 Q22 29 30 29 L30 33 Q26 33 26 37 Z M74 37 Q74 29 66 29 L66 33 Q70 33 70 37 Z M22 71 Q22 79 30 79 L30 75 Q26 75 26 71 Z M74 71 Q74 79 66 79 L66 75 Q70 75 70 71 Z" fill="${c.linear('corner', 'silver', [0, 0, 1, 1], 0, 2)}"/>
      <circle cx="54.5" cy="58" r="7" fill="${c.radial('st1', 'gold', 0.35, 0.3)}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1"/>
      <path d="M51 58 L58 58 M54.5 54.5 L54.5 61.5" stroke="#C98500" stroke-width="1.4"/>
      <rect x="27" y="61" width="13" height="9" rx="2" fill="${c.linear('st2', 'pink', [0, 0, 1, 1], 0, 2)}" stroke="#4A0016" stroke-opacity=".5" stroke-width="1" transform="rotate(-10 33.5 65.5)"/>`;
  },
};
