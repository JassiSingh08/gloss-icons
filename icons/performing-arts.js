const ball = require('../src/parts/ball');

const MASK = 'M14 22 C27 15 47 15 60 22 C62 40 57 60 37 70 C17 60 12 40 14 22 Z';
const FRONT = { s: 1.1, ox: 37, oy: 42, x: 36, y: 52 };
const BACK = { deg: 18, ox: 37, oy: 42, x: 62, y: 38 };
const body = ball.turn(MASK, FRONT);

module.exports = {
  id: 'performing-arts',
  name: 'Performing Arts',
  emoji: '🎭',
  group: 'Activities',
  subgroup: 'arts & crafts',
  tags: ['theatre', 'drama', 'masks', 'comedy', 'tragedy', 'stage'],
  tone: 'gold',
  body,
  shine: [...ball.turnPt([22, 27], FRONT), -30],
  shineSize: [6, 2.2],
  draw(c) {
    const ink = '#12002E';
    const back = ball.turn(MASK, BACK);
    const sad = ball.turn('M24 33 Q30 38 34 34 L33 39 Q28 41 24 38 Z M40 34 Q44 38 50 33 L50 38 Q46 41 41 39 Z M28 56 Q37 48 46 56 Q37 52 28 56 Z', BACK);
    const sadBrows = ball.turn('M23 29 L33 31 M41 31 L51 29', BACK);
    return `<path d="${back}" fill="${c.radial('back', 'navy', 0.3, 0.2)}" stroke="#080C3D" stroke-opacity=".55" stroke-width="1.3"/>
      <path d="${sad}" fill="${ink}"/>
      <path d="${sadBrows}" stroke="${ink}" stroke-width="2" stroke-linecap="round"/>
      <path d="${body}" fill="${c.radial('a', 'gold', 0.32, 0.22)}"/>
      <g transform="translate(36 52) scale(1.1) translate(-37 -42)">
      <path d="M22 35 Q27 29 33 35 Q27 33 22 35 Z M41 35 Q47 29 52 35 Q47 33 41 35 Z" fill="${ink}" stroke="${ink}" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M21 26 Q27 23 33 26 M41 26 Q47 23 53 26" fill="none" stroke="#5E3A00" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M25 46 Q37 62 49 46 Q37 52 25 46 Z" fill="${ink}" stroke="${ink}" stroke-width="1.6" stroke-linejoin="round"/>
      </g>`;
  },
};
