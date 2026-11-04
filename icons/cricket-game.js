const ball = require('../src/parts/ball');
const { turn: xform, turnPt: at } = ball;

const T = { deg: 34, s: 1.08, x: 44, y: 46, ox: 48, oy: 46 };
const body = xform('M45 8 Q48 6.5 51 8 L51 30 Q57 31.5 57 36 L57 80 Q57 85 52 85 L44 85 Q39 85 39 80 L39 36 Q39 31.5 45 30 Z', T);
const b = ball.make(70, 74, 10, { x: 20, y: 0, z: -30 });

module.exports = {
  id: 'cricket-game',
  name: 'Cricket Game',
  emoji: '🏏',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['cricket', 'bat', 'wicket', 'test match', 'sport'],
  tone: 'sand',
  body,
  shine: [...at([43, 44], T), -56],
  shineSize: [6, 2.4],
  draw(c) {
    const wood = c.linear('a', 'sand', [0, 0, 1, 1], 0, 2);
    const grip = c.linear('grip', 'black', [0, 0, 1, 0], 0, 2);
    const seam = ball.ring([0, 1, 0], 0, 48);
    return `<path d="${body}" fill="${wood}"/>
      <path d="${xform('M45 8 Q48 6.5 51 8 L51 29 L45 29 Z', T)}" fill="${grip}"/>
      <path d="${xform('M45 12 L51 13.5 M45 17 L51 18.5 M45 22 L51 23.5', T)}" stroke="#E3120B" stroke-width="1.6"/>
      <path d="${xform('M48 38 L48 80', T)}" stroke="#B08A4E" stroke-opacity=".6" stroke-width="1.4" stroke-linecap="round"/>
      <path d="${xform('M41 44 L41 79', T)}" stroke="#FFF4D6" stroke-opacity=".7" stroke-width="1.6" stroke-linecap="round"/>
      <path d="${b.body}" fill="${b.fill(c, 'ball', 'red')}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>
      <g ${b.clip(c)} fill="none" stroke-linecap="round">
        <path d="${b.line(seam)}" stroke="#FFF9EC" stroke-opacity=".9" stroke-width="1.3"/>
        <path d="${b.stitches(seam, 2, 0.14)}" stroke="#FFF9EC" stroke-opacity=".7" stroke-width=".8"/>
      </g>
      <ellipse cx="66.5" cy="69.5" rx="2.6" ry="1.4" fill="#fff" opacity=".85" transform="rotate(-40 66.5 69.5)"/>`;
  },
};
