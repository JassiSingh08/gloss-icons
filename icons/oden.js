// Triangle, ball and block on one skewer: konnyaku, fish ball and fish cake. Three separate
// shapes with gaps, so the outline never crosses itself.
const d = require('../src/parts/dish');
const ANGLE = 16;
const AT = [48, 47];
const tri = 'M-2.6 -38 Q0 -42 2.6 -38 L16 -19 Q17.6 -16 14 -16 L-14 -16 Q-17.6 -16 -16 -19 Z';
const ball = d.ellipse(0, -1.5, 13.4, 13.4);
const block = 'M-11.5 13.5 L11.5 13.5 Q14.5 13.5 14.5 16.5 L14.5 36 Q14.5 39 11.5 39 L-11.5 39 Q-14.5 39 -14.5 36 L-14.5 16.5 Q-14.5 13.5 -11.5 13.5 Z';
module.exports = {
  id: 'oden',
  name: 'Oden',
  emoji: '🍢',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['oden', 'skewer', 'japanese', 'winter', 'street food'],
  tone: 'brown',
  body: [tri, ball, block].map((p) => d.place(p, ANGLE, AT)),
  shine: [...d.placePt(-6, -7, ANGLE, AT), -45],
  shineSize: [4.5, 2.2],
  draw(c) {
    const konnyaku = c.radial('konnyaku', 'slate', 0.35, 0.3);
    const fish = c.radial('a', 'brown', 0.35, 0.3);
    const cake = c.radial('cake', 'sand', 0.35, 0.3);
    const speck = (x, y) => `<circle cx="${x}" cy="${y}" r=".9" fill="#1E2A3D" opacity=".6"/>`;
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        <path d="M0 -47 L0 45" stroke="#5C4420" stroke-opacity=".6" stroke-width="4.4" stroke-linecap="round"/>
        <path d="M0 -47 L0 45" stroke="#E9C98F" stroke-width="2.6" stroke-linecap="round"/>
      </g>
      <path d="${d.place(tri, ANGLE, AT)}" fill="${konnyaku}"/>
      <path d="${d.place(ball, ANGLE, AT)}" fill="${fish}"/>
      <path d="${d.place(block, ANGLE, AT)}" fill="${cake}"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        ${speck(-4, -22)}${speck(3, -26)}${speck(6, -20)}${speck(-1, -31)}${speck(-7, -19)}
        <path d="M-14.5 21.5 L14.5 21.5 M-14.5 31 L14.5 31" stroke="#8A6A30" stroke-opacity=".6" stroke-width="1.6"/>
      </g>`;
  },
};
