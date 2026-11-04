const k = require('../src/parts/critter');
// A round blue whale breaching left, flukes up behind, blowing a forked spout from its back.
const body = 'M12 60 C12 44 26 36 44 36 C60 36 70 44 74 54 L82 44 C84 40 90 40 90 44 C90 48 86 52 84 54 C88 54 92 58 90 62 C86 64 80 62 76 60 C72 74 58 82 42 82 C24 82 12 74 12 60 Z';
module.exports = {
  id: 'spouting-whale',
  name: 'Spouting Whale',
  emoji: '🐳',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['whale', 'spout', 'ocean', 'sea', 'blow'],
  tone: 'blue',
  body,
  shine: [26, 45, -35],
  draw(c) {
    const spray = c.radial('spray', 'sky', 0.4, 0.3);
    const ink = '#001E4D';
    return `${k.part(c, 'M42 37 C41 29 37 23 29 20 C25 19 22 22 24 25 C30 24 35 28 38 37 Z', spray, 'sky')}
      ${k.part(c, 'M45 37 C46 29 50 23 58 20 C62 19 65 22 63 25 C57 24 52 28 49 37 Z', spray, 'sky')}
      ${k.part(c, 'M42.5 36 C42 28 42 22 43.5 15 C45 22 45 28 44.5 36 Z', spray, 'sky')}
      <circle cx="22" cy="14" r="2.2" fill="${spray}"/><circle cx="66" cy="15" r="2.2" fill="${spray}"/><circle cx="35" cy="12" r="1.6" fill="${spray}"/><circle cx="54" cy="11" r="1.6" fill="${spray}"/>
      <path d="${body}" fill="${c.radial('a', 'blue', 0.35, 0.25)}"/>
      <path d="M14 66 C20 76 32 81 44 81 C56 81 66 76 72 68 C58 72 30 72 14 66 Z" fill="${c.ramp('sky')[0]}" opacity=".85"/>
      ${k.line('M26 73 L58 73 M34 77 L52 77', '#1F7FD1', 1.2, 0.6)}
      ${k.part(c, 'M40 66 C46 68 52 72 54 78 C48 78 42 74 40 66 Z', c.radial('fin', 'blue', 0.5, 0.3), 'blue')}
      ${k.legs('M15 62 C20 64.5 26 64.5 31 62.5', ink, 2)}
      ${k.eye(28, 56, 2.8, ink)}`;
  },
};
