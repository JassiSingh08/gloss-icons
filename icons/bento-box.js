// A black lacquer box seen from above, red inside, with rice, salmon, rolled omelette and greens.
const body = 'M18 24 L78 24 Q82 24 82.6 28 L84 60 L84 76 Q84 80 80 80 L16 80 Q12 80 12 76 L12 60 L13.4 28 Q14 24 18 24 Z';
module.exports = {
  id: 'bento-box',
  name: 'Bento Box',
  emoji: '🍱',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['bento', 'lunch', 'japanese', 'lunchbox', 'rice'],
  tone: 'black',
  body,
  shine: [19, 40, -80],
  shineSize: [5, 2.2],
  draw(c) {
    const box = c.linear('a', 'black', [0, 0, 0, 1], 0, 2);
    const rimTop = c.linear('rim', 'black', [0, 0, 1, 1], 0, 1);
    const inside = c.linear('inside', 'red', [0, 0, 0, 1], 2, 1);
    const rice = c.radial('rice', 'white', 0.35, 0.3);
    const salmon = c.linear('salmon', 'orange', [0, 0, 1, 1], 0, 1);
    const egg = c.linear('egg', 'yellow', [0, 0, 0, 1], 0, 2);
    const plum = c.radial('plum', 'red', 0.35, 0.3);
    const broc = c.radial('broc', 'green', 0.35, 0.3);
    return `<path d="${body}" fill="${box}"/>
      <path d="M18 24 L78 24 Q82 24 82.6 28 L84.4 66 L11.6 66 L13.4 28 Q14 24 18 24 Z" fill="${rimTop}"/>
      <path d="M20 28 L76 28 L80 63 L16 63 Z" fill="${inside}"/>
      <g transform="translate(0 28) scale(1 1.2) translate(0 -28)">
      <path d="M21.5 30.5 L45.5 30.5 L45.5 55 L19 55 Z" fill="${rice}"/>
      <g stroke="#D8D2EE" stroke-width="1.3" stroke-linecap="round"><path d="M25 35 l2 -1 M33 34 l2 1 M40 37 l1.5 -1.5 M24 46 l2 1 M30 50 l2 -1 M38 49 l1.5 1.5 M42 44 l1 -2"/></g>
      <circle cx="33" cy="42" r="4.6" fill="${plum}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>
      <path d="M50.5 30.5 L74 30.5 L75.2 40.5 L50.5 40.5 Z" fill="${salmon}"/>
      <path d="M55 31 C56 34 56 37 55 40 M61 31 C62 34 62 37 61 40 M67 31 C68 34 68 37 67 40" stroke="#FFE2C4" stroke-width="1.3" fill="none"/>
      <path d="M50.5 45 L62 45 L62 55 L50.5 55 Z" fill="${egg}" stroke="#6B4A00" stroke-opacity=".45" stroke-width="1"/>
      <path d="M50.5 48.5 L62 48.5 M50.5 52 L62 52" stroke="#D9A400" stroke-width="1"/>
      <circle cx="68" cy="47" r="4" fill="${broc}"/><circle cx="73" cy="49.5" r="3.6" fill="${broc}"/><circle cx="68.5" cy="52" r="3.4" fill="${broc}"/>
      <path d="M45.5 28 L45.5 57 M48 28 L48 57 M48 42.7 L77.5 42.7" stroke="#141420" stroke-width="2.2"/>
      </g>
      <path d="M12 66.5 L84 66.5" stroke="#9A9AB0" stroke-opacity=".7" stroke-width="1.2"/>
      <path d="M20 73.5 L76 73.5" stroke="#C9302C" stroke-width="2" stroke-linecap="round"/>`;
  },
};
