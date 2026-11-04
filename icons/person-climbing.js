const F = require('../src/parts/figure');

// Clinging to a rock face: one hand over the top, a foot on a hold, the other leg hanging free.
const ROCK = 'M12 84 L14 54 C11 40 17 24 27 15 C33 10 41 10 45 14 L49 26 C52 36 48 46 52 56 C55 64 51 74 53 84 Z';
module.exports = {
  id: 'person-climbing',
  name: 'Person Climbing',
  emoji: '🧗',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['climbing', 'climber', 'bouldering', 'rock', 'mountain'],
  tone: 'orange',
  ...F.shineOf(22, 30, 12),
  ...F.build((c) => {
    const rock = c.radial('rock', 'sand', 0.3, 0.2);
    const sd = c.ramp('sand');
    const hold = (x, y, pal) => `<ellipse cx="${x}" cy="${y}" rx="3.6" ry="2.6" fill="${c.ramp(pal)[1]}" stroke="${c.ramp(pal)[3]}" stroke-width="1"/>`;
    const rockArt = `<path d="${ROCK}" fill="${rock}"/>
      <path d="M22 30 C28 34 30 42 26 50 M18 62 C26 64 34 70 36 80 M34 18 C38 22 40 26 38 32" stroke="${sd[3]}" stroke-opacity=".35" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      ${hold(27, 42, 'teal')}${hold(33, 72, 'pink')}`;
    return {
      art: rockArt + F.person(c, {
        head: [64, 26], r: 12, face: F.face.focus({ dx: -5 }),
        hat: `<path d="M18 46 C16 22 30 10 48 10 C66 10 80 22 78 46 L72 44 C70 30 60 24 48 24 C36 24 26 30 24 44 Z" fill="${c.radial('helm', 'orange', 0.3, 0.2)}" stroke="#6B0F00" stroke-width="2.6" stroke-linejoin="round"/>`,
        torso: [[62, 46], [62, 59]], tw: [9.5, 8], top: 'orange', bottom: 'slate', shoes: 'black',
        armB: [[57, 41], [52, 30], [46, 17]],
        legB: [[58, 62], [50, 65], [52, 75]], footB: [48, 76],
        legF: [[65, 62], [69, 71], [67, 80]], footF: [70, 83],
        armF: [[64, 42], [56, 49], [50, 47]],
      }),
    };
  }),
};
