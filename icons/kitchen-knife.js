const g = require('../src/parts/glass');
const ANGLE = -40;
const AT = [47, 50];
const knife = 'M-40 -5 Q-44 -5 -44 -1 L-44 2.5 Q-44 6.5 -40 6.5 L-14 5.5 L-11 11 C10 11 30 6 43 -6.5 L-11 -7.5 L-14 -5 Z';
const handle = 'M-40 -5 Q-44 -5 -44 -1 L-44 2.5 Q-44 6.5 -40 6.5 L-14 5.5 L-14 -5 Z';
module.exports = {
  id: 'kitchen-knife',
  name: 'Kitchen Knife',
  emoji: '🔪',
  group: 'Food & Drink',
  subgroup: 'dishware',
  tags: ['knife', 'chef', 'cooking', 'kitchen', 'cut'],
  tone: 'silver',
  body: g.place(knife, ANGLE, AT),
  shine: [...g.placePt(2, -3, ANGLE, AT), ANGLE],
  shineSize: [7, 1.6],
  draw(c) {
    const blade = c.linear('a', 'silver', [0, 0, 0, 1], 0, 2);
    const grip = c.linear('grip', 'black', [0, 0, 0, 1], 0, 2);
    const rivet = c.radial('rivet', 'silver', 0.35, 0.3);
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        <path d="${knife}" fill="${blade}"/>
        <path d="M-11 11 C10 11 30 6 43 -6.5 C30 2 10 6.5 -11 7 Z" fill="#F4F5FA"/>
        <path d="M-11 -7.5 L-11 11" stroke="#3A3E52" stroke-opacity=".45" stroke-width="1.2"/>
        <path d="${handle}" fill="${grip}"/>
        <path d="M-40 -2.5 L-17 -3" stroke="#9A9AB5" stroke-opacity=".6" stroke-width="1.2" stroke-linecap="round"/>
        <circle cx="-36" cy="0.8" r="1.7" fill="${rivet}"/><circle cx="-28" cy="0.6" r="1.7" fill="${rivet}"/><circle cx="-20" cy="0.4" r="1.7" fill="${rivet}"/>
      </g>`;
  },
};
