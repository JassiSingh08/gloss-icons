const body = 'M48 25 A30 30 0 1 1 47.99 25 Z';
module.exports = {
  id: 'yo-yo',
  name: 'Yo-Yo',
  emoji: '🪀',
  group: 'Activities',
  subgroup: 'game',
  tags: ['yo-yo', 'toy', 'spin', 'trick', 'retro'],
  tone: 'purple',
  body,
  shine: [30, 36, -40],
  draw(c) {
    return `<path d="M48 55 C46 42 52 24 48 14 C46 9 50 6 53 8 C56 10 53 14 50 13" fill="none" stroke="#F7F5FF" stroke-width="1.6" stroke-linecap="round"/>
      <path d="${body}" fill="${c.radial('a', 'purple', 0.32, 0.25)}"/>
      <circle cx="48" cy="55" r="21" fill="${c.radial('in', 'magenta', 0.7, 0.75)}" stroke="#1A0040" stroke-opacity=".5" stroke-width="1.2"/>
      <circle cx="48" cy="55" r="21" fill="none" stroke="#C58BFF" stroke-opacity=".5" stroke-width="1" transform="translate(-.6 -.8)"/>
      <circle cx="48" cy="55" r="7.5" fill="${c.radial('hub', 'silver', 0.3, 0.25)}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1"/>
      <path d="M48 55 C46 46 50 34 48.6 25" fill="none" stroke="#F7F5FF" stroke-width="1.6" stroke-linecap="round"/>`;
  },
};
