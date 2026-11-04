const k = require('../src/parts/critter');
// A cricket in profile facing left: long body, folded wings, the big jumping leg cocked high, feelers swept back.
const body = 'M12 54 C12 44 20 40 30 40 C42 40 50 42 58 44 C72 46 84 50 88 58 C90 63 85 67 78 67 L40 67 C30 67 24 66 20 64 C14 62 12 58 12 54 Z';
module.exports = {
  id: 'cricket',
  name: 'Cricket',
  emoji: '🦗',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['cricket', 'grasshopper', 'chirp', 'insect', 'jump'],
  tone: 'olive',
  body,
  shine: [24, 45, -20],
  shineSize: [5.5, 2.4],
  draw(c) {
    const ink = '#1A2003';
    const leg = '#5A6B14';
    const thigh = c.radial('thigh', 'olive', 0.3, 0.2);
    return `${k.legs('M17 43 C26 20 52 8 90 9 M20 42 C32 26 56 18 88 21', leg, 1.8)}
      ${k.legs('M26 64 L22 74 L16 84 M36 66 L36 76 L30 85', leg, 3.2)}
      ${k.legs('M80 33 L90 84 M90 84 L84 85.5', leg, 3.2)}
      <path d="${body}" fill="${c.radial('a', 'olive', 0.3, 0.25)}"/>
      <path d="M34 45 C50 43 70 46 86 56 C74 61 54 61 36 59 Z" fill="${c.radial('wing', 'olive', 0.7, 0.8)}" stroke="#273005" stroke-opacity=".5" stroke-width="1.1"/>
      ${k.line('M40 52 L80 56', '#273005', 1.2, 0.5)}
      ${k.part(c, 'M50 60 C52 46 64 32 76 28 C82 27 85 32 81 36 C73 44 65 54 61 62 C59 66 50 66 50 60 Z', thigh, 'olive')}
      ${k.line('M56 58 L74 36', '#273005', 1.2, 0.45)}
      ${k.legs('M13 56 L10 61 M15 59 L13 63', ink, 2.2)}
      ${k.eye(21, 48, 3, ink)}`;
  },
};
