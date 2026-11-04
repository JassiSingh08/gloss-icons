// Onigiri: a rounded triangle of white rice with a band of nori across the bottom.
const body = 'M48 13 C54 13 58 17 62 23 L80 55 C86 66 82 80 68 82 L28 82 C14 80 10 66 16 55 L34 23 C38 17 42 13 48 13 Z';
module.exports = {
  id: 'rice-ball',
  name: 'Rice Ball',
  emoji: '🍙',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['onigiri', 'rice ball', 'japanese', 'lunch', 'snack'],
  tone: 'white',
  body,
  shine: [36, 30, -58],
  draw(c) {
    c.def(`<radialGradient id="${c.id('rice')}" cx="0.36" cy="0.25" r="0.9"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.45" stop-color="#F7F5FF"/><stop offset="0.8" stop-color="#D8D2EE"/><stop offset="1" stop-color="#8C83AD"/></radialGradient>`);
    c.def(`<clipPath id="${c.id('cut')}"><path d="${body}"/></clipPath>`);
    const nori = c.linear('nori', 'black', [0, 0, 1, 0], 1, 3);
    const g = (x, y, a) => `<ellipse cx="${x}" cy="${y}" rx="1.9" ry="1.1" fill="#C9C2E2" transform="rotate(${a} ${x} ${y})"/>`;
    return `<path d="${body}" fill="url(#${c.id('rice')})"/>
      ${g(45, 24, 20)}${g(52, 30, -30)}${g(40, 36, 50)}${g(58, 40, 10)}${g(30, 52, -20)}${g(66, 50, 40)}${g(48, 44, -60)}${g(24, 64, 30)}${g(72, 64, -40)}${g(36, 47, 0)}
      <g clip-path="url(#${c.id('cut')})">
        <path d="M34 57 Q34 55 36 55 L60 55 Q62 55 62 57 L62 90 L34 90 Z" fill="${nori}"/>
        <path d="M38 60 L38 84 M44 58 L44 84 M52 58 L52 84 M58 60 L58 84" stroke="#3A5A44" stroke-opacity=".55" stroke-width="1"/>
      </g>`;
  },
};
