// Seen from the front: a dome creased down the middle, both ends curled down, the dark hollow
// under the arch and a fortune slip sliding out of it.
const body = 'M13 60 C10 40 27 23 48 23 C69 23 86 40 83 60 C81 70 73 73 65 69 C59 66 54 61 48 61 C42 61 37 66 31 69 C23 73 15 70 13 60 Z';
module.exports = {
  id: 'fortune-cookie',
  name: 'Fortune Cookie',
  emoji: '🥠',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['fortune cookie', 'luck', 'fortune', 'takeaway', 'prophecy'],
  tone: 'gold',
  body,
  shine: [25, 40, -48],
  draw(c) {
    const cookie = c.radial('a', 'gold', 0.3, 0.2);
    const paper = c.linear('paper', 'white', [0, 0, 1, 1], 0, 2);
    return `<path d="${body}" fill="${cookie}"/>
      <path d="M33 66.5 C38 61 43 58 48 58 C53 58 58 61 63 66.5 C58 63.5 53 61.6 48 61.6 C43 61.6 38 63.5 33 66.5 Z" fill="#6B3A00"/>
      <path d="M48 25 C45 36 45 48 48 58" stroke="#8A5200" stroke-opacity=".75" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M51.5 26 C48.5 37 48.5 48 51 57" stroke="#FFF3A6" stroke-opacity=".6" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="M22 62 C26 52 34 46 42 44 M74 62 C70 52 62 46 54 44" stroke="#C98500" stroke-opacity=".55" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="M46 61 L80 76 L77 83 L43 67.5 Z" fill="${paper}" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1"/>
      <path d="M52 67 L56 68.8 M59 70 L66 73.2 M69 74.6 L74 76.8" stroke="#E3120B" stroke-width="1.7" stroke-linecap="round"/>`;
  },
};
