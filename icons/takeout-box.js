// A folded paper pail with a wire handle: the peaked flaps and tapered sides are the tell.
const body = 'M20 40 L27.5 23 Q28.5 21 31 21.6 L48 27.5 L65 21.6 Q67.5 21 68.5 23 L76 40 L68.5 81.5 Q68 84 65 84 L31 84 Q28 84 27.5 81.5 Z';
module.exports = {
  id: 'takeout-box',
  name: 'Takeout Box',
  emoji: '🥡',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['takeout', 'takeaway', 'chinese food', 'noodles', 'night in'],
  tone: 'white',
  body,
  shine: [27, 52, -80],
  shineSize: [6, 2.4],
  draw(c) {
    const box = c.linear('a', 'white', [0, 0, 1, 0], 0, 2);
    const flap = c.linear('flap', 'white', [0, 0, 0, 1], 0, 1);
    const back = c.linear('back', 'white', [0, 0, 0, 1], 2, 3);
    const red = c.radial('red', 'red', 0.35, 0.3);
    return `<path d="M24 38 C22 8 74 8 72 38" stroke="#3A3E52" stroke-opacity=".6" stroke-width="3.4" fill="none" stroke-linecap="round"/>
      <path d="M24 38 C22 8 74 8 72 38" stroke="#D9DCE8" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="${body}" fill="${box}"/>
      <path d="M28 23 L48 30 L68 23 L76 40 L20 40 Z" fill="${back}" opacity=".55"/>
      <path d="M20 40 L27.5 23 Q28.5 21 31 21.6 L48 27.5 L44 40 Z" fill="${flap}"/>
      <path d="M76 40 L68.5 23 Q67.5 21 65 21.6 L48 27.5 L52 40 Z" fill="${flap}" opacity=".85"/>
      <path d="M20 40 L76 40" stroke="#8C83AD" stroke-opacity=".7" stroke-width="1.2"/>
      <path d="M48 41 L48 84" stroke="#8C83AD" stroke-opacity=".35" stroke-width="1"/>
      <circle cx="48" cy="60" r="10" fill="${red}"/>
      <circle cx="48" cy="60" r="6.4" fill="none" stroke="#FFF4D6" stroke-width="1.6"/>
      <path d="M44.5 61.5 C46 57 50 57 51.5 61.5" stroke="#FFF4D6" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
  },
};
