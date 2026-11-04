// A molar: two cusps on the crown, two roots below.
const body = 'M30 14 C36 12 42 16.5 48 16.5 C54 16.5 60 12 66 14 C76 17 80 28 78 40 C76.5 50 72 56 70 64 C68 74 66 83 60 83 C55 83 54 74 52.5 66 C51.5 62 49.5 60 48 60 C46.5 60 44.5 62 43.5 66 C42 74 41 83 36 83 C30 83 28 74 26 64 C24 56 19.5 50 18 40 C16 28 20 17 30 14 Z';
module.exports = {
  id: 'tooth',
  name: 'Tooth',
  emoji: '🦷',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['tooth', 'dentist', 'teeth', 'molar', 'dental'],
  tone: 'white',
  body,
  shine: [28, 25, -45],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'white', 0.3, 0.2)}"/>
      <path d="M43 19 C45.5 23 50.5 23 53 19" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M48 58 C48 52 48 46 47 41" stroke="#8C83AD" stroke-opacity=".25" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  },
};
