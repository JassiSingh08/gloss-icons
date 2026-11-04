const v = require('../src/parts/vehicle');
const DEG = -12;
const AT = [48, 54];
const deck = 'M-28 -10 L28 -10 C36 -10 40 -6 40 0 C40 6 36 10 28 10 L-28 10 C-36 10 -40 6 -40 0 C-40 -6 -36 -10 -28 -10 Z';
const body = v.place(deck, DEG, AT);
module.exports = {
  id: 'skateboard',
  name: 'Skateboard',
  emoji: '🛹',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['skate', 'board', 'trick', 'street', 'park'],
  tone: 'teal',
  body,
  shine: (() => { const [x, y] = v.point(-30, -5, DEG, AT); return [x, y, DEG - 20]; })(),
  shineSize: [5, 1.8],
  draw(c) {
    const paint = c.linear('a', 'teal', [0, 0, 0.3, 1], 0, 2);
    const flame = c.linear('fl', 'gold', [0, 0, 1, 0], 0, 1);
    const truck = c.linear('truck', 'silver', [0, 0, 0, 1], 0, 2);
    const wheelFill = c.radial('w', 'cream', 0.35, 0.3);
    const wh = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="5" ry="6" fill="${wheelFill}" stroke="#5C4420" stroke-opacity=".6" stroke-width="1.1"/>`;
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${DEG})">
        ${wh(-30, 10)}${wh(22, 10)}
        <path d="M-32 8 L-18 8 L-20 15 L-30 15 Z M20 8 L34 8 L32 15 L22 15 Z" fill="${truck}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1"/>
        <path d="${v.place(deck, 0, [0, 4.5])}" fill="#003A33"/>
        ${wh(-22, 15)}${wh(30, 15)}
        <path d="${deck}" fill="${paint}"/>
        <path d="M-14 -7 L6 -7 L-1 -1 L12 -1 L-8 8 L-2 2 L-16 2 Z" fill="${flame}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1"/>
        <path d="M-36 -2 L-24 -2 M-36 2 L-24 2 M24 -2 L36 -2 M24 2 L36 2" stroke="#F7F5FF" stroke-width="1.6" stroke-linecap="round" opacity=".8"/>
        <circle cx="-30" cy="-5" r="1" fill="#003A33" opacity=".6"/><circle cx="-30" cy="5" r="1" fill="#003A33" opacity=".6"/>
        <circle cx="30" cy="-5" r="1" fill="#003A33" opacity=".6"/><circle cx="30" cy="5" r="1" fill="#003A33" opacity=".6"/>
      </g>`;
  },
};
