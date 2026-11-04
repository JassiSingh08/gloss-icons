// A pale block on a blue dish, a curl shaved off the top: butter, not the cheese wedge.
const d = require('../src/parts/dish');
const body = 'M16 47 L54 35 Q56 34.4 58 35.2 L80 43.5 L80 62 Q80 63.5 78.6 64 L42 77 Q40 77.6 38 76.8 L16 66 Z';
module.exports = {
  id: 'butter',
  name: 'Butter',
  emoji: '🧈',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['butter', 'dairy', 'baking', 'toast', 'breakfast'],
  tone: 'yellow',
  body,
  shine: [30, 44, -18],
  shineSize: [6, 2.4],
  draw(c) {
    c.def(`<linearGradient id="${c.id('top')}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFDE8"/><stop offset="1" stop-color="#FFEC9A"/></linearGradient>`);
    c.def(`<linearGradient id="${c.id('front')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE985"/><stop offset="1" stop-color="#E6C04A"/></linearGradient>`);
    c.def(`<linearGradient id="${c.id('side')}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0CC5A"/><stop offset="1" stop-color="#B8901E"/></linearGradient>`);
    const dish = c.radial('dish', 'sky', 0.35, 0.2);
    return `<path d="${d.ellipse(48, 72, 38, 12)}" fill="${dish}" ${d.edge('#0A3A6B', 1.2, 0.55)}/>
      <path d="${d.ellipse(48, 71, 31, 8.5)}" fill="#C9ECFF" opacity=".6"/>
      <path d="${body}" fill="url(#${c.id('front')})"/>
      <path d="M40 58.5 L80 43.5 L80 62 Q80 63.5 78.6 64 L42 77 Q40 77.6 40 76 Z" fill="url(#${c.id('side')})"/>
      <path d="M16 47 L54 35 Q56 34.4 58 35.2 L80 43.5 L40 58.5 Z" fill="url(#${c.id('top')})"/>
      <path d="M16.5 47.2 L40 58.5 L79.5 43.7" stroke="#FFFDE8" stroke-width="1.3" fill="none" stroke-linejoin="round"/>
      <path d="M44 42 C40 36 48 32 54 36 C58 39 54 44 50 42 C47 40.5 50 38 52 39" stroke="#C9A020" stroke-opacity=".6" stroke-width="3.4" fill="none" stroke-linecap="round"/>
      <path d="M44 42 C40 36 48 32 54 36 C58 39 54 44 50 42 C47 40.5 50 38 52 39" stroke="#FFF5C0" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
  },
};
